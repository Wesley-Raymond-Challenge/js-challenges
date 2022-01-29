// TODO: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more
//  than one word is present.
//Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function fiveWordReverser(str) {
    let strArray = str.split(" ");
    console.log(strArray)
    let newStr =""
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length >= 5) {
            for (let j = strArray[i].length-1; j >= 0; j--) {
                newStr += strArray[i][j]
            }
            strArray[i] = newStr
            newStr = ""
        }
    }
    let reversedStr = strArray.join(" ");
    return reversedStr
}

console.log(fiveWordReverser("Come check out Roleplay Rejects on Spotify"));

// function wordReverse(str) {
//     let bucket = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         bucket += str[i];
//     }
//     return bucket
// }
//
// console.log(wordReverse(("lmao")));


