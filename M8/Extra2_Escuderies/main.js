"use script"

const resultDiv = document.getElementById("result");

const Escuderia1 = new Escuderia ("Renault", 100000000, "Francesa")
const Escuderia2 = new Escuderia ("McLaren", 500000000, "Anglesa")
const Escuderia3 = new Escuderia ("Ferrari", 650000000, "Italiana")

escuderies.push(Escuderia1, Escuderia2, Escuderia3)

const Cotxe1 = new Cotxe (700, 340, "blau", 2000000)
const Cotxe2 = new Cotxe (810, 335, "blanc", 3500000)
const Cotxe3 = new Cotxe (770, 380, "blau", 3000000)
const Cotxe4 = new Cotxe (750, 375, "blanc", 4500000)
const Cotxe5 = new Cotxe (825, 380, "blau", 6000000)
const Cotxe6 = new Cotxe (800, 375, "blanc", 5500000)

escuderies[0].cotxes.push(Cotxe1, Cotxe4)
escuderies[1].cotxes.push(Cotxe3, Cotxe5)
escuderies[2].cotxes.push(Cotxe2, Cotxe6)



resultDiv.innerHTML = `<pre>${Escuderia1.toString()}</pre>`

