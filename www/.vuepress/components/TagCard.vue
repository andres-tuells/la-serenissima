<template>
<div class="bg-white mx-auto max-w-xl shadow-lg rounded-lg overflow-hidden">
  <div class="wrapper sm:flex">
    <a :href="item.path">
      <img class="block h-16 sm:h-24 mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="$withBase('/' + item.frontmatter.image)">
    </a>
    <div class="tagcard-right-elem text-center sm:text-left sm:flex-grow">
      <div class="mb-1">
        <h4><a :href="item.path">{{item.title}}</a></h4>
        <p class="text-sm leading-tight text-grey-dark">{{item.frontmatter.faction}}</p>
      </div>
      <p class="tagcard-text">
        {{item.frontmatter.description}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
	data() {
		return {};
	}, 
	props: {
    slug: String,
  },
	computed:{
		item() {
			let items = this.$site.pages.filter(p => {
				return p.frontmatter.slug == this.slug;
			}).sort((a,b) => {
				return a.title < b.title;
			});
			return items[0];
		}
	}
}
</script scoped>
.px-6 {
  padding-left: 15px;
  padding-right: 15px;
}
	
<style>
.xxxwrapper {
  min-height: 130px;
}

img {
  border-radius: 7px 0 0 7px;
  object-fit: cover;
  height: 100%;
  width: 86px;
}
.tagcard-right-elem {
  padding-top: 7px;
  margin-left: 20px;
}

.tagcard-text {
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}
</style>