document.getElementById("hamburguer_menu").addEventListener("click",()=>{
    const navbar = document.getElementById("navbarMobile");
    navbar.style.opacity="1";
    navbar.style.visibility="visible";
});

document.getElementById("close_menu").addEventListener("click", ()=>{
    const navbar = document.getElementById("navbarMobile");
    navbar.style.opacity="0";
    navbar.style.visibility="hidden";
});