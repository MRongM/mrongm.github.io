// assets/js/copy-code.js
document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('div.highlight');

    codeBlocks.forEach(codeBlock => {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerText = 'Copy';

        const codeElement = codeBlock.querySelector('pre code');
        if (!codeElement) return;

        codeBlock.style.position = 'relative';
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

        codeBlock.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        codeBlock.addEventListener('mouseleave', () => {
            button.style.opacity = '0.8';
        });

        codeBlock.appendChild(button);

        button.addEventListener('click', () => {
            let codeToCopy = codeElement.innerText;
            codeToCopy = codeToCopy.replace(/(\r\n|\n|\r)/g, '');
            navigator.clipboard.writeText(codeToCopy).then(() => {
                button.innerText = 'Copied!';
                setTimeout(() => {
                    button.innerText = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('复制失败，请手动复制。');
            });
        });
    });
});