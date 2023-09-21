window.addEventListener(
    'load',
    function () {
        //Confirm Password Validation
        var password = document.getElementById('upassword'),
            confirm_password = document.getElementById('confirm_password');

        function validatePassword() {
            if (password.value != confirm_password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }

        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;

    
 
//SignupJobseeker
var uname=document.getElementById('uname');
var uemail=document.getElementById('uemail');
var ucontact=document.getElementById('ucontact');
var upassword=document.getElementById('upassword');

var empname=document.getElementById('empname');
var empemail=document.getElementById('empemail');
var empcontact=document.getElementById('empcontact');
var emppassword=document.getElementById('emppassword');

var empsignup = document.getElementById('employersignupform');
        
        var usersignup = document.getElementById('usersignupform');
        usersignup.onsubmit = function (e) {
            e.preventDefault();
            var body = {
                fullname: uname.value,
                email: uemail.value,
                contactnumber: ucontact.value,
                password: upassword.value,
            };
            $.ajax({
                type: 'POST',
                url: '/api/jobseeker/register',
                data: JSON.stringify(body),
                contentType: 'application/json',
                dataType: 'json',
                success: function (json){
                    // var data=JSON.parse(json)
                    alert("You have Successfully Registered");
                    
                    window.location.href = '/login.html';
                },
                error: function (error) {},
            });
        };


        empsignup.onsubmit = function (e) {
            e.preventDefault();
            var body = {
                fullname: empname.value,
                email: empemail.value,
                contactnumber: empcontact.value,
                password: emppassword.value,
            };
            $.ajax({
                type: 'POST',
                url: '/api/employer/register',
                data: JSON.stringify(body),
                contentType: 'application/json',
                dataType: 'json',
                success: function (json){
                    // var data=JSON.parse(json)
                    alert("You have Successfully Registered");
                    
                    window.location.href = '/login.html';
                },
                error: function (error) {},
            });
        };
  
  
   




}, false)




   

// function formValidation() {
//     // var uid = document.registration.userid;
//     var passid = document.registration.passid;
//     var uname = document.registration.username;
//     // var uadd = document.registration.address;
//     // var ucountry = document.registration.country;
//     // var uzip = document.registration.zip;
//     var uemail = document.registration.uemail;
//     // var uage = document.registration.uage;
//     var umsex = document.registration.msex;
//     var ufsex = document.registration.fsex;
//     if (userid_validation(uid, 5, 12)) {
//         if (allLetter(uname)) {
//             //if(alphanumeric(uadd))
//             //{
//             //if(countryselect(ucountry))
//             //{
//             //if(allnumeric(uzip))
//             //{
//             if (ValidateEmail(uemail)) {
//                 if (passid_validation(passid, 7, 12)) {
//                     if (validsex(umsex, ufsex)) {
//                     }
//                 }
//             }
//             //}
//             //}
//             //}
//         }
//     }
//     return false;
// }
