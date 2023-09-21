// Login Work
var userlogin = document.getElementById('userloginform');
var employerlogin = document.getElementById('employerloginform');
var uemail = document.getElementById('useremail');
var upassword = document.getElementById('userpassword');
var empemail = document.getElementById('empemail');
var emppassword = document.getElementById('emppassword');
var loginError = document.getElementById('loginError');
var btnmodal = document.getElementById('successmodal');
var btnmodalemp = document.getElementById('successmodalemp');

userlogin.onsubmit = function(e) {
    e.preventDefault();
    var body = {
        email: uemail.value,
        password: upassword.value,
    };

    $.ajax({
        type: 'POST',
        url: '/api/jobseeker/login',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function(json) {
            btnmodal.append('');
            $('#okbutton').click(function() {
                $('#successmodal').modal('hide');
                window.location.href = '/userdashboard.html';
            });
            $('#successmodal').modal('show');
            localStorage.setItem('token', json.token);
            localStorage.setItem('usertype', json.usertype);
        },
        error: function(error) {
            loginError.innerHTML = "<span style='color:red'>" + 'Invalid email or password</span>';
            console.log(error);
        },
    });
};
employerlogin.onsubmit = function(e) {
    e.preventDefault();
    var body = {
        email: empemail.value,
        password: emppassword.value,
    };

    $.ajax({
        type: 'POST',
        url: '/api/employer/login',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function(json) {
            btnmodalemp.append();
            $('#okbuttonemp').click(function() {
                $('#successmodalemp').modal('hide');
                window.location.href = '/employerdashboard/employerdashboard.html';
            });
            $('#successmodalemp').modal('show');
           

            localStorage.setItem('token', json.token);
            localStorage.setItem('usertype', json.usertype);
        },
        error: function(error) {
            loginError.innerHTML = "<span style='color:red'>" + 'Invalid email or password</span>';
            console.log(error);
        },
    });
};