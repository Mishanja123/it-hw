const e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");e.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log(r)})),e.addEventListener("input",throttle((function(e){return r[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(r)),r}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.value=e[t.name]||"",a.value=e[a.name]||"")}();let r=JSON.parse(localStorage.getItem("feedback-form-state"))||{};
//# sourceMappingURL=feedback.4712bf63.js.map
