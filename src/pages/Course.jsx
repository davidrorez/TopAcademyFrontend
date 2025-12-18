import { useLayoutEffect  } from "react"
import {  useParams } from "react-router-dom"
import CourseHeader from "../components/Course/CourseHeader"
import CourseDescription from "../components/Course/CourseDescription"
import NotFound from "../components/NotFound/NotFound"
import { coursesInfo } from "../utils/course-info"
import ConsultForm from "../components/ConsultForm/ConsultForm"

export default function CoursePage() {


          useLayoutEffect (() => {
    window.scrollTo(0, 0);
  }, []);

    const { paramName } = useParams();
    const courseExists = coursesInfo.some((course) => course.paramName === paramName);  

    if (!paramName || !courseExists) {
        return (
            <>
            <NotFound />
            </>
        );
    }

    return (
        <>
            <CourseHeader/>    
            <CourseDescription />
            <ConsultForm />
        </>
    )
}
