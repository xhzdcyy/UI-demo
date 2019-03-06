module.exports = {
    base:'/UI-demo/',
    title: 'Xi UI',
    description: 'Just a UI demo',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/xhzdcyy' },
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ]
            },
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/grid',
                    '/components/layout',
                    '/components/popover',
                    '/components/collapse',
                    '/components/toast'
                ]
            },
        ]
    },
}
