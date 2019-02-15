// functions

// definiranje na funkcija
function sobiranje(a, b) { // function sobiranje() - function signature
    c= a + b;
    console.log(c);
}

// function body
// {
//     c = a + b;
// console.log(c);
// }


sobiranje(3, 6);


// funkcii sto ne vrakjaat vrednost se vikaat "void" funckii


function odzemanje(a, b) {
    var c = a - b;
    return c;
}

var d = odzemanje(4, 9);
console.log(d);


// funkcija parNepar


function parNepar(a) {
    if(a % 2 == 0){
        return 'par';
    } else {
        return 'nepar';
    }
}

var res = parNepar(2);
console.log(res); // par

res = parNepar(7);
console.log(res); // nepar


//


function ubavMesec(mesec) {
    if(mesec.length % 2 == 0){
        return 'da';
    } else {
        return 'ne';
    }
}

res = ubavMesec('Dekemvri'); // Dekemvri ima paren broj na bukvi i zatoa e ubav mesec
console.log(res); // da

res = ubavMesec('Januari'); // Januari ima neparen broj na bukvi zatoa ne e ubavo mesec
console.log(res); // ne


//


var delenje = function(a, b){
    return a / b;
}

res = delenje(3, 6);
console.log(res);


// 


var ploshtina = function(a, b) {
    return a * b;
}

res = ploshtina(2, 13);
console.log(res);

res = ploshtina(57, 298);
console.log(res);


//


var niza = [345, 'TEXT', false, 'PAK STRING', 'I PAK STRING', false, true, false, 11, 12];

for(var i = 0; i < niza.length; i++){
    if(typeof niza[i] == 'string'){
        console.log(niza[i]);
    }
}