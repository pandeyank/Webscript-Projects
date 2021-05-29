function calculate()
{

    var amount= $('#btn1').val();
    var percentage= $('#btn2').val();
    var tip= amount * (percentage/100);
    var total= Number(amount) + tip;

    $('#btn3').val(tip.toFixed(2));
    $('#btn4').val(total.toFixed(2));

    return false;

}

$("#calculator").submit(calculate);


