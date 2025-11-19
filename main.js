let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px', 
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 800, origin: 'left' });
sr.reveal('.heading', { delay: 800, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' });
sr.reveal('.services-container .box', { delay: 600, origin: 'top' });
sr.reveal('.about-container .box', { delay: 600, origin: 'top' });
sr.reveal('.about-img', { origin: 'left'  });
sr.reveal('.reviews-container', { delay: 600, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });

// <!-- ✅ Your Script (fixed version) -->

    document.addEventListener("DOMContentLoaded", function () {
      const overlay = document.getElementById('overlay');
      const signUpBtn = document.querySelector('.sign-up');
      const signInBtn = document.querySelector('.sign-in');
      const signUpForm = document.getElementById('signupForm');
      const signInForm = document.getElementById('signinForm');
      const signupFormData = document.getElementById('signupFormData');
      const signinFormData = document.getElementById('signinFormData');

      // open sign-up
      signUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
      });

      // open sign-in
      signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
      });

      // close all
      window.closeForm = function () {
        overlay.classList.remove('active');
        signUpForm.style.display = 'none';
        signInForm.style.display = 'none';
      };

      // ✅ Handle Create Account Submit
      signupFormData.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Account Created Successfully🎉");
        closeForm();
      });

      // ✅ Handle Sign In Submit
      signinFormData.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Signed In Successfully✨");
        closeForm();
        window.location.href = "index.html";
      });
    });


    
  // ✅ Attach event only once, after DOM loads
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop form from auto submitting

      const location = document.getElementById("location").value.trim();
      const pickupDate = document.getElementById("pickupDate").value;
      const returnDate = document.getElementById("returnDate").value;

      if (location === "" || pickupDate === "" || returnDate === "") {
        alert("⚠️ Please fill Location, Pick-Up Date, and Return Date!");
        return; // stops here
      }

      // ✅ success only once
      alert("✅ Form submitted successfully!");
      window.location.href = "form.html";
    });
  });




  


  
