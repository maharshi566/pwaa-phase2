var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
param=query[i].split("=");
paramValue=parseInt(param[1]);
}


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
var info=storeDB.get(paramValue);
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
  resume(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data)
{
var img =document.createElement("img");
img.src="images/shield.svg";
left.append(img);
var h3=document.createElement("h3");
h3.textContent=data.name;
left.append(h3);
var h3=document.createElement("h3");
h3.textContent=data.rollno;
left.append(h3);
var h3=document.createElement("h3");
h3.textContent=data.email;
left.append(h3);
var h3=document.createElement("h3");
h3.textContent=data.phonenumber;
left.append(h3);

// right
var cr0=document.createElement("h3");
cr0.textContent="Career Details";
right.append(cr0);
var cr=document.createElement("h4");
cr.textContent=data.career;
right.append(cr);
var cr1=document.createElement("h3");
cr.textContent="Education details";
right.append(cr1);
}
function resume(data) {

var table=document.createElement("table");
let row='';
row+="<tr>"+"<th>"+"college"+"</th>"+"<th>"+"branch"
+"</th>"+"<th>"+"degree"
+"</th>"+"<th>"+"marks"
+"</th>"+"</tr>"
for (var i in data.education){
row+="<tr>"+"<td>"+data.education[i].college+"</td>"+
"<td>"+data.education[i].branch+"</td>"+
"<td>"+data.education[i].degree+"</td>"+
"<td>"+data.education[i].marks+"</td>"+
"</tr>";


}
table.innerHTML=row;
console.log(table);
right.appendChild(table);

var skills1=document.createElement("h3");
skills1.textContent="skills:";
right.append(skills1);

var skills1=document.createElement("h3");
skills1.textContent=data.skills;
right.append(skills1);
}
