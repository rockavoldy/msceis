<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card class="pl-2 pr-2">
                    <v-breadcrumbs :items="itemsBc">
                        <template v-slot:divider>
                            <v-icon>chevron_right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>
                <br>
                <p>{{visitors}}</p>
                <v-layout justify-center text-xs-center>
                    <v-flex xs6 sm4 md4 lg3 xl2>
                        <h1 display-4 class="primary--text">{{visitors.rows.rows}}</h1>
                        <h2 display-3 class="primary--text">5 Last Visitors</h2>
                        <h4 class="subheading mb-2">They are from:</h4>
                        <v-layout justify-center column text-xs-left>
                            <v-flex
                                v-for="(visitor,i) in visitors.data"
                                :key="i"
                                class="title mb-2 ml-5"
                            >
                                <b
                                    class="pl-5"
                                    v-if="$vuetify.breakpoint.mdAndUp"
                                >{{visitor.country_name}}</b>
                                <b
                                    class="pl-4"
                                    v-if="$vuetify.breakpoint.sm"
                                >{{visitor.country_name}}</b>
                                <b v-if="$vuetify.breakpoint.xs">{{visitor.country_name}}</b>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        visitors: {},
        itemsBc: [
            {
                text: "Home",
                disable: false,
                to: "/"
            },
            {
                text: "About",
                disable: false,
                to: "#"
            },
            {
                text: "Visitors",
                disable: true,
                to: "/visitors"
            }
        ]
    }),
    mounted() {
        axios
            .get("http://msceisvue.test/public/api/api.php")
            .then(response => (this.visitors = response.data));
    }
};
</script>