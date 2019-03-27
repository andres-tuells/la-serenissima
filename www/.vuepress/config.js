module.exports = {
  title: 'Pax Magica',
  description: 'Survival is coming.',
  lastUpdated: 'Last Updated', // string | boolean
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css'}],
    //['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vue/dist/vue.js` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js` }],
  ],
  postcss: {
    plugins: [
      require('tailwindcss')(__dirname + '/tailwind.js'),
      require('autoprefixer'),
    ]
  },
  extendMarkdown: md => {
    md.set({ breaks: true })
    md.use(require("markdown-it-katex"));
    md.use(require('markdown-it-task-lists'));
    md.use(require('markdown-it-container'));
  },
  markdown: {
      config: md => {
          md.use(require("markdown-it-katex"));
          md.use(require('markdown-it-task-lists'));
          md.use(require('markdown-it-container'));
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
          { text: 'La Razón', link: '/factions/reason/' },
          { text: 'Las Tradiciones', link: '/factions/tradition' },
          { text: 'Los Benandanti', link: '/factions/benandanti/' },
          { text: 'Los Malandanti', link: '/factions/malandanti' },
          { text: 'La Inquisición', link: '/factions/inquisition' },
          { text: 'El Doge', link: '/factions/doge' },
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
            { text: 'Una noche en la Opera', link: '/quests/a-night-in-opera'},
            { text: 'Rey por un día', link: '/quests/king-for-a-day'},
            { text: 'La Muerte Negra', link: '/quests/black-death'},
            { text: 'La Puerta de Marfíl', link: '/quests/ivory-gate'},
            { text: 'La Fortaleza Escondida', link: '/quests/hidden-fortress'},
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
