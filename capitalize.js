
let str = "tHis StrIng is FiXED"

function capitalize(str) {
    let lowstr = str.toLowerCase();
    let therest = lowstr.slice(1);
    let toupper = str.charAt(0);
    let upper = toupper.toUpperCase();
    return upper + therest;
}


console.log(capitalize(str))