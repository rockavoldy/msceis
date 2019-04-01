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
                    <v-layout wrap>
                        <v-flex xs12>
                            <h3 display-2>Old Buildings Tourism</h3>
                            <h4 display-1>Gedung Sate</h4>
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
                            <h4 display-1>Gedung Merdeka</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/2.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Is an art-deco building in Jalan Asia-Afrika, Bandung, Indonesia. Today it serves as a museum displaying collections and photographs of the Asian–African Conference, the first Non-Aligned Movement that was held there in 1955.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Hotel Savoy Homan</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/3.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>The Savoy homann hotel architectural design by Albert Aalbers in 1939 is one of the most significant examples of the Art Deco style for which Bandung is renowned.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <v-flex xs12>
                            <h3 display-2>Outdoor Tourism</h3>
                            <h4 display-1>Tangkuban Prahu Volcano Crater</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/4.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>It is a popular tourist attraction where tourists can hike or ride to the edge of the crater to view the hot water springs and boiling mud up close, and buy eggs cooked on the hot surface. Together with Mount Burangrang and Bukit Tunggul, it is a remnant of the ancient Mount Sunda after the plinian eruption caused the Caldera to collapse. These places can be visited from the city center takes about 1 hour.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Ciater</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/5.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Ciater Hot Spring is a nice park with small pools in which we can sit or swim. The streams and pools are fed by warm mineral springs, which are created by the heat from nearby volcanoes. About 30 minutes from Tangkuban Perahu, and 1 hour from Bandung.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Tebing Keraton</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/6.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Tebing Keraton can be simply interpreted as “The Royal (Palace) Cliff”. The name perfectly illustrates the majestic vista of north Bandung’s fascinating natural landscapes as ones stands on the cliff. At 1,200 meters above sea level, Tebing Keraton is located within the Ir H Djuanda Forest Park, at Ciburial Village, Cimenyan sub-district, in the Bandung Regency. At the main area, there is a rock that bulges over the edge of the cliff which makes it a perfect place to observe over the incredible natural surroundings. These places can be visited from the city center takes about 30 minutes.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Maribaya Natural Hot Spring Resort</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/7.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Maribaya is well known for its hot springs, the sulfur-laden water, a comfortable place for swimming and enjoying the scenery of a 25-meter waterfall set against a steep mountain cliff. These places can be visited from the city center takes about 1 hour.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Kawah Putih Volcano Lake</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/8.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>The Kawah Putih site was opened to visitors in 1987. The lake is 2,430 meters above sea level so the local climate is often quite chilly (temperatures are frequently around 10 degrees Celsius). This makes a brisk change from the humidity of the north Java plain and the capital city of Jakarta. Kawah Putih is a sizeable highly acid lake (pH 0.5-1.3) which changes colour from bluish to whitish green, or brown, depending on the concentration of sulfur and the temperature or the oxidation state.[4] The sand and rocks surrounding the lake have been also leached into whitish colours through interaction with the acidic lake waters (with possible mineral precipitation as well). These places can be visited from the city center takes about 1 hour 30 minutes.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Situ Patenggang Lake</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/9.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Patenggang Lake (Indonesian: Situ Patenggang) is a lake located in the area of natural tourist attractions in the southern Bandung city, West Java, Indonesia, to be exact it is in Ciwidey village. Located at an altitude of 1600 meters above sea level, this lake has a very exotic landscape. These places can be visited from the city center takes about 1 hour 30 minutes.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <v-flex xs12>
                            <h3 display-2>Culture Tourism</h3>
                            <h4 display-1>Saung Udjo</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/10.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>House of Angklung is one you should not miss. Famed for its Angklung, the local traditional bamboo musical instrument, here you can watch a children orchestra present delightful music shaking the Angklung and perform Sundanese dances and music. Here you may also learn how to play the Angklung yourself and become part of the orchestra. These places can be visited from the city center takes about 15 minutes.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <v-flex xs12>
                            <h3 display-2>Culinary</h3>
                            <h4 display-1>Serabi</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/11.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>is an Indonesian pancake that is made from rice flour with coconut milk or shredded coconut as an emulsifier. Most of traditional serabi tastes sweet, as the pancake is usually eaten with kinca or thick golden-brownish-colored coconut sugar syrup. However, another savoury version also existed that uses oncom toppings.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Peuyeum Bollen</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/12.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Peuyeum bolen is a typical Bandung snacks made from peyeum (made from fermented cassava), selected cheese wrapped in crispy pastry skin dough. The combination of taste and premium quality makes this snacks is very popular in Bandung, Other variants that are also consumer favorites are bollen banana, chocolate cheese, durian, pineapple. Address : Jl. H. Akbar (Kebon Kawung) No. 4 Bandung Jawa Barat – Indonesia Telp.(022) 4231355, Near Bandung railway station.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <h4 display-1>Batagor</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/13.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Batagor baso tahu goreng (literally means, fried meatballs & beancurd) is one of the most well-sought specialty. Made from blended fish and beancurd, with a special peanut sauce, batagor's popularity remains constant. Address : Jl. Kebon Kawung No. 48 Bandung. Near Bandung railway station.</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <v-flex xs12>
                            <h3 display-2>Beverages</h3>
                            <h4 display-1>Es Cendol</h4>
                            <v-layout>
                                <v-flex>
                                    <v-responsive aspect-ratio="16/9" class="hidden-xs-only">
                                        <v-img
                                            src="./img/attractions/3/14.jpg"
                                            width="250"
                                            height="150"
                                        ></v-img>
                                    </v-responsive>&nbsp;&nbsp;&nbsp;&nbsp;
                                </v-flex>
                                <v-flex xs12>
                                    <div>
                                        <p>Es cendol, made of blended/grinded rice, palm sugar, and coconut milk, is delightful on a hot day. Address: Jl. Inhoftank No.64, Pelindung Hewan, Astanaanyar, Kota Bandung, Jawa Barat 40243.</p>
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