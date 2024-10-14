// // // const jmeno = "     Michal     "
// // // const heslo = "QWKH3912qidakjeqw@(#("
// // // //             0123456789
// // // const rodneCislo = "980514/3366"
// // // const telCislo = "111222333"

// // // console.log(jmeno)
// // // console.log(jmeno.trim()) // trim musi byt const, pretoze sa vztahuje iba k textovmeu retazcu

// // // console.log(heslo.length) // vlastnost ktora vrati pocet znakov
// // // console.log(jmeno.length)

// // // const castHesla = heslo.slice(0, 4)

// // // console.log(castHesla)


// // // console.log(heslo.indexOf("KH"))

// // // const poziceLomitka = rodneCislo.indexOf("/") + 1

// // // console.log(rodneCislo.slice(poziceLomitka, poziceLomitka + 5))

// // // console.log(jmeno.toLowerCase())
// // // console.log(jmeno.toUpperCase())

// // // console.log(telCislo.padStart(13, "+420"))
// // // console.log(telCislo.padEnd(13, "0"))

// // const zprava = ` 
// // <h1>Ahoj svete</h1>
// // <p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

// // <p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
// // `
// // //interpolace

// // document.body.innerHTML = zprava

// /*UKOL 1*/

// /*V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

// Vypište do stránky počet znaků názvu.
// Vypište název filmu převedený na velká písmena.
// Vypište z názvu prvních pět písmen.
// Vypište z názvu posledních pět písmen.*/

// const oblubenyFilm = "Hobbit"

// console.log(oblubenyFilm.length)
// console.log(oblubenyFilm.toUpperCase())
// console.log(oblubenyFilm.slice(0, 5))
// console.log(oblubenyFilm.slice(oblubenyFilm.length - 5, oblubenyFilm.length))

/* UKOL2*/

/*Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena

Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/

// const email = prompt("Zadejte svůj e-mail (např. slavomir.ponuchalek@yahoo.com):");

//     // Najděte pozici zavináče
//     const atIndex = email.indexOf('@');

//     // Získejte uživatelské jméno (část před zavináčem)
//     const userName = email.slice(0, atIndex);

//     // Získejte doménu (část za zavináčem)
//     const domain = email.slice(atIndex + 1);

//     // Vypište výsledek na stránku
//     document.body.innerHTML = `<p>Uživatelské jméno: ${userName}</p><p>Doména: ${domain}</p>`

/*

/*Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.*/


// const ulica = prompt("Zadejte ulicu:");
// const cisloDomu = prompt("Zadejte číslo domu:");
// const mesto = prompt("Zadejte mesto:");
// const psc = prompt("Zadejte PSČ:");


// const adresa = `
//   <adresa>
//     <p>${ulica} ${cisloDomu}</p>
//     <p>${psc} ${mesto}</p>
//     </adresa>
// `
// document.body.innerHTML = adresa


// PODMIENKY

// const vek = 18

// // < <= > >= === !== 
// if(vek >= 18) {
//   document.body.innerHTML = "<h1>Vitej na strance s nejlepsim alkoholem v CR</h1>"

//   const kategorie = prompt("Jakou kategorii alkoholu si prejes? (pivo, vino, tvrde)")

//   if(kategorie.toLowerCase() === "pivo") {
//     document.body.innerHTML += "<p>Mame nejlepsi piva, treba StaroBrno </p>"
//   } else if(kategorie.toLowerCase() === "vino") {
//     document.body.innerHTML += "<p>Mame nejlepsi cervena, bila a mozna i jinak barevna vina</p>"
//   } else if(kategorie.toLowerCase() === "tvrde") {
//     document.body.innerHTML += "<p>Mame nejlepsi Becherovku, odebira od nas i Zeman</p>"
//   } else {
//     document.body.innerHTML += "<p>Error 404: alkohol not found</p>"
//   }
// } else {
//   document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
// }

// //vylepšovak pridať za prompt lowecare
// const vek = 18

// // < <= > >= === !== 
// if(vek >= 18) {
//   document.body.innerHTML = "<h1>Vitej na strance s nejlepsim alkoholem v CR</h1>"

//   const kategorie = prompt("Jakou kategorii alkoholu si prejes? (pivo, vino, tvrde)").toLowerCase()

//   if(kategorie === "pivo") {
//     document.body.innerHTML += "<p>Mame nejlepsi piva, treba StaroBrno </p>"
//   } else if(kategorie === "vino") {
//     document.body.innerHTML += "<p>Mame nejlepsi cervena, bila a mozna i jinak barevna vina</p>"
//   } else if(kategorie === "tvrde") {
//     document.body.innerHTML += "<p>Mame nejlepsi Becherovku, odebira od nas i Zeman</p>"
//   } else {
//     document.body.innerHTML += "<p>Error 404: alkohol not found</p>"
//   }
// } else {
//   document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
// }

// const vek = 18
// const pravda = true
// const nepravda = false

// const pizzerie = {
//   pizza1: "Hawaii",
//   pizza1Roznaska: true,
// }

// if(pizzerie.pizza1Roznaska) {
//   document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
// }

// if(pravda === true) {
//   console.log("Proslo to")
// }

// if(pravda) {
//   console.log("Proslo to")
// }

// const pizzerie = {
//     pizza1: "Hawaii",
//     pizza1Roznaska: true,
//   }
  
  
//   // Varianta 1
//   if(pizzerie.pizza1Roznaska) {
//     document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
//   } else {
//     document.body.innerHTML = "<p>Ne, tuto pizzu nerozvazime</p>"
//   }
  
  
//   // Varianta 2
//   document.body.innerHTML += pizzerie.pizza1Roznaska ? "<p>Ano, tuto pizzu rozvazime</p>" : "<p>Ne, tuto pizzu nerozvazime</p>"

//UKOL PODMIENKY

/*V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo.
 To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. 
Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, 
kdy uživatel splnil první podmínku (věk alespoň 65 let). */

// const meno = prompt("Zadajte meno")
// const vek = prompt("Zadajte vek")
// const heslo = prompt("Zadajte heslo")

// const vekNumber = Number(vek)

// if(vekNumber >= 65){
//     document.body.innerHTML += "<p>Vek je v poriadku</p>"
//     if(heslo.length <=8){
//         document.body.innerHTML += "<p>Slabé heslo</p>"
//     }
// }else {
//     document.body.innerHTML += "<p>Nízky vek</p>"
// }


/*Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

Založte si webovou stránku s JavaScriptem.
Nechte uživatele zadat jeho věk.
Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
0 euro pro návštěvníky mladší 6 let,
65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
50 % ze základní ceny pro ostatní (senior).
Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.*/

const vek = prompt("Zadajte vek")
const plnaCena = 12

let cena

if (vek < 6) {
    cena = 0
    document.body.innerHTML = "<p>cena lístka je " + cena
} else if (vek >= 6 && vek <= 26) {
    cena = Math.round(plnaCena * 0.65); 
    document.body.innerHTML = "<p>cena lístka je " + cena
} else if (vek >= 27 && vek <= 64) {
    cena = Math.round(plnaCena)
    document.body.innerHTML = "<p>cena lístka je " + cena
} else {
    cena = Math.round(plnaCena * 0.5)
    document.body.innerHTML = "<p>cena lístka je " + cena
}

