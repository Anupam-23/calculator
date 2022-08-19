function clr()
{
    document.getElementById("output").value=" ";
}
function display(val)
{
    document.getElementById("output").value+=val;
}
function equate()
{
    let x= document.getElementById("output").value;
    let y= eval(x)
    document.getElementById("output").value= y;
}