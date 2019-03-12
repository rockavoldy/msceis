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
                <v-layout text-xs-justify>
                    <v-flex xs12 sm12 md12>
                        <h1 display-4 class="primary--text">Contact Us</h1>
                        <h2 display-3>Location:&nbsp;</h2>
                        <div class="subheading">
                            Faculty of Mathematics and Natural Sciences Education,
                            <br>
                            <b>UNIVERSITAS PENDIDIKAN INDONESIA</b>
                            <br>2nd Floor of FPMIPA A (JICA) Building
                            <br>Jl. Setiabudhi, No. 229, Bandung, West Java, Indonesia
                            <br>
                            <b>Mail us:</b>&nbsp;
                            <a href="mailto:msceis@upi.edu">msceis@upi.edu</a>
                            <br>
                            <b>Contact Person:</b>&nbsp;Eka Cahya Prima
                            <br>
                            <b>Phone:&nbsp;</b>(+62) 857-9324-5289
                        </div>
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