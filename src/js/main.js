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
    gsap.utils.toArray("p").forEach(p => {
        gsap.from(p, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power4.Out",
            scrollTrigger: {
                trigger: p,
                start: "top bottom-=50",
            }
        });
    })
}