import { defineConfigWithTheme } from 'vitepress';
import { usePosts } from '../src/composables/usePosts';
import type { ThemeConfig } from '../src/types';

const { posts, rewrites } = await usePosts({
  pageSize: 6,
  // homepage: false, // false 样式2
  homepage: true, // true 样式1
  srcDir: 'posts',
  autoExcerpt: 150
});

export default defineConfigWithTheme<ThemeConfig>({
  // base: '/CharrammaBlog/',
  title: "Charramma的赛博自留地",
  titleTemplate: "Charramma's Blog",
  description: '我随便写写，你随便看看',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    posts,
    page: {
      max: 5
    },
    comment: {
      serverURL: 'https://domain.com',
      reaction: true
    },
    // ads: {
      // asideOutlineAfter: [
      //   [
      //     {
      //       title: 'Spotify - 每月低于 10 元',
      //       img: 'https://minio.zhichao.org/assets/spotify.png',
      //       link: 'https://nf.video/tST8B/?gid=4'
      //     },
      //     {
      //       title: 'Netflix - 每月低至 25 元',
      //       img: 'https://minio.zhichao.org/assets/netflix.png',
      //       link: 'https://nf.video/tST8B/?gid=1'
      //     }
      //   ]
      // ],
      // sidebarNavAfter: [
      //   {
      //     title: 'ouo.io - 縮短網址也可以賺錢',
      //     img: 'https://ouo.io/images/banners/r5.jpg',
      //     link: 'https://ouo.io/ref/QQbUaFAo'
      //   }
      // ],
      // docAfter: [
      //   {
      //     title: '关注微信公众号',
      //     img: 'https://minio.zhichao.org/assets/wechat-big.png'
      //   },
      //   [
      //     {
      //       title: 'V.PS- 美国 CN2 GIA / 9929 / CMIN2 顶级线路',
      //       img: 'https://minio.zhichao.org/assets/vps.png',
      //       link: 'https://link.zhichao.org/vps'
      //     },
      //     {
      //       title: '搬瓦工 - 美国 CN2 优化线路',
      //       img: 'https://minio.zhichao.org/assets/bwh.png',
      //       link: 'https://link.zhichao.org/bwh'
      //     },
      //     {
      //       title: 'RackNerd - 美国 163 直连线路',
      //       img: 'https://minio.zhichao.org/assets/rn.png',
      //       link: 'https://link.zhichao.org/rn'
      //     }
      //   ]
      // ]
    // },
    logo: '/profile.png',
    outline: { level: 2 },
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      // { text: '文章', link: '/page-1' },
      // { text: '文档', link: '/docs/doc1' },
      { text: '分类', link: '/category' },
      { text: '标签', link: '/tags' },
      { text: '归档', link: '/archives' },
      {
        text: '笔记',
        items: [
          { text: 'Linux', link: '/docs/linux/Linux命令：ls'},
          { text: '读书笔记', link: '/docs/readnote/111.md'},
          { text: 'Python', link: '/docs/python/'}
        ]
      },
      { text: '关于', link: '/docs/about.md' }
    ],
    // 侧边栏
    sidebar: {
      // '/docs': [
      //   {
      //     text: '如何使用电饭煲',
      //     items: [
      //       { text: '选择合适的电饭煲', link: '/docs/doc1' },
      //       { text: '煮出松软米饭的技巧', link: '/docs/doc2' },
      //       { text: '电饭煲的多功能用途', link: '/docs/doc3' },
      //       { text: '电饭煲的清洁与保养', link: '/docs/doc4' },
      //       { text: '电饭煲常见问题处理', link: '/docs/doc5' }
      //     ]
      //   }
      // ],
      '/docs/linux/': [
        {
          text: 'Linux命令',
          items: [
            { text: 'Linux命令：ls', link: '/docs/linux/Linux命令：ls'},
            { text: 'Linux命令：cat', link: '/docs/linux/Linux命令：cat'}
          ]
        }
      ],
      '/docs/readnote': [
        {
          text: '读书笔记',
          items: [
            { text: '111', link: '/docs/readnote/111'},
            { text: '222', link: '/docs/readnote/222'}
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Charramma' }],
    footer: {
      message:
        'Theme by <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">Minimalism</a>',
      // copyright: 'Copyright © 2017-2024 <a href="https://github.com/izhichao" target="_blank">只抄</a>'
      copyright: '我随便写写，你随便看看'
    },
    search: { provider: 'local' }
  },
  markdown: {
    theme: 'dark-plus',
    lineNumbers: true
  },
  srcExclude: ['README.md', 'README_en-US.md']
});
