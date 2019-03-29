module.exports = {
  title: 'Pax Magica',
  description: 'Survival is coming.',
  lastUpdated: 'Last Updated', // string | boolean
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css'}],
    ['link', { rel: 'icon', href: '/john-dee-monad-trans2.png' }]
    //['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vue/dist/vue.js` }],
    // ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js` }],
  ],
  alias: {
    '@theme': process.cwd()+ '/images'
  },
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
    logo: '/john-dee-monad-trans.png',
    displayAllHeaders: true, // Default: false
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Facciones',
        items: [
          { text: 'La Razón', link: '/factions/reason/' },
          { text: 'Las Tradiciones', link: '/factions/tradition/' },
          { text: 'Los Benandanti', link: '/factions/benandanti/' },
          { text: 'Otros',
            items: [
                { text: 'Los Monellos', link: 'factions/monellos'},
                { text: 'Los Gatos', link: 'factions/cats'},
                { text: 'El Doge', link: '/factions/doge' },
                { text: 'Los Malandanti', link: '/factions/malandanti' },
                { text: 'La Inquisición', link: '/factions/inquisition' },
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
          text: 'Tramas',
          items: [
            { text: 'Bon Appetit', link: '/plots/bon-appetit'},
            { text: 'La Gran Evasion', link: '/plots/great-evasion'},
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
