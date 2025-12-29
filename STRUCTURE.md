# 📁 Structure de votre Portfolio

## 🎯 Structure simple et classique

Téléchargez TOUS les fichiers et gardez cette structure :

```
mon-portfolio/
├── index.html           ← Page principale
├── style.css            ← Styles CSS
├── script.js            ← JavaScript
└── images/              ← Toutes vos images ici
    ├── profile-pic.png  ← Votre photo (✅ déjà là)
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

## ✅ Comment ça marche ?

### Étape 1 : Télécharger tous les fichiers

Téléchargez :
- `index.html`
- `style.css`
- `script.js`
- Le dossier `images/` (avec profile-pic.png dedans)

### Étape 2 : Ajouter vos images de projets

Dans le dossier `images/`, ajoutez vos 12 captures d'écran avec **exactement ces noms** :

**Projet 1 - Application SaaS :**
- `project1-main.jpg` (image principale)
- `project1-1.jpg` (image secondaire 1)
- `project1-2.jpg` (image secondaire 2)

**Projet 2 - Automatisation CVs :**
- `project2-main.jpg`
- `project2-1.jpg`
- `project2-2.jpg`

**Projet 3 - Application Messagerie :**
- `project3-main.jpg`
- `project3-1.jpg`
- `project3-2.jpg`

**Projet 4 - Musify :**
- `project4-main.jpg`
- `project4-1.jpg`
- `project4-2.jpg`

### Étape 3 : Ouvrir index.html

Double-cliquez sur `index.html` → Tout fonctionne ! 🎉

---

## 🎨 Dimensions recommandées

- **Image principale** (`projectX-main.jpg`) : 1200×675px (ratio 16:9)
- **Images secondaires** (`projectX-1.jpg`, `projectX-2.jpg`) : 800×450px (ratio 16:9)
- **Format** : JPG ou PNG
- **Poids** : < 300KB par image (utilisez [TinyPNG](https://tinypng.com/) pour optimiser)

---

## 📝 Renommer vos images facilement

Si vos images ont d'autres noms, renommez-les simplement :

**Sur Windows :**
- Clic droit sur l'image → Renommer
- Tapez le nouveau nom : `project1-main.jpg`

**Sur Mac :**
- Sélectionnez l'image → Appuyez sur Enter
- Tapez le nouveau nom : `project1-main.jpg`

**En ligne de commande :**
```bash
# Exemple
mv ma-capture-ecran.png project1-main.jpg
```

---

## 🚀 Déploiement sur GitHub Pages

Uploadez TOUTE la structure sur GitHub :

```bash
git init
git add .
git commit -m "Mon portfolio"
git remote add origin https://github.com/VOTRE-USERNAME/portfolio.git
git push -u origin main
```

Puis dans Settings > Pages > Source : `main` / `/ (root)`

Votre portfolio sera accessible sur : `https://VOTRE-USERNAME.github.io/portfolio/`

---

## ⚠️ Erreurs communes

### "Les images ne s'affichent pas"

✅ Vérifiez que le dossier `images/` est au même niveau que `index.html`
✅ Vérifiez les noms de fichiers (sensible à la casse : `Project1.jpg` ≠ `project1.jpg`)
✅ Vérifiez l'extension (`.jpg` pas `.jpeg`)

### "Mon CSS ne marche pas"

✅ Les 3 fichiers HTML, CSS, JS doivent être au même niveau
✅ Ouvrez index.html (pas style.css)

---

## 💡 Astuce : Tester rapidement

Pas encore vos vraies images ? Créez des images temporaires avec n'importe quelle capture d'écran et renommez-les correctement. Vous les remplacerez plus tard.

---

## 📋 Checklist finale

- [ ] Dossier `images/` créé
- [ ] Photo de profil dedans (`profile-pic.png`)
- [ ] 12 images de projets ajoutées avec les bons noms
- [ ] Images optimisées (< 300KB)
- [ ] Structure de dossiers respectée
- [ ] Testé dans le navigateur
- [ ] Tout fonctionne !

---

**C'est tout ! Simple et efficace.** 🎯

Pas besoin d'héberger les images ailleurs, tout reste dans votre projet.
