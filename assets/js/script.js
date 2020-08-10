function button(value)
{
    document.getElementById("visor").value += value;
}

function reset()
{
    document.getElementById("visor").value = "";
}

function calculate()
{
    let result = 0;
    result = document.getElementById("visor").value;
    document.getElementById("visor").value = eval(result);
}
