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
                <h1 display-4 class="primary--text">Submission System</h1>
                <div class="subheading text-xs-justify">
                    <p>
                        Authors are requested to submit
                        <b class="teal--text">an abstract</b> to the Organizing Committee by
                        <b
                            class="red--text"
                        >(May 1, 2019 for phase 1)</b>. Please take a look at the Important dates in detail
                        <a
                            href="#"
                            target="_blank"
                        >here</a>. The abstract must contain the following section: introduction/contextual information, aim of the study, method, results, conclusion/contributions, and keywords. The abstract must have no longer than 200 words.
                    </p>
                    <h3 display-2 class="red--text">[IMPORTANT]&nbsp;</h3>
                    <p>
                        To submit an abstract, authors must register first (
                        <a
                            href="http://aasec.conference.upi.edu/2019/submission/"
                            target="_blank"
                        >click here</a>). Then they can submit their abstracts by logging in to this site (menu “
                        <a
                            href="http://aasec.conference.upi.edu/2019/submission/"
                            target="_blank"
                        >Submission System</a>” then “Login”). The submitted abstracts will be selected for presentation. The manuscripts (full papers) should be submitted only after the abstracts are accepted. The paper must be submitted
                        <b
                            class="teal--text"
                        >two weeks</b> after the conference day
                        <b class="red--text">(July 1, 2019 for Phase 1)</b>. Please go to “
                        <a
                            href="http://aasec.conference.upi.edu/2019/submission/"
                            target="_blank"
                        >Submission System</a>” menu then “
                        <a
                            href="http://aasec.conference.upi.edu/2019/submission/"
                            target="_blank"
                        >Login</a>” to submit the full paper.
                    </p>
                    <br>
                    <span class="title">Registration Fee</span>
                    <h3 display-2 class="red--text">[IMPORTANT]&nbsp;</h3>
                    <p>
                        After making the payment, author
                        <b class="red--text">MUST</b> upload the transfer proof via this website
                        <b class="red--text">(NOT Email)</b>. Author can upload by logging in to our
                        <a
                            href="http://aasec.conference.upi.edu/2019/submission/"
                            target="_blank"
                        >Submission System</a>. Payment receipt can be downloaded directly from your account once your payment is confirmed by the committee.
                    </p>
                    <br>
                    <v-container grid-list-sm>
                        <v-layout class="text-xs-justify">
                            <v-flex xs2>
                                <v-layout column>
                                    <v-flex xs2>&nbsp;</v-flex>
                                    <v-flex xs2>&nbsp;</v-flex>
                                    <v-flex xs2>&nbsp;</v-flex>
                                    <v-flex xs2>Oral Presenter</v-flex>
                                    <v-flex xs2>Accompany Person</v-flex>
                                </v-layout>
                                <br>
                                <v-layout column class="hidden-md-and-up">
                                    <v-flex xs2>&nbsp;</v-flex>
                                    <v-flex xs2>&nbsp;</v-flex>
                                    <v-flex xs2>&nbsp;</v-flex>
                                    <v-flex xs2>Oral Presenter</v-flex>
                                    <v-flex xs2>Accompany Person</v-flex>
                                </v-layout>
                            </v-flex>
                            <v-layout v-bind="checkSize">
                                <v-flex xs10 sm10 md5>
                                    <v-layout column>
                                        <v-flex xs12>
                                            <b>Early Bird</b>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs6>Local (IDR)</v-flex>
                                                <v-flex xs6>International (USD)</v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs3>General</v-flex>
                                                <v-flex xs3>Student</v-flex>
                                                <v-flex xs3>General</v-flex>
                                                <v-flex xs3>Student</v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs3>2.000.000</v-flex>
                                                <v-flex xs3>1.500.000</v-flex>
                                                <v-flex xs3>300</v-flex>
                                                <v-flex xs3>275</v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs3>600.000</v-flex>
                                                <v-flex xs3>600.000</v-flex>
                                                <v-flex xs3>50</v-flex>
                                                <v-flex xs3>50</v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <br>
                                <br>
                                <v-flex xs10 sm10 md5>
                                    <v-layout column>
                                        <v-flex xs12>
                                            <b>Regular (Until September 25, 2019)</b>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs6>Local (IDR)</v-flex>
                                                <v-flex xs6>International (USD)</v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs3>General</v-flex>
                                                <v-flex xs3>Student</v-flex>
                                                <v-flex xs3>General</v-flex>
                                                <v-flex xs3>Student</v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs3>2.500.000</v-flex>
                                                <v-flex xs3>2.200.000</v-flex>
                                                <v-flex xs3>350</v-flex>
                                                <v-flex xs3>320</v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row>
                                                <v-flex xs3>600.000
                                                    <br>
                                                    <br>
                                                </v-flex>
                                                <v-flex xs3>600.000</v-flex>
                                                <v-flex xs3>50</v-flex>
                                                <v-flex xs3>50</v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-layout>
                        <v-layout>
                            <v-flex xs2>UPI Presenter</v-flex>
                            <v-flex xs10>1.000.000</v-flex>
                        </v-layout>
                    </v-container>
                    <br>
                    <br>
                    <p>
                        The registration fee should be paid by bank transfer to:
                        <br>Bank :
                        <b>Bank Negara Indonesia (BNI)</b>
                        <br>Account Holder Name :
                        <b>BENDAHARA MSCEIS</b>
                        <br>Account Number :
                        <b>0709905948</b>
                        <br>Swift Code :
                        <b>BNINIDJAXXX</b>
                        <br>
                        <br>We do not provide printed local proceedings onsite, please contact us if you need one. There is an additional charge to ship it to your address.
                    </p>
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
                text: "Submission and Registration",
                disable: true,
                to: "/submission"
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