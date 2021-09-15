import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function pageTransition() {
    gsap.from("body", {
        opacity: 0,
        duration: 1,
        ease: "power4.Out",
    });
}

export function animateInOnScroll() {
    const defaults = {
        opacity: 0,
        duration: 0.5,
        ease: "power4.Out",
        scrollTrigger: {
            start: "top bottom-=50",
            markers: true,
        }
    }

    const animationTypes = [
        { attribute: '[data-animate]', settings: { ...defaults, y: 30, x: 0 } },
        { attribute: '[data-animate-down]', settings: { ...defaults, y: -30, x: 0 } },
        { attribute: '[data-animate-left]', settings: { ...defaults, y: 0, x: -30 } },
        { attribute: '[data-animate-right]', settings: { ...defaults, y: 0, x: 30 } }
    ]

    animationTypes.forEach(animationType => {
        const allElements = gsap.utils.toArray(animationType.attribute)

        allElements.forEach(element => {
            const trigger = { scrollTrigger: { trigger: element } }
            const defaultSettings = { ...defaults, ...trigger }

            const settings = Object.assign(animationType.settings, defaultSettings)

            console.log('settings: ', settings);

            gsap.from(element, settings);
        })
    })
}