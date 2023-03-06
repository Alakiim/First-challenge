const person = {
    name: "João",
    nota: 92,
}


if(person.nota >= 90 && person.nota<=100) {
    person.nota = "A"
    console.log(`A nota de ${person.name} é ${person.nota}`)
} else if(person.nota < 90 && person.nota >= 80) { 
    person.nota = "B"
    console.log(`A nota de ${person.name} é ${person.nota}`)
} else if(person.nota < 80 && person.nota >= 70) {
    person.nota = "C"
    console.log(`A nota de ${person.name} é ${person.nota}`)
} else if(person.nota < 70 && person.nota >= 60) {
    person.nota = "D"
    console.log(`A nota de ${person.name} é ${person.nota}`)
} else if(person.nota <=60 && person.nota >=0) {
    person.nota = "F"
    console.log(`A nota de ${person.name} é ${person.nota}`)
} else {
    console.log("Nota inválida")
}