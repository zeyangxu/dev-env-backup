"use strict";var l=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var d=(o,r)=>{for(var e in r)l(o,e,{get:r[e],enumerable:!0})},f=(o,r,e,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of p(r))!u.call(o,t)&&t!==e&&l(o,t,{get:()=>r[t],enumerable:!(s=c(r,t))||s.enumerable});return o};var i=o=>f(l({},"__esModule",{value:!0}),o);var n={};d(n,{default:()=>m});module.exports=i(n);var a=require("@raycast/api"),m=async()=>{(0,a.open)("devutils://cssformatter?clipboard")};0&&(module.exports={});
