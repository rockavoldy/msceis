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
                <v-carousel>
                    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
                <br>
                <h1 display-4 class="primary--text">Grand Mercure Hotel Bandung</h1>
                <div class="subheading">
                    <p>
                        <b>Address:</b>&nbsp;Jl. DR. Setiabudhi No.269-275, Isola, Sukasari, Kota Bandung, Jawa Barat 40154
                        <br>
                        <b>Phone:</b>&nbsp;(022) 82000000
                        <br>
                        <b>Fax:</b>&nbsp;(022) 82000082
                        <br>
                        <b>Email:</b>&nbsp;
                        <a
                            href="mailto:reservation@mercure-bandung-setiabudi.com"
                        >reservation@mercure-bandung-setiabudi.com</a>
                        <br>
                        <b>Website:</b>&nbsp;
                        <a
                            href="http://www.grandmercure.com/id/GRAND-MERCURE-BANDUNG-SETIABUDI"
                            target="_blank"
                        >http://www.grandmercure.com/id/</a>
                    </p>
                </div>
                <div class="subheading">
                    <p>This upscale modern hotel is 8 km from the Gedung Sate government building, 10 km from the shops of Braga Street, and 12 km from the Trans Studio Bandung indoor theme park.</p>
                    <p>Contemporary rooms offer Wi-Fi, flat-screen TVs and minifridges; some have city, garden or pool views. Upgraded quarters add complimentary minibars, and tea and coffeemakers. Room service is available.</p>
                    <p>There's a refined Chinese eatery, and a laid-back international restaurant with live cooking stations, plus a chic lobby bar with floor-to-ceiling windows, a sky bar with city views, and a breezy bar by a heated outdoor pool. There's also a gym, a spa and a kids' club.</p>
                    <br>
                    <h2 display-3 class="primary--text">How to reach the Venue</h2>
                    <ul>
                        <li>
                            <b>From Hussein Sastra Negara Airport, Bandung</b>
                        </li>The venue is about 22 minutes (8.5 km) from the airport via Jl. Sukajadi.
                        <li>
                            <b>From Soekarno-Hatta Airport, Jakarta</b>
                        </li>Take a 12-minutes flight from Soekarno-Hatta Airport.
                        <li>
                            <b>From Bali</b>
                        </li>Take 1 hour 45 minutes flight from I Gusti Ngurah Rai Airport.
                        <li>
                            <b>From Kuala Lumpur, Malaysia</b>
                        </li>Take 2 hour 7 minutes flight from Kuala Lumpur International Airport.
                    </ul>
                </div>
                <br>
                <v-layout>
                    <v-flex subheading hidden-sm-and-down>
                        <h2 display-3 class="primary--text">Location</h2>
                        <v-card min-height="300" max-height="600">
                            <v-card-text>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.298474381877!2d107.59282331388223!3d-6.85478279504624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b7af9b3289%3A0x72b029ec1dd0124a!2sGrand+Mercure+Setiabudi!5e0!3m2!1sen!2sid!4v1551827247304"
                                    width="100%"
                                    height="400"
                                    frameborder="0"
                                    style="border:0"
                                    allowfullscreen
                                ></iframe>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex subheading>
                        <h2 display-3 class="primary--text">Public Transportation to Reach the Venue</h2>
                        <ul>
                            <li>
                                <b>From Soekarno-Hatta Airport, Jakarta</b>
                            </li>If you have landed at Soekarno-Hatta Airport, you should use one of the following transportation to
                            <a href="https://www.google.co.id/maps/place/Bandung">Bandung</a>:
                            <ol>
                                <li>X-Trans Travel</li>Cost : IDR 150.000
                                <li>Cipaganti Travel</li>Cost : IDR 120.000
                            </ol>after arriving in Bandung, you must use the following public transport to
                            <a
                                href="http://www.grandmercure.com/id/GRAND-MERCURE-BANDUNG-SETIABUDI"
                                target="_blank"
                            >Grand Mercure</a>:
                            <ol>
                                <li>
                                    <a href="http://www.bluebirdgroup.com/">Blue Bird Taxi</a>
                                </li>Cost : IDR 100.000
                                <br>Phone : +62 22 7561234
                                <br>Website : http://www.bluebirdgroup.com/
                                <br>
                                <li>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=in"
                                        title="Grab"
                                    >Grab</a> (on Smartphone)
                                </li>Cost : IDR 50.000
                                <br>Website : https://www.grab.com/id/
                            </ol>
                            <li>
                                <b>From Hussein Sastra Negara Airport, Bandung</b>
                            </li>If you have landed at Hussein Sastra Negara Airport, you just only use public vehicles to
                            <a
                                href="http://www.grandmercure.com/id/GRAND-MERCURE-BANDUNG-SETIABUDI"
                                target="_blank"
                            >Grand Mercure</a> like:
                            <ol>
                                <li>
                                    <a href="http://www.bluebirdgroup.com/" title>Blue Bird Taxi</a>
                                </li>Cost : IDR 100.000
                                <br>Phone : +62 22 7561234
                                <br>Website : http://www.bluebirdgroup.com/
                                <br>
                                <li>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=in"
                                        title="Grab"
                                    >Grab</a> (on Smartphone)
                                </li>Cost : IDR 50.000
                                <br>Website : https://www.grab.com/id/
                            </ol>
                        </ul>
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
                text: "Venue",
                disable: true,
                to: "/venue"
            }
        ],
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
    })
};
</script>