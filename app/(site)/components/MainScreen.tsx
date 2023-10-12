'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import mainScreen from '@/public/main-screen.jpg'
const MainScreen = () => {
    return (
        <div className={`relative w-full overflow-y-hidden h-[550px] flex `}>
            <motion.svg className={`absolute  top-110px w-[740px]`} x="0px" y="0px" viewBox="0 0 649 578">
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
            <div className={`z-10 relative h-[550px]`}>
                <h1 className={`text-5xl mt-10`}>Типо заголовок</h1>
            </div>
            <Image src={mainScreen}
                   alt={'it must be a photo of car but something go wrong'}
                   width={800}
                   height={300}
                   className={`mx-auto h-full`}
            />
        </div>
    )
}
export default MainScreen;