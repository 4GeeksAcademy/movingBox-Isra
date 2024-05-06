let num = 0;

const createBox = () => {
  const element = document.createElement("div");
  element.innerHTML = `<div id= "box${nId()}" class="box" onclick="moveBox()"> ${num}</div>`;
  document.body.appendChild(element);
};

const nId = () => {
  num++;
  return num;
};

document.addEventListener("mousemove", (event) => {
  console.log(event);
});

const moveBox = () => {
  const box = document.querySelector("#boxTest");
};
