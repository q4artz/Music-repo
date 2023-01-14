calling function
function StaffAge():number{
    let Age = 12
    return(Age);
}
console.log(StaffAge())

https://www.geeksforgeeks.org/javascript-console-log-method/


Combining Function calls
function StaffAge():number{
    let Age = 12
    return(Age);
}
function StaffName():string{
    let Name = "John"
    return(Name);
}
if (StaffAge()!= 12 && StaffName() != "John")
    console.log("Not real employee")
console.log(StaffName()+" is age "+StaffAge())



loop
for(let i=0;i<StaffAge();i++){
    console.log("not old enough")
}


Array Function Call
let StaffNames :string[] = ["John","smith","ellie"]

function StaffAges(i:number):number{
    let StaffAges :number[] = [21,23,42]
    return StaffAges[i];
}

for (let i=0;i<3;i++){
    console.log(StaffNames[i])
    console.log(StaffAges(i))
}

Event Listeners
const button:any = document.querySelector('.btn');

button.addEventListener("click", () => {
    console.log("button pressed")
});

- we can add multiple class to the event listeners 

Event Handlers
const button :any = document.querySelector('.btn');

button.onclick = () => {
    console.log("hello world")
};

