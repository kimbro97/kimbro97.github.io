<template>
    <v-app>
        <v-app-bar :elevation="2" color="primary" density="compact">
            <v-app-bar-nav-icon variant="text"/>
            <v-btn rounded="xl" @click="drawer = !drawer">
                <svg-icon type="mdi" :path="path"></svg-icon>
            </v-btn>
            <v-toolbar-title>블로그 관리자</v-toolbar-title>
            <v-spacer />
            <v-btn>
                
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" permanent color="primary">
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
        </v-navigation-drawer>
        <v-main style="height: 400px">
            <div>콘텐츠</div>
        </v-main>
    </v-app>
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
