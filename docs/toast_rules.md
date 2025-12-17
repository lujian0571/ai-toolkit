# Toast 提示规范

## 规则说明

为了提升用户体验，所有用户提示信息应使用 Bootstrap Toast 组件而非浏览器原生 alert 对话框。

## 应用范围

此规则适用于所有工具页面中的用户提示，包括但不限于：
- 操作成功提示
- 错误信息提示
- 警告信息提示
- 信息性提示

## 实施规范

1. 使用全局 showToast 函数显示提示信息
2. 根据提示类型选择合适的样式：
   - 成功提示：'success'
   - 错误提示：'error'
   - 信息提示：'info'
   - 警告提示：'warning'
3. showToast 函数签名：`showToast(message, type = 'info', duration = 3000)`
4. 使用 Bootstrap 官方推荐的 Toast 结构
5. 复用页面上的 Toast 容器以提高性能
6. Toast 显示在页面顶部中央位置

## 示例代码

```javascript
// 成功提示
showToast('操作成功', 'success');

// 错误提示
showToast('操作失败，请重试', 'error');

// 信息提示
showToast('这是一条信息', 'info');

// 警告提示
showToast('请注意潜在风险', 'warning');

// 自定义显示时间（毫秒）
showToast('这条消息显示5秒', 'info', 5000);
```

## 注意事项

- 避免同时显示过多 Toast 提示
- Toast 提示会自动消失，也可以手动关闭
- 默认显示时间为 3 秒（3000 毫秒）
- Toast 显示在页面顶部中央
- 基于 Bootstrap 5 Toast 组件实现
- 复用同一个 Toast 容器以提高性能
- 遵循 Bootstrap 官方推荐的 HTML 结构