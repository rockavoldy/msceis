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
        <v-layout justify-center text-xs-center>
          <v-flex xs12 xs8 sm6 md4 mb-3>
            <h4 class="display-1 primary--text">Keynote Speakers</h4>
          </v-flex>
        </v-layout>
        <v-layout column>
          <v-flex xs12 mb-3>
            <v-card min-height="300">
              <v-layout>
                <v-img
                  src="./img/keynote/goutam.jpg"
                  height="300"
                  width="220"
                  position="top"
                  class="ml-1"
                ></v-img>
                <v-card-text>
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <div class="title">Prof. Goutam Chakraborty, Ph.D.</div>
                    <div class="subheading">
                      <a
                        href="http://www.chishiki.soft.iwate-pu.ac.jp/~goutam/"
                        target="_blank"
                        style="text-decoration: none"
                      >Iwate Prefectural University</a>, Japan
                    </div>
                  </v-flex>
                  <v-flex>
                    <div class="title">Tentative Title:</div>
                    <p body-1>To Be Announced (TBA)</p>
                    <div class="title">Abstract:</div>
                    <p body-1>To Be Announced (TBA)</p>
                  </v-flex>
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12 mb-3>
            <v-card min-height="300">
              <v-layout>
                <v-img
                  src="./img/keynote/igusti.jpeg"
                  height="300"
                  width="220"
                  position="top"
                  class="ml-1"
                ></v-img>
                <v-card-text>
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <div class="title">Dr. I Gusti Darmawan</div>
                    <div class="subheading">
                      <a
                        href="https://www.adelaide.edu.au/directory/igusti.darmawan#"
                        target="_blank"
                        style="text-decoration: none"
                      >The University of Adelaide</a>, Australia
                    </div>
                  </v-flex>
                  <v-flex>
                    <div class="title">Tentative Title:</div>
                    <p body-1>To Be Announced (TBA)</p>
                    <div class="title">Abstract:</div>
                    <p body-1>To Be Announced (TBA)</p>
                  </v-flex>
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12 mb-3>
            <v-card min-height="300">
              <v-layout>
                <v-img
                  src="./img/keynote/janchai.png"
                  height="300"
                  width="220"
                  position="top"
                  class="ml-1"
                ></v-img>
                <v-card-text>
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <div class="title">Prof. Janchai Yingprayoon</div>
                    <div class="subheading">
                      <a
                        href="https://www.icaseonline.net/ste_centers.html"
                        target="_blank"
                        style="text-decoration: none"
                      >Suan Sunandha Rajabhat University</a>, Thailand
                    </div>
                  </v-flex>
                  <v-flex>
                    <div class="title">Tentative Title:</div>
                    <p body-1>To Be Announced (TBA)</p>
                    <div class="title">Abstract:</div>
                    <p body-1>To Be Announced (TBA)</p>
                  </v-flex>
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card min-height="300">
              <v-layout>
                <v-img
                  src="./img/keynote/arif.png"
                  height="300"
                  width="220"
                  position="top"
                  class="ml-1"
                ></v-img>
                <v-card-text>
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <div class="title">Arif Hidayat, Ph.D</div>
                    <div class="subheading">
                      <a
                        href="http://dosen.upi.edu/umum/biografi/summary/132326878"
                        target="_blank"
                        style="text-decoration: none"
                      >Universitas Pendidikan Indonesia</a>, Indonesia
                    </div>
                  </v-flex>
                  <v-flex>
                    <div class="title">Tentative Title:</div>
                    <p body-1>To Be Announced (TBA)</p>
                    <div class="title">Abstract:</div>
                    <p body-1>To Be Announced (TBA)</p>
                  </v-flex>
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <br>
        <v-layout justify-center text-xs-center>
          <v-flex xs12 xs8 sm6 md4 mb-3 mt-4>
            <h4 class="display-1">Invited Speakers</h4>
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs12 sm6 md6 lg6 xl6 v-for="(item, i) in invited" :key="i" class="d-flex">
            <v-card>
              <v-layout justify-center align-center>
                <v-flex sm5 md5 lg4 xl3>
                  <v-img
                    :src="item.src"
                    height="160"
                    width="160"
                    style="border-radius: 50%"
                    position="top top"
                    class="ml-3"
                  ></v-img>
                </v-flex>
                <v-card-text>
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <div class="subheading font-weight-medium">{{item.name}}</div>
                    <div class="body-2">{{item.major}}, {{item.institution}}</div>
                  </v-flex>
                  <v-flex>
                    <div class="body-2">Tentative Title:</div>
                    <p body-1>{{item.title}}</p>
                    <div class="body-2">Abstract:</div>
                    <p body-1>{{item.abstract}}</p>
                  </v-flex>
                </v-card-text>
              </v-layout>
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
        text: "Keynote Speakers and Invited Speakers",
        disable: true,
        to: "/speakers"
      }
    ],
    invited: [
      {
        name: "Dr. Eng. Pakhrur Razi, M.Si.",
        major: "Instrumentation Physics",
        institution: "Universitas Negeri Padang",
        sintaid: "5999238",
        src: "./img/invited/pakhrur.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. Manihar Situmorang, MSc., PhD.",
        major: "Analytical Chemistry",
        institution: "Universitas Negeri Medan",
        sintaid: "5976591",
        src: "./img/invited/manihar.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. I Nengah Suparta, M.Si.",
        major: "Mathematics",
        institution: "Universitas Pendidikan Ganesha",
        sintaid: "6026698",
        src: "./img/invited/nengah.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Dra. Dwi Yulianti, M.Si.",
        major: "Physics Education",
        institution: "Universitas Negeri Semarang",
        sintaid: "5994568",
        src: "./img/invited/dwi.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. Sarson W. Pomalato, M.Pd.",
        major: "Mathematics Education",
        institution: "Universitas Negeri Gorontalo",
        sintaid: "-",
        src: "./img/invited/sarson.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. Orbanus Naharia, M.Si",
        major: "Biology",
        institution: "Universitas Negeri Manado",
        sintaid: "6015780",
        src: "./img/invited/dummy.png",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Dr. Dadan Rosana",
        major: "Science Education",
        institution: "Universitas Negeri Yogyakarta",
        sintaid: "5990577",
        src: "./img/invited/dummy.png",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Dr. Sumari, M.Si",
        major: "Chemistry",
        institution: "Universitas Negeri Malang",
        sintaid: "51667",
        src: "./img/invited/sumari.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. Hamzah Upu, M.Ed",
        major: "Mathematics Education",
        institution: "Universitas Negeri Makassar",
        sintaid: "6035939",
        src: "./img/invited/hamzah.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. I Made Putrawan",
        major: "Biology Education",
        institution: "Universitas Negeri Jakarta",
        sintaid: "6003199",
        src: "./img/invited/dummy.png",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Dr. Sukarmin, M.Pd",
        major: "Chemistry Education",
        institution: "Universitas Negeri Surabaya",
        sintaid: "5988947",
        src: "./img/invited/sukarmin.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Dr. Muhamad Nursalman",
        major: "Computer Science",
        institution: "Universitas Pendidikan Indonesia",
        sintaid: "6143456",
        src: "./img/invited/nursalman.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      },
      {
        name: "Prof. Dr. Wawan Setiawan",
        major: "Computer Science Education",
        institution: "Universitas Pendidikan Indonesia",
        sintaid: "5977494",
        src: "./img/invited/wawan.jpeg",
        title: "To Be Announced (TBA)",
        abstract: "To Be Announced (TBA)"
      }
    ]
  }),
  computed: {
    keynote() {
      const binding = {};

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;

      return binding;
    }
  }
};
</script>
