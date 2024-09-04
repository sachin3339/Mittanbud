import React, { useEffect } from 'react';
import $ from 'jquery';

const ProgressCircle = () => {
  useEffect(() => {
    // jQuery code to initialize progress circle
    $(".switch").on("click", function () {
      $("body").toggleClass("light");
      $(".switch").toggleClass("switched");
    });

    $(document).ready(function () {
      var path = document.querySelector(".progress-wrap path");
      var pathLength = path.getTotalLength();

      path.style.transition = path.style.WebkitTransition = "none";
      path.style.strokeDasharray = pathLength + " " + pathLength;
      path.style.strokeDashoffset = pathLength;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var progress = pathLength - scroll * pathLength / (documentHeight - windowHeight);
        path.style.strokeDashoffset = progress;
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

      $(".progress-wrap").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 550);
        return false;
      });
    });
  }, []);

  return (
    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ProgressCircle;
