import Course from "./Course.jsx";
import html from "./assets/html.jpg";
import css from "./assets/css.jpg";
import javascript from "./assets/javascript.jpg";
import react from "./assets/react.jpg";
import { useState } from "react";

const [courses, setCourses] = useState([
    {
        course: "HTML",
        image: html,
        description:"Learn the basics of HTML." ,
        rate: 100
    },
    {
        course: "CSS",
        image: css,
        description:"Master the art of styling with CSS.",
        rate: 50
    },
        {
            id : 1,
            course: "JavaScript",
            image: javascript,
            description:"Dive into JavaScript programming.",
            rate: 150

        },
          {
                id : 2,
            course: "JavaScript",
            image: javascript,
            description:"Dive into JavaScript programming.",
            rate: 150

        },
        {
            id : 3,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        },
        {
            id : 4,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        },
        {   id : 5,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        },
        {
            id : 6,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        },
        {
            id : 7,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        },
        {
            id : 8,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        },
        {
            id : 9,
            course: "React",
            image: react,
            description:"Javascript library .",
            rate:500
        }
    ]
);

function CourseList(){
    const deleteCourse = (id) => {
        const updatedCourses = courses.filter((course) => course.id !== id);
        setCourses(updatedCourses);
    };

    const vfmcourse = courses.filter((course) => course.rate<1000);
    const courseElements = vfmcourse.map(courseItem => (
        <Course
            key={courseItem.id}
            id={courseItem.id}
            course={courseItem.course}
            image={courseItem.image}
            description={courseItem.description}
            rate={courseItem.rate}
            deleteCourse={deleteCourse}
        />
    ));

    return (
        <div className="courseContainer">
            {courseElements}
        </div>
    );
}

export default CourseList;