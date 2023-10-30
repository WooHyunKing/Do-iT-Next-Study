import React from "react";

interface ICourse {
  code: string;
  name: string;
  courseId: string;
  professtorName: string;
}

const Course = async () => {
  const response = await fetch("http://localhost:9999/courses", {
    cache: "no-cache",
  });
  const courses: ICourse[] = await response.json();

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
