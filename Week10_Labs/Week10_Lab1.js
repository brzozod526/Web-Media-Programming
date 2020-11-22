function addnumbers(){
  var numberone = document.getElementById("firstnumber").value;
  var numbertwo = document.getElementById("secondnumber").value;
  var rightone = Number(numberone);
  var righttwo = Number(numbertwo);
  var final = rightone + righttwo;
document.getElementById("output").innerHTML=final;
}

function subnumbers(){
  var numberone = document.getElementById("firstnumber").value;
  var numbertwo = document.getElementById("secondnumber").value;
  var rightone = Number(numberone);
  var righttwo = Number(numbertwo);
  var final = rightone - righttwo;
document.getElementById("output").innerHTML=final;
}

function divnumbers(){
  var numberone = document.getElementById("firstnumber").value;
  var numbertwo = document.getElementById("secondnumber").value;
  var rightone = Number(numberone);
  var righttwo = Number(numbertwo);
  var final = rightone / righttwo;
document.getElementById("output").innerHTML=final;
}

function mulnumbers(){
  var numberone = document.getElementById("firstnumber").value;
  var numbertwo = document.getElementById("secondnumber").value;
  var rightone = Number(numberone);
  var righttwo = Number(numbertwo);
  var final = rightone * righttwo;
document.getElementById("output").innerHTML=final;
}
