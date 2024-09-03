var x = setInterval(function() {
  let dateArmy = new Date("nov 25, 2024");
  let dateNow = new Date();

  let date = dateArmy - dateNow;

  var days = Math.floor(date / (1000 * 60 * 60 * 24));
  var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((date % (1000 * 60)) / 1000);

  document.querySelector("h1.time").cssText = "direction: rtl;"

  document.querySelector("h1.time").innerHTML = `${days} يوم : ${hours} ساعة : ${minutes} دقيقة : ${seconds} ثانية`
  // If the count down is finished, write some text
  if (date < 0) {
    clearInterval(x);
    document.querySelector("h1.time").innerHTML = "انتهاء الوقت ... خلاص خلصنا جيش ✨🥳🥳";
  }
}, 1000);
