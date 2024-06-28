// tailwind.config.js

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // 可用的主题列表
    darkTheme: "dark", // 暗色模式的主题
    base: true, // 启用基础样式
    styled: true, // 启用组件样式
    utils: true, // 启用实用工具类
    prefix: "", // 自定义类名前缀
    logs: true, // 是否显示日志
    themeRoot: ":root", // 主题根节点选择器
  },
  darkMode: ['class', '[data-theme="dark"]']
}

export default config
