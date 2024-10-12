// document.body.innerHTML = "<h2>Hello Czechitas!</h2>"


// // ovplyvňujeme obsah stránky a vkládame do nej nejaký textový výstup. Innerhtml je speci vlastnost a tá vkláda do tela textový reťazec. 
// // ; nie je potrebný, môžem ale nemusím používať

// document.body.innerHTML += "<p>" + (1 + 1) + "</p>"
// document.body.innerHTML += "<p>" + (10 * 10) + "</p>"
// document.body.innerHTML = "<p>Michal" + " Kucera</p>" 

// // ak by som nemala + pred =, prepíše mi to celý obsah pred. Ak tam + bude, pridá mi to ďalší obsah 

// // ar. operace máme + - * /
// // % - delenie  bez zbytku

// // FUNKCE 
// // môže byť napr vrámci matematickej knihovny 

// document.body.innerHTML += "<p>" + (Math.ceil(2.2)) + "</p>" //zaokruhlovanie nahoru
// document.body.innerHTML += "<p>" + (Math.floor(2.9)) + "</p>"  //zaokruhlovanie dolu
// document.body.innerHTML += "<p>" + (Math.random()) + "</p>"  //generuje náhodné čísla/hodnoty
// document.body.innerHTML += "<p>" + (Math.floor(Math.random() * 100)) + "</p>"  //generuje náhodné čísla/hodnoty od 1 do 100

// // PREMENNE 
// // premmené vieme vytvroriť 3 spôsobmi. 

// var meno = "Michal" //staré, odporúča sa nepoužívať
// let vek = 27 // premenná ktorá je založená podľa let sa dá upraviť
// const pozice = "IT lektor"  // konstatnu hodnotu nejde upraviť


// document.body.innerHTML += "<p>" + meno + "</p>"
// document.body.innerHTML += "<p>" + vek + "</p>"
// document.body.innerHTML += "<p>" + pozice + "</p>"

// vek = 21 //ak chcem zmeniť hodnotu v premennej vek už nepíšem let - let píšem len pri zakládaní
// pozice = "uklizec"

// document.body.innerHTML += "<p>" + meno + "</p>"
// document.body.innerHTML += "<p>" + vek + "</p>"
// document.body.innerHTML += "<p>" + pozice + "</p>"

// // budeme hlavne používať const aby sme obmedzili chyby
// // premenne bez diakritiky a ideál anglicky
// // premenná moze obsahovat aj operaciu alebo funkciu 

// // UKOL
// /*
// Založte si novou prázdnou stránku s JavaScriptovým programem.
// V programu spočítejte svůj měsíční příjem, víte-li, že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
// Měsíční příjem vypište do stránky.
// Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
// Daň také vypište do stránky.
// */




