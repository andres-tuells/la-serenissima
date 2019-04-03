---
title: Gatos Negros
description: Gatos negros descendientes de la familiar de una Verbena quemada por bruja 
image: black-cats.jpg
sheet:
    - Fisico 2, Social 3, Mental 4
    - Alerta 6, Artesanía 8
    - Teleportarse.
---
## Main

<Card :slug="$page.frontmatter.slug"/>

> Supervivientes y descendientes de una gata familiar de Paola Giscona, 
> una Verbena quemada por bruja hace 50 años por la Orden de la Razón

## Nero

## La Suma Sacerdotisa

## La degeneración

## Tramas

- TODO Hacer aventura solo con gatos antes pedir ayuda pj. Ejemplo la Suma Sacerdotisa ha sido traicionada por MediaOreja y ha huido a las catacumbas, donde las ratas y el Rey de las Ratas habitan. 
- Monarchies of Mau

### Nivel 0
- [ ] Conocen a Nero y sus capacidades mágicas. Nero pide ayuda porque se han llevado a Alba.
- [ ] Unos niños están torturando un gato. Desde los tejados unos gatos negros miran. Llegan los pj.
      Unos días después uno de los niños, un gûl, muere al caersele en la cabeza una viga de una obra.
- [ ] Se encuentran a un gato en el Sanctum leyendo un libro de invocaciones. Se hace el inocente gatito. Realmente un demonio         oculto.

### Nivel 1
- [ ] Existe una comunidad de Gatos Negros con poderes mágicos. Descendientes de la Maga Verbena

### Nivel 2

## Nivel 3
- [ ] La Suma Sacerdotisa es la Mestra Espiritual.

## Nivel 4
- [ ] El Templo de los Gatos es el lugar donde se reunen y hacen sus políticas
- [ ] La Suma Sacerdotisa está muy enferma y piden que la salven. Hay una lucha de poder por el Templo

## Nivel 5
- [ ] La Maga Verbena vuelve de entre los muertos gracias a un Hechizo de Resurrección. Quiere venganza y utiliza alos Gatos Negros.Se ha vuelto cruel y la temen. Ha jurado venganza sobre quienes ordenaron su muerte.
- [ ] La Maga Verbena vive entre los leprosos.

# Los monellos

> Banda de niños ladrones de Venecia.
> Guiados por una niña y su gata.

## Nero

## Suma Sacerdotisa

## El Cazador de Ojos

## Media Oreja

## Marla la Ladrona

## El Encantador de Perros

## La Desratizadora

## Gato Infernalista
Demonio en cuerpo de gato.


## Parent

<TagCard :slug="$page.frontmatter.parent_slug" />

## Children

<TagList :parent="$page.frontmatter.parent + '/' + $page.frontmatter.slug"/>

## Related

<TagList :parent="$page.frontmatter.parent" :exclude="$page.frontmatter.slug"/>