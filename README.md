# Gestió d'Incidències i Formulari Web

He dissenyat i implementat aquesta eina professional per a la recepció d'avaries informàtiques. L'objectiu principal és recollir la informació crítica d'un client per poder fer un diagnòstic previ eficient abans de la intervenció física.

M'he centrat a crear una interfície que transmeti una imatge corporativa rigorosa, facilitant la comunicació entre l'usuari i el servei tècnic.

## Tecnologies Utilitzades
* **HTML5:** Per muntar la base del formulari i les 7 pàgines de la web.
* **CSS3:** Per organitzar el layout, els colors corporatius i assegurar un disseny professional.
* **JavaScript:** Per la perzonalització del cursor.

## Característiques Principals
1. **Arquitectura Multipàgina:** El lloc està organitzat en diferents seccions (`Inici`, `Tarifes`, `Qui som`, `Contacte` i el formulari `Envia la teva incidència`) per mantenir una navegació clara.
2. **Gestió de Dades Crítiques:** El formulari està optimitzat per recollir camps tècnics imprescindibles com la marca, el model, el sistema operatiu i el tipus d'equip (sobretaula, portàtil o servidor).
3. **Diagnòstic Detallat:** Inclou apartats específics per descriure símptomes, missatges d'error a la pantalla o senyals acústics (com beeps).
4. **Sistema de Prioritats:** Permet al client marcar la urgència de la incidència (Baixa, Mitjana o Alta/Crítica) per ajudar el tècnic a organitzar la feina.

## Identitat Corporativa i Aspectes Legals
* **Capçalera Professional:** Inclou el logotip de l'empresa, dades de contacte (NIF, adreça, telèfon i correu) i el menú de navegació.
* **Peu de Pàgina Legal:** Per complir amb la normativa de privacitat, s'ha inclòs un enllaç a la Política de Privadesa i l'Avís Legal, a més de l'horari d'atenció al client.

---

## 📁 Estructura del Projecte

```text
📂 Formulari-Web
 ┣ 📂 css
 ┃ ┗ 📄 styles.css           # Estils corporatius i disseny del formulari
 ┣ 📂 img
 ┃ ┣ 📄 banner.png           # Imatge per a la capçalera de la web
 ┃ ┣ 📄 chip-placa.png       # Recurs gràfic de components
 ┃ ┣ 📄 escut-circuit.png    # Element visual d'identitat
 ┃ ┣ 📄 logo-nexosystem.png  # Logotip oficial de l'empresa
 ┃ ┣ 📄 portada.png          # Imatge principal de la landing page
 ┃ ┣ 📄 torre-eines.png      # Recurs visual de manteniment
 ┃ ┗ 📄 torre-llamp.png      # Recurs visual de diagnosi
 ┣ 📂 js
 ┃ ┗ 📄 cursor.js           # Lògica per a la interactivitat del cursor
 ┣ 📄 .gitattributes         # Configuració dels atributs de Git
 ┣ 📄 README.md              # Documentació del projecte
 ┣ 📄 avis-legal.html        # Textos legals obligatoris
 ┣ 📄 contacte.html          # Dades generals de contacte de l'empresa
 ┣ 📄 incidencia.html        # Formulari detallat de recepció d'avaries
 ┣ 📄 index.html             # Pàgina d'inici i entrada principal
 ┣ 📄 privacitat.html        # Política de protecció de dades
 ┣ 📄 qui-som.html           # Presentació i valors de l'empresa
 ┗ 📄 tarifes.html           # Llistat de preus i serveis tècnics

