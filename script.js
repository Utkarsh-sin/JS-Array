/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(Above50);
  function Above50(element){
    if(element.marks>50){
      console.log(element);
    }
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printF);
  function printF(element){
    console.log(element);
  }
}

function addData() {
  //Write your code here, just console.log
  const obj={id:4,name:"susan",age:"20",marks:45};
  arr.push(obj);
  arr.forEach(printF);
  function printF(element){
    console.log(element);
  }

}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(var i=0;i<arr.length;i++){
    if(arr[i].marks<50){
      arr.splice(i);
    }
  }
  for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 9, name: "utkarsh", age: "25", marks: 90 },
    { id: 10, name: "Jay", age: "21", marks: 75 },
    { id: 11, name: "Raj", age: "22", marks: 40 },
  ];

 for(var i=0;i<arr2.length;i++){
  arr.push(arr2[i]);
 }

 for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
 }

}
