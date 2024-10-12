const  hodinovka = 300
const pocetHodin = Number(prompt("Zadaj pocet hodin zamestnanca", "160")) //promt príma 2 parametry, a oddelujeme ju ciarkou
const premie = Number(prompt("Zadaj mimoriadnu odmenu v KC")) // "10000" --> 10000 (musím mysliet na to, ze co zadam do promptu berie ako string nie ako cislo)
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>" 