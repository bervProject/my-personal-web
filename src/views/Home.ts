import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

    public carousels = [
        { image: 'assets/home/intro.jpg' },
        { image: 'assets/home/intro-2.jpg' },
        { image: 'assets/home/intro-4.jpg' },
        { image: 'assets/home/intro-3.jpg' },
        { image: 'assets/home/intro-5.jpg' }
    ]

    public getAssets(url: string): string {
        return `${process.env.BASE_URL}${url}`
    }
}