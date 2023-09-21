function createjobitem(job) {
    return `<div class="col-lg-4 col-md-6 mt-4 pt-2">
    <div class="list-grid-item rounded" >
        <div class="grid-item-content p-3">
            <ul class="list-inline mb-0">
                <li class="list-inline-item f-15"><span class="badge badge-success">${job.jobtype}</span></li>
            </ul>
            <div class="grid-list-img mt-3">
                <img src="images/featured-job/img-2.png" alt="" class="img-fluid d-block">
            </div>
            <div class="grid-list-desc mt-3">
                <h5 class="mb-1"><a href="/job-details.html?id=${job._id}" class="text-dark">${job.jobtitle}</a></h5>
                <p class="text-muted f-14 mb-1">${job.city}</p>
                <p class="text-muted mb-1">Rs. ${job.minimumsalary} - ${job.maximumsalary} / month </p>
                <p class="text-muted mb-1">${job.exprienceminimum} - ${job.expriencemaximum} Years Exp.</p>
            </div>
        </div>
        
        <div class="apply-button p-3 border-top">
            <a href="/upload-resume.html?id=${job._id}" class="btn btn-primary btn-sm">Apply Now</a>
        </div>
    </div>
</div>`;
}
(function($) {
    var categoryselector = $('#select-category');

    var submit = $('#category-submit');

    var category = null;

    submit.on('click', function(e) {
        e.preventDefault();
        getjobs(category);
    });
    categoryselector.on('change', function() {
        category = this.value;
    });
    getjobs();
})(jQuery);

// let paginationStart = 0;
// let paginationEnd = 3;
// let index = 0

// const pagination = (e) => {
//     // e.preventDefault();
//     paginationStart = paginationEnd + 1
//     paginationEnd = paginationEnd + 3
    
//     console.log('Page2 => ', paginationStart, paginationEnd)
// }


// function createPagination(number, onclick, prev, next) {
//     return `<li class="page-item active"><input type="submit" value="${number}" class="page-link" id="paginate" /></li>`;
// }

// (function($) {
//     var paginate = $('#paginate')

//     paginate.on('click', function(e) {
//         e.preventDefault();
//         pagination();
//         console.log('Clicked')
//     });
// })(jQuery);

// document.querySelector('#paginate').onclick(() => {
//     pagination();
//     return false
// })


function getjobs(category) {
    var joblist = $('#job-list');
    const jobPagination = $('#job-pagination')
    var url = '/api/jobs/getjobs?';

    if (category) {
        url += 'jobcategory=' + category;
    }
    $.ajax({
        type: 'get',
        url: url,
        // data:JSON.stringify(job),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            
            // var newdata=data.slice(0,5);
                console.log("SLiced Data => ", data.job.slice(0, 3));
                console.log('Data Paginate => ', (data.job.length / 3).toFixed(0))
            joblist.empty();

            //const paginated = (data.job.length / 3).toFixed(0)

            // data.job.slice(0, 20).forEach((item, index) => {
            //     jobPagination.append(createPagination(index))
            // })

            
            data.job.forEach((job) => {
              //  console.log('Page => ', paginationStart, paginationEnd)
                joblist.append(createjobitem(job));
            });
        },

        error: function(error) {},
    });
}