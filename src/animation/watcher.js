import animate from "./animator";
import { extractEntranceConfig, extractExitConfig, wrapAnimatedElements } from "./utils";

export default function watcher() {
  const options = {
    rootMargin: "-20%",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target.childNodes[0], extractEntranceConfig(entry.target.childNodes[0]))
      } else {
        animate(entry.target.childNodes[0], extractExitConfig(entry.target.childNodes[0]))
      }
    });
  }, options);

  const elements = document.querySelectorAll('[simple_animation]');
  const wrappedElements = wrapAnimatedElements(elements);
  if (wrappedElements.length > 0){
    const main = document.querySelector("main")
    main.style.overflowX = "clip"
  }
  console.log(wrappedElements)
  wrappedElements.forEach(element => {
      observer.observe(element)
    }
  );
}

