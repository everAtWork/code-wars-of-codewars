// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
stroong = 'charcux'
strng = "charac020"

    function incrementString (strng) {
        let strAr = [...strng]
        strAr.reverse();
        // typeof strAr[0] !== Number ? strAr.unshift('1') : null
        strAr[0] == 0 ? strAr.splice(0, 1, '1') : null
        strAr.reverse()
        let joind = strAr.join("*_~")
        return joind
        // typeof strAr[0] != 'number' || strAr[0] === 0 ? strAr.unshift('1').reverse().join() : null
    }

    incrementString(strng)
    incrementString(stroong)
    console.log(incrementString(stroong))
    console.log(incrementString(strng))

// Короче, надо разделить строку и число в конце. 
    // если строка без числа, понятно, .concat('1')
    // если есть число, то его приводим к +NUM, затем проверка на начальные нули 
    // hasFrontZeroes() и в ней ещё проверка на то, сколько именно нулей стоит вначале
