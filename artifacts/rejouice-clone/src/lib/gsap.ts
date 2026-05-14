import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

type GsapPair = {
  gsap: typeof GsapType;
  ScrollTrigger: typeof ScrollTriggerType;
};

let _promise: Promise<GsapPair> | null = null;

export function getGsap(): Promise<GsapPair> {
  if (!_promise) {
    _promise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([g, st]) => {
      g.gsap.registerPlugin(st.ScrollTrigger);
      return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger };
    });
  }
  return _promise;
}
