# Netlify Deployment Guide for Veritas Law Group

This project is fully customized and production-ready for deployment on [Netlify](https://www.netlify.com/).

---

## 🚀 Option 1: Git-Based Deployment (Recommended)

1. **Push your code to GitHub / GitLab / Bitbucket**.
2. Go to [Netlify App](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Choose your Git provider and select the repository.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Base directory:** *(leave empty/root)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy Veritas Law Group"**.

Any subsequent push to your repository branch will automatically trigger an optimized production deployment.

---

## 📦 Option 2: Netlify Drop (Instant Drag-and-Drop)

If you prefer deploying without connecting to Git:

1. Build the production assets locally:
   ```bash
   npm install
   npm run build
   ```
2. Navigate to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the browser window.
4. Your website is live immediately with an active SSL certificate.

---

## ⚙️ Included Netlify Optimizations

- **SPA Routing Support (`public/_redirects` and `netlify.toml`)**:
  Redirects all client-side routes (`/`, `/about`, `/practice-areas`, `/contact`) to `/index.html` with HTTP 200, preventing 404 errors on page reload or direct URL access.
- **Production Asset Caching**:
  1-year immutable caching for static bundled assets (`/assets/*`).
- **Security Headers**:
  Configured `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, and strict `Referrer-Policy`.
- **Pre-configured WhatsApp Integration**:
  Direct WhatsApp actions configured with pre-filled message support for client intake.
