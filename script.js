let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

// for(let i = 0 ;i<list.length; i++)
// list[i].addEventListener('click' , function(){
// for(let j = 0 ; j<list.length ; j++){
//     list[j].classList.remove('active');
//     list[j].classList.add('hide');
// }
// this.classList.add('active');
// let dataFilter = this.getAttribute('.data-filter');
// for(k=0 ; k<itemBox.length ;k++){
//     itemBox[k].classList.add('hide')
//     if(itemBox[k].getAttribute('data-item')  == dataFilter ||
//     dataFilter == "all"){
//         itemBox[k].classList.remove('hide');
//         itemBox[k].classList.add('active');
//     }
// }

// }
console.log(list);

var categories = document.getElementById("select-inp");

function handleUpdate() {
  var all = document.querySelectorAll("item-box");
  console.log(all);
}
