import Navbar from  "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Counter from "../components/Counter/Counter"
import Matters from "../components/Matters/Matters"
import Experts from "../components/Experts/Experts"
import Review from "../components/Review/Review"
import Newsletter from "../components/Newsletter/Newsletter"
import LocationMap from "../components/Location/LocationMap"
import Footer from "../components/Footer/Footer"
import Copyright from "../components/Copyright/Copyright"
import ImageComponent from "../components/ImageComponent/ImageComponent"
import Graduations from "../components/Graduations/Graduations"
import "./App.css"

export default function App() {
    // Analytics Google
    // initialize("")
    // useEffect(()=>{
    //     pageview(window.location.pathname)

    // }, [])

    return (
        <div className="app">
            <Navbar />

            <Header />

            <Counter />

            <Matters />

            <Experts />

            <Graduations />

            <Review />

            <LocationMap />
            
            <Newsletter />
            
            <ImageComponent />

            <Footer />

            <Copyright />

        </div>
    )
}