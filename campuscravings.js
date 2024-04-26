function scrollhome() {
  var my_element = document.getElementById("homepage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}


function scrollabout() {
  var my_element = document.getElementById("aboutpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollproducts() {
  var my_element = document.getElementById("productspage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollgallery() {
  var my_element = document.getElementById("gallerypage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollcontact() {
  var my_element = document.getElementById("contactpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

const slides = document.querySelectorAll(".mySlides");
let slideIndex=0;
initializeSlider();
function initializeSlider() {
  if(slides.length>0) {
    slides[slideIndex].classList.add("displaySlide");
    setInterval(nextSlide,3000);
  }
}
function nextSlide() {
  slideIndex++;
  slideIndex=slideIndex%4;
  showSlide();
}
function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  })
  slides[slideIndex].classList.add("displaySlide");
}

const form = document.getElementById("contactform");
if(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#submi").value = "SENDING....";
    let data = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbxezUkZyp6VLSI2QK0_P9XYUrFcm9QXSg9_44fdrIyQfUmZjtDJeTpc5hqNEkA_vnPU/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        alert("Your form has been submitted");
        location.reload();
      });
  });
}

const form1 = document.getElementById("login-form")
if(form1) {
  form1.addEventListener("submit", (event) => {
    event.preventDefault();
    nameInner=document.getElementById("username").value;
    sessionStorage.setItem('username',nameInner);
    window.location.replace("index.html");
  });
}
if(sessionStorage.getItem('username')!=null) {
  let login = document.getElementById("signins");
  if(login) {
    login.innerHTML=sessionStorage.getItem('username');
    login.removeAttribute('href');
    login.style.cursor="pointer";
  }
}

function goTo() {
  if(sessionStorage.getItem('username')!=null) {
    window.location.href="campusproducts.html";
  } else {
    alert("Please sign in first")
    window.location.href="campuslogin.html";
  }
}

function comingSoon() {
  alert("Coming Soon");
}


function buyMessage() {
  if(localStorage.getItem("orderno")==null) {
    localStorage.setItem("orderno",0);
  }
  let con=confirm("Are you sure you want to buy this item?")
  if(con) {
    let orderno = localStorage.getItem("orderno");
    orderno=parseInt(orderno)+1;
    localStorage.setItem("orderno",orderno)
    alert(`Your order has been placed. You can collect your order from the shop or wait for it to be delivered. You order number is ${orderno}.`);
  }
}

const pending = document.getElementById("orderspending")
if(pending) {
  const last = localStorage.getItem("orderno");
  if(last==0 || last==null) {
    pending.innerHTML="You have <span class='red'>0</span> pending orders.";
  } else {
      for(let i=1;i<=last;i++) {
      pending.innerHTML+=`<li>Order Number <span class="red">${i}</span><br></li>`
    }
  }
}

function redirectProduct() {
  window.location.href="campusproducts.html"
}

function showsignup() {
  alert("Sign up successfull. Please Login.")
}
