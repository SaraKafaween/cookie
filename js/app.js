'use strict';

let table = document.getElementById("table");

const hours = ['6 am ', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let PlaceArr =[];

function place (name, max, min, avg){
this.name =name ;
this.max= max;
this.min = min ;
this.avg = avg;
this.cookiesPerHour = [];
PlaceArr.push(this);
}
place.prototype.random= function () {
    for (let index = 0; index < hours.length; index++) {
    let customers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.cookiesPerHour[index] = Math.round(customers * this.avg);
    }
    return this.cookiesPerHour;
},
place.prototype.render= function () {

    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent= this.name ;

    let PurshasedResult =0;
    for (let j = 0; j < hours.length; j++) {
        let tdElement =document.createElement('td')
        trElement.appendChild(tdElement);
        tdElement.textContent= this.cookiesPerHour[j] ;
        PurshasedResult += Number( tdElement.textContent );

    }
    let td2Element = document.createElement('td');
    trElement.appendChild(td2Element);
    td2Element.textContent= PurshasedResult ;

}
function header(){
    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent= 'Places' ;
    
    for (let j = 0; j < hours.length; j++) {
        let tdElement =document.createElement('td')
        trElement.appendChild(tdElement);
        tdElement.textContent= hours[j] ;

    }
    let td2Element = document.createElement('td');
    trElement.appendChild(td2Element);
    td2Element.textContent= 'Total' ;

} 

function footer(){
    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent= 'Totals' ;
    
    let TotalPurshased =0 ;
    for (let j = 0; j < hours.length; j++) {
        let tdElement =document.createElement('td')
        trElement.appendChild(tdElement);
        for (let i =0; i < PlaceArr.length; i++) {       
       tdElement.textContent = Number(tdElement.textContent)+ Number(PlaceArr[i].cookiesPerHour[j]);
        }
        TotalPurshased+= Number(tdElement.textContent);
    }

    let td2Element = document.createElement('td');
    trElement.appendChild(td2Element);
    td2Element.textContent= TotalPurshased ;

} 

header();


let seattle = new place('Seattle', 65, 23, 6.3);
seattle.random();
seattle.render();

let Tokyo = new place('Tokyo', 24, 3, 1.2);
Tokyo.random();
Tokyo.render();

let Dubai = new place('Dubai', 38, 11, 3.7);
Dubai.random();
Dubai.render();

let Paris = new place('Paris', 38, 20, 2.3);
Paris.random();
Paris.render();

let Lima = new place('Lima', 16, 2, 4.6);
Lima.random();
Lima.render();

footer();

// const seattle = {
//     name: 'Seattle',
//     max: 65,
//     min: 23,
//     avg: 6.3,
//     totaly: 0,

//     PurshasedResult: [],

//     random: function (min, max) {
//         let customers = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
//         let cookiesPerHour = Math.round(customers * this.avg);

//         return cookiesPerHour;


//     }


//     TotalPurshasedResult: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.PurshasedResult.push(this.random(this.min, this.max));
//             this.totaly += this.PurshasedResult[i];

//         }
//         return this.PurshasedResult
//     },

//     render: function () {

//         let createH1 = document.createElement("h1");
//         createH1.textContent = this.name;
//         Datasales.appendChild(createH1);

//         let createul = document.createElement('ul');
//         Datasales.appendChild(createul);

//         for (let i = 0; i < hours.length; i++) {
//             let createli = document.createElement('li');
//             createli.textContent = hours[i] + ' : ' + this.PurshasedResult[i] + "cookies";
//             createul.appendChild(createli);


//         }

//         let createli2 = document.createElement('li');

//         createli2.textContent = 'total' + ':' + this.totaly + 'cookies'
//         createul.appendChild(createli2);

//     }

// }

// seattle.TotalPurshasedResult();

// seattle.render();



// const Tokyo = {
//     name: 'Tokyo',
//     max: 24,
//     min: 3,
//     avg: 1.2,
//     totaly: 0,

//     PurshasedResult: [],

//     random: function (min, max) {
//         let customers = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
//         let cookiesPerHour = Math.round(customers * this.avg);

//         return cookiesPerHour;


//     },

//     TotalPurshasedResult: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.PurshasedResult.push(this.random(this.min, this.max));
//             this.totaly += this.PurshasedResult[i];

//         }
//         return this.PurshasedResult
//     },

//     render: function () {

//         let createH1 = document.createElement("h1");
//         createH1.textContent = this.name;
//         Datasales.appendChild(createH1);

//         let createul = document.createElement('ul');
//         Datasales.appendChild(createul);

//         for (let i = 0; i < hours.length; i++) {
//             let createli = document.createElement('li');
//             createli.textContent = hours[i] + ' : ' + this.PurshasedResult[i] + "cookies";
//             createul.appendChild(createli);


//         }

//         let createli2 = document.createElement('li');

//         createli2.textContent = 'total' + ':' + this.totaly + 'cookies'
//         createul.appendChild(createli2);

//     }

// }

// Tokyo.TotalPurshasedResult();

// Tokyo.render();

// const Dubai = {
//     name: 'Dubai',
//     max: 38,
//     min: 11,
//     avg: 3.7,
//     totaly: 0,

//     PurshasedResult: [],

//     random: function (min, max) {
//         let customers = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
//         let cookiesPerHour = Math.round(customers * this.avg);

//         return cookiesPerHour;


//     },

//     TotalPurshasedResult: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.PurshasedResult.push(this.random(this.min, this.max));
//             this.totaly += this.PurshasedResult[i];

//         }
//         return this.PurshasedResult
//     },

//     render: function () {

//         let createH1 = document.createElement("h1");
//         createH1.textContent = this.name;
//         Datasales.appendChild(createH1);

//         let createul = document.createElement('ul');
//         Datasales.appendChild(createul);

//         for (let i = 0; i < hours.length; i++) {
//             let createli = document.createElement('li');
//             createli.textContent = hours[i] + ' : ' + this.PurshasedResult[i] + "cookies";
//             createul.appendChild(createli);


//         }

//         let createli2 = document.createElement('li');

//         createli2.textContent = 'total' + ':' + this.totaly + 'cookies'
//         createul.appendChild(createli2);

//     }

// }

// Dubai.TotalPurshasedResult();

// Dubai.render();

// const Paris = {
//     name: 'Paris',
//     max: 38,
//     min: 20,
//     avg: 2.3,
//     totaly: 0,

//     PurshasedResult: [],

//     random: function (min, max) {
//         let customers = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
//         let cookiesPerHour = Math.round(customers * this.avg);

//         return cookiesPerHour;


//     },

//     TotalPurshasedResult: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.PurshasedResult.push(this.random(this.min, this.max));
//             this.totaly += this.PurshasedResult[i];

//         }
//         return this.PurshasedResult
//     },

//     render: function () {

//         let createH1 = document.createElement("h1");
//         createH1.textContent = this.name;
//         Datasales.appendChild(createH1);

//         let createul = document.createElement('ul');
//         Datasales.appendChild(createul);

//         for (let i = 0; i < hours.length; i++) {
//             let createli = document.createElement('li');
//             createli.textContent = hours[i] + ' : ' + this.PurshasedResult[i] + "cookies";
//             createul.appendChild(createli);


//         }

//         let createli2 = document.createElement('li');

//         createli2.textContent = 'total' + ':' + this.totaly + 'cookies'
//         createul.appendChild(createli2);

//     }

// }

// Paris.TotalPurshasedResult();

// Paris.render();

// const Lima = {
//     name: 'Lima',
//     max: 16,
//     min: 2,
//     avg: 4.6,
//     totaly: 0,

//     PurshasedResult: [],

//     random: function (min, max) {
//         let customers = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
//         let cookiesPerHour = Math.round(customers * this.avg);

//         return cookiesPerHour;


//     },

//     TotalPurshasedResult: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.PurshasedResult.push(this.random(this.min, this.max));
//             this.totaly += this.PurshasedResult[i];

//         }
//         return this.PurshasedResult
//     },

//     render: function () {

//         let createH1 = document.createElement("h1");
//         createH1.textContent = this.name;
//         Datasales.appendChild(createH1);

//         let createul = document.createElement('ul');
//         Datasales.appendChild(createul);

//         for (let i = 0; i < hours.length; i++) {
//             let createli = document.createElement('li');
//             createli.textContent = hours[i] + ' : ' + this.PurshasedResult[i] + "cookies";
//             createul.appendChild(createli);


//         }

//         let createli2 = document.createElement('li');

//         createli2.textContent = 'total' + ':' + this.totaly + 'cookies'
//         createul.appendChild(createli2);

//     }

// }

// Lima.TotalPurshasedResult();

// Lima.render();