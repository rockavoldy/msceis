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
        <v-layout text-xs-justify>
          <v-flex xs12 sm12 md6>
            <h1 display-4 class="primary--text">Contact Us</h1>
            <h2 display-3>Location:&nbsp;</h2>
            <div class="subheading">
              Faculty of Mathematics and Natural Sciences Education,
              <br />
              <b>UNIVERSITAS PENDIDIKAN INDONESIA</b>
              <br />2nd Floor of FPMIPA A (JICA) Building
              <br />Jl. Setiabudhi, No. 229, Bandung, West Java, Indonesia
              <br />
              <b>Mail us:</b>&nbsp;
              <a href="mailto:msceis@upi.edu">msceis@upi.edu</a>
              <br />
              <b>Contact Person:</b>&nbsp;Eka Cahya Prima
              <br />
              <b>Phone:&nbsp;</b>(+62) 857-9324-5289
            </div>
          </v-flex>
          <v-flex xs12 sm12 md6>
            <h2 display-3 class="mb-2">Location:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.239976720483!2d107.5877168141811!3d-6.861817595041293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6bb891ffe73%3A0xcf17e168e0ad1c63!2sGedung+JICA+%2F+FPMIPA+A+UPI!5e0!3m2!1sid!2sid!4v1565923205305!5m2!1sid!2sid"
              width="400"
              height="300"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
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
        text: "Contact",
        disable: true,
        to: "/contact"
      }
    ]
  })
};
</script>