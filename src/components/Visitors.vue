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
                <v-layout justify-center text-xs-center>
                    <v-flex>
                        <h1 display-4 class="primary--text">Visitors</h1>
                        <iframe style="border: 0" height="100%" width="100%" src="./visitor.html"></iframe>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        wsc: {},
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
    })
};
</script>