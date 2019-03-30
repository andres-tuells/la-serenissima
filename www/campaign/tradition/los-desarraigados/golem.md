---
title: El Golem
description: Familiar de Mago de los Desarraigados 
image: golem.png
sheet:
    - Fisico 6, Social 4, Mental 4
    - Alerta 6, Armas 8
    - Arete 5, Arcano 5, Mente 5, Tiempo 5, Correspondencia 5, Cardinal 4
---


## Main

<Card :slug="$page.frontmatter.slug"/>

## Abstract

> Maestra Akashika de origen holandés. Se coló en un barco mercante y descubrió nuevos mundos y una tradición oriental 
> desabiduría y lucha. Fue enviada a Doissetep donde perfeccionó sus estudios. Ha sido enviada de vuelta a la Tierra 
> para mantener oculto a Doissetep. Borrar todo rastro y plantar pistas faltas.
> Todo esto siendo ella también indetectable.

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
