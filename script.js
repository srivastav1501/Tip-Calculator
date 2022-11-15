window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip()
{
    var bill = document.querySelector("#billamt").value;
    var tipPercentage = document.querySelector("#serviceQual").value;
    var persons = document.querySelector("#peopleamt").value;
    if(bill === '' )
    {
        alert("Please Enter Bill Amount");
        return;
    }else if(tipPercentage === 'Select'){
        alert("Please Select Tip Percentage");
        return;
    }else if(persons === ''){
        alert("Please Enter Number of Persons");
        return;
    }

    if(persons === '1')
    {
        document.querySelector('#each').style.display = 'none';
    }
    else
    {
        document.querySelector('#each').style.display = 'block';
    }
    var tip=(bill*tipPercentage)/persons;
    tip=tip.toFixed(2);
    document.getElementById("total").innerHTML=tip;
}
