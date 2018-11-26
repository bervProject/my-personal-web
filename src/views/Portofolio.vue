<template>
    <b-tabs position="is-centered" class="block">
        <b-tab-item label="Mobile">
            <portofolio-item :items="mobileData"></portofolio-item>
        </b-tab-item>
        <b-tab-item label="Web">
            <portofolio-item :items="webData"></portofolio-item>
        </b-tab-item>
        <b-tab-item label="Desktop">
            <portofolio-item :items="desktopData"></portofolio-item>
        </b-tab-item>
    </b-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PortofolioItem from '@/components/PortofolioItem.vue'

import MyHeader from '@/components/MyHeader.vue'

@Component({
  components: {
    PortofolioItem,
  },
})
export default class Portofolio extends Vue {
    public mobileData: object[] = [
        {
            title: 'Learn Android',
            description: 'Mobile Application Example to Learn Programming in Android.',
            smallImage: '../assets/images/portofolio/01-large.png',
            icon: '../assets/images/portofolio/01-small.png',
            repository: {
                github: 'https://github.com/bervProject/learn-android'
            }
        },
        {
            title: 'Belitung Information Center',
            description: 'Belitung Information Center using Ionic Framework.',
            repository: {
                github: 'https://github.com/bervProject/belitung-information-center'
            }
        },
        {
            title: 'You Can Use It',
            description: 'You Can Use It using Starling and FeathersUI.',
            repository: {
                github: 'https://github.com/bervProject/You-Can-Use-It'
            }
        },
        {
            title: 'Treasure Hunt',
            description: 'Treasure Hunt is Android Application. This is looks like porting from iOS Application. This project want to pair with iOS Application that have name Sampoerna Events build by Suitmedia. This project build when internship in Suitmedia.'
        }
    ]
    public webData: object[] = [
        {
            title: 'Tweety',
            description: 'Tweety build on ASP.NET Framework MVC (Now Use ASP.NET Core MVC) and C#.',
            repository: {
                github: 'https://github.com/berv-uni-project/tweety'
            }
        },
        {
            title: 'Scheduler OP',
            description: 'Scheduler OP build on Django Framework.',
            repository: {
                github: 'https://github.com/berv-uni-project/scheduler-op'
            }
        },
        {
            title: 'Bervianto Leo Pratama Jekyll Themes',
            description: 'Themes Jekyll used Bulma for My Jekyll Themes',
            repository: {
                github: 'https://github.com/berviantoleo/berviantoleo.github.io'
            }
        },
        {
            title: 'My Personal Site Vue.js',
            description: 'SPA Used Vue.js to created my personal website.',
            repository: {
                github: 'https://github.com/bervProject/my-personal-web'
            }
        }
    ]
    public desktopData: object[] = [
        {
            title: 'Frog Archiver',
            description: 'Frog Archiver using Qt Framework.',
            repository: {
                github: 'https://github.com/berv-uni-project/Frog-Archiver'
            }
        },
        {
            title: 'Hyperdoku Solver',
            description: 'Hyperdoku Solver build on Java and Java Swing.',
            repository: {
                github: 'https://github.com/berv-uni-project/Hyperdoku-Solver'
            }
        }
    ]
}
</script>
