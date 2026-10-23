# Pixathon — Reimagine CAPTCHA

A browser-based, reCAPTCHA-inspired visual verification demo.

## Run
Open `index.html` in a browser. The page uses only the local `style.css` and `app.js` files; no build step or external library is required.

## Demo flow
1. Select **I'm not a robot** to open a tile-selection challenge.
2. Select all tiles that match the prompt.
3. Press **VERIFY**. Incorrect selections can be retried; the refresh button generates a new challenge.
4. A correct selection displays a success state.

Challenges use built-in emoji illustrations to avoid image-download or CDN failures.

## Important limitation
This is a visual interaction prototype inspired by CAPTCHA UIs, not Google's reCAPTCHA and not production security. Its answers are stored client-side and can be bypassed; do not use it to protect real accounts or services.
