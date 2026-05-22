/* On protected pages, the user is already authenticated server-side via
   Netlify's role-based redirects (see _redirects). This script just:
   - Hydrates the Identity widget so we can read currentUser() for the avatar
   - Adds a small "name + logout" chip in the nav
   - Bounces back to /login.html on logout (the redirect rule would do it anyway,
     but doing it explicitly avoids a flicker) */
(function () {
  const isLocal =
    location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

  function chip(user) {
    if (document.getElementById("auth-controls")) return;
    const nav = document.querySelector(".nav .nav-inner");
    if (!nav) return;
    const wrap = document.createElement("div");
    wrap.id = "auth-controls";
    wrap.style.cssText = "display:flex;align-items:center;gap:10px;margin-left:12px";
    wrap.innerHTML =
      '<span style="font-size:.82rem;color:var(--muted);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
      (user.user_metadata?.full_name || user.email) +
      '</span>' +
      '<button class="icon-btn" id="auth-logout" title="Log out">⏻</button>';
    nav.appendChild(wrap);
    document.getElementById("auth-logout").addEventListener("click", () => {
      const id = window.netlifyIdentity;
      if (id) id.logout().then(() => location.href = "/login.html");
      else location.href = "/login.html";
    });
  }

  function init() {
    if (isLocal) {
      chip({ email: "local-preview" });
      return;
    }
    const id = window.netlifyIdentity;
    if (!id) return; // gate is server-side; chip is optional decoration
    id.on("init", (user) => { if (user) chip(user); });
    id.on("logout", () => location.href = "/login.html");
    try { id.init(); } catch (e) { /* ignore */ }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
