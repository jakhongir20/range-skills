//Fixed header
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 250) {
    $(".header").addClass("sticky");
    $("main").css("margin-top", "275px");
  } else {
    $(".header").removeClass("sticky");
    $("main").css("margin-top", "0px");
  }
});
// =======================================================================================================
// _ibg
function _ibg() {
  $.each($("._ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}
_ibg();
// =======================================================================================================
(function () {
  let navLinks = $("nav ul li a"),
    // navM = $('nav').height(),
    navM = 40,
    section = $("section"),
    documentEl = $(document);

  documentEl.on("scroll", function () {
    let currentScrollPage = documentEl.scrollTop();

    section.each(function () {
      let self = $(this);
      if (
        self.offset().top < currentScrollPage + navM &&
        currentScrollPage + navM < self.offset().top + self.outerHeight()
      ) {
        let targetClass = "." + self.attr("class") + "-page";
        navLinks.removeClass("_active");
        $(targetClass).addClass("_active");
      }
    });
  });
})();
$(document).ready(function () {
  $('nav a[href^="#"]').click(function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
    // $('nav a[href^="#"]').removeClass('_active');
    // $(this).addClass('_active')
    return false;
  });
});
// =======================================================================================================

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".header").addClass("sticky");
    $("main").css("margin-top", "120px");
  } else {
    $(".header").removeClass("sticky");
    $("main").css("margin-top", "0px");
  }
});
// $('.wrapper').addClass('loaded');
$(".icon-menu").click(function (event) {
  event.preventDefault();
  $(this).toggleClass("_active");
  $(".menu").toggleClass("_active");
  $("body").toggleClass("_lock");
});
//===========================================================================================================

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  let arrow = document.querySelectorAll(".arrow");
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add("parent");
    arrow[i].addEventListener("click", function () {
      subMenu.classList.toggle("open");
      thisArrow.classList.toggle("_active");
    });
  }
} else {
  body.classList.add("mouse");
}

if (isMobile.any()) {
  const filterTitle = document.querySelector(
    ".catalog-filter--responsive__title"
  );
  filterTitle.addEventListener("click", function (e) {
    filterTitle.classList.toggle("_active");
    filterTitle.nextElementSibling.classList.toggle("_active");
  });
}
// =======================================================================================================

let accountLinkSelect = document.querySelector(".account__link_select");
let subAccountList = document.querySelector(".sub-account__list");
accountLinkSelect.addEventListener("click", function (e) {
  subAccountList.classList.toggle("open");
});
let bottomHeaderCart = document.querySelector(".bottom-header__cart");
let quickcart = document.querySelector(".main-header__quickcart");
bottomHeaderCart.addEventListener("click", function (e) {
  quickcart.classList.toggle("open");
});

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
// =======================================================================================================
let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();
// =======================================================================================================
let swiperMain = new Swiper(".mainslider__body", {
  // direction: 'vertical',
  slidesPerView: 1,
  autoHeight: false,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerColumn: 1,
  loop: true,
  autoplay: {
    delay: 300000,
  },
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =======================================================================================================
