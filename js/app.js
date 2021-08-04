'use strict';

let Datasales = document.getElementById("Datasales");

const hours = ['6 am ', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let createMain = document.getElementById("main");

const Seattle = {
    Name : 'Seattle',
     max : 65,
     min :23	,
     avg :6.3 ,
     totaly : 0 ,
     cookiesPerHour :[],
     PurshasedResult :[],
    random : function (){
 
     for (let i=0 ; i<hours.length ; i++){
    this.cookiesPerHour[i] = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) *this.avg);
         this.totaly +=this.cookiesPerHour[i];
 
  }
    
 },
 TotalPurshasedResult : function(){
             for (let i=0 ; i<hours.length ; i++){
            this.PurshasedResult[i] =  hours[i]+ ' : ' + this.cookiesPerHour[i] + "cookies";
         }
  }
 }
 
 Seattle.random()
 Seattle.TotalPurshasedResult()
 
  
 
  let createH1 =  document.createElement("h1");
   createH1.textContent=Seattle.Name;
 createMain.appendChild(createH1);
 
 let createul =document.createElement('ul');
 createMain.appendChild(createul);
 
  for(let li=0 ; li < hours.length ;li++){
  let createli =document.createElement('li');
  createul.appendChild(createli);
 createli.textContent = Seattle.PurshasedResult[li]
 
  }
  createli2 =document.createElement('li');
  createul.appendChild(createli2);
  
  createli2.textContent = 'total'+ ':' + Seattle.totaly + 'cookies'
 
 
const Tokyo = {
   Name : 'Tokyo',
    max : 24,
    min :3	,
    avg :1.2 ,
    totaly : 0 ,
    cookiesPerHour :[],
    PurshasedResult :[],
   random : function (){

    for (let i=0 ; i<hours.length ; i++){
   this.cookiesPerHour[i] = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) *this.avg);
        this.totaly +=this.cookiesPerHour[i];

 }
   
},
TotalPurshasedResult : function(){
            for (let i=0 ; i<hours.length ; i++){
           this.PurshasedResult[i] =  hours[i]+ ' : ' + this.cookiesPerHour[i] + "cookies";
        }
 }
}

Tokyo.random()
Tokyo.TotalPurshasedResult()

 

 let createH1 =  document.createElement("h1");
  createH1.textContent=Tokyo.Name;
createMain.appendChild(createH1);

let createul =document.createElement('ul');
createMain.appendChild(createul);

 for(let li=0 ; li < hours.length ;li++){
 let createli =document.createElement('li');
 createul.appendChild(createli);
createli.textContent = Tokyo.PurshasedResult[li]

 }
 createli2 =document.createElement('li');
 createul.appendChild(createli2);
 
 createli2.textContent = 'total'+ ':' + Tokyo.totaly + 'cookies'


 const Dubai = {
    Name : 'Dubai',
     max : 38,
     min :11	,
     avg :3.7 ,
     totaly : 0 ,
     cookiesPerHour :[],
     PurshasedResult :[],
    random : function (){
 
     for (let i=0 ; i<hours.length ; i++){
    this.cookiesPerHour[i] = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) *this.avg);
         this.totaly +=this.cookiesPerHour[i];
 
  }
    
 },
 TotalPurshasedResult : function(){
             for (let i=0 ; i<hours.length ; i++){
            this.PurshasedResult[i] =  hours[i]+ ' : ' + this.cookiesPerHour[i] + "cookies";
         }
  }
 }
 
 Dubai.random()
 Dubai.finalresult()
 
  
 
  let createH1 =  document.createElement("h1");
   createH1.textContent=Dubai.Name;
 createMain.appendChild(createH1);
 
 let createul =document.createElement('ul');
 createMain.appendChild(createul);
 
  for(let li=0 ; li < hours.length ;li++){
  let createli =document.createElement('li');
  createul.appendChild(createli);
 createli.textContent = Dubai.PurshasedResult[li]
 
  }
  createli2 =document.createElement('li');
  createul.appendChild(createli2);
  
  createli2.textContent = 'total'+ ':' + Dubai.totaly + 'cookies'
 
 
  const Paris = {
    Name : 'Paris',
     max : 38,
     min :20	,
     avg :2.3 ,
     totaly : 0 ,
     cookiesPerHour :[],
     PurshasedResult :[],
    random : function (){
 
     for (let i=0 ; i<hours.length ; i++){
    this.cookiesPerHour[i] = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) *this.avg);
         this.totaly +=this.cookiesPerHour[i];
 
  }
    
 },
 TotalPurshasedResult : function(){
             for (let i=0 ; i<hours.length ; i++){
            this.PurshasedResult[i] =  hours[i]+ ' : ' + this.cookiesPerHour[i] + "cookies";
         }
  }
 }
 
 Paris.random()
 Paris.finalresult()
 
  
 
  let createH1 =  document.createElement("h1");
   createH1.textContent=Paris.Name;
 createMain.appendChild(createH1);
 
 let createul =document.createElement('ul');
 createMain.appendChild(createul);
 
  for(let li=0 ; li < hours.length ;li++){
  let createli =document.createElement('li');
  createul.appendChild(createli);
 createli.textContent = Paris.PurshasedResult[li]
 
  }
  createli2 =document.createElement('li');
  createul.appendChild(createli2);
  
  createli2.textContent = 'total'+ ':' + Paris.totaly + 'cookies'
 
  const Lima = {
    Name : 'Lima',
     max : 16,
     min :2	,
     avg :4.6 ,
     totaly : 0 ,
     cookiesPerHour :[],
     PurshasedResult :[],
    random : function (){
 
     for (let i=0 ; i<hours.length ; i++){
    this.cookiesPerHour[i] = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) *this.avg);
         this.totaly +=this.cookiesPerHour[i];
 
  }
    
 },
 TotalPurshasedResult : function(){
             for (let i=0 ; i<hours.length ; i++){
            this.PurshasedResult[i] =  hours[i]+ ' : ' + this.cookiesPerHour[i] + "cookies";
         }
  }
 }
 
 Lima.random()
 Lima.finalresult()
 
  
 
  let createH1 =  document.createElement("h1");
   createH1.textContent=Lima.Name;
 createMain.appendChild(createH1);
 
 let createul =document.createElement('ul');
 createMain.appendChild(createul);
 
  for(let li=0 ; li < hours.length ;li++){
  let createli =document.createElement('li');
  createul.appendChild(createli);
 createli.textContent = Lima.PurshasedResult[li]
 
  }
  createli2 =document.createElement('li');
  createul.appendChild(createli2);
  
  createli2.textContent = 'total'+ ':' + Lima.totaly + 'cookies'
 




