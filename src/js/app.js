const phrase = 'Hello world! Very glad to see you, my dear friends';

const words = phrase.split(' ');

const root = document.querySelector('.root');

const fragment = document.createDocumentFragment();

words.forEach((word, i, words) => {
  const span = makeCollapsibleSpan(word);
  fragment.append(span);
  if (i < words.length - 1) {
    const space = makeSpan(' ');
    fragment.append(space);
  }
});

const anchor = document.createElement('a');
anchor.href = '#';
anchor.append(fragment);

root.append(anchor);

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
