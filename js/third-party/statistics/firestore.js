firebase.initializeApp({apiKey:CONFIG.firestore.apiKey,projectId:CONFIG.firestore.projectId}),function(){const i=(o,r)=>o.get().then(e=>{let t=e.exists?e.data().count:0;return r&&(t++,o.set({count:t})),t}),n=t=>e=>{t.innerText=e};document.addEventListener("page:loaded",()=>{const e=firebase.firestore(),t=e.collection(CONFIG.firestore.collection);if(CONFIG.page.isPost){var o=document.querySelector(".post-title").textContent.trim(),r=t.doc(o);let e=CONFIG.hostname===location.hostname;localStorage.getItem(o)?e=!1:localStorage.setItem(o,!0),i(r,e).then(n(document.querySelector(".firestore-visitors-count")))}else CONFIG.page.isHome&&(r=[...document.querySelectorAll(".post-title")].map(e=>{e=e.textContent.trim(),e=t.doc(e);return i(e)}),Promise.all(r).then(e=>{const o=document.querySelectorAll(".firestore-visitors-count");e.forEach((e,t)=>{n(o[t])(e)})}))})}();