"use strict";

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        //if we add plus at start, we transform a string to a number
        const c = +counter.innerText;
        
        const increment = target / 300;
        // if we take only taget it will increment by itself, so like 3500, 4500, 7500. That's why we divide it through a number, to get an increment steps

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});