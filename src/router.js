import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: "/2019/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/committee",
      name: "committee",
      component: () => import("./views/Committee.vue")
    },
    {
      path: "/speakers",
      name: "Speakers",
      component: () => import("./views/Speakers.vue")
    },
    {
      path: "/scope",
      name: "Scope",
      component: () => import("./views/Scope.vue")
    },
    {
      path: "/papers",
      name: "Papers",
      component: () => import("./views/Papers.vue")
    },
    {
      path: "/submission",
      name: "Submission",
      component: () => import("./views/Submission.vue")
    },
    {
      path: "/dates",
      name: "Dates",
      component: () => import("./views/Dates.vue")
    },
    {
      path: "/venue",
      name: "Venue",
      component: () => import("./views/Venue.vue")
    },
    {
      path: "/visa",
      name: "Visa",
      component: () => import("./views/Visa.vue")
    },
    // {
    //   path: "/attractions",
    //   name: "Attractions",
    //   component: () => import("./views/Attractions.vue")
    // }
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/amli",
      name: "AMLI",
      component: () => import("./views/AMLI.vue")
    }
  ]
});
