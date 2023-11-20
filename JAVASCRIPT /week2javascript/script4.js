let subject="Java \\\" Script" ;
let subject2='JavaScript is a programming language';
let subject3='JavaScript ${subject2} Continue string';
const date=new Date();
console.log('Today date is', date.getDate(), ' Rest of the string');
//slice(startIndex, endIndex), startIndex - inclusive ,
//endIndex is exclusive//

console.log(subject2.slice(-5,-1));
console.log(subject2.slice(0,1),subject2.slice(1));

console.log(subject2.substring(-2));
//JSON//
let jsonObj='{"firstName":"John", "lastName": "Math", "Education":true}';
let JsonObj={firstName:"John", lastName:"Math", Education:true};

script=JSON,parse(jsonObj)
console.log(script);

let numbers=[2,4,7,32,7,9,8,10,4]
let smallestNumber= numbers[0]
let largestNumber = numbers[0]
for (let i = 1; i < numbers.length; i++) {
 if (numbers[i] > largestNumber){largestNumber=numbers[i]}
 if (numbers[i]<smallestNumber){smallestNumber = numbers[i]}
}

