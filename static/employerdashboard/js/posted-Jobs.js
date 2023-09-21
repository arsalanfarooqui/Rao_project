function createjobitem(jobs) {
    return `<div class="col-lg-4 col-md-6 mt-4 pt-2">
    <div class="list-grid-item rounded" >
        <div class="grid-item-content p-3">
            <ul class="list-inline mb-0">
                <li class="list-inline-item f-15"><span class="badge badge-success">${jobs.jobtype}</span></li>
            </ul>
            <div class="grid-list-img mt-3">
                <img src="images/featured-job/img-2.png" alt="" class="img-fluid d-block">
            </div>
            <div class="grid-list-desc mt-3">
                <h5 class="mb-1"><a  class="text-dark">${jobs.jobtitle}</a></h5>
                <p class="text-muted f-14 mb-1">${jobs.city}</p>
                <p class="text-muted mb-1">Rs. ${jobs.minimumsalary} - ${jobs.maximumsalary} / month </p>
                <p class="text-muted mb-1">${jobs.exprienceminimum} - ${jobs.expriencemaximum} Years Exp.</p>
            </div>
        </div>
        
        <div class="apply-button p-3 border-top">
            <a href="cvs.html?id=${jobs._id}" class="btn btn-primary btn-sm">Applicant CV's</a>
            <a href="posted-jobs-details.html?id=${jobs._id}" class="btn btn-primary btn-sm">Job Detail</a>
        </div>
        
    </div>
</div>`;
}
(function($) {
    var joblist = $('#job-list');
    $.ajax({
        type: 'get',
        url: '/api/employer/getjobs',
        // data:JSON.stringify(job),
        contentType: 'application/json',
        dataType: 'json',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        success: function(data) {
            // var newdata=data.slice(0,5);

            data.jobs.forEach((jobs) => {
                joblist.append(createjobitem(jobs));
            });
        },
        // alert(json.toString())

        error: function(error) {},
    });
})(jQuery);