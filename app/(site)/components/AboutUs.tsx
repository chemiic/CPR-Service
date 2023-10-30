'use client'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Button from "@/components/UI/Button";
import Image from "next/image";
import aboutUs from "@/public/about-us-main.png";
import aboutUs1Left from "@/public/about-us-1-left.png";
import aboutUs2Left from "@/public/about-us-2-left.png";
import aboutUs1Right from "@/public/about-us-1-right.png";
import {useRef} from "react";
import PhoneNumber from "@/components/PhoneNumber";

const AboutUs = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const imageValue = useTransform(scrollYProgress, [0, 1], [-25, 5])
    const aboutFrontAnim = useSpring(imageValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return(
        <>
            <section className={`w-full flex justify-center items-center gap-8 py-6 bg-neutral-100 text-right`} >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0, }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        duration: 1.5
                    }}>
                    <h2 className={`text-4xl mb-2 font-semibold`}>Выездная диагностика</h2>
                    <p className={`text-xl`}>По область выедзда</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0, }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        duration: 1.5
                    }}>
                    <Button >Подробнее</Button>
                </motion.div>
            </section>
            <section className={`flex 
            justify-between
            my-20
            gap-6
            mx-auto         
            max-w-screen-2xl
            xl:max-w-7xl
            lg:max-w-6xl
            md:max-w-5xl    
            w-full 
              `}
                     ref={containerRef} >
                <div className={`lg:max-w-[40vw]`}>
                    <h2 className={`text-4xl font-bold`}>О нас<span className={`block w-10 bg-blue-600 h-1 my-3`}></span></h2>
                    <p className={`font-semibold text-neutral-600 mb-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, cupiditate ducimus eum expedita explicabo fugiat hic iure laudantium maxime molestias nostrum officia praesentium repellat tempora ullam voluptatum. Nostrum, similique.</p>
                    <p className={`text-neutral-500`}><span>Lorem psum dolor sit amet, consectetur adipisicing elit. Ab aspernatur blanditiis debitis eos excepturi fuga illum ipsa ipsum magnam nemo nostrum nulla odio quibusdam repellat, reprehenderit repudiandae sapiente velit veritatis?</span><span>Cum dicta ducimus et eum excepturi fugit inventore labore, maxime, optio quae quaerat quia quis sed sequi voluptatibus. Ad architecto cum dignissimos dolore illum iure officiis quaerat saepe suscipit ut.</span></p>
                    <motion.div className={`flex items-center mt-4`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            duration: 2
                        }}>
                        <Button>Подробнее</Button>
                        <PhoneNumber className={``}/>
                    </motion.div>
                </div>
                <div className={`lg:max-w-[450px] flex-grow relative `}>
                    <motion.div
                            className={`relative mt-2`}
                            style={{ top: aboutFrontAnim }}
                    >
                        <Image src={aboutUs} alt={`авто`} width={320} height={320} className={`w-[440px] h-auto`}/>
                    </motion.div>
                    <Image src={aboutUs1Left} alt={``} width={110} height={110} className={`absolute top-0 left-5`}/>
                    <Image src={aboutUs2Left} alt={``} width={70} height={70} className={`absolute bottom-10 left-9`}/>
                    <Image src={aboutUs1Right} alt={``} width={95} height={95} className={`absolute right-2 top-[13%]`}/>
                </div>
            </section>
        </>
    )
}
export default AboutUs