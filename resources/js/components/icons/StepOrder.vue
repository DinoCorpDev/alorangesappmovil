<template>
    <div class="d-flex align-center justify-center">
        <svg
            v-if="first"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="38"
            viewBox="0 0 272.412 38"
            preserveAspectRatio="none"
        >
            <path
                d="M278.087,1549.431l-9.205-16.8a3.344,3.344,0,0,0-2.956-1.632H9.327A3.145,3.145,0,0,0,6,1533.923v32.195A3.1,3.1,0,0,0,9.28,1569H266a3.362,3.362,0,0,0,2.911-1.553l9.135-15.436A2.572,2.572,0,0,0,278.087,1549.431Z"
                transform="translate(-6 -1531)"
                :fill="activeColor"
            />
        </svg>
        <svg
            v-else-if="last"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="38"
            viewBox="0 0 269.99 38"
            preserveAspectRatio="none"
        >
            <path
                d="M1012.834,1564.808l7.633-13.151a2.573,2.573,0,0,0,.022-2.579l-7.772-13.926c-1.069-1.915.518-4.151,2.945-4.151h263.425a3.1,3.1,0,0,1,3.28,2.882v32.236a3.1,3.1,0,0,1-3.28,2.882H1015.756C1013.305,1569,1011.72,1566.726,1012.834,1564.808Z"
                transform="translate(-1012.378 -1531)"
                :fill="activeColor"
            />
        </svg>
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="38"
            viewBox="0 0 269.602 38"
            preserveAspectRatio="none"
        >
            <path
                d="M678.334,1564.808l7.633-13.151a2.573,2.573,0,0,0,.022-2.579l-7.772-13.926c-1.069-1.915.518-4.151,2.945-4.151H935.011a3.349,3.349,0,0,1,2.946,1.613l9.189,16.464a2.572,2.572,0,0,1-.022,2.579l-9.154,15.771a3.359,3.359,0,0,1-2.923,1.573H681.256C678.805,1569,677.22,1566.726,678.334,1564.808Z"
                transform="translate(-677.878 -1531)"
                :fill="activeColor"
            />
        </svg>
        <span :class="active ? 'white--text' : 'black--text'" class="text-uppercase bold" style="position: absolute">
            <span :class="shortText ? 'd-none d-md-inline' : ''">{{ text }}</span>
            <span v-if="shortText" class="d-md-none">{{ shortText }}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "StepSvg",
    props: {
        text: {
            type: String
        },
        shortText: {
            type: String
        },
        active: {
            type: Boolean,
            default: false
        },
        first: {
            type: Boolean,
            default: false
        },
        last: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        activeColor() {
            return this.active ? "#161616" : "#DFDFDF";
        }
    }
};
</script>
