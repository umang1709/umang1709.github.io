# umang-profile-site

A personal profile site for Umang Madeshia, written in plain HTML, CSS and JS. It has no build step and no dependencies apart from Google Fonts.

```
umang-profile-site/
├── index.html                          # all content (edit text here)
├── styles.css                          # design tokens + layout (light/dark)
├── script.js                           # nav, theme toggle, scroll reveal, count-up stats
└── assets/Umang_Madeshia_Resume.pdf    # linked from "Résumé" buttons
```

## Preview locally

```bash
cd umang-profile-site
python3 -m http.server 8000
# open http://localhost:8000
```

You can also open `index.html` directly in a browser.

## Publish on GitHub Pages (`https://umang1709.github.io`)

This is a user site, so the repo name must exactly match your GitHub username.

1. **Create the repo.** On github.com (personal account `umang1709`, not the EG enterprise org), click **New repository**:
    - Name: `umang1709.github.io`
    - Visibility: **Public** (Pages on free accounts needs a public repo)
    - Don't add a README. You'll push your own files.

2. **Push the site files.** Push the files *inside* this folder so that `index.html` sits at the repo root:

   ```bash
   cp -R umang-profile-site ~/umang1709.github.io
   cd ~/umang1709.github.io
   git init -b main
   git add .
   git commit -m "Initial profile site"
   git remote add origin https://github.com/umang1709/umang1709.github.io.git
   git push -u origin main
   ```

   Use your **personal** GitHub credentials. Don't push from this Expedia learning repo, because its remote is the EG one.

3. **Turn on Pages.** In the repo, go to **Settings → Pages**:
    - Source: **Deploy from a branch**
    - Branch: `main`, folder `/ (root)`, then **Save**

4. **Wait 1–2 minutes**, then open `https://umang1709.github.io`. You can watch progress in the repo's **Actions** tab ("pages build and deployment").

### Optional

- **Project URL instead.** If you name the repo something else (e.g. `profile`), the site is served at `https://umang1709.github.io/profile/`. All paths here are relative, so it works either way.
- **Custom domain.** Under Settings → Pages → Custom domain, enter your domain and add a `CNAME` DNS record pointing to `umang1709.github.io`. Then tick **Enforce HTTPS**.
- **Add to LinkedIn and your résumé.** Put the URL in your LinkedIn "Website" field and in the résumé header.

## Updating

- **Text**: edit `index.html` directly. Each section has a marked `<!-- ===== SECTION ===== -->` block.
- **Résumé**: replace `assets/Umang_Madeshia_Resume.pdf` and keep the same filename so the links keep working.
- **Colours**: change the tokens at the top of `styles.css`. There's one `:root` block for light mode and one for dark mode.
- **Deploy**: `git commit -am "update" && git push`. Pages rebuilds automatically.

## Before going live, check

- [ ] Expedia start date (set to **May 2026**) and Walmart end date (set to **Apr 2026**).
- [ ] GitHub handle `umang1709` and LinkedIn `umang1795` are correct.
- [ ] Your phone number is deliberately left off the site. It's still in the linked résumé PDF, so remove it there if you don't want it public.
- [ ] Expedia bullets stay generic (no internal system names, partners or metrics), which is in line with EG's public-disclosure expectations.