"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const hashToPath: Record<string, string> = {
  "about-page": "/about",
  "studio-page": "/studio",
  "academy-page": "/academy",
  "gallery-page": "/gallery",
  "packages-page": "/packages",
  "contact-page": "/contact",
  "booking-page": "/book",
  home: "/",
};

export function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && hashToPath[hash]) {
      router.replace(hashToPath[hash]);
    }
  }, [router]);

  return null;
}
