function findVideos() {
  let videos = document.querySelectorAll(".video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  // let id = parseMediaURL(media);
  let id = parseMediaURL(link);

  video.addEventListener("click", () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

// function parseMediaURL(media) {
//   let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
//   let url = media.src;
//   let match = url.match(regexp);

//   return match[1];
// }

function parseMediaURL(link) {
  let regexp = /https:\/\/www\.youtube\.com\/([a-zA-Z0-9_-]+)/i;
  let url = link.href;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");

  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1&start=35";

  return "https://www.youtube.com/embed/" + id + query;
}

findVideos();
