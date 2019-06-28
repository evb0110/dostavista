const splitter = ' ';
const elems = document.getElementsByClassName('text');

for (const elem of elems) {
  fillElementCollapsible(elem.innerText, elem);
}

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

function makeCollapsibleSpan(text) {
  const span = makeSpan(text);
  span.addEventListener('click', e => (e.target.style.display = 'none'));
  return span;
}

function makeSpan(text) {
  const node = document.createElement('span');
  const textnode = document.createTextNode(text);
  node.appendChild(textnode);
  return node;
}
