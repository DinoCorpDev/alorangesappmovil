let RequestLayout = () => import("../components/request/RequestLayout");
let Upgrade = () => import("../pages/request/Upgrade");
let RevisionTecnica = () => import("../pages/request/RevisionTecnica");
let SoporteTecnico = () => import("../pages/request/SoporteTecnico");
let VistaDiseñador = () => import("../pages/request/VistaDiseñador");

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
            },
            {
                path: "revisionTecnica",
                component: RevisionTecnica,
                name: "RevisionTecnica",
                meta: { requiresAuth: true }
            },
            {
                path: "soporteTecnico",
                component: SoporteTecnico,
                name: "SoporteTecnico",
                meta: { requiresAuth: true }
            },
            {
                path: "vistaDiseñador",
                component: VistaDiseñador,
                name: "VistaDiseñador",
                meta: { requiresAuth: true }
            }
        ]
    }
];
