<<<<<<< HEAD
var i =0;

while(i<=10){
    document.getElementById("num").innerHTML +=i + " ";
    i++;
}

var stud =["het","heee","hyyyy","fgfff"]
  for(var j=0;j<stud.length;j++) {
    document.getElementById("stud").innerHTML += stud[j]+ " "
  }

var mark = [66,77,88,99];
var total = 0;
for(var k=0;k<mark.length;k++){
    total += mark[k];
}  
    document.getElementById("mark").innerHTML = "total mark " + total


for(var u=0; u<=10;u++){
    document.getElementById("table").innerHTML += u*4 + " "+"<br>"
}

for(var t=1; t<=10;t++){
    if (t%2==0) {

        document.getElementById("even").innerHTML += t+" ";

    }
}


for(var e=1; e<=10;e++){
    if (e%2!==0) {

        document.getElementById("odd").innerHTML += e+" ";

    }
}

var p =1;

while(p<=10){
    document.getElementById("time").innerHTML +=p + " ";
    p++;
}


const correctPin = "3333";

for (let n = 1; n <= 3; n++) {
    let pin = prompt("Enter PIN:");

    if (pin === correctPin) {
        console.log("Access Granted");
        break;
    } else {
        console.log("Wrong PIN");
    }
}


let correctPassword = "4444";

for (let m = 1; m <= 3; m++) {
    let password = prompt("Enter Password:");

    if (password === correctPassword) {
        console.log("Login Successful");
        break;
    } else {
        console.log("Wrong Password");
    }
}




var car = new Array(3);
car[0]="ford";
car[1]="toyota";
car[2]="honda";

var car2 = new Array(" ford "," toyota "," honda ");
var car3 =(" odi "," innova "," vagon ");

document.write(car2);

car2.push("yamaha");
document.write(car2);

car2.pop("yamaha");
document.write(car2);

var data = car2.concat(car3);
document.write(data);



function foo (p1)
{
    if (typeof(p1) == "number")
        return 0;
    else (typeof(p1) == "string")
    return "Zero";
}

console.log(foo(1));
console.log(foo("abc"))
console.log(foo());

=======
var i =0;

while(i<=10){
    document.getElementById("num").innerHTML +=i + " ";
    i++;
}

var stud =["het","heee","hyyyy","fgfff"]
  for(var j=0;j<stud.length;j++) {
    document.getElementById("stud").innerHTML += stud[j]+ " "
  }

var mark = [66,77,88,99];
var total = 0;
for(var k=0;k<mark.length;k++){
    total += mark[k];
}  
    document.getElementById("mark").innerHTML = "total mark " + total


for(var u=0; u<=10;u++){
    document.getElementById("table").innerHTML += u*4 + " "+"<br>"
}

for(var t=1; t<=10;t++){
    if (t%2==0) {

        document.getElementById("even").innerHTML += t+" ";

    }
}


for(var e=1; e<=10;e++){
    if (e%2!==0) {

        document.getElementById("odd").innerHTML += e+" ";

    }
}

var p =1;

while(p<=10){
    document.getElementById("time").innerHTML +=p + " ";
    p++;
}


const correctPin = "3333";

for (let n = 1; n <= 3; n++) {
    let pin = prompt("Enter PIN:");

    if (pin === correctPin) {
        console.log("Access Granted");
        break;
    } else {
        console.log("Wrong PIN");
    }
}


let correctPassword = "4444";

for (let m = 1; m <= 3; m++) {
    let password = prompt("Enter Password:");

    if (password === correctPassword) {
        console.log("Login Successful");
        break;
    } else {
        console.log("Wrong Password");
    }
}




var car = new Array(3);
car[0]="ford";
car[1]="toyota";
car[2]="honda";

var car2 = new Array(" ford "," toyota "," honda ");
var car3 =(" odi "," innova "," vagon ");

document.write(car2);

car2.push("yamaha");
document.write(car2);

car2.pop("yamaha");
document.write(car2);

var data = car2.concat(car3);
document.write(data);



function foo (p1)
{
    if (typeof(p1) == "number")
        return 0;
    else (typeof(p1) == "string")
    return "Zero";
}

console.log(foo(1));
console.log(foo("abc"))
console.log(foo());

>>>>>>> f5325fb0cd1ed53323c6de7857d5eccec0422736
