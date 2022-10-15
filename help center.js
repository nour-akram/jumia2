// var myButton1 = document.getElementById("button-nav"),
//     myButton2 = document.getElementsById("button-nav1");

// function bgc() {
//     myButton1.style.backgroundColor = "#ededed";
//     myButton1.style.borderRadius = "3px";

//     myButton2.style.backgroundColor = "#ededed";
//     myButton2.style.borderRadius = "3px";
// }


const zzLists = document.querySelectorAll('.zz')
const dataLists = document.querySelectorAll('.data-list')

zzLists.forEach(zz => {
  zz.addEventListener('mousemove', () => {
    const targetDataset = zz.dataset.list
    dataLists.forEach(list => {
      list.classList.add('hide')
    })
    document.querySelector(targetDataset).classList.remove('hide')
  })
})
