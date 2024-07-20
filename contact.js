var wa_button = document.querySelector(".wa-button");
wa_button.addEventListener("click", handleClick);
function handleClick(){
    window.location.href = "https://wa.me/+917888002878?text=Reach out to us on whatsapp for any queries.";

}

var mail_button = document.querySelector(".mail-button");
mail_button.addEventListener("click", mailClick);
function mailClick(){
    window.location.href = "mailto:shrutilap01@gmail.com";

}

var phone_button = document.querySelector(".phone-button");
phone_button.addEventListener("click", phoneClick);
function phoneClick(){
    window.location.href = "tel:+917888002878";

}