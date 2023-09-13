let ref = '!@#$%*&'
function clk() {
    let password = document.getElementsByClassName('pri').value
    let res = ""
    let count = 0;
    for(int in ref){
        if(password.includes(r[int])){
            res ="Strong"
            count=1
        }
    }
    if(count===1){
    document.getElementsByClassName('hr')[0].add('hrr')
    document.getElementsByTagName('h1')[0].textContent= 'Its ok to Use'
    }
    else if(count>=2){
        document.getElementsByClassName('hr')[0].classList.add('hrr2')
        document.getElementsByTagName('h1')[0].textContent='Strong'
    }
else if(count===0){
    document.getElementsByClassName('hr')[0].classList.add('hrr3')
        document.getElementsByTagName('h1')[0].textContent='Poor'
}
}