// assets/js/copy-code.js
document.addEventListener('DOMContentLoaded', () => {
    // 找到所有被 Rouge 高亮的代码块容器
    // Rouge 通常会将代码包裹在 <div class="highlight"> 内部
    const codeBlocks = document.querySelectorAll('div.highlight');

    codeBlocks.forEach(codeBlock => {
        const button = document.createElement('button');
        button.className = 'copy-code-button'; // 添加一个 class 用于样式和识别
        button.innerText = 'Copy';

        // 获取实际的代码元素 (通常是 <pre><code>)
        const codeElement = codeBlock.querySelector('pre code');
        if (!codeElement) return; // 如果没有找到代码元素，跳过

        // 将按钮添加到代码块容器的顶部或内部
        // 这里选择添加到 div.highlight 内部的顶部
        codeBlock.style.position = 'relative'; // 确保按钮定位正确
        button.style.position = 'absolute';
        button.style.top = '5px';
        button.style.right = '5px';
        button.style.padding = '5px 10px';
        button.style.fontSize = '0.8em';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '3px';
        button.style.cursor = 'pointer';
        button.style.opacity = '0.8';
        button.style.transition = 'opacity 0.2s';

        // 鼠标悬停时显示按钮（可选，可以一直显示）
        codeBlock.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        codeBlock.addEventListener('mouseleave', () => {
            button.style.opacity = '0.8';
        });


        codeBlock.appendChild(button);

        button.addEventListener('click', () => {
            const codeToCopy = codeElement.innerText; // 获取代码文本

            // 使用 Clipboard API 复制文本
            navigator.clipboard.writeText(codeToCopy).then(() => {
                button.innerText = 'Copied!';
                setTimeout(() => {
                    button.innerText = 'Copy';
                }, 2000); // 2秒后恢复按钮文本
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('复制失败，请手动复制。');
            });
        });
    });
});