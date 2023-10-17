import {NextPage} from "next";
import MainScreen from "@/app/(site)/components/MainScreen";
import Button from "@/components/UI/Button";
import AboutUs from "@/app/(site)/components/AboutUs";
const HomePage:NextPage = () => {
  return (
    <main>
        <MainScreen/>
        <AboutUs/>
    </main>
  )
}
export default HomePage
