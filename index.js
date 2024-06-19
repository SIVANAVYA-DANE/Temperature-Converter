let resEl=document.getElementById("result");
let inputEl=document.getElementById("Temperature");
let typeEl=document.getElementById("type");
let convertBtnEl=document.getElementById("convertBtn");
let resetBtnEl=document.getElementById("resetBtn");

function covertTemperature(){
    let inputValue=inputEl.value;
    if(inputValue===""){
        alert("Enter Valid Temperature");
    }
    else{
        if(typeEl.value==="Celsius"){
            let Temperature=(inputValue*(9/5))+32;
            Temperature=Math.round(Temperature,1);
            resEl.textContent=Temperature+"°F";
            inputEl.value=""
        }
        else{
            let Temperature= (inputValue-32)*5/9;
            Temperature=Math.round(Temperature,1);
            resEl.textContent=Temperature+"°C";
            inputEl.value=""
        }
    }
}

function resetInput(){
    inputEl.value="";
    resEl.textContent=""
}

