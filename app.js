document.querySelector(".acoes").addEventListener("click",
e => {
  if (e.target.dataset.dica)document.querySelector("#dica").textContent = e.target.dataset.dica
})



