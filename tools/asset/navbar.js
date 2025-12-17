// 路径前缀配置（根据域名自动判断）
let PATH_PREFIX = '';
if (window.location.hostname.endsWith('.github.io')) {
    PATH_PREFIX = '/ai-toolkit';
} else if (window.location.pathname.includes('/tools/')) {
    PATH_PREFIX = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/tools/') + 6);
}

// 导航配置
const navbarConfig = {
    brand: {
        name: "工具集",
        logo: "bi-tools",
        url: PATH_PREFIX + "/index.html"
    },
    categories: [
        {
            name: "加密解密",
            icon: "bi-shield-lock",
            description: "提供各种加密和解密工具，保障数据安全",
            items: [
                {
                    name: "Base64",
                    icon: "bi-file-earmark-lock",
                    description: "Base64编码和解码工具，用于将二进制数据转换为文本格式",
                    url: PATH_PREFIX + "/crypto/base64/index.html"
                },
                {
                    name: "MD5",
                    icon: "bi-hash",
                    description: "MD5哈希值计算工具，用于生成数据的摘要信息",
                    url: PATH_PREFIX + "/crypto/md5/index.html"
                },
                {
                    name: "AES",
                    icon: "bi-key",
                    description: "AES加密和解密工具，支持多种模式和填充方式",
                    url: PATH_PREFIX + "/crypto/aes/index.html"
                },
                {
                    name: "RSA",
                    icon: "bi-key-fill",
                    description: "RSA公钥加密私钥解密工具，非对称加密算法",
                    url: PATH_PREFIX + "/crypto/rsa/index.html"
                },
                {
                    name: "JWT",
                    icon: "bi-ticket",
                    description: "JWT Token的生成和解析工具，用于身份验证",
                    url: PATH_PREFIX + "/crypto/jwt/index.html"
                },
                {
                    name: "RSA密钥生成",
                    icon: "bi-keyboard",
                    description: "RSA公钥私钥对生成工具，用于非对称加密",
                    url: PATH_PREFIX + "/crypto/keygen/index.html"
                }
            ]
        },
        {
            name: "编码解码",
            icon: "bi-link",
            description: "各种编码和解码工具，处理数据格式转换",
            items: [
                {
                    name: "URL编码/解码",
                    icon: "bi-link-45deg",
                    description: "URL编码和解码工具，处理特殊字符",
                    url: PATH_PREFIX + "/encode/url/index.html"
                },
                {
                    name: "Hex 编码/解码",
                    icon: "bi-hexagon",
                    description: "Hex 十六进制编码和解码工具",
                    url: PATH_PREFIX + "/encode/hex/index.html"
                },
                {
                    name: "Unicode 编码/解码",
                    icon: "bi-alphabet",
                    description: "Unicode 编码和解码工具，处理国际化字符",
                    url: PATH_PREFIX + "/encode/unicode/index.html"
                }
            ]
        },
        {
            name: "文本处理",
            icon: "bi-file-text",
            description: "各种文本处理工具，提高文本编辑效率",
            items: [
                {
                    name: "大小写转换",
                    icon: "bi-fonts",
                    description: "支持多种转换方式的大小写转换工具",
                    url: PATH_PREFIX + "/text/case/index.html"
                },
                {
                    name: "行排序去重",
                    icon: "bi-sort-down",
                    description: "支持按字母顺序排序和去除重复行",
                    url: PATH_PREFIX + "/text/sort/index.html"
                },
                {
                    name: "文本替换",
                    icon: "bi-search",
                    description: "支持普通文本替换和正则表达式替换",
                    url: PATH_PREFIX + "/text/replace/index.html"
                },
                {
                    name: "字符统计",
                    icon: "bi-bar-chart",
                    description: "统计字数、行数、字符频率等信息",
                    url: PATH_PREFIX + "/text/stats/index.html"
                }
            ]
        },
        {
            name: "数据转换",
            icon: "bi-arrow-repeat",
            description: "各种数据格式转换工具",
            items: [
                {
                    name: "进制转换",
                    icon: "bi-calculator",
                    description: "二进制、八进制、十进制、十六进制互相转换",
                    url: PATH_PREFIX + "/data/converter/index.html"
                },
                {
                    name: "颜色值转换",
                    icon: "bi-palette",
                    description: "RGB/HSL/HEX 颜色值互相转换",
                    url: PATH_PREFIX + "/data/color-converter/index.html"
                },
                {
                    name: "单位换算",
                    icon: "bi-rulers",
                    description: "长度、重量、温度等各种单位换算",
                    url: PATH_PREFIX + "/data/unit-converter/index.html"
                }
            ]
        },
        {
            name: "二维码",
            icon: "bi-qr-code",
            description: "二维码生成和识别工具",
            items: [
                {
                    name: "二维码生成",
                    icon: "bi-qr-code-scan",
                    description: "生成各种类型的二维码",
                    url: PATH_PREFIX + "/qrcode/generator/index.html"
                },
                {
                    name: "二维码识别",
                    icon: "bi-eye",
                    description: "识别并解析二维码内容",
                    url: PATH_PREFIX + "/qrcode/scanner/index.html"
                }
            ]
        },
        {
            name: "生成工具",
            icon: "bi-magic",
            description: "各种随机数和标识符生成工具",
            items: [
                {
                    name: "密码生成",
                    icon: "bi-shield-shaded",
                    description: "生成高强度安全密码",
                    url: PATH_PREFIX + "/generator/password/index.html"
                },
                {
                    name: "随机数生成",
                    icon: "bi-dice-5",
                    description: "支持范围设定和多种随机数类型",
                    url: PATH_PREFIX + "/generator/random-number/index.html"
                },
                {
                    name: "UUID 生成",
                    icon: "bi-tag",
                    description: "生成标准 UUID 字符串",
                    url: PATH_PREFIX + "/generator/uuid-generator/index.html"
                }
            ]
        },
        {
            name: "图片处理",
            icon: "bi-image",
            description: "在线图片处理工具，无需上传文件",
            items: [
                {
                    name: "图片尺寸调整",
                    icon: "bi-arrows-angle-expand",
                    description: "调整图片的宽度和高度，支持多种缩放算法",
                    url: PATH_PREFIX + "/image/resizer/index.html"
                },
                {
                    name: "图片格式转换",
                    icon: "bi-file-earmark-image",
                    description: "JPG/PNG/WebP 等格式互相转换",
                    url: PATH_PREFIX + "/image/converter/index.html"
                },
                {
                    name: "图片压缩",
                    icon: "bi-file-zip",
                    description: "按质量或尺寸压缩图片，减小文件大小",
                    url: PATH_PREFIX + "/image/compressor/index.html"
                },
                {
                    name: "添加水印",
                    icon: "bi-water",
                    description: "为图片添加文字或图片水印",
                    url: PATH_PREFIX + "/image/watermark/index.html"
                },
                {
                    name: "ICO 图标生成",
                    icon: "bi-app-indicator",
                    description: "将图片转换为 ICO 格式图标",
                    url: PATH_PREFIX + "/image/ico/index.html"
                }
            ]
        },
        {
            name: "JSON工具",
            icon: "bi-braces",
            description: "JSON数据处理工具",
            items: [
                {
                    name: "JSON格式化",
                    icon: "bi-code-square",
                    description: "JSON数据格式化和校验工具",
                    url: PATH_PREFIX + "/json/formatter/index.html"
                }
            ]
        },
        {
            name: "开发工具",
            icon: "bi-terminal",
            description: "程序员常用开发辅助工具",
            items: [
                {
                    name: "正则表达式测试器",
                    icon: "bi-regex",
                    description: "实时测试正则表达式匹配效果",
                    url: PATH_PREFIX + "/dev/regex/index.html"
                },
                {
                    name: "Cron 表达式解析器",
                    icon: "bi-clock",
                    description: "可视化解析 Cron 表达式并生成执行时间",
                    url: PATH_PREFIX + "/dev/cron/index.html"
                },
                {
                    name: "Cron 表达式生成器",
                    icon: "bi-clock-history",
                    description: "可视化生成 Cron 表达式",
                    url: PATH_PREFIX + "/dev/cron-generator/index.html"
                },
                {
                    name: "HTTP 请求模拟器",
                    icon: "bi-send",
                    description: "简易版 Postman，支持各种 HTTP 方法",
                    url: PATH_PREFIX + "/dev/http/index.html"
                },
                {
                    name: "代码格式化工具",
                    icon: "bi-braces-asterisk",
                    description: "支持多种编程语言的代码美化",
                    url: PATH_PREFIX + "/dev/format/index.html"
                },
                {
                    name: "文本差异比较工具",
                    icon: "bi-layout-split",
                    description: "高亮显示文本差异",
                    url: PATH_PREFIX + "/dev/diff/index.html"
                }
            ]
        }
    ],
    github: {
        url: "https://github.com/lujian0571/ai-toolkit"
    }
};

