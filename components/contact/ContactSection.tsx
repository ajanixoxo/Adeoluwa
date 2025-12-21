'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Shuffle from '../Shuffle'

export default function ContactSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section id="contact" ref={sectionRef} className=" bg-dark py-10  relative overflow-hidden ">
            {/* Background Pattern/Doodles */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rotate-45"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-white/20 rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 border-2 border-white/20 -rotate-12"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        How Can I Help?
                    </h2>
                    <p className="font-body text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                        Let&apos;s turn your vision into something amazing.
                    </p>
                </motion.div>

                {/* Email Display */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center min-h-[100px]"
                >
                    <a
                        href="mailto:joelayomide35@gmail.com"
                        className="font-body text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white hover:text-gray-100 transition-colors break-all text-center"
                    >
                        <Shuffle
                            text="joelayomide35@gmail.com"
                            shuffleDirection="right"
                            duration={0.35}
                            animationMode="evenodd"
                            shuffleTimes={1}
                            ease="power3.out"
                            stagger={0.03}
                            threshold={0.5}
                            triggerOnce={true}
                            triggerOnHover={true}
                            respectReducedMotion={false}
                            className=" font-body text-3xl! md:text-4xl! lg:text-6xl! xl:text-7xl!"
                            style={{ color: 'inherit', visibility: 'visible' }}
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

