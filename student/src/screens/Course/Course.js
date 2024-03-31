import React, { useState } from "react";
import courseData from "../CourseDetails/CourseDetails";
import learn from "../../assets/learn.png";
import arrow from "../../assets/arrow.png";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import share from "../../assets/share.png";
import star from "../../assets/star.png";
import inbox from "../../assets/inbox.png";
import study from "../../assets/study.png";
import material from "../../assets/material.png";
import '../Course/Course.css';
import Display from "../Display/Display";
import { Link } from 'react-router-dom';
function Course() {
    const [displayShow, setDisplayShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(courseData);
    const handleSearch = () => {
        const filtered = courseData.filter(course => {
            return (
                course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilteredCourses(filtered);
        setSearchQuery('');
    };
    const handleSelect = (item) => {
        setDisplayShow(true);
        setSelectedItem(item);
    }
    return (
        <div>
            <header>
                <img src={learn} alt="down" height="60" width="60" className="headerImage1" />
                <div className="academicBox">
                    <div className="academic">
                        <p>Academic</p>
                        <img src={arrow} alt="down" height="25" width="25" />
                    </div>
                    <div className="skill">
                        <p>Skill Development</p>
                        <img src={arrow} alt="down" height="25" width="25" />
                    </div>
                    <Link to={"/enroll"} style={{ textDecoration: 'none', color: "white" }}>
                        <div className="blog">Students Enrolled</div>
                    </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search Courses & Instructor ....." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <img src={search} alt="search" height="30" width="30" onClick={handleSearch} />
                </div>
                <div className="user">
                    <img src={user} alt="user" height="40" width="40" />
                    <p>User</p>
                </div>
            </header>
            <div className="contentBox">
                <div className="menuSide">
                    <p className="menu">Menu</p>
                    <div className="courses" onClick={() => { setDisplayShow(false); setFilteredCourses(courseData) }}>
                        <img src={study} alt="study" height="25" width="25" />
                        <p>Courses</p>
                    </div>
                    <div className="inbox">
                        <img src={inbox} alt="inbox" height="25" width="25" />
                        <p>Inbox</p>
                    </div>
                    <div className="carts">
                        <img src={cart} alt="cart" height="25" width="25" />
                        <p>Carts</p>
                    </div>
                    <div className="sharing">
                        <img src={share} alt="share" height="25" width="25" />
                        <p>Sharing</p>
                    </div>
                    <div className="achieve">
                        <img src={star} alt="star" height="25" width="25" />
                        <p>Achievements</p>
                    </div>
                </div>
                <div className="courseDetailBox">
                    <div className="welcomeBox">
                        <div>
                            <h1>Welcome User</h1>
                            <p>Education is the passport to the future,So Learn more & more</p>
                            <div className="browser" onClick={() => { setDisplayShow(false); setFilteredCourses(courseData); }}>Browse Courses</div>
                        </div>
                        <img src={material} alt="tool" height="250" width="400" />
                    </div>

                    {displayShow ?
                        <Display selectedItem={selectedItem} /> :
                        <div className="courseMain">
                            <div className="courseHeading">Running Courses</div>
                            <div className="detailsContainer">
                                {filteredCourses.map((course) => (
                                    <div className="detailBox" onClick={() => handleSelect(course)}>
                                        <div className="courseName">{course.name}</div>
                                        <div className="courseDesc">{course.description}</div>
                                        <div className="courseOther">
                                            <div className="instructorBox">
                                                <p className="instructorText">Instructor</p>
                                                <p className="courseInstructor">{course.instructor}</p>
                                            </div>
                                            <div className="durationBox">
                                                <p className="durationText">Duration</p>
                                                <p className="courseDuration">{course.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Course;