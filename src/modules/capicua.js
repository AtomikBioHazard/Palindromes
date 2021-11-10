const d = document;

export function capicua() {
  const $response = d.querySelector(".verifier-response");

  let amount = d.querySelector(".capicua").value,
    reverse = amount.split("").reverse().join("");

  if (amount.length <= 2) {
    $response.classList.remove("none");
    $response.innerHTML = "Enter more numbers";
  } else if (amount.length >= 3 && amount === reverse) {
    $response.classList.remove("none");
    $response.innerHTML = `<p>Original: <b>"${amount}" IS equal to <b>"${reverse}"</b>. The number is a capicua number. YAY!</b></p>`
  } else {
    $response.classList.remove("none");
    $response.innerHTML = `<p>Original: <b>"${amount}" is NOT equal to <b>"${reverse}"</b>. What a bummer =(</b></p>`;
  }
}