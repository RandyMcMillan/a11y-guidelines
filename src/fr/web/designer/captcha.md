---
title: "Éviter les captcha"
---

# Éviter les captcha

**Cible&nbsp;:** tous le monde en particulier, les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Les captcha sont souvent  la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&nbsp;: 
- Double authentification&nbsp;;
- Champ de formulaire caché à laisser vide (technique du <span lang="en">honeypot</span>), non-visibles pour l’utilisateur&nbsp;;
- Mise à disposition d'un support téléphonique afin de s'assurer que le client est une vraie personne&nbsp;;
- Un contrôle permettant de s'assurer qu'une même combinaison <abbr>IP</abbr>/<i lang="en">User agent</i> (navigateur) ne tente pas de soumettre le formulaire plus de N fois par seconde.

Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une combinaison de captcha&nbsp;:
- un captcha  audio&nbsp;+ visuel,
- des tests logiques (question dont la réponse est évidente, test  mathématique simple…)&nbsp;+ captcha visuel classique
- …