let Auth = () => import("@pages/auth/Index")
let Login = () => import("@pages/auth/Login");
let Registration = () => import("@components/user/ModalRegister.vue");
let RegistrationSuccess = () => import("@pages/auth/RegistrationSuccess");
let ForgotPassword = () => import("@pages/auth/ForgotPassword");
let NewPassword = () => import("@pages/auth/NewPassword");
let VerifyAccount = () => import("@pages/auth/VerifyAccount");

export default [
    {
        path: "/user",
        component: Auth,
        meta: { requiresAuth: false },
        children: [
            {
                path: "login",
                component: Login,
                name: "Login",
                meta: { requiresAuth: false, hasFooter: false }
            },
            {
                path: "registration",
                component: Registration,
                name: "Registration",
                meta: { requiresAuth: false, hasFooter: false }
            },
            {
                path: "registration/success",
                component: RegistrationSuccess,
                name: "RegistrationSuccess",
                meta: { requiresAuth: false, hasFooter: false }
            },
            {
                path: "forgot-password",
                component: ForgotPassword,
                name: "ForgotPassword",
                meta: { requiresAuth: false, hasFooter: false }
            },
            {
                path: "new-password",
                component: NewPassword,
                name: "NewPassword",
                meta: { requiresAuth: false, hasFooter: false }
            },
            {
                path: "verify-account",
                component: VerifyAccount,
                name: "VerifyAccount",
                meta: { requiresAuth: false, hasFooter: false }
            }
        ]
    }
];
