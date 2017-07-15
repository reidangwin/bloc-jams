var animatePoints = function() {

    var revealPoint = function(maxIndex) {
        var points = document.getElementsByClassName('point');
        for (var i = 0; i<maxIndex; i++) {
            points[i].style.opacity = 1;
            points[i].style.transform = "scaleX(1) rotate(360deg) translateY(0)";
            points[i].style.msTransform = "scaleX(1) rotate(360deg) translateY(0)";
            points[i].style.WebkitTransform = "scaleX(1) rotate(360deg) translateY(0)";
        }
    };

    revealPoint(3);
};

animatePoints();