"use client";

import { useEffect } from "react";

export default function KeyboardHandler() {
  useEffect(() => {
    let kPressCount = 0;
    let lastKPressTime = 0;
    const RESET_TIME = 2000; // Reset count after 2 seconds

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if 'K' or 'k' key is pressed
      if (event.key === 'k' || event.key === 'K') {
        const currentTime = Date.now();
        
        // Reset count if too much time has passed
        if (currentTime - lastKPressTime > RESET_TIME) {
          kPressCount = 0;
        }

        kPressCount++;
        lastKPressTime = currentTime;

        // If 5 K presses detected, prevent default behavior
        if (kPressCount >= 5) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          kPressCount = 0; // Reset after preventing
        }
      } else {
        // Reset count if another key is pressed
        kPressCount = 0;
      }
    };

    // Add event listener with capture phase to catch early
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  return null;
}

