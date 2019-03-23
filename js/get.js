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
  var info=storeDB.getAll();
  info.onsuccess=function(d){
  console.log(d.target.result);
  display(d.target.result);
}
}
function display(data){
  var parent=document.querySelector(".main");
  for (var i = 0; i < data.length; i++) {
  var child=document.createElement("div");
  child.classList.add("child");
  var image=document.createElement("img");
  image.src="images/shield.svg";
  image.alt=data[i].name;

  var name=document.createElement("h2");
  name.textContent=data[i].name;

  var rollno=document.createElement("h2");
  rollno.textContent=data[i].rollno;

  var email=document.createElement("h2");
  email.textContent=data[i].email;
  var phonenumber=document.createElement("h2");
  phonenumber.textContent=data[i].phonenumber;

  var link=document.createElement("a");
  link.href="resume.html?id="+data[i].id;
  link.textContent="view profile";
child.append(image);
parent.append(child);
child.append(name);
child.append(rollno);
child.append(email);
child.append(phonenumber);
child.append(link);
}
}
