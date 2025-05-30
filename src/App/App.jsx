import Navbar from  "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Counter from "../components/Counter/Counter"
import Matters from "../components/Matters/Matters"
import Experts from "../components/Experts/Experts"
import Review from "../components/Review/Review"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"
import Copyright from "../components/Copyright/Copyright"
import "./App.css"

export default function App() {
    // Analytics Google
    // initialize("")
    // useEffect(()=>{
    //     pageview(window.location.pathname)

    // }, [])

    return (
        <div className="app">
            {/* Navbar Section*/}
            <Navbar />
            {/* Header Section*/}
            <Header />
            {/* Section 0 */}
            <Counter />
            {/* Section 1 */}
            <Matters />
            {/* Section 2 */}
            <Experts />
            {/* Section 3 */}

            {/* Section 5 */}
            <Newsletter />
            <Review />
            {/* Section 4 
            <Courses />*/}

            {/* Footer Section*/}
            <Footer />
            {/* Copyright Section*/}
            <Copyright />
        </div>
    )
}