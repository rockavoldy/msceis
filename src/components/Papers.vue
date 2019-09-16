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
        <h1 display-4 class="blue--text text-xs-center">Call for Papers</h1>
        <div class="subheading text-xs-justify">
          <p>
            Dear Friends and Colleagues,
            <br>We take great pleasure to invite you to submit research article in Mathematics, Science, and Computer Science Education International Seminar (MSCEIS) 2019. It is an annual conference which held by many domestic and overseas universities. It is held by the Faculty of Mathematics and Natural Science Education, Universitas Pendidikan Indonesia (UPI) and the collaboration with 12 University associated in Asosiasi MIPA LPTK Indonesia (AMLI) consisting of UNNES, UPI, UNY, UM, UNJ, UNIMED, UNP, UNIMA, UNM, UNDHIKSA, UNG, and UNESA.
            <br>
            <br>In this year, MSCEIS 2019 takes the following theme:
            <i class="green--text">
              <b>"Mathematics, Science, and Computer Science Education for Addressing Challenges and Implementations of Revolution-Industry 4.0"</b>
            </i>. It will be held on October 12, 2019 in Bandung, West Java, Indonesia.
            <br>
            <br>
            <router-link to="/attraction" target="_blank" style="text-decoration: none">Bandung</router-link> is the capital of West Java province in Indonesia and Indonesia's fourth largest city after Jakarta, Surabaya and Medan, make it the third largest city by population, with over 2.4 million, and Greater
            <router-link to="/attraction" target="_blank" style="text-decoration: none">Bandung</router-link> made up of 2 municipalities and 38 districts, making it the nation's 2nd largest metropolitan area with 6,965,655 inhabitants at the 2010 census. Located 768 metres (2,520 ft) above sea level, approximately 140 kilometres (87 miles) south east of Jakarta,
            <router-link to="/attraction" target="_blank" style="text-decoration: none">Bandung</router-link> has cooler temperatures year-round than most other Indonesian cities. The city lies on a river basin surrounded by volcanic mountains. This topography provides a natural defense system, which was the primary reason for the Dutch East Indies government's plan to move the colony capital from Batavia (modern-day Jakarta) to
            <router-link to="/attraction" target="_blank" style="text-decoration: none">Bandung</router-link>.
            <br>
            <br>Official Weblink:
            <a
              href="https://msceis.org"
              target="_blank"
              style="text-decoration: none"
            >https://msceis.org</a>
            <br>Conference Venue:
            <router-link
              to="/venue"
              style="text-decoration: none"
            >Grand Mercure Hotel, Bandung, West Java, Indonesia.</router-link>
            <br>Conference Date:
            <router-link to="/dates" style="text-decoration: none">October 12, 2019.</router-link>
            <br>
            <strike>
              <b>
              Abstract Submission (Phase 3 Extended):
              <router-link to="#" style="text-decoration: none">August 30, 2019.</router-link>
            </b>
            </strike>
            <br>
            <br>Please feel free to ask if you have any question. We expect to have more than 120 participants from more than 40 countries. All accepted and presented papers will be published by EAI CORE Series (<a href="https://eudl.eu/series/CORE">https://eudl.eu/series/CORE</a>), which is a publisher indexed by Web of Science, Scopus, etc., Consequently, any unpresented paper won't be published. Moreover, some selected papers will be submitted to the following international journals:
              <ul>
                  <li>Indonesian Journal of Science & Technology (<a href="http://ejournal.upi.edu/index.php/ijost/">http://ejournal.upi.edu/index.php/ijost/</a>), Indexed by Scopus.</li>
                  <li>EAI Transactions Journal (To be confirmed), Indexed by Scopus.</li>
                  <li>Jurnal pengajaran MIPA (JPMIPA, <a href="http://ejournal.upi.edu/index.php/jpmipa">http://ejournal.upi.edu/index.php/jpmipa</a>), Accredited by DIKTI, Indonesia</li>
              </ul>
            <br>
            <br>Moreover, we request you to forward this email to other researchers in your university.
            <br>
            <br>Thank you very much and kind regards,
            <br>
            <br>Dr. Lala Septem Riza, S.Si., M.T.
            <br>Organizing Chair of MSCEIS 2019
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment';
export default {
  data: () => ({
    itemsBc: [
      {
        text: "Home",
        disable: false,
        to: "/"
      },
      {
        text: "Call for Papers",
        disable: true,
        to: "/papers"
      }
    ],
  }),
  filters: {
    moment: function (date) {
      return moment(date).format("MMMM D, YYYY");
    }
  }
};
</script>
