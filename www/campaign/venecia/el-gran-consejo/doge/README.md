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

The CDX possessed its own armory, raised an army of 1500
men, and used the Venetian ambassadors as intelligence officers abroad.
Its purview included ‘‘All things concerning the security of the state and
the preservation of morals.’’ The CDX prohibited members of the
Consiglio Maggiore from carrying sidearms, and decreed that 200 soldiers
should be distributed about Piazza di San Marco at night. It decreed that
a watch of ten soldiers should be placed on each street, and that guards
should stand watch over the Ducal palace every night. Finally, it
mandated that men should patrol the lagoon that connects Venice to the
mainland so that the route Badoer used to reach Venice could not be
repeated

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
