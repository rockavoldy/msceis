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
        <br />
        <h1 display-4 class="primary--text">Submission System</h1>
        <div class="subheading text-xs-justify">
          <p>
            Authors are requested to submit
            <b class="teal--text">an abstract</b> to the Organizing Committee by
            <b class="red--text">
              <strike>August 30, 2019 for phase 3 (Extended)</strike>
            </b>. Please take a look at the Important dates in detail
            <router-link to="/dates" style="text-decoration: none">here</router-link>. The abstract must contain the following sections: introduction/contextual information, aim of the study, method, results, conclusion/contributions, and keywords. The abstract must have no longer than 200 words.
          </p>
          <h3 display-2 class="red--text">[IMPORTANT]&nbsp;</h3>
          <p>
            To submit an abstract, authors must register first (
            <a
              href="http://msceis2019.upiconf.org/kfz/"
              target="_blank"
              style="text-decoration: none"
            >click here</a>). Then they can submit their abstracts by logging in to this site (menu “
            <a
              href="http://msceis2019.upiconf.org/kfz/"
              target="_blank"
              style="text-decoration: none"
            >Submission System</a>” then “Login”). The submitted abstracts will be selected for presentation. The manuscripts (full papers) should be submitted only after the abstracts are accepted. The full paper must be submitted according to the corresponding schedule on the important dates.
            <br />
            <br />Please find the full-paper template of EAI Core Series here (
            <a
              href="./downloads/eai-template.docx"
            >docx</a> &
            <a href="./downloads/eai-template.pdf">pdf</a>).
            Please go to “
            <a
              href="http://msceis2019.upiconf.org/kfz/"
              target="_blank"
              style="text-decoration: none"
            >Submission System</a>” menu then “
            <a
              href="http://msceis2019.upiconf.org/kfz/"
              target="_blank"
              style="text-decoration: none"
            >Login</a>” to submit the full paper.
          </p>
          <p class="subheading text-xs-justify">
            All accepted and presented papers will be published by EAI CORE Series (
            <a
              href="https://eudl.eu/series/CORE"
            >https://eudl.eu/series/CORE</a>), which is a publisher indexed by Web of Science, Scopus, etc., Consequently, any unpresented paper won't be published. Moreover, some selected papers will be submitted to the following international journals:
          </p>
          <ul>
            <li>
              Indonesian Journal of Science & Technology (
              <a
                href="http://ejournal.upi.edu/index.php/ijost/"
              >http://ejournal.upi.edu/index.php/ijost/</a>), Indexed by Scopus.
            </li>
            <li>EAI Transactions Journal (To be confirmed), Indexed by Scopus.</li>
            <li>
              Jurnal pengajaran MIPA (JPMIPA,
              <a
                href="http://ejournal.upi.edu/index.php/jpmipa"
              >http://ejournal.upi.edu/index.php/jpmipa</a>), Accredited by DIKTI, Indonesia
            </li>
          </ul>
          <br />
          <h1 display-4 class="primary--text">Registration Fee</h1>
          <h3 display-2 class="red--text">[IMPORTANT]&nbsp;</h3>
          <p>
            After making the payment, authors
            <b class="red--text">MUST</b> upload the transfer proof via this website
            <b class="red--text">(NOT Email)</b>. Authors can upload by logging in to our
            <a
              href="http://msceis2019.upiconf.org/kfz/"
              target="_blank"
              style="text-decoration: none"
            >Submission System</a>. Payment receipt can be downloaded directly from your account once your payment is confirmed by the committee.
          </p>
          <br />
          <h3 display-2 class="text-xs-center">Registration Fee</h3>
          <!-- <h3
            display-2
            v-if="checkWidth == false"
          >Please use landscape mode and reload the page to view this content on your phone.</h3>-->
          <v-container fluid class="hidden-md-and-up">
            <v-layout class="text-xs-left" wrap>
              <v-flex xs12 class="text-xs-center">
                <b>Early Bird (Until September 3, 2019)</b>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>&nbsp;</v-flex>
                  <v-flex xs4 sm5>Oral Presenter</v-flex>
                  <v-flex xs4 sm5>Accompany Person</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>General</v-flex>
                  <v-flex xs4 sm5>2.000.000 IDR</v-flex>
                  <v-flex xs4 sm5>600.000 IDR</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>&nbsp;</v-flex>
                  <v-flex xs4 sm5>300 USD</v-flex>
                  <v-flex xs4 sm5>50 USD</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>Student</v-flex>
                  <v-flex xs4 sm5>1.500.000 IDR</v-flex>
                  <v-flex xs4 sm5>600.000 IDR</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>&nbsp;</v-flex>
                  <v-flex xs4 sm5>275 USD</v-flex>
                  <v-flex xs4 sm5>50 USD</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm3>Presenter from UPI</v-flex>
                  <v-flex xs4 sm4>&nbsp;</v-flex>
                  <v-flex xs4 sm5>1.000.000 IDR</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="text-xs-center">
                <b>Regular (Until October 4, 2019)</b>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>&nbsp;</v-flex>
                  <v-flex xs4 sm5>Oral Presenter</v-flex>
                  <v-flex xs4 sm5>Accompany Person</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>General</v-flex>
                  <v-flex xs4 sm5>2.500.000 IDR</v-flex>
                  <v-flex xs4 sm5>600.000 IDR</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>&nbsp;</v-flex>
                  <v-flex xs4 sm5>350 USD</v-flex>
                  <v-flex xs4 sm5>50 USD</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>Student</v-flex>
                  <v-flex xs4 sm5>2.200.000 IDR</v-flex>
                  <v-flex xs4 sm5>600.000 IDR</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm2>&nbsp;</v-flex>
                  <v-flex xs4 sm5>320 USD</v-flex>
                  <v-flex xs4 sm5>50 USD</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs4 sm3>Presenter from UPI</v-flex>
                  <v-flex xs4 sm4>&nbsp;</v-flex>
                  <v-flex xs4 sm5>1.000.000 IDR</v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fluid class="hidden-sm-and-down">
            <v-layout class="text-xs-justify">
              <v-flex xs2>
                <v-layout column>
                  <v-flex xs2>&nbsp;</v-flex>
                  <v-flex xs2>&nbsp;</v-flex>
                  <v-flex xs2>&nbsp;</v-flex>
                  <v-flex xs2>Oral Presenter</v-flex>
                  <v-flex xs2>Accompany Person</v-flex>
                </v-layout>

                <v-layout column class="hidden-md-and-up">
                  <v-flex xs2 class="hidden-xs-only">&nbsp;</v-flex>
                  <v-flex xs2>&nbsp;</v-flex>
                  <v-flex xs2>&nbsp;</v-flex>
                  <v-flex xs2>Oral Presenter</v-flex>
                  <v-flex xs2>Accompany Person</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs10 sm10 md10 lg10 xl10>
                <v-layout v-bind="checkSize">
                  <v-flex xs12>
                    <v-layout column>
                      <v-flex xs12>
                        <b>Early Bird (Until September 3, 2019)</b>
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
                  <br class="hidden-sm-and-up" />
                  <br class="hidden-sm-and-up" />
                  <v-flex xs12>
                    <br class="hidden-md-and-up" />
                    <v-layout column>
                      <v-flex xs12>
                        <b>Regular (Until October 4, 2019)</b>
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
                          <v-flex xs3>600.000</v-flex>
                          <v-flex xs3>600.000</v-flex>
                          <v-flex xs3>50</v-flex>
                          <v-flex xs3>50</v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs2>Presenter from UPI</v-flex>
              <v-flex xs10>1.000.000</v-flex>
            </v-layout>
          </v-container>
          <br />
          <br />
          <p>
            The registration fee should be paid by bank transfer to:
            <br />Bank :
            <b>Bank Negara Indonesia (BNI)</b>
            <br />Account Holder Name :
            <b>BENDAHARA MSCEIS</b>
            <br />Account Number :
            <b>0709905948</b>
            <br />Swift Code :
            <b>BNINIDJAXXX</b>
            <br />
            <br />We do not provide printed local proceedings onsite, please contact us if you need one. There is an additional charge to ship it to your address.
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    width: 0,
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
    },
    checkWidth() {
      if (window.innerWidth >= 720) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>