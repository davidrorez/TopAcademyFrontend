import Navbar from  "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Counter from "../components/Counter/Counter"
import Matters from "../components/Matters/Matters"
import Experts from "../components/Experts/Experts"
import Review from "../components/Review/Review"
import Courses from "../components/Courses/Courses"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"
import Copyright from "../components/Copyright/Copyright"
import "./App.css"
import {initialize, pageview} from "react-ga"
import { useEffect } from "react"

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
            <Review />
            {/* Section 4 
            <Courses />
            */}
            {/* Section 5 
            <Newsletter />
            */}
            {/* Footer Section*/}
            <Footer />
            {/* Copyright Section*/}
            <Copyright />
        </div>
    )
}