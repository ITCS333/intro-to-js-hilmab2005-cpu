function sum(a,b){
    return a+b;
}

function reverseString(str){
    return str.split('').reverse().join('');
}

function findLargerst(numbers){
    if(numbers.length==0){
        return null;
    }
    let largest = numbers[0];
    for(let i = 1; i < numbers.length ; i++){
        if(numbers.length[i]>largest){
            largest=numbers.length[i];
        }
    }
    return largest;
}

function isPalindrome(str){
    let lower =str.toLowerCase();
    let reversed =lower.split('').reverse().join('');
    if(lower==reversed){
        return true;
    }
    else{
        return false;
    }
}

function filterEvenNumbers(numbers){
    let even=[];
    for(let i=0; i<numbers[i];i++){
    if(numbers[i]%2==0){
        result.push(numbers[i]);
        }
    }
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

