<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gmail = $_POST['gmail'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    
    // Дополнительная обработка данных, если нужно
    
    // Отправка данных на почту
    $to = "menu-store.2022@yandex.ru";
    $subject = "Новая заявка от $name";
    $message = "Email: $gmail\nИмя: $name\nТелефон: $phone";
    $headers = "From: $gmail";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Данные успешно отправлены";
    } else {
        echo "Произошла ошибка при отправке данных";
    }
}
?>