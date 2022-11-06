const str = process.argv[2];

const reversedStr = str.split('').reverse().join('');

if(str === reversedStr) {
        console.log("It is a Palindrome. Ab branch change karlo");
    }
    else {
        console.log("It is not a Palindrome. Ab branch change karle");
    }