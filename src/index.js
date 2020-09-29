const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr10 = [];
    let res = '';
    let dot = '.';
    let hyphen = '-';
    for(let i=0; i<expr.length; i+=10){
        arr10.push(expr.slice(i, i+10));
    } 
    for( let i=0; i<arr10.length; i++){
        if(arr10[i] == '**********'){
            res += ' ';
        } else{
            let str = '';
            for (let k=0; k< arr10[i].length; k+= 2) {
                if(arr10[i].substr(k, 2) == '00'){
                    str += '';
                } else if(arr10[i].substr(k, 2) == '10'){
                    str += dot;
                } else{
                    str += hyphen
                }
            }
            res += MORSE_TABLE[str];
        }
    }
    console.log(res)
    return res;
}

module.exports = {
    decode
}