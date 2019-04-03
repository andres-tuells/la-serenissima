---
title: Doge de Venecia
slug: doge
description: El Doge de Venecia ostenta el poder terrenal de la ciudad. 
image: doge.jpg
sheet:
    - Fisico 2, Social 3, Mental 4
    - Alerta 6, Artesanía 8
    - Teleportarse.
---

## Main

<Card :slug="$page.frontmatter.slug"/>

## Abstract

> Familiar de ycreado por Leonardo da Vinci

https://en.wikipedia.org/wiki/Nicol%C3%B2_Donato
https://en.wikipedia.org/wiki/List_of_Doges_of_Venice#17th_century
https://es.noticias.yahoo.com/cuando-los-monarcas-tenian-su-disposicion-un-aristocrata-para-que-les-limpiara-el-trasero-tras-usar-el-retrete-131419198.html

TRAMA: España quiere hacerse con el control de Venecia con sobornos y politiqueos

## Tramas

- [ ] Al ojalá no te hubiera creado él contesta ojalá no me hubieras creado.
- [ ] Prefiere no salir fuera por no sufrir la Paradoja.
- [ ] Doge conspira con la Inquisición para descubrir la conspiración de los magos. Piensa que son infernalistas.
- [ ] Ha montado una red de espías e informantes.
- [ ] Doge fue antiguo aprendiz mago que fracasó y fue borrado la memoria. Alumno de Tamurello.

## Parent

<TagCard :slug="$page.frontmatter.parent_slug" />

## Children

<TagList :parent="$page.frontmatter.parent + '/' + $page.frontmatter.slug"/>

## Related

<TagList :parent="$page.frontmatter.parent" :exclude="$page.frontmatter.slug"/>
