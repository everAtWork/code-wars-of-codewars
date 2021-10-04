function palindrome(str) {
    let spleet = str.split("");
    if (spleet[spleet.length - 1] === '.') {
        return spleet.pop()
    }
    let filterd = spleet.filter((val) => /[a-zA-Z]/.test(val))
    let joint = filterd.join("").toLowerCase();
    let reversd = joint.split("").reverse().join("");
      if (joint === reversd) {
        return true
    } else {
        return false
    }
    }
    // нужно дописать еще одну проверку для случая с 1 eye
palindrome("eye");
palindrome("1 eye for of 1 eye.");
    