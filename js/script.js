function getData() {
  window.addEventListener("DOMContentLoaded", (event) => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        displayData(data);
      })
      .catch((err) => console.log(err));
  });
  const btn = document.getElementsByTagName("button")[0];
  btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        displayData(data);
      })
      .catch((err) => console.log(err));
  });
}

getData();

function displayData(data) {
  const span = document.getElementById("Number");
  span.textContent = data.slip.id;
  const advice = document.getElementById("Advice");
  advice.textContent = data.slip.advice;
}
