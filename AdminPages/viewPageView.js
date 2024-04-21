
const insideContainer = document.querySelector('.inside-container');

let importedCourses = JSON.parse(localStorage.getItem('CoursesList'));

let markup = '';
const renderViewPage = function () {

    importedCourses.forEach((course, index) => {
        markup +=
            `<div class="course-block">
        <div class="course-block-content">
            <h2>${course.courseTitle}</h2>
            <h4>${course.courseCode}</h4>
        </div>
        <div class="icons-container">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                    <div class="burger-container burger-container-1">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                </div>
    </div>`
    }); insideContainer.innerHTML = '';
    insideContainer.insertAdjacentHTML('afterbegin', markup);
};
renderViewPage();




const mainContainer = document.querySelector('.main-container-of-view');
const popUp = document.querySelector('.smbtd-msg')
const hamburgers = document.querySelectorAll('.burger-container');
const closeButton = document.querySelector('.close-btn');
const displayCode = document.querySelector('#display-code');
const displayTitle = document.querySelector('#display-title');
const displayDomain = document.querySelector('#display-domain');
const displayStart = document.querySelector('#display-startdate');
const displayEnd = document.querySelector('#display-enddate');
const displayProf = document.querySelector('#display-prof');
const viewUsersButton = document.querySelector('.view-users-btn');
const usersPopUp = document.querySelector('.users-container');
const usersCloseBtn = document.querySelector('.close-users-btn');
const usersListContainer = document.querySelector('.users-list');
const userCountDisplay = document.querySelector('.display-count');
const deleteIcons = document.querySelectorAll('.fa-trash');
const deletePopUp = document.querySelector('.delete-msg');
const cancelButton = document.querySelector('.cancel-btn');
const deleteButton = document.querySelector('.confirm-delete-btn');
const modifyIcons = document.querySelectorAll('.fa-pen-to-square');
const modifyPopUp = document.querySelector('.modify-block');
const cancelModifyButton = document.querySelector('.cancel-modify-btn');
const modTitle = document.querySelector('#title1');
const modCourseCode = document.querySelector('#courseCode1');
const modDomain = document.querySelector('#domain1');
const modStartDate = document.querySelector('#startDate1');
const modEndDate = document.querySelector('#endDate1');
const modProfName = document.querySelector('#profName1');
let selectedIndex;
let deleteIconSelectedIndex;
let modifyIconSelectedIndex;




hamburgers.forEach((course, index) => {
    course.addEventListener('click', function () {
        selectedIndex = index;
        displayCode.textContent = importedCourses[index].courseCode;
        displayTitle.textContent = importedCourses[index].courseTitle;
        displayDomain.textContent = importedCourses[index].courseDomain;
        displayStart.textContent = importedCourses[index].courseStart;
        displayEnd.textContent = importedCourses[index].courseEnd;
        displayProf.textContent = importedCourses[index].courseProf;
        mainContainer.classList.remove('no-blur');
        mainContainer.classList.add('add-blur');
        popUp.classList.remove('hide-filter');
        popUp.classList.add('show-filter');
    });
});


closeButton.addEventListener('click', function () {
    if (popUp.classList.contains('move-left')) {
        popUp.classList.add('move-center');
        popUp.classList.remove('move-left');
    }
    mainContainer.classList.remove('add-blur');
    mainContainer.classList.add('no-blur');
    popUp.classList.remove('show-filter');
    popUp.classList.add('hide-filter');
    console.log('onw')
    if (usersPopUp.classList.contains('show-filter')) {
        usersPopUp.classList.add('hide-filter');
        usersPopUp.classList.remove('show-filter');
        usersPopUp.classList.remove('move-right');
        usersPopUp.classList.add('move-center');
    }
})

viewUsersButton.addEventListener('click', function () {
    popUp.classList.add('move-left');
    popUp.classList.remove('move-center');
    usersPopUp.classList.remove('hide-filter');
    usersPopUp.classList.add('show-filter');
    usersPopUp.classList.add('move-right');
    usersPopUp.classList.remove('move-center');

});

usersCloseBtn.addEventListener('click', function () {
    usersPopUp.classList.add('hide-filter');
    usersPopUp.classList.remove('show-filter');
    usersPopUp.classList.remove('move-right');
    usersPopUp.classList.add('move-center');
    popUp.classList.remove('move-left');
    popUp.classList.add('move-center');
})


viewUsersButton.addEventListener('click', function () {
    let usersMarkup = '';
    console.log(selectedIndex);
    if (!(importedCourses[selectedIndex].courseUsers === undefined)) {
        const usersList = importedCourses[selectedIndex].courseUsers;
        console.log(usersList);
        const userCount = usersList.length;
        usersListContainer.innerHTML = '';
        usersList.forEach(user => {
            usersMarkup += `<div class="user-name">${user}</div>`
        });
        userCountDisplay.innerHTML = `${userCount} Users`;
        usersListContainer.innerHTML = usersMarkup;
    }
    else {
        usersListContainer.innerHTML = '';
        usersListContainer.innerHTML = '<div class="user-name">No Registered Users</div>'
        userCountDisplay.innerHTML = `${0} Users`;

    }
});

deleteIcons.forEach((delIcon, index) => {
    delIcon.addEventListener('click', function () {
        deleteIconSelectedIndex = index;
        mainContainer.classList.remove('no-blur');
        mainContainer.classList.add('add-blur');
        deletePopUp.classList.remove('hide-filter');
        deletePopUp.classList.add('show-filter');
    });

});

cancelButton.addEventListener('click', function () {
    mainContainer.classList.add('no-blur');
    mainContainer.classList.remove('add-blur');
    deletePopUp.classList.add('hide-filter');
    deletePopUp.classList.remove('show-filter');
});

// let previousCourses;
deleteButton.addEventListener('click', function () {
    importedCourses.splice(deleteIconSelectedIndex, 1);
    console.log(importedCourses);
    localStorage.setItem('CoursesList', JSON.stringify(importedCourses));
    mainContainer.classList.add('no-blur');
    mainContainer.classList.remove('add-blur');
    deletePopUp.classList.add('hide-filter');
    deletePopUp.classList.remove('show-filter');
    location.reload(true);
});

modifyIcons.forEach((modIcon, index) => {
    modIcon.addEventListener('click', function () {
        modifyIconSelectedIndex = index;
        mainContainer.classList.remove('no-blur');
        mainContainer.classList.add('add-blur');
        modifyPopUp.classList.remove('hide-filter');
        modifyPopUp.classList.add('show-filter');
        modTitle.value = importedCourses[modifyIconSelectedIndex].courseTitle;
        modCourseCode.value = importedCourses[modifyIconSelectedIndex].courseCode;
        modDomain.value = importedCourses[modifyIconSelectedIndex].courseDomain;
        // modStartDate.value = importedCourses[modifyIconSelectedIndex].courseStart;
        modStartDate.value = '2024-05-28';
        console.log(importedCourses[modifyIconSelectedIndex].courseStart);
        modEndDate.value = importedCourses[modifyIconSelectedIndex].courseEnd;
        modProfName.value = importedCourses[modifyIconSelectedIndex].courseProf;

    })
});

cancelModifyButton.addEventListener('click', function () {
    mainContainer.classList.add('no-blur');
    mainContainer.classList.remove('add-blur');
    modifyPopUp.classList.add('hide-filter');
    modifyPopUp.classList.remove('show-filter');
})