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
        <v-card>
          <v-card-text>
            <v-layout wrap justify-center>
              <v-flex xs12 md10>
                <h1 display-4 class="blue--text text-xs-center">News</h1>
                <v-list two-line>
                  <template v-for="(item, index) in items">
                    <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                    <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                    <v-list-tile v-else :key="item.title" avatar>
                      <v-list-tile-avatar>
                        <v-btn fab depressed color="blue" dark>{{ item.tanggal }}</v-btn>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        <v-list-tile-sub-title v-html="item.download"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    itemsBc: [
      {
        text: "Home",
        disable: false,
        to: "/"
      },
      {
        text: "News",
        disable: true,
        to: "/news"
      }
    ],
    items: [
      {
        tanggal: "SEP 10",
        title: "Program schedule October 12, 2019 (tentative)",
        subtitle:
          "Please find the general program schedule on October 12, 2019 as follows:",
        download:
          "<a href='./downloads/Program Schedule MSCEIS2019.pdf'>Program Schedule.pdf</a>"
      },
      { divider: true, inset: true },
      {
        tanggal: "OCT 10",
        title: "Book of Program MSCEIS 2019",
        subtitle: "Please find the final version of Book of Program here:",
        download:
          "<a href='./downloads/BoP-MSCEIS-2019.pdf'>Book of Program MSCEIS 2019.pdf</a>"
      },
      { divider: true, inset: true }
    ]
  }),
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM D, YYYY");
    }
  }
};
</script>

<style>
</style>