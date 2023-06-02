<template>
	<console-bar @drawer="drawer = !drawer"></console-bar>
	<console-drawer :drawer="drawer"></console-drawer>
	<v-main style="height: 400px;">
            <div>콘텐츠</div>
    </v-main>
</template>

<script>
import consoleBar from './console-bar.vue'
import consoleDrawer from './console-drawer.vue'

export default {
	components: {
		consoleBar,
		consoleDrawer
	},

	data() {
		return {
			drawer: true
		}
	}
}

</script>