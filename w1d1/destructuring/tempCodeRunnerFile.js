console.log("-----#5-----")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // value
console.log(secondKey); // 1,5,1,8,3,3
console.log(secondKey[0]); // 1
console.log(willThisWork); // undefined