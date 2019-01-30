function getFirstSelector(selector) {
  return document.querySelector(selector)
}

const nestedTarget = () => document.querySelector('#nested .target')

const deepestChild = () => document.querySelector('#grand-node div div div div')

function increaseRankBy(n) {
  const list = document
    .querySelectorAll('#app ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    let num = parseInt(list[i].innerHTML);
    list[i].innerHTML = (num + n).toString();
  }
}
