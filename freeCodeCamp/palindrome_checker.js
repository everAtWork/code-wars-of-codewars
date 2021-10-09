function palindrome(str) {
    let spleet = str.split("");
    if (spleet[spleet.length - 1] === '.') {
        spleet.pop()
    }
    let filterd = spleet.filter((val) => /[0-9a-zA-Z]/.test(val))
    let joint = filterd.join("").toLowerCase();
    let reversd = joint.split("").reverse().join("");
      if (joint === reversd) {
        return true
    } else {
        return false
    }
    }
palindrome("eye");
palindrome("_eye");
palindrome("1 eye for of 1 eye.");
palindrome("1 eye for of eye 1.");
    
    