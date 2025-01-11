document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.faq-wrapper');
    if (!section) {
        console.error('Секция .faq-wrapper не найдена в DOM.');
        return;
    }

    const items = section.querySelectorAll('.item');

    // Активируем первый элемент по умолчанию
    if (items.length > 0) {
        const firstSubItem = items[0].nextElementSibling;
        const firstArrow = items[0].querySelector('.arrow');
        firstSubItem.classList.add('show');
        firstArrow.src = './images/arrow1.svg';
        firstSubItem.style.display = 'block'; // Устанавливаем display для первого элемента
    }

    // Добавляем обработчик событий для всех элементов
    items.forEach(item => {
        item.addEventListener('click', () => {
            const subItem = item.nextElementSibling;
            const arrow = item.querySelector('.arrow');

            if (subItem.classList.contains('show')) {
                subItem.classList.remove('show');
                setTimeout(() => {
                    subItem.style.display = 'none'; // Убираем display после завершения анимации
                }, 100);
                arrow.src = './images/arrow2.svg';
            } else {
                subItem.style.display = 'block'; // Устанавливаем display до начала анимации
                setTimeout(() => {
                    subItem.classList.add('show'); // Запускаем анимацию с небольшой задержкой
                }, 10);
                arrow.src = './images/arrow1.svg';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Остановить наблюдение после появления
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Другой код...

    const registrationButton = document.querySelector('.btn-red[href="#community"]');
    if (registrationButton) {
        registrationButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Регистрация в разработке. Пожалуйста, повторите позже.');
        });
    } else {
        console.error('Кнопка регистрации не найдена.');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Другой код...

    const googleButton = document.querySelector('.google-input input');
    if (googleButton) {
        googleButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Функция входа через Google в разработке.');
        });
    } else {
        console.error('Кнопка Google не найдена.');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Другой существующий код...

    const authButton = document.querySelector('.form .btn-red');
    if (authButton) {
        authButton.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращает стандартное поведение ссылки
            
            const nameInput = document.querySelector('.name-input input').value.trim();
            const emailInput = document.querySelector('.email-input input').value.trim();
            
            if (nameInput === '' || emailInput === '') {
                alert('Пожалуйста, заполните все поля!');
            } else {
                alert(`Добро пожаловать, ${nameInput}! Регистрация прошла успешно.`);
                // Здесь можно добавить логику отправки данных на сервер
            }
        });
    } else {
        console.error('Кнопка авторизации не найдена.');
    }
});
fetch('https://example.com/api/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: nameInput, email: emailInput }),
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        alert('Авторизация успешна!');
    } else {
        alert('Ошибка авторизации. Попробуйте снова.');
    }
})
.catch(error => {
    console.error('Ошибка:', error);
    alert('Произошла ошибка. Попробуйте позже.');
});

