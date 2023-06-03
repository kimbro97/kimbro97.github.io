<template>
	<console-bar v-model="drawer"></console-bar>
	<console-drawer v-model="drawer"></console-drawer>
	<v-main style="height: 400px;">
            <slot />
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