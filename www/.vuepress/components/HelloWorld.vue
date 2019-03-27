<template>
  <h1>Hello from your custom component.</h1>
</template>

<style lang="scss">
  $foo: yellow;

  h1 {
    @apply bg-red;
    color: $foo;
  }
</style>
