console.log('hello-world')
console.log('hello-world')
console.log('hello-world')
console.log('hello-world')
console.log('hello-world')

console.log(5+2)
console.log(5+1)
console.log(5+3)
console.log(5+4)
console.log(5+6)


// Print Name dynamically in string
function printName(name){
    console.log('Hello, "' + name + '"') // with string concatenation
    console.log(`Hello, "${name}"`) // with template literals
}

printName('James') // calling printName function


//Calculate Area of Rectangle
function areaOfRectangle(length, breadth){
    return length * breadth
}

console.log('Area of Rectangle is:',areaOfRectangle(5, 10))


// Celsius to Fahrenheit conversion
function cToF(celsius){
    let fahrenheitTemperature = (9 / 5) * celsius + 32;
    return `${celsius}°C = ${fahrenheitTemperature.toFixed(2)}°F`
}

console.log(cToF(44))


// Fahrenheit to Celsius conversion
function fToC(fahrenheit){
    let celsiusTemperature = (fahrenheit - 32) * (5 / 9);
    return `${fahrenheit}°F = ${celsiusTemperature.toFixed(2)}°C`
}

console.log(fToC(99))






//---->>>> String Methods <<<----

// length                   - to find length of the string --> 'hello'.length ====> 5

// ::: Methods to find character in string :::

// charAt()                 - returns character at specified index in parenthesis
// at()                     - returns character at specified index in parenthesis introduced in ES2022

// charCodeAt()             - returns character "code" at specified index in parenthesis ===> charCode for h is 72
// [ ]                      - property access method 

    // difference between CharacterData() & [] property access method
        // - If no character is found, [ ] returns """undefined""", while charAt() returns an """empty string""". 


// :::: Extracting the part of the string in defined range ::::

// slice(start, end)
// substring(start, end)
// substr(start, length)

// :::: Notes ::::

        // - start or end can be positive or negative 
        // - start position is compulsory while end can be left blank(will go till the last position)

        // - in substring start end end values less than 0(negative) are considered as 0

        // - in substr second parameter is length of string to be extracted (not end position like slice and substring)


// ::: manipulation on string :::

// toUpperCase()            - to convert a string in upper case (string.toUpperCase())
// toLowerCase()            - to convert a string in lower case (string.toLowerCase())
// concat()                 - to join or concat two strings     (string1.concat(string2))

// trimStart()              - removes extra spaces from the "start" of the string (string.trimStart())
// trimEnd()                - removes extra spaces from the "end" of the string   (string.trimEnd())
// trim()                   - removes extra spaces from the "both ends" of the string (string.trim())

// repeat()                 - repeats string by defined number  ("string1".repeat(2) --> string1string1)

// replace()                - replaces the "first" occurrence of the matched string in string set 
                            // example
                                // - let text = "Please visit Microsoft!";
                                // - let newText = text.replace("MICROSOFT", "W3Schools");

                            // for replace all the occurrences of string use REGEX with /g(global match)
                                // let text = "Please visit Microsoft and Microsoft!";
                                // let newText = text.replace(/Microsoft/g, "W3Schools");

// replaceAll()             - replaces the "ALL" occurrence of the matched "REGEX pattern" in string set
                            // example
                                // - text = text.replaceAll("Cats","Dogs");
                                // - text = text.replaceAll("cats","dogs");

                            // using REGEX 
                            // text = text.replaceAll(/Cats/g,"Dogs");
                            // text = text.replaceAll(/cats/g,"dogs");

                // ::::: NOTE ::::
                    // - replace() & replaceAll() are case sensitive
                    // - use REGEX /i to make in case insensitive
                    // - if used REGEX use /g in replaceAll() to avoid type error

// split()                  - splits string on defined character or symbol and returns array
                        // example
                            // text.split("")    // Splits & gives single characters in array --> 'wow'.split('') -->> ['w', 'o', 'w'] 
                            // text.split(",")    // Split on commas
                            // text.split(" ")    // Split on spaces
                            // text.split("|")    // Split on pipe