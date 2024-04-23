let importedCourses = JSON.parse(localStorage.getItem('CoursesList'));

const courseBlockParent = document.querySelector('.course-block-parent');
const registerBtn = document.querySelector('.register-btn');
const mainContainer = document.querySelector('.main-container-of-view');
const checkoutPopUp = document.querySelector('.checkout-popup')
const checkoutCoursesInnerBlock = document.querySelector('.checkout-courses')
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutCancelBtn = document.querySelector('.checkout-cancel-btn');

let selectedCourses;
let UserCoursesList = [];

if (!(localStorage.getItem('UserCourses') === null)) {
    UserCoursesList = JSON.parse(localStorage.getItem('UserCourses'));
}


const renderViewUserPage = function () {
    let markup = '';
    importedCourses.forEach((course, index) => {
        if (!(UserCoursesList.includes(course.courseCode))) {
            markup +=
                `<div class="course-block">
                <div class="course-block-content">
                    <div class="input-label">
                        <input type="checkbox" class="checkbox" id="${course.courseTitle}" name="${course.courseTitle}"
                            value="${course.courseCode}">
                        <!-- <label for="JavaScript Fundamentals"> -->
                        <h2>${course.courseTitle}</h2>
                        <!-- </label> -->
                    </div>
                    <h4>${course.courseCode}</h4>
                </div>
            </div>`
        }
    }); courseBlockParent.innerHTML = '';
    courseBlockParent.insertAdjacentHTML('afterbegin', markup);
};
renderViewUserPage();


registerBtn.addEventListener('click', function () {
    console.log('clicked on register');
    const allListedCourses = document.querySelectorAll('.checkbox');
    selectedCourses = [];
    allListedCourses.forEach((course, index) => {
        if (course.checked) {
            selectedCourses.push(course);
        }
    });


    mainContainer.classList.remove('no-blur');
    mainContainer.classList.add('add-blur');
    checkoutPopUp.classList.remove('hide-filter');
    checkoutPopUp.classList.add('show-filter');

    let checkoutMarkup = '';
    selectedCourses.forEach(course => {
        checkoutMarkup += `<p>${course.name}<span>${course.value}</span></p>`
    });
    checkoutCoursesInnerBlock.innerHTML = '';
    checkoutCoursesInnerBlock.innerHTML = checkoutMarkup;



});

checkoutBtn.addEventListener('click', function () {
    selectedCourses.forEach(course => {
        UserCoursesList.push(course.value);
    });
    localStorage.setItem('UserCourses', JSON.stringify(UserCoursesList));
    renderViewUserPage();

    mainContainer.classList.remove('add-blur');
    mainContainer.classList.add('no-blur');
    checkoutPopUp.classList.remove('show-filter');
    checkoutPopUp.classList.add('hide-filter');
});

checkoutCancelBtn.addEventListener('click', function(){
    mainContainer.classList.remove('add-blur');
    mainContainer.classList.add('no-blur');
    checkoutPopUp.classList.remove('show-filter');
    checkoutPopUp.classList.add('hide-filter');
})