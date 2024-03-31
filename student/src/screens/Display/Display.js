import React from "react";
import "../Display/Display.css";
function Display({ selectedItem }) {
    return (
        <div className="displayBoxContainer">
            <h1 className="disName">{selectedItem.name}</h1>
            <div className="instructor">
                <span>Instructor: </span>
                <p>{selectedItem.instructor}</p>
            </div>
            <div className="description">
                <p className="descriptionText"> Description: </p>
                <p className="descriptionAns">{selectedItem.description}</p>
            </div>
            <div className="Enroll">
                <span> Enrollment status: </span>
                <p>{selectedItem.enrollmentStatus}</p>
            </div>
            <div className="time">
                <span> Course duration: </span>
                <p>{selectedItem.duration}</p>
            </div>
            <div className="schedule">
                <p className="scheduleText"> Schedule: </p>
                <p className="scheduleAns">{selectedItem.schedule}</p>
            </div>
            <div className="location">
                <span> Location: </span>
                <p>{selectedItem.location}</p>
            </div>
            <div className="requirements">Pre-requisites: </div>
            {selectedItem.prerequisites.map((list) => (
                <li>{list}</li>
            ))}
            <p className="syllabus">Syllabus:</p>
            <div className="syllabusContainer">
                {
                    selectedItem.syllabus.map((book) => (
                        <div className="syllabusBox">
                            <div className="week">
                                <span>Week: </span>
                                <p>{book.week}</p>
                            </div>
                            <div className="topic">
                                <span>Topic: </span>
                                <p>{book.topic}</p>
                            </div>
                            <div className="content">
                                <p className="contentText">Content: </p>
                                <p className="contentAns">{book.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Display;