"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function SmartImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={`${props.className ?? ""} ${failed ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
      onError={() => setFailed(true)}
    />
  );
}
