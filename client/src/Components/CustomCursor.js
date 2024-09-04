import React, { useEffect } from 'react';
import './Cursor.css'; // Import CSS for cursor styling

const CustomCursor = () => {
  useEffect(() => {
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");
    let clientX = -100;
    let clientY = -100;
    let isHover = false;

    if (cursorInner && cursorOuter) {
      const onMouseMove = (e) => {
        if (!isHover) {
          cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        clientX = e.clientX;
        clientY = e.clientY;
      };

      const onMouseEnter = () => {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      };

      const onMouseLeave = (e) => {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.closest(".cursor-pointer")
        ) {
          return;
        }
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      };

      const onSliderEnter = () => {
        cursorOuter.classList.add("cursor-big");
      };

      const onSliderLeave = () => {
        cursorOuter.classList.remove("cursor-big");
      };

      document.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseenter", onMouseEnter, true);
      document.body.addEventListener("mouseleave", onMouseLeave, true);
      document.querySelectorAll(".slider-drag").forEach((el) => {
        el.addEventListener("mouseenter", onSliderEnter);
        el.addEventListener("mouseleave", onSliderLeave);
      });

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.body.removeEventListener("mouseenter", onMouseEnter, true);
        document.body.removeEventListener("mouseleave", onMouseLeave, true);
        document.querySelectorAll(".slider-drag").forEach((el) => {
          el.removeEventListener("mouseenter", onSliderEnter);
          el.removeEventListener("mouseleave", onSliderLeave);
        });
      };
    }
  }, []);

  return (
    <>
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"><span>Drag</span></div>
    </>
  );
};

export default CustomCursor;
