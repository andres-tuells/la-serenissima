---
title: Centuriones, Los
description: Banda de mafiosos que controlan una pequeña zona 
sheet:
    - Influence 1, Resources 1, Might 2
    - Unos 30
---

## Main

<Card :slug="$page.frontmatter.slug"/>

## Abstract

> Gobiernan un pequeño pedazo de la ciudad. Son un grupo mediocre con poco poder.
> Van armados con armadura de cuero, espadas cortas, hachas y capas.
> Usan las capas como escudo, enredando los floretes en ella

## Marcus 

El líder de todo esto. Lleva armadura romana de bronce y se hace llamar Praetor. Construye una parafernalia alrededor de eso.
Impusivo, lleno de ira. Frenado por Quietus.
```
Presencia 3, Liderazgo 3, Destreza 3, Espada 3
```

## Quintus

Gûl. Consellieri de Marcus. Tampoco es que valga mucho.

```
Inteligencia 3, Manipulacion 4, Subterfugio 3 
```

## Pietro el Gigante

```
Fuerza 5, Pelea 3
```

## Paolo la Serpiente
Usa la ballesta. Escurridizo y traicionero.

```
Destreza 4, Ballesta 4
```


## Tramas

### Nivel 0
- [ ] En el mercado uno pilla una manzana, la muerde y la tira. Un niño corre y se la lleva.
- [ ] Cruzan un puente a la vez. Se apartan o no?
- [ ] Cuando un obrero escribe pintadas contra el Doge le pegan una paliza y lo dan por muerto.
- [ ] Un grupo de hombres de los Centuriones miran fijamente a los pj pasar. "Esquifosos"

### Nivel 1
- [ ] Ha muerto uno de los suyos por una viga en la cabeza. Mataron al obrero al momento. Buscan a Alba por bruja.
- [ ] En el principio de una pelea aparece Marcus y pone orden. Golpea a los suyos.
- [ ] En una situación tensa Quintus quiere parar a Marcus que lo acaba tumbando de un puñetazo.

## Parent

<TagCard :slug="$page.frontmatter.parent_slug" />

## Children

<TagList :parent="$page.frontmatter.parent + '/' + $page.frontmatter.slug"/>

## Related

<TagList :parent="$page.frontmatter.parent" :exclude="$page.frontmatter.slug"/>

