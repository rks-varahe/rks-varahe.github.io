/* Lightweight copy deterrent - blocks clipboard events, right-click,
   and common copy/save/view-source keyboard shortcuts. Form inputs are
   left alone so the search box still works.

   This is a deterrent, NOT a security control. Anyone determined can
   bypass via view-source, curl, screenshots+OCR, or by disabling JS. */
(function () {
  "use strict";

  const isEditable = (el) => {
    if (!el) return false;
    const tag = (el.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    return !!el.isContentEditable;
  };

  // 1. Block clipboard / selection / drag events
  const block = (e) => {
    if (isEditable(e.target)) return;
    if (e.type === "copy" && e.clipboardData) {
      e.clipboardData.setData(
        "text/plain",
        "Internal handbook · Varahe Analytics · Copying is disabled."
      );
    }
    e.preventDefault();
  };
  ["copy", "cut", "selectstart", "dragstart"].forEach((ev) =>
    document.addEventListener(ev, block, { capture: true })
  );

  // 2. Right-click context menu
  document.addEventListener("contextmenu", (e) => {
    if (isEditable(e.target)) return;
    e.preventDefault();
  }, { capture: true });

  // 3. Common keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    const k = (e.key || "").toLowerCase();
    const mod = e.ctrlKey || e.metaKey;
    const editable = isEditable(e.target);

    if (e.key === "F12") { e.preventDefault(); return; }
    if (mod && e.shiftKey && ["i", "j", "c"].includes(k)) { e.preventDefault(); return; }
    if (mod && k === "u") { e.preventDefault(); return; }   // view source
    if (mod && k === "s") { e.preventDefault(); return; }   // save page
    if (mod && k === "p") { e.preventDefault(); return; }   // print
    if (!editable && mod && ["a", "c", "x"].includes(k)) { e.preventDefault(); return; }
  }, { capture: true });
})();
