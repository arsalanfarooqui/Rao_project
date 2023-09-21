window.addEventListener('load',
    function() {
        var job = ['jobtitle', 'jobtype', 'jobcategory', 'minimumsalary', 'maximumsalary', 'exprienceminimum', 'expriencemaximum', 'educationlevel', 'city', 'gender', 'shift', 'jobdescription'];
        var $listgroup = $("get-jobs");
        alert('Ali')
        $.ajax({

            type: "get",
            url: 'http://localhost:3000/api/jobs/getjobs',
            // data:JSON.stringify(job),
            contentType: 'application/json',
            dataType: "json",
            success: function(data) {

                $("<li/>", {
                    class: "get-jobs-item",
                    dataid: data.id,
                    html: data.title
                }).appendTo($listgroup)

            },
            // alert(json.toString())

            error: function(error) {

            }


        })

    }, false)