function add(){
    num1 = parseInt(form.num1.value);
    num2 = parseInt(form.num2.value);
    result = num1 + num2;
    form.result.value=result;
}

function subtract(){
    num1 = parseInt(form.num1.value);
    num2 = parseInt(form.num2.value);
    result = num1 - num2;
    form.result.value=result;
}

function multiply(){
    num1 = parseInt(form.num1.value);
    num2 = parseInt(form.num2.value);
    result = num1 * num2;
    form.result.value=result;
}

function divide(){
    num1 = parseInt(form.num1.value);
    num2 = parseInt(form.num2.value);
    result = num1 / num2;
    form.result.value=result;
}

function clearFields(){
    num1 = parseInt(form.num1.value);
    num2 = parseInt(form.num2.value);
    form.num1.value = ""
    form.num2.value = ""
    form.result.value = ""
}

function alertBtn(){
   alert("Work of Arvy Lapira & Alyssa Candelario")
}