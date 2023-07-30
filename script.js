function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.borderBottom = ""; // Reset bottom border for all tabs
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active"); // Add active class to the clicked tab link
    evt.currentTarget.style.borderBottom = "2px solid black"; // Set bottom border for the active tab

    // Add box shadow to the container of the text
    var containerText = document.querySelector(".tab-content.active .Container");
    containerText.style.boxShadow = "0 0 8px rgba(0, 0, 0, 0.3)";

}

// Set default tab
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab-link")[0].classList.add("active");
document.getElementsByClassName("tab-link")[0].style.borderBottom = "2px solid black"; // Set bottom border for the default active tab
