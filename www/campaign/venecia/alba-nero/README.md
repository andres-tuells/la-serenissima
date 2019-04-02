---
title: Alba y Nero
slug: alba-nero
faction: monellos
location: venice
description: Alba y su gato Nero lideran a los Monellos de Venecia 
image: alba.jpg
sheet:
    - Fisico 2, Social 3, Mental 4
    - Alerta 6, Artesanía 8
    - Teleportarse.
---

## Main

<Card :slug="$page.frontmatter.slug"/>

## Abstract

> Familiar de ycreado por Leonardo da Vinci

## Tramas

- [ ] Al ojalá no te hubiera creado él contesta ojalá no me hubieras creado.
- [ ] Prefiere no salir fuera por no sufrir la Paradoja.

## Parent

<TagCard :slug="$page.frontmatter.parent_slug" />

## Children

<TagList :parent="$page.frontmatter.parent + '/' + $page.frontmatter.slug"/>

## Related

<TagList :parent="$page.frontmatter.parent" :exclude="$page.frontmatter.slug"/>
