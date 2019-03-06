<template>
    <v-app>
        <h1
            display-4
            class="blue--text text-xs-center"
        >2019 7th Mathematics, Science, and Computer Science Education International Seminar (MSCEIS)</h1>
        <v-toolbar>
            <v-toolbar-items>
                <v-btn flat to="/">
                    <span class="headline">MSCEIS</span>
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-md-and-down">
                <v-menu flat open-on-hover bottom>
                    <template v-slot:activator="{on}">
                        <v-btn flat v-on="on">
                            <span>About</span>
                            <v-icon>arrow_drop_down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-tile to="committee">
                            <v-list-tile-title>Committee</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile to="speakers">
                            <v-list-tile-title>Keynote & Invited Speakers</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile to="scope">
                            <v-list-tile-title>Scope</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-btn flat to="papers">
                    <span>Call For Papers</span>
                </v-btn>
                <v-btn flat to="submission">
                    <span>Submission & Registration</span>
                </v-btn>
                <v-btn flat to="dates">
                    <span>Important Dates</span>
                </v-btn>
                <v-btn flat to="venue">
                    <span>Venue</span>
                </v-btn>
                <v-btn flat to="visa">
                    <span>Visa Information</span>
                </v-btn>
                <v-btn flat to="#">
                    <span>Attractions</span>
                </v-btn>
                <v-btn flat to="#">
                    <span>Contact</span>
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" right temporary fixed min-width="100%" id="drawer">
            <v-list>
                <v-list-tile>
                    <v-icon @click="drawer = !drawer">close</v-icon>
                </v-list-tile>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>About</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                    <v-list-tile to="committee">
                        <v-list-tile-content>
                            <v-list-tile-title>Committee</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="speakers">
                        <v-list-tile-content>
                            <v-list-tile-title>Keynote & Invited Speakers</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="scope">
                        <v-list-tile-content>
                            <v-list-tile-title>Scope</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile to="papers">
                    <v-list-tile-content>
                        <v-list-tile-title>Call For Papers</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="submission">
                    <v-list-tile-content>
                        <v-list-tile-title>Submission & Registration</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="dates">
                    <v-list-tile-content>
                        <v-list-tile-title>Important Dates</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="venue">
                    <v-list-tile-content>
                        <v-list-tile-title>Venue</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="visa">
                    <v-list-tile-content>
                        <v-list-tile-title>Visa Information</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="#">
                    <v-list-tile-content>
                        <v-list-tile-title>Attractions</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="#">
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-layout v-if="$route.path == '/'">
            <v-carousel>
                <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
        </v-layout>

        <v-content>
            <router-view></router-view>
        </v-content>
        <v-card>
            <v-layout v-bind="checkSize" fill-height>
                <v-flex xs12 sm12 md4 lg3 class="blue" text-xs-center>
                    <br>
                    <v-img src="./img/msceis.jpg" height="40" contain></v-img>
                    <v-card-title
                        class="body-2 white--text"
                    >Mathematics, Science, and Computer Science education for Addressing challenges and implementations of Revolution-Industry 4.0</v-card-title>
                </v-flex>
                <v-flex xs12 sm12 md4 lg3 class="light-blue lighten-3">
                    <v-card-text>
                        <div class="title mb-2 blue--text">
                            <b>Contact Us</b>
                        </div>
                        <div class="subheading blue-grey--text">
                            FPMIPA 2nd Floor of FPMIPA A Building Universitas Pendidikan Indonesia
                            <br>
                            <b>Website:</b>
                            <a href="http://msceis.org/">&nbsp;http://msceis.org/</a>
                            <br>
                            <b>Email:</b>
                            <a href="mailto: msceis@upi.edu">&nbsp;msceis@upi.edu</a>
                        </div>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm12 md4 lg6 class="light-blue lighten-3">
                    <v-card-text>
                        <v-layout row fill-height align-center>
                            <v-flex xs6 sm5 md2>
                                <v-img src="./img/logo/upi.png" max-height="70" contain></v-img>
                            </v-flex>
                            <v-flex xs6 sm7 md10>
                                <v-img src="./img/logo/amli.png" max-height="70" contain></v-img>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-card>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            drawer: null,
            items: [
                {
                    src: "./img/carousels/alun1.jpg"
                },
                {
                    src: "./img/carousels/chicago1.jpg"
                },
                {
                    src: "./img/carousels/la1.jpg"
                }
            ]
        };
    },
    computed: {
        checkSize() {
            const binding = {};
            if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
            return binding;
        }
    }
};
</script>
