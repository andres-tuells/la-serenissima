<template>
<div>
<div v-for="(item, index) in items">
  <Character :slug="item.frontmatter.slug" />
</div>
</div>
</template>

<script>
export default {
	data() {
		return {};
	}, 
	props: {
		faction: String,
		location: String,
		clocks: String,
  },
	computed:{
		items() {
			let items = this.$site.pages.filter(p => {
				return p.path.indexOf('/characters/') >= 0;
			}).filter( p => {
				if (this.faction && this.faction!=p.frontmatter.faction) return false;
				return true;
			}).sort((a,b) => {
				return a.title < b.title;
			});

			return items;
		}
	}
}
</script>