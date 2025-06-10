import animate from "./animator";
import { extractEntranceConfig, extractExitConfig } from "./extractConfig";

export default function watcher() {
    const options = {
        rootMargin: "-20%",
        threshold: .01,
    };

     const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
          animate(entry.target, extractEntranceConfig(entry.target))
        } else {
          animate(entry.target, extractExitConfig(entry.target))
        }
      });
   }, options);

   const elements = document.querySelectorAll('[simple_animation]');
   elements.forEach(element => {
      observer.observe(element) 
    }
    );

}

