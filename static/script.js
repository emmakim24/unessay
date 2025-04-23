//highlights what page is active in nav
console.log(window.location.pathname);
const links = document.querySelectorAll('nav a');
links.forEach(
    element => {
        if (element.href.includes(window.location.pathname)){
            element.classList.add('active');
        }
    }
)


//tells whether open or not on sidebar and visitor info
function isOpen() {
    const d = new Date(); 
    const hour = d.getHours();
    const min = d.getMinutes();
    const totalMin = hour * 60 + min;

    //6:30 am = 390 min
    //11:59 pm = 1439 min
    //12:30 am next day = 30 min
    const openTime = 390;
    const midnight = 1439; 
    const closeTime = 30;

    var openText = "";

    if (openTime <= totalMin && totalMin <= midnight) {
        openText = "Open right now!";
    } else if (0 <= totalMin && totalMin <= closeTime) {
        openText = "Open right now!";
    }else {
        openText = "Closed right now.";
    }
    
    const openSideBar = document.getElementById("sidebar-open");
    const openVisitorInfo = document.getElementById("visitorInfo-open");
    if (openSideBar != null) {
        openSideBar.innerHTML = openText;
    }
    if (openVisitorInfo != null) {
        openVisitorInfo.innerHTML = openText;
    }
}
isOpen();


//open spotlight on photo
$(".home-images img").click(function() {
    const imgSrc = $(this).attr("src");
    $("#spotlight-img").attr("src", imgSrc);
    $("#spotlight").css("display", "flex");
});
//close spotlight on photo
$("#spotlight").click(function() {
    $("#spotlight").css("display", "none");
})
  

//adds year to the footer
function addCopyYear(){
    const d =new Date();
    const year = d.getFullYear();
    const yearSpan = document.getElementById("copyYear");
    yearSpan.innerHTML = year + ".";
}
addCopyYear();


//readmore/less button functions
$("#about-readMore").click(function () {
    $(".about-more").show();
    $(".about-imgs").hide();
    $("#about-readLess").show();
    $("#about-readMore").hide();
});
$("#about-readLess").click(function () {
    $(".about-more").hide();
    $(".about-imgs").show();
    $("#about-readLess").hide();
    $("#about-readMore").show();
});


//checks form validity
function validateForm(event) {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const zipcode = document.getElementById("zipcode");

    let valid = true;

    //fname
    const fnameError = document.getElementById("fnameError");
    if (!fname.checkValidity()) {
        fnameError.innerHTML = fname.validationMessage;
        valid = false;
    } else {
        fnameError.innerHTML = "";
    }

    //lname
    const lnameError = document.getElementById("lnameError");
    if (!lname.checkValidity()) {
        lnameError.innerHTML = lname.validationMessage;
        valid = false;
    } else {
        lnameError.innerHTML = "";
    }

    //email
    const emailError = document.getElementById("emailError");
    if (!email.checkValidity()) {
        emailError.innerHTML = email.validationMessage;
        valid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (!valid) {
        event.preventDefault();
    }
}
document.getElementById("contact-form").addEventListener("submit", validateForm);
