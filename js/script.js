function getData() {
  const btn = document.getElementsByTagName("button")[0];
  btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        const span = document.getElementById("Number");
        span.textContent = data.slip.id;
        const advice = document.getElementById("Advice");
        advice.textContent = data.slip.advice;
      })
      .catch((err) => console.log(err));
  });
}

getData();
