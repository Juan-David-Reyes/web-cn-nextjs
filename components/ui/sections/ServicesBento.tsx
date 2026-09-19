import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ServiceData {
  title?: string | null;
  description?: string | null;
  iconType?: 'code' | 'wordpress' | 'chart' | 'security' | 'pen' | null;
  href?: string | null;
  colorScheme?: 'information' | 'purple' | 'emerald' | 'orange' | 'pink' | 'default';
}

interface ServicesBentoProps {
  data?: ServiceData[] | null;
}

const fallbackServices: ServiceData[] = [
  {
    title: "Diseño y Desarrollo Web",
    description: "Creamos sitios web a medida, optimizados para conversiones y con diseños pixel-perfect que reflejan la identidad de tu marca.",
    iconType: 'code' as const,
    href: "/servicios/diseno-web",
    colorScheme: 'information',
  },

  {
    title: "CRO & Optimizaciones",
    description: "Mejoramos la tasa de conversión y maximizamos el rendimiento técnico (Core Web Vitals) para superar a la competencia.",
    iconType: 'chart' as const,
    href: "/servicios/cro-optimizacion",
    colorScheme: 'emerald',
  },
  {
    title: "Auditoría",
    description: "Analizamos tu sitio web enfocándonos en SEO técnico, rendimiento, seguridad y usabilidad profunda para detectar oportunidades.",
    iconType: 'security' as const,
    href: "/servicios/auditorias",
    colorScheme: 'orange',
  },
  {
    title: "Product Design",
    description: "Diseñamos interfaces de usuario y experiencias digitales intuitivas y enfocadas en retener al usuario final.",
    iconType: 'pen' as const,
    href: "/servicios/product-design",
    colorScheme: 'pink',
  }
];

const getIcon = (type?: string | null) => {
  switch (type) {
    case 'wordpress':
      return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 256 256" className="w-[50px] h-[50px]"><path d="M224.49,152.49l-61.66-61.66A64.13,64.13,0,0,0,168,64a63.78,63.78,0,0,0-13.88-39.69,8,8,0,0,0-11-2.1L114.3,40.45l-4.75-4.75a8,8,0,0,0-11.31,11.31L113.85,62.6a8,8,0,0,0,.69,11L88,99.85,73.15,85A8,8,0,0,0,62.6,84.34l-15.6,15.6a8,8,0,0,0-2.1,11A63.78,63.78,0,0,0,64,168a64.13,64.13,0,0,0,26.83-5.83l61.66,61.66a24,24,0,0,0,34,0L224.49,186.5a24,24,0,0,0,0-34.01Z"></path></svg>;
    case 'chart':
      return <Image src="/images/icon-services/optimizacion-web.svg" alt="CRO y Optimización" width={50} height={50} className="w-[50px] h-[50px]" />;
    case 'security':
      return <Image src="/images/icon-services/auditorias.svg" alt="Auditorías" width={50} height={50} className="w-[50px] h-[50px]" />;
    case 'pen':
      return <Image src="/images/icon-services/diseno-ux-ui.svg" alt="Product Design" width={50} height={50} className="w-[50px] h-[50px]" />;
    case 'code':
    default:
      return <Image src="/images/icon-services/web-design.svg" alt="Diseño y Desarrollo Web" width={50} height={50} className="w-[50px] h-[50px]" />;
  }
};


const getCardStyles = (colorScheme?: string) => {
  switch (colorScheme) {
    case 'information':
      return {
        wrapper: "bg-[#4d8aff]",
        iconWrapper: "bg-white text-[#0a1c4a]",
        title: "!text-[#0a1c4a]",
        description: "text-[#0a1c4a]/80",
        link: "text-[#0a1c4a]",
      };
    case 'emerald':
      return {
        wrapper: "bg-[#ef5f4d]",
        iconWrapper: "bg-white text-[#330a05]",
        title: "!text-[#330a05]",
        description: "text-[#330a05]/80",
        link: "text-[#330a05]",
      };
    case 'orange':
      return {
        wrapper: "bg-[#ffc506]",
        iconWrapper: "bg-white text-[#3a2a00]",
        title: "!text-[#3a2a00]",
        description: "text-[#3a2a00]/80",
        link: "text-[#3a2a00]",
      };
    case 'pink':
    case 'default':
    default:
      return {
        wrapper: "bg-[#ac66ff]",
        iconWrapper: "bg-white text-[#230545]",
        title: "!text-[#230545]",
        description: "text-[#230545]/80",
        link: "text-[#230545]",
      };
  }
};

