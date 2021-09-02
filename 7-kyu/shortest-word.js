let longOne = "A string that identifies character or characters to use in separating the string"
function findShort(s){
  let zet = s.split(" ");
  for (const key in zet) {
      if (zet.hasOwnProperty(key)) {
          const elem = zet[key];
          
      }
  }
  return zet;
}
findShort(longOne);
console.log(findShort(longOne));

uR = 'A stringue champ';
function findShort(s){
    return s.split(" ").sort((a,b) => a.length - b.length)[0].length
}
console.log(yayo(uR));