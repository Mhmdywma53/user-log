
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.classList.remove('fa-moon');
            themeToggleBtn.classList.add('fa-sun');}  
        else {
            themeToggleBtn.classList.remove('fa-sun');
            themeToggleBtn.classList.add('fa-moon');
    }
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        
        alert(`البريد الإلكتروني: ${email}\nكلمة المرور: ${password}`);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const codeElement = document.getElementById(targetId);
            const codeText = codeElement.textContent;

            navigator.clipboard.writeText(codeText)
                .then(() => {
                    alert('تم نسخ الكود بنجاح!');
                })
                .catch(err => {
                    alert('فشل في نسخ الكود!');
                    console.error('Error copying text: ', err);
                });
        });
    });
});