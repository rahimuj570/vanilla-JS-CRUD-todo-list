// ==== Get HTML Element =====
const getElem = (idClass) => document.getElementById(idClass);

// ====== Add Todo Handler ======
const addList = () => {
  let inputVal = getElem("inputField").value;
  let getLocal = localStorage.getItem("todo");
  if (inputVal !== "") {
    if (!getLocal) {
      arr = [inputVal];
      setLocal(arr);
    } else {
      arr.push(inputVal);
      setLocal(arr);
    }
  } else {
    alert("Please Add A Task");
  }
  showUi();
  getElem("inputField").value = "";
};

// ====== Show UI List =====
const showUi = () => {
  const tbody = getElem("tbody");
  const getAllDataArray = getLocal();

  getAllDataArray.map((data, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${++index}</td>
              <td>${data}</td>
              <td id="action">
                <span id="edit" onclick="editHandler()"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></span>
                <span id="delete" onclick="deleteHandler()"
                  ><i class="fa-solid fa-trash-can"></i
                ></span>
              </td>`;
    tbody.appendChild(tr);
  });
};

// ====== Todo Edit Handler =====
const editHandler = () => {
  alert("d");
};

// ====== Set Local Storage =====
const setLocal = (data) => localStorage.setItem("todo", JSON.stringify(data));

// ====== Set Local Storage =====
const getLocal = () => JSON.parse(localStorage.getItem("todo"));

// ====== Global Array ======
let arr = getLocal();
showUi();
