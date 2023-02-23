let RequestLayout = () => import("../components/request/RequestLayout");
let Upgrade = () => import("../pages/request/Upgrade");

export default [
    {
        path: "/request/",
        component: RequestLayout,
        redirect: "/request/upgrade",
        children: [
            {
                path: "upgrade",
                component: Upgrade,
                name: "Upgrade",
                meta: { requiresAuth: true }
            }
        ]
    }
];
