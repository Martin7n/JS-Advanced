function calculator() {
    
    let num1Element;
    let num2Element;
    let resultElement;

    function init(selector1, selector2, resultSelector){
        num1Element = document.querySelector(selector1);
        num2Element = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add(){
        resultElement.value = Number(num1Element.value) + Number(num2Element.value)
    };  

    function subtract(){
        resultElement.value = Number(num1Element.value) - Number(num2Element.value)
    };

    // console.log({"init": init, 
    //     "add": add, 
    //     "subtract":  subtract
    //     })
    return {"init": init, 
            "add": add, 
            "subtract":  subtract
            }
}




