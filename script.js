// Define the desired password length and character inclusion flags
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


function generatePassword(length, includeLowercase, includeNumbers, includeUppercase, includeSymbols){

    // Define character sets for each type of character
    const lowercaseChars = "abcdefghijklmnopqrtwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+_=-><?/}{"

    // Initialize variables for allowed characters and the generated password
    let allowedChars = "";
    let password = "";

    // Add the selected character sets to the allowed characters string
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";

    // Check if the password length is valid
    if(length<= 0){
        return "password length must be at least 1";
    }

    // Check if at least one character set is selected
    if(allowedChars.length === 0){
        return "At least 1 set of character needs to be selected";
    }

    // Generate the password by selecting random characters from the allowed set
    for(let i = 0; i<length ; i++){
         const randomIndex = Math.floor(Math.random() * allowedChars.length);
         password += allowedChars[randomIndex];
    }


    return password;
}

// Test function
const password  =  generatePassword(passwordLength, 
                                    includeLowercase, 
                                    includeNumbers, 
                                    includeUppercase, 
                                    includeSymbols);

console.log(`Generated password : ${password}`);