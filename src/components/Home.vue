<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h2 display-3 class="text-xs-center primary--text">Welcome to MSCEIS 2019</h2>
                <p
                    class="subheading text-xs-justify"
                >Mathematics, Science, and Computer Science Education International Seminar (MSCEIS) 2019 is an annual conference which held by many domestic and overseas universities. It is held by the Faculty of Mathematics and Natural Science Education, Universitas Pendidikan Indonesia (UPI) and the collaboration with 12 University associated in Asosiasi MIPA LPTK Indonesia (AMLI) consisting of UNNES, UPI, UNY, UM, UNJ, UNIMED, UNP, UNIMA, UNM, UNDHIKSA, UNG, and UNESA.</p>
                <p class="subheading text-xs-justify">
                    In this year, MSCEIS 2019 takes the following theme:
                    <i class="green--text">
                        <b>"Mathematics, Science, and Computer Science education for Addressing challenges and implementations of Revolution-Industry 4.0"</b>
                    </i>. It will be held on October 12, 2019 in Bandung, West Java, Indonesia.
                </p>
                <p
                    class="subheading text-xs-justify"
                >Bandung is the capital of West Java province in Indonesia and Indonesia's fourth largest city after Jakarta, Surabaya and Medan, make it the third largest city by population, with over 2.4 million, and Greater Bandung made up of 2 municipalities and 38 districts, making it the nation's 2nd largest metropolitan area with 6,965,655 inhabitants at the 2010 census. Located 768 metres (2,520 ft) above sea level, approximately 140 kilometres (87 miles) south east of Jakarta, Bandung has cooler temperatures year-round than most other Indonesian cities. The city lies on a river basin surrounded by volcanic mountains. This topography provides a natural defense system, which was the primary reason for the Dutch East Indies government's plan to move the colony capital from Batavia (modern-day Jakarta) to Bandung.</p>
                <p
                    class="subheading text-xs-justify"
                >Significant tourist sites near Bandung include the Tangkuban Prahu volcano crater to the north, the striking Kawah Putih volcano lake, and Patenggang Lake, a lake surrounded by tea plantations about 50 kilometres (31 miles) to the south of the city.</p>
                <p
                    class="subheading text-xs-justify"
                >All accepted and presented in the conference will be published in American Institute of Physics (AIP) and international reputational journals (e.g., Indonesian Journal of Science and Technology (IJOST)) that are indexed by Scopus.</p>
            </v-flex>
        </v-layout>
        <v-layout mt-3>
            <v-flex>
                <v-layout justify-center text-xs-center>
                    <v-flex xs12 xs8 sm6 md4 mb-3>
                        <h4 class="display-1">Keynote Speakers</h4>
                    </v-flex>
                </v-layout>
                <v-layout v-bind="keynote">
                    <v-flex xs12 md6>
                        <v-card min-height="255">
                            <v-layout>
                                <v-flex xs12 sm5 md5 lg5 hidden-xs-only>
                                    <v-img src="./img/keynote/goutam.jpg" height="260" width="180"></v-img>
                                </v-flex>
                                <v-flex xs12 sm7 md7 lg7>
                                    <v-card-text primary-title>
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
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>&nbsp;&nbsp;&nbsp;
                    <v-flex xs12 md6>
                        <v-card min-height="255">
                            <v-layout>
                                <v-flex xs12 sm4 md4 lg4 hidden-xs-only>
                                    <v-img src="./img/keynote/igusti.jpeg" height="260" width="180"></v-img>
                                </v-flex>
                                <v-flex xs12 sm8 md8 lg8>
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
                <br>
                <v-layout justify-center text-xs-center>
                    <v-flex xs12 xs8 sm6 md4 mb-3 mt-4>
                        <h4 class="display-1">Invited Speakers</h4>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-carousel hide-delimiters height="250" light>
                        <v-carousel-item v-for="(item, i) in iSpeakers" :key="i">
                            <v-layout justify-center align-center fill-height text-xs-center>
                                <v-flex xs6 sm5 md4 lg3 hidden-xs-only>
                                    <v-img
                                        src="./img/invited/dummy.jpg"
                                        height="100%"
                                        min-width="40%"
                                    ></v-img>
                                </v-flex>
                                <v-flex xs6 sm7 md8 lg9>
                                    <div>
                                        <div class="headline font-weight-medium">{{item.name}}</div>
                                        <div class="title">{{item.major}}</div>
                                        <div
                                            class="subheading font-weight-medium"
                                        >{{item.institution}}</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-carousel-item>
                    </v-carousel>
                </v-layout>
                <br>
                <v-layout justify-center text-xs-center>
                    <v-flex xs12 xs8 sm6 md4 mb-3 mt-4>
                        <h4 class="display-1">AMLI Members</h4>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-carousel hide-delimiters hide-controls height="250">
                        <v-carousel-item v-for="(item, i) in AMLI" :key="i" class="blue">
                            <v-layout
                                justify-center
                                align-center
                                fill-height
                                text-xs-center
                                class="white"
                            >
                                <v-flex xs6 sm5 md4 lg3>
                                    <v-img :src="item.src" height="150" contain></v-img>
                                </v-flex>
                                <v-flex xs6 sm7 md8 lg9 hidden-xs-only>
                                    <div>
                                        <div class="display-3 font-weight-medium">{{item.name}}</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-carousel-item>
                    </v-carousel>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
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
            ],
            AMLI: [
                {
                    src: "./img/amli/unnes.jpg",
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
                    src: "./img/amli/unimed.jpg",
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
                    src: "./img/amli/ung.jpg",
                    name: "Universitas Negeri Gorontalo"
                },
                {
                    src: "./img/amli/unesa.jpg",
                    name: "Universitas Negeri Surabaya"
                }
            ]
        };
    },
    computed: {
        keynote() {
            const binding = {};

            if (this.$vuetify.breakpoint.smAndDown) binding.column = true;

            return binding;
        }
    }
};
</script>
