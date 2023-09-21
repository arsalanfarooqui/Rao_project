window.addEventListener(
    'load',
    function() {
        var title = document.getElementById('jobtitle');
        var job_type = document.getElementById('job-type');
        var job_category = document.getElementById('job-category');
        var minimum_salary = document.getElementById('minimum-salary');
        var maximum_salary = document.getElementById('maximum-salary');
        var minimum_experience = document.getElementById('minimum-experience');
        var maximum_experience = document.getElementById('maximum-experience');
        var degreelevel = document.getElementById('degreelevel');
        var city = document.getElementById('city');
        var email = document.getElementById('email');
        var contact = document.getElementById('contact');
        var gender = document.getElementById('gender');
        var shift = document.getElementById('shift');
        var description = document.getElementById('description');

        var jobpost = document.getElementById('postjobform');
        jobpost.onsubmit = function(e) {
            e.preventDefault();
            var body = {
                jobtitle: title.value,
                jobtype: job_type.options[job_type.selectedIndex].value,
                jobcategory: job_category.options[job_category.selectedIndex].value,
                minimumsalary: minimum_salary.options[minimum_salary.selectedIndex].value,
                maximumsalary: maximum_salary.options[maximum_salary.selectedIndex].value,
                exprienceminimum: minimum_experience.options[minimum_experience.selectedIndex].value,
                expriencemaximum: maximum_experience.options[maximum_experience.selectedIndex].value,
                educationlevel: degreelevel.options[degreelevel.selectedIndex].value,
                city: city.value,
                emailaddress: email.value,
                phonenumber: contact.value,
                gender: gender.options[gender.selectedIndex].value,
                shift: shift.options[shift.selectedIndex].value,
                jobdescription: description.value,
            };
            console.log(body);
            $.ajax({
                type: 'POST',
                url: '/api/employer/postajob',
                data: JSON.stringify(body),
                contentType: 'application/json',
                dataType: 'json',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                success: function(json) {
                    // var data=JSON.parse(json)
                    // alert(json.toString())
                    alert('You have successfully posted your job');
                },
                error: function(error) {},
            });
        };
    },
    false,
);