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
                    <v-flex xs12 xs8 sm6 md4 mb-3>
                        <h4 class="display-1">Keynote Speakers</h4>
                    </v-flex>
                </v-layout>
                <v-layout v-bind="keynote" justify-center>
                    <v-flex xs12 md6>
                        <v-card height="250">
                            <v-layout>
                                <v-flex xs12 sm4 md5 lg4 hidden-xs-only>
                                    <v-img src="./img/keynote/goutam.jpg" height="250px"></v-img>
                                </v-flex>
                                <v-flex xs12 sm7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Prof. Goutam Chakraborty, Ph.D.</div>
                                            <div class="subheading">Iwate Prefectural University</div>
                                            <div class="body-1">Artificial Intelligence</div>
                                            <div class="body-1">Japan</div>
                                            <div class="body-2">
                                                <a
                                                    class="blue-grey--text"
                                                    href="http://www.chishiki.soft.iwate-pu.ac.jp/~goutam/"
                                                >http://www.chishiki.soft.iwate-pu.ac.jp/</a>
                                            </div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>&nbsp;&nbsp;&nbsp;
                    <v-flex xs12 md6>
                        <v-card height="250">
                            <v-layout>
                                <v-flex xs12 sm4 md5 lg4 hidden-xs-only>
                                    <v-img src="./img/keynote/igusti.jpeg" height="250"></v-img>
                                </v-flex>
                                <v-flex xs12 sm7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Dr. I Gusti Darmawan</div>
                                            <div class="subheading">School of Education</div>
                                            <div class="subheading">The University of Adelaide</div>
                                            <div class="body-1">Science and Mathematics Education</div>
                                            <div class="body-1">Australia</div>
                                            <div class="body-2">
                                                <a
                                                    class="blue-grey--text"
                                                    href="https://www.adelaide.edu.au/directory/igusti.darmawan#"
                                                >https://www.adelaidde.edu.au/</a>
                                            </div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout justify-center text-xs-center>
                    <v-flex xs12 xs8 sm6 md4 mb-3 mt-4>
                        <h4 class="display-1">Invited Speakers</h4>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-carousel hide-delimiters height="200">
                        <v-carousel-item v-for="(item, i) in iSpeakers" :key="i">
                            <v-layout
                                justify-center
                                align-center
                                fill-height
                                text-xs-center
                                class="blue"
                            >
                                <v-flex xs6 sm5 md4 lg3 hidden-xs-only>
                                    <v-img
                                        src="./img/invited/dummy.jpg"
                                        height="100%"
                                        min-width="40%"
                                    ></v-img>
                                </v-flex>
                                <v-flex xs6 sm7 md8 lg9>
                                    <v-responsive class="white--text">
                                        <v-card color="blue">
                                            <v-card-text>
                                                <div
                                                    class="headline font-weight-medium"
                                                >{{item.name}}</div>
                                                <div class="title">{{item.major}}</div>
                                                <div
                                                    class="subheading font-weight-medium"
                                                >{{item.institution}}</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-responsive>
                                </v-flex>
                            </v-layout>
                        </v-carousel-item>
                    </v-carousel>
                </v-layout>
                <br>
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
                text: "Keynote Speakers and Invited Speakers",
                disable: true,
                to: "/speakers"
            }
        ],
        iSpeakers: [
            {
                name: "Dr. Eng. Pakhrur Razi, M.Si.",
                major: "Bidang Fisika Instumentasi",
                institution: "Universitas Negeri Padang"
            },
            {
                name: "Prof. Dr. Manihar Situmorang, MSc., PhD.",
                major: "Bidang Kimia Analitik",
                institution: "Universitas Negeri Medan"
            },
            {
                name: "Prof. Dr. I Nengah Suparta, M.Si",
                major: "Matematika",
                institution: "Universitas Pendidikan Ganesha"
            },
            {
                name: "Dra. Dwi Yulianti, M.Si",
                major: "Pendidikan Fisika (Tema STEM)",
                institution: "Universitas Negeri Semarang"
            },
            {
                name: "Prof. Dr. Sarson W.Dj. Pomalato, M.Pd.",
                major: "Pendidikan Matematika",
                institution: "Universitas Negeri Gorontalo"
            },
            {
                name: "Prof. Dr. Orbanus Naharia, MS.",
                major: "Biologi Lingkungan",
                institution: "FPMIPA Universitas Negeri Manado"
            },
            {
                name: "Dr. Dadan Rosana",
                major: "Pendidikan IPA",
                institution: "Universitas Negeri Yogyakarta"
            },
            {
                name: "Dr. Sumari, M.Si.",
                major: "Kimia-Fisika Jurusan Kimia",
                institution: "Universitas Negeri Malang"
            },
            {
                name: "Prof. Dr. Hamzah Upu, M.Ed.",
                major: "Pendidikan Matematika",
                institution: "Universitas Negeri Makassar"
            },
            {
                name: "Prof. Dr. I Made Putrawan",
                major: "Pendidikan Biologi",
                institution: "Universitas Negeri Jakarta"
            },
            {
                name: "Dr. Sukarmin, M.Pd.",
                major: "Pendidikan Kimia",
                institution: "Universitas Negeri Surabaya"
            },
            {
                name: "Dr. Muhammad Nursalman",
                major: "Ilmu Komputer",
                institution: "Universitas Pendidikan Indonesia"
            },
            {
                name: "Prof. Dr. Wawan Setiawan",
                major: "Pendidikan Ilmu Komputer",
                institution: "Universitas Pendidikan Indonesia"
            }
        ]
    }),
    computed: {
        keynote() {
            const binding = {};

            if (this.$vuetify.breakpoint.smAndDown) binding.column = true;

            return binding;
        }
    }
};
</script>
