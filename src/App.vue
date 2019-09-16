<template>
  <v-app>
    <h1
      display-4
      class="blue--text text-xs-center"
    >2019 7th Mathematics, Science, and Computer Science Education International Seminar (MSCEIS)</h1>
    <v-toolbar>
      <v-img src="./img/msceis.png" height="50%" contain class="hidden-sm-and-up"></v-img>
      <v-toolbar-items>
        <v-btn flat class="hidden-xs-only">
          <span class="headline">MSCEIS</span>
        </v-btn>
        <v-btn flat class="hidden-md-and-down" to="/">
          <span>Home</span>
        </v-btn>
        <v-menu flat open-on-hover bottom>
          <template v-slot:activator="{on}">
            <v-btn flat v-on="on" class="hidden-md-and-down">
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
            <v-list-tile to="amli">
              <v-list-tile-title>AMLI</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="previous">
              <v-list-tile-title>Previous Conferences</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat class="hidden-md-and-down" color="red" to="news">
          <span>News</span>
        </v-btn>
        <v-btn flat class="hidden-md-and-down" to="papers">
          <span>Call For Papers</span>
        </v-btn>
        <v-btn flat class="hidden-md-and-down" to="submission">
          <span>Submission & Registration</span>
        </v-btn>
        <v-btn flat class="hidden-md-and-down" to="dates">
          <span>Important Dates</span>
        </v-btn>
        <v-btn flat class="hidden-md-and-down" to="venue">
          <span>Venue</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-down" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" right temporary fixed min-width="100%" id="drawer">
      <v-list class="hidden-md-and-down">
        <v-list-tile>
          <v-icon @click="drawer = !drawer">close</v-icon>
        </v-list-tile>
        <v-list-tile to="visa">
          <v-list-tile-content>
            <v-list-tile-title>Visa Information</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="attractions">
          <v-list-tile-content>
            <v-list-tile-title>Attractions</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="contact">
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="hidden-lg-and-up">
        <v-list-tile>
          <v-icon @click="drawer = !drawer">close</v-icon>
        </v-list-tile>
        <v-list-tile to="/">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
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
          <v-list-tile to="amli">
            <v-list-tile-content>
              <v-list-tile-title>AMLI</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="previous">
            <v-list-tile-content>
              <v-list-tile-title>Previous Conferences</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile color="red" to="news">
          <v-list-tile-content>
            <v-list-tile-title>News</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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
        <v-list-tile to="attractions">
          <v-list-tile-content>
            <v-list-tile-title>Attractions</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="contact">
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-layout v-if="$route.path == '/'" column>
      <v-flex>
        <v-carousel hide-delimiters height="230" class="hidden-md-and-up">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-img :src="item.src"></v-img>
          </v-carousel-item>
        </v-carousel>
        <v-carousel hide-delimiters height="465" class="hidden-sm-and-down">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-img :src="item.src"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex class="grid-list-xs text-xs-center">
        <v-layout wrap v-bind="menu">
          <v-flex xs12 sm6 md6 lg4 xl4>
            <v-card min-height="65" to="/submission">
              <v-card-text class="headline">Submission & Registration</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md6 lg4 xl4>
            <v-card min-height="65" to="/previous">
              <v-card-text class="headline">Previous Conferences</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md12 lg4 xl4>
            <v-card min-height="65" to="/contact">
              <v-card-text class="headline">Contact</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-card>
      <v-layout row wrap fill-height>
        <v-flex xs12 sm8 md8 lg4 xl5 class="blue">
          <v-card-text>
            <div class="title mb-2 white--text">
              <b>Contact Us</b>
            </div>
            <div class="subheading white--text">
              Faculty of Mathematics and Natural Sciences Education,
              <br />
              <b>Universitas Pendidikan Indonesia</b>
              <br />2nd Floor of FPMIPA A (JICA) Building
              <br />Jl. Setiabudhi, No. 229, Bandung, West Java, Indonesia
              <br />
              <b>Website:&nbsp;</b>
              <a style="color: white" target="_blank" href="https://msceis.org/">https://msceis.org/</a>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style="color: white"
                target="_blank"
                href="http://www.upi.edu/"
              >http://www.upi.edu/</a>
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style="color: white"
                target="_blank"
                href="http://fpmipa.upi.edu/"
              >http://fpmipa.upi.edu/</a>
              <br />
              <b>Email:&nbsp;</b>
              <a style="color: white" href="mailto: msceis@upi.edu">msceis@upi.edu</a>
              <br />
              <b>CP:&nbsp;</b>Eka Cahya Prima
              <br />
              <b>Phone:&nbsp;</b>
              (+62)&nbsp;857-9324-5289
            </div>
          </v-card-text>
        </v-flex>
        <v-flex xs12 sm4 md4 lg2 xl2 class="light-blue lighten-3">
          <v-card-text>
            <div class="title mb-5 white--text">
              <b>Organized By</b>
            </div>
            <div>
              <v-img src="./img/amli/upi.png" max-height="160" contain></v-img>
            </div>
          </v-card-text>
        </v-flex>
        <v-flex xs12 sm12 md12 lg6 xl5 class="light-blue lighten-3">
          <v-card-text>
            <div class="title mb-2 white--text">
              <b>Supported By</b>
            </div>
            <v-layout v-if="this.$vuetify.breakpoint.smAndUp">
              <v-flex xs2>
                <v-img src="./img/amli/unnes.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/uny.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/um.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/undiksha.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unj.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unimed.png" max-height="50" contain></v-img>
              </v-flex>
            </v-layout>
            <v-layout mt-3 v-if="this.$vuetify.breakpoint.smAndUp">
              <v-flex xs2>
                <v-img src="./img/amli/unp.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unima.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unm.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/ung.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unesa.png" max-height="50" contain></v-img>
              </v-flex>
            </v-layout>
            <v-layout v-if="this.$vuetify.breakpoint.xs">
              <v-flex xs2>
                <v-img src="./img/amli/unnes.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/uny.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/um.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/undiksha.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unj.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unimed.png" max-height="46" contain></v-img>
              </v-flex>
            </v-layout>
            <v-layout mt-3 v-if="this.$vuetify.breakpoint.xs">
              <v-flex xs2>
                <v-img src="./img/amli/unp.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unima.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unm.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/ung.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs2>
                <v-img src="./img/amli/unesa.png" max-height="46" contain></v-img>
              </v-flex>
            </v-layout>
            <br />
            <div class="title mb-3 white--text">
              <b>Published By</b>
            </div>
            <v-layout v-if="this.$vuetify.breakpoint.smAndUp">
              <v-flex xs4>
                <v-img src="./img/logo/eai.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs4>
                <v-img src="./img/logo/scopus.png" max-height="50" contain></v-img>
              </v-flex>
              <v-flex xs4>
                <v-img src="./img/logo/wos-logo.png" max-height="55" contain></v-img>
              </v-flex>
            </v-layout>
            <v-layout v-if="this.$vuetify.breakpoint.xs">
              <v-flex xs4>
                <v-img src="./img/logo/eai.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs4>
                <v-img src="./img/logo/scopus.png" max-height="46" contain></v-img>
              </v-flex>
              <v-flex xs4>
                <v-img src="./img/logo/wos-logo.png" max-height="55" contain></v-img>
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
      carouselHeight: null,
      drawer: null,
      items: [
        {
          name: "Wayang Golek",
          src: "./img/carousels/alun1.jpg"
        },
        {
          name: "Tangkuban Perahu",
          src: "./img/carousels/chicago1.jpg"
        },
        {
          name: "Somewhere",
          src: "./img/carousels/la1.jpg"
        },
        {
          name: "Saung Udjo",
          src: "./img/carousels/saungudjo.jpg"
        },
        {
          name: "Surapati",
          src: "./img/carousels/surapati.jpg"
        },
        {
          name: "Alun-Alun",
          src: "./img/carousels/alunalun.jpg"
        },
        {
          name: "Gedung Sate",
          src: "./img/carousels/gedungsate.jpg"
        }
      ]
    };
  },
  computed: {
    checkSize() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    },
    menu() {
      const binding = {};
      if (this.$vuetify.breakpoint.xs) binding.column = true;
      return binding;
    }
  },
  getCarouselHeight() {
    var item = document.getElementsByClassName("v-image__image--cover");
    this.carouselHeight = item[3].clientHeight;
    // return item[3].clientHeight;
  },
  mounted() {
    this.getCarouselHeight();
  }
};
</script>
