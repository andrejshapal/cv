class Item {
  constructor(name, price, stock, availabe, description) {
    this.name = name;

    this.price = price;
    this.stock = stock;
    this.availabe = availabe;
    this.description = description;
  }
}

let data = [
  {
    name: String("iphone"),
    price: Number(20),
    stock: Number(5),
    available: Boolean(true),
    description: String("phone"),
  },
  {
    name: String("samsung"),
    price: Number(10),
    stock: Number(15),
    available: Boolean(true),
    description: String("phone"),
  },
  {
    name: String("pixel"),
    price: Number(15),
    stock: Number(2),
    available: Boolean(true),
    description: String("phone"),
  },
];

function postAlert(el, text) {
  el.innerHTML = `
  <div class="alert alert-danger" role="alert">
  ${text}
</div>
  `;
}

function clearAlert(el) {
  el.innerHTML = ``;
}

function calcAvg(el, data) {
  let avg = 0;
  data.forEach((value, key) => {
    avg += value.price;
  });
  el.innerHTML = data.length ? avg / data.length + " EUR" : 0 + " EUR";
}

function calcTotal(el, data) {
  let total = 0;
  data.forEach((value, key) => {
    total += value.price * value.stock;
  });
  el.innerHTML = total + " EUR";
}

function deleteItem(id) {
  data = data.filter((_, key) => key != id);
  publish(table, data);
}
ascdesc = 0;
document.getElementById("sort").addEventListener("click", () => {
  if (ascdesc === 0) {
    ascdesc = 1;
    data = data.sort((a, b) => b.price - a.price);
  } else {
    ascdesc = 0;
    data = data.sort((a, b) => a.price - b.price);
  }
  publish(table, data);
});

function publish(el, data) {
  let tableContent = "";
  data.forEach((value, key) => {
    tableContent =
      tableContent +
      `
      <tr>
        <th scope="row">${key}</th>
        <td>${value.name}</td>
        <td>${value.description}</td>
        <td>${value.price}</td>
        <td>${value.stock}</td>
        <td>${value.available}</td>
        <td>
        <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" name="delete_item" id="${key}"><i class="fa fa-trash"></i></button>
        <button class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" name="edit_item" id="${key}"><i class="fa fa-edit"></i></button>
        </td>
        </tr>
    `;
  });

  el.innerHTML = tableContent;

  calcAvg(avg, data);
  calcTotal(tot, data);
  document.querySelectorAll('button[name="delete_item"]').forEach((button) => {
    button.addEventListener("click", function () {
      const buttonId = this.id;
      console.log(buttonId);
      deleteItem(buttonId);
    });
  });
  document.querySelectorAll('button[name="edit_item"]').forEach((button) => {
    button.addEventListener("click", function () {
      const buttonId = this.id;
      const editBlock = document.getElementById("edit_block");
      const name = document.getElementById("eformName");
      const id = document.getElementById("eid");
      const desc = document.getElementById("eformDesc");
      const price = document.getElementById("eformPrice");
      const items = document.getElementById("eformItems");
      const available = document.getElementById("eformAvailable");
      name.value = data[buttonId].name;
      desc.value = data[buttonId].description;
      price.value = data[buttonId].price;
      items.value = data[buttonId].stock;
      available.checked = data[buttonId].available;
      id.value = buttonId;
      editBlock.classList.remove("invisible");
    });
  });
}

const table = document.getElementById("table");
const alert = document.getElementById("alert");
const avg = document.getElementById("avg");
const tot = document.getElementById("total");

publish(table, data);

document.getElementById("insert").addEventListener("click", () => {
  const name = document.getElementById("formName").value;
  const desc = document.getElementById("formDesc").value;
  const price = document.getElementById("formPrice").value;
  const items = document.getElementById("formItems").value;
  const available = document.getElementById("formAvailable").checked;
  if (!name) {
    postAlert(alert, "Name can not be empty");
  } else if (!desc) {
    postAlert(alert, "Description can not be empty");
  } else if (!price || price == 0) {
    postAlert(alert, "Price can not be empty and be 0");
  } else if (!items) {
    postAlert(alert, "Items can not be empty");
  } else {
    clearAlert(alert);
    data.push(new Item(name, price, items, available, desc));
    publish(table, data);
  }
});

document.getElementById("search").addEventListener("click", () => {
  const searchName = document.getElementById("searchName");
  const newData = data.filter((value, key) => value.name === searchName.value);
  publish(table, newData);
});

document.getElementById("clear").addEventListener("click", () => {
  publish(table, data);
});

document.getElementById("edit").addEventListener("click", () => {
  const editBlock = document.getElementById("edit_block");

  const name = document.getElementById("eformName");
  const desc = document.getElementById("eformDesc");
  const price = document.getElementById("eformPrice");
  const items = document.getElementById("eformItems");
  const available = document.getElementById("eformAvailable");
  const id = document.getElementById("eid");
  if (!name.value) {
    postAlert(alert, "Name can not be empty");
  } else if (!desc.value) {
    postAlert(alert, "Description can not be empty");
  } else if (!price.value || price.value == 0) {
    postAlert(alert, "Price can not be empty and be 0");
  } else if (!items.value) {
    postAlert(alert, "Items can not be empty");
  } else {
    clearAlert(alert);
    data[id.value] = {
      name: name.value,
      price: price.value,
      stock: items.value,
      available: available.checked,
      description: desc.value,
    };
    publish(table, data);

    name.value = "";
    desc.value = "";
    price.value = "";
    items.value = "";
    available.checked = false;
    id.value = "";
    editBlock.classList.add("invisible");
  }
});
