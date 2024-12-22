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