
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')




function validateemail(){
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ; 
    console.log(signupEmail.value)
    if( regex.test(signupEmail.value)){
        return true;

    }
    else{
        return alert("invalid")
    }
}


function Empty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

function EmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}





function signUp() {
    if(validateemail()){

    
    if (Empty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (EmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        //window.location.replace('https://' + location.hostname + '/login.html')
        // window.location.replace("http://127.0.0.1:5501/login.html");
        window.location.href ="login.html"
    }

    }

}







function LoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (LoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var baseURL = window.location.origin
    var password = signinPassword.value
    var email = signinEmail.value
    var successLogin = false;
    //console.log(signUpArray)
    //console.log(password+" "+email)
    for (var i = 0; i < signUpArray.length; i++) {
   // console.log(signUpArray[i].email.toLowerCase() + " "+signUpArray[i].password.toLowerCase());
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            successLogin = true;
            //  console.log("login SUccess")
            localStorage.setItem('Username', signUpArray[i].name)
           // if (baseURL == '/') {
                
              //  location.replace('https://' + location.hostname + '/home.html')

           // } else {
            //    location.replace(baseURL + '/home.html')

           // }
        }
    }
    if(successLogin) {
        alert("Success Login");
        window.location.href="home.html"
    }
    else {
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    
    }

}


var username = localStorage.getItem('Username')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}
var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}


function logout() {
    localStorage.removeItem('Username')
}