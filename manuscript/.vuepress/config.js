module.exports = {
    title: 'Pax Magica',
    description: 'Survival is coming.',
    lastUpdated: 'Last Updated', // string | boolean
    markdown: {
      config: md => {
        md.use(require("markdown-it-katex"));
        md.use(require('markdown-it-task-lists'));
      }
    },
    themeConfig: {
      displayAllHeaders: true, // Default: false
      sidebar: 'auto',
      nav: [
        { text: 'Home', link: '/' },
        {
          text: 'Facciones',
          items: [
            { text: 'La Orden de la Razón', link: '/factions/reason' },
            { text: 'Las Tradiciones', link: '/factions/tradition' },
            { text: 'Los Benandanti', link: '/factions/benandanti' },
            { text: 'Los Malandanti', link: '/factions/malandanti' },
            { text: 'Los Malandanti', link: '/factions/inquisition' },
          ]
        },
        {
          text: 'Lugares',
          items: [
            { text: 'La Serenissima', link: '/robotics/'},
            { text: 'Fruili', link: '/robotics/from-idea-to-robotics'},
            { text: 'Nueva Jerusalem', link: '/robotics/from-idea-to-robotics'},
            { text: 'Doissetep', link: '/robotics/from-idea-to-robotics'},
            { text: 'Castillo de Gargantua', link: '/robotics/from-idea-to-robotics'},
            { text: 'Castillo Infernal', link: '/robotics/from-idea-to-robotics'}
          ]
        },
        {
            text: 'Personajes',
            items: [
              { text: 'Leonardo da Vinci', link: '/robotics/'},
              { text: 'Tamurello', link: '/robotics/from-idea-to-robotics'},
              { text: 'Eudomonia', link: '/robotics/from-idea-to-robotics'},
              { text: 'Doissetep', link: '/robotics/from-idea-to-robotics'},
              { text: 'Castillo de Gargantua', link: '/robotics/from-idea-to-robotics'},
              { text: 'Castillo Infernal', link: '/robotics/from-idea-to-robotics'}
            ]
        },
        {
            text: 'Aventuras',
            items: [
              { text: 'La Serenissima', link: '/robotics/'},
              { text: 'Fruili', link: '/robotics/from-idea-to-robotics'},
              { text: 'Nueva Jerusalem', link: '/robotics/from-idea-to-robotics'},
              { text: 'Doissetep', link: '/robotics/from-idea-to-robotics'},
              { text: 'Castillo de Gargantua', link: '/robotics/from-idea-to-robotics'},
              { text: 'Castillo Infernal', link: '/robotics/from-idea-to-robotics'}
            ]
          },  
      ]
      
    }
  }