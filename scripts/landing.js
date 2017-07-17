var pointsArray = document.getElementsByClassName('point');

var animatePoints = function (points) {
    var revealPoint = function (points) {
        maxIndex = points.length;
        for (var i = 0; i < maxIndex; i++) {
            points[i].style.opacity = 1;
            points[i].style.transform = "scaleX(1) rotate(360deg) translateY(0)";
            points[i].style.msTransform = "scaleX(1) rotate(360deg) translateY(0)";
            points[i].style.WebkitTransform = "scaleX(1) rotate(360deg) translateY(0)";
        }
    };

    revealPoint(points);
};

window.onload = function () {
    // Automatically animate the points on a tall screen where scrolling won't trigger the animation
    if (window.innerHeight > 950 ) {
        animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function (event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
};
