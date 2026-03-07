import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'wp-export.xml');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: '❌ Archivo wp-export.xml no encontrado en la raíz del proyecto.' }, { status: 404 });
    }

    const xmlData = fs.readFileSync(filePath, 'utf-8');

    // Regex to extract <item> blocks
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    const posts = [];

    while ((match = itemRegex.exec(xmlData)) !== null) {
      const itemContent = match[1];

      // Extraction helpers
      const extract = (regex: RegExp) => {
        const result = regex.exec(itemContent);
        return result ? result[1].trim() : '';
      };

      const extractCdata = (regex: RegExp) => {
         let result = extract(regex);
         if (result.startsWith('<![CDATA[')) {
            result = result.replace(/^<!\[CDATA\[/i, '').replace(/\]\]>$/i, '');
         }
         return result;
      }

      const title = extractCdata(/<title>([\s\S]*?)<\/title>/);
      const pubDateStr = extract(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const content = extractCdata(/<content:encoded>([\s\S]*?)<\/content:encoded>/);
      const excerpt = extractCdata(/<excerpt:encoded>([\s\S]*?)<\/excerpt:encoded>/);
      const wpPostName = extractCdata(/<wp:post_name>([\s\S]*?)<\/wp:post_name>/);
      const wpStatus = extractCdata(/<wp:status>([\s\S]*?)<\/wp:status>/);
      const postType = extractCdata(/<wp:post_type>([\s\S]*?)<\/wp:post_type>/);
      const categoryName = extractCdata(/<category domain="category" nicename="[^"]*">([\s\S]*?)<\/category>/);

      // Only import "post" types (skip pages, attachments, nav_menu_item, etc.)
      if (postType === 'post' && title) {
        posts.push({
          title,
          slug: wpPostName || title.toLowerCase().replace(/[\s\W-]+/g, '-'),
          contentHtml: content,
          excerpt,
          publishedDate: new Date(pubDateStr).toISOString(),
          status: wpStatus === 'publish' ? 'publish' : 'draft',
          category: categoryName || 'Sin Categoria',
        });
      }
    }

    const payload = await getPayload({ config: configPromise });

    let successCount = 0;
    let errorCount = 0;
    const logs = [];

    for (const post of posts) {
      try {
        const existing = await payload.find({
          collection: 'posts',
          where: { slug: { equals: post.slug } },
        });

        const dataToSave = {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || post.contentHtml?.substring(0, 150),
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,
                  children: [
                    {
                      mode: 'normal',
                      text: post.contentHtml,
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                },
              ],
            },
          },
          publishedDate: post.publishedDate,
          status: post.status as any,
          category: post.category,
        };

        if (existing.totalDocs > 0) {
          // Update the existing post so the new schema is applied
          await payload.update({
            collection: 'posts',
            id: existing.docs[0].id,
            data: dataToSave
          });
          logs.push(`🔄 Actualizado post existente: ${post.title}`);
          successCount++;
          continue;
        }

        await payload.create({
          collection: 'posts',
          data: dataToSave
        });
        
        successCount++;
        logs.push(`✅ Importado: ${post.title}`);
      } catch (error: any) {
        logs.push(`❌ Error importando ${post.title}: ${error.message}`);
        errorCount++;
      }
    }

    return NextResponse.json({
      message: 'Migración finalizada',
      stats: {
        totalFound: posts.length,
        imported: successCount,
        errors: errorCount
      },
      logs
    });

  } catch (error: any) {
    return NextResponse.json({ error: 'Ha ocurrido un problema crítico', details: error.message }, { status: 500 });
  }
}