const CardTexture = ({ type, colorScheme }: { type?: string | null, colorScheme?: string | null }) => {
  if (type === 'code' && colorScheme === 'information') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 388 500"
        className="absolute inset-0 z-1 pointer-events-none overflow-hidden rounded-[24px] text-[#0a1c4a] opacity-10 transition-opacity duration-500"
      >
        <g clipPath="url(#01_svg__a)">
          <path fill="currentColor" fillOpacity="0.4" d="M476.664-248.338v44.282h-44.282v-44.282zm-44.281 309.97v-44.28h39.89zv44.281l-.002.002h39.829v31.286l-39.835-31.28-44.274 44.274v-44.282zm39.85-177.127v88.563h-39.849v-88.563zm-.007 575.664v44.282l-39.842-44.282zm-.015-322.968v57.278h-39.829zm-.118 145.839v44.282h-39.709V283.04zm-17.568 442.819V748l-22.141-22.141zm0-88.562v44.282h-22.141zm-22.141-132.845v.002h22.141v44.281h-22.141v44.281h-44.282zm-44.289-44.283h-44.276v-44.282H388.1l-44.281-88.562h44.283v88.562h44.279v-44.279h.003l22.141-44.281v44.281h-.003v44.283h-22.138v44.278h-44.283v44.276h-44.283zm44.281 221.41h-44.275v-44.282l44.28 44.281h.001l.001.001h-.001v44.28H299.536zm.005-398.539-44.28-88.561h44.282v88.563l-.001-.001-88.563 44.281V283.04zm-44.28-265.693v-44.278l-44.281-88.561h44.282v88.561h44.281v44.283h-44.282V150.19h-44.282V61.628zM343.82-159.777v-44.281h44.282v44.282l44.281 44.281h-44.282l-44.283-44.282zm-.001 752.788v-88.563h44.282v88.565h-.002l-44.281 44.28v-44.282zM388.1 150.193l-44.283 44.282v-44.282zm-44.281-309.971h-44.281v-88.565zM166.69 637.297v44.282h88.565l-44.281-44.282h44.281l44.281 44.281v-44.281h44.282v44.282h-88.561v44.281h44.281v7.381h-44.281v-7.38H122.411v-44.282h-.002zm88.621-265.692v44.282h88.507v88.562h-44.282v-44.282h44.28l-44.279-44.278-44.28 44.28v-44.282h-88.51v-44.282zm44.282-44.282v44.229l44.225-44.226v44.282h-44.282l.003-.003h-44.228v-44.282zm-44.338-88.564-44.281-44.282h44.281l44.281 44.281v-44.281h.001l-44.28-88.563h44.281v88.563h44.28v44.282h-44.282v44.281h-88.563v-44.281zm88.563-221.41v44.283h-44.282V17.35zm-88.561-88.56v-88.564h44.281v88.561l44.28-44.28v44.282h-88.507v44.281h44.226l-44.281 44.283v-44.283h-88.509v-44.28zm.053 531.38v88.563h44.228v88.564l-44.281-88.564h-44.23v-88.563zm-88.618-619.946v-44.281l88.564 44.283h-44.283v44.28h-44.282v-44.282zm88.563 177.129v88.563h-44.281V17.352zm-44.281 531.381v132.846l-44.282-132.846zm-.003-265.693h.002v44.282h-44.282V238.76zM78.129 17.35v-88.562h44.282V17.35l44.279-44.28v44.28h.002v88.563h44.281v132.846l-44.282-132.844h-.003l-44.279 44.279.002.001H78.129v-44.282l44.28 44.28v-44.28h.001V17.352H78.235v44.28h-44.28V17.35zm132.843-265.693v44.282H166.69zm-88.564 841.357h.001V460.172h44.282v88.563h-.003l-44.278 44.28v44.281H78.129v-88.563zm44.282-265.691v44.282l-44.281-44.282zm0-88.563v44.282h-44.281v-.002l-44.28-44.28zm0-354.254v44.282l-44.281-44.282zM78.129 460.167v-88.562h44.281v88.562l44.279-44.28v44.282H78.235v44.28h-44.28v-44.282zm0-265.69v-44.281h44.282v44.283H78.129v44.28H33.847v-44.282zm44.282-398.535v44.283l-44.282-44.283zm-.001 929.918v7.381H33.847v-7.381zm0-398.538H33.847V283.04zm0-442.817H33.847v-44.282zM78.128 637.297v44.282H33.847v-44.282zm-.001-88.564v44.283h-88.563v-44.283zm0-442.82v44.282h-88.563v-.002l-44.28-44.28zm-.001-309.971-44.281 44.283v-44.283zM33.9 327.323v132.846l-44.282-132.846zm0-442.817V17.352l-44.282-132.846zm-.055 797.071v44.282h-44.281zm-88.563-893.015v7.38h88.562v44.283h-88.56l44.281 132.843h-44.282v-132.843h-.003v-44.283h-22.14v-7.38zm44.283 494.481-44.282 132.845 44.28 44.279h.085v44.282h-44.282v-44.28h-.083V283.043zM-54.718-26.932l44.28 44.28h.086v44.283h-44.282v-44.28h-.084v-.002h-22.141v-44.282zm44.283 221.411v88.563l-44.282-88.563zM-99 504.454l88.562 44.279v.001l.002.001h-.002v44.281l-44.28-44.281H-99zm44.28 177.125v-88.563h44.282v88.563h-44.28v51.662H-99v-51.662zm.002-575.664v88.564H-99v-88.564z"></path>
        </g>
        <defs>
          <clipPath id="01_svg__a">
            <path fill="#fff" d="M0 0h388v500H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }
  
  if (type === 'chart' && colorScheme === 'emerald') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 388 500"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px] text-[#330a05] opacity-10 transition-opacity duration-500"
      >
        <g clipPath="url(#02_svg__a)">
          <path fill="currentColor" fillOpacity="0.5" d="M-477.921-102.002h51.308v51.308h-51.308zM-323.999.61h102.614v-51.305h51.308v-46.218l51.307 46.22h-51.307V.612h-51.308l-102.614 51.306zM-324-96.866h102.615v46.172H-324zm615.693 148.79h102.61L343.001.622V51.92h-51.308V.611L189.079 51.92V.61h102.614v-51.3h-51.305v-.004L189.08-76.348h51.308v.004h51.307v25.647h51.306v-46.16h51.309l-51.309 46.163V.617h51.303v51.307h.004v51.307H343V51.925l-51.306 51.306 51.307 51.306h-51.308zm-307.85-.004h-102.616V.612h51.312l-51.308-51.307h51.309v-46.149h36.251l-36.244 46.157 51.3 51.3h-.004v.004L35.15 51.925h-51.307zM-31.211-96.842h66.364v46.148zm168.98 46.148L35.155.612v-51.307H137.77v-46.008h51.308v46.009H137.77l51.307 102.613h-51.308zm513.079-25.654h25.654l-25.654 25.654zm-51.307 25.66v51.3h-51.308l51.308-51.306-51.308-25.654h51.308v25.656h51.307V103.23zm-205.232-.007v-25.653h51.308v25.653h51.307V.612zM-375.308 51.919h-51.306V.61h51.307v.006L-324-50.69V.617l-51.308 51.308v51.302h-102.616zm872.227 0H394.306V.613h102.615V.62l51.306 51.306h-51.308zm-666.997.005h51.304L-170.081.617h51.308v51.307h.002v51.308h-51.307zm615.696 153.918h102.616v-51.306l51.305-51.305h-51.305V51.924h51.308v102.612l-51.306 51.306h51.306l-153.924 51.307zM189.076 103.164h51.244l-51.24-51.24h51.308v51.307l-.004-.003v51.244h-51.308zm-359.152 51.372h102.614V103.23H35.152V51.924h51.309v51.307h-.001v51.305l-51.308 51.308v-51.308l51.304-51.305-51.304.001v-.001L-67.46 154.537v51.307h-102.615zM-375.308 257.15h-51.306l51.307-102.616V103.23h102.615l-51.306-51.306h51.308v51.308l-.001-.001v51.306h-102.616v51.312H-324v51.307h-51.308zm1026.157 51.311h-51.307v.002l-51.308-51.309h51.308V154.537h51.307v-51.308h8.55v51.308h-8.549v153.922h8.549v102.616h-8.55zM343.001 154.477h102.615V103.23h102.615l-102.615 51.307v51.248H343.001zm-615.691-.005h51.305V103.23l51.308 51.307h-51.306v102.551h-51.307zm359.15-51.241h51.309v102.616H86.461zm153.924 51.241h51.307v102.616h-51.307zm-51.307 256.603H137.77l51.306-102.613v-51.306H137.77v51.307h-.001l-51.307 51.306V257.154h.003l51.304-51.303v-.002h51.308v51.305h51.307l-51.307 51.308v102.553h153.924l-153.924 51.307zM35.152 359.769H-67.46l51.306-51.306H-67.46v-.005h-102.614v-51.309h102.611v-51.3H86.46l-153.92 51.306 51.306 51.306h51.307v51.306h51.308v51.308H35.152zm-513.076-153.92h51.308v51.307zm974.847 102.614h-51.305v.001H343.003v-51.308h102.613v-.002l51.308 51.308v-.001h51.307v51.308H445.616zM343 359.769H240.384v-51.308h102.615l-51.306-51.307h51.308v51.309l-.001-.001v51.181h51.308v51.308H343zm-513.078 0h-102.611v-51.308h102.611l-51.306-51.307h51.308v51.307h.002v51.182h51.303v51.308h-51.307zm-153.919-102.615h51.308l-51.308 51.309zM-324 411.075h-51.308L-324 308.459v102.556h153.924L-324 462.322zm-102.614-102.614h51.307l-51.307 51.308zm974.848 51.306h51.308v51.308h-51.308zm-615.695.005h51.308v102.616h-.002l-51.306 51.305zm513.077 102.617V359.772h51.309v102.614H599.54v51.307H496.925v-51.305h-.002l-51.305 51.304V565h-51.307zm-880.781 51.301h8.551V359.774l51.304 51.304h.003v102.615h-51.307v25.651h-8.551zM599.54 411.08h51.308v51.308zm-461.769 51.306 153.923 51.307L343 462.388v-.1h51.308v51.308h-51.307v.097h-205.23zm-359.155 51.307h-153.923l153.923-51.307v51.304h.004l51.302-51.302v-.1h51.307v51.308h-51.305v.094h.001v25.654h-51.309zm153.924-.001H35.154v-51.306H137.77L35.156 513.692V565H-67.46zm667.001 0h59.858V565h-59.858z"></path>
        </g>
        <defs>
          <clipPath id="02_svg__a">
            <path fill="#fff" d="M0 0h388v500H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === 'security' && colorScheme === 'orange') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 388 500"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px] text-[#3a2a00] opacity-10 transition-opacity duration-500"
      >
        <g clipPath="url(#03_svg__a)">
          <path fill="currentColor" fillOpacity="0.4" d="M-42.422 744.994v-43.955H1.533v43.955zm4.358-263.726 39.596-43.956v43.956zm.04 131.862v-87.911H1.53v87.911zm.007-571.422V-2.248L1.531 41.708zm39.55 395.603v-43.957l.001-.001h-39.536v-87.908H1.533L-38 362.298l39.539 31.05 43.95-43.949v43.955zm-39.418-219.779v-43.955H1.531v43.955zm17.439-439.554V-244l21.978 21.978zm0 87.91v-43.956H1.532zm0 131.862v-43.956H1.53V-2.25zm65.942 43.958h43.946v43.956H45.488l43.954 87.91H45.487v-87.91H1.534v43.953h-.003l-21.977 43.955v-43.955h.002V85.661H1.53V41.708h43.957V-2.24h43.955zM1.534 217.532l43.955 87.91H1.533zh-.002l87.911-43.955v43.955zM1.532-2.249V-90.16h43.956zm.005-175.819H45.49v43.956L1.534-178.068v.001-43.955H133.4zm87.905 835.154v43.954H45.487v-43.955h.001L1.533 613.13h43.954v-87.906H1.533v-43.956H45.49v-43.955h43.955L45.49 481.269v43.955l43.953 87.909h-43.95l43.952 43.953zm.002-571.422V-2.243H45.49v-87.91l43.955-43.955V-2.246H133.4V41.71H89.446L133.4 85.663l43.955-43.955v43.956zM133.4 393.356v-87.91H89.445v131.862H133.4v43.956H89.444v-43.953H45.49v-87.912h.002l43.953-43.953v-43.955H133.4v43.955l43.954 87.91zM89.442 657.088h43.956v87.911zm87.913-791.2L133.4-178.067v43.955l43.954 87.909h43.903v87.911h-43.956v-87.911h-43.903v-87.909H89.444v-43.956h87.911l43.956 43.956zm-44.01 307.69v-43.905l-43.9 43.899v-43.955H133.4l-.005.005h43.906v43.956zm-43.9 439.554v-43.956h43.954zm43.953-835.157v-7.327h43.956v7.327zm43.956 791.201v87.909h-43.955v-87.912h43.902v-43.949h-43.902l43.955-43.956v43.953h87.858v43.955zM309.223 349.4v131.865h-.002l-43.953 43.953v-43.953l-.001-87.908h-43.955v87.905h-43.956v-87.911h43.956l.001-131.86h-43.957l43.956 43.955h-43.956L133.4 261.491v-43.956h87.912v43.956l43.954 131.863h.002l43.953-43.954v-43.955h43.955v43.954h.001v43.955zM177.301 129.622V85.667h87.911v43.955zm87.966-263.734v-43.956h-87.913v-43.956h131.867v43.956h.001zm0 747.244v43.954h-.001v43.954l-87.912-43.955h43.957V613.13h43.955v-43.954l43.956 43.956zM221.311-46.201v-131.867l43.955 131.867zm43.956 307.687-43.955-43.954v-43.955h43.955v-43.955l43.955 43.956h-43.955v43.953h43.955v.001l43.954 43.954zm-43.956 483.513v-43.956h43.957zm87.912-835.157h-.001v43.952h.001v87.912h-43.956v-87.912h.002l43.952-43.953v-43.955h43.955v87.91zM265.268 85.664V41.708h43.956zm43.953 43.958V41.711h43.955v87.911zm.001-351.647v-7.327h87.911v7.327zm0 395.602h87.911v43.955zm0 395.599v-87.911h43.955v87.911zm0 43.954h87.911v43.956zm0 87.91v-43.955l43.955 43.955zm43.849-659.33V-2.246h43.955V41.71zm0 439.554v-43.956h43.955v43.956zm44.062-659.331v43.955h-43.956v-43.956h43.956v-43.954h43.956zm-43.956 483.513v-43.955h43.956v43.955zm.001-351.65V-90.16h87.911v43.956zm0 439.558v-43.955h87.911v.001l43.955 43.954zm.001 307.686 43.956-43.955h87.908l-43.955-131.863h43.956v131.863h.002v43.955zm43.901-527.465V41.708l43.955 131.867zm0 439.554V481.262l43.955 131.867zm44.008-395.6 43.956-131.866-43.953-43.953h-.086V-2.246h43.956v43.954h.083v175.821zm.003 263.735h-.086v-43.956h43.956v43.954h.083v43.956zm-.003-175.822v-87.911l43.956 87.911zm.005-351.646h-.003v-.001l-.001-.001h.001V-90.16l43.954 43.954H529V-2.25zm43.953-131.865v87.909H441.09v-87.911h43.954v-51.281H529v51.283zm-.002 571.423v-87.912H529v87.912zm.001 131.868v-43.955h21.977v43.955zm0 183.145v-7.326h21.977v7.326z"></path>
        </g>
        <defs>
          <clipPath id="03_svg__a">
            <path fill="#fff" d="M0 0h388v500H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === 'wordpress' && colorScheme === 'default') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px] text-[#230545] opacity-10 transition-opacity duration-500"
      >
        <defs>
          <pattern id="blocks-pattern-purple" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 0h15v15H0zM30 15h30v15H30zM15 45h15v15H15zM45 45h15v15H45z" fill="currentColor" fillOpacity="0.4" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#blocks-pattern-purple)"></rect>
      </svg>
    );
  }

  if (type === 'pen' && colorScheme === 'pink') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 388 500"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px] text-[#230545] opacity-10 transition-opacity duration-500"
      >
        <g clipPath="url(#04_svg__a)" transform="scale(1, -1) translate(0, -500)">
          <path fill="currentColor" fillOpacity="0.5" d="M-477.921-102.002h51.308v51.308h-51.308zM-323.999.61h102.614v-51.305h51.308v-46.218l51.307 46.22h-51.307V.612h-51.308l-102.614 51.306zM-324-96.866h102.615v46.172H-324zm615.693 148.79h102.61L343.001.622V51.92h-51.308V.611L189.079 51.92V.61h102.614v-51.3h-51.305v-.004L189.08-76.348h51.308v.004h51.307v25.647h51.306v-46.16h51.309l-51.309 46.163V.617h51.303v51.307h.004v51.307H343V51.925l-51.306 51.306 51.307 51.306h-51.308zm-307.85-.004h-102.616V.612h51.312l-51.308-51.307h51.309v-46.149h36.251l-36.244 46.157 51.3 51.3h-.004v.004L35.15 51.925h-51.307zM-31.211-96.842h66.364v46.148zm168.98 46.148L35.155.612v-51.307H137.77v-46.008h51.308v46.009H137.77l51.307 102.613h-51.308zm513.079-25.654h25.654l-25.654 25.654zm-51.307 25.66v51.3h-51.308l51.308-51.306-51.308-25.654h51.308v25.656h51.307V103.23zm-205.232-.007v-25.653h51.308v25.653h51.307V.612zM-375.308 51.919h-51.306V.61h51.307v.006L-324-50.69V.617l-51.308 51.308v51.302h-102.616zm872.227 0H394.306V.613h102.615V.62l51.306 51.306h-51.308zm-666.997.005h51.304L-170.081.617h51.308v51.307h.002v51.308h-51.307zm615.696 153.918h102.616v-51.306l51.305-51.305h-51.305V51.924h51.308v102.612l-51.306 51.306h51.306l-153.924 51.307zM189.076 103.164h51.244l-51.24-51.24h51.308v51.307l-.004-.003v51.244h-51.308zm-359.152 51.372h102.614V103.23H35.152V51.924h51.309v51.307h-.001v51.305l-51.308 51.308v-51.308l51.304-51.305-51.304.001v-.001L-67.46 154.537v51.307h-102.615zM-375.308 257.15h-51.306l51.307-102.616V103.23h102.615l-51.306-51.306h51.308v51.308l-.001-.001v51.306h-102.616v51.312H-324v51.307h-51.308zm1026.157 51.311h-51.307v.002l-51.308-51.309h51.308V154.537h51.307v-51.308h8.55v51.308h-8.549v153.922h8.549v102.616h-8.55zM343.001 154.477h102.615V103.23h102.615l-102.615 51.307v51.248H343.001zm-615.691-.005h51.305V103.23l51.308 51.307h-51.306v102.551h-51.307zm359.15-51.241h51.309v102.616H86.461zm153.924 51.241h51.307v102.616h-51.307zm-51.307 256.603H137.77l51.306-102.613v-51.306H137.77v51.307h-.001l-51.307 51.306V257.154h.003l51.304-51.303v-.002h51.308v51.305h51.307l-51.307 51.308v102.553h153.924l-153.924 51.307zM35.152 359.769H-67.46l51.306-51.306H-67.46v-.005h-102.614v-51.309h102.611v-51.3H86.46l-153.92 51.306 51.306 51.306h51.307v51.306h51.308v51.308H35.152zm-513.076-153.92h51.308v51.307zm974.847 102.614h-51.305v.001H343.003v-51.308h102.613v-.002l51.308 51.308v-.001h51.307v51.308H445.616zM343 359.769H240.384v-51.308h102.615l-51.306-51.307h51.308v51.309l-.001-.001v51.181h51.308v51.308H343zm-513.078 0h-102.611v-51.308h102.611l-51.306-51.307h51.308v51.307h.002v51.182h51.303v51.308h-51.307zm-153.919-102.615h51.308l-51.308 51.309zM-324 411.075h-51.308L-324 308.459v102.556h153.924L-324 462.322zm-102.614-102.614h51.307l-51.307 51.308zm974.848 51.306h51.308v51.308h-51.308zm-615.695.005h51.308v102.616h-.002l-51.306 51.305zm513.077 102.617V359.772h51.309v102.614H599.54v51.307H496.925v-51.305h-.002l-51.305 51.304V565h-51.307zm-880.781 51.301h8.551V359.774l51.304 51.304h.003v102.615h-51.307v25.651h-8.551zM599.54 411.08h51.308v51.308zm-461.769 51.306 153.923 51.307L343 462.388v-.1h51.308v51.308h-51.307v.097h-205.23zm-359.155 51.307h-153.923l153.923-51.307v51.304h.004l51.302-51.302v-.1h51.307v51.308h-51.305v.094h.001v25.654h-51.309zm153.924-.001H35.154v-51.306H137.77L35.156 513.692V565H-67.46zm667.001 0h59.858V565h-59.858z"></path>
        </g>
        <defs>
          <clipPath id="04_svg__a">
            <path fill="#fff" d="M0 0h388v500H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }

  // Fallback decorative background
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMax slice"
      className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none text-white overflow-hidden rounded-[24px]"
    >
      <rect x="20" y="20" width="160" height="120" rx="12" stroke="currentColor" strokeWidth="2"/>
      <rect x="40" y="40" width="120" height="10" rx="5" fill="currentColor"/>
      <rect x="40" y="60" width="80" height="10" rx="5" fill="currentColor"/>
      <rect x="40" y="80" width="100" height="10" rx="5" fill="currentColor"/>
      <circle cx="160" cy="120" r="15" fill="currentColor"/>
    </svg>
  );
};

