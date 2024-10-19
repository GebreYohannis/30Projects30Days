const alertPlaceholder = document.querySelector(".liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `
   <div class="alert alert--${type} alert--dismissible" role="alert">`,
    `<div class="message">${message}</div>`,
    `<button type="button" class="btn-close">X</button></div>`,
  ].join("");
  alertPlaceholder.append(wrapper);
  wrapper.querySelector(".btn-close").addEventListener("click", () => {
    wrapper.remove();
  });
};

const alertTrigger = document.querySelector("#liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice!, you triggerd this alert!", "danger");
  });
}
