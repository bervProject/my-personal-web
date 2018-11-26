<template>
    <footer class="footer">
        <div class="content has-text-white has-text-centered">
            <p>©
                <b>My Personal Web</b> by
                <a href="https://berviantoleo.000webhostapp.com/">Bervianto Leo Pratama</a>.
            </p>
            <p>
                The source
                code is licensed
                <a
                    href="http://opensource.org/licenses/mit-license.php"
                >MIT</a>. The website content
                is licensed
                <a
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >CC BY NC SA 4.0</a>.
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyFooter extends Vue {}
</script>