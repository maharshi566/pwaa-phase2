function addData() {
  // Personal info
var career=document.querySelector("#career").value;
var name=document.querySelector("#Name").value;
var email=document.querySelector("#email").value;
var rollno=document.querySelector("#rollno").value;
var phonenumber=document.querySelector("#phonenumber").value;
// Graduation details
var college1=document.querySelector("#college1").value;
var degree=document.querySelector("#degree").value;
var degree1=document.querySelector("#degree1").value;
var marks1=document.querySelector("#marks1").value;
// Intermediate details
var college2=document.querySelector("#college2").value;
var degree2=document.querySelector("#degree2").value;
var marks2=document.querySelector("#marks2").value;
// 10th details
var school=document.querySelector("#school").value;
var schoolname=document.querySelector("#schoolname").value;
//  Technicalskills
var skills=document.querySelector("#skills").value;






var idb= window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;


var open=idb.open("StoreData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(event){
var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}

open.onerror=function(event){
  console.log("object not created"+error);
}
open.onsuccess=function(event){
  var request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");
  storeDB.put({
    career:career,
    name:name,
    email:email,
    rollno:rollno,
    phonenumber:phonenumber,
    education:[
      {
      college:college1,
      degree:degree,
      branch:degree1,
      marks:marks1
},
{
  college:college2,
  degree:degree2,
  branch:"",
  marks:marks2
},
{
  college:schoolname,
  degree:school,
  branch:"",
  marks:""

}
],
skills:skills
  });
  window.open("index.html");
}
}
