document.addEventListener("Click", myFunction);

function myFunction() {
    const value = document.getElementById('input1').value;
    console.log(value)
}

myFunction();

document.addEventListener("click", function(){
    const value = document.getElementById('input1').value;
    const value2 = document.getElementById('input2').value;
    console.log(value + value2);
    const url = ("https://www.testingutm.com/"+value+value2);
    document.getElementById("demo").innerHTML = url;
})