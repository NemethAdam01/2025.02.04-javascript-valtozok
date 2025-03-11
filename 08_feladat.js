//1
let a = prompt('Kérek egy számot: ', 0); 
if (-30 < a && a < 40)
    {
        console.log("A szám -30 és 40 között van")
    }
else console.log("A szám nem -30 és 40 között van")
//2
let b = prompt('Kérek egy számot(2.): ', 0); 
let c = prompt('Kérek egy számot(2.): ', 0); 
if (b > c) console.log(b + " a nagyobb szám")
if (b < c) console.log(c + " a nagyobb szám")
else console.log("egyenlőek")
//3
if (a < 0) console.log("-") 
if (a > 0) console.log("+") 
if (a == 0) console.log("0") 
//4
function egesz (num)
{
    if(num % 1 == 0) return true
    else return false
}
let egesze = prompt('Kérek egy számot(4.): ', 0);
if (egesz(egesze)) console.log("egész szám")
if (egesz(egesze) == false) console.log("nem egész szám")
//5
let elso = prompt('Kérek egy számot(5.): ', 0); 
let masodik = prompt('Kérek egy számot(5.): ', 0); 
if (elso > masodik) console.log("elso > masodik") 
if (elso < masodik) console.log("elso < masodik") 
if (elso == masodik) console.log("elso = masodik") 
//6
let eletkor = prompt("Adja meg az életkorát: ", 0)
if (eletkor > 0 && eletkor < 6) console.log("gyerek")
if (eletkor > 7 && eletkor < 18) console.log("iskolás")
if (eletkor > 19 && eletkor < 60) console.log("dolgozó")
if (eletkor > 60) console.log("nyugdíjas")