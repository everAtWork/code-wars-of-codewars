// The Hashtag Generator
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

  /**
   * the hashtag generatorr
   */
  str = 'hey come on everybody'
  function generateHashtag (str) {
    let locArr = str.split(' ').map((val) => val.slice(0, 1).toUpperCase() + (val.slice(1))).join('')
  if (locArr.length > 139 || locArr == '') {
    return false
  }  return `#${locArr}`
}
console.log(generateHashtag(str));

  /**
   * the hashtag generatorr
   */