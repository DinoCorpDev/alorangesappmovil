let Home = () => import("../pages/Home");
let ProductDetails = () => import("../pages/ProductDetails");
let ProductListing = () => import("../pages/ProductListing");
let TrackOrder = () => import("../pages/TrackOrder");
let AllCategories = () => import("../pages/AllCategories");
let AllBrands = () => import("../pages/AllBrands");
let AllOffers = () => import("../pages/AllOffers");
let OfferDetails = () => import("../pages/OfferDetails");
let AllBlogs = () => import("../pages/AllBlogs");
let BlogDetails = () => import("../pages/BlogDetails");
let TempLanding = () => import("../pages/TempLanding");
let TestComponents = () => import("../pages/TestComponents");
let Home2 = () => import("../pages/Home2");
let Home3 = () => import("../pages/Home3");
let Home4 = () => import("../pages/Home4");
let About = () => import("../pages/About");
let Brand = () => import("../pages/Brand");
let ListProducts = () => import("../pages/ListProducts");
let Registration2 = () => import("../pages/auth/Registration2");
let RegistrationSuccess = () => import("../pages/auth/RegistrationSuccess");
let ForgotPassword2 = () => import("../pages/auth/ForgotPassword2");

export default [
    {
        path: "/",
        component: TempLanding,
        name: "TempLanding",
        meta: { requiresAuth: false }
    },
    {
        path: "/test-components",
        component: TestComponents,
        name: "TestComponents",
        meta: { requiresAuth: false }
    },
    {
        path: "/forgot-password2",
        component: ForgotPassword2,
        name: "ForgotPassword2",
        meta: { requiresAuth: false }
    },
    {
        path: "/registration2",
        component: Registration2,
        name: "Registration2",
        meta: { requiresAuth: false }
    },
    {
        path: "/registrationsuccess",
        component: RegistrationSuccess,
        name: "RegistrationSuccess",
        meta: { requiresAuth: false }
    },
    {
        path: "/listproducts",
        component: ListProducts,
        name: "ListProducts",
        meta: { requiresAuth: false }
    },
    {
        path: "/about",
        component: About,
        name: "About",
        meta: { requiresAuth: false }
    },
    {
        path: "/brand",
        component: Brand,
        name: "Brand",
        meta: { requiresAuth: false }
    },
    {
        path: "/home4",
        component: Home4,
        name: "Home4",
        meta: { requiresAuth: false }
    },
    {
        path: "/home3",
        component: Home3,
        name: "Home3",
        meta: { requiresAuth: false }
    },
    {
        path: "/home2",
        component: Home2,
        name: "Home2",
        meta: { requiresAuth: false }
    },
    {
        path: "/home",
        component: Home,
        name: "Home",
        meta: { requiresAuth: false }
    },
    {
        path: "/all-categories",
        component: AllCategories,
        name: "AllCategories",
        meta: { requiresAuth: false }
    },
    {
        path: "/all-brands",
        component: AllBrands,
        name: "AllBrands",
        meta: { requiresAuth: false }
    },
    {
        path: "/all-offers",
        component: AllOffers,
        name: "AllOffers",
        meta: { requiresAuth: false }
    },
    {
        path: "/offer/:offerSlug?",
        component: OfferDetails,
        name: "OfferDetails",
        meta: { requiresAuth: false }
    },
    {
        path: "/shop",
        component: ProductListing,
        name: "Shop",
        meta: { requiresAuth: false }
    },
    {
        path: "/category/:categorySlug?",
        component: ProductListing,
        name: "Category",
        meta: { requiresAuth: false }
    },
    {
        path: "/brand/:brandId?",
        component: ProductListing,
        name: "Brand",
        meta: { requiresAuth: false }
    },
    {
        path: "/search/:keyword?",
        component: ProductListing,
        name: "Search",
        meta: { requiresAuth: false }
    },
    {
        path: "/product/:slug",
        component: ProductDetails,
        name: "ProductDetails",
        meta: { requiresAuth: false }
    },
    {
        path: "/track-order",
        component: TrackOrder,
        name: "TrackOrder",
        meta: { requiresAuth: true }
    },
    {
        path: "/all-blogs",
        component: AllBlogs,
        name: "AllBlogs",
        meta: { requiresAuth: false }
    },
    {
        path: "/all-blogs/category/:categorySlug?",
        component: AllBlogs,
        name: "AllBlogsFilter",
        meta: { requiresAuth: false }
    },
    {
        path: "/all-blogs/search/:searchKeyword?",
        component: AllBlogs,
        name: "SearchBlogs",
        meta: { requiresAuth: false }
    },
    {
        path: "/blog-details/:slug",
        component: BlogDetails,
        name: "BlogDetails",
        meta: { requiresAuth: false }
    }
];
