<template>
<v-layout row>
    <v-flex xs12 sm6 offset-sm3>
    <v-card>
        <v-list three-line>
            <template v-for="(item, index) in items">
            <v-list-tile
                :key="item.title"
                avatar
                :href="item.path"
            >
                <v-list-tile-avatar>
                <img :src="$withBase('/' + item.frontmatter.image)">
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.frontmatter.description"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-spacer></v-spacer>
            </v-list-tile>
            </template>
        </v-list>
    </v-card>
    </v-flex>
</v-layout>
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

			return items;
		}
	}
}
</script>