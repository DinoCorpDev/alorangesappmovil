<template>
    <div class="user-layout-title">
        <a class="icon" @click="$router.go(-1)"> &#8592; </a>
        <h1>
            <slot />
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.user-layout-title {
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    .icon {
        font-size: 28px;
        position: absolute;
        left: 0;
    }

    h1 {
        font-size: 24px;
        font-weight: 600;
    }
}
</style>
