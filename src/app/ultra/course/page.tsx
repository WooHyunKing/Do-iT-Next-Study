"use client";
import React, { useEffect, useState } from "react";

interface ICourse {
  code: string;
  name: string;
  courseId: string;
  professtorName: string;
}

const Course = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const getCourse = async () => {
    const response = await fetch("http://localhost:9999/courses");
    const courses = await response.json();
    console.log(courses);
    setCourses(courses);
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <div>
          <span>
            {course.code}_ {course.name}({course.courseId})
          </span>
          <span>{course.professtorName}</span>
        </div>
      ))}
    </div>
  );
};

export default Course;
