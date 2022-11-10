alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const encoder = (msg, key) => {
    lowerMsg = msg.toLowerCase()
    encodedMsg = ''


    for (let i = 0; i < lowerMsg.length; i++) {
        alphabetIndex = alphabet.indexOf(lowerMsg[i])
        
        if (!alphabet.includes(lowerMsg[i])){
            encodedMsg += lowerMsg[i]
        }else if(alphabetIndex + key > 25){
            index = (key + alphabetIndex) - 26
            encodedMsg += alphabet[index]
        
        } else if (alphabetIndex + key < 0){
            index = 25 + ((alphabetIndex + 1) + key)
            encodedMsg += alphabet[index]
        
        } else {
            encodedMsg += alphabet[alphabet.indexOf(lowerMsg[i]) + key]
        }
    }
    return encodedMsg
}

const decoder = (code, key) => {
    newKey = -key
    decodedMsg = ''


    for (let i = 0; i < code.length; i++) {
        alphabetIndex = alphabet.indexOf(code[i])
        
        if (!alphabet.includes(code[i])){
            decodedMsg += code[i]
        }
        else if(alphabetIndex + newKey > 25){
            index = (newKey + alphabetIndex) - 26
            decodedMsg += alphabet[index]
        } 
        else if (alphabetIndex - newKey < 0){
            index = 25 + ((alphabetIndex + 1) + newKey)
            decodedMsg += alphabet[index]
        
        } 
        else {
            decodedMsg += alphabet[alphabet.indexOf(code[i]) + newKey]
        }
    }
    console.log(decodedMsg)
} 

console.log('encoded msg: ', encoder('I love cryptography!', 1))
decoder(encoder('I love cryptography!', 1) , 1)
