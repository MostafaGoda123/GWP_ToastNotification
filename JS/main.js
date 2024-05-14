let successBtn = document.getElementById("successBtn");
let errorBtn = document.getElementById("errorBtn");
let invalidBtn = document.getElementById("invalidBtn");
let toastBox = document.querySelector(".toastBox");

successBtn.onclick = () => {
   let box = document.createElement("box")
   box.classList.add("box")
   box.classList.add("boxSuccess")
   box.innerHTML = `<i>v</i>Successfully Submitted`
   toastBox.append(box)
   setTimeout(() => {
      box.style.display = "none"
   }, 2000);
}
errorBtn.onclick = () => {
   let box = document.createElement("box")
   box.classList.add("box")
   box.classList.add("boxError")
   box.innerHTML = `<i>x</i>Please fix the`
   toastBox.append(box)
   setTimeout(() => {
      box.style.display = "none"
   }, 2000);
}
invalidBtn.onclick = () => {
   let box = document.createElement("box")
   box.classList.add("box")
   box.classList.add("boxInvalid")
   box.innerHTML = `<i>!</i>Invalid input , check again `
   toastBox.append(box)
   setTimeout(() => {
      box.style.display = "none"
   }, 2000);
}








