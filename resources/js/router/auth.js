let Login = () => import("../pages/auth/Login");
let Login2 = () => import("../pages/auth/Login2");
let Registration = () => import("../pages/auth/Registration");
let Registration2 = () => import("../pages/auth/Registration2");
let RegistrationSuccess = () => import("../pages/auth/RegistrationSuccess");
let ForgotPassword = () => import("../pages/auth/ForgotPassword");
let ForgotPassword2 = () => import("../pages/auth/ForgotPassword2");
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
        path: "/user/registration2",
        component: Registration2,
        name: "Registration2",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/registration/success",
        component: RegistrationSuccess,
        name: "RegistrationSuccess",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/forgot-password",
        component: ForgotPassword,
        name: "ForgotPassword",
        meta: { requiresAuth: false }
    },
    {
        path: "/user/forgot-password2",
        component: ForgotPassword2,
        name: "ForgotPassword2",
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
