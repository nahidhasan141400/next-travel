const scriptURL =
"https://script.google.com/macros/s/AKfycbyjKK4UQ4x-WlTtZMxX5A4kbkyFuLISPNJG6caTbRo2gIgopzlJTB2Wc_60mjjh_yRjjw/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
document.querySelector("#modbtn1").click();
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) =>
    alert("Thanks for Contacting us..! We Will Contact You Soon...")
    
  )
  .catch((error) => console.error("Error!", error.message));
});

export default async function handler(req, res) {
    
}