(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),u=n(8),l=n(11),i=n(1),s=n(2),m=n(4),d=n(3),b=n(5),p=n(9),f=(n(17),fetch("https://mate-academy.github.io/react_people-table/api/people.json").then(function(e){return e.json()})),h=n(10),y=n.n(h),E=function(e){var t=e.person,n=e.selectLine,r=e.selectedLine;return a.a.createElement("tr",{className:y()({active:r}),onClick:function(){return n(t.id)}},a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.sex),a.a.createElement("td",null,t.born),a.a.createElement("td",null,t.died),a.a.createElement("td",{className:t.age>65?"positive":null},t.age),a.a.createElement("td",null,t.century),a.a.createElement("td",null,t.mother),a.a.createElement("td",null,t.father))},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={selectedLine:null},n.selectLine=function(e){n.setState({selectedLine:e})},n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.people,n=this.state.selectedLine;return a.a.createElement("table",{className:"ui table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Id"),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Sex"),a.a.createElement("th",null,"Born"),a.a.createElement("th",null,"Died"),a.a.createElement("th",null,"Age"),a.a.createElement("th",null,"Century"),a.a.createElement("th",null,"Mother"),a.a.createElement("th",null,"Father"))),a.a.createElement("tbody",null,t.map(function(t){return a.a.createElement(E,{key:t.id,person:t,selectedLine:t.id===n,selectLine:e.selectLine})})))}}]),t}(a.a.Component);var O=function(e){var t=e.onValueChanged;return a.a.createElement("div",{className:"ui icon input"},a.a.createElement("input",{type:"text",placeholder:"Who are you looking for?",onChange:function(e){t(e.target.value)}}),a.a.createElement("i",{"aria-hidden":"true",className:"search circular inverted link icon"}))};var g=function(e){var t=e.sort;return a.a.createElement("div",{className:"ui buttons"},a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("id")}},"Sort by Id"),a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("name")}},"Sort by Name"),a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("sex")}},"Sort by Sex"),a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("born")}},"Sort by Born"),a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("died")}},"Sort by Died"),a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("age")}},"Sort by Age"),a.a.createElement("button",{type:"button",className:"ui button",onClick:function(){return t("century")}},"Sort by Century"))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).getSortedPeople=Object(p.a)([function(e){return e.people},function(e){return e.search},function(e){return e.sortMethod}],function(e,t,n){var r=t.toLowerCase(),a=e.filter(function(e){return e.name.toLowerCase().includes(r)||(e.mother||"").toLowerCase().includes(r)||(e.father||"").toLowerCase().includes(r)});switch(n){case"id":return a.sort(function(e,t){return e.id-t.id});case"name":return a.sort(function(e,t){return e.name.localeCompare(t.name)});case"sex":return a.sort(function(e,t){return e.sex.localeCompare(t.sex)});case"born":return a.sort(function(e,t){return e.born-t.born});case"died":return a.sort(function(e,t){return e.died-t.died});case"age":return a.sort(function(e,t){return e.age-t.age});case"century":return a.sort(function(e,t){return e.century-t.century});default:return a}}),n.sort=function(e){n.setState({sortMethod:e})},n.state={people:[],search:"",sortMethod:""},n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([f]).then(function(t){var n=Object(l.a)(t,1)[0],r=0;e.setState({people:n.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({id:r+=1},e,{age:e.died-e.born,century:Math.ceil(e.died/100)})})})})}},{key:"render",value:function(){var e=this,t=this.getSortedPeople(this.state);return a.a.createElement("div",{className:"container"},a.a.createElement(g,{sort:this.sort}),a.a.createElement(O,{onValueChanged:function(t){return e.setState({search:t.trim()})}}),a.a.createElement(v,{people:t}))}}]),t}(a.a.Component);c.a.render(a.a.createElement(C,{test:123}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1cfd91a2.chunk.js.map