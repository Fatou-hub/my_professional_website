# 🚀 Portfolio Backend Developer - Automatisation Express

Portfolio professionnel moderne pour développeuse backend spécialisée en automatisation n8n et Supabase.

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Personnalisation](#personnalisation)
- [Images](#images)
- [Déploiement sur GitHub Pages](#déploiement-sur-github-pages)
- [Technologies utilisées](#technologies-utilisées)
- [Optimisations](#optimisations)

---

## 🎨 Aperçu

Portfolio avec design moderne "Tech Precision" :
- ✨ Animations subtiles et fluides
- 📱 100% responsive (mobile-first)
- ⚡ Performance optimisée
- ♿ Accessible (WCAG 2.1)
- 🎯 SEO optimisé

### Caractéristiques principales :
- Hero section dynamique avec stats animées
- 4 projets détaillés avec images
- Stack technique organisée par catégories
- Section contact avec CTA
- Navigation sticky avec menu mobile
- Scroll animations
- Mode sombre moderne

---

## 📁 Structure du projet

```
portfolio/
├── index.html          # Structure HTML sémantique
├── style.css          # Styles CSS (variables personnalisables)
├── script.js          # Interactions JavaScript
├── README.md          # Ce fichier
└── images/            # Vos images de projets
    ├── project1-main.jpg
    ├── project1-1.jpg
    ├── project1-2.jpg
    ├── project2-main.jpg
    ├── project2-1.jpg
    ├── project2-2.jpg
    ├── project3-main.jpg
    ├── project3-1.jpg
    ├── project3-2.jpg
    ├── project4-main.jpg
    ├── project4-1.jpg
    └── project4-2.jpg
```

---

## 🛠️ Installation

### Option 1 : Déploiement direct sur GitHub Pages

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio"
   ```

2. **Pousser sur GitHub**
   ```bash
   git remote add origin https://github.com/votre-username/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source : Branch `main`, dossier `/ (root)`
   - Sauvegarder

4. **Accéder au site**
   - URL : `https://votre-username.github.io/portfolio/`

### Option 2 : Test local

```bash
# Option A : Avec Python
python -m http.server 8000

# Option B : Avec Node.js
npx serve

# Ouvrir http://localhost:8000
```

---

## ✏️ Personnalisation

### 1. Informations personnelles

**Dans `index.html` :**

```html
<!-- Ligne 85-87 : Tagline -->
<h1 class="hero-title">
    <span class="title-line">Automatisation Express</span>
    <span class="title-line highlight">n8n + Supabase</span>
</h1>

<!-- Ligne 90-93 : Description -->
<p class="hero-subtitle">
    Développeuse backend freelance spécialisée en <strong>quick wins</strong>.<br>
    Je transforme vos process manuels en automatisations efficaces.
</p>

<!-- Ligne 632-666 : Liens de contact -->
<a href="mailto:VOTRE-EMAIL@example.com" class="contact-link">
<a href="https://linkedin.com/in/VOTRE-PROFIL" target="_blank">
<a href="https://malt.fr/profile/VOTRE-PROFIL" target="_blank">
```

### 2. Couleurs et design

**Dans `style.css` (lignes 10-30) :**

```css
:root {
    /* Couleurs principales - Modifiez ces valeurs */
    --primary: #0066FF;        /* Bleu électrique */
    --accent: #00D9FF;         /* Cyan */
    --background: #0A0E1A;     /* Fond sombre */
    
    /* Exemple palette alternative (décommenter pour utiliser) */
    /* --primary: #7C3AED;     Violet */
    /* --accent: #10B981;      Vert */
    /* --background: #111827;  Gris foncé */
}
```

**Palettes alternatives suggérées :**

```css
/* Palette 1 : Green Tech */
--primary: #10B981;
--accent: #34D399;
--success: #6EE7B7;

/* Palette 2 : Purple Innovation */
--primary: #8B5CF6;
--accent: #A78BFA;
--success: #C4B5FD;

/* Palette 3 : Orange Energy */
--primary: #F59E0B;
--accent: #FBBF24;
--success: #FCD34D;
```

### 3. Typographie

**Dans `index.html` (ligne 13) :**

```html
<!-- Polices actuelles : Sora + IBM Plex Mono -->
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Alternatives suggérées : -->
<!-- Space Grotesk + JetBrains Mono -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

Puis dans `style.css` :

```css
:root {
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Space Grotesk', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}
```

### 4. Projets

**Dans `index.html` (lignes 241-440) :**

Pour chaque projet, modifiez :
- Le titre (`<h3 class="project-title">`)
- La description (`<p class="project-description">`)
- Les highlights (liste des points forts)
- Les tags de technologies (`<span class="stack-tag">`)
- Les chemins d'images (`src="images/..."`)

### 5. Stack technique

**Dans `index.html` (lignes 443-550) :**

Ajoutez/supprimez des technologies dans chaque catégorie :

```html
<div class="stack-item primary">
    <span class="stack-icon">⚡</span>
    <span class="stack-name">Votre technologie</span>
</div>
```

La classe `primary` met en évidence les technologies principales.

---

## 🖼️ Images

### Dimensions recommandées

**Format recommandé :** JPEG ou WebP optimisé

| Type | Dimensions | Ratio | Taille max |
|------|-----------|-------|-----------|
| Photo profil | 800x800px | 1:1 | 200KB |
| Image principale projet | 1200x675px | 16:9 | 300KB |
| Images secondaires | 800x450px | 16:9 | 150KB |

### Organisation

```
images/
├── project1-main.jpg     # Image principale projet 1
├── project1-1.jpg        # Image secondaire 1
├── project1-2.jpg        # Image secondaire 2
├── project2-main.jpg
├── project2-1.jpg
├── project2-2.jpg
└── ... (pour chaque projet)
```

### Outils d'optimisation

- **En ligne :** [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **CLI :** ImageMagick
  ```bash
  # Redimensionner et optimiser
  convert input.jpg -resize 1200x675 -quality 85 output.jpg
  ```

### Placeholders temporaires

Si vous n'avez pas encore vos images :
- [Unsplash](https://unsplash.com/) : Photos gratuites haute qualité
- [Pexels](https://www.pexels.com/) : Vidéos et photos libres
- Créez des mockups : [Figma](https://figma.com/), [Canva](https://canva.com/)

---

## 🚀 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. Créer un nouveau repository sur GitHub
2. Uploader tous les fichiers
3. Settings > Pages
4. Source : `main` branch, `/ (root)` folder
5. Save

### Méthode 2 : Via Git CLI

```bash
# 1. Initialiser le repo
git init
git add .
git commit -m "Initial commit"

# 2. Lier au repo GitHub
git remote add origin https://github.com/VOTRE-USERNAME/portfolio.git

# 3. Pousser
git branch -M main
git push -u origin main

# 4. Activer Pages via l'interface GitHub
```

### Méthode 3 : Avec GitHub CLI

```bash
# Créer et déployer en une commande
gh repo create portfolio --public --source=. --push
gh pages --repo VOTRE-USERNAME/portfolio --branch main
```

### Domaine personnalisé (optionnel)

1. Acheter un domaine (Namecheap, OVH, etc.)
2. Configurer les DNS :
   ```
   Type  Name  Value
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   VOTRE-USERNAME.github.io
   ```
3. Dans Settings > Pages, ajouter votre domaine
4. Activer "Enforce HTTPS"

---

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Sémantique et accessible
- **CSS3** : Variables CSS, Grid, Flexbox, animations
- **JavaScript (Vanilla)** : Pas de dépendances
- **Google Fonts** : Sora + IBM Plex Mono

### Fonctionnalités
- Responsive design (mobile-first)
- Animations au scroll (Intersection Observer)
- Menu mobile avec hamburger
- Smooth scrolling
- Lazy loading images
- Stats counter animé
- Parallax subtil

---

## ⚡ Optimisations

### Performance actuelle

- ✅ HTML sémantique
- ✅ CSS minimaliste (~700 lignes)
- ✅ JavaScript modulaire (~600 lignes)
- ✅ Lazy loading images
- ✅ Debounced scroll handlers
- ✅ Animations CSS natives

### Optimisations supplémentaires possibles

1. **Minification**
   ```bash
   # Minifier CSS
   npx csso style.css -o style.min.css
   
   # Minifier JS
   npx terser script.js -o script.min.js
   ```

2. **Images WebP**
   ```bash
   # Convertir en WebP
   cwebp -q 85 input.jpg -o output.webp
   ```

3. **Service Worker** (déjà préparé dans script.js)
   - Décommenter les lignes 550-558
   - Créer un fichier `sw.js`

---

## 📱 Compatibilité

### Navigateurs supportés
- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Opera (dernières versions)

### Responsive
- ✅ Mobile : 320px - 767px
- ✅ Tablet : 768px - 1023px
- ✅ Desktop : 1024px+
- ✅ Large Desktop : 1440px+

---

## 🎯 SEO

### Checklist

- [x] Balises meta (description, keywords)
- [x] Balises sémantiques (header, nav, section, article)
- [x] Alt text sur toutes les images
- [x] Titre de page optimisé
- [x] Structure H1-H6 logique
- [ ] Sitemap.xml (à ajouter si site multi-pages)
- [ ] robots.txt (optionnel)

### Améliorer le SEO

**Ajouter dans `<head>` :**

```html
<!-- Open Graph pour partage social -->
<meta property="og:title" content="Portfolio - Développeuse Backend">
<meta property="og:description" content="Automatisation Express n8n + Supabase">
<meta property="og:image" content="https://votre-site.com/og-image.jpg">
<meta property="og:url" content="https://votre-site.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Portfolio - Développeuse Backend">
<meta name="twitter:description" content="Automatisation Express n8n + Supabase">
<meta name="twitter:image" content="https://votre-site.com/twitter-image.jpg">
```

---

## 📞 Support

Pour toute question ou problème :

1. **Vérifier** que tous les fichiers sont au bon endroit
2. **Tester** en local avant de déployer
3. **Valider** le HTML/CSS avec les validators W3C
4. **Consulter** la documentation GitHub Pages

---

## 📝 Checklist avant déploiement

- [ ] Remplacer tous les placeholders (email, liens sociaux)
- [ ] Ajouter vos vraies images dans `/images`
- [ ] Tester sur mobile/tablet/desktop
- [ ] Vérifier tous les liens
- [ ] Optimiser les images (poids < 300KB)
- [ ] Personnaliser les couleurs si souhaité
- [ ] Tester la performance (Lighthouse)
- [ ] Vérifier l'accessibilité (WAVE)

---

## 🎨 Crédits

**Design System** : "Tech Precision"
**Typographie** : Sora (Google Fonts), IBM Plex Mono
**Icônes** : SVG inline personnalisées
**Animations** : CSS natives + Intersection Observer

---

## 📄 Licence

Ce portfolio est libre d'utilisation et de modification pour un usage personnel.

---

**Bonne chance avec votre portfolio ! 🚀**

*Pour toute question technique, n'hésitez pas à consulter la documentation officielle de GitHub Pages.*
