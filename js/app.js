'use strict';

let Datasales = document.getElementById("Datasales");

const hours = ['6 am ', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

function place(name, max, min, avg, totaly) {
        this.name = name;
        this.max= max;
        this.min= min;
        this.avg= avg;
        this.totaly= totaly;
        this.customers=1;
        this.cookiesPerHour=1;
    
        this.PurshasedResult= [];
        
};
        place.prototype.getcustomers = function(min, max) {
       
            this.customers = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
            this.cookiesPerHour = Math.round(customers * this.avg);
    
            return this.cookiesPerHour;
    
    
        } ;   
        
        place.prototype.getPurshasedResult = function() { 
            for (let i = 0; i < hours.length; i++) {
                this.PurshasedResult.push(this.random(this.min, this.max));
                this.totaly += this.PurshasedResult[i];
    
            }
            return this.PurshasedResult
        };
    
        place.prototype.render= function () {
    
            let articleElement = document.createElement('article');
            Datasales.appendChild('articleElement')

            let createH1 = document.createElement("h1");
            createH1.textContent = this.name;
            articleElement.appendChild(createH1);
    
            const tableEle = document.createElement('table');
            articleElement.appendChild(createul);
    
            for (let i = 0; i < hours.length; i++) {
                let createli = document.createElement('li');
                createli.textContent = hours[i] + ' : ' + this.PurshasedResult[i] + "cookies";
                createul.appendChild(createli);
    
    
            }
    
            let createli2 = document.createElement('li');
    
            createli2.textContent = 'total' + ':' + this.totaly + 'cookies'
            createul.appendChild(createli2);
    
        }
    
    
    
     place.PurshasedResult();
    
     place.render();



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