window.onload = function() {
    var uploadresumeform = document.getElementById('uploadresumeform');
    console.log(uploadresumeform);
    var uploadcv = document.getElementById('upload-cv');

    uploadresumeform.addEventListener(
        'submit',
        function(e) {
            e.preventDefault();

            var urlQuery = new URLSearchParams(window.location.search);

            var formData = new FormData();

            formData.append('resume', uploadcv.files[0]);
            formData.append('jobId', urlQuery.get('id'));

            axios
                .post('/api/jobseeker/applyforjob', formData, {
                    headers: {
                        authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                })
                .then(function(response) {
                    alert('Upload Successful');
                })
                .catch(function(err) {
                    console.log(err);
                    alert(err.response.data.error);
                });
        },
        false,
    );
};