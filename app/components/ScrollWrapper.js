// components/ScrollWrapper.js
'use client';

import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

export default function ScrollWrapper({ children }) {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '4px',
                    width: '100%',
                    transformOrigin: 'left',
                    scaleX: scrollYProgress,
                }}
                className='bg-gradient-to-r from-violet-600 to-fuchsia-600 z-50'
            />
            {children}
        </>
    );
}