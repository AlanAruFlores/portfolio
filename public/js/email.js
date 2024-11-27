document.getElementById("sendEmail").addEventListener("click",()=>{
    let fullName = document.getElementById("fullName");
    let mailAddress = document.getElementById("emailAddress");
    let message = document.getElementById("message");

    var params  = {
        from_name: fullName.value,
        email_id: mailAddress.value,
        message: message.value
    }

    emailjs.send("service_l93ksc8","template_xyu33lp",params).then(function(res){
        alert("Enviado");
        fullName.value = "";
        mailAddress.value = "";
        message.value = "";
    });
})