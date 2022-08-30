export default ({offset = '0'} = {}) => ({
  name: "smart-indent",
  setup(bag) {
    if (!bag.config.num) return bag;

    const t = bag.toc;
    const subULs = bag.ulol.slice(1);


    for (let i = 0; i < subULs.length; i++) {
      const span = bag.elt("span");
      const parentLI = subULs[i].parentElement;
      bag.$("a", parentLI).insertAdjacentElement("beforebegin", span);

      const x2 = parentLI.getBoundingClientRect().x;
      const x1 = span.getBoundingClientRect().x;

      span.remove();

      subULs[i].style.paddingLeft = (x1 - x2) + "px";
      subULs[i].style.marginLeft = offset;
    }

    return bag;
  }
});
