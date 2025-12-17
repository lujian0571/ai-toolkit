# 公共 JavaScript 文件规范

## 规则说明

为了更好地组织和维护项目中的公共 JavaScript 代码，所有公共函数和工具应集中放置在 [common.js](file:///Users/lujian/Documents/workspace/dev/project/tool/tools/asset/common.js) 文件中，并在所有需要的页面中引入。

## 应用范围

此规则适用于所有工具页面中可能被多个页面共享的 JavaScript 代码，包括但不限于：
- 公共工具函数
- UI 组件封装
- 通用事件处理
- 全局配置变量

## 实施规范

1. 所有公共 JavaScript 代码应放置在 [tools/asset/common.js](file:///Users/lujian/Documents/workspace/dev/project/tool/tools/asset/common.js) 文件中
2. 每个工具页面都必须引入该文件：
   ```html
   <script src="../../asset/common.js"></script>
   ```
3. 公共 JS 文件应在 navbar.js 和 footer.js 之后引入
4. 函数命名应具有描述性，避免命名冲突
5. 公共 JS 中的函数可以依赖已在页面中引入的库（如 Bootstrap）

## 示例代码

```javascript
// 在 common.js 中定义公共函数
function showToast(message, type = 'info', duration = 3000) {
    // 可以直接使用已在页面中引入的 Bootstrap 组件
    const toast = new bootstrap.Toast(toastEl, {
        delay: duration
    });
}

function formatDate(date) {
    // 日期格式化实现
}
```

```html
<!-- 在页面中引入 -->
<script src="https://unpkg.com/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="../../asset/navbar.js"></script>
<script src="../../asset/footer.js"></script>
<script src="../../asset/common.js"></script>
```

## 注意事项

- 避免在公共 JS 文件中添加页面特定的代码
- 公共函数应具有良好的兼容性和健壮性
- 更新公共 JS 后应验证所有使用该文件的页面
- 保持公共 JS 文件的简洁和高效
- 公共函数可以合理依赖项目中已统一引入的第三方库