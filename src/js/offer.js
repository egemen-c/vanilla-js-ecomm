class Countdown {
    constructor() {
        this.endDate = "2022-5-31";
        this.init();
    }

    init() {
        this.days = document.querySelector('.days');
        this.hours = document.querySelector('.hours');
        this.minutes = document.querySelector('.minutes');
        this.seconds = document.querySelector('.seconds');
        this.setTimer();
    }

    setTimer() {
        const endDate = new Date(this.endDate);
        const currentDate = new Date();
        const diff = endDate.getTime() - currentDate.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        this.days.innerHTML = days
        this.hours.innerHTML = hours
        this.minutes.innerHTML = minutes
        this.seconds.innerHTML = seconds
        setTimeout(() => this.setTimer(), 1000);
    }
}

const countdown = new Countdown();