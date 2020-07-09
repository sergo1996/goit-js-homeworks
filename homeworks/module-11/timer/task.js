class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.timerContainer = document.querySelector(selector);
    this.daysContainer = this.timerContainer.querySelector(
      '[data-value="days"]',
    );
    this.hoursContainer = this.timerContainer.querySelector(
      '[data-value="hours"]',
    );
    this.minutesContainer = this.timerContainer.querySelector(
      '[data-value="mins"]',
    );
    this.secondsContainer = this.timerContainer.querySelector(
      '[data-value="secs"]',
    );
    this.targetDate = targetDate;
    this.targetDateInMlsec = this.targetDate.getTime();
    this.startTimer();

    console.log(this.targetDate.getTime());
  }
  timeDifference() {
    return this.targetDateInMlsec - Date.now();
  }

  getDays() {
    return Math.floor(this.timeDifference() / (1000 * 60 * 60 * 24));
  }
  getHours() {
    return Math.floor(
      (this.timeDifference() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
  }
  getMinutes() {
    return Math.floor((this.timeDifference() % (1000 * 60 * 60)) / (1000 * 60));
  }
  getSeconds() {
    return Math.floor((this.timeDifference() % (1000 * 60)) / 1000);
  }

  startTimer() {
    const interval = setInterval(() => {
      if (this.timeDifference() <= 0) {
        clearInterval(interval);
        return;
      }
      this.renderTimer();
    }, 1000);
  }
  renderTimer() {
    this.daysContainer.textContent = this.getDays();
    this.hoursContainer.textContent = this.getHours();
    this.minutesContainer.textContent = this.getMinutes();
    this.secondsContainer.textContent = this.getSeconds();
  }
}

const counterOfTime = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 9, 2020'),
});

counterOfTime.timeDifference();
console.log(counterOfTime.getSeconds());