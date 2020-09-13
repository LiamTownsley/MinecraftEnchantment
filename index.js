let mctranslate = {
    "A": "ᔑ",
    "B": "ʖ",
    "C": "ᓵ",
    "D": "↸",
    "E": "ᒷ",
    "F": "⎓",
    "G": "⊣",
    "H": "⍑",
    "I": "╎",
    "J": "⋮",
    "K": "ꖌ",
    "L": "ꖎ",
    "M": "ᒲ",
    "N": "リ",
    "O": "𝙹",
    "P": "!¡",
    "Q": "ᑑ",
    "R": "∷",
    "S": "ᓭ",
    "T": "ℸ",
    "U": "⚍",
    "V": "⍊",
    "W": "∴",
    "X": "̇/",
    "Y": "||",
    "Z": "⨅",
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

module.exports = {
    translateTo(string) {
        let returnString = '';
        string.split('').forEach(letter => {
            if(mctranslate[letter.toUpperCase()]) {
                returnString = returnString + mctranslate[letter.toUpperCase()];
            }
            else {
                returnString = returnString + letter;
            }
        })
        return returnString;
    },
    
    translateFrom(string) {
        let returnString = '';
        string.split('').forEach(letter => {
            if(getKeyByValue(mctranslate, letter)) {
                returnString = returnString + getKeyByValue(mctranslate, letter)
            }
            else {
                returnString = returnString + letter
            }
        });
        return returnString;
    },
}
