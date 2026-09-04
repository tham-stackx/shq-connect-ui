# SHQ Connector — UI reference prototype (`vendor/ui`)

Structured, openable-in-a-browser UI prototype that models the commercial journey of [Printify] with a Shadcn-like visual language. Governed by [ADR-006](../../docs/decisions/0006-printify-inspired-product-ui.md).

## Purpose

This folder is a **static reference prototype**, not the shipped product. Feature views in the Rails app (per [ADR-005](../../docs/decisions/0005-conventional-feature-entry-views.md)) come later; iterate design, copy, layout and interaction here first.

## How to open

No build step, no server required. Open any page directly in a browser (double-click the HTML file, or `open vendor/ui`). Everything is plain HTML + CSS + JS.

## Deployment

This prototype is deployable with Kamal 2 to the `stackx-vps` SSH host alias.

1. Copy `.kamal/secrets.example` to `.kamal/secrets` and set `BASIC_AUTH_PASSWORD`.
2. Run `kamal setup` for the first deployment, or `kamal deploy` for updates.

Kamal Proxy provisions HTTPS for `shq-connect-ui.getstackx.com`; the site itself
requires Basic Auth with username `shq`.

- `index.html` — landing page linking the two workspaces
- `merchant/` — Printify-style merchant workspace
- `operations/` — SHQ Operations backoffice

## Content

| Area | Pages |
| --- | --- |
| Merchant | sign-in, overview dashboard, stores, catalog, mapping, orders, order detail, exceptions, analytics, settings |
| Operations | sign-in, overview, merchants directory, merchant detail, order oversight, exceptions queue, reconciliation report, connection health, audit history |
| Shared | `assets/css/app.css` (design system) · `assets/js/app.js` (icons + interactions) |

## Design system

Design tokens live in `assets/css/app.css` and mirror `app/assets/stylesheets/application.tailwind.css` (oklch Shadcn-like palette, near-black primary, neutral surfaces, `--radius: 0.625rem`).

Reusable primitives: `.btn` (primary/outline/ghost/soft/bd/bk), `.badge`, `.card`, `.tbl`, `.alert`, `.tabs`, `.dropdown`, `.modal`, `.avatar`, `.store-logo` (S/E/W channel tiles), static charts (`.bar-chart`, `.donut`, `.hbar`), `.kv`, `.timeline`, and the app shell (`.sidebar`, `.topbar`).

### Interactions (assets/js/app.js)

- Icons: `<span class="icon" data-icon="name">` — SVG is injected client-side (no external fetch, works over `file://`)
- Sidebar: toggle via `#menu-btn`; closes on `#sidebar-backdrop`
- Dropdowns: `[data-dropdown]` on a trigger
- Tabs: container `[data-tabs]`, buttons `.tab[data-tab-target]`, panels `.tab-panel[data-tab]`
- Modals: `.modal-backdrop#id`, toggled by `[data-modal-open="id"]` / `[data-modal-close]`
- Check-alls: `input[data-check-all="<target-id>"]`

## Conventions

- Each page repeats the full shell (sidebar + topbar) with only `.nav-item.active`, breadcrumb and page content changed — this keeps the prototype self-contained.
- Mock data is fictional (merchant "North Shore Goods Co.", ops user `ops@shq.example`).
- Store logos are abstracted letter tiles (`S`/`E`/`W`); no third-party branding is copied.
- Currencies stay separate everywhere (source currencies are never summed or converted).
