strng = "character"
function incrementString (strng) {
    charArr = [... strng.split("")]
    // console.log(charArr)
    console.log(typeof (charArr.length - 1))
}
incrementString(strng)