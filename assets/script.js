(function(){document.documentElement.classList.replace("no-js","js")})(),function(){window.addEventListener("tac.root_available",function(){document.querySelectorAll("#tarteaucitronRoot button").forEach(function(a){a.classList.contains("catToggleBtn")||"tarteaucitronClosePanel"===a.id||(a.classList.contains("tarteaucitronAllow")?a.classList.add("btn","btn-inverse","btn-primary","ms-2"):a.classList.add("btn","btn-inverse","btn-info","ms-2"))})},{once:!0}),window.addEventListener("tac.open_panel",function(){const a=document.getElementById("tarteaucitronServices_api");a.querySelectorAll("button").forEach(function(a){a.classList.contains("tarteaucitronAllow")?a.classList.add("btn","btn-primary","btn-inverse","ms-2"):a.classList.add("btn","btn-info","ms-2")})},{once:!0})}(),function(){function a(a){const c=b.querySelector(`[data-tag="${a}"]`);c.classList.add("active"),c.setAttribute("aria-current","true")}const b=document.getElementById("filtersbar");if(!b)return;const c=new URL(window.location).searchParams.get("tag");if(null===c||"all"===c)return void a("all");a(c);const d=document.querySelectorAll("[data-tags]");let e=0;d.forEach(function(a){a.dataset.tags.includes(c)||(a.setAttribute("hidden",""),e++)}),document.getElementById("filtersbar_counter").innerHTML=`${d.length-e+""}&nbsp;`}(),function(){function a(){d.style.right="-99999px",d.style.opacity="0"}function b(){d.style.right=null,d.style.opacity="1"}function c(){window.pageYOffset>=e?b():a()}const d=document.getElementById("back-to-top"),e=300;d&&"undefined"!=typeof window.requestAnimationFrame&&(a(),window.addEventListener("scroll",function(){window.requestAnimationFrame(c)}))}();/* Priority nav*/function initPriorityNav(){const a=jQuery("#secondary-navigation");if(a){const b={en:"More",fr:"Plus"};if(!b.hasOwnProperty(Application.lang))throw new Error(`[initPriorityNav()] : lang '${Application.lang}' is not managed by the method's translations`);a.prioritynav(b[Application.lang])}}function highlightCodeBlocks(){hljs.initHighlighting();const a=document.querySelectorAll(".hljs");if(!a.length)return;const b={css:"CSS",html:"HTML",java:"Java",javascript:"JavaScript",json:"JSON",kotlin:"Kotlin",objectivec:"Objective-C",swift:"Swift",xml:"XML"};a.forEach(function(a){const c=a.result.language,d=b[c]||c,e=document.createElement("div");e.classList.add("bg-primary","d-inline-block","p-2","fw-bold"),e.textContent=d,a.parentNode.insertBefore(e,a)})}function enhanceSearchField(){const a=document.querySelector("[role=\"banner\"] a[href=\"#search-input\"]"),b=document.getElementById("search-input-container"),c=document.getElementById("search-input-toggler"),d=document.getElementById("search-input");/**
   * Set focus directly in the search box when we open it
   */a.addEventListener("click",function(a){// We place the focus inside the search input if it is already visible
if(a.preventDefault(),"true"===c.getAttribute("aria-expanded"))d.focus();else new boosted.Collapse(b,{show:!0})}),function(){const a=document.querySelector("#algolia-autocomplete-listbox-0 > .ds-dataset-1"),b=new MutationObserver(function(b){for(let c of b)if("childList"===c.type){let b=a.querySelectorAll(".algolia-docsearch-suggestion");b.forEach(a=>{a.removeAttribute("aria-label")})}});b.observe(a,{childList:!0})}(),b.addEventListener("shown.bs.collapse",function(){this.querySelector("[type=\"search\"]").focus()})}window.addEventListener("DOMContentLoaded",function(){//initPriorityNav()
enhanceSearchField(),!0===Application.vendors.highlightJS&&highlightCodeBlocks()},{once:!0});