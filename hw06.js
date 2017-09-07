function random(m) {
    return Math.floor(Math.random() * m + 1);
}

function max(a, b) {
    return Math.max(a, b);
}

function lastChar(arr) {
    var arr=[2, 42, 66]
    return arr[arr.length - 1];

}

function squares(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}


function leapYear(y){
 var yy= y%4===0 && y%100!=0 ;
    if (yy || y%400===0){
        return "Yes";
    }
    else{return "NO";}
}