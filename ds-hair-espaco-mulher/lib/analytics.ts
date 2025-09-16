/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { track } from "@vercel/analytics";

export const trackEvent = (name: string, data?: Record<string, any>) => {
  track(name, data);
};
