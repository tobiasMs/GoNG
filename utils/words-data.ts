export type Words = string[][];

const targetWords: Words = [
    new Array(10).fill("Narkoba"),
    new Array(10).fill("NAPZA"),
    new Array(10).fill("Pecandu"),
    new Array(10).fill("Penyalahguna"),
    ["Sukacita", "Bahagia", "Gembira", "Indah", "Nikmat", "Bangga", "Baik", "Keren", "Bagus", "Hebat"],
    ["Nista","Ngeri","Tercela","Jahat","Bahaya","Menakutkan","Busuk","Rusak","Biadab","Kejam"],
    ["Sukacita","Bahagia","Gembira","Indah","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Dosa","Nista","Ngeri","Tercela","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Bagus","Hebat","Berguna","Candu","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Rusak","Biadab","Kejam","Hina","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Bahagia","Gembira","Indah","Nikmat","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Nista","Ngeri","Tercela","Jahat","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Hebat","Berguna","Candu","Ceria","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Biadab","Kejam","Hina","Jelek","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu"],
]

const distractorWords: Words = [
    new Array(10).fill("NAPZA"),
    new Array(10).fill("Narkoba"),
    new Array(10).fill("Penyalahguna"),
    new Array(10).fill("Pecandu"),
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat","Bahaya"],
    ["Bangga","Baik","Keren","Bagus","Hebat","Berguna","Candu","Ceria","Enak","Senang"],
    ["Hina","Jelek","Keji","Buruk","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Nikmat","Bangga","Baik","Keren","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA","NAPZA"],
    ["Jahat","Bahaya","Menakutkan","Busuk","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Ceria","Enak","Senang","Sukacita","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba","Narkoba"],
    ["Jelek","Keji","Buruk","Dosa","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Bangga","Baik","Keren","Bagus","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu","Pecandu"],
    ["Bahaya","Menakutkan","Busuk","Rusak","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Hina","Jelek","Keji","Buruk","Dosa","Nista","Ngeri","Tercela ","Jahat ","Bahaya","Menakutkan","Busuk ","Rusak","Biadab","Kejam","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Enak","Senang","Sukacita ","Bahagia","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"],
    ["Sukacita","Bahagia","Gembira","Indah","Nikmat","Bangga","Baik","Keren","Bagus ","Hebat","Berguna ","Candu","Ceria","Enak","Senang","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna","Penyalahguna"]
]

const guideWords: string[] = [
"<b>NARKOBA</b>",
"<b>NAPZA</b>",
"<b>PECANDU</b>",
"<b>PENYALAHGUNA</b>",
"<b>Kata sifat positif</b>",
"<b>Kata sifat negatif</b>",
"<b>NARKOBA</b> dan <b>Kata sifat positif</b>",
"<b>NARKOBA</b> dan <b>Kata sifat positif</b>",
"<b>NARKOBA</b> dan <b>Kata sifat negatif</b>",
"<b>NARKOBA</b> dan <b>Kata sifat negatif</b>",
"<b>NAPZA</b> dan <b>Kata sifat positif</b>",
"<b>NAPZA</b> dan <b>Kata sifat positif</b>",
"<b>NAPZA</b> dan <b>Kata sifat negatif</b>",
"<b>NAPZA</b> dan <b>Kata sifat negatif</b>",
"<b>PENYALAHGUNA</b> dan <b>Kata sifat positif</b>",
"<b>PENYALAHGUNA</b> dan <b>Kata sifat positif</b>",
"<b>PENYALAHGUNA</b> dan <b>Kata sifat negatif</b>",
"<b>PENYALAHGUNA</b> dan <b>Kata sifat negatif</b>",
"<b>PECANDU</b> dan <b>Kata sifat positif</b>",
"<b>PECANDU</b> dan <b>Kata sifat positif</b>",
"<b>PECANDU</b> dan <b>Kata sifat negatif</b>",
"<b>PECANDU</b> dan <b>Kata sifat negatif</b>",
]

const blueWords = ["Narkoba", "NAPZA", "Pecandu", "Penyalahguna"]

export {targetWords, distractorWords, guideWords, blueWords}




















