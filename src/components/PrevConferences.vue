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
                <h1 display-4>Published Papers</h1>
                <div class="subheading">
                    <b>(All published papers have been indexed by Scopus)</b>
                    <ul>
                        <li>
                            Here is the link showing papers of MSCEIS 2017 in Journal of Physics: Conference Series (IOP Science):
                            <a
                                href="https://iopscience.iop.org/issue/1742-6596/1013/1"
                            >https://iopscience.iop.org/issue/1742-6596/1013/1</a>
                        </li>
                        <li>
                            Here is the link showing papers of MSCEIS 2016 in Journal of Physics: Conference Series (IOP Science):
                            <a
                                href="https://iopscience.iop.org/issue/1742-6596/812/1"
                            >https://iopscience.iop.org/issue/1742-6596/812/1</a>
                        </li>
                        <li>
                            Here is the link showing papers of MSCEIS 2015 in AIP Conference Proceedings:
                            <a
                                href="https://aip.scitation.org/toc/apc/1708/1?expanded=1708"
                            >https://aip.scitation.org/toc/apc/1708/1?expanded=1708</a>
                        </li>
                    </ul>
                </div>
                <br>
                <h1 display-4>Documentations</h1>
                <h2 display-3>MSCEIS 2018</h2>
                <v-layout wrap>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis18-1.jpg"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis18-2.jpg"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis18-4.jpg"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis18-7.jpg"></v-img>
                    </v-flex>
                </v-layout>
                <br>
                <h2 display-3>MSCEIS 2017</h2>
                <v-layout wrap>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis17-1.jpeg"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis17-2.jpeg"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis17-3.jpeg"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-img src="./img/previous/msceis17-4.jpeg"></v-img>
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
                text: "Previous Conferences",
                disable: true,
                to: "/previous"
            }
        ]
    })
};
</script>