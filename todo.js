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

  getElem("inputField").value = "";
};

// ====== Set Local Storage =====
const setLocal = (data) => localStorage.setItem("todo", JSON.stringify(data));

// ====== Set Local Storage =====
const getLocal = () => JSON.parse(localStorage.getItem("todo"));

// ====== Global Array ======
let arr = getLocal();
