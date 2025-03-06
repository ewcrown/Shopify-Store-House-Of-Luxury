// setTimeout(() => {
//   window.addEventListener("message", (event) => {
//     if (event.origin !== "http://127.0.0.1:9292") return;

//     try {
//       const data = event.data; // ✅ No need to parse JSON

//       console.log("hello world",data)

//       if (data.action === "fillForm") {
//         document.querySelector("input[name=first_name]").value = data.fname || "";
//         document.querySelector("input[name=last_name]").value = data.lname || "";
//         document.querySelector("input[name=email]").value = data.email || "";
//         console.log("✅ Form filled:", data.fname, data.lname, data.email);
//       }
//     } catch (error) {
//       console.error("❌ Error handling message:", error);
//     }
//   });
// }, 2000);
const note = document.querySelector('#note');
const phone = document.querySelector('#Phone');
const whatNotId = document.querySelector('#WhatNotId');

const updateNote = () => {
  note.value = `WhatNotId: ${whatNotId.value}\nPhone: ${phone.value}`;
};

phone?.addEventListener('keyup', updateNote);
whatNotId?.addEventListener('keyup', updateNote);