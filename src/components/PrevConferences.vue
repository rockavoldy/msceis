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
                    <h1 display-4 class="primary--text">Previous Conferences</h1>
                </v-layout>
                <h2 display-3>(All published papers have been indexed by Scopus)</h2>
                <div class="subheading">
                    <ul>
                        <li>
                            MSCEIS 2018: October 27, 2018, Bandung, Indonesia.
                            <br>Status: All presented papers have been submitted to IOP.
                            <v-layout wrap>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis18-1.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis18-2.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis18-4.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis18-7.jpg"></v-img>
                                </v-flex>
                            </v-layout>
                        </li>
                        <li>
                            MSCEIS 2017: October 14, 2017, Bandung, Indonesia.
                            <br>Status: All presented papers have been published and indexed by Scopus.
                            <br>Here is the link showing papers of MSCEIS 2017 in Journal of Physics: Conference Series (IOP Science):
                            <a
                                href="https://iopscience.iop.org/issue/1742-6596/1013/1"
                            >https://iopscience.iop.org/issue/1742-6596/1013/1</a>
                            <v-layout wrap>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis17-1.jpeg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis17-2.jpeg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis17-3.jpeg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis17-4.jpeg"></v-img>
                                </v-flex>
                            </v-layout>
                        </li>
                        <li>
                            MSCEIS 2016: October 15, 2016, Bandung, Indonesia.
                            <br>Status: All presented papers have been published and indexed by Scopus.
                            <br>Here is the link showing papers of MSCEIS 2016 in Journal of Physics: Conference Series (IOP Science):
                            <a
                                href="https://iopscience.iop.org/issue/1742-6596/812/1"
                            >https://iopscience.iop.org/issue/1742-6596/812/1</a>
                            <v-layout wrap>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis16-1.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis16-2.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis16-3.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis16-4.jpg"></v-img>
                                </v-flex>
                            </v-layout>
                        </li>
                        <li>
                            MSCEIS 2015: October 17, 2015, Bandung, Indonesia.
                            <br>Status: All presented papers have been published and indexed by Scopus.
                            <br>Here is the link showing papers of MSCEIS 2015 in AIP Conference Proceedings:
                            <a
                                href="https://aip.scitation.org/toc/apc/1708/1?expanded=1708"
                            >https://aip.scitation.org/toc/apc/1708/1?expanded=1708</a>
                            <v-layout wrap>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis15-1.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis15-2.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis15-3.jpg"></v-img>
                                </v-flex>
                                <v-flex xs6 sm3 md3 lg3 xl3>
                                    <v-img src="./img/previous/msceis15-4.jpg"></v-img>
                                </v-flex>
                            </v-layout>
                        </li>
                    </ul>
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
                text: "About",
                disable: false,
                to: "#"
            },
            {
                text: "Previous Conferences",
                disable: true,
                to: "/previous"
            }
        ]
    })
};
</script>