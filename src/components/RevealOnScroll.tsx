"use client";

import React from "react";

export default function RevealOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  // Always render visible and accessible to guarantee zero hidden text or hydration flickering
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  );
}
