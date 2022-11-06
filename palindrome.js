const args = process.argv;

let question = args[2];

const len = question.length;

function isPalindrome(word) {
    for (let i=0;i<len/2;i++) {
        if (word[i] === word[len -1 -i]) {
            return "It is a Palindrome. Ab branch change karlo";
        }
        else {
            return "It is not a Palindrome. Ab branch change karle"
        }
    }

}

console.log(isPalindrome(question));