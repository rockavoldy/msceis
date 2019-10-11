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
        <br />
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
                    <div class="title mb-1">Tentative Title:</div>
                    <p
                      class="subheading font-weight-medium"
                    >Mining of Big-data &mdash; the Graphical Approach</p>
                    <div class="title mb-2">Abstract:</div>
                    <p class="body-1 text-xs-justify pr-4">
                      <i>
                        &nbsp;&nbsp;&nbsp;&nbsp;Degree of nodes of predesigned networks, like expressways or optical networks, have normal distribution with a defined highest degree, primarily limited by the hardware constraints. Data or information networks, like social networks on the internet, evolve naturally without constraint on degree or connectivity. Tweeter account of a popular person may have million followers. There happens to be preferential connections to a few nodes, where most of the nodes will have only a few links. The distribution of degree of nodes is exponential, with a long tail. These networks are called scale-free networks. Like social networks, very big data, like purchase data on Amazon, is evolved too. By representing data units by nodes, and their relations by links, one can create a graphical presentation. Though complete information will not be retained in the graphical representation, analyzing those networks could reveal interesting insights about the data.
                        <br />
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Examples of scale-free networks are plenty: (1) scientific papers, (2) face-book accounts, (3) various web-sites on the internet, (4) tweeter accounts, etc. Such data, when represented as network, exhibit scale-free property. In case of (1), the papers are nodes and either references or co-authorship could be used as links. In case of (2), individual accounts are nodes and friendship relation is the link. In fact, many physical phenomenon occurring in nature like gene interaction, aftershocks from a big earthquake, neuron excitation in the brain etc., exhibit scale free properties.
                        <br />
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Scale free networks form clusters with a few important central node/s. Nodes in a cluster are tightly interconnected, but between clusters, links are a few. Discovering such clusters and their central nodes reveals a lot about the data useful for various applications. We will elaborate this aspect with a few existing works, and a few new application areas we are working on.
                        <br />
                        <br />
                        <b>Keywords</b>: Scale-free network, Data mapped to network, Community detection, Central node/s detection, Collaborative filtering, Aftershock prediction,
                      </i>
                    </p>
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
                    <div class="title mb-1">Tentative Title:</div>
                    <p
                      class="subheading font-weight-medium"
                    >Southeast Asian Students' Performance in Mathematics and Science: What the PISA studies tell us</p>
                    <div class="title mb-2">Abstract:</div>
                    <p class="body-1 text-xs-justify pr-4">
                      <i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Nearly every country in the world investing extensively in education. However, not all countries have managed to improve the practice and effectiveness of their education systems over the past two decades. This paper focuses on assessing the quality and equity of student performance with respect to 15-year-old students participated in PISA studies from five participating Southeast Asian countries, namely Indonesia, Malaysia, Singapore, Thailand and Vietnam. Students in Singapore have consistently shown superior academic performance. Students in Indonesia, on the other hand, have the lowest average scores in PISA studies.
                      </i>
                    </p>
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
                    <div class="title mb-1">Tentative Title:</div>
                    <p
                      class="subheading font-weight-medium"
                    >Creativity Development in Science and Technology Education</p>
                    <div class="title mb-2">Abstract:</div>
                    <p class="body-1 text-xs-justify pr-4">
                      <i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Creativity is a natural function of the mind. It can be developed by several ways. The nature of creativity and characteristics of creative people can give ideas how creativity can be developed. Creativity can be developed by using SCAMPER methods. They are SUBSTITUTE, COMBINE, ADAPT, PUT TO OTHER USE, ELIMINATE and REARRANGE. Four components of teachings in the classroom: Observation, Curiosity, Sense of humor and creativity, are introduced for the development of creativity in science and technology education.
                        <br />
                        <br />
                        <b>Keywords</b>: Creativity, International Patent, Creative people, Observation, Curiosity, SCAMPER.
                      </i>
                    </p>
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
                    <div class="title mb-1">Tentative Title:</div>
                    <p
                      class="subheading font-weight-medium"
                    >Investigating Reciprocal Relationship of Computational Thinking in Science and Mathematics Classrooms: Teachers Side</p>
                    <div class="title mb-2">Abstract:</div>
                    <p class="body-1 text-xs-justify pr-4">
                      <i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Science and mathematics are rapidly changing as they are practiced in the professional world, where in the last 20 years, nearly every field related to science and mathematics has seen the growth of a computational counterpart. Computational Thinking is the thought process involved in formulating problems and expressing its solution as transformations to information that an agent can effectively carry out (Wing:2006). From perspective of pedagogy, the use of computational tools and skillsets can deepen learning of mathematics and science content, and vice versa that science and mathematics provide a meaningful context and set of a problem where computational thinking can be applied (Weintrop:2016). The paper will investigate this reciprocal relationship particularly on how a group of teachers teaching mathematics and science being introduced with computational thinking, practicing together lesson cultivating computational thinking in an unplugged mode. The mode is intentionally chosen as mostly teachers think that computational thinking, as its wording, rather than a universal thinking, must involve computer in its classroom (plugged). Video-audio recording and transcript-based lesson analyses, teacher interview, and a particular instrument to study their perspectives on computational thinking in the classroom practices level are applied. Findings leads to essential issues to integrate computational thinking into mathematics and science learning especially in primary level are discussed.
                        <br />
                        <br />
                        <b>Keywords</b>: Computational Thinking.
                      </i>
                    </p>
                  </v-flex>
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <br />
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
