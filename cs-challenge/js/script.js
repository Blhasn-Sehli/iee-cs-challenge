const showPage = (id) => {
  document.getElementById(id).style.display = "inline";
  document.getElementById(id).style.opacity = 1;
  if (id == "page2") document.getElementById("logos").style.display = "inline";
  if (id == "page8") document.getElementById("logos").style.display = "none";
};

const hidePage = (id) => {
  document.getElementById(id).style.display = "none";
};

const next = (id1, id2) => {
  document.getElementById(id1).style.opacity = 0;
  setTimeout(() => {
    hidePage(id1);
    showPage(id2);
  }, 500);
};

function showtext(e) {
  e.querySelector(".text").style.display = "inline";
}
function hidetext(e) {
  e.querySelector(".text").style.display = "none";
}

window.onload = () => {
  showPage("page1");
};
