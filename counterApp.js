const counter = document.querySelector(".counter");
const counterValue = document.querySelector(".counter_value");

const onCounterChange = (e) => {
  const isButton = e.target.classList.contains("counter_button");

  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;
  const oldValue = Number(counterValue.textContent);
  const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;

  counterValue.textContent = newValue;

  localStorage.setItem("counter", newValue);
};

counter.addEventListener("click", onCounterChange);

// link tabs to save data
const onStorageChange = (e) => {
  counterValue.textContent = e.newValue;
};

window.addEventListener("storage", onStorageChange);

// saving data when opening a tab
const onContentLoad = () => {
  counterValue.textContent = localStorage.getItem("counter") || 0;
};

document.addEventListener("DOMContentLoaded", onContentLoad);
