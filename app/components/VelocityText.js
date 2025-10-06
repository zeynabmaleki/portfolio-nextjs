import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });
    const scrollVelocity = useVelocity(scrollYProgress);
    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <section
            ref={targetRef}
            className="h-[250vh] bg-zinc-800 text-zinc-300"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.p
                    style={{ skewX, x }}
                    className="origin-bottom-left pl-250 pr-350 whitespace-nowrap text-5xl font-light uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                >
                    skills: JavaScript, Tailwind CSS, React JS, Next JS
                </motion.p>
            </div>
        </section>
    );
};