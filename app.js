if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/PWA/service-worker.js")
      .then((registration) => {
        console.log("✅ Service Worker registered successfully:", registration);

        // Request notification permission
        return Notification.requestPermission();
      })
      .then((permission) => {
        if (permission === "granted") {
          console.log("✅ Notification permission granted.");
        } else if (permission === "denied") {
          console.log("❌ Notification permission denied. Please enable notifications in your browser settings.");
          alert("Notification permission denied. Please enable notifications in your browser settings.");
        } else {
          console.log("⚠ Notification permission dismissed.");
        }
      })
      .catch((error) => {
        console.log("❌ Service Worker registration failed:", error);
      });
  });
} else {
  console.log("⚠ Service Workers are not supported in this browser.");
}