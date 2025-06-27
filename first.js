/*let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
    
}
console.log("sum=",sum);
let str="prachi";
let s=0;
for(let val of str){
    console.log(val);
    s++;

}
console.log("length of string:",s);
for (let i=0;i<=100;i++){
    console.log(i);

let num=20;
let a= prompt("guess a number");
while(num!=a){
     a= prompt("your guess was wrong enter new number");

}
console.log("congratulations your guess is right");
let a="@";
let fullname=prompt("Enter your full name:");
let l=fullname.length;
let username=a.concat(fullname);

let u=username.concat(l);

console.log("your username is ",u);

let str= prompt("Enter a string:");
function countvovel(string){
    let count=0;
    for(const char of string){
    if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
        count++;

    }
}
console.log(count);
}
countvovel(str);
const countv= (string) =>{
    let count=0;
    for(const char of string){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            count++;
    
        }
    }
    return count;
};

let arr=[91,20,99,4,5];
let x=arr.filter((val)=>{
return val>90;
    
})
console.log(x);
let n=prompt("enter a number:");
let arr=[];
for (let i=0;i<n;i++){
    arr[i]=i;
}
console.log(arr);

let ans= arr.reduce((prev,cur)=>{
    return prev+cur;
});
console.log(ans);

let button = document.createElement("button");
button.innerText="click me!";
button.style.color="white";
button.style.backgroundColor="blue";
document.querySelector("body").prepend(button);

let pear=document.querySelector("p");

let but=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
but.addEventListener("click", ()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        body.classList.add("light");
    }
    console.log(currmode);
})*/



