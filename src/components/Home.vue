<template>
    <v-container grid-list-md>
        <v-layout>
            <v-flex>
                <h1 display-4 class="mb-3 mt-3 text-xs-center primary--text">Welcome to MSCEIS 2019</h1>
                <div>
                    <p class="subheading text-xs-justify">
                        Mathematics, Science, and Computer Science Education International Seminar (MSCEIS) 2019 is an annual conference which held by many domestic and overseas universities. It is held by the Faculty of Mathematics and Natural Science Education, Universitas Pendidikan Indonesia (UPI) and the collaboration with 12 University associated in Asosiasi MIPA LPTK Indonesia (AMLI) consisting of
                        Universitas Negeri Semarang (UNNES), Universitas Pendidikan Indonesia (UPI), Universitas Negeri Yogyakarta (UNY), Universitas Negeri Malang (UM), Universitas Negeri Jakarta (UNJ), Universitas Negeri Medan (UNIMED), Universitas Negeri Padang (UNP), Universitas Negeri Manado (UNIMA), Universitas Negeri Makassar (UNM), Universitas Pendidikan Ganesha (UNDHIKSA), Universitas Negeri Gorontalo (UNG), and Universitas Negeri Surabaya (UNESA).
                    </p>
                    <p class="subheading text-xs-justify">
                        In this year, MSCEIS 2019 takes the following theme:
                        <i class="green--text">
                            <b>"Mathematics, Science, and Computer Science Education for Addressing Challenges and Implementations of Revolution-Industry 4.0"</b>
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
                    >All presented papers will be submitted to publishers that are indexed by Scopus.</p>
                </div>
            </v-flex>
        </v-layout>
        <v-layout mt-3>
            <v-flex>
                <v-layout justify-center text-xs-center>
                    <v-flex xs12 xs8 sm6 md4 mb-3>
                        <h4 class="display-1 primary--text mt-3 font-weight-medium">Keynote Speakers</h4>
                    </v-flex>
                </v-layout>
                <v-layout v-bind="keynote" wrap>
                    <v-flex xs12 md6>
                        <v-card height="260" to="/speakers">
                            <v-layout>
                                <v-img
                                    src="./img/keynote/goutam.jpg"
                                    height="260"
                                    width="200"
                                    position="top"
                                    class="ml-1"
                                ></v-img>
                                <v-flex xs12 sm7 md7 lg8 xl9>
                                    <v-card-title primary-title class="mt-3">
                                        <div>
                                            <div class="headline">Prof. Goutam Chakraborty, Ph.D.</div>
                                            <div class="subheading">Iwate Prefectural University</div>
                                            <div class="body-1">Artificial Intelligence</div>
                                            <div class="body-1">Japan</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card min-height="260" to="/speakers" class="mb-2">
                            <v-layout>
                                <v-img
                                    src="./img/keynote/igusti.jpeg"
                                    height="260"
                                    width="200"
                                    position="top"
                                    class="ml-1"
                                ></v-img>
                                <v-flex xs12 sm7 md7 lg8 xl9>
                                    <v-card-title primary-title class="mt-3">
                                        <div>
                                            <div class="headline">Dr. I Gusti Darmawan</div>
                                            <div class="subheading">School of Education</div>
                                            <div class="subheading">The University of Adelaide</div>
                                            <div class="body-1">Science and Mathematics Education</div>
                                            <div class="body-1">Australia</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card min-height="260" to="/speakers" class="mb-2">
                            <v-layout>
                                <v-img
                                    src="./img/keynote/janchai.png"
                                    height="260"
                                    width="200"
                                    position="top"
                                    class="ml-1"
                                ></v-img>
                                <v-flex xs12 sm7 md7 lg8 xl9>
                                    <v-card-title primary-title class="mt-3">
                                        <div>
                                            <div class="headline">Prof. Janchai Yingprayoon</div>
                                            <div class="subheading">International College</div>
                                            <div
                                                class="subheading"
                                            >Suan Sunandha Rajabhat University</div>
                                            <div class="body-1">Mathematics Education</div>
                                            <div class="body-1">Thailand</div>
                                        </div>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout justify-center text-xs-center mt-4>
                    <v-flex xs12 xs8 sm6 md4 mb-3 mt-4>
                        <h4 class="display-1">Invited Speakers</h4>
                    </v-flex>
                </v-layout>
                <v-layout v-bind="keynote" text-xs-center text-sm-left>
                    <v-flex xs12 md6>
                        <v-card min-height="200">
                            <v-carousel hide-delimiters hide-controls height="200" light>
                                <v-carousel-item v-for="(item, i) in invited1" :key="i">
                                    <v-layout align-center justify-center>
                                        <v-flex sm5 md5 lg4 xl3 class="mt-3">
                                            <v-img
                                                :src="item.src"
                                                height="160"
                                                width="160"
                                                style="border-radius: 50%"
                                                position="top top"
                                                class="ml-3"
                                            ></v-img>
                                        </v-flex>
                                        <v-flex xs12 sm7 md7 lg8 xl9>
                                            <v-card-text>
                                                <div class="headline">{{item.name}}</div>
                                                <div class="subheading">{{item.major}}</div>
                                                <div class="body-1">{{item.institution}}</div>
                                                <div class="body-1">Sinta ID: {{item.sintaid}}</div>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card min-height="200">
                            <v-carousel hide-delimiters hide-controls height="200" light>
                                <v-carousel-item v-for="(item, i) in invited2" :key="i">
                                    <v-layout align-center justify-center>
                                        <v-flex sm5 md5 lg4 xl3 class="mt-3">
                                            <v-img
                                                :src="item.src"
                                                height="160"
                                                width="160"
                                                style="border-radius: 50%"
                                                position="top top"
                                                class="ml-3"
                                            ></v-img>
                                        </v-flex>
                                        <v-flex xs12 sm7 md7 lg8 xl9>
                                            <v-card-text>
                                                <div class="headline">{{item.name}}</div>
                                                <div class="subheading">{{item.major}}</div>
                                                <div class="body-1">{{item.institution}}</div>
                                                <div class="body-1">Sinta ID: {{item.sintaid}}</div>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-flex>
                </v-layout>
                <br>
                <v-layout justify-center text-xs-center>
                    <v-flex xs12 xs8 sm6 md4 mb-3 mt-4>
                        <h4 class="display-1">Focus and Scope</h4>
                    </v-flex>
                </v-layout>
                <h3
                    display-2
                >Topics of interest include all aspects of MSCEIS 2019 including, but not limited to:</h3>
                <v-layout wrap v-bind="keynote">
                    <v-flex xs12 sm12 md6 d-flex>
                        <v-card min-height="300">
                            <v-card-text class="subheading">
                                <p class="title">Track 1: Pure and Applied Mathematics</p>
                                <p>Scope: 
                                <ul>
                                    <li>Algebra</li>
                                    <li>Mathematical Physics</li>
                                    <li>Statistics</li>
                                    <li>Analysis</li>
                                    <li>Industrial Mathematics</li>
                                    <li>Dynamical Systems</li>
                                    <li>Combinatorial Mathematics</li>
                                </ul>
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6 d-flex-child>
                        <v-card min-height="300">
                            <v-card-text class="subheading">
                                <p class="title">Track 2: Science and Technology</p>
                                <p>Scope: 
                                <ul>
                                    <li>Material and Biomaterial</li>
                                    <li>Environmental Sciences</li>
                                    <li>Biotechnology</li>
                                    <li>Earth and Space Sciences</li>
                                    <li>Nuclear</li>
                                    <li>Food Science and Technology</li>
                                    <li>Nanotechnology</li>
                                    <li>Energy and Catalyst</li>
                                    <li>Instrumentation</li>
                                </ul>
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6 d-flex-child>
                        <v-card min-height="320">
                            <v-card-text class="subheading">
                                <p class="title">Track 3: Information and Technology</p>
                                <p>Scope: 
                                <ul>
                                    <li>Artificial Intelligence</li>
                                    <li>Machine Learning</li>
                                    <li>Computer Vision</li>
                                    <li>Natural Language Processing</li>
                                    <li>Control and Robotics</li>
                                    <li>Big Data and Data Mining</li>
                                    <li>Information System and IT Operation</li>
                                    <li>Software Engineering</li>
                                    <li>Computer Network and Security</li>
                                    <li>Mobile Computing</li>
                                </ul>
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6 d-flex>
                        <v-card min-height="320">
                            <v-card-text class="subheading">
                                <p
                                    class="title"
                                >Track 4: Mathematics, Science, and Computer Science Education</p>
                                <p>Scope: 
                                <ul>
                                    <li>Curriculum Development</li>
                                    <li>Learning Resources</li>
                                    <li>Assessment and Evaluation</li>
                                    <li>Teacher Professional Development</li>
                                    <li>Distance Learning</li>
                                    <li>Multimedia</li>
                                    <li>Higher Order Thinking</li>
                                    <li>Models of Teaching</li>
                                    <li>Educational Technology</li>
                                </ul>
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                        <iframe style="border: 0" height="120%" width="100%" src="./visitor.html"></iframe>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            invited1: [
                {
                    name: "Dr. Eng. Pakhrur Razi, M.Si.",
                    major: "Instrumentation Physics",
                    institution: "Universitas Negeri Padang",
                    sintaid: "5999238",
                    src: "./img/invited/pakhrur.jpeg"
                },
                {
                    name: "Prof. Dr. Manihar Situmorang, MSc., PhD.",
                    major: "Analytical Chemistry",
                    institution: "Universitas Negeri Medan",
                    sintaid: "5976591",
                    src: "./img/invited/manihar.jpeg"
                },
                {
                    name: "Prof. Dr. I Nengah Suparta, M.Si.",
                    major: "Mathematics",
                    institution: "Universitas Pendidikan Ganesha",
                    sintaid: "6026698",
                    src: "./img/invited/nengah.jpeg"
                },
                {
                    name: "Dra. Dwi Yulianti, M.Si.",
                    major: "Physics Education",
                    institution: "Universitas Negeri Semarang",
                    sintaid: "5994568",
                    src: "./img/invited/dwi.jpeg"
                },
                {
                    name: "Prof. Dr. Sarson W. Pomalato, M.Pd.",
                    major: "Mathematics Education",
                    institution: "Universitas Negeri Gorontalo",
                    sintaid: "-",
                    src: "./img/invited/sarson.jpeg"
                },
                {
                    name: "Prof. Dr. Orbanus Naharia, M.Si",
                    major: "Biology",
                    institution: "Universitas Negeri Manado",
                    sintaid: "6015780",
                    src: "./img/invited/dummy.png"
                }
            ],
            invited2: [
                {
                    name: "Dr. Dadan Rosana",
                    major: "Science Education",
                    institution: "Universitas Negeri Yogyakarta",
                    sintaid: "5990577",
                    src: "./img/invited/dummy.png"
                },
                {
                    name: "Dr. Sumari, M.Si",
                    major: "Chemistry",
                    institution: "Universitas Negeri Malang",
                    sintaid: "51667",
                    src: "./img/invited/sumari.jpeg"
                },
                {
                    name: "Prof. Dr. Hamzah Upu, M.Ed",
                    major: "Mathematics Education",
                    institution: "Universitas Negeri Makassar",
                    sintaid: "6035939",
                    src: "./img/invited/hamzah.jpeg"
                },
                {
                    name: "Prof. Dr. I Made Putrawan",
                    major: "Biology Education",
                    institution: "Universitas Negeri Jakarta",
                    sintaid: "6003199",
                    src: "./img/invited/dummy.png"
                },
                {
                    name: "Dr. Sukarmin, M.Pd",
                    major: "Chemistry Education",
                    institution: "Universitas Negeri Surabaya",
                    sintaid: "5988947",
                    src: "./img/invited/sukarmin.jpeg"
                },
                {
                    name: "Dr. Muhamad Nursalman",
                    major: "Computer Science",
                    institution: "Universitas Pendidikan Indonesia",
                    sintaid: "6143456",
                    src: "./img/invited/nursalman.jpeg"
                },
                {
                    name: "Prof. Dr. Wawan Setiawan",
                    major: "Computer Science Education",
                    institution: "Universitas Pendidikan Indonesia",
                    sintaid: "5977494",
                    src: "./img/invited/wawan.jpeg"
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
