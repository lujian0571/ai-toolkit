// Toast 函数
function showToast(message, type = 'info', duration = 3000) {
    // 由于我们使用的是 bootstrap.bundle.min.js，可以确保 Bootstrap 和 Toast 组件始终可用
    // 创建 Toast 容器
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed top-0 start-50 translate-middle-x p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // 创建 Toast 元素
    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    
    // 设置 Toast 内容
    let iconClass = '';
    
    switch(type) {
        case 'success':
            iconClass = 'bi-check-circle-fill text-success';
            break;
        case 'error':
            iconClass = 'bi-exclamation-triangle-fill text-danger';
            break;
        case 'warning':
            iconClass = 'bi-exclamation-triangle-fill text-warning';
            break;
        default: // info
            iconClass = 'bi-info-circle-fill text-primary';
    }
    
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="${iconClass} me-2"></i>
                ${message}
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    // 添加到容器
    toastContainer.appendChild(toastEl);
    
    // 初始化并显示 Toast（由于使用 bootstrap.bundle.min.js，可以直接使用）
    const toast = new bootstrap.Toast(toastEl, {
        delay: duration
    });
    
    // 显示 Toast
    toast.show();
    
    // Toast 隐藏后清理 DOM
    toastEl.addEventListener('hidden.bs.toast', function () {
        toast.dispose();
        if (toastEl.parentNode) {
            toastEl.parentNode.removeChild(toastEl);
        }
    });
}