// разделитель между словами, в данном случае пробел
const splitter = ' ';

// все элементы с текстом, в которых слова по клику
// должны исчезать
const elems = document.getElementsByClassName('text');

// в каждом таком элементе заменяем текст на тот же текст
// со словами, исчезающими по клику
for (const elem of elems) {
  fillElementCollapsible(elem.innerText, elem);
}

// заполняет элемент DOMа текстом, слова которого
// исчезают по клику
function fillElementCollapsible(text, element) {
  const words = text.split(splitter);
  const fragment = document.createDocumentFragment();
  words.forEach((word, i, words) => {
    const span = makeCollapsibleSpan(word);
    fragment.append(span);
    if (i < words.length - 1) {
      const splitterSpan = makeSpan(splitter);
      fragment.append(splitterSpan);
    }
  });
  element.removeChild(element.firstChild);
  element.append(fragment);
}

// делает span с содержимым str, исчезающий по клику
function makeCollapsibleSpan(str) {
  const span = makeSpan(str);
  span.addEventListener('click', e => (e.target.style.display = 'none'));
  return span;
}

// делает обычный span с содержимым str
function makeSpan(str) {
  const node = document.createElement('span');
  const textnode = document.createTextNode(str);
  node.appendChild(textnode);
  return node;
}
