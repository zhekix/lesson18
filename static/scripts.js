// var obj1 = {a: "строка", b: 'фраза'};
// var obj2 = {a: "строка", b: 'фраза'};

var tds = document.querySelectorAll('td');

// тут this равен window

// всплытие (bubbling)

// tds.forEach((td) => {
//   td.onclick = (e) => {
//     // e.stopPropagation();
//     // console.log("клик на td");
//     // e.target.style.background = e.target.style.background ? null : 'red';
//   }
// });

// Делегирование событий

document.documentElement.onclick = function () {
  console.log("клик на html")
}

document.body.onclick = function() {
  console.log("клик на body")
}

var table = document.querySelector('table');
table.onclick = function(e) {
  console.log("клик на таблице")
  if (e.target.tagName !== "TD") return;
  e.target.style.background = e.target.style.background ? null : 'red';
}

// перехват (capturing)

table.addEventListener('click', () => {
  console.log("клик на таблице");
}, true);
document.body.addEventListener('click', () => {
  console.log("клик на body");
}, true);
document.documentElement.addEventListener('click', () => {
  console.log("клик на html");
}, true);