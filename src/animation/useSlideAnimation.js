// Create a new file named useSlideAnimation.js
import { useEffect } from 'react';

const useSlideAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target); // Stop observing once revealed
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useSlideAnimation;
