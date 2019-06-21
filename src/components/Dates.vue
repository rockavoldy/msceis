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
        <h1 display-4 class="primary--text">Important Dates</h1>
        <div class="text-xs-justify subheading">
          <h3 display-2 class="text-weight-medium">Phase 1</h3>
          <ul>
            <li>
              <strike>Abstract Submission: May 1, 2019</strike>
            </li>
            <li>
              <strike>Abstract Notification/Acceptance: May 15, 2019</strike>
            </li>
            <li>
              <strike>Abstract Submission (Extended): June 1, 2019</strike>
            </li>
            <li>
              <strike>Abstract Notification/Acceptance (Extended): June 5, 2019</strike>
            </li>
            <li>Full Paper Submission: July 1, 2019</li>
            <li>Full Paper Notification/Acceptance: August 1, 2019</li>
            <li>Deadline for Camera Ready Paper: August 10, 2019</li>
          </ul>
        </div>
        <div class="text-xs-justify subheading">
          <h3 display-2 class="text-weight-medium">Phase 2</h3>
          <ul>
            <li>Abstract Submission: July 1, 2019</li>
            <li>Abstract Notification/Acceptance: July 15, 2019</li>
            <li>Full Paper Submission: August 1, 2019</li>
            <li>Full Paper Notification/Acceptance: September 1, 2019</li>
            <li>Deadline for Camera Ready Paper: September 15, 2019</li>
          </ul>
        </div>
        <div class="text-xs-justify subheading">
          <h3 display-2 class="text-weight-medium">Phase 3</h3>
          <ul>
            <li>Abstract Submission: August 15, 2019</li>
            <li>Abstract Notification/Acceptance: August 20, 2019</li>
            <li>Full Paper Submission: September 10, 2019</li>
            <li>Full Paper Notification/Acceptance: September 15, 2019</li>
            <li>Deadline for Camera Ready Paper: September 25, 2019</li>
          </ul>
        </div>
        <br>
        <div class="subheading font-weight-bold">
          Payment Deadline for Regular Fee: September 27, 2019
          <br>Conference Due: October 12, 2019.
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
        text: "Important Dates",
        disable: true,
        to: "/dates"
      }
    ]
  })
};
</script>