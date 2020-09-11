(function () {
  const navbarLinks = document.querySelectorAll("#navbar a");

  // Add scroll event listener for entire window
  window.addEventListener("scroll", changeActiveNavOnScroll);

  // Set active links depending on the scroll position from the top of the screen
  // Scroll position must be between the top of the section and bottom of the section for section to be active
  function changeActiveNavOnScroll() {
    const positionFromTop = this.scrollY;

    navbarLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop - 1 <= positionFromTop &&
        section.offsetTop + section.offsetHeight > positionFromTop
      ) {
        const active = document.querySelectorAll(".active");

        active.forEach((aLink) => {
          aLink.classList.remove("active");
        });

        link.classList.add("active");

        // store the link in local storage to keep track of last visited section
        localStorage.active = link;
      } else {
        link.classList.remove("active");
      }
    });
  }

  function removeActive() {
    const active = document.querySelectorAll(".active");

    active.forEach((aLink) => {
      aLink.classList.remove("active");
    });
  }

  // on page refresh, highlight whatever section the user last visited
  document.addEventListener("DOMContentLoaded", function () {
    navbarLinks.forEach((link) => {
      if (link.href === localStorage.active) {
        link.classList.add("active");
      }
    });
  });
})();
