$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 

    $("#userheader").load("userheader.html",function(){
        var signout=$("#logout")
        signout.on("click",function(){
            localStorage.removeItem('token');
            window.location.href='/login.html'
           })
           console.log(signout)
    }); 

    // Logout 


 });