<template>
<div>
<div v-for="(item, index) in items">
  <TagCard :slug="item.frontmatter.slug" />
  <br>
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
		path: String,
  },
	computed:{
		items() {
			let items = this.$site.pages.filter(p => {
				if(!p.frontmatter.slug) return false;
				if (!p.path ||p.path=='/') return false;
				if (p.path.indexOf(`/extras/`) >= 0) return false;
				console.log('XXXX', p);
				if (!this.path) return true;
				return p.path.indexOf(`/${this.path}/`) >= 0;
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