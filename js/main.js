document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');

    let setupSlider = {
        indicators: true,
        height: 600,
        duration: 500,
        interval: 6000
    };
    var instances = M.Slider.init(elems, setupSlider);
});