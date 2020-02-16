// alert("script laod");

const removeMediumPosts = () => {
  // alert("domcontentloaded");
  const containers = document.getElementsByClassName("homeContainer");
  if (containers) {
    const homeContainer = containers[0];

    if (homeContainer) {
      homeContainer.style.display = "none";
    } else console.log(homeContainer);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", removeMediumPosts);
} else {
  removeMediumPosts();
}
