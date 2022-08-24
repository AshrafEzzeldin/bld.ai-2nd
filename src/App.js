import "./App.css";
import CourseSection from "./components/CourseSection";
function App() {
  let info = {
    title: "Top courses in Python",
    header: "Expand your career opportunities with Python",
    description:
      "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
    followers: 1253,
    clicked: "python",
  };

  let courses = [
    {
      id: 394676,
      title: "Learn Python: The Complete Python Programming Course",
      headline:
        "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
      rating: 4.372561,
      image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      price: 16.99,
    },
    {
      id: 396876,
      title: "Learning Python for Data Analysis and Visualization",
      headline:
        "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
      rating: 3.3899083,
      image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
      price: 19.99,
    },
    {
      id: 405878,
      title: "Python for Beginners - Learn Programming from scratch",
      headline:
        "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
      rating: 4.40372,
      image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
      price: 14.99,
    },
    {
      id: 426570,
      title: "Learn Python: Python for Beginners",
      headline:
        "Python introduction for beginners. Learn complete Python from scratch!",
      rating: 4.2765956,
      image: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
      price: 16.99,
    },
    {
      id: 449532,
      title: "Python Beyond the Basics - Object-Oriented Programming",
      headline:
        "From Classes To Inheritance - OOP In-Depth For Python Programmers",
      rating: 4.3240743,
      image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
      price: 17.99,
    },
    {
      id: 482754,
      title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
      headline:
        "2 courses in 1. Python and Selenium WebDriver from scratch for Automation Testing, SQL Crash Course, Framework Design",
      rating: 4.654122,
      image: "https://img-c.udemycdn.com/course/750x422/482754_7146_6.jpg",
      price: 18.99,
    },
    {
      id: 519554,
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      headline:
        "Short, colorful apps and games you can use to teach and learn programming at any age! Chromebook, PC, Mac and Linux!",
      rating: 4.527941,
      image: "https://img-c.udemycdn.com/course/750x422/519554_da68_6.jpg",
      price: 15.99,
    },
  ];

  return (
    <div className="App">
      <CourseSection info={info} courses={courses} />
    </div>
  );
}

export default App;
