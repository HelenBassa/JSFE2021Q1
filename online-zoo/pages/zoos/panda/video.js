const smallCams = document.querySelectorAll(".video__item");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < smallCams.length; i++) {
    const smallCam = smallCams[i];
    smallCam.addEventListener("click", function () {
      let youtubeID = this.firstChild.nextElementSibling.getAttribute(
        "data-id"
      );

      for (let sibling of this.parentElement.parentElement.children) {
        if (
          sibling.firstChild.nextElementSibling !==
          this.parentElement.parentElement.children
        ) {
          sibling.firstChild.nextElementSibling.lastChild.previousElementSibling.classList.remove(
            "active"
          );
        }

        this.lastChild.previousElementSibling.classList.add("active");
      }

      let newURL = `https://www.youtube.com/embed/${youtubeID}?rel=0&controls=1&autoplay=1`;
      let videoID = document.querySelector("#video_id");
      videoID.setAttribute("src", newURL);
    });
  }
});
