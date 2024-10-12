const $ = document;

/// start respons ///

const containerBWMsignIn = $.querySelector("#container-BWM-signIn");
const containerSWMsignIn = $.querySelector("#container-SWM-signIn");
const containerBWMsignUp = $.querySelector("#container-BWM-signUp");
const containerSWMsignUp = $.querySelector("#container-SWM-signUp");

function loadPage(){

    containerBWMsignIn.style.display = "none";
    containerSWMsignIn.style.display = "none";
    containerBWMsignUp.style.display = "none";
    containerSWMsignUp.style.display = "none";

    let screenWidth = window.innerWidth;

    let searchLocation = new URLSearchParams(location.search);
    let searchLocationParam = searchLocation.get("request");

    if( searchLocationParam == "signIn" ){

        if( screenWidth >= 630 ){
            containerBWMsignIn.style.display = "grid";
        }else{
            containerSWMsignIn.style.display = "block";
        }

    }else if( searchLocationParam == "signUp" ){

        if( screenWidth >= 630 ){
            containerBWMsignUp.style.display = "grid";
        }else{
            containerSWMsignUp.style.display = "block";
        }

    }
};

window.addEventListener("load", loadPage);
window.addEventListener("resize",loadPage);

/// end respons ///



/// start Sign Up ///

function remAlert(){
    let alertBox = $.querySelector(".alert");
    alertBox.style.display = "none";
}

/// Sign up BMW ///

const BWMSignUpName = $.querySelector("#BWM-SignUp-Name");
const BWMSignUpPassword = $.querySelector("#BWM-SignUp-Password");
const BWMSignUprePassword = $.querySelector("#BWM-SignUp-rePassword");
const BWMSignUpBtn = $.querySelector("#BWM-SignUp-Btn");

function BWMsignUp(){

    let BWMSignUpNameValue = BWMSignUpName.value ;
    let BWMSignUpPasswordValue = BWMSignUpPassword.value ;
    let BWMSignUprePasswordValue = BWMSignUprePassword.value ;
    let isName = JSON.parse(localStorage.getItem("Name")) == BWMSignUpNameValue;

    if( BWMSignUpNameValue ){
        if( BWMSignUpPasswordValue && BWMSignUprePasswordValue){

            if( !isName ){
    
                if( BWMSignUpPasswordValue == BWMSignUprePasswordValue){
                    localStorage.setItem("Name",JSON.stringify(BWMSignUpNameValue));
                    localStorage.setItem("Password",JSON.stringify(BWMSignUpPasswordValue));
                }else{
                    $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">پسورد درست تکرار نشده است !</h1></div>");
                    setTimeout(remAlert,2000);
                }
    
            }else{
                $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">این حساب کاربری وجود دارد !</h1></div>");
                setTimeout(remAlert,2000);
            }
    
        }else{
            $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">لطفا فیلد پسورد و تکرار پسورد را پر کنید !</h1></div>");
            setTimeout(remAlert,2000);
        }
    }else{
        $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">نام کاربری را وارد کنید !</h1></div>");
        setTimeout(remAlert,2000);
    }
    
    BWMSignUpName.value = "";
    BWMSignUpPassword.value = "";
    BWMSignUprePassword.value = "";
}

BWMSignUpBtn.addEventListener("click",BWMsignUp);

/// Sign up SMW ///

const SWMSignUpName = $.querySelector("#SWM-SignUp-Name");
const SWMSignUpPassword = $.querySelector("#SWM-SignUp-Password");
const SWMSignUprePassword = $.querySelector("#SWM-SignUp-rePassword");
const SWMSignUpBtn = $.querySelector("#SWM-SignUp-Btn");

