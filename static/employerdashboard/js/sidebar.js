$(function() {
    $('#layoutSidenav_nav').load('sidebar.html');

    var signout = $('#logout');
    signout.on('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('usertype');

        window.location.href = '../login.html';
    });
    console.log(signout);
});
// Logout