!function(){function e(e,t){var n=Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){n?o({position:e,delay:t}):a({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.target.delay.value),o=Number(t.target.step.value),a=Number(t.target.amount.value),i=0;i<a;i+=1)e(i,n).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.58baf5ab.js.map
