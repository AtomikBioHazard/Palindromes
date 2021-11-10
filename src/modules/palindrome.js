const d = document;

export function palindrome() {
  const $response = d.querySelector(".verifier-response");

  let amount = d.querySelector(".palindrome").value.toLowerCase(),
    reverse = amount.split("").reverse().join("");

  if (amount.length <= 2) {
    $response.classList.remove("none");
    $response.innerHTML = "Keep typing";
  } else if (amount.length >= 3 && amount === reverse) {
    $response.classList.remove("none");
    $response.innerHTML = `<p>Original: <b>"${amount}"</b> IS equal to <b>"${reverse}"</b>. You found a Palindrome. YAY!</p>`
  } else {
    $response.classList.remove("none");
    $response.innerHTML = `<p>Original: <b>"${amount}"</b> IS NOT equal to <b>"${reverse}"</b>. What a bummer =(</p>`;
  }
}