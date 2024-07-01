(function ($) {
    "use strict";

    // Switch theme between light and dark
    $(".switch").on("click", function () {
        $("body").toggleClass("light");
        $(".switch").toggleClass("switched");
    });

    $(document).ready(function () {
        var progressPath = document.querySelector(".progress-wrap path");

        if (progressPath) {
            var pathLength = progressPath.getTotalLength();

            progressPath.style.transition = progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            };

            updateProgress();
            $(window).scroll(updateProgress);

            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 50) {
                    $(".progress-wrap").addClass("active-progress");
                } else {
                    $(".progress-wrap").removeClass("active-progress");
                }
            });

            $(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, 550);
                return false;
            });
        }
    });
})(jQuery);
