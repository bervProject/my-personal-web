import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class MyHeader extends Vue {
  @Watch('$route')
  public closeBurger(): void {
    const burger = document.getElementById('burger')
    if (burger) {
      burger.classList.remove('is-active')
      const target = burger.dataset.target
      if (target) {
        const $target = document.getElementById(target)
        if ($target) {
          $target.classList.remove('is-active')
        }
      }
    }
  }

  public burgerClick(): void {
    const burger = document.getElementById('burger')
    if (burger) {
      burger.classList.toggle('is-active')
      const target = burger.dataset.target
      if (target) {
        const $target = document.getElementById(target)
        if ($target) {
          $target.classList.toggle('is-active')
        }
      }
    }
  }
}
