// UKOL
/*
Založte si novou prázdnou stránku s JavaScriptovým programem.
V programu spočítejte svůj měsíční příjem, víte-li, že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
Měsíční příjem vypište do stránky.
Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
Daň také vypište do stránky.
*/

 // Zakladne udaje

 const denneHodin = 7
 const mzdaHodina = 320
 const dniMesiac = 21

 const prijemMesiac = denneHodin * mzdaHodina * dniMesiac

 document.body.innerHTML += "<p>" + prijemMesiac + "</p>"

 // Výpočet daně, ak pracuje na ZL 
 const pausal = 0.60; // 60 % paušál
 const zakladPreDan = prijemMesiac * (1 - pausal); // 40 % z příjmu
 const danovaSadzba = 0.15; // 15 % daň
 const dan = Math.floor(prijemMesiac * 0.4 * 0.15);

 document.body.innerHTML += "<p>" + dan + "</p>"

/*
Délka filmu
V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu :i[Pán prstenů: Dvě věže] trvá 223 minut. My bychom ovšem délku filmu raději věděli 
v hodinách a minutách.

Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film :i[Pán prstenů: Dvě věže].
Obě hodnoty vypište do stránky.
*/

const delkaFilmu = 223
const hodin = Math.floor(223 / 60)
const minut = 223 % 60

document.body.innerHTML += "<p>" + hodin + "</p>"
document.body.innerHTML += "<p>" + hodin + "</p>"
document.body.innerHTML += "<p>Film má"  + hodin + " hodiny a" + minut + " minut.</p>"

