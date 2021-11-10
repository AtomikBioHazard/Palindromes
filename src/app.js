import { capicua } from "./modules/capicua.js";
import darkMode from "./modules/dark-mode.js";
import { validator } from "./modules/input-validation.js";
import { palindrome } from "./modules/palindrome.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  validator();
});

d.addEventListener("keyup", (e) => {
  if (e.target.name === "palindrome") {
    palindrome();
  } else if (e.target.name === "capicua") {
    capicua();
  };
});

darkMode(".dark-mode", "dark-theme");