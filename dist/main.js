var Client;(()=>{var e={65:()=>{},358:()=>{},790:()=>{},773:()=>{},546:()=>{}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n.d(o,{checkForName:()=>t,handleSubmit:()=>e});n(546),n(65),n(358),n(790),n(773);function e(e){e.preventDefault();var t=document.getElementById("name").value;Client.checkForName(t),console.log("::: Form Submitted :::"),fetch("http://localhost:8081/test").then((function(e){return e.json()})).then((function(e){document.getElementById("results").innerHTML=e.message}))}function t(e){console.log("::: Running checkForName :::",e);["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e)&&alert("Welcome, Captain!")}})(),Client=o})();