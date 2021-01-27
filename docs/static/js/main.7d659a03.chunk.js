(this["webpackJsonpreact-meal-finder"]=this["webpackJsonpreact-meal-finder"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(7),l=a.n(c),i=(a(13),a(4)),o=Object(s.createContext)(),j=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(s.useContext)(o),l=c.getMeals,j=c.getRandomMeal;return Object(n.jsxs)("div",{className:"flex",onSubmit:function(e){e.preventDefault(),""!==a?l(a):alert("Please fill the field"),r("")},children:[Object(n.jsxs)("form",{className:"flex",id:"submit",children:[Object(n.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Search for meal"}),Object(n.jsx)("button",{className:"search-btn",children:Object(n.jsx)("i",{className:"fas fa-search"})})]}),Object(n.jsx)("button",{className:"random",onClick:j,children:Object(n.jsx)("i",{className:"fas fa-random"})})]})},u=function(e){var t=e.meal;return Object(n.jsxs)("div",{className:"meal",children:[Object(n.jsx)("img",{src:t.strMealThumb,alt:t.strMeal}),Object(n.jsx)("div",{className:"meal-info","data-mealid":t.idMeal,children:Object(n.jsx)("h3",{className:"meal-info-text","data-mealid":t.idMeal,children:t.strMeal})})]})},m=function(){var e=Object(s.useContext)(o),t=e.meals,a=e.term,r=e.getMealByID;return Object(n.jsx)(n.Fragment,{children:null===t?Object(n.jsxs)("p",{children:['"',a,'" is not available. Try again!']}):0!==t.length&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:['Your result for search about "',a,'" :']}),Object(n.jsx)("div",{className:"meals",onClick:function(e){(e.target.classList.contains("meal-info")||e.target.classList.contains("meal-info-text"))&&r(e.target.dataset.mealid)},children:t.map((function(e,t){return Object(n.jsx)(u,{meal:e},t)}))})]})})},d=function e(){for(var t=Object(s.useContext)(o).singleMeal,a=[],r=1;a.length<=20&&t["strIngredient".concat(r)];r++)a.push("".concat(t["strIngredient".concat(r)]," - ").concat(e["strMeasure".concat(r)]));return Object(n.jsx)("div",{className:"single-meal",children:Object(n.jsxs)("div",{className:"single-meal-container",children:[Object(n.jsx)("h1",{children:t.strMeal}),Object(n.jsx)("img",{src:t.strMealThumb,alt:t.strMeal}),Object(n.jsxs)("div",{className:"meal-category",children:[t.strArea?Object(n.jsx)("p",{children:t.strArea}):"",t.strCategory?Object(n.jsx)("p",{children:t.strCategory}):""]}),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("p",{children:t.strInstructions}),Object(n.jsx)("h2",{children:"Ingredients"}),Object(n.jsx)("ul",{children:a.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})]})]})})};var b=function(){var e=Object(s.useContext)(o).singleMeal;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Meal Finder"}),Object(n.jsx)(j,{}),Object(n.jsx)(m,{}),null!==e&&Object(n.jsx)(d,{})]})},h=a(2),p=a.n(h),x=a(5),O=a(3),f="GET_MEALS",g="GET_MEAL_BY_ID",v="RANDOM",M="NO_MEAL",y=function(e,t){switch(t.type){case f:case M:return Object(O.a)(Object(O.a)({},e),{},{term:t.payload.term,meals:t.payload.meals,singleMeal:null,random:!1});case g:return Object(O.a)(Object(O.a)({},e),{},{singleMeal:t.payload,random:!1});case v:return Object(O.a)(Object(O.a)({},e),{},{singleMeal:t.payload,random:!0,meals:[],term:""});default:return e}},w=function(e){var t=e.children,a=Object(s.useReducer)(y,{term:"",meals:[],singleMeal:null,random:!1}),r=Object(i.a)(a,2),c=r[0],l=r[1],j=function(){var e=Object(x.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.trim()){e.next=8;break}return e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:null===(n=e.sent).meals?l({type:M,payload:{meals:n.meals,term:t}}):(console.log(n),l({type:f,payload:{meals:n.meals,term:t}}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(x.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,l({type:g,payload:n.meals[0]}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(x.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l({type:v,payload:a.meals[0]});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(o.Provider,{value:{meals:c.meals,term:c.term,singleMeal:c.singleMeal,getMeals:j,getMealByID:u,getRandomMeal:m},children:t})};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(w,{children:Object(n.jsx)(b,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7d659a03.chunk.js.map