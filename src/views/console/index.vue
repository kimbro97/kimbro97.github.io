<template>
    <v-app>
        <!-- <v-app-bar :elevation="2" color="app-bar" density="compact">
            <v-app-bar-nav-icon variant="text" @click="drawer = !drawer">
                <svg-icon type="mdi" :path="path"></svg-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>블로그 관리자</v-toolbar-title>
            <v-spacer />
            <v-btn>
                
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" permanent color="#414C60">
            <v-list color="transparent">
                <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
                <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
                <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer> -->
        <!-- <console-app></console-app> -->
        <console-sign-in></console-sign-in>
    </v-app>
</template>

<script>
import { mdiMenu } from '@mdi/js';
import consoleApp from '../../components/console/console-app.vue';
import consoleSignIn from '../../components/console/console-sign-in.vue';

export default {
    components: {
        consoleApp,
        consoleSignIn
    },
    data() {
        return {
            path: mdiMenu,
            drawer: true
        }
    }
};
</script>
