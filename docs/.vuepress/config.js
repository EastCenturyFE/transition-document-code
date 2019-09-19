module.exports = {
  title: 'Transition',
  description: '基于贝塞尔曲线的动效插件',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: '192.168.10.150',
  port: 5001,
  themeConfig: {
    selectText: '选择语言',
    label: '简体中文',
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '绘制',
        link: '/draw/'
      },
      {
        text: '曲线表',
        link: '/curveTable/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/jiaming743/transition'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'example'
      ],
      '/draw/': [
        ''
      ],
      '/curveTable/': [
        ''
      ]
    }
  }
}