function SWMsignUp(){
    let SWMSignUpNameValue = SWMSignUpName.value ;
    let SWMSignUpPasswordValue = SWMSignUpPassword.value ;
    let SWMSignUprePasswordValue = SWMSignUprePassword.value ;
    let isName = JSON.parse(localStorage.getItem("Name")) == SWMSignUpNameValue;

    if( SWMSignUpNameValue ){
        if( SWMSignUpPasswordValue && SWMSignUprePasswordValue){

            if( !isName ){
    
                if( SWMSignUpPasswordValue == SWMSignUprePasswordValue){
                    localStorage.setItem("Name",JSON.stringify(SWMSignUpNameValue));
                    localStorage.setItem("Password",JSON.stringify(SWMSignUpPasswordValue));
                }else{
                    $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">پسورد درست تکرار نشده است !</h1></div>");
                    setTimeout(remAlert,2000);
                }
    
            }else{
                $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">این حساب کاربری وجود دارد !</h1></div>");
                setTimeout(remAlert,2000);
            }
    
        }else{
            $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">لطفا فیلد پسورد و تکرار پسورد را پر کنید !</h1></div>");
            setTimeout(remAlert,2000);
        }
    }else{
        $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">نام کاربری را وارد کنید !</h1></div>");
        setTimeout(remAlert,2000);
    }

    SWMSignUpName.value = "";
    SWMSignUpPassword.value = "";
    SWMSignUprePassword.value = "";

}

SWMSignUpBtn.addEventListener("click",SWMsignUp);
/// end Sign Up ///



/// start Sign In ///

const BWMSignInName = $.querySelector("#BWM-SignIn-Name");
const BWMSignInPassword = $.querySelector("#BWM-SignIn-Password");
const BWMSignInBtn = $.querySelector("#BWM-SignIn-Btn");

function BWMsignIn(){

    let BWMSignInNameValue = BWMSignInName.value ;
    let BWMSignInPasswordValue = BWMSignInPassword.value ;
    let isName = JSON.parse(localStorage.getItem("Name")) == BWMSignInNameValue;
    let isPassWord = JSON.parse(localStorage.getItem("Password")) == BWMSignInPasswordValue;

    if( isName ){
        if( isPassWord ){
            $.body.insertAdjacentHTML("afterbegin","<div class=\"alert tureAlert\"><h1 id=\"massageAlert\">خوش آمدید :)</h1></div>");
            setTimeout(remAlert,2000);
        }else{
            $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">پسورد اشتباه است !</h1></div>");
            setTimeout(remAlert,2000);
        }
    }else{
        $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">این نام کاربری وجود ندارد !</h1></div>");
        setTimeout(remAlert,2000);
    }

    BWMSignInName.value = "";
    BWMSignInPassword.value = "";
}

BWMSignInBtn.addEventListener("click",BWMsignIn);

/// Sign up SMW ///

const SWMSignInName = $.querySelector("#SWM-SignIn-Name");
const SWMSignInPassword = $.querySelector("#SWM-SignIn-Password");
const SWMSignInBtn = $.querySelector("#SWM-SignIn-Btn");

function SWMsignIn(){
    let SWMSignInNameValue = SWMSignInName.value ;
    let SWMSignInPasswordValue = SWMSignInPassword.value ;
    let isName = JSON.parse(localStorage.getItem("Name")) == SWMSignInNameValue;
    let isPassWord = JSON.parse(localStorage.getItem("Password")) == SWMSignInPasswordValue;

    if( isName ){
        if( isPassWord ){
            $.body.insertAdjacentHTML("afterbegin","<div class=\"alert tureAlert\"><h1 id=\"massageAlert\">خوش آمدید :)</h1></div>");
            setTimeout(remAlert,2000);
        }else{
            $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">پسورد اشتباه است !</h1></div>");
            setTimeout(remAlert,2000);
        }
    }else{
        $.body.insertAdjacentHTML("afterbegin","<div class=\"alert\"><h1 id=\"massageAlert\">این نام کاربری وجود ندارد !</h1></div>");
        setTimeout(remAlert,2000);
    }

    SWMSignInName.value = "";
    SWMSignInPassword.value = "";

}

SWMSignInBtn.addEventListener("click",SWMsignIn);

/// end Sign In ///