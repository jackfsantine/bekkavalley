# Bekka Valley Multi-page Site

A bright, modern static multi-page website inspired by bold food-brand layouts.

## Pages
- `index.html` (Home)
- `about.html`
- `products.html`
- `shop.html` (shop scaffold with cart UI)
- `contact.html`

## Shopify integration notes
The shop page currently uses local JavaScript data to render products and cart behavior.

To connect Shopify:
1. Replace the `products` array in `app.js` with products fetched from Shopify Storefront API.
2. Wire the `Checkout with Shopify` button (`#checkout-btn`) to create/retrieve a checkout URL.
3. Optional: store cart state in `localStorage` for persistence.

## Run locally
```bash
python3 -m http.server 4173
```
Then open <http://localhost:4173>.
