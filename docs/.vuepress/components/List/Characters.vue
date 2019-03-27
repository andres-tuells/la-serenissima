<template>
<div>
<div class="max-w-md w-full lg:flex" v-for="(item, index) in items">
  <div class="card">
    <img class="card-image" :src="$withBase('/' + item.frontmatter.image)">
    <div class="card-content">
        {{item.title}}
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
	data() {
		return {};
	}, 
	computed:{
		items() {
			let items = this.$site.pages.filter(p => {
				return p.path.indexOf('/characters/') >= 0;
			}).sort((a,b) => {
				return a.title < b.title;
			});

			return [...items, ...items];
		}
	}
}
</script>