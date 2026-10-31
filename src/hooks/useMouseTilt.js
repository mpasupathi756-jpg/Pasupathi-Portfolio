import { useState, useEffect, useRef } from 'react';

export const useMouseTilt = ({ maxTiltX = 6, maxTiltY = 8, scale = 1.02, maxTranslate = 6 } = {}) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: `perspective(1000px) scale(${scale}) rotateX(0deg) rotateY(0deg) translate(0px, 0px)`,
  });

  useEffect(() => {
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return;

    let requestRef;
    let targetX = 0;
    let targetY = 0;
    let targetTranslateX = 0;
    let targetTranslateY = 0;

    let currentX = 0;
    let currentY = 0;
    let currentTranslateX = 0;
    let currentTranslateY = 0;

    let time = 0;
    let isIdle = true;

    const handleMouseMove = (e) => {
      isIdle = false;
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const normalizedX = Math.max(-1, Math.min(1, deltaX / (window.innerWidth / 2)));
      const normalizedY = Math.max(-1, Math.min(1, deltaY / (window.innerHeight / 2)));

      targetY = normalizedX * maxTiltY;
      targetX = -(normalizedY * maxTiltX);
      targetTranslateX = normalizedX * maxTranslate;
      targetTranslateY = normalizedY * maxTranslate;
    };

    const handleMouseLeave = () => {
      isIdle = true;
      targetX = 0;
      targetY = 0;
      targetTranslateX = 0;
      targetTranslateY = 0;
    };

    let timeoutId;
    const handleMouseStop = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isIdle = true;
      }, 2000);
    };

    const handleMouseMoveCombined = (e) => {
      handleMouseMove(e);
      handleMouseStop();
    };

    const animate = () => {
      time += 0.05;

      let idleX = 0;
      let idleY = 0;
      if (isIdle) {
        idleX = Math.sin(time) * 1.5;
        idleY = Math.cos(time * 0.8) * 1.5;
      }

      currentX += (targetX + idleX - currentX) * 0.1;
      currentY += (targetY + idleY - currentY) * 0.1;
      currentTranslateX += (targetTranslateX - currentTranslateX) * 0.1;
      currentTranslateY += (targetTranslateY - currentTranslateY) * 0.1;

      setStyle({
        transform: `perspective(1000px) scale(${scale}) rotateX(${currentX}deg) rotateY(${currentY}deg) translate(${currentTranslateX}px, ${currentTranslateY}px)`,
        willChange: 'transform'
      });

      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMoveCombined);
    document.addEventListener('mouseleave', handleMouseLeave);

    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveCombined);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestRef);
      clearTimeout(timeoutId);
    };
  }, [maxTiltX, maxTiltY, scale, maxTranslate]);

  return { ref, style };
};

