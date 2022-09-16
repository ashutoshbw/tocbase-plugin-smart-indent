import { createPlugin } from "tocbase";

export default createPlugin("smartIndent", (bag, resolveInput) => {
  const ipOffset = resolveInput("offset", '0');
  if (!bag.bTocNum) return null;
  if (!bag.placeholderElt) document.body.append(bag.toc);

  const t = bag.toc;
  const subLists = bag.lists.slice(1);

  for (let i = 0; i < subLists.length; i++) {
    const span = bag.elt("span");
    const parentLI = subLists[i].parentElement;
    bag.$("a", parentLI).insertAdjacentElement("beforebegin", span);

    const x2 = parentLI.getBoundingClientRect().x;
    const x1 = span.getBoundingClientRect().x;

    span.remove();

    subLists[i].style.paddingLeft = (x1 - x2) + "px";
    subLists[i].style.marginLeft = ipOffset;
  }

  if (!bag.placeholderElt) document.body.lastChild.remove();
  return null;
});
