
const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");

//Loop through all inputs
inputs.forEach(input =>{
    //Add an input event on all inputs
    input.addEventListener("input",e =>{
        //Get the id from the input the event takes place on
        const unit = e.target.id;
        //Get the value from the input the event takes place on
        
        const v = parseFloat(e.target.value);
        console.log(v);
        if(unit === "celsius"){
            f.value = parseFloat((v * 1.8)+32).toFixed(4)*1;
            k.value = parseFloat(v+273.15).toFixed(4)*1;
        }
        else if(unit === "fahrenheit"){
            c.value = parseFloat((v - 32) * 5 / 9).toFixed(4)*1;
            k.value = parseFloat(((v - 32) * 5 / 9) + 273.15).toFixed(4)*1;
        }
        else if(unit === "kelvin"){
            c.value = parseFloat(v - 273.15).toFixed(4)*1;
            f.value = parseFloat((v - 273.15) * 9 / 5 + 32).toFixed(4)*1;
        }
    });
});