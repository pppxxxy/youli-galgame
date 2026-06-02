# 忧黎

> 那盏补光灯熄灭之前，你是我唯一想带走的战利品。

《忧黎》是一款移动端网页纯文字 Galgame Demo。

## 当前版本

第一版 Demo 已完成：

- 标题页
- 移动端适配 UI
- 点击推进剧情
- 选项系统
- 隐藏变量
- 自动存档 / 手动存档
- 结局回收
- 第一章开头剧情：从选修课相遇到“下把一起？”

## 文件结构

```text
galgame-web/
├── index.html
├── style.css
├── script.js
├── data/
│   └── story.js
├── assets/
└── docs/
    └── design.md
```

## 本地游玩

直接用浏览器打开：

```text
index.html
```

如果浏览器限制本地脚本，可以用任意静态服务器运行，例如：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## GitHub Pages 部署

1. 将本项目上传到 GitHub 仓库。
2. 打开仓库 Settings。
3. 找到 Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待部署完成。

## 内容提示

本作涉及抑郁、复诊、服药等现实议题。故事不将疾病浪漫化，也不以陪伴替代专业治疗。

## 在线游玩

GitHub Pages 部署后可直接访问：

https://pppxxxy.github.io/youli-galgame/

## 说明

这是移动端纯文字 Galgame《忧黎》的完整版本，包含序章至最终章、数值系统、自动结局判定与结局解锁。

主要入口：

- `index.html`：模块化源码版入口
- `youli-single.html`：完整单文件版
