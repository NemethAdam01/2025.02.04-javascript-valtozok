let nap = 31; 
let napNev = "";
let pot = nap % 7; 
switch (nap, pot) { 
    case 1: 
    napNev = "hétfő"; 
    break; 
 case 2: 
    napNev = "kedd"; 
    break; 
 case 3: 
    napNev = "szerda"; 
    break; 
 case 4: 
    napNev = "csütörtök"; 
    break; 
 case 5: 
    napNev = "péntek"; 
    break; 
 case 6: 
    napNev = "szombat"; 
    break; 
 case 7: 
    napNev = "vasárnap"; 
    break; 
 default: 
    napNev = "vasárnap"; 
} 
console.log(napNev);

