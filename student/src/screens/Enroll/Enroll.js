import React, { useState } from "react";
import courseData from "../CourseDetails/CourseDetails";
import learn from "../../assets/learn.png";
import study1 from "../../assets/study1.png";
import '../Enroll/Enroll.css';
import { Link } from 'react-router-dom';

function Enroll() {
    const [courseList, setCourseList] = useState(courseData);

    const toggleCompletion = (courseId, studentId) => {
        const updatedCourses = courseList.map(course => {
            if (course.id === courseId) {
                const updatedStudents = course.students.map(student => {
                    if (student.id === studentId) {
                        return { ...student, completed: !student.completed };
                    }
                    return student;
                });
                return { ...course, students: updatedStudents };
            }
            return course;
        });
        setCourseList(updatedCourses);
    };

    return (
        <div>
            <header>
                <img src={learn} alt="down" height="60" width="60" className="headerImage1" />
                <h3 className="stdEnroll">Student Enrollment</h3>
                <Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>
                    <div className="courses cl-white">
                        <img src={study1} alt="study1" height="25" width="25" />
                        <p>Courses</p>
                    </div>
                </Link>
            </header>
            <div className="studentMain">
                {courseList.map((course) => (
                    <div key={course.id} className="studentContainer">
                        <h2>{course.name}</h2>
                        <div className="studInstructor"><span>Instructor: </span><p>{course.instructor}</p></div>
                        <div className="studEnroll">Students Enrolled:</div>
                        <div className="studentMainBox">
                            {course.students.map((student) => (
                                <div key={student.id} className="studentBox">
                                    <div className="nameBox"><span>Name: </span><p>{student.name}</p></div>
                                    <div className="mailBox"><span>Email: </span><p>{student.email}</p></div>
                                    <div className="complete" onClick={() => toggleCompletion(course.id, student.id)} style={{ backgroundColor: student.completed ? 'green' : 'blue' }}>
                                        {student.completed ? "Completed" : "Not Completed"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Enroll;
