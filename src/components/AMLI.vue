<template>
    <v-container grid-list-md>
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
                <v-layout text-xs-center column>
                    <h1 display-4 class="primary--text">AMLI</h1>
                    <div class="text-xs-justify subheading">To Be Announced.</div>
                    <br>
                    <h2 display-3 class="primary--text text-xs-left">AMLI Members</h2>
                    <v-flex>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4 lg4 xl4 v-for="(item, i) in AMLI" :key="i">
                                <v-card>
                                    <v-card-text class="title">
                                        <v-img :src="item.src" height="100" contain class="mb-3"></v-img>
                                        {{item.name}}
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
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
                text: "AMLI",
                disable: true,
                to: "/amli"
            }
        ],
        AMLI: [
            {
                src: "./img/amli/unnes.png",
                name: "Universitas Negeri Semarang"
            },
            {
                src: "./img/amli/upi.png",
                name: "Universitas Pendidikan Indonesia"
            },
            {
                src: "./img/amli/uny.png",
                name: "Universitas Negeri Yogyakarta"
            },
            {
                src: "./img/amli/um.png",
                name: "Universitas Negeri Malang"
            },
            {
                src: "./img/amli/undiksha.png",
                name: "Universitas Pendidikan Ganesha"
            },
            {
                src: "./img/amli/unj.png",
                name: "Universitas Negeri Jakarta"
            },
            {
                src: "./img/amli/unimed.png",
                name: "Universitas Negeri Medan"
            },
            {
                src: "./img/amli/unp.png",
                name: "Universitas Negeri Padang"
            },
            {
                src: "./img/amli/unima.png",
                name: "Universitas Negeri Manado"
            },
            {
                src: "./img/amli/unm.png",
                name: "Universitas Negeri Makassar"
            },
            {
                src: "./img/amli/ung.png",
                name: "Universitas Negeri Gorontalo"
            },
            {
                src: "./img/amli/unesa.png",
                name: "Universitas Negeri Surabaya"
            }
        ]
    })
};
</script>