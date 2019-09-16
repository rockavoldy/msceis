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
        <h1 display-4 class="primary--text">Important Dates</h1>
        <div class="text-xs-justify subheading">
          <h3 display-2 class="text-weight-medium">Phase 1</h3>
          <ul>
            <li>
              <strike
                v-if="dateNow > phase1.absSubm"
              >Abstract Submission: {{phase1.absSubm | moment}}</strike>
              <span v-else>Abstract Submission: {{phase1.absSubm | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase1.absNotif"
              >Abstract Notification/Acceptance: {{phase1.absNotif | moment}}</strike>
              <span v-else>Abstract Notification/Acceptance: {{phase1.absNotif | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase1.absSubmExt"
              >Abstract Submission (Extended): {{phase1.absSubmExt | moment}}</strike>
              <span v-else>Abstract Submission (Extended): {{phase1.absSubmExt | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase1.absNotifExt"
              >Abstract Notification/Acceptance (Extended): {{phase1.absNotifExt | moment}}</strike>
              <span
                v-else
              >Abstract Notification/Acceptance (Extended): {{phase1.absNotifExt | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase1.paperSubm"
              >Full Paper Submission: {{phase1.paperSubm | moment}}</strike>
              <span v-else>Full Paper Submission: {{phase1.paperSubm | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase1.paperNotif"
              >Full Paper Notification/Acceptance: {{phase1.paperNotif | moment}}</strike>
              <span v-else>Full Paper Notification/Acceptance: {{phase1.paperNotif | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase1.camReady"
              >Deadline for Camera Ready Paper: {{phase1.camReady | moment}}</strike>
              <span v-else>Deadline for Camera Ready Paper: {{phase1.camReady | moment}}</span>
            </li>
          </ul>
        </div>
        <div class="text-xs-justify subheading">
          <h3 display-2 class="text-weight-medium">Phase 2</h3>
          <ul>
            <li>
              <strike
                v-if="dateNow > phase2.absSubm"
              >Abstract Submission: {{phase2.absSubm | moment}}</strike>
              <span v-else>Abstract Submission: {{phase2.absSubm | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase2.absNotif"
              >Abstract Notification/Acceptance: {{phase2.absNotif | moment}}</strike>
              <span v-else>Abstract Notification/Acceptance: {{phase2.absNotif | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase2.paperSubm"
              >Full Paper Submission: {{phase2.paperSubm | moment}}</strike>
              <span v-else>Full Paper Submission: {{phase2.paperSubm | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase2.paperNotif"
              >Full Paper Notification/Acceptance: {{phase2.paperNotif | moment}}</strike>
              <span v-else>Full Paper Notification/Acceptance: {{phase2.paperNotif | moment}}</span>
            </li>
            <li>
              <strike
                v-if="dateNow > phase2.camReady"
              >Deadline for Camera Ready Paper: {{phase2.camReady | moment}}</strike>
              <span v-else>Deadline for Camera Ready Paper: {{phase2.camReady | moment}}</span>
            </li>
          </ul>
        </div>
        <div class="text-xs-justify subheading">
          <h3 display-2 class="text-weight-medium">Phase 3 (Extended)</h3>
          <ul>
            <li>
              Abstract Submission:
              <strike>{{phase3.absSubm | moment}}</strike>&nbsp;
              <strike v-if="dateNow > phase3.absSubmExt">{{phase3.absSubmExt | moment}}</strike>
              <span v-else>{{phase3.absSubmExt | moment}}</span>
            </li>
            <li>
              Abstract Notification/Acceptance:
              <strike>{{phase3.absNotif | moment}}</strike>&nbsp;
              <strike v-if="dateNow > phase3.absNotifExt">{{phase3.absNotifExt | moment}}</strike>
              <span v-else>{{phase3.absNotifExt | moment}}</span> September 10, 2019
            </li>
            <li>
              Full Paper Submission:
              &nbsp;
              <strike>{{phase3.paperSubm | moment}}</strike>&nbsp;
              <strike>September 15, 2019</strike>&nbsp;September 20, 2019
            </li>
            <li>
              Full Paper Notification/Acceptance:
              &nbsp;
              <strike>{{phase3.paperNotif | moment}}</strike>&nbsp;September 25, 2019
            </li>
            <li>
              Deadline for Camera Ready Paper:
              &nbsp;
              <strike>{{phase3.camReady | moment}}</strike>&nbsp;October 3, 2019
            </li>
          </ul>
        </div>
        <br />
        <div class="subheading font-weight-bold">
          Payment Deadline for Regular Fee:
          <strike>September 27, 2019</strike>&nbsp;October 4, 2019
          <br />Conference Due: October 12, 2019.
        </div>
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
        text: "Important Dates",
        disable: true,
        to: "/dates"
      }
    ],
    dateNow: new Date(),
    phase1: {
      absSubm: new Date(2019, 4, 1),
      absNotif: new Date(2019, 4, 15),
      absSubmExt: new Date(2019, 5, 1),
      absNotifExt: new Date(2019, 5, 5),
      paperSubm: new Date(2019, 6, 1),
      paperNotif: new Date(2019, 7, 1),
      camReady: new Date(2019, 7, 10)
    },
    phase2: {
      absSubm: new Date(2019, 6, 1),
      absNotif: new Date(2019, 6, 15),
      paperSubm: new Date(2019, 7, 1),
      paperNotif: new Date(2019, 8, 1),
      camReady: new Date(2019, 8, 15)
    },
    phase3: {
      absSubm: new Date(2019, 7, 15),
      absNotif: new Date(2019, 7, 20),
      paperSubm: new Date(2019, 8, 10),
      paperNotif: new Date(2019, 8, 15),
      camReady: new Date(2019, 8, 25),
      absSubmExt: new Date(2019, 7, 30),
      absNotifExt: new Date(2019, 8, 7),
      paperSubmExt: new Date(2019, 8, 20),
      paperNotifExt: new Date(2019, 8, 30),
      camReadyExt: new Date(2019, 9, 5)
    }
  }),
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM D, YYYY");
    }
  }
};
</script>