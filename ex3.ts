//number
let num1: number = 42;
console.log("Value is: " + num1);
//string
let name7: string = "luke";
console.log("name is: " +name7);
//bool
let flag: boolean = true;
console.log( flag);
//any
let obj: any = { x: 0 };
obj.any = 100;
console.log("Value is: " + obj);
//array
let myArray:Array<string> = ["test","fsfgf","gsgsgsg"]
console.log(myArray);

let mySecondArray:number[] =[2,3,4];
//for loop
for(let i=0; i<mySecondArray.length;i++){
    console.log("item:" + mySecondArray[i]+" is in mySecondArray")
}
//
mySecondArray.forEach(
    function(elem){
        console.log("element: " +elem);
    }
);
