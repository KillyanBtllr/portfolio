$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



// Get all the buttons that open the modals
var btns = document.querySelectorAll(".portfolio-link");

// Get all the modals
var modals = document.querySelectorAll(".modal");

// Get all the close buttons in modals
var closeBtns = document.querySelectorAll(".close");

// Assign click event listeners to each button
btns.forEach(function(btn, index) {
    btn.onclick = function() {
        modals[index].style.display = "block";
    };
});

// Assign click event listeners to each close button
closeBtns.forEach(function(closeBtn) {
    closeBtn.onclick = function() {
        var modal = closeBtn.parentElement; // Get the parent modal of the close button
        modal.style.display = "none";
    };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
