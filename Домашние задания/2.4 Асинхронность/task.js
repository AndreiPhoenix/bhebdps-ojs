class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // ID таймера
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return date.toTimeString().slice(0, 5); // Возвращаем время в формате HH:MM
    }

    start() {
        if (this.intervalId) {
            return; // Если интервал уже запущен, ничего не делаем
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false; // Запрещаем повторный вызов
                    alarm.callback(); // Вызываем колбек
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null; // Сбрасываем значение intervalId
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true; // Сбрасываем возможность вызова
        });
    }

    clearAlarms() {
        this.stop(); // Останавливаем интервал
        this.alarmCollection = []; // Удаляем все звонки
    }
}

// Пример использования
const alarmClock = new AlarmClock();
alarmClock.addClock("07:00", () => console.log("Пора вставать!"));
alarmClock.addClock("07:30", () => console.log("Завтрак!"));
alarmClock.start();

// Чтобы протестировать, можно добавить небольшую задержку
setTimeout(() => {
    alarmClock.clearAlarms(); // Удаляем все звонки через 10 секунд
}, 10000);
