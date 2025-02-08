// Function to active the nav for the current page

window.onload = function() {
    let currentPage = window.location.pathname.split("/").pop(); // Get the current page name
    let navLinks = document.querySelectorAll('#nav-links a'); // Get all navbar links
    
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('activeNav'); // Add 'activeNav' class to the current link
        }
    });
};