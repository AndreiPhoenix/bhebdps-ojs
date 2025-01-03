const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

async function fetchCurrencyRates() {
    try {
        // Показываем загрузчик
        loader.classList.add('loader_active');
        
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        const data = await response.json();

        // Обработка данных
        const valutes = data.response.Valute;
        for (const key in valutes) {
            const currency = valutes[key];
            // Создаем элементы для отображения курса валют
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <div class="item__code">${currency.CharCode}</div>
                <div class="item__value">${currency.Value}</div>
                <div class="item__currency">руб.</div>
            `;
            itemsContainer.appendChild(item);
        }
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    } finally {
        // Скрываем загрузчик
        loader.classList.remove('loader_active');
    }
}

// Вызываем функцию загрузки данных
fetchCurrencyRates();
