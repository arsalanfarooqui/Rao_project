//var jobSeekerEmail
function createRow(applicant) {

    function toObject(pdf){
        str = pdf.toString().replace(/(\r\n|\n|\r|\+)/gm, "")
        str2 = str.toString().replace(/(\')/gm, "\"")
        json = JSON.parse(str2)
        console.log(json);

        return json;
  }
  obj=toObject(applicant.pdf)

  console.log("Applicant Mobile Number =>",obj.mobile_number)
    console.log('Applicant Data',applicant)
   // jobSeekerEmail=obj.email
    console.log("Email => ", obj.email)
    
    return `<tr>
    <td>${applicant.user.fullname}</td>
    <td><a class="btn btn-primary btn-sm" href="${applicant.cvLink}" target="_blank" role="button">CV</a></td>
    <td>${obj.mobile_number}</td>
    <td>${obj.email}</td>   
</tr>`;

}
// <a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" data-email="${obj.email}" role="button">Send Email</a>
(function($) {
    var table = $('#table-rows');
   // var recipientEmail=$('#recipient-name')
    var urlQuery = new URLSearchParams(window.location.search);
    $.ajax({
        type: 'get',
        url: '/api/employer/job/' + urlQuery.get('id') + '/getApplicant',
        // data:JSON.stringify(job),
        contentType: 'application/json',
        dataType: 'json',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        success: function(data) {
           // var newdata=data.slice(0,5);
            
            // $('#exampleModal').on('show.bs.modal', function (event) {
            //     console.log('Event=>',event)
            //     var button = $(event.relatedTarget) // Button that triggered the modal
            //     var recipient = button.data('whatever') // Extract info from data-* attributes
            //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            //     var modal = $(this)
               
              // console.log('Email=>',event.relatedTarget.dataset.email)
              // modal.find('.modal-title').text('New message to ' +event.relatedTarget.dataset.email)
              // modal.find('.modal-body input').val(+event.relatedTarget.dataset.email)
                
            //  })
            
            data.job.applicants.forEach((applicant) => {
               recipientEmail=applicant.user.email
                table.append(createRow(applicant));
            });
            const datatablesSimple = document.getElementById('datatablesSimple');
            if (datatablesSimple) {
                new simpleDatatables.DataTable(datatablesSimple);
                
            }

        },
        // alert(json.toString())

        error: function(error) {},
    });
})(jQuery);


// const form=document.getElementById('#EmailForm')
// function sendEmail(e){
//     e.preventDefault();   
//     emailBody=document.getElementById("message-text");
// //Sending Email
// Email.send({
//     SecureToken:"f0100437-2653-45b6-8617-531c45d0f7de",
//     Host : "smtp.yourisp.com",
//     Username : "hafizalihummad@gmail.com",
//     Password : "099806B84A4EDD6787F99E7FC34152CE30D4",
//     To : 'hafizalihummad@gmail.com',
//     From : "hafizalihummad@gmail.com",
//     Subject : "This is the subject",
//     Body : emailBody
// }).then(
//   message => alert(message)
// );
// }
// form.addEventListener('submit',sendEmail);
