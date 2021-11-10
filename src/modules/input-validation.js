const d = document,
$inputs = d.querySelectorAll(".verifier-form [required]");

export function validator() {

  $inputs.forEach((input) => {
    const $span = d.createElement("span");

    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("verifier-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });


  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".verifier-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern && $input.value !== "") {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
}