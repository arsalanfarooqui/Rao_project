function createjobdetail(job) {
    return `<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h4 class="text-dark mb-3"></h4>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8 col-md-7">
            <div class="job-detail border rounded p-4">
                <div class="job-detail-content">
                    <img src="images/featured-job/img-4.png" alt="" class="img-fluid float-left mr-md-3 mr-2 mx-auto d-block">
                    <div class="job-detail-com-desc overflow-hidden d-block">
                        <h4 class="mb-2"><a href="#" class="text-dark">${job.jobtitle}</a></h4>
                        <p class="text-muted mb-0"><i class="mdi mdi-link-variant mr-2">${job.emailaddress}</i></p>
                        <p class="text-muted mb-0"><i class="mdi mdi-map-marker mr-2"></i>${job.city}</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h5 class="text-dark mt-4">Job Description :</h5>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="job-detail border rounded mt-2 p-4">
                        <div class="job-detail-desc">
                        
                            <p class="text-muted mb-3">${job.jobdescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h5 class="text-dark mt-4">Qualification :</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="job-detail border rounded mt-2 p-4">
                        <div class="job-detail-desc">
                            <div class="job-details-desc-item">
                                <div class="float-left mr-3">
                                    <i class="mdi mdi-send text-primary">${job.educationlevel}</i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h5 class="text-dark mt-4">Primary Responsibilities :</h5>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="job-detail border rounded mt-2 p-4">
                        <div class="job-detail-desc">
                            <div class="job-details-desc-item">
                                <div class="float-left mr-3">
                                    <i class="mdi mdi-send text-primary"></i>
                                </div>
                                <p class="text-muted mb-2">HTML, CSS & Scss</p>
                            </div>

                            <div class="job-details-desc-item">
                                <div class="float-left mr-3">
                                    <i class="mdi mdi-send text-primary"></i>
                                </div>
                                <p class="text-muted mb-2">Javascript</p>
                            </div>

                            <div class="job-details-desc-item">
                                <div class="float-left mr-3">
                                    <i class="mdi mdi-send text-primary"></i>
                                </div>
                                <p class="text-muted mb-2">PHP</p>
                            </div>

                            <div class="job-details-desc-item">
                                <div class="float-left mr-3">
                                    <i class="mdi mdi-send text-primary"></i>
                                </div>
                                <p class="text-muted mb-2">Photoshop</p>
                            </div>

                            <div class="job-details-desc-item">
                                <div class="float-left mr-3">
                                    <i class="mdi mdi-send text-primary"></i>
                                </div>
                                <p class="text-muted mb-0">Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-5 mt-4 mt-sm-0">
            <div class="job-detail border rounded p-4">
                <h5 class="text-muted text-center pb-2"><i class="mdi mdi-map-marker mr-2"></i>Location</h5>

                <div class="job-detail-location pt-4 border-top">
                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-bank text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">:${job.jobtitle}</p>
                    </div>

                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-email text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">:${job.emailaddress} </p>
                    </div>

                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-web text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">:${job.emailaddress}</p>
                    </div>

                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-cellphone-iphone text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">: ${job.phonenumber}</p>
                    </div>

                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-currency-usd text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">: ${job.minimumsalary} - ${job.maximumsalary}/month</p>
                    </div>

                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-security text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">: ${job.exprienceminimum} To ${job.expriencemaximum} Years.</p>
                    </div>

                    <div class="job-details-desc-item">
                        <div class="float-left mr-2">
                            <i class="mdi mdi-clock-outline text-muted"></i>
                        </div>
                        <p class="text-muted mb-2">: 4 minutes ago</p>
                    </div>

                    <h6 class="text-dark f-17 mt-3 mb-0">Share Job :</h6>
                    <ul class="social-icon list-inline mt-3 mb-0">
                        <li class="list-inline-item"><a href="https://www.facebook.com/Job-Intel-100177512486510" class="rounded"><i class="mdi mdi-facebook"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="rounded"><i class="mdi mdi-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="rounded"><i class="mdi mdi-google-plus"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="rounded"><i class="mdi mdi-whatsapp"></i></a></li>
                        <li class="list-inline-item"><a href="#" class="rounded"><i class="mdi mdi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="job-detail border rounded mt-4 p-4">
                <h5 class="text-muted text-center pb-2"><i class="mdi mdi-clock-outline mr-2"></i>Opening Hours</h5>

                <div class="job-detail-time border-top pt-4">
                    <ul class="list-inline mb-0">
                        <li class="clearfix text-muted border-bottom pb-3">
                            <div class="float-left">Monday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">9AM - 7PM</h5>
                            </div>
                        </li>

                        <li class="clearfix text-muted border-bottom pb-3">
                            <div class="float-left">Tuesday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">9AM - 7PM</h5>
                            </div>
                        </li>

                        <li class="clearfix text-muted border-bottom pb-3">
                            <div class="float-left">Wednesday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">9AM - 7PM</h5>
                            </div>
                        </li>

                        <li class="clearfix text-muted border-bottom pb-3">
                            <div class="float-left">Thursday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">9AM - 7PM</h5>
                            </div>
                        </li>

                        <li class="clearfix text-muted border-bottom pb-3">
                            <div class="float-left">Friday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">9AM - 7PM</h5>
                            </div>
                        </li>

                        <li class="clearfix text-muted border-bottom pb-3">
                            <div class="float-left">Saturday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">6:30AM - 1PM</h5>
                            </div>
                        </li>

                        <li class="clearfix text-muted pb-0">
                            <div class="float-left">Sunday</div>
                            <div class="float-right">
                                <h5 class="f-13 mb-0">Closed</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="job-detail border rounded mt-4">
                <a href="upload-resume.html?id=${job._id}" class="btn btn-primary btn-block">Apply For Job</a>
            </div>
        </div>
    </div>
</div>`;
}
(function($) {
    // alert('error_message');
    var jobdetail = $('#job-detail');
    var urlQuery = new URLSearchParams(window.location.search);
    $.ajax({
        type: 'get',
        url: '/api/jobs/' + urlQuery.get('id'),
        // data:JSON.stringify(job),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            jobdetail.append(createjobdetail(data.job));
        },
        // alert(json.toString())

        error: function(error) {},
    });
})(jQuery);