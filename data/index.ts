import { link } from "fs";

export const techStacks = ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'Next.js', 'Vue.js'];

export const navItems = [
    { name: 'About', link: '#about', img: '/about.svg' },
    { name: 'Projects', link: '#projects', img: '/rocket.svg' },
    // { name: 'Testimonials', link: '#testimonials' },
    { name: 'Contact', link: '#contact', img: '/email.svg' },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: 'I prioritize client collaboration, fostering open communication',
      description: '',
      className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
      imgClassName: 'w-full h-full',
      titleClassName: 'justify-end',
      img: '/b1.svg',
      spareImg: '',
    },
    {
      id: 2,
      title: 'From Taiwan To the World',
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '',
      spareImg: '',
    },
    {
      id: 3,
      title: 'My tech stack',
      description: 'I constantly try to improve',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-center',
      img: '',
      spareImg: '',
    },
    {
      id: 4,
      title: 'Tech enthusiast with a passion for development.',
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '/grid.svg',
      spareImg: '/b4.svg',
    },
  
    {
      id: 5,
      title: 'Currently building some side projects',
      description: 'The Inside Scoop',
      className: 'md:col-span-3 md:row-span-2',
      imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
      titleClassName: 'justify-center md:justify-start lg:justify-center',
      img: '/b5.svg',
      spareImg: '/grid.svg',
    },
    {
      id: 6,
      title: 'Do you want to start a project together?',
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
      img: '',
      spareImg: '',
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: 'Promptopia: The entry brick into the new world of Nextjs',
      des: 'Develop a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.',
      img: '/promptor.svg',
      iconLists: ['/next.svg', '/mongodb.svg', '/ts.svg', '/next-auth.png', '/tail.svg'],
      link: 'https://promptor-hub.vercel.app/',
    },
    {
      id: 2,
      title: 'Podcastr: Hosting knowledge in the world',
      des: 'A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback.',
      img: '/podcastr.svg',
      iconLists: ['/next.svg', '/shadcn.svg', '/open-ai.svg', 'huggingface.svg', '/c.svg', '/convex.svg'],
      link: 'https://podcastr-hub.vercel.app/',
    },
  ];
  
  export const testimonials = [
    {
      quote:
        'Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian\'s enthusiasm for every facet of development truly stands out. If you\'re seeking to elevate your website and elevate your brand, Adrian is the ideal partner.',
      name: 'Michael Johnson',
      title: 'Director of AlphaStream Technologies',
    },
    {
      quote:
        'Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian\'s enthusiasm for every facet of development truly stands out. If you\'re seeking to elevate your website and elevate your brand, Adrian is the ideal partner.',
      name: 'Michael Johnson',
      title: 'Director of AlphaStream Technologies',
    },
    {
      quote:
        'Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian\'s enthusiasm for every facet of development truly stands out. If you\'re seeking to elevate your website and elevate your brand, Adrian is the ideal partner.',
      name: 'Michael Johnson',
      title: 'Director of AlphaStream Technologies',
    },
    {
      quote:
        'Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian\'s enthusiasm for every facet of development truly stands out. If you\'re seeking to elevate your website and elevate your brand, Adrian is the ideal partner.',
      name: 'Michael Johnson',
      title: 'Director of AlphaStream Technologies',
    },
    {
      quote:
        'Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian\'s enthusiasm for every facet of development truly stands out. If you\'re seeking to elevate your website and elevate your brand, Adrian is the ideal partner.',
      name: 'Michael Johnson',
      title: 'Director of AlphaStream Technologies',
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: 'cloudinary',
      img: '/cloud.svg',
      nameImg: '/cloudName.svg',
    },
    {
      id: 2,
      name: 'appwrite',
      img: '/app.svg',
      nameImg: '/appName.svg',
    },
    {
      id: 3,
      name: 'HOSTINGER',
      img: '/host.svg',
      nameImg: '/hostName.svg',
    },
    {
      id: 4,
      name: 'stream',
      img: '/s.svg',
      nameImg: '/streamName.svg',
    },
    {
      id: 5,
      name: 'docker.',
      img: '/dock.svg',
      nameImg: '/dockerName.svg',
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: '7+ Years\' Full Stack Web Developer',
      desc: 'Specializing in Java, Typescript, Spring Boot, Angular and Nextjs.',
      className: 'md:col-span-2',
      thumbnail: '/exp1.svg',
    },
    {
      id: 2,
      title: 'Mobile App Develop',
      desc: 'Designed and developed mobile app for both iOS & Android platforms using Ionic and Flutter.',
      className: 'md:col-span-2', // change to md:col-span-2
      thumbnail: '/exp2.svg',
    },
    {
      id: 3,
      title: '10+ Projects And Products',
      desc: 'Type of CRM, ESG, Donation, Music and Learning , including industry of Finance, Accounting, Manufacturing and NPO.',
      className: 'md:col-span-2', // change to md:col-span-2
      thumbnail: '/exp3.svg',
    },
    {
      id: 4,
      title: 'Lead Frontend Web Developer',
      desc: 'Developed and maintained user-facing features using modern frontend technologies.',
      className: 'md:col-span-2',
      thumbnail: '/exp4.svg',
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: '/git.svg',
      name: 'Github',
      link: 'https://github.com/s0974092',
    },
    {
      id: 2,
      img: '/cake.svg',
      name: 'Cake',
      link: 'https://www.cake.me/s--f8iUBz5X8DFbzxV3-TzDCw--/Jas0nLin',
    },
    {
      id: 3,
      img: '/link.svg',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/yu-jie-lin-58524a125/',
    },
  ];