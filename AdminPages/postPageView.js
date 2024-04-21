import { Courses } from './config.js'
const mainContainer = document.querySelector('.main-container');
const popUp = document.querySelector('.smbtd-msg');
const submitButton = document.querySelector('#submit-btn');
const greatButton = document.querySelector('.great-btn');
const inputs = document.querySelectorAll('input');
const domainInput = document.querySelector('#domain1');

let courseTitle;
let courseCode;
let courseDomain;
let courseStart;
let courseEnd;
let courseProf;

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let CourseDetails = {};
    courseTitle = document.querySelector('#title1').value;
    courseCode = document.querySelector('#courseCode1').value;
    courseDomain = document.querySelector('#domain1').value;
    courseStart = document.querySelector('#startDate1').value;
    courseEnd = document.querySelector('#endDate1').value;
    courseProf = document.querySelector('#profName1').value;
    mainContainer.classList.remove('no-blur');
    mainContainer.classList.add('add-blur');
    popUp.classList.remove('hide-filter');
    popUp.classList.add('show-filter');
    CourseDetails.courseTitle = courseTitle;
    CourseDetails.courseCode = courseCode;
    CourseDetails.courseDomain = courseDomain;
    CourseDetails.courseStart = courseStart;
    CourseDetails.courseEnd = courseEnd;
    CourseDetails.courseProf = courseProf;

    if (!(localStorage.getItem('CoursesList') === null)) {
        let retrievedList = JSON.parse(localStorage.getItem('CoursesList'));
        retrievedList.push(CourseDetails);
        localStorage.setItem('CoursesList', JSON.stringify(retrievedList));
        console.log('added successfully');
    }
    else {
        Courses.push(CourseDetails);
        localStorage.setItem('CoursesList', JSON.stringify(Courses));
        console.log('created successfully');
    }
});

greatButton.addEventListener('click', function () {
    mainContainer.classList.remove('add-blur');
    mainContainer.classList.add('no-blur');
    popUp.classList.remove('show-filter');
    popUp.classList.add('hide-filter');
    inputs.forEach(inp => inp.value = '');
    domainInput.selectedIndex = 0;
    console.log(Courses);

});
