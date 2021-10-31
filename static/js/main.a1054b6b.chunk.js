(this["webpackJsonpventi-bed"]=this["webpackJsonpventi-bed"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},40:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(20),s=n.n(i),a=(n(30),n(8)),r=(n(31),n(32),n(1));var o=function(t){return Object(r.jsx)("div",{class:"background-image-div1",children:Object(r.jsx)("p",{children:"The COVID-19 pandemic continues to stress-test hospital capacity all over the USA, and nowhere is that more acutely felt than in staffing shortages. The fluctuating census of available inpatient and ICU beds compounds the challenge. Our VentiBed app highlights the crisis."})})},j=(n(34),n(7)),l=[{name:"Wyoming",abbreviation:"WY"}],d="".concat(l.abbreviation);console.log(d);var b=d.replace("".concat(l.abbreviation),"".concat(l.name));console.log(b);var u=function(t){var e=t.beds,n=Object(c.useState)(""),i=Object(a.a)(n,2),s=i[0],o=i[1],d=Object(c.useState)([]),b=Object(a.a)(d,2),u=b[0],h=b[1];return Object(c.useEffect)((function(){if(e.length){h(e.filter((function(t){console.log(t);var e=t.state.toLowerCase(),n=s.toLowerCase();return console.log(e),-1!==e.indexOf(n)})).sort((function(t,e){return t.state<e.state?-1:t.state>e.state?1:0})));var t=e,n={};return l.forEach((function(t){return n[t]=!1})),t.forEach((function(t){return!1===n[t]&&(n[t]=!0)})),Object.keys(n).map((function(t){return{name:t,matched:n[t]}}))}}),[e,s]),u?Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)("input",{type:"text",placeholder:"type/click state abbreviation",onChange:function(t){return o(t.target.value)}}),u.map((function(t){return Object(r.jsx)(j.b,{to:"/staffed/".concat(t.state),children:Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:t.state})})},t.state)}))]}):Object(r.jsx)("p",{children:"Loading state data..."})},h=n(3);n(40);var O,f,x=function(t){var e=Object(c.useState)(null),n=Object(a.a)(e,2),i=n[0],s=n[1],o=Object(h.e)().state;return Object(c.useEffect)((function(){fetch("https://healthdata.gov/resource/6xf2-c3ie.json").then((function(t){return t.json()})).then((function(t){console.log(t);var e=t.find((function(t){return t.state===o}));s(e)})).catch(console.error)}),[o]),i?Object(r.jsx)("div",{className:"container2",id:"individual",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("div",{className:"card-title",children:Object(r.jsx)("p",{children:i.state})}),Object(r.jsxs)("div",{className:"list",children:[Object(r.jsxs)("li2",{children:["A: ",i.percent_of_inpatients_with_covid]}),Object(r.jsx)("p",{}),Object(r.jsxs)("li3",{children:["B: ",i.adult_icu_bed_utilization]}),Object(r.jsx)("p",{}),Object(r.jsxs)("li4",{children:["C: ",i.adult_icu_bed_covid_utilization]}),Object(r.jsx)("p",{}),Object(r.jsxs)("li1",{children:["Hospitals Reporting Critical Staffing Shortages Today:",i.critical_staffing_shortage_today_yes]}),Object(r.jsx)("p",{}),Object(r.jsx)("h6",{children:"LEGEND"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li2",{children:"A: COVID Patients Admitted to Hospital/All Patients Admitted (e.g. 0.037 = 3.7%)"}),Object(r.jsx)("p",{}),Object(r.jsx)("li3",{children:"B: Occupied Adult ICU Beds/All Adult ICU Beds (e.g 0.582 = 58.2%)"}),Object(r.jsx)("p",{}),Object(r.jsx)("li4",{children:"C: ICU Beds Occupied By Adult COVID Patients/All Occupied Adult ICU Beds (e.g. 0.196 = 19.6%)"}),Object(r.jsx)("p",{})]})]})]})})},o):Object(r.jsx)("p",{children:"Loading state data..."})},p=n(14),g=n(15),v=g.b.button(O||(O=Object(p.a)(["\n\tpadding: 10px 12px;\n\tfont-size: 1rem;\n\tborder-radius: 2px;\n\tmin-width: 70px;\n\tcursor: pointer;\n\tfont-family: 'Menlo', monospace;\n"]))),m=Object(g.b)(v)(f||(f=Object(p.a)(["\n\tbackground-color: whitesmoke;\n\tborder: bold;\n\tcolor: white;\n\n\t&:hover {\n\t\tbackground-color: red;\n\t}\n"])));var A,_=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){fetch("https://healthdata.gov/resource/6xf2-c3ie.json").then((function(t){return t.json()})).then((function(t){console.log(t),i(t)})).catch(console.error)}),[]),Object(r.jsxs)("main",{children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)(m,{children:Object(r.jsx)(j.b,{to:"/",children:"Home"})}),Object(r.jsx)(v,{children:Object(r.jsx)(j.b,{to:"/About",children:"About"})})]}),Object(r.jsx)("div",{className:"sheets",children:Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Introducing VentiBed ..."})})}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(r.jsx)(u,{beds:n})}}),Object(r.jsx)(h.a,{path:"/staffed/:state",exact:!0,render:function(){return Object(r.jsx)(x,{beds:n})}}),Object(r.jsx)(h.a,{path:"/About",children:Object(r.jsx)(o,{})})]})]})},y=n(25),C=Object(g.a)(A||(A=Object(p.a)(["\n    ","\n\n    html {\n        font-size: 16px;\n        box-sizing: border-box;\n    }\n\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n\n    body {\n        margin: 0;\n        font-family: 'Menlo', monospace;\n\n    }\n\n    main {\n        width: 90%;\n        margin: 0 auto;\n    }\n\n"])),Object(y.a)());n(42),n(43),n(44);s.a.render(Object(r.jsxs)(j.a,{children:[Object(r.jsx)(C,{}),Object(r.jsx)(_,{})]}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a1054b6b.chunk.js.map