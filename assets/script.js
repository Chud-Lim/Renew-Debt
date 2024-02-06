document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const body = document.body;

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('open');
        body.classList.toggle('menu-open'); // We'll use this to darken the body
    });

    // Close the menu if clicked outside
    document.addEventListener('click', function (e) {
        if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('open');
            body.classList.remove('menu-open');
        }
    });

    // form with scrubber function
    var slider = document.getElementById("debtSlider");
    var display = document.getElementById("value-display");

    function updateSlider() {
        var value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, rgb(15 163 83) ${value}%, #ddd ${value}%)`;
        display.textContent = "$" + parseInt(slider.value).toLocaleString();
    }

    slider.addEventListener('input', updateSlider);
    updateSlider(); // Initial call to set the slider position and display value
});
