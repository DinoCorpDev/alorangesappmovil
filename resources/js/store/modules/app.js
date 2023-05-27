import Mixin from "./../../utils/mixin";

const shopSetting = window.shopSetting;

const loadState = () => ({
    appName: shopSetting.appName,
    appMetaTitle: shopSetting.appMetaTitle,
    appLogo: shopSetting.appLogo,
    appUrl: shopSetting.appUrl,
    demoMode: shopSetting.demoMode,
    maintenanceMode: shopSetting.maintenanceMode,
    appLanguage: shopSetting.appLanguage,
    paymentMethods: shopSetting.paymentMethods,
    offlinePaymentMethods: shopSetting.offlinePaymentMethods,
    userLanguage: localStorage.getItem("shopSelectedLanguage") || shopSetting.appLanguage,
    userCurrency: localStorage.getItem("shopSelectedCurrency") || shopSetting.appCurrency,
    availableCountries: shopSetting.availableCountries.length > 0 ? shopSetting.availableCountries : ["US"],
    availableCurrencies: shopSetting.availableCurrencies.length > 0 ? shopSetting.availableCurrencies : ["USD"],
    allLanguages: shopSetting.allLanguages,
    allCurrencies: shopSetting.allCurrencies,
    generalSettings: shopSetting.general_settings,
    addons: shopSetting.addons,
    banners: shopSetting.banners,
    apiPath: "/api/v1/",
    routerLoading: true,
    refundSettings: shopSetting.refundSettings,
    productQuerries: [],
    unseenProductQuerries: 0,
    previewAvatar: null,
    authFooterLinks: [
        { label: "Información", link: "#" },
        { label: "Solicitudes", link: "#" },
        { label: "Contacto", link: "#" }
    ]
});

export default {
    namespaced: true,
    state: loadState(),
    getters: {
        appName(state) {
            return state.appName;
        },
        appMetaTitle(state) {
            return state.appMetaTitle;
        },
        appLogo(state) {
            return state.appLogo;
        },
        appUrl(state) {
            return state.appUrl.slice(-1) == "/" ? state.appUrl.slice(0, state.appUrl.length - 1) : state.appUrl;
        },
        demoMode(state) {
            return state.demoMode;
        },
        maintenanceMode(state) {
            return state.maintenanceMode;
        },
        apiPath(state) {
            return state.apiPath;
        },
        appLanguage(state) {
            return state.appLanguage;
        },
        userLanguage(state) {
            return state.userLanguage;
        },
        userLanguageObj(state) {
            return state.allLanguages.find(language => language.code === state.userLanguage);
        },
        userCurrency(state) {
            return state.userCurrency;
        },
        userCurrencyObj(state) {
            return state.allCurrencies.find(currency => currency.code === state.userCurrency);
        },
        paymentMethods(state) {
            return state.paymentMethods;
        },
        offlinePaymentMethods(state) {
            return state.offlinePaymentMethods;
        },
        availableCountries(state) {
            return state.availableCountries;
        },
        availableCurrencies(state) {
            return state.availableCurrencies;
        },
        allLanguages(state) {
            return state.allLanguages;
        },
        allCurrencies(state) {
            return state.allCurrencies;
        },
        generalSettings(state) {
            return state.generalSettings;
        },
        banners(state) {
            return state.banners;
        },
        addons(state) {
            return state.addons;
        },
        routerLoading(state) {
            return state.routerLoading;
        },
        refundSettings(state) {
            return state.refundSettings;
        },
        getProductQuerries(state) {
            return state.productQuerries;
        },
        getUnseenProductQuerries(state) {
            return state.unseenProductQuerries;
        }
    },
    mutations: {
        setProductQuerries(state, data) {
            state.productQuerries = data;
            let unseenData = data.filter(data => {
                return data.sender_viewed == 0;
            });
            state.unseenProductQuerries = unseenData.length;
        },
        setLanguage(state, lang) {
            if (state.userLanguage !== lang) {
                state.userLanguage = lang;

                localStorage.removeItem("shopSelectedLanguage");
                localStorage.setItem("shopSelectedLanguage", lang);
            }
        },
        removeLanguage(state) {
            state.userLanguage = state.appLanguage;
            localStorage.removeItem("shopSelectedLanguage");
        },
        setCurrency(state, currency) {
            if(state.userCurrency !== currency) {
                state.userCurrency = currency;

                localStorage.removeItem("shopSelectedCurrency");
                localStorage.setItem("shopSelectedCurrency", currency);
            }
        },
        removeCurrency(state) {
            state.userCurrency = state.appCurrency;
            localStorage.removeItem("shopSelectedCurrency");
        },
        setRouterLoading(state, status) {
            state.routerLoading = status;
        },
        setPreviewAvatar(state, avatar) {
            state.previewAvatar = avatar;
        }
    },
    actions: {
        setLanguage({ commit }, lang) {
            commit("setLanguage", lang);
        },
        removeLanguage({ commit }) {
            commit("removeLanguage");
        },
        async fetchProductQuerries({ commit }) {
            if (this.getters["auth/isAuthenticated"]) {
                const res = await Mixin.methods.call_api("get", `user/querries`);
                if (res.data.success) {
                    commit("setProductQuerries", res.data.data);
                }
            }
        }
    }
};
