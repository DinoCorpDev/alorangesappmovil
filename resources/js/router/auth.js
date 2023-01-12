let Login = () => import("../pages/auth/Login");
let Login2 = () => import("../pages/auth/Login2");
let Registration = () => import("../pages/auth/Registration");
let ForgotPassword = () => import("../pages/auth/ForgotPassword");
let NewPassword = () => import("../pages/auth/NewPassword");
let VerifyAccount = () => import("../pages/auth/VerifyAccount");

export default [
    {
        path: "/user/login",
        component: Login,
        name: "Login",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/login2",
        component: Login2,
        name: "Login2",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/registration",
        component: Registration,
        name: "Registration",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/forgot-password",
        component: ForgotPassword,
        name: "ForgotPassword",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/new-password",
        component: NewPassword,
        name: "NewPassword",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/verify-account",
        component: VerifyAccount,
        name: "VerifyAccount",
        meta: { requiresAuth: false }
    }
];
