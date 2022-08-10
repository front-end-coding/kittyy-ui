import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'kitty-ui',
  description: '测试',

  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/examples/button/index" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button/index",
            },
            {
              text: "Icon图标",
              link: "/examples/icon/index",
            },
            {
              text: "Link链接",
              link: "/examples/link/index",
            },
          ],
        },
      ],
    }

  }
})