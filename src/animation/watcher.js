import animate from "./animator";
import { extractEntranceConfig, extractExitConfig } from "./extractConfig";

export default function watcher() {
    const options = {
        rootMargin: "-240px",
        threshold: .1,
    };

     const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         animate(entry.target, extractExitConfig(entry.target))
         observer.unobserve(entry.target)
       } else {
         animate(entry.target, extractEntranceConfig(entry.target))
       }
     });
   }, options);

   const elements = document.querySelectorAll('[simple_animation]');
   elements.forEach(element => {
      observer.observe(element)
      animate(element, extractExitConfig(element))
    }
    );

}

