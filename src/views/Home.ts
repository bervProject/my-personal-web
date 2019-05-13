import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
    public getAssets(url: string) : string {
        return `${process.env.BASE_URL}${url}`
    }
}