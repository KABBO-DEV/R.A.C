import { useEffect } from "react";

const AD_TAGS = ["ins", "iframe", "embed", "object"];
const AD_CLASS_PATTERNS = [
  "adsbygoogle", "ad-slot", "ad-banner", "pub-", "adsense",
  "advert", "advertisement", "popunder", "overlay-ad",
];

function isMaliciousSrc(src: string): boolean {
  if (typeof document.__racIsMalicious === "function") {
    return document.__racIsMalicious(src);
  }
  return false;
}

function isMaliciousElement(el: Element): boolean {
  const src =
    el.getAttribute("src") ||
    el.getAttribute("data-src") ||
    el.getAttribute("href") || "";

  if (src && isMaliciousSrc(src)) return true;

  const cls = (el.className || "").toLowerCase();
  if (AD_CLASS_PATTERNS.some((p) => cls.includes(p))) return true;

  const id = (el.id || "").toLowerCase();
  if (AD_CLASS_PATTERNS.some((p) => id.includes(p))) return true;

  if (el.tagName === "INS") return true;

  return false;
}

function scrubNode(node: Node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const el = node as Element;

  if (isMaliciousElement(el)) {
    el.remove();
    console.warn("[RAC Security Layer 4] Removed injected ad element:", el.tagName, el.className);
    return;
  }

  el.querySelectorAll(AD_TAGS.join(",")).forEach((child) => {
    if (isMaliciousElement(child)) {
      child.remove();
      console.warn("[RAC Security Layer 4] Removed nested ad element:", child.tagName);
    }
  });
}

declare global {
  interface Document {
    __racIsMalicious?: (src: string) => boolean;
    __racAdKeywords?: string[];
  }
}

export function SecurityGuard() {
  useEffect(() => {
    // ── Layer 4: DOM MutationObserver ──────────────────────────────
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          scrubNode(node);
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial pass — remove anything already in the DOM
    document.body.querySelectorAll(AD_TAGS.join(",")).forEach((el) => {
      if (isMaliciousElement(el)) {
        el.remove();
        console.warn("[RAC Security Layer 4] Cleaned existing ad element:", el.tagName);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
