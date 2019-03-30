---
title: Las Tradiciones
description: Confederación de Mags contra la Orden de la Razón 
image: traditions.jpg
sheet:
    - Fisico 2, Social 3, Mental 4
    - Alerta 6, Artesanía 8
    - Teleportarse.
---

## Main

<Card :slug="$page.frontmatter.slug"/>

## Abstract
> Doissetep es como Gondolin. Una fortaleza oculta desde donde se organiza la resistencia
> contra la Orden de la Razón. 
> La Orden la busca pero no la encuentra en ningún sitio. 
<!-- more -->

## Tramas

### Nivel 0
> Pj se encuentra en barco rumbo esclavista sin saber como ha llegado a él. Se ha encontrado con Senza Nome que le ha quitado los recuerdos.
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
