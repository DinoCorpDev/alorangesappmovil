<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid class="searchConteiner">
            <div class="bar">
                <h5 class="filter">Filtro</h5>
                <!-- <custom-button @click="queryParam.sortBy = 'nuevo'" class="mr-2 ms-2" light text="Nuevo" />
                <custom-button @click="queryParam.sortBy = 'colecciones'" class="mr-2 ms-2" light text="Colecciones" />
                <custom-button @click="queryParam.sortBy = 'planes'" class="mr-2 ms-2" light text="Planes" />
                <custom-button @click="queryParam.sortBy = 'popular'" class="mr-2 ms-2" light text="Popular" />
                <custom-button @click="queryParam.sortBy = 'marcas'" class="mr-2 ms-2" light text="Marcas" />
                <custom-button @click="queryParam.sortBy = 'ofertas'" class="mr-2 ms-2" light text="Ofertas" /> -->
                <custom-button @click="consoleFilter" class="mr-2 ms-2" light text="Nuevo" />
                <custom-button @click="consoleFilter" class="mr-2 ms-2" light text="Colecciones" />
                <custom-button @click="consoleFilter" class="mr-2 ms-2" light text="Planes" />
                <custom-button @click="consoleFilter" class="mr-2 ms-2" light text="Popular" />
                <custom-button @click="consoleFilter" class="mr-2 ms-2" light text="Marcas" />
                <custom-button @click="consoleFilter" class="mr-2 ms-2" light text="Ofertas" />
            </div>

            <v-divider></v-divider>
            <div class="cards">
                <v-row class="d-flex flex-wrap" v-if="products.length > 0">
                    <v-col cols="12" sm="6" md="4" lg="2" v-for="(product, i) in products" :key="i">
                        <product-box :product-details="product" />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import CustomButton from "../components/global/CustomButton.vue";
import ProductBox from "../components/product/ProductBox.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        CustomButton,
        LayoutNavbarAuth,
        ProductBox
    },
    data() {
        return {
            queryParam: {
                page: 1,
                categorySlug: null,
                brandIds: [],
                attributeValues: [],
                keyword: null,
                sortBy: "popular",
                minPrice: null,
                maxPrice: null
            },
            products: []
        };
    },
    created() {
        this.isBrandRoute = this.$route.params.brandId ? true : this.isBrandRoute;
        this.queryParam.categorySlug = this.$route.params.categorySlug || this.queryParam.categorySlug;
        this.queryParam.keyword = this.$route.params.keyword;
        this.queryParam.brandIds = this.$route.params.brandId || this.queryParam.brandIds;

        this.queryParam.page = this.$route.query.page || this.queryParam.page;
        this.queryParam.sortBy = this.$route.query.sortBy || this.queryParam.sortBy;
        this.queryParam.minPrice = this.$route.query.minPrice || this.queryParam.minPrice;
        this.queryParam.maxPrice = this.$route.query.maxPrice || this.queryParam.maxPrice;
        this.queryParam.attributeValues = this.$route.query.attributeValues || this.queryParam.attributeValues;

        console.log(this.queryParam);

        if (this.queryParam.sortBy !== "popular") {
            let selectedSort = this.sortingOptions.find(sort => sort.value === this.queryParam.sortBy);
            this.sortingDefault = selectedSort;
        }

        this.getList({
            page: this.queryParam.page,
            categorySlug: this.queryParam.categorySlug,
            brandIds: this.queryParam.brandIds,
            attributeValues: this.queryParam.attributeValues,
            keyword: this.queryParam.keyword,
            sortBy: this.queryParam.sortBy,
            minPrice: this.queryParam.minPrice,
            maxPrice: this.queryParam.maxPrice
        });
    },
    methods: {
        async getList(obj) {
            this.loading = true;
            let params = { ...this.queryParam, ...obj };

            let url = "product/search?";
            url += `&page=${this.queryParam.page}`;
            url += params.categorySlug ? `&category_slug=${params.categorySlug}` : "";
            url += params.brandIds ? `&brand_ids=${params.brandIds}` : "";
            url += params.attributeValues ? `&attribute_values=${params.attributeValues}` : "";
            url += params.keyword ? `&keyword=${params.keyword}` : "";
            url += params.sortBy ? `&sort_by=${params.sortBy}` : "";
            url += params.minPrice ? `&min_price=${params.minPrice}` : "";
            url += params.maxPrice ? `&max_price=${params.maxPrice}` : "";

            const res = await this.call_api("get", url);

            if (res.data.success) {
                this.loading = false;
                this.metaTitle = res.data.metaTitle;
                this.products = res.data.products.data;
                this.attributes = res.data.attributes.data;
                this.allBrands = res.data.allBrands.data;
                this.rootCategories = res.data.rootCategories.data;
                this.parentCategory = res.data.parentCategory ? res.data.parentCategory : {};
                this.currentCategory = res.data.currentCategory ? res.data.currentCategory : {};
                this.childCategories = res.data.childCategories ? res.data.childCategories.data : [];
                this.totalPages = res.data.totalPage;
                this.totalProducts = res.data.total;
                this.queryParam.page = res.data.currentPage;
            }
        },
        consoleFilter() {
            console.log("you have clicked me");
        }
    }
};
</script>

<style lang="scss">
.v-application {
    &.theme--light {
        background: #fafcfc;
    }
}
</style>

<style lang="scss" scoped>
.img {
    background-color: #dfdfdf;
    border-radius: 50%;
    padding: 10px 0;
}

.searchConteiner {
    background-color: #ffffff;
}

.cards {
    padding: 10px 0;
    margin: 20px 0px;
}

.filter {
    line-height: 42px;
    padding-right: 30px;
    display: inline-block;
}

.bar {
    margin: 1%;
}
</style>
