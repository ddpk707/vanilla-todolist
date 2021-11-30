const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //페이지에 진입하자마자 getClock을 한번 호출하고 그뒤로 interval 돌아가도록
setInterval(getClock, 1000);