function palindrome(str) {
    let splyt = str.split("");
    splyt[splyt.length - 1] === '.' ? splyt.pop() : null
    let filterd = splyt.filter((val) => /[0-9a-zA-Z]/.test(val)).join("").toLowerCase()
    let reversd = filterd.split("").reverse().join("");
   return (filterd === reversd ? true : false)    
}
palindrome("eye");
palindrome("_eye");
palindrome("1 eye for of 1 eye.");
palindrome("1 eye for of eye 1.");