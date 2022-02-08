let codeBlocks = document.querySelectorAll("pre code");
codeBlocks.forEach((codeBlock) => {
  let code = codeBlock.innerHTML;
  code = code.replaceAll("<", "&LT");
  codeBlock.innerHTML = code;
});
