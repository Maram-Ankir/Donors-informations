'use strict';

//The constructor

function Donation(name,amount){

    this.dName=name;
    this.amount=amount;
    this.age= this.randomAge();
    Donation.prototype.allDonars.push(this);
}
var Total=0;
Donation.prototype.allDonars=[];

Donation.prototype.randomAge = function(){
    return this.age= Math.floor(Math.random() * (30 - 18) + 18) ;
};

var table =document.getElementById('table')

function renderHeader (){
var headerRow =document.createElement('tr');
table.appendChild(headerRow);

var nameCell =document.createElement('th')
nameCell.textContent='Donar Name';
headerRow.appendChild(nameCell);

var ageCell =document.createElement('th')
ageCell.textContent='Donar Age';
headerRow.appendChild(ageCell);

var amountCell =document.createElement('th')
amountCell.textContent='Amount';
headerRow.appendChild(amountCell);

}
renderHeader ();

Donation.prototype.render =function(){
    var donarRow =document.createElement('tr');
    table.appendChild(donarRow);

    var donarName=document.createElement('td');
    donarName.textContent=this.dName;
    donarRow.appendChild(donarName);

  var donarAge =document.createElement('td');
    donarAge.textContent=this.age;
    donarRow.appendChild(donarAge);

    var donarAmount =document.createElement('td');
    donarAmount.textContent=this.amount;
    Total=Total+this.amount;
    console.log(Total)
    donarRow.appendChild(donarAmount);

}

var donarsLS= localStorage.getItem('donars');
if(donarsLS){
    donarsLS=JSON.parse(donarsLS);
    table.innerHTML='';
    renderHeader();
    // console.log(donarsLS)

    for( var i=0; i < donarsLS.length;i++){
        var lsDon = new Donation (donarsLS[i].dName, donarsLS[i].amount);
        lsDon.age=donarsLS[i].age;
        lsDon.render();

    }
}


//The form 
var form = document.getElementById('Donateform');
form.addEventListener('submit',addDonar);

function addDonar(event){
    event.preventDefault();

    var donName=event.target.DonarName.value;
    var donAmount=event.target.Amount.value;

    var newDonar = new Donation(donName,donAmount);
    newDonar.render();
    form.reset();
     var don=JSON.stringify(Donation.prototype.allDonars)
    localStorage.setItem('donars',don);



}