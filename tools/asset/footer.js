// Footer配置
const footerConfig = {
    copyright: "© 2025 AI Toolkit | 由大模型生成的在线工具"
};

// 初始化Footer
function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container text-center">
                <span class="text-muted">${footerConfig.copyright}</span>
            </div>
        </footer>`;
}

// 页面加载完成后初始化Footer
document.addEventListener('DOMContentLoaded', function() {
    initFooter();
});