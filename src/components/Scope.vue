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
                <h2
                    display-3
                >Topics of interest include all aspects of MSCEIS 2019 including, but not limited to:</h2>
                <v-layout wrap v-bind="checkSize">
                    <v-flex xs12 sm12 md6>
                        <v-card min-height="300">
                            <v-card-text class="subheading">
                                <p class="title">Pure and Applied Mathematics</p>
                                <ul>
                                    <li>Algebra</li>
                                    <li>Mathematical Physics</li>
                                    <li>Statistics</li>
                                    <li>Analysis</li>
                                    <li>Industrial Mathematics</li>
                                    <li>Dynamical Systems</li>
                                    <li>Combinatorial Mathematics</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                        <v-card min-height="300">
                            <v-card-text class="subheading">
                                <p class="title">Science and Technology</p>
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
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                        <v-card min-height="320">
                            <v-card-text class="subheading">
                                <p class="title">Information and Technology</p>
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
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                        <v-card min-height="320">
                            <v-card-text class="subheading">
                                <p
                                    class="title"
                                >Mathematics, Science, and Computer Science Education</p>
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
                            </v-card-text>
                        </v-card>
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
                text: "Scope",
                disable: true,
                to: "/scope"
            }
        ]
    }),
    computed: {
        checkSize() {
            const binding = {};
            if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
            return binding;
        }
    }
};
</script>