// 初始化导航栏
function initNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    let navbarHtml = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="${navbarConfig.brand.url}">
                    <i class="bi ${navbarConfig.brand.logo} me-2"></i>
                    ${navbarConfig.brand.name}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">`;

    // 始终使用下拉菜单形式展现二级目录结构
    navbarConfig.categories.forEach(category => {
        navbarHtml += `
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hide-caret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi ${category.icon} me-1"></i>
                                ${category.name}
                            </a>
                            <ul class="dropdown-menu">`;
        
        category.items.forEach(item => {
            const isActive = window.location.href.includes(item.url.replace(PATH_PREFIX, '').substring(1));
            const activeClass = isActive ? ' active' : '';
            navbarHtml += `
                                <li><a class="dropdown-item${activeClass}" href="${item.url}"><i class="bi ${item.icon} me-1"></i>${item.name}</a></li>`;
        });
        
        navbarHtml += `
                            </ul>
                        </li>`;
    });

    // 添加 GitHub 链接
    navbarHtml += `
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="${navbarConfig.github.url}" target="_blank">
                                <i class="bi bi-github"></i> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

    navbarContainer.innerHTML = navbarHtml;
}

// 页面加载完成后初始化导航栏
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();

    if (!window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);

        let hideTimer;

        const show = () => {
            clearTimeout(hideTimer);
            instance.show();
        };

        const hide = () => {
            hideTimer = setTimeout(() => {
                instance.hide();
            }, 200); // ⭐ 关键：延迟时间
        };

        toggle.addEventListener('mouseenter', show);
        toggle.addEventListener('mouseleave', hide);

        menu.addEventListener('mouseenter', show);
        menu.addEventListener('mouseleave', hide);
    });
});