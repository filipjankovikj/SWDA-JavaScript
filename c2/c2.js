var brojNaPoeni = 35;

// if(brojNaPoeni >= 60) {
//     console.log('PASS!');
// } else {
//     console.log('FAIL!');
// }

if(brojNaPoeni >=60 && brojNaPoeni < 70) {
    console.log('dvojka');
} else if(brojNaPoeni >=70 && brojNaPoeni <80) {
    console.log('trojka');
} else if(brojNaPoeni >=80 && brojNaPoeni <90) {
    console.log('cetvorka');
} else if(brojNaPoeni >=90 && brojNaPoeni <=100) {
    console.log('petka');
} else {
    console.log('FAIL!');
}

var ime = 'Aleksandar';
console.log(ime.length);

function mesec(m) {
    var p = m.length % 2;
    if(p) {
        console.log('neubav');
}   else {
        console.log('ubav')
}

mesec('Dekemvri'); // true
mesec('januari'); // false