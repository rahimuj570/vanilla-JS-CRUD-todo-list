// ==== Get HTML Element =====
const getElem = (idClass) => document.getElementById(idClass);

// ====== Add Todo Handler ======
const addList = (isUpdate, index) => {
  let inputVal = getElem("inputField").value;
  let getLocalStorage = localStorage.getItem("todo");
  if (inputVal !== "") {
    if (!getLocalStorage) {
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
function showUi() {
  const tbody = getElem("tbody");
  tbody.textContent = "";
  const getAllDataArray = getLocal();
  if (getAllDataArray === null || getAllDataArray.length == 0) {
    getElem("img-404").style.display = "block";
  } else {
    getElem("img-404").style.display = "none";
    getAllDataArray?.map((data, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${index < 9 ? "0" + ++index : ++index}</td>
              <td>${data}</td>
              <td id="action">
                <span id="edit" onclick="editHandler(${index})"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></span>
                <span id="delete" onclick="deleteHandler(${index})"
                  ><i class="fa-solid fa-trash-can"></i
                ></span>
              </td>`;
      tbody.appendChild(tr);
    });
  }
}

// ====== Todo Delete Handler =====
const deleteHandler = (index) => {
  const getAllDataArray = getLocal();
  getAllDataArray.splice(index - 1, 1);
  setLocal(getAllDataArray);
  showUi();
};

// ===== Todo Edit Handler ======
const editHandler = (index) => {
  const getAllDataArray = getLocal();
  const currentData = getAllDataArray[--index];
  getElem("inputField").value = currentData;
  getElem("inputField").focus();
  getElem("EditBtn").style.display = "block";
  getElem("AddBtn").style.display = "none";
  targetEdit = index;
};

// ====== Edit Function =====
getElem("EditBtn").addEventListener("click", () => {
  const prevData = getLocal();
  prevData[targetEdit] = getElem("inputField").value;
  setLocal(prevData);
  getElem("EditBtn").style.display = "none";
  getElem("AddBtn").style.display = "block";
  getElem("inputField").value = "";
  showUi();
});

// ===== Clear All Handler ======
const allClear = () => {
  localStorage.clear();
  getElem("tbody").textContent = "";
  getElem("img-404").style.display = "block";
};

// ====== Set Local Storage =====
const setLocal = (data) => localStorage.setItem("todo", JSON.stringify(data));

// ====== Set Local Storage =====
const getLocal = () => JSON.parse(localStorage.getItem("todo"));

// ====== Global Array ======
let arr = getLocal();
showUi();
let targetEdit;
