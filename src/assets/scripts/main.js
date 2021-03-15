const stacks = document.querySelectorAll(".stack");
const stacksContainer = document.getElementById("stack-grid");


function changeBackgroundColor(e, color) {
  e.style.backgroundColor = color;
  if (e.children.length > 0) {
    for(const child of e.children) {
      changeBackgroundColor(child, e);
    }
  }
}

function removeColorFromStacks(e) {
  if (e.target.classList.contains("stack-grid")) {
    console.log("booh");
    for (const stack of stacks) {
      changeBackgroundColor(stack, "#ddd")
    }
  }
}

stacksContainer.addEventListener("mouseover", e => {
  removeColorFromStacks(e)
});

for (const stack of stacks) {
  stack.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("stack")) {
      changeBackgroundColor(e.target, "#eee")
    }
  });
}
