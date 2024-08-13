const R = document.querySelector(".recipee-list");
// TODO Recipees with more than one part, eg Shashuka are not rendered correctly

function populate_modal(data, modal) {
  t = modal.querySelector(".modalTitle");
  t.textContent = data["title"];

  tableBody = modal.querySelector(".ingredientTable");
  tableBody.innerHTML = "";
  for (const i in data["ingredients"]) {
    ingredient = data["ingredients"][i];
    console.log(ingredient);
    const row = document.createElement("tr");
    const e1 = document.createElement("td");
    const e2 = document.createElement("td");

    if (Array.isArray(ingredient)) {
      e1.textContent = ingredient[0];
      e2.textContent = `${ingredient[1]} ${ingredient[2]}`;
    } else {
      e1.textContent = ingredient;
    }
    row.append(e1, e2);
    tableBody.append(row);
  }
  instructionList = modal.querySelector(".instructionList");
  instructionList.innerHTML = "";
  if (Array.isArray(data["instructions"])) {
    for (const i in data["instructions"]) {
      instr = data["instructions"][i];
      const li = document.createElement("li");
      li.textContent = instr;
      instructionList.append(li);
    }
  } else {
    const li = document.createElement("li");
    li.textContent = data["instructions"];
    instructionList.append(li);
  }

  console.log(data["ingredients"]);
  console.log(t);
}

function show_modal(data) {
  const modal = document.getElementById("instructionDialog");
  populate_modal(data, modal);
  modal.showModal();
}

function close_modal() {
  const d = document.getElementById("instructionDialog");
  d.close("");
}

async function load_json(path) {
  const response = await fetch(path);
  return response.json();
}

function addPreviewGrid(data) {
  for (const item of data["recipees"]) {
    const div = document.createElement("div");
    div.textContent = item["title"];
    div.classList.add("grid-item");
    div.onclick = () => show_modal(item);
    R.append(div);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await load_json("assets/recipees/a.json");
  addPreviewGrid(data);
});
