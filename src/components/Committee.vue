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
                <h1 display-4 class="primary--text">Steering Committee</h1>
                <div class="subheading">
                    <ul>
                        <li>Prof. Dr. H. R. Asep Kadarohman, M.Si. (Rector of Universitas Pendidikan Indonesia)</li>
                        <li>Siti Fatimah, S.Pd., M.Si., Ph.D (Chair of Steering Committee)</li>
                        <li>Dr. H. M. Solehuddin, M.Pd.</li>
                        <li>Dr. H. Edi Suryadi, M.Si</li>
                        <li>Prof. Dr. Aim Abdulkarim, M.Pd.</li>
                        <li>Prof. Dr. H. Didi Sukyadi, M.A</li>
                        <li>Prof. H. Yaya Sukjaya Kusumah, M.Sc., Ph.D</li>
                        <li>Prof. Dr. Munir, M.IT</li>
                        <li>Prof. Dr. Phil. Ari Widodo, M.Ed</li>
                        <li>Dr. Nahadi, M.Pd.</li>
                        <li>Dr. Dadi Rusdiana, M.Si.</li>
                        <li>Dr. Taufik Ramlam Ramalis, M.Si.</li>
                        <li>Dr. Bambang Supriatno, M.Si.</li>
                        <li>Dr. Diana Rochintaniawati, M.Ed.</li>
                        <li>Dr. rer. nat. Ahmad Mudzakir, M.Si.</li>
                        <li>Dr. Sufyani Prabawanto, M.Ed.</li>
                        <li>Fitri Khoerunnisa, M.Si., Ph.D.</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Scientific Committee</h1>
                <div class="subheading">
                    <ul>
                        <li>Dr. Leonel Hernandez (Computer Network; ITSA University; lhernandezc[at]itsa.edu.co; Colombia)</li>
                        <li>Dr. Shah Nazir (Soft Computing; University of Swabi; snshahnzr[at]gmail.com; Pakistan)</li>
                        <li>Dr. Mahmoud Fahsi (Artificial Intelligence and Expert Systems; EEDIS Laboratory, Djillali Liabes University, Sidi Bel Abbes; mfahci[at]univ-sba.dz; Algeria)</li>
                        <li>Prof. Dr. Tsukasa Hirashima (Computer Science Education; Hiroshima University; tsukasa[at]lel.hiroshima-u.ac.jp; Japan)</li>
                        <li>Prof. Dr. Faaizah Binti Shahbodin (Special Education; Universiti Teknikal Malaysia Melaka; faaizah[at]utem.edu.my; Malaysia)</li>
                        <li>Dr. Francisco Javier Rodriguez Diaz (Optimization and Evolutionary Programming; University of Burgos; fjrodriguez[at]decsai.ugr.es; Spain)</li>
                        <li>Dr. Diana Martín Rodríguez (Data Mining; Universidad Tecnológica de la Habana; dmartin[at]ceis.cujae.edu.cu; Cuba)</li>
                        <li>Prof. Minsu Ha, P.hD (Science Education; Kangwon National University; msha[at]kangwon.ac.kr; Korea)</li>
                        <li>Dr. Wayan Suparta (Astronomy; Space Science Centre, UKM; wayan[at]ukm.edu.my; Malaysia)</li>
                        <li>Dr Muhammad Abd Hadi Bin Bunyamin (Physics Education; UTM; mabhadi[at]utm.my; Malaysia)</li>
                        <li>Dr. Ken Kahn (Artificial Intelligent, Computational Education; University of Oxford; toontalk[at]gmail.com; United Kingdom)</li>
                        <li>Prof. Dr. Peter Aubusson (STEM Education; University of Technology Sydney; Peter.Aubusson[at]uts.edu.au; Australia)</li>
                        <li>Dr. Nina Burridge (Education for Human Rights and Cultural Diversity; University of Technology Sydney; Nina.Burridge[at]uts.edu.au; Australia)</li>
                        <li>Prof. Dr. Hsin-Kai Wu (Learning Technology, Inquiry Learning, Chemistry Education and Computer-based Assessment; National Taiwan Normal University; hkwu[at]ntnu.edu.tw; Taiwan)</li>
                        <li>Prof. Dr. Raphael Finkel (Systems, Linguistics; University of Kentucky; raphael[at]cs.uky.edu; United States)</li>
                        <li>Dr. Sazali bin Yusoff (Educational Management and Leadership; Institute of Teacher Education; sazaliy[at]yahoo.com; Malaysia)</li>
                        <li>Prof. Dr. Adrie Visscher (Educational Evaluation; University of Twente; a.j.visscher[at]utwente.nl; Netherlands)</li>
                        <li>Dr. Chai Ching Sing (Educational Technology; The Chinese University of Hong Kong; cingsing.chai[at]nie.edu.sg; Hongkong)</li>
                        <li>Prof. Dr. David F. Treagust (Conceptual Change, Multi Representations; Curtin University; D.Treagust[at]curtin.edu.au; Australia)</li>
                        <li>Assoc. Prof. Dr. Davin HES (National Institute of Technology; Wakayama College; davin[at]wakayama-nct.ac.jp; Japan)</li>
                        <li>Assoc. Prof. Tony H (Curtin University; hadibarata@curtin.edu; Malaysia)</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Organizing Committee</h1>
                <div class="subheading">
                    <ul>
                        <li>Dr. Lala Septem Riza, S.Si., M.Si. (Chair)</li>
                        <li>Dr. Eka Cahya Prima (Co-chair)</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Treasury</h1>
                <div class="subheading">
                    <ul>
                        <li>Eliyawati, M.Pd. (Coordinator)</li>
                        <li>Erna Piantari, M.T.</li>
                        <li>Dra. Rohayati, MM</li>
                        <li>Fitri Ernawati</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Secretary</h1>
                <div class="subheading">
                    <ul>
                        <li>Enjun Junaeti, M.Si. (Coordinator)</li>
                        <li>Rika Rafikah Agustin, M.Pd.</li>
                        <li>Muhammad Gina Nugraha, MPd, M.Si</li>
                        <li>Duden Saepuzaman, MPd, M.Si</li>
                        <li>Dr. Diah Kusumawati, M.Si</li>
                        <li>Yaya Wihardi, M.Kom.</li>
                        <li>Isnie Yusnitha, M.Edi</li>
                        <li>Dian Hendriana, M.Pd</li>
                        <li>Dulhamied, S.H.</li>
                        <li>Sopandi, S.Pd</li>
                        <li>Asri Novianti, S.S.</li>
                        <li>Zaenal Hilmi, A. Md</li>
                        <li>Hilma Firmansyah</li>
                        <li>Djuariah, S.St</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Accomodation and Consumption</h1>
                <div class="subheading">
                    <ul>
                        <li>Eki Nugraha, M.Kom. (Coordinator)</li>
                        <li>Lilit Rusyati, M.Pd.</li>
                        <li>Iyan Sopian, S.T.</li>
                        <li>Heli Siti H. M. Ph.D</li>
                        <li>Nandang</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Conference Program</h1>
                <div class="subheading">
                    <ul>
                        <li>Eddy Prasetyo Nugroho, M.T. (Coordinator)</li>
                        <li>Jajang Kusnendar, M.T.</li>
                        <li>Dr. Judhistira Aria Utama, M.Si</li>
                        <li>Galuh Yuliani, Ph.D</li>
                        <li>Dr. Rini Solihat, M.Si.</li>
                        <li>Dr. Lilik Hasanah</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Editors</h1>
                <div class="subheading">
                    <ul>
                        <li>Dr. Rani Megasari (Coordinator)</li>
                        <li>Dr. Yudi Wibisono, M.T.</li>
                        <li>Nanang Winarno, M.Pd.</li>
                        <li>Dr. Endi Suhendi</li>
                        <li>Irma Rahma Suwarma, Ph.D.</li>
                        <li>Al Jupri, Ph.D.</li>
                        <li>Dr. Al Azhary Masta, M.Si.</li>
                        <li>Dr. Eni Nuraeni</li>
                        <li>Dr. Topik Hidayat</li>
                        <li>Dr. Siti Aisyah, M.Si</li>
                        <li>Tuszie Widhiyati, PhD</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Web Designer and Promotion</h1>
                <div class="subheading">
                    <ul>
                        <li>Herbert Siregar, M.T. (Coordinator)</li>
                        <li>Ikmanda Nugraha, M.Pd.</li>
                        <li>Rosa Ariani Sukamto, M.T.</li>
                        <li>Erlangga, M.T.</li>
                        <li>Akhmad Maulana Akbar</li>
                        <li>Rivaldo</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">Documentation and Reporting</h1>
                <div class="subheading">
                    <ul>
                        <li>Harsa Wara P., M.Pd. (Coordinator)</li>
                        <li>Dr. Wahyudin, M.T.</li>
                        <li>Dr. Muhammad Nursalman, M.T.</li>
                    </ul>
                </div>
                <br>
                <h1 display-4 class="primary--text">AMLI Program</h1>
                <div class="subheading">
                    <ul>
                        <li>Dr. Achmad Samsudin, M.Pd (Coordinator)</li>
                        <li>Dr. Mimin Iryanti, M.Si</li>
                        <li>Dr. Ahmad Aminudin, M.Si</li>
                        <li>Marthalina Iriany, M.T.</li>
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
                text: "Committee",
                disable: true,
                to: "/committee"
            }
        ]
    })
};
</script>
