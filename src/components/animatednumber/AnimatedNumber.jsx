
import React, { useEffect, useRef } from 'react';
import './animatedNumber.css';

const AnimatedNumber = ({ number }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const letterWrapClass = 'letter-wrap';
    const letterWrapElements = document.getElementsByClassName(letterWrapClass);

    [...letterWrapElements].forEach(el => {
      letterWrap(el, letterWrapClass);
      letterAnimation(el, letterWrapClass);
    });
  }, []);

  const letterWrap = (el, cls) => {
    const words = el.textContent.split(' ');
    const letters = [];

    cls = cls || 'letter-wrap';

    words.forEach(word => {
      let html = '';
      for (var letter in word) {
        html += `
          <span class="${cls}__char">
            <span class="${cls}__char-inner" data-letter="${word[letter]}">
              ${word[letter]}
            </span>
          </span>
        `;
      }

      let wrappedWords = `<span class="${cls}__word">${html}</span>`;
      letters.push(wrappedWords);
    });

    el.innerHTML = letters.join(' ');
  };

  const letterAnimation = (el, cls) => {
    const tl = new TimelineMax({ paused: true });
    const characters = el.querySelectorAll(`.${cls}__char-inner`);
    const duration = el.getAttribute('data-duration') || 0.3;
    const stagger = el.getAttribute('data-stagger') || 0.03;

    el.animation = tl.staggerTo(characters, duration, {
      y: '-100%',
      ease: Power4.easeOut
    }, stagger);

    el.addEventListener('mouseenter', (event) => event.currentTarget.animation.play());
    el.addEventListener('mouseout', (event) => el.animation.reverse());
  };

  return (
    <div ref={numberRef} className="letter-wrap">
      {number}
    </div>
  );
};

export default AnimatedNumber;
