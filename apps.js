var a;
function pass(){
    if (a==1){
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').src="eye-slash-solid.svg";
        a=0;
    } else{
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src="eye-solid.svg";
        a=1;

    }
}