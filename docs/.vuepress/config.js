module.exports = {
  title: 'Transition',
  description: '基于贝塞尔曲线的动效插件',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: '192.168.10.149',
  port: 5001,
  base: '/transition-document-code/',
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
        link: 'https://github.com/east-century-fex/transition.git'
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
