function pindahKeHalaman1() {
    window.location.href = "template1.html";
  }
function pindahKeHalaman2() {
    window.location.href = "template2.html";
  }
  function pindahTemplate() {
    window.location.href = "template.html";
  }
function home() {
    window.location.href = "Home.html";
  }

  const backButton = document.getElementById('backButton');

// Add a click event listener to the button
backButton.addEventListener('click', () => {
    // Go back to the previous page in the browser history
    window.history.back();
});

const goToWhatsApp = document.getElementById('goToWhatsApp');

// Set the URL you want to navigate to
const targetUrl = 'https://wa.me/6289654977462'; // Replace this with your desired URL

// Add a click event listener to the button
goToWhatsApp.addEventListener('click', () => {
    // Navigate to the target URL when the button is clicked
    window.location.href = targetUrl;
});