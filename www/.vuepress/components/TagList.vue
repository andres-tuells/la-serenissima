<template>
<div>
<div v-for="(item, index) in items">
  <TagCard :slug="item.frontmatter.slug" />
  <br>
</div>
</div>
</template>

<script>

const path = require('path');

export default {
	data() {
		return {};
	}, 
	props: {
		parent: String,
		exclude: String,
  },
	computed:{
		path() {
      		return path;
    	},
		items() {
			let items = this.$site.pages.map( p => {
        		p.frontmatter.slug = path.basename(p.path).replace('.html','');
				p.frontmatter.parent = path.dirname(p.path).replace('/','');
				p.frontmatter.parent_slug = path.basename(p.frontmatter.parent);
				return p;
			}).filter( p => {
				if (this.exclude && this.exclude==p.frontmatter.slug) return false;
				return true;
			}).filter( p => {
				if (this.parent && this.parent!=p.frontmatter.parent) return false;
				return true;
			}).sort((a,b) => {
				return a.title < b.title;
			});

			return items;
		}
	}
}
</script>