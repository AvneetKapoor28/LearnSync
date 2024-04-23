let userCoursesList = JSON.parse(localStorage.getItem('UserCourses'));
const allCoursesList = JSON.parse(localStorage.getItem('CoursesList'));
const mainContainer = document.querySelector('.main-container-of-view');
const deletePopUp = document.querySelector('.delete-msg');
const cancelPopUp = document.querySelector('.cancel-btn');
const insideContainer = document.querySelector('.inside-container');
let deleteIcons;


const refreshViewUsersCourses = function () {
    let displayUserCoursesMarkup = '';
    allCoursesList.forEach(course => {
        if (userCoursesList.includes(course.courseCode)) {
            displayUserCoursesMarkup += ` <div class="course-block">
             <div class="course-block-content">
                 <h2>${course.courseTitle}</h2>
                 <h4>${course.courseCode}</h4>
             </div>
             <div class="icons-container">
                 <i class="fa-solid fa-trash" id="${course.courseCode}" ></i>
                 <div class="burger-container burger-container-1">
                    <div class="burger-line"></div>
                     <div class="burger-line"></div>
                    <div class="burger-line"></div>
                 </div>
             </div>
         </div>`

            insideContainer.innerHTML = '';
            insideContainer.innerHTML = displayUserCoursesMarkup;
            deleteIcons = document.querySelectorAll('.fa-trash');
        }
    })
};
refreshViewUsersCourses();

deleteIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        mainContainer.classList.remove('no-blur');
        mainContainer.classList.add('add-blur');
        deletePopUp.classList.remove('hide-filter');
        deletePopUp.classList.add('show-filter');
        const displayTitle = document.querySelector('#display-title');
        displayTitle.innerHTML = '';
        displayTitle.innerHTML = `${icon.id}`;

        const deleteCourseBtn = document.querySelector('.confirm-delete-btn');
        deleteCourseBtn.addEventListener('click', function () {
            userCoursesList = userCoursesList.filter(item => item !== icon.id);
            console.log(userCoursesList);
            localStorage.setItem('UserCourses', JSON.stringify(userCoursesList));
            mainContainer.classList.remove('add-blur');
            mainContainer.classList.add('no-blur');
            deletePopUp.classList.remove('show-filter');
            deletePopUp.classList.add('hide-filter');
            location.reload();
        });

    })
})

cancelPopUp.addEventListener('click', function(){
    mainContainer.classList.remove('add-blur');
    mainContainer.classList.add('no-blur');
    deletePopUp.classList.remove('show-filter');
    deletePopUp.classList.add('hide-filter');
})