import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    document.querySelectorAll<Element>(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
