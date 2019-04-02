---
title: Los Desarraigado
description: Supervivientes de la destruída alianza de Praga. Quieren liberar a los suyos 
image: los-desarraigados.jpg
sheet:
    - Fisico 6, Social 4, Mental 4
    - Alerta 6, Armas 8
    - Arete 5, Arcano 5, Mente 5, Tiempo 5, Correspondencia 5, Cardinal 4
---


## Main

<Card :slug="$page.frontmatter.slug"/>


## Mago transexual transformacion

## Mago golem

## Maga flambeau

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
