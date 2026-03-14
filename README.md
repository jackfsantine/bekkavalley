# Bekka Valley Website (Multi-page)

A static multi-page website with a Sabra-inspired visual direction (bold colors, rounded UI, food-brand storytelling) and a Shopify-ready shop scaffold.

## Pages
- `index.html` — home/hero + category/brand sections
- `about.html` — brand story
- `products.html` — product groups and pairings
- `shop.html` — dynamic product cards + client cart placeholder
- `contact.html` — support and wholesale contact blocks

## Shopify hookup plan
The current implementation intentionally keeps the cart local for quick UX iteration.

To connect Shopify:
1. Replace `products` in `app.js` with Storefront API product data.
2. Replace `checkout-btn` handler with checkout creation and redirect URL.
3. Optionally persist cart state in `localStorage`.

## Local preview
```bash
python3 -m http.server 4173
```
Then open `http://localhost:4173`.
