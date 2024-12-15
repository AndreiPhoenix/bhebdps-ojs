document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function(event) {
        const submenu = this.nextElementSibling; // Находим подменю рядом с текущей ссылкой

        // Проверяем, есть ли подменю
        if (submenu && submenu.classList.contains('menu_sub')) {
            event.preventDefault(); // Запрещаем переход по ссылке

            // Закрываем все открытые подменю
            document.querySelectorAll('.menu_active').forEach(activeSubmenu => {
                if (activeSubmenu !== submenu) {
                    activeSubmenu.classList.remove('menu_active');
                }
            });

            // Переключаем класс menu_active у текущего подменю
            submenu.classList.toggle('menu_active');
        }
    });