export function ServicesBento({ data }: ServicesBentoProps) {
  const displayServices = data && data.length > 0 ? data : fallbackServices;

  return (
    <section 
      className="relative w-[calc(100%-32px)] mx-auto pt-0 pb-24 overflow-hidden rounded-[48px]"
    >

      <div className="mx-auto space-y-12 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[14px] uppercase tracking-[4px] leading-[160%] mb-4 inline-block font-normal text-[#334155]">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-extrabold !text-[#0f172a] tracking-tight leading-tight">
            Soluciones para escalar <br className="hidden md:block" />
            <span className="font-serif italic font-normal">tu negocio digital</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {displayServices.map((service, index) => {
            const styles = getCardStyles(service.colorScheme);
            return (
              <Link 
                href={service.href || "/servicios"}
                key={index}
                className={`group relative p-8 rounded-[24px] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1.5 ${styles.wrapper}`}
              >

                <CardTexture type={service.iconType} colorScheme={service.colorScheme} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 ${styles.iconWrapper}`}>
                    {getIcon(service.iconType)}
                  </div>
                  <h3 className={`!text-2xl font-bold mb-3 transition-colors duration-300 ${styles.title}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed font-normal mb-8 max-w-md transition-colors duration-300 ${styles.description}`}>
                    {service.description}
                  </p>
                </div>

                <div className={`relative z-10 flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${styles.link}`}>
                  Conoce más 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-8">
          <Link href="/servicios" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 text-white font-medium shadow-lg shadow-purple-900/40 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Ver todos nuestros servicios 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}
