# Bootstrap 使用规范

## 规则说明

项目使用 Bootstrap 5 作为主要的 UI 框架，所有页面都应正确引入和使用 Bootstrap 组件。

## 应用范围

此规则适用于所有工具页面中的 UI 设计和实现。

## 实施规范

1. 所有页面必须引入 Bootstrap 的 CSS 和 JS 文件：
   ```html
   <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://unpkg.com/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
   <script src="https://unpkg.com/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
   ```

2. 优先使用 Bootstrap 提供的标准组件，避免重复造轮子

3. 使用 Bootstrap 的响应式网格系统进行布局

4. 使用 Bootstrap 的工具类（utility classes）来快速实现常见样式

5. 充分利用 Bootstrap 的 JavaScript 插件（如 Toast、Modal、Tooltip 等）

## 组件使用规范

1. Toast 提示：
   - 使用 Bootstrap 原生 Toast 组件
   - 通过 `bootstrap.Toast` 类进行初始化和控制

2. 按钮：
   - 使用标准的 Bootstrap 按钮类（`.btn`、`.btn-primary` 等）
   - 按钮文本前应添加图标（使用 Bootstrap Icons）

3. 表单：
   - 使用 Bootstrap 表单控件类（`.form-control`、`.form-select` 等）
   - 合理使用表单布局类（`.mb-3`、`.form-label` 等）

4. 卡片：
   - 使用 `.card` 组件展示内容区块
   - 卡片应包含 `.card-header` 和 `.card-body`

## 注意事项

- 确保 Bootstrap 的 JavaScript bundle 文件在所有自定义脚本之前加载
- 使用 Bootstrap 提供的事件和 API 与组件交互
- 遵循 Bootstrap 的标记结构和类名约定
- 避免覆盖 Bootstrap 的核心样式，除非绝对必要