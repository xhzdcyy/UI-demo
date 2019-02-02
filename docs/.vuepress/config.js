module.exports = {
    title: 'UI demo',
    description: 'Just a UI demo',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/Install/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [ '/Install/','/get-started/',]
            },
            {
                title: '组件',
                children: [ '/components/button']
            }
        ]
    },
}
