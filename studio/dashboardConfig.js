export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f54c0fd9282d67d22b081fd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t941pbz3',
                  apiId: '75c93a89-c2b7-4d62-872e-8c0a1af9668b'
                },
                {
                  buildHookId: '5f54c0fd9e0e9787e84f3a27',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s66pprca',
                  apiId: 'f107e0e4-79ee-4ac4-b4ad-91703449d5d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dansiver/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s66pprca.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
