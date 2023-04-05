let isActive = false;

function toggle() {
  if (isActive) {
    document.querySelector((selectors = ".hamburguer")).className =
      "hamburguer";
    document.querySelector((selectors = ".shadow")).className = "shadow";
    document.querySelector((selectors = ".mobile-nav")).className =
      "mobile-nav";
    isActive = false;
  } else {
    document.querySelector((selectors = ".hamburguer")).className =
      "hamburguer active";
    document.querySelector((selectors = ".shadow")).className = "shadow active";
    document.querySelector((selectors = ".mobile-nav")).className =
      "mobile-nav active";
    isActive = true;
  }
}
