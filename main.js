var x = setInterval(function () {
  let dateArmy = new Date("2025-12-01T00:00:00");
  let dateNow = new Date();

  let date = dateArmy - dateNow;

  var days = Math.floor(date / (1000 * 60 * 60 * 24));
  var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((date % (1000 * 60)) / 1000);

  const timer = document.querySelector("h1.time");
  timer.style.direction = "rtl";
  timer.innerHTML = `${days} يوم : ${hours} ساعة : ${minutes} دقيقة : ${seconds} ثانية`;

  if (date < 0) {
    clearInterval(x);
    timer.innerHTML = "انتهاء الوقت ... خلاص خلصنا جيش ✨🥳🥳";
  }
}, 1000);
