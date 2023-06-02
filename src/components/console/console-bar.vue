<template>
	<v-app-bar :elevation="2" color="app-bar" density="compact">
		<v-app-bar-nav-icon variant="text" @click="$emit('drawer')">
			<svg-icon type="mdi" :path="path"></svg-icon>
		</v-app-bar-nav-icon>
		<v-toolbar-title>블로그 관리자</v-toolbar-title>
		<v-spacer />
		<v-btn>
			
		</v-btn>
	</v-app-bar>
</template>

<script>
import { mdiMenu } from '@mdi/js';

export default {
	
    data() {
        return {
            path: mdiMenu,
            drawer: true
        }
    }
};

</script>