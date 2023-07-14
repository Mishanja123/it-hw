import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.css";



const startBtn = document.querySelector('button[data-start]');
const resetBtn = document.querySelector('button[data-stop]');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const min = document.querySelector('span[data-minutes]');
const secs = document.querySelector('span[data-seconds]');
const input = document.querySelector('input');

resetBtn.disabled = true


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const pickedTime = selectedDates[0].getTime()
        const currentTime = Date.now()
        const deltaTime = pickedTime - currentTime
        if (deltaTime < 0) {
            Notiflix.Notify.warning('Please choose a date in the future');
            startBtn.disabled = true

        } else {
            startBtn.disabled = false
        }
  },
};

const pickedTime = flatpickr("#datetime-picker"
, options)




class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }
    
    start() {
        const classSelectedTime = pickedTime.selectedDates[0].getTime();
        input.disabled = true
        resetBtn.disabled = false

        if (this.isActive) {
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = classSelectedTime - currentTime;
            
            if (deltaTime < 0) {
                const time = this.convertMs(0)
                clearInterval(this.intervalId)
                startBtn.disabled = false
                this.onTick(time);
            } else {
                const time = this.convertMs(deltaTime)
                startBtn.disabled = true
                this.onTick(time);
            }
        }, 1000);
        Notiflix.Notify.success('countdown has started');

        this.isActive = true;
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.convertMs(0)
        this.onTick(time);
        resetBtn.disabled = true;
        startBtn.disabled = false;
        input.disabled = false;
    }
    
convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = this.pad(Math.floor(ms / day));
        // Remaining hours
        const hours = this.pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
}
    
    pad(value) {
        return String(value).padStart(2, '0');
    };
};


    const timer = new Timer({
    onTick: updateClockface
});

startBtn.addEventListener('click', timer.start.bind(timer));

resetBtn.addEventListener('click', timer.stop.bind(timer));


function updateClockface({ days, hours, minutes, seconds }) {
    day.textContent = `${days}`;
    hour.textContent = `${hours}`;
    min.textContent = `${minutes}`;
    secs.textContent = `${seconds}`;
};