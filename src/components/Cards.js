import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {

    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);

    // returns the list of all courses received from the api response
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                });
            });
            return allCourses;
        } else {
            // Specific category data will be added
            return courses[category];
        }

    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {!courses ? (
                <div>
                    <p>No Data Found</p>
                </div>
            ) : (getCourses().map((course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            }))
            }
        </div>
    )
}

export default Cards;