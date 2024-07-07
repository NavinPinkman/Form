var mobile=document.querySelector('#label1')
var password=document.querySelector('#label2')
var form=document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault()
    }
})
function validateInputs(){
    const mobileval=mobile.value.trim()
    const passwordval=password.value.trim()
    let result=true
    if(mobileval === ''){
        error(mobile,'Invalid email/mobile number')
        result=false
    }
    else if(mobileval.length < 8 ){
        error(mobile,'Invalid email/mobile number')
        result=false
    }
    else{
        sucess(mobile)
        result=true
    }

    if(passwordval === ''){
        error(password,'Invalid password')
        result=false
    }
    else if(passwordval.value < 8){
        error(password,'Invalid password')
        result=false
    }
    else{
        sucess(password)
        result=true
    }
}
function error(element,message){
    const firstelement=element.parentElement;
    const errorelement=firstelement.querySelector('.error')
    errorelement.innerText = message;
    firstelement.classList.add('wrong')
}
function sucess(element){
    const firstelement=element.parentElement;
    const errorelement=firstelement.querySelector('.error')
    errorelement.innerText = '';
    firstelement.classList.remove('wrong')
}