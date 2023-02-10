<template>
    <div class="columns is-multiline">
        <div class="column is-6">
            <h4 class="title">
                {{ $t('navigation.community') }}
            </h4>
            <div class="columns is-multiline">
                <div class="column is-6">
                    <a target="_blank"
                        href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=bervianto%2Bleo%2Bpratama&cb-cards.q_operator=AND">
                        <figure class="image is-2by1">
                            <img src="../assets/images/community.png" alt="Community Builder" />
                        </figure>
                    </a>
                </div>
            </div>
        </div>
        <div class="column is-6">
            <h4 class="title">
                Contributions
            </h4>
            <div class="content">
                <ul>
                    <li v-for="contribution of contributionList" :key="contribution.title">
                        <a target="_blank" :href="contribution.link">{{ contribution.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CommunityPage.ts">
</script>
