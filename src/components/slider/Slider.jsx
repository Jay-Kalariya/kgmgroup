import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css"; // Import Swiper styles
import styles from "./slider.module.css";
import BigText from "../bigTextHeading/BigText";

const Slider = () => {
  useEffect(() => {
    initSlider(`.${styles.jsSlider}`);
    initCursor();
  }, []);
  const texts = ["PARTNER"];
  const texts1 = ["LOVE"];
  return (
    <>
      <div className={styles.TextHeader}>
        <BigText
          texts={texts}
          xDirection={"-40px"}
          X1Direction={"100px"}
          X2Direction={"100%"}
        />
        <BigText
          texts={texts1}
          xDirection={"200px"}
          X1Direction={"100px"}
          X2Direction={"100%"}
        />
        {/* <p>ssdssdsd</p> */}
      </div>
      <div className={styles.cursor}>
        <div className={styles.cursorInner}>Drag</div>
      </div>

      <div className={styles.sectionSlider}>
        <div className={styles.container}>
          <div className={styles.sectionSliderBody}>
            <div className={`${styles.slider} ${styles.jsSlider}`}>
              <div className={styles.sliderPaging}>
                <div className={styles.paging}>
                  <button type="button" className={styles.pagingPrev}>
                    <svg
                      width="30"
                      height="18"
                      viewBox="0 0 20 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.805.3A1 1 0 005.39.285l-5.091 5a1.003 1.003 0 000 1.428l5.091 5a1 1 0 001.402-1.427L3.446 7.001H19a1 1 0 100-2H3.446l3.346-3.287A1 1 0 006.805.299z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>

                  <button type="button" className={styles.pagingNext}>
                    <svg
                      width="30"
                      height="18"
                      viewBox="0 0 20 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.195 11.7a1 1 0 001.415.014l5.091-5a1.003 1.003 0 000-1.428l-5.091-5a1 1 0 00-1.402 1.427l3.346 3.286H1a1 1 0 100 2h15.554l-3.346 3.287a1 1 0 00-.013 1.415z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className={styles.thumb}>
                      <div className={styles.mainThumb}>
                        <div>
                          <p className={styles.thumbTitle}>Lorem Ipsum</p>
                        </div>
                        <div className={styles.thumbEntry}>
                          <p className={styles.innerText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quae, iure?
                          </p>
                        </div>
                        <div className={styles.thumbActions}>
                          <a href="#" className={styles.linkMore}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className={styles.thumb}>
                      <div className={styles.mainThumb}>
                        <div>
                          <p className={styles.thumbTitle}>Lorem Ipsum</p>
                        </div>
                        <div className={styles.thumbEntry}>
                          <p className={styles.innerText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quae, iure?
                          </p>
                        </div>
                        <div className={styles.thumbActions}>
                          <a href="#" className={styles.linkMore}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles.thumb}>
                      <div className={styles.mainThumb}>
                        <div>
                          <p className={styles.thumbTitle}>Lorem Ipsum</p>
                        </div>
                        <div className={styles.thumbEntry}>
                          <p className={styles.innerText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quae, iure?
                          </p>
                        </div>
                        <div className={styles.thumbActions}>
                          <a href="#" className={styles.linkMore}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles.thumb}>
                      <div className={styles.mainThumb}>
                        <div>
                          <p className={styles.thumbTitle}>Lorem Ipsum</p>
                        </div>
                        <div className={styles.thumbEntry}>
                          <p className={styles.innerText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quae, iure?
                          </p>
                        </div>
                        <div className={styles.thumbActions}>
                          <a href="#" className={styles.linkMore}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const initSlider = (selector, options = {}) => {
  const sliderContainers = document.querySelectorAll(selector);
  if (sliderContainers.length) {
    sliderContainers.forEach((container) => {
      const slider = container.querySelector(".swiper-container");
      const paging = container.querySelector(".js-paging");
      let prev;
      let next;
      if (paging) {
        prev = paging.querySelector(".pagingPrev");
        next = paging.querySelector(".pagingNext");
      }
      const swiper = new Swiper(slider, {
        loop: true,
        speed: 1000,
        slidesPerView: 1.5,
        spaceBetween: 10,
        grabCursor: true,
        breakpoints: {
          1024:{
            slidesPerView: 1.5,
          },
          768:{
            slidesPerView: 1.5,
          }
          // 768: {
          //   slidesPerView: 1,
          //   spaceBetween: 30,
          //   freeMode: true,
          // },
        },
        ...options,
      });
      if (next) next.addEventListener("click", () => swiper.slideNext(1000));
      if (prev) prev.addEventListener("click", () => swiper.slidePrev(1000));

      swiper.on("touchMove", ({ el }) => el.classList.add("dragged"));
      swiper.on("touchEnd", ({ el }) => el.classList.remove("dragged"));
    });
  }
};

const initCursor = () => {
  let clientX = -100;
  let clientY = -100;
  let lastX = -100;
  let lastY = -100;
  const cursor = document.querySelector(`.${styles.cursor}`);
  const section = document.querySelector(`.${styles.sectionSlider}`);

  if (section) {
    section.addEventListener("mouseenter", () =>
      cursor.classList.add(styles.visible)
    );
    section.addEventListener("mouseleave", () =>
      cursor.classList.remove(styles.visible)
    );
  }

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  const render = () => {
    const delta = 0.1;
    lastX = lerp(lastX, clientX, delta);
    lastY = lerp(lastY, clientY, delta);
    cursor.style.transform = `translate(${lastX}px, ${lastY}px)`;
    requestAnimationFrame(render);
  };

  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  requestAnimationFrame(render);
};

export default Slider;
