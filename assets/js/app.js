/* SHQ Connector — static prototype interactions
   Self-contained. Dependencies: none. */
(function () {
  "use strict";

  /* ---- Icon set (stroke-based, lucide-style paths) ---------- */
  var ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
    store: '<path d="m2 7 2-5h16l2 5"/><path d="M2 7h20v3a2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-4 0Z"/><path d="M4 13v8h16v-8"/><path d="M9 21v-5h6v5"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    branch: '<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 8v8"/><path d="M18 10c0 4-5 2.5-7 4"/><path d="M8 6h8v2"/>',
    cart: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.2h8.9a1.5 1.5 0 0 0 1.5-1.2L22 7H6"/>',
    alert: '<path d="M10.3 3.4a1.6 1.6 0 0 1 2.7 0l8.5 14.7a1.6 1.6 0 0 1-1.4 2.4H3.2a1.6 1.6 0 0 1-1.4-2.4Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>',
    trending: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.09A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.09A1.7 1.7 0 0 0 21 12a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    chevron_down: '<path d="m6 9 6 6 6-6"/>',
    chevron_right: '<path d="m9 18 6-6-6-6"/>',
    chevron_left: '<path d="m15 18-6-6 6-6"/>',
    chevrons_lr: '<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/>',
    arrow_left: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    arrow_right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    menu: '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    activity: '<path d="M22 12h-4l-3 9-6-18-3 9H2"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5Z"/>',
    dots: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    pencil: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/>',
    play: '<path d="m6 4 14 8-14 8V4Z"/>',
    ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    truck: '<path d="M1 5h14v11H1z"/><path d="M15 8h4l3 4v4h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    tag: '<path d="M12.6 2.9a2 2 0 0 0-1.9 1.1L2 20h5l3-6 5.1-10.3a2 2 0 0 0-2.5-.8Z"/><path d="m21 20-1-2"/><path d="m15 12-2 2 5 5h3l-2-5Z"/>',
    'circle-check': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    'circle-dot': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1.5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>',
    sliders: '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    'credit-card': '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    hourglass: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22"/><path d="M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4a2 2 0 0 0 .6-1.4V2"/>',
    scale: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7 3 14a3 3 0 0 0 6 0L7 7"/><path d="M17 7l-2 7a3 3 0 0 0 6 0l-2-7"/><path d="M8 21h8"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    'refresh-cw': '<path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>',
  };

  function injectIcons(root) {
    var nodes = (root || document).querySelectorAll("[data-icon]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var name = el.getAttribute("data-icon");
      var body = ICONS[name];
      if (!body) continue;
      var size = el.hasAttribute("data-size") ? el.getAttribute("data-size") : 24;
      el.setAttribute("aria-hidden", "true");
      el.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        body +
        "</svg>";
    }
  }

  /* ---- Navigation helpers ---------------------------------- */
  function setupSidebar() {
    var sidebar = document.getElementById("sidebar");
    var backdrop = document.getElementById("sidebar-backdrop");
    var menuBtn = document.getElementById("menu-btn");
    if (!sidebar || !menuBtn) return;
    function close() {
      sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("show");
    }
    menuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      if (backdrop) backdrop.classList.toggle("show", sidebar.classList.contains("open"));
    });
    if (backdrop) backdrop.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function setupDropdowns() {
    document.addEventListener("click", function (e) {
      var dd = e.target.closest("[data-dropdown]");
      document.querySelectorAll("[data-dropdown].open").forEach(function (d) {
        if (d !== dd) d.classList.remove("open");
      });
      if (dd) {
        if (!e.target.closest(".dropdown-menu")) dd.classList.toggle("open");
      }
    });
  }

  function setupTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (group) {
      var btns = group.querySelectorAll("[data-tab-target]");
      btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = btn.getAttribute("data-tab-target");
          if (target === "__none__") {
            btns.forEach(function (b) { b.classList.remove("active"); });
            return;
          }
          btns.forEach(function (b) {
            b.classList.toggle("active", b === btn);
          });
          group.querySelectorAll("[data-tab-panel]").forEach(function (p) {
            p.hidden = p.getAttribute("data-tab-panel") !== target;
          });
        });
      });
    });
  }

  function setupModals() {
    document.addEventListener("click", function (e) {
      var opener = e.target.closest("[data-modal-open]");
      var closer = e.target.closest("[data-modal-close]");
      if (opener) {
        var m = document.getElementById(opener.getAttribute("data-modal-open"));
        if (m) m.classList.add("show");
        return;
      }
      if (closer) {
        var c = closer.closest(".modal-backdrop");
        if (c) c.classList.remove("show");
        return;
      }
      if (e.target.classList && e.target.classList.contains("modal-backdrop")) {
        e.target.classList.remove("show");
      }
    });
  }

  function setupStoreConnections() {
    var picker = document.getElementById("channel-modal");
    var authorization = document.getElementById("connect-modal");
    if (!picker || !authorization) return;

    var title = document.getElementById("connect-channel-title");
    var copy = document.getElementById("connect-channel-copy");
    var authorize = document.getElementById("connect-authorize");
    var channels = {
      Shopify: { authorization: "Shopify OAuth", copy: "You’ll be redirected to Shopify to authorize SHQ Connector securely. No credentials are stored here." },
      Etsy: { authorization: "Etsy OAuth", copy: "You’ll be redirected to Etsy to authorize SHQ Connector securely. No credentials are stored here." },
      WooCommerce: { authorization: "WooCommerce authorization", copy: "You’ll continue to WooCommerce to authorize SHQ Connector securely. No credentials are stored here." }
    };

    document.addEventListener("click", function (e) {
      var option = e.target.closest("[data-connect-channel]");
      if (option) {
        var channel = option.getAttribute("data-connect-channel");
        var details = channels[channel];
        if (!details) return;
        title.textContent = "Connect " + channel;
        copy.textContent = details.copy;
        authorize.textContent = "Authorize with " + channel;
        authorize.setAttribute("data-channel", channel);
        picker.classList.remove("show");
        authorization.classList.add("show");
        return;
      }

      if (e.target.closest("[data-connect-authorize]")) {
        var channelName = authorize.getAttribute("data-channel") || "Shopify";
        window.alert("In a real product this opens the " + channels[channelName].authorization + " screen.");
      }
    });
  }

  function setupCheckboxes() {
    document.querySelectorAll("[data-check-all]").forEach(function (head) {
      head.addEventListener("change", function () {
        var sel = document.querySelector(head.getAttribute("data-check-all"));
        if (!sel) return;
        sel.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
          c.checked = head.checked;
        });
      });
    });
  }

  function setupProductOptions() {
    document.querySelectorAll(".swatches").forEach(function (group) {
      group.addEventListener("click", function (e) {
        var choice = e.target.closest(".swatch");
        if (!choice || choice.classList.contains("more")) return;
        group.querySelectorAll(".swatch").forEach(function (item) {
          var selected = item === choice;
          item.classList.toggle("selected", selected);
          item.setAttribute("aria-checked", selected ? "true" : "false");
        });
      });
    });
    document.querySelectorAll(".size-grid").forEach(function (group) {
      group.addEventListener("click", function (e) {
        var choice = e.target.closest(".size-choice");
        if (!choice) return;
        group.querySelectorAll(".size-choice").forEach(function (item) {
          item.classList.toggle("selected", item === choice);
        });
      });
    });
  }

  /* ---- Routing-free page chrome ---------------------------- */
  function setGlobalChrome() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectIcons(document);
    setupSidebar();
    setupDropdowns();
    setupTabs();
    setupModals();
    setupStoreConnections();
    setupCheckboxes();
    setupProductOptions();
    setGlobalChrome();
  });
})();
