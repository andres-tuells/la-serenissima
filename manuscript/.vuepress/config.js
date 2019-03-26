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
            { text: 'La Orden de la Razón', link: '/factions/reason/' },
            { text: 'Las Tradiciones', link: '/factions/tradition' },
            { text: 'Los Benandanti', link: '/factions/benandanti' },
            { text: 'Los Malandanti', link: '/factions/malandanti' },
            { text: 'La Inquisición', link: '/factions/inquisition' },
            { text: 'Otros',
              items: [
                  { text: 'Los Monellos', link: 'factions/others/monellos'},
              ]
            }
          ]
        },
        {
          text: 'Lugares',
          items: [
            { text: 'La Serenissima', link: '/locations/serenissima'},
            { text: 'Fruili', link: '/locations/friuli'},
            { text: 'Nueva Jerusalem', link: '/locations/new-jerusalem'},
            { text: 'Doissetep', link: '/locations/doissetep'},
            { text: 'Gargantua', link: '/locations/gargantua'},
            { text: 'El Castillo', link: '/locations/infernal-castle'}
          ]
        },
        {
            text: 'Aventuras',
            items: [
              { text: 'La Gran Evasion', link: '/quests/great-evasion'},
              { text: 'Rey por un día', link: '/quests/king-for-a-day'},
              { text: 'La Muerte Negra', link: '/quests/black-death'},
            ]
        },  
        {
            text: 'Extras',
            items: [
              { text: 'Música', link: '/extras/musica'},
              { text: 'Inspiraciones', link: '/extras/inspirations'},
            ]
        },  
      ]
      
    }
  }