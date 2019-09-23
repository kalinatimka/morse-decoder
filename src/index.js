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
    var tempCode = "";
    var tempSign = "";
    var tempLetter;
    var phrase = "";
    for (var i = 0; i<(expr.length / 10); i++) {
        tempCode = expr.slice(10*i, 10*(i+1));
        tempLetter = "";
        for (var j = 0; j < tempCode.length - 1; j++) {
            if(tempCode[j] == "1") {
                tempSign = tempCode[j] + tempCode[j+1];
                if (tempSign == "10") {
                    tempLetter += "."
                }
                else {
                    tempLetter += "-";
                }
                j++;
            }
            else if (tempCode[j] == "*") {
                phrase += " ";
                break;
            }
        }
        if (tempLetter) {
            phrase += MORSE_TABLE[tempLetter];
        }
        
    }
    return phrase;
}

module.exports = {
    decode
}