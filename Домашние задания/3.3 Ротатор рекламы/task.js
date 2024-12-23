<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ротатор объявлений</title>
    <style>
        .rotator__case {
            display: none;
        }
        .rotator__case_active {
            display: inline;
        }
    </style>
</head>
<body>
    <p>
        Я
        <span class="rotator">
            <span class="rotator__case rotator__case_active">Бог JS</span>
            <span class="rotator__case">Лучший программист на земле</span>
            <span class="rotator__case">покорю этот мир</span>
            <span class="rotator__case">учусь в Нетологии</span>
            <span class="rotator__case">счастливый как никто</span>
            <span class="rotator__case">радуюсь жизни</span>
        </span>
    </p>

    <p>
        Я
        <span class="rotator">
            <span class="rotator__case rotator__case_active">Программирую на Python</span>
            <span class="rotator__case">Изучаю машинное обучение</span>
            <span class="rotator__case">Создаю веб-приложения</span>
            <span class="rotator__case">Развиваю свои навыки</span>
        </span>
    </p>

    <script>
        // Получаем все ротаторы на странице
        const rotators = document.querySelectorAll('.rotator');

        // Проходим по каждому ротатору
        rotators.forEach(rotator => {
            const cases = rotator.querySelectorAll('.rotator__case');
            let activeIndex = 0;

            // Функция смены объявлений
            function changeCase() {
                // Убираем класс активности у текущего элемента
                cases[activeIndex].classList.remove('rotator__case_active');

                // Переход к следующему элементу
                activeIndex = (activeIndex + 1) % cases.length; // Зацикливаем индекс
                const nextCase = cases[activeIndex];

                // Добавляем класс активности к следующему элементу
                nextCase.classList.add('rotator__case_active');

                // Устанавливаем цвет текста из data-атрибута, если он задан
                nextCase.style.color = nextCase.dataset.color || 'black'; // Цвет по умолчанию

                // Запускаем смену объявления с задержкой, указанной в data-speed
                setTimeout(changeCase, nextCase.dataset.speed || 1000); // Задержка по умолчанию 1000 мс
            }

            // Запуск смены объявлений
            changeCase();
        });
    </script>
</body>
</html>
