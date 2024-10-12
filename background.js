// Redirect from the error session page to the Poliformat portal
browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    const redirectUrl = "https://poliformat.upv.es/portal"; // Redirect target

    // Check if the current URL is the error session page
    if (details.url.includes("upv.es/error-session-cad")) {
      console.log(`Redirecting ${details.url} to ${redirectUrl}`);
      return { redirectUrl: redirectUrl };
    }
  },
  { urls: ["*://*.upv.es/error-session-cad*"] }, // Match the error session URL
  ["blocking"]
);
