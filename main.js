/*
var fullName = 'Le Nhat Truong';
console.log(fullName + "20 tuoi");
confirm('Xac nhan toi la Truong');
prompt('Xac nhan toi la Truong');
setTimeout(function () {
    alert('Xin thong bao alo alo quy khach Le Nhat Truong');
}, 1000)
setInterval(function() {
    console.log('Day la log'+ Math.random());
},1000)
du lieu nguyen thuy(primitive date): number string boolean undefined null symbol
du lieu phuc tap(complex data): function object
*/
// var id = Symbol('id');
var myFunction = function() {
    alert('Xin chao cac ban');
}
// myFunction();


//Object type
var myObject = {
    name: 'Truong',
    age: 20,
    address: 'QN',
    myFunction: function(){
        console.log('Hello mina-san');
    },
};
console.log('myObject', myObject);

var myArray = [
    'Javascript',
    'C',
    'Java'
];
console.log(myArray);
console.log(typeof myArray);

var firstName = 'Le';
var lastName = 'Nhat Truong';

console.log(`My name is: ${firstName} ${lastName} `);