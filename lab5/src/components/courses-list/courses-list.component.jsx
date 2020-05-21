import './courses-list.styles.css';
import React from 'react'

const courses = [{ "name": "intenesive", "duration": 6 }, { "name": "normal", "duration": 3 }, { "name": "light", "duration": 1.5 }]

export const CoursesList = (props) => {

    const listItems = courses.map((course) =>
        <li key={course.duration.toString()}>
            <b>{course.name}</b>: {course.duration} per week
        </li>
    )

    return (
        <ul>
            {listItems}
        </ul>
    )
}