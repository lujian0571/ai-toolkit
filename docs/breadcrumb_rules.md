# 面包屑导航规范

## 规则说明

为提升工具页面的导航体验和上下文感知能力，所有工具页面应使用面包屑导航替代原有页面标题。

## 应用范围

此规则适用于所有工具页面，不包括主页(index.html)。

## 实施规范

1. 移除原有的 `<h1>` 页面标题
2. 在页面顶部添加面包屑导航组件
3. 面包屑结构应遵循以下规范：
   - 不包含首页链接
   - 大分类作为纯文本项（无链接）
   - 当前页面作为激活项（active）

## 示例代码

```html
<!-- 面包屑导航 -->
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item">大分类名称</li>
        <li class="breadcrumb-item active" aria-current="page">当前页面名称</li>
    </ol>
</nav>
```

## 注意事项

- 面包屑导航应紧随导航栏之后，主要内容之前
- 使用 Bootstrap 的面包屑组件标准样式
- 保持各页面面包屑结构的一致性