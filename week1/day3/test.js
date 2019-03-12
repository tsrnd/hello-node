// @ts-check

const fs = require('fs')

var i = 0;
function foo(){
  i++;
  if(i>20){
    return;
  }
  console.log("foo", i);
  setTimeout(()=>{
    console.log("setTimeout", new Date());
  },0);
  process.nextTick(foo);
}
 
// setTimeout(foo, 2);
// setTimeout(()=>{
//   console.log("Other setTimeout");
// },2);

let test = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {res()}, 2000)
    })
}

let testA = async () => {
    await test()
    console.log('finish the async')
}

// testA()
// console.log('end of test');
setImmediate(() => {
    console.log('second');
})

process.nextTick(() => {
    console.log('third')
})

fs.readFile('test.json', () => {
    console.log('first')
})
 