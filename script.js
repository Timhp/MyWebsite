// 简单的表单提交事件处理
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // 阻止页面刷新
    alert('感谢您的留言，我们会尽快联系您！');
});
