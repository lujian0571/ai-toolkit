# 工具生成规范（前端纯静态工具）

## 一、总体原则
* 仅生成 纯前端静态工具
* 技术栈限定为：HTML + CSS + JavaScript (公共引入Bootstrap生态，工具内可以根据需要引入其他库)
* 不允许使用后端、构建工具、Node 运行时
* 所有工具应可直接在浏览器中打开并运行
* 每次生成前，重新读取该规则文件(Prompt.md)与docs下的所有文件，可能存在变更，每次读取最新的。
* 每次修改后，及时判断更新docs下规则文件与具体工具自己目录下的README.md文件
* 增加的工具需要添加到导航菜单`navbar.js`

⸻

## 二、目录结构规范

  ├─ docs/                  # 生成过程自动整理的规则
  └─ tools/                 # 发布目录
      ├─ asset/
      │  ├─ common.css      # 公共样式（所有工具页面必须引用）
      │  ├─ common.js       # 公共JS脚本（所有工具页面必须引用）
      │  ├─ navbar.js       # 顶部导航（Bootstrap Navbar，所有工具页面必须引用）
      │  └─ footer.js       # 底部版权（所有工具页面必须引用）
      │
      └─ <category>/        # 一级目录：工具分类
         └─ <tool-name>/    # 二级目录：具体工具
            ├─ index.html   # 工具主页面（包含样式和脚本）
            └─ README.md    # 工具说明与生成记录

约束说明
* docs/目录下：
  * 生成过程中作为所有工具需要遵守的补充规则，自动生成在docs目录下
  * 尽量不要用开发者工具自身的记忆功能
* tools/ 目录下：
  * 第一层目录必须是分类
  * 第二层目录必须是具体工具名称
  * 同一分类下可包含多个工具目录
  * 不允许出现多余层级或扁平化结构

⸻

## 三、工具页面生成规范

### 1. HTML 文件要求
* 每个工具目录下 必须生成 index.html
* 页面需包含：
  * 工具的完整功能逻辑
  * 内联或同文件内的 CSS 与 JavaScript
  * 导航容器`<div id="navbar-container"></div>`
  * 底部版权容器`<div id="footer-container"></div>`
  * 需要时可以在工具目录下增加js与css文件
  * 工具底部增加百科类内容，如：怎么使用、什么是Base64等。

### 2. 公共资源引用（强制）

所有 index.html 必须引用以下公共资源(资源引用使用相对路径)：

```html
<link rel="stylesheet" href="./tools/asset/common.css">
<script src="./tools/asset/common.js"></script>
<script src="./tools/asset/navbar.js"></script>
<script src="./tools/asset/footer.js"></script>
```


⸻

## 四、外部依赖引用规范
* 所有第三方库 必须使用 CDN 引用
* CDN 来源 统一使用 https://unpkg.com
* 仅在工具功能确有必要时引入外部依赖
* 禁止引入冗余或与工具无关的库

示例：

```html
<link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://unpkg.com/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
<script src="https://unpkg.com/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```


⸻

## 五、UI 组件与视觉风格规范
* 默认 UI 框架：Bootstrap
* 使用 亮色主题
* 布局简洁、工具导向，避免复杂页面结构
* 充分使用Bootstrap的组件、样式等美化UI
* 所有按钮需：
  * 使用 Bootstrap Button 样式
  * 前置图标（icon 在文字前）

示例：

```html
<button class="btn btn-primary">
  <i class="bi bi-play-fill me-1"></i>
  开始处理
</button>
```


⸻

## 六、README.md 生成规范

每个工具目录下 必须生成 README.md，用于记录工具生成细节，内容应包括但不限于：
* 工具名称与用途说明
* 核心功能点
* 使用说明（如何操作）
* 生成时的设计思路或实现要点
* 可扩展 / 可优化方向（用于后续二次生成或创新）

⸻

## 七、可扩展约束（为后续自动生成预留）
* 工具应尽量保持 低耦合、单一职责
* 避免对全局命名空间的污染
* 若存在复杂逻辑，应通过模块化函数进行组织
* 代码需具备可读性，方便二次生成和修改

⸻

## 八、禁止事项（强约束）
* ❌ 使用 Node.js、npm、构建工具
* ❌ 使用服务端接口或私有 API
* ❌ 生成非标准目录结构
* ❌ 引用非 unpkg.com 的第三方 CDN（除非明确说明）
* ❌ 使用浏览器原生 alert/confirm 对话框（应使用 Toast 提示）
