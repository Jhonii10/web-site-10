module.exports = {
    email: 'jhoniipianoscue@gmail.com',
  
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/Jhonii10',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/jhoniipia10',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/Jhoniernoscue',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/jhoniipia10',
      },
      {
        name: 'Whatsapp',
        url: 'https://wa.link/4vl0bn',
      },
    ],
  
    navLinks: [
        {
          name: 'Sobre mi',
          url: '/about',
        },
        {
          name: 'Experiencia',
          url: '/jobs',
        },
        {
          name: 'Proyectos',
          url: '/projects',
        },
        {
          name: 'Contactame',
          url: '/contact',
        },
      ],
  
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
      darkNavy: '#020c1b',
    },
  
    srConfig: (delay = 200, viewFactor = 0.25) => ({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),

    siteMetadata: {
      title: 'Jhoni Ipia',
      description: 'Jhoni Ipia es una Desarrollador web que se especializa en crear experiencias digitales increibles.',
      siteUrl: 'https://jhoniipia.com', 
      image: '/assets/me.png', 
      facebookUsername: '@Jhoniernoscue',
    },

  };
  