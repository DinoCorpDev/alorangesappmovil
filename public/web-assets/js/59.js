/*! For license information please see 59.js.LICENSE.txt?id=ab0053b2dcb4f8ccf2ee */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"2gy1":function(t,e,r){"use strict";r.r(e);var n=r("ta7f"),o=r("51uj"),i=r("L2JU");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function p(){}function m(){}var v={};u(v,o,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(L([])));g&&g!==e&&r.call(g,o)&&(v=g);var y=m.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function s(){return new e((function(n,s){!function n(o,i,s,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==a(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}(o,i,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=m,u(y,"constructor",m),u(m,"constructor",p),p.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(y),u(y,c,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)}))}}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={data:function(){return{mobileInputProps:{inputOptions:{type:"tel",placeholder:"phone number"},dropdownOptions:{showDialCodeInSelection:!1,showFlags:!0,showDialCodeInList:!0},autoDefaultCountry:!1,validCharactersOnly:!0,mode:"international"},form:{email:"",phone:"",code:"",invalidPhone:!0,showInvalidPhone:!1},loading:!1,resendLoading:!1}},components:{VueTelInput:o.VueTelInput},validations:{form:{email:{requiredIf:Object(n.requiredIf)((function(){return"email"==this.authSettings.customer_login_with||"email_phone"==this.authSettings.customer_login_with&&"email"==this.authSettings.customer_otp_with})),email:n.email},phone:{requiredIf:Object(n.requiredIf)((function(){return"phone"==this.authSettings.customer_login_with||"email_phone"==this.authSettings.customer_login_with&&"phone"==this.authSettings.customer_otp_with}))},code:{required:n.required}}},computed:h(h(h({},Object(i.c)("auth",["authSettings"])),Object(i.c)("app",["availableCountries"])),{},{emailErrors:function(){var t=[];return this.$v.form.email.$dirty?(!this.$v.form.email.requiredIf&&t.push(this.$i18n.t("this_field_is_required")),!this.$v.form.email.email&&t.push(this.$i18n.t("this_field_is_required_a_valid_email")),t):t},codeErrors:function(){var t=[];return this.$v.form.code.$dirty?(!this.$v.form.code.required&&t.push(this.$i18n.t("this_field_is_required")),t):t}}),methods:h(h(h(h(h(h({},Object(i.b)("auth",{actionLogin:"login"})),Object(i.d)("auth",["updateChatWindow","showLoginDialog"])),Object(i.b)("app",["fetchProductQuerries"])),Object(i.b)("wishlist",["fetchWislistProducts"])),Object(i.b)("cart",["fetchCartProducts"])),{},{phoneValidate:function(t){this.form.invalidPhone=!t.valid,t.valid&&(this.form.showInvalidPhone=!1)},verifyAccount:function(){var t=this;return u(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.form.$touch(),!t.$v.form.$anyError){e.next=3;break}return e.abrupt("return");case 3:if("phone"!=t.authSettings.customer_login_with&&("email_phone"!=t.authSettings.customer_login_with||"phone"!=t.authSettings.customer_otp_with)||!t.form.invalidPhone){e.next=6;break}return t.form.showInvalidPhone=!0,e.abrupt("return");case 6:return t.form.phone=t.form.phone.replace(/\s/g,""),t.loading=!0,e.next=10,t.call_api("post","auth/verify",t.form);case 10:(r=e.sent).data.success?(t.actionLogin(r.data),t.showLoginDialog(!1),t.updateChatWindow(!1),t.fetchWislistProducts(),t.fetchProductQuerries(),t.fetchCartProducts(),t.$router.push(t.$route.query.redirect||{name:"DashBoard"})):t.snack({message:r.data.message,color:"red"}),t.loading=!1;case 13:case"end":return e.stop()}}),e)})))()},resendCode:function(){var t=this;return u(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.form.email.$touch(),!t.$v.form.email.$anyError){e.next=3;break}return e.abrupt("return");case 3:if("phone"!=t.authSettings.customer_login_with&&("email_phone"!=t.authSettings.customer_login_with||"phone"!=t.authSettings.customer_otp_with)||!t.form.invalidPhone){e.next=6;break}return t.form.showInvalidPhone=!0,e.abrupt("return");case 6:return t.form.phone=t.form.phone.replace(/\s/g,""),t.resendLoading=!0,e.next=10,t.call_api("post","auth/resend-code",t.form);case 10:(r=e.sent).data.success?t.snack({message:r.data.message}):t.snack({message:r.data.message,color:"red"}),t.resendLoading=!1;case 13:case"end":return e.stop()}}),e)})))()}}),created:function(){this.$route.params.email&&(this.form.email=this.$route.params.email),this.$route.params.phone&&(this.form.phone=this.$route.params.phone)}},p=r("KHd+"),m=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("v-container",[e("v-row",[e("v-col",{staticClass:"mx-auto",attrs:{cols:"12",lg:"6",md:"8",sm:"10"}},[e("div",{staticClass:"my-5 my-lg-16 rounded-lg pa-5 border overflow-hidden shadow-light"},["email"==t.authSettings.customer_login_with||"email_phone"==t.authSettings.customer_login_with&&"email"==t.authSettings.customer_otp_with?e("div",{staticClass:"info--text mb-3"},[t._v("\n                        "+t._s(t.$t("a_verification_code_has_been_sent_to_your_email"))+"\n                    ")]):"phone"==t.authSettings.customer_login_with||"email_phone"==t.authSettings.customer_login_with&&"phone"==t.authSettings.customer_otp_with?e("div",{staticClass:"info--text mb-3"},[t._v("\n                        "+t._s(t.$t("a_verification_code_has_been_sent_to_your_phone_number"))+"\n                    ")]):t._e(),t._v(" "),e("h1",{staticClass:"text-uppercase lh-1 mb-4"},[e("span",{staticClass:"display-1 primary--text fw-900"},[t._v(t._s(t.$t("verify")))]),t._v(" "),e("span",{staticClass:"d-block display-1 fw-900 grey--text text--darken-3"},[t._v(t._s(t.$t("account")))])]),t._v(" "),"email"==t.authSettings.customer_login_with||"email_phone"==t.authSettings.customer_login_with&&"email"==t.authSettings.customer_otp_with?e("div",{staticClass:"fs-16 fw-500 mb-6"},[t._v(t._s(t.$t("enter_your_email_address_verification_code")))]):"phone"==t.authSettings.customer_login_with||"email_phone"==t.authSettings.customer_login_with&&"phone"==t.authSettings.customer_otp_with?e("div",{staticClass:"fs-16 fw-500 mb-6"},[t._v(t._s(t.$t("enter_your_phone_number_verification_code")))]):t._e(),t._v(" "),e("v-form",{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.verifyAccount()}}},["email"==t.authSettings.customer_login_with||"email_phone"==t.authSettings.customer_login_with&&"email"==t.authSettings.customer_otp_with?e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v(t._s(t.$t("email")))]),t._v(" "),e("v-text-field",{attrs:{placeholder:t.$t("email_address"),type:"email","error-messages":t.emailErrors,"hide-details":"auto",required:"",outlined:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1):t._e(),t._v(" "),"phone"==t.authSettings.customer_login_with||"email_phone"==t.authSettings.customer_login_with&&"phone"==t.authSettings.customer_otp_with?e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v("\n                                "+t._s(t.$t("phone_number"))+"\n                            ")]),t._v(" "),e("vue-tel-input",t._b({attrs:{"only-countries":t.availableCountries},on:{validate:t.phoneValidate},scopedSlots:t._u([{key:"arrow-icon",fn:function(){return[e("span",{staticClass:"vti__dropdown-arrow"},[t._v(" ▼")])]},proxy:!0}],null,!1,2578343687),model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}},"vue-tel-input",t.mobileInputProps,!1)),t._v(" "),t.$v.form.phone.$error?e("div",{staticClass:"v-text-field__details mt-2 pl-3"},[e("div",{staticClass:"v-messages theme--light error--text",attrs:{role:"alert"}},[e("div",{staticClass:"v-messages__wrapper"},[e("div",{staticClass:"v-messages__message"},[t._v(t._s(t.$t("this_field_is_required")))])])])]):t._e(),t._v(" "),!t.$v.form.phone.$error&&t.form.showInvalidPhone?e("div",{staticClass:"v-text-field__details mt-2 pl-3"},[e("div",{staticClass:"v-messages theme--light error--text",attrs:{role:"alert"}},[e("div",{staticClass:"v-messages__wrapper"},[e("div",{staticClass:"v-messages__message"},[t._v("\n                                            "+t._s(t.$t("phone_number_must_be_valid"))+"\n                                        ")])])])]):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[t._v(t._s(t.$t("code")))]),t._v(" "),e("v-otp-input",{attrs:{length:"6",type:"number","error-messages":t.codeErrors,"hide-details":"auto",disabled:t.loading,required:""},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),e("v-btn",{staticClass:"px-12 mb-4",attrs:{"x-large":"",elevation:"0",type:"submit",color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.verifyAccount}},[t._v(t._s(t.$t("verify")))]),t._v(" "),e("v-btn",{staticClass:"px-12 mb-4 ms-3",attrs:{"x-large":"",elevation:"0",type:"button",color:"",loading:t.resendLoading,disabled:t.resendLoading},on:{click:t.resendCode}},[t._v(t._s(t.$t("resend_code")))])],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports}}]);