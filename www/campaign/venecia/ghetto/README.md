---
title: Ghetto
description: Barrio donde los judios se ven obligados a vivir 
sheet:
    - Fisico 2, Social 3, Mental 4
    - Alerta 6, Artesanía 8
    - Teleportarse.
---

## Main

<Card :slug="$page.frontmatter.slug"/>

## Abstract
> The Venetian Ghetto was the area of Venice in which Jews were compelled to live by the government of the Venetian Republic.
> The English word "ghetto" is derived from the Jewish ghetto in Venice. 
> The Venetian Ghetto was instituted on 29 March 1516 and is the oldest Jewish ghetto in the world. 
> It was not the first time that Jews in Venice were compelled to live in a segregated area of the city.
<!-- more -->

```
ghetto formerly meant "street" (like German Gasse, Swedish gata, and Gothic gatwo)
```
## Situación
El Ghetto está situado en el Cannaregio. Unido por 2 puentes al resto de la ciudad. Los puentes cierran por la noche.

![](../../../images/cannaregio.png#centerme)

## Cultura

Though it was home to a large number of Jews, the population living in the Venetian Ghetto never assimilated to form a distinct, "Venetian Jewish" ethnicity. Four of the five synagogues were clearly divided according to ethnic identity: separate synagogues existed for the German (the Scuola Grande Tedesca), Italian (the Scuola Italiana), Spanish and Portuguese (the Scuola Spagnola), and Levantine Sephardi communities (The Scola Levantina). The fifth, the Scuola Canton, was built as a private synagogue for the four families, one of them the Fano family, who funded its construction,[citation needed] and also served the Venetian Ashkenazi community. Today, there are also other populations of Ashkenazic Jews in Venice, mainly Lubavitchers who operate a kosher food store, a yeshiva, and a Chabad synagogue.

## Leon de Modena
https://en.wikipedia.org/wiki/Leon_of_Modena

## Sara Copia Sullam

https://en.wikipedia.org/wiki/Sara_Copia_Sullam

## Meir Magino

El mejor cristalero de la ciudad. El ayuda a crear los mejores telescopias, microscopios y otros aparatos científicos.

https://www.jewishvirtuallibrary.org/magino-meir

## Tramas

### Nivel 0

----------------------------
### Nivel 1

----------------------------
### Nivel 2

----------------------------
### Nivel 3

----------------------------
### Nivel 4

----------------------------
### Nivel 5

## Parent

<TagCard :slug="$page.frontmatter.parent" />

## Children

<TagList :parent="$page.frontmatter.parent + '/' + $page.frontmatter.slug"/>

## Related

<TagList :parent="$page.frontmatter.parent" :exclude="$page.frontmatter.slug"/>

