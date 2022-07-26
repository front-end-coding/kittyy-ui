import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'kitty-ui',
  description: '测试',
  themeConfig: {
    // nav: [
    //   { text: 'Guide', link: '/guide' },
    //   { text: 'Button', link: '/button' },
    // ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Button', link: '/button/index' },
          { text: 'Icon', link: '/icon/index' },
        ]
      }
    ]
  }
})