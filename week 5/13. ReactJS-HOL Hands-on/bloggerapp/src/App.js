import React from "react";

import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;

  const showBlogs = true;

  const showCourses = false;

  let courseComponent;

  if (showCourses) {

    courseComponent = <CourseDetails />;

  }

  return (

    <div className="App">

      <h1>Blogger Application</h1>

      {/* Method 1 : && Operator */}

      {showBooks && <BookDetails />}

      <hr />

      {/* Method 2 : Ternary Operator */}

      {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      <hr />

      {/* Method 3 : Element Variable */}

      {courseComponent}

    </div>

  );

}

export default App;