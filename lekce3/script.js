// // const  hodinovka = 300
// // const pocetHodin = Number(prompt("Zadaj pocet hodin zamestnanca", "160")) //promt príma 2 parametry, a oddelujeme ju ciarkou
// // const premie = Number(prompt("Zadaj mimoriadnu odmenu v KC")) // "10000" --> 10000 (musím mysliet na to, ze co zadam do promptu berie ako string nie ako cislo)
// // const plat = (hodinovka * pocetHodin) + premie

// // document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>" 

// /*Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

// Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
// Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
// Květoslav Voňavý, věk: 67
// */

// const meno = prompt("Vpíšte meno") 
// const vek = Number(prompt ("Vek"))

// document.body.innerHTML = meno + ", vek:" + vek

/*Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci.
 Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.*/

// const hodinovka = Number(prompt("Zadajte hodinovu sadzbu"))
// const pocetHodin = 8
// const pocetDni = 21
// const hrubaMzda = (hodinovka * pocetHodin) * pocetDni

// document.body.innerHTML = "<p>Pri hodinovej sadzbe " + hodinovka + " je vasa hruba mzda " + hrubaMzda + " Kc.</p>"

/*Zakladám databázu knih*/

// const nazov = "Kniha 1"
// const autor = "Petra Sedlakova"
// const cena = 450
// const naSklade = true

// //premenne si mozem dat do jedneho objekut
// const kniha = {
//     nazov: "Kniha 1",
//     autor: "Petra Sedlakova",
//     cena: 450,
//     naSklade: true,
// }

// kniha.autor = "Jana"
// kniha.jazyk = "cestina" //ak napisem klic.XX prida sa to do toho objektu

// document.body.innerHTML += "<p>Kniha: " + nazov + ", autor: " + autor + "</p>"
// document.body.innerHTML += "<p>Kniha: " + kniha.nazov + ", autor: " + kniha.autor + "</p>" //ak vypisujem z objektu, je to v zapise nazov Kniha(nazov const).nazov

//OBJEKT v OBJEKTU - 

// const user1 = {
//     fullName: 'Lubomír Větvička',
//     login: 'lubos',
//     address: {
//       streetName: 'Pod Kaštany',
//       number: 31,
//       city: 'Horní Dlouhonosy',
//       postalCode: '123 11',
//     },
//     cartItems: 0,
//   };

//   console.log(user1.address.city) //ak mam objekt v objkete, musim sa napojit na druhy objekt a cez tecku pridat const. 

/*Mějme následující objekt představující inzerát na stránkách nějaké realitní kanceláře.*/

// const apartment = {
//     type: 'rent',
//     disposition: '3+1',
//     area: {
//       floorage: 100,
//       balcony: 2,
//       units: 'sqm',
//     },
//     city: 'Prague',
//     district: 'Old Town',
//     price: {
//       rent: 28000,
//       fees: {
//         water: 1000,
//         energy: 2500,
//         services: 560,
//       },
//       currency: 'czk',
//     },
//     ownership: 'personal',
//     condition: 'renovated',
//     status: 'free',
//     floor: 3,
//   };

//   /*Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

// Pomocí tečkové notace vypište do stránky dispozici bytu.
// Vypište do stránky čistý nájem bez poplatků.
// Vypište do stránky celý objekt představující výměru bytu.
// Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
// Změnte stav inzerátu z 'free' na 'taken'.*/

// document.body.innerHTML += "<p>Čístý nájom bez poplatkov je: " + apartment.price.rent + "</p>"
// document.body.innerHTML += "<p>Dispozícia bytu je:" + apartment.disposition + " Rozmer bytu je: " + apartment.area.floorage + " Počet balkónov je: " + apartment.area.balcony + "</p>"

// const mesto = apartment.city
// const mestskaCast = apartment.district

// document.body.innerHTML += "<p> Byt sa nachádza v meste: " + mesto + " a v mestskej časti: " + mestskaCast + "</p>"


/*Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.*/

const person = {
    name: "Kvetoslav Vonavy",
    age: 67,
}
person.jazyk = "anglictina"

window.document.getElementById(person.jazyk)