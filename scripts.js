function calculaTip(event){
    event.preventDefault();
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0) {
        alert("Preencha os campos")
    }

    if(numOfPeople == '' | numOfPeople <=1) {
        numOfPeople = 1;
        document.getElementById('each').style.display="none";
    } else {
        document.getElementById('each').style.display="block";
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML=total;
    document.getElementById('totalTip').style.display="block";

}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsForm').addEventListener('submit', calculaTip);
