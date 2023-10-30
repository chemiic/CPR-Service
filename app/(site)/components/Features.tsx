'use client'
import Image from "next/image";
import { motion } from "framer-motion";
const Features = () => {
    const featuresArr = [
        {
            src:'',
            title: 'Заголовок1',
            text: 'Основной текст kkafksdfi sdfngniofnvios nono dfsnfivnio sidnionfio nbi sonn vionion ionoi vndfio vdf'
        },
        {
            src:'',
            title: 'Заголовок2',
            text: 'Основной текст kkafksdfi sdfngniofnvios nono dfsnfivnio sidnionfio nbi sonn vionion ionoi vndfio vdf'
        },
        {
            src:'',
            title: 'Заголовок3',
            text: 'Основной текст kkafksdfi sdfngniofnvios nono dfsnfivnio sidnionfio nbi sonn vionion ionoi vndfio vdf'
        }

    ]
    return(
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 2
            }}
            className={`flex items-center gap-10 justify-around py-10 
            mx-auto         
            max-w-screen-2xl
            xl:max-w-7xl
            lg:max-w-6xl
            md:max-w-5xl    
            w-full `}
        >
            {featuresArr.map(feature=>(
                <div key={feature.title} className={`flex flex-col justify-center items-center text-center px-[4vw]`}>
                    <Image src={feature.src} alt={'//'} width={150} height={150}/>
                    <h5 className={`text-xl font-bold`}>{feature.title}</h5>
                    <p>{feature.text}</p>
                </div>
            ))}
        </motion.div>
    )
}
export default Features;