# ai-webui 导航网站

这是一个正在开发的导航网站

[英文介绍](./README_en.md)

## 开发计划
- [x] 主界面
- [x] 暗色模式
- [x] 分类显示
- [ ] 管理员界面
- [ ] 在线工具界面
- [ ] 多种数据库支持（MySQL/PostgreSQL）
- [ ] 爬虫收录网站+网页截图+AI总结网页
- [ ] 浏览器插件调用收录网站
- [ ] 图床
- [ ] 在线PDF处理
- [ ] i18n多语言
- [ ] 音乐播放器
- [ ] ai客服
- [ ] 评论


## 技术栈：

1. [TypeScript 5](https://www.typescriptlang.org/)
2. [Next.js 14](https://nextjs.org/)
3. [Tailwind CSS](https://tailwindcss.com/) + [Forms](https://github.com/tailwindlabs/tailwindcss-forms) Clamp
4. [PostCSS](https://postcss.org/)
5. [DaisyUI](https://daisyui.com/)
6. [Framer Motion](https://www.framer.com/motion/)
7. [Sonner](https://sonner.emilkowal.ski/)
8. [FastAPI](https://fastapi.tiangolo.com/)

## 本地部署

### 设置开发环境

**注意：** 确保你已经安装了 [Node.js](https://nodejs.org/en/) 和 [Python](https://www.python.org/)。

运行以下命令：
```sh
cp .env.example .env
yarn run setup
```

### 运行开发服务器

```sh
yarn run dev
```

### 构建生产环境

```sh
yarn run build
```

## 许可证

本项目基于 [MIT License](./LICENSE) 许可。