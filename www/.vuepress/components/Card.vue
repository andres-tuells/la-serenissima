<template>
<div class="site-card-wrapper">
    <div class="site-card-img">
      <a :href="item.path"><img :src="$withBase('/' + item.frontmatter.image)"></a>
    </div>
		<div class="site-card-info">
      <div class="site-card-text">
        <h1><a :href="item.path">{{item.title}}</a></h1>
        <h2>{{item.frontmatter.faction}}</h2>
				<ul class="site-card-sheet">
  				<li v-for="elem in item.frontmatter.sheet">
    				{{ elem }}
  				</li>
				</ul>
        <p v-html="item.frontmatter.description"></p>
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
			}).map( p =>{
				//if (p.frontmatter.sheet)p.frontmatter.sheet.replace('\\n','\n')
				return p;
			});
			return items[0];
		}
	}
}
</script>

<style>

.site-card-sheet {
	background-color: black;
	color: white;
	padding: 15px;
	font-size: .85em;
	list-style: none;
	margin-bottom: 20px;
}

.site-card-wrapper {
  height: 420px;
  width: 954px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.site-card-img {
  float: left;
  xxheight: 420px;
  xxwidth: 327px;
	xxoverflow: hidden;
}

.site-card-img a img {
  border-radius: 7px 0 0 7px;
	height: 420px;
  width: 327px;
	object-fit: cover;
}

.site-card-info {
  float: left;
  height: 420px;
  width: 627px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.site-card-text {
  height: 300px;
  width: 627px;
}

.site-card-text h1 {
  margin: 0 0 0 38px;
  padding-top: 15px;
  font-size: 34px;
  color: #474747;
}

.site-card-text h1,
.site-card-price-btn p {
  font-family: 'Bentham', serif;
}

.site-card-text h2 {
  margin: 0 0 7px 38px;
  font-size: 13px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

.site-card-text p {
  height: 125px;
  margin: 0 0 0 38px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}

.site-card-price-btn p {
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: 'Trocchi', serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  font-weight: lighter;
  color: #474747;
}

.site-card-price-btn button {
  float: right;
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.site-card-price-btn button:hover {
  background-color: #79b0a1;
}
</style>