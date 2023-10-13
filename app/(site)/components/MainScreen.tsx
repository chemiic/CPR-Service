'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import mainScreen from '@/public/main-screen.jpg'
const MainScreen = () => {
    return (
        <div className={`relative w-full overflow-y-hidden h-[550px] flex `}>
            <div className={` z-10
              relative
              mx-auto
              max-w-screen-2xl
              xl:max-w-7xl
              lg:max-w-6xl
              md:max-w-5xl
              w-full 
              before:w-[100vw] before:h-full before:absolute before:right-[85%] before:bg-white 
              `}>
                <motion.svg className={`absolute top-110px w-[640px] z-20]
                `} x="0px" y="0px" viewBox="0 0 649 578">
                    <path fill='#fff' d="M-225.5,154.7l358.45,456.96c7.71,9.83,21.92,11.54,31.75,3.84l456.96-358.45c9.83-7.71,11.54-21.92,3.84-31.75L267.05-231.66c-7.71-9.83-21.92-11.54-31.75-3.84l-456.96,358.45C-231.49,130.66-233.2,144.87-225.5,154.7z"></path>
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                        }}
                        fill='none'
                        stroke='#3882f6'
                        d='M 416 -21 l 202.27 292.91 c 5.42 7.85 3.63 18.59 -4.05 24.25 L 198 603'
                        strokeWidth='2.5'
                        strokeMiterlimit='10'
                        strokeDashoffset='0'
                        strokeDasharray='900.258'/>
                </motion.svg>
                <motion.div className={`relative h-[550px] z-20 flex flex-col justify-center gap-3`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{
                                type: "spring",
                                duration: 1.5
                            }}
                >
                    <h1 className={`text-5xl mt-10 font-bold`}>Ремонт и обслуживание<br/> француузкихх авто</h1>
                    <h2 className={`text-3xl mb-6`}>Citroen, Peugeot, Renault</h2>
                </motion.div>
            </div>
            <Image src={mainScreen}
                   alt={'it must be a photo of car but something go wrong'}
                   width={800}
                   height={500}
                   className={`mx-auto w-[100%] absolute`}
            />
        </div>
    )
}
export default MainScreen;