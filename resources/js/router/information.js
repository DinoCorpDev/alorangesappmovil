let InformationLayout = () => import("../components/information/InformationLayout");
let PactoAmbiental = () => import("../pages/information/PactoAmbiental");
let TerminosCondiciones = () => import("../pages/information/TerminosCondiciones");
let PolizaGarantia = () => import("../pages/information/PolizaGarantia");
let PrivacidadCokies = () => import("../pages/information/PrivacidadCokies");
let MetodoPago = () => import("../pages/information/MetodoPago");
let LogisticaEnvio = () => import("../pages/information/LogisticaEnvio");

export default [
    {
        path: "/information/",
        component: InformationLayout,
        redirect: "/information/pactoAmbiental",
        children: [
            {
                path: "pactoAmbiental",
                component: PactoAmbiental,
                name: "PactoAmbiental"
            },
            {
                path: "terminosCondiciones",
                component: TerminosCondiciones,
                name: "TerminosCondiciones"
            },
            {
                path: "polizaGarantia",
                component: PolizaGarantia,
                name: "PolizaGarantia"
            },
            {
                path: "privacidadCokies",
                component: PrivacidadCokies,
                name: "PrivacidadCokies"
            },
            {
                path: "metodoPago",
                component: MetodoPago,
                name: "MetodoPago"
            },
            {
                path: "logisticaEnvio",
                component: LogisticaEnvio,
                name: "LogisticaEnvio"
            }
        ]
    }
];
