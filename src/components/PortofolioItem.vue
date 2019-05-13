<template>
    <div class="columns is-multiline">
        <div class="column" v-for="item in items" v-bind:key="item.id">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-square">
                        <img :src="getPic(item.smallImage)" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img class="is-rounded" :src="getPic(item.icon)" alt="Icon">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{item.title}}</p>
                        </div>
                    </div>
                    <div class="content">{{item.description}}</div>
                </div>
                <footer class="card-footer" v-if="item.repository">
                    <a :href="item.repository.github" class="card-footer-item" v-if="item.repository.github">Github</a>
                    <a :href="item.repository.gitlab" class="card-footer-item" v-if="item.repository.gitlab">Gitlab</a>
                </footer>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./PortofolioItem.ts">
</script>