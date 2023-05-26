export default [
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import("@/views/errors/404.vue"),
    },
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue"),
    },
];
