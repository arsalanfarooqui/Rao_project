window.addEventListener(
    'load',
    function() {
        alert('error');
        //   var menuName = $(".menu > h3")
        if (!localStorage.getItem('token')) {
            window.location.href = '/login.html';
        } else {
            $.ajax({
                type: 'GET',
                url: '/api/employer/profile',
                contentType: 'application/json',
                dataType: 'json',
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },

                success: function(json) {
                    // console.log(json);
                    //  console.log(menuName);
                    //  menuName.html(json.user.fullname);
                    sessionStorage.setItem('user', JSON.stringify(json.user));
                },
                error: function(error) {
                    window.location.href = '/login.html';
                    console.log(error);
                    localStorage.removeItem('token');
                    localStorage.removeItem('usertype');
                },
            });
        }
    },
    false,
);