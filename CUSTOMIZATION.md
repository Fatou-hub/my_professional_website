# 🎨 Guide Rapide de Personnalisation

Ce document vous aide à personnaliser rapidement les éléments essentiels du portfolio.

## ⚡ Modifications Prioritaires (5 minutes)

### 1. Informations de contact

**Fichier : `index.html`**

Recherchez et remplacez :
```
votre.email@example.com       → Votre vraie adresse email
/votre-profil                 → Votre username LinkedIn/Malt
```

**Lignes concernées :**
- Ligne 632-634 : Email
- Ligne 636-638 : LinkedIn  
- Ligne 640-642 : Malt
- Ligne 655 : CTA Email
- Ligne 679-681 : Footer LinkedIn
- Ligne 682-690 : Footer GitHub
- Ligne 691-696 : Footer Malt

### 2. Textes personnels

**Fichier : `index.html`**

```html
<!-- Ligne 90-93 : Votre pitch -->
<p class="hero-subtitle">
    Développeuse backend freelance spécialisée en <strong>quick wins</strong>.<br>
    Je transforme vos process manuels en automatisations efficaces.
</p>
```

**Personnalisez :**
- Le titre (ligne 85-87)
- La description (ligne 90-93)
- La section "À propos" (lignes 171-195)

### 3. Statistiques Hero

**Fichier : `index.html` (lignes 96-109)**

Modifiez les chiffres selon vos métriques :
```html
<div class="stat-number">1-3</div>
<div class="stat-label">jours de livraison</div>
```

## 🎨 Changements de Style (10 minutes)

### Palette de couleurs

**Fichier : `style.css` (lignes 10-22)**

#### Option 1 : Modifier les couleurs existantes
```css
:root {
    --primary: #0066FF;     /* Votre couleur principale */
    --accent: #00D9FF;      /* Votre couleur d'accentuation */
    --success: #00FF94;     /* Couleur de succès */
}
```

#### Option 2 : Palettes pré-configurées

**Green Tech :**
```css
--primary: #10B981;
--accent: #34D399;
--success: #6EE7B7;
```

**Purple Innovation :**
```css
--primary: #8B5CF6;
--accent: #A78BFA;
--success: #C4B5FD;
```

**Orange Energy :**
```css
--primary: #F59E0B;
--accent: #FBBF24;
--success: #FCD34D;
```

### Typographie

**Fichier : `index.html` (ligne 13)**

Remplacez la ligne Google Fonts :

**Option actuelle (Sora + IBM Plex Mono) :**
```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

**Alternative 1 (Inter + Fira Code) :**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

**Alternative 2 (Space Grotesk + JetBrains Mono) :**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

**Puis dans `style.css` (lignes 35-37) :**
```css
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Space Grotesk', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

## 📝 Modifier les Projets (20 minutes)

### Structure d'un projet

**Fichier : `index.html`**

Chaque projet suit cette structure :

```html
<article class="project-card">
    <div class="project-header">
        <div class="project-badge">Featured</div>  <!-- Badge optionnel -->
        <div class="project-number">01</div>
    </div>
    
    <div class="project-images">
        <!-- 3 images par projet -->
    </div>
    
    <div class="project-content">
        <h3 class="project-title">TITRE DU PROJET</h3>
        <p class="project-subtitle">Sous-titre</p>
        <p class="project-description">Description...</p>
        
        <!-- Métriques (optionnel) -->
        <div class="project-metrics">...</div>
        
        <!-- Points forts -->
        <div class="project-highlights">...</div>
        
        <!-- Technologies -->
        <div class="project-stack">
            <span class="stack-tag">React</span>
            <!-- ... -->
        </div>
    </div>
</article>
```

### Ajouter/Supprimer un projet

**Pour ajouter :** Copiez un bloc `<article class="project-card">...</article>` et modifiez le contenu

**Pour supprimer :** Supprimez simplement le bloc `<article>` correspondant

## 🏷️ Modifier la Stack Technique

**Fichier : `index.html` (lignes 443-550)**

### Ajouter une technologie

```html
<div class="stack-item">
    <span class="stack-icon">🚀</span>
    <span class="stack-name">Nouvelle Techno</span>
</div>
```

### Mettre en évidence (primary)

Ajoutez la classe `primary` pour les technos principales :
```html
<div class="stack-item primary">
    <span class="stack-icon">⚡</span>
    <span class="stack-name">n8n</span>
</div>
```

### Emojis suggérés

- ⚡ Lightning / Rapide
- 🔥 Fire / Hot
- 🚀 Rocket / Innovation
- 💻 Laptop / Code
- 🔧 Tools / Utils
- 🎨 Art / Design
- 📊 Chart / Data
- 🔐 Lock / Security
- 🌐 Globe / Web
- 📱 Mobile / Responsive
- 🤖 Robot / AI
- 🔌 Plug / API
- 📦 Package / Module
- ⚙️ Gear / Settings

## 🖼️ Ajouter vos Images

### Étape 1 : Préparer les images

**Outils d'optimisation :**
- [TinyPNG](https://tinypng.com/) - Compression gratuite
- [Squoosh](https://squoosh.app/) - Outil Google
- ImageMagick (CLI) :
  ```bash
  convert input.jpg -resize 1200x675 -quality 85 output.jpg
  ```

**Dimensions recommandées :**
- Image principale : 1200x675px (16:9)
- Images secondaires : 800x450px (16:9)

### Étape 2 : Nommer les fichiers

```
images/
├── project1-main.jpg
├── project1-1.jpg
├── project1-2.jpg
├── project2-main.jpg
└── ...
```

### Étape 3 : Placer dans le dossier `/images`

Les chemins sont déjà configurés dans `index.html` :
```html
<img src="images/project1-main.jpg" alt="..." loading="lazy">
```

## 🌐 Changer le Logo/Nom

**Fichier : `index.html`**

### Navigation (ligne 25-29)
```html
<div class="nav-logo">
    <span class="logo-bracket">&lt;</span>
    <span class="logo-text">backend.dev</span>  <!-- Changez ici -->
    <span class="logo-bracket">/&gt;</span>
</div>
```

### Footer (ligne 671-675)
```html
<div class="footer-logo">
    <span class="logo-bracket">&lt;</span>
    <span class="logo-text">backend.dev</span>  <!-- Changez ici -->
    <span class="logo-bracket">/&gt;</span>
</div>
```

## 🚀 Mode Clair (Optionnel)

Pour passer en mode clair, modifiez dans `style.css` (lignes 17-22) :

```css
/* Mode clair */
--background: #FFFFFF;
--surface: #F9FAFB;
--surface-light: #F3F4F6;
--text-primary: #111827;
--text-secondary: rgba(0, 0, 0, 0.7);
--text-tertiary: rgba(0, 0, 0, 0.5);
```

**Note :** Vous devrez peut-être ajuster les contrastes.

## 📱 Test Responsive

### Outils de test :
1. **Chrome DevTools** : F12 > Toggle device toolbar
2. **Firefox Responsive Design** : Ctrl+Shift+M
3. **Tester sur vrais devices** : Smartphone, tablette

### Points de rupture :
- Mobile : 320px - 767px
- Tablet : 768px - 1023px
- Desktop : 1024px+

## ✅ Checklist Rapide

Avant de déployer :

- [ ] Email mis à jour
- [ ] Liens LinkedIn/Malt configurés
- [ ] Textes personnalisés (à propos, projets)
- [ ] Couleurs personnalisées (si souhaité)
- [ ] Images ajoutées dans `/images`
- [ ] Stack technique mise à jour
- [ ] Test sur mobile/tablet/desktop
- [ ] Vérification de tous les liens
- [ ] Optimisation des images (< 300KB)

## 🆘 Problèmes Courants

### Images ne s'affichent pas
- Vérifier les noms de fichiers (sensible à la casse)
- Vérifier les chemins : `images/project1-main.jpg`
- Vérifier l'extension : `.jpg` pas `.jpeg` ou `.JPG`

### Menu mobile ne fonctionne pas
- Vérifier que `script.js` est bien chargé
- Ouvrir la console (F12) pour voir les erreurs

### Animations saccadées
- Réduire la taille des images
- Tester sur un autre navigateur
- Désactiver les animations dans `style.css`

### Déploiement GitHub Pages
- Vérifier que le repo est public
- Vérifier Settings > Pages > Source = main
- Attendre 2-5 minutes après activation

## 📚 Ressources Utiles

- [Coolors](https://coolors.co/) - Générateur de palettes
- [Google Fonts](https://fonts.google.com/) - Polices gratuites
- [Unsplash](https://unsplash.com/) - Photos libres
- [SVG Repo](https://www.svgrepo.com/) - Icônes SVG
- [Can I Use](https://caniuse.com/) - Support navigateurs

---

**Besoin d'aide ?**

1. Vérifier le `README.md` principal
2. Consulter la documentation GitHub Pages
3. Tester en local avant de déployer

Bon courage ! 🚀
