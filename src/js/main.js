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
        start: "top bottom-=25%",
    }
})

export function pageTransition() {
    gsap.from("body", {
        duration: 1,
    });
}

export function setupAnimateInOnScroll() {
    const coreAnimationTypes = {
        animate: { attribute: '[data-animate]', settings: { y: 30, x: 0 } },
        animateDown: { attribute: '[data-animate-down]', settings: { y: -30, x: 0 } },
        animateLeft: { attribute: '[data-animate-left]', settings: { y: 0, x: -30 } },
        animateRight: { attribute: '[data-animate-right]', settings: { y: 0, x: 30 } },
    }

    const additionalAnimationTypes = {
        animateMore: { attribute: '[data-animate-more]', settings: { ...coreAnimationTypes.animate.settings, y: 45, duration: 1 } },
        animateDownMore: { attribute: '[data-animate-down-more]', settings: { ...coreAnimationTypes.animateDown.settings, y: -45, duration: 1 } },
        animateLeftMore: { attribute: '[data-animate-left-more]', settings: { ...coreAnimationTypes.animateLeft.settings, x: -45, duration: 1 } },
        animateRightMore: { attribute: '[data-animate-right-more]', settings: { ...coreAnimationTypes.animateRight.settings, x: 45, duration: 1 } }
    }

    const animationTypes = { ...coreAnimationTypes, ...additionalAnimationTypes }

    for (const [key, value] of Object.entries(animationTypes)) {
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