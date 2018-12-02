class StopWatch {
  constructor(parent = document){
    this.parent = parent;
    this.btnStart = parent.querySelector('.watch-start');
    this.btnSplit = parent.querySelector('.watch-split');
    this.btnReset = parent.querySelector('.watch-reset');

    this.list = parent.querySelector('.watch-list');
    this.text = parent.querySelector('.watch-text');
    this.setIntervalId = null;
    this.from = null;
    this.to = null;

    this.isTimerActive = false; //лічильник ще не запустили
    this.isDelay = false; //не натиснули на Pause
  }
 

  startBtnOnClick() {
    if (!this.isTimerActive) {
      this.start();
      this.btnStart.textContent = 'pause';
      this.isTimerActive = true;
    } else if (this.isTimerActive && !this.isDelay) {
      this.btnStart.textContent = 'continue';
      this.pause();
      this.isDelay = true;
    } else if (this.isTimerActive && this.isDelay) {
      this.btnStart.textContent = 'pause';
      this.continueTime();
      this.isDelay = false;
    }
  }
  continueTime() {
    this.from = Date.now() - (this.to - this.from);
    this.step();
  }
  pause() {
    this.to = new Date();
    clearInterval(this.setIntervalId);
    this.text.textContent = this.toTimeString(this.to - this.from);
  }
  start() {
    this.from = new Date();
    this.step();
  }
  step() {
    this.setIntervalId = setInterval(() => {
      this.text.textContent = this.toTimeString(Date.now() - this.from);
    }, 1000 / 60);
  }

  splitBtnOnClick() {
    if (this.btnStart.textContent.toLowerCase() == 'start') {
      return;
    } else if (this.btnStart.textContent.toLowerCase() == 'pause') {
      const time = this.toTimeString(Date.now() - this.from);
      this.list.insertAdjacentHTML('afterbegin', `<li>${time}</li>`);
    } else if (this.btnStart.textContent.toLowerCase() == 'continue') {
      this.btnStart.textContent = 'pause';
      const time = this.toTimeString(this.to - this.from);
      this.list.insertAdjacentHTML('afterbegin', `<li>${time}</li>`);
    }
  }

  resetBtnOnClick() {
    clearInterval(this.setIntervalId);
    this.text.textContent = this.toTimeString(0);
    this.btnStart.textContent = 'start';
    this.list.innerHTML = '';
    this.isDelay = false;
    this.isTimerActive = false;
  }

  toTimeString(timeStamp) {
    const date = new Date(timeStamp);
    const time = date.toUTCString().slice(17, -4);
    const ms = date.getMilliseconds() > 100 
      ? date.getMilliseconds() 
      : date.getMilliseconds() > 10 
        ? "0" + date.getMilliseconds()
        : "00" + date.getMilliseconds()
    return `${time}:${ms}`;
  }

  run(){
    this.btnStart.addEventListener("click", this.startBtnOnClick.bind(this));
    this.btnReset.addEventListener("click", this.resetBtnOnClick.bind(this));
    this.btnSplit.addEventListener("click", this.splitBtnOnClick.bind(this));

  }
  
}

const stopWatch = new StopWatch (document.querySelector('.watch'));
stopWatch.run();

