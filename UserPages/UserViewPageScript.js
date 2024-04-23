const userCoursesList = JSON.parse(localStorage.getItem('UserCourses'));
const allCoursesList = JSON.parse(localStorage.getItem('CoursesList'));
const insideContainer = document.querySelector('.inside-container');

let displayUserCoursesMarkup = '';


allCoursesList.forEach(course => {
    if (userCoursesList.includes(course.courseCode)) {
        displayUserCoursesMarkup += ` <div class="course-block">
             <div class="course-block-content">
                 <h2>${course.courseTitle}</h2>
                 <h4>${course.courseCode}</h4>
             </div>
             <div class="icons-container">
                 <i class="fa-solid fa-trash"></i>
                 <div class="burger-container burger-container-1">
                    <div class="burger-line"></div>
                     <div class="burger-line"></div>
                    <div class="burger-line"></div>
                 </div>
             </div>
         </div>`

        insideContainer.innerHTML = '';
        insideContainer.innerHTML = displayUserCoursesMarkup;
    }
})