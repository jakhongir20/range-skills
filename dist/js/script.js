// =======================================================================================================
let inputs = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  let inputValue = input.value;
  let seal = document.querySelector(".seal");
  input.addEventListener("click", function () {
    this.classList.toggle("_checked");
    inputValue = +inputValue;
    let count = 5.6;
    if (
      input.classList.contains("_checked") &&
      navigator.userAgent.match("Chrome")
    ) {
      document.querySelector(".counter").innerHTML =
        parseInt(document.querySelector(".counter").innerHTML) +
        inputValue * count;
      document.querySelector(".counter2").innerHTML =
        parseInt(document.querySelector(".counter2").innerHTML) + inputValue;
      if (document.querySelector(".counter").textContent > 1000) {
        seal.classList.add("_active");
        document.querySelector(".counter").textContent -= 8;
        // console.log(typeof document.querySelector(".counter").textContent);
      }
    } else if (
      !input.classList.contains("_checked") &&
      navigator.userAgent.match("Chrome")
    ) {
      document.querySelector(".counter").innerHTML =
        parseInt(document.querySelector(".counter").innerHTML) -
        inputValue * count;
      document.querySelector(".counter2").innerHTML =
        parseInt(document.querySelector(".counter2").innerHTML) - inputValue;
      if (+document.querySelector(".counter").textContent === -8) {
        document.querySelector(".counter").textContent =
          parseInt(document.querySelector(".counter").textContent) + 8;
      }
    }
    let counter2 = document.querySelector(".counter2").textContent;
    document.querySelector(".pointer").style.webkitTransform =
      "rotate(" + counter2 + "deg)";
  });
}

// =======================================================================================================

const maskPhone = () => {
  const inputsPhone = document.querySelectorAll('input[name="phone"]');

  inputsPhone.forEach((input) => {
    let keyCode;

    const mask = (event) => {
      event.keyCode && (keyCode = event.keyCode);
      let pos = input.selectionStart;

      if (pos < 3) {
        event.preventDefault();
      }
      let matrix = "+998 (__) ___ __ __ ",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = input.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, (a) => {
          if (i < val.length) {
            return val.charAt(i++) || def.charAt(i);
          } else {
            return a;
          }
        });
      i = newValue.indexOf("_");
      if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = matrix
        .substr(0, input.value.length)
        .replace(/_+/g, (a) => {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(input.value) ||
        input.value.length < 5 ||
        (keyCode > 20 && keyCode < 30)
      ) {
        input.value = newValue;
      }
      if (event.type == "blur" && input.value.length < 5) {
        input.value = "";
      }
    };
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
};
maskPhone();
