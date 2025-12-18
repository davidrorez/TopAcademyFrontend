import { useEffect } from "react";
import Header from "../components/Header/Header"
import Counter from "../components/Counter/Counter"
import Matters from "../components/Matters/Matters"
import Experts from "../components/Experts/Experts"
import Review from "../components/Review/Review"
import Newsletter from "../components/Newsletter/Newsletter"
import LocationMap from "../components/Location/LocationMap"
import ImageComponent from "../components/ImageComponent/ImageComponent"
import Graduations from "../components/Graduations/Graduations"
import ConsultForm from "../components/ConsultForm/ConsultForm"

export default function HomePage() {
    useEffect(() => {
        const hash = window.location.hash;
            if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
                }, 150);
            }
        }
    }, []);
    return (
        <>
            <Header />
            <Counter />
            <Matters />  
            <Experts />
            <Graduations />
            <Review />
            <LocationMap />
            <Newsletter />
            <ConsultForm />
            <ImageComponent />
        </>
    )
}
