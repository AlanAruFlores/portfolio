document.getElementById("sendEmail").addEventListener("click",()=>{
    let fullName = document.getElementById("fullName");
    let mailAddress = document.getElementById("emailAddress");
    let message = document.getElementById("message");


    if(fullName.value == "" || mailAddress.value == "" || message.value== ""){
        document.getElementById("error").textContent="Complete los campos faltantes";
        return ;
    }

    if(!mailAddress.value.includes("@gmail.com")){
        document.getElementById("error").textContent="Campo email no valido";
        return ;
    }


    var params  = {
        from_name: fullName.value,
        email_id: mailAddress.value,
        message: message.value
    }

    
    document.getElementById("panel_loading").classList.remove("hidden");
    document.getElementById("panel_loading").classList.add("flex");

    setTimeout(()=>{
        emailjs.send("service_l93ksc8","template_xyu33lp",params).then(function(res){
            alert("Enviado");
            fullName.value = "";
            mailAddress.value = "";
            message.value = "";
    
            
            document.getElementById("panel_loading").classList.add("hidden");
            document.getElementById("panel_loading").classList.remove("flex");
            document.getElementById("error").textContent="";
        
        });
    },3000);
    
})