import {NextPage} from "next";
import MainScreen from "@/app/(site)/components/MainScreen";
import AboutUs from "@/app/(site)/components/AboutUs";
import Features from "@/app/(site)/components/Features";
import Brands from "@/app/(site)/components/Brands";
const HomePage:NextPage = () => {
  return (
    <main>
        <MainScreen/>
        <AboutUs/>
        <Features/>
        <Brands/>
    </main>
  )
}
export default HomePage
