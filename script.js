document.addEventListener('click', (e) => {
    document.getElementById('err_password').innerText="";
    document.getElementById('err_name').innerText="";
    document.getElementById('err_dob').innerText="";
})

// Name validation
document.getElementsByName('name')[0].addEventListener('input', check_name);
function check_name(e){
    value=e.target.value;
    if(/\d/.test(value)){
        document.getElementById('err_name').innerText="Name must contain only Alphabhets";
    }
    else{
        document.getElementById('err_name').innerText="";
    }
}

// Email validation
// document.getElementsByName('email')[0].addEventListener('input', (e) => {
//     value==e.target.value;
//     if(value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+)*$/)){
//         document.getElementById('err_email').innerText="Name must contain only Alphabhets";
//     }
//     else{
//         console.log("hello");
//         document.getElementById('err_email').innerText="";
//     }
// })

// Age validation
document.getElementsByName('dob')[0].addEventListener('change', check_age);
function check_age(e){
    value=e.target.value;
    d1 = new Date(value);
    d2 = new Date;
    d = (d2-d1)/(1000*3600*24*365);
    if(d<10){
        document.getElementById('err_dob').innerText="You must be above 10";
    }
    else{
        document.getElementById('err_dob').innerText="";
    }
}
// Password validation
valid_p = 0;
document.getElementsByName('password')[0].addEventListener('input', check_password);
function check_password(e){
    value=e.target.value;
    strength = 0;
    if(value.match(/[a-z]/g)){
        strength++;
    }
    if(value.match(/[A-Z]/g)){
        strength++;
    }
    if(value.match(/[0-9]/g)){
        strength++;
    }
    a=0;
    if(strength == 1){
        document.getElementById('err_password').innerText="Password is too weak";
        document.getElementById('err_password').style.color="red";
        valid_p=0;
    }
    else if(strength == 2){
        document.getElementById('err_password').innerText="Password is weak";
        document.getElementById('err_password').style.color="red";
        valid_p=0;
    }
    else if(value.length<8 && value.length!=0){
        document.getElementById('err_password').innerText="Password must contain atleast 8 characters";
        document.getElementById('err_password').style.color="red";
        valid_p=0;
    }
    else if(strength == 3){
        document.getElementById('err_password').innerText="Strong Password";
        document.getElementById('err_password').style.color="green";
        document.getElementsByName('password')[0].style.backgroundColor="lightgreen"
        valid_p=1;
    }
}
// Confirm Password validation
document.getElementsByName('cpassword')[0].addEventListener('input', check_cpassword);
function check_cpassword(e){
    value=e.target.value;
    password = document.getElementsByName('password')[0].value;
    if(password == ""){
        document.getElementById('err_password').innerText="First fill this column";
        document.getElementById('err_password').style.color="red";
        document.getElementsByName('cpassword')[0].value="";
    }
    else if(valid_p == 0){
        document.getElementById('err_password').innerText="First enter a valid password";
        document.getElementById('err_password').style.color="red";
        document.getElementsByName('cpassword')[0].value="";
    }
    else if(value != password){
        document.getElementById('err_cpassword').innerText="Confirm password doesn't match";
    }
    else{
        document.getElementsByName('cpassword')[0].style.backgroundColor="lightgreen"
        document.getElementById('err_cpassword').innerText="";
    }
}

function login(){
    document.getElementsByClassName('hover')[0].style.left="-1px";
    document.getElementsByClassName('hover')[0].style.right="";
    document.getElementsByClassName('hover')[0].style.width="50%";
    document.getElementById('register').style.display="none"
    document.getElementById('login').style.display="flex"
    document.getElementById('login').style.alignItems="center"
}
function register(){
    document.getElementsByClassName('hover')[0].style.left="";
    document.getElementsByClassName('hover')[0].style.right="0px";
    document.getElementsByClassName('hover')[0].style.width="55%";
    document.getElementById('register').style.display="flex"
    document.getElementById('register').style.alignItems="center"
    document.getElementById('login').style.display="none"
}