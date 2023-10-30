'use client'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import BrandsImg from '@/public/brands.jpg'
import {useRef} from "react";
const Brands = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const imageValue = useTransform(scrollYProgress, [0, 1], [-100, 0])
    const BrandsImgAnim = useSpring(imageValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return(
        <section className={`
            flex
            justify-between
            overflow-hidden
            relative
            h-[569px]
            `}
            ref={containerRef}
        >
            <div className={`max-w-[40vw] z-20`}>
                <motion.h2 className={`text-4xl font-bold`}>
                    Обслуживаем бренды
                    <span className={`block w-10 bg-blue-600 h-1 my-3`}></span>
                </motion.h2>
                <p className={`font-semibold text-neutral-600 mb-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, cupiditate ducimus eum expedita explicabo fugiat hic iure laudantium maxime molestias nostrum officia praesentium repellat tempora ullam voluptatum. Nostrum, similique.</p>
            </div>

            <motion.svg className={`absolute right-[-20vw] top-0 h-full z-10`} x="0px" y="0px" viewBox="0 0 1920 537">
                <path fill='#f5f5f5' d="M964.33,189.3L1110.08,0H0v537h1338.31L972.96,255.7C952.24,239.74,948.38,210.02,964.33,189.3z"></path>
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                    }}
                    fill='none'
                    stroke='#3882f6'
                    d='M1854.35,105.63l-485.31-340.84c-18.3-12.85-43.56-8.44-56.42,9.86L971.79,259.96c-12.85,18.3-8.44,43.56,9.86,56.42l485.31,340.84c18.3,12.85,43.56,8.44,56.42-9.86l340.84-485.31C1877.07,143.74,1872.65,118.48,1854.35,105.63z'
                    strokeWidth='3'
                    strokeMiterlimit='10'
                    strokeDashoffset='0'
                    strokeDasharray='2626.648681640625'/>
            </motion.svg>
            <motion.div
                className={`absolute `}
                style={{ top: BrandsImgAnim }}
            >
                <Image src={BrandsImg} alt={`car`}/>
            </motion.div>
        </section>
    )
}
export default Brands;