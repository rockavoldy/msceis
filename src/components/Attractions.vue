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
                <h1 display-4 class="primary--text">Attractions</h1>
                <h2 display-3>Bandung</h2>
                <div class="text-xs-justify subheading">
                    <p>Bandung is the capital of West Java province in Indonesia. According to the 2015 census, it is Indonesia's fourth most populous city after Jakarta, Surabaya, and Bekasi with over 2.5 million inhabitants. At the meantime, Greater Bandung is the country's third largest metropolitan area with over 8 million inhabitants. Located 768 metres (2,520 feet) above sea level, approximately 140 kilometres (87 miles) southeast of Jakarta, Bandung has cooler year-round temperatures than most other Indonesian cities. The city lies on a river basin surrounded by volcanic mountains.</p>
                    <h3 display-2>Tourism</h3>
                    <p>Bandung is a popular weekend destination for residents of Jakarta. The cooler climate of the highland plantation area, variety of food, less expensive fashion shops located in factory outlets and distros, golf courses, and the zoo, are some of the attractions of the city. Bandung is also a popular shopping destination due to cheap textile and fashion products, especially for Malaysian and Singaporean tourists.</p>
                    <p>In the 1990s, local designers opened denim clothing stores along Jalan Cihampelas, which was transformed into a "jeans street". The city attracts people from other big cities to buy local fashion wares, as they are cheaper than branded items. Beside Jalan Cihampelas, many factory outlets also opened at Jalan Riau, Jalan Setiabudi, and Jalan Djuanda (known as Dago). Textile factories on the outskirts of Bandung have opened factory outlets on site selling what is marketed as sisa export (rejected or over-produced export quality items). Trans Studio Mall, Bandung Indah Plaza, Cihampelas Walk, Paris Van Java Mall and 23 Paskal Shopping Center are popular shopping centres in Bandung.</p>
                    <p>Significant tourist sites near Bandung include the Tangkuban Prahu volcano crater to the north, the striking Kawah Putih volcano lake, and Patenggang Lake, a lake surrounded by tea plantations about 50 kilometres (31 miles) to the south of the city.</p>
                    <v-layout row wrap text-xs-center>
                        <v-flex xs12 sm4 md4 lg4 xl4>
                            <v-img
                                src="./img/attractions/bandung1.jpg"
                                min-height="250"
                                min-width="250"
                            ></v-img>
                            <h3 display-2>Tangkuban Prahu Volcano Crater</h3>
                        </v-flex>
                        <v-flex xs12 sm4 md4 lg4 xl4>
                            <v-img
                                src="./img/attractions/bandung2.jpg"
                                min-height="250"
                                min-width="250"
                            ></v-img>
                            <h3 display-2>Kawah Putih Volcano Lake</h3>
                        </v-flex>
                        <v-flex xs12 sm4 md4 lg4 xl4>
                            <v-img
                                src="./img/attractions/bandung3.jpg"
                                min-height="250"
                                min-width="250"
                            ></v-img>
                            <h3 display-2>Situ Patenggang Lake</h3>
                        </v-flex>
                    </v-layout>
                    <br>
                    <p>To view the Bandung Basin clearly in its mountain surroundings, visitors travel to the Bongkor protected forest area (kawasan hutan lindung), Saung Daweung and Arcamanik; to the slopes of West Manglayang Mountain in an area known as Caringin Tilu, with entry from Padasuka and Cicaheum to the north. The forest is located in 1,500 metres (4,900 feet) above sea level and is covered with pine trees managed by a government corporation Perhutani and can be accessed with 30 minutes drive from downtown. Visitors going to the north of the city also find Taman Hutan Raya Ir. H. Djuanda. The Cicaheum area also hosts Bukit Moko, a tourist spot famous for its views and its steel statue of a giant star called Puncak Bintang. Bandung has several museums that should be visited by tourists, such as the Geological Museum of Bandung, the Indonesia Postal Museum, Sri Baduga Museum, and the Asian-African Conference Museum.</p>
                    <v-layout wrap v-bind="checkSizeSm">
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-img src="./img/attractions/2/top1.jpg" width="100%" height="350"></v-img>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-img src="./img/attractions/2/top2.jpg" width="100%" height="350"></v-img>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-layout wrap v-bind="checkSizeXs">
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-layout column>
                                        <v-flex>
                                            <v-img
                                                src="./img/attractions/2/mid1-1.jpg"
                                                width="100%"
                                                height="160"
                                            ></v-img>
                                        </v-flex>
                                        <v-flex>
                                            <v-img
                                                src="./img/attractions/2/mid1-2.jpg"
                                                width="100%"
                                                height="160"
                                            ></v-img>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/mid2.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-layout wrap v-bind="checkSizeXs">
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/mid3.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/mid4.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-layout wrap v-bind="checkSizeXs">
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/bot1.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/bot2.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-layout wrap v-bind="checkSizeXs">
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/bot3.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                                <v-flex xs6 sm6 md6 lg6 xl6>
                                    <v-img
                                        src="./img/attractions/2/bot4.jpg"
                                        width="100%"
                                        height="328"
                                    ></v-img>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <br>
                    <h3 display-2>Old Buildings Tourism</h3>
                    <!-- lanjutkeun do -->
                    <v-layout>
                        <v-flex xs12>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/1.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>The building is an example of a harmonious mixture between West and East architectural styles, particularly the Italian Renaissance style of arch structures in the wings and pendopo-like structures commonly found in Java in the middle section. The building is known as Gedung Sate, named after the distinguished small satay-shaped structure on the roof, and is today used as the head office of the West Java provincial government and House of Representatives.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
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
                text: "Attractions",
                disable: true,
                to: "/attractions"
            }
        ]
    }),
    computed: {
        checkSizeSm() {
            const binding = {};
            if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
            return binding;
        },
        checkSizeXs() {
            const binding = {};
            if (this.$vuetify.breakpoint.xsOnly) binding.column = true;
            return binding;
        }
    }
};
</script>