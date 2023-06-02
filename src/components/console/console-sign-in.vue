<template>
    <v-main class="bg-content">
        <v-container class="container">
            <v-responsive width="100%" max-width="400" class="overflow-visible">
                <v-card width="100%" height="auto" elevation="12">
                    <v-toolbar color="secondary-darken-1">
                        <v-toolbar-title class="pl-4">
                            <span class="font-weight-medium">관리자 로그인</span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="px-8 pt-4 pb-0">
                        <v-form>
                            <v-text-field v-model="username" label="아이디" name="username" variant="outlined" density="compact" color="primary" hide-details persistent-placeholder type="text">
                                <i class="mdi mdi-account v-icon--start" style="font-size: 20px;" />
                            </v-text-field>
                            <v-text-field v-model="password" label="비밀번호" name="password" variant="outlined" density="compact" color="primary" hide-details persistent-placeholder type="password" class="mt-4">
                                <i class="mdi mdi-lock v-icon--start" style="font-size: 20px" />
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="px-8 pb-8 pt-0 mt-4">
                        <v-spacer />
                        <v-btn color="primary" size="large" variant="flat" width="100%" prepend-icon="mdi-login-variant">로그인</v-btn>
                    </v-card-actions>
                </v-card>
            </v-responsive>
        </v-container>
    </v-main>
</template>

<script>

export default {
    data(){
        return {
            username: null,
            password: null
        }
    },
    methods: {
        validate(){
            try{
                if(!this.username) throw new Error("아이디를 입력해주세요");
                if(!this.password) throw new Error("비밀번호를 입력해주세요");

                return true;
            }
            catch(error){
                alert(error.message);
            }
            return false;
        },
    },
}
</script>

<style scoped>
.container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>