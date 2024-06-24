document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.question__card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const isActive = card.classList.toggle('active');
            const answer = card.querySelector('.question__card-answer');
            
            if (isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        }
    });
});

const burgerMenu = document.getElementById('burger-menu');
const navList = document.querySelector(".nav__list")

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('open');
    toggleBurgerMenu();
});

function toggleBurgerMenu() {
    burgerMenu.classList.toggle('toggle');
}

// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем кнопку для открытия модального окна
var btnOpenModal = document.querySelector("button");

// Получаем элемент закрытия модального окна
var spanClose = document.getElementsByClassName("close")[0];

// Функция открытия модального окна
function openModal() {
    modal.style.display = "block";
}

// Функция закрытия модального окна
function closeModal() {
    modal.style.display = "none";
}

// Закрыть модальное окно, если пользователь щелкает вне его
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Добавляем обработчик для кнопки открытия модального окна
btnOpenModal.addEventListener("click", openModal);

// Добавляем обработчик для отправки данных формы на сервер
var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    var formData = new FormData(myForm);

    fetch('main.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.text();
    })
    .then(function(data) {
        alert('Данные успешно отправлены');
        closeModal(); // Закрываем модальное окно после успешной отправки
    })
    .catch(function(error) {
        console.error('Произошла ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    });
});