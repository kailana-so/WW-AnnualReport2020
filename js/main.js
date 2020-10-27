window.addEventListener("on", () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2;
  
    let frames = document.querySelectorAll(".scrollAnim");
    frames.forEach((frame) => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;
  
      if (
        pageTop >= frameTop - pageHeight &&
        pageTop < frameTop + frameHeight / 2
      ) {
        frame.classList.add("anim");
      } else {
        frame.classList.remove("anim");
      }
    });
  });
  
  window.addEventListener("scroll", () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2;
  
    let frames = document.querySelectorAll(".scrollAnim");
    frames.forEach((frame) => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;
  
      if (
        pageTop >= frameTop - pageHeight &&
        pageTop < frameTop + frameHeight / 2
      ) {
        frame.classList.add("anim");
      } else {
        frame.classList.remove("anim");
      }
    });
  });
  