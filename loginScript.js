const userNameElm = document.querySelector('.username-input');
const passWordElm = document.querySelector('#password');
const submitButton = document.querySelector('.form-submit-button');
const sorryMsg = document.querySelector('.sorry-msg');

const userName = userNameElm.value;
const passWord = passWordElm.value;

const adminsData = [{
    username: 'admin',
    password: 'admin@1234'
}];

const usersData = [{
    username: 'Avneet',
    password: 'Hello@123'
}];


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userNameElm = document.querySelector('.username-input');
    const passWordElm = document.querySelector('#password');
    const userName = userNameElm.value;
    const passWord = passWordElm.value;
    let loggedin = false;
    if (loggedin === false) {
        for (obj of adminsData) {
            if (obj.username === userName && obj.password === passWord) {
                loggedin = true;
                window.location.replace('http://127.0.0.1:8080/AdminPages/admin.html');
            }
        }

        for (obj of usersData) {
            if (obj.username === userName && obj.password === passWord) {
                loggedin = true;
                window.location.replace('http://127.0.0.1:8080/UserPages/ViewPage.html');
            }
        }
    }
    if(loggedin === false){
        const sorryMarkup = `Sorry, Account does not exist`;
        sorryMsg.textContent = '';
        sorryMsg.textContent = sorryMarkup;
    }
});
