import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
    opacity: 0,
    duration: 0.75,
    y: 0,
    x: 0,
    ease: "power4.Out",
    scrollTrigger: {
        start: "top bottom-=50",
    }
})

export function pageTransition() {
    gsap.from("body", {
        opacity: 0,
        duration: 1,
        ease: "power4.Out",
    });
}

export function setupAnimateInOnScroll() {
    const coreAnimationTypes = {
        animate: { attribute: '[data-animate]', settings: { y: 30, x: 0 } },
        animateDown: { attribute: '[data-animate-down]', settings: { y: -30, x: 0 } },
        animateLeft: { attribute: '[data-animate-left]', settings: { y: 0, x: -30 } },
        animateRight: { attribute: '[data-animate-right]', settings: { y: 0, x: 30 } },
    }

    // const additionalAnimationTypes = {
    //     animateMore: { attribute: '[data-animate-more]', settings: { ...coreAnimationTypes.animate.settings, duration: 1.5 } }
    // }

    // const animationTypes = { ...coreAnimationTypes, ...additionalAnimationTypes }

    for (const [key, value] of Object.entries(coreAnimationTypes)) {
        console.log('value: ', value);
        animateInOnScroll(value)
    }
}

function animateInOnScroll(animationType) {
    const allElements = gsap.utils.toArray(animationType.attribute)

    allElements.forEach(element => {
        const trigger = {
            scrollTrigger: {
                trigger: element
            }
        }
        const settings = Object.assign(animationType.settings, { ...trigger })

        gsap.from(element, settings);
    })
}