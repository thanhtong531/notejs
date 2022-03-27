window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  function countdown(date) {
    const endDate = new Date(date).getTime();
    const currentDate = new Date();
    // Nếu không phải là số hoặc ngày nhập vào nhỏ hơn thì return;
    if (isNaN(endDate) && endDate - currentDate <= 0) return;
    setInterval(caculate, 1000);
    function caculate() {
      let days, hours, minutes, seconds;
      const now = new Date();
      // Đổi ra timestamp để tính số milisecond

      const startDate = now.getTime();
      // Thoi gian con lai (milisecond) => 1000 milisecond = 1s => / 1000
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining <= 0) return;
      // 1 ngay = 24 * 60 * 60 = 86400
      days = parseInt(timeRemaining / 86400); //9
      // Tinh so giay con lai bang cach chia lay phan du
      timeRemaining = timeRemaining % 86400;
      // hours = 3600s
      hours = parseInt(timeRemaining / 3600);
      // So giay con lai
      timeRemaining = timeRemaining % 3600;

      // minutes = 60s
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);
      daysText.textContent = days >= 10 ? days : `0${days}`;
      hoursText.textContent = hours >= 10 ? hours : `0${hours}`;
      minutesText.textContent = minutes >= 10 ? minutes : `0${minutes}`;
      secondsText.textContent = seconds >= 10 ? seconds : `0${seconds}`;
    }
  }
  countdown("Thu Mar 28 2022 10:36:12 GMT+0700 (GMT+07:00)");
});
