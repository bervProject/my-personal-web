<template>
    <div>
        <h2 class="title">
            Public Speaking Histories
        </h2>
        <div class="columns">
            <b-table :data="speakingData" >
                <b-table-column field="event" label="Event" v-slot="props">
                    {{ props.row.event }}
                </b-table-column>
                <b-table-column field="topics" label="Topics" v-slot="props">
                    {{ props.row.topics }}
                </b-table-column>
                <b-table-column field="date" label="Date" v-slot="props">
                    {{ showDate(props.row.date) }}
                </b-table-column>
                <b-table-column field="link" label="Link" v-slot="props">
                    <a class="button is-primary" :href="props.row.link">Visit</a>
                </b-table-column>
            </b-table>
        </div>
        <b-button tag="a" type="is-primary" href="https://berviantoleo.notion.site/Speaker-Experiences-e2a28dba41c94e158d5dc3d901d8bb17">More Details</b-button>
    </div>
</template>
<script lang="ts">
import moment from 'moment';

export default {
    data() {
        return {
            speakingData: [
                {
                    id: 2,
                    event: "AWS X Dicoding LIVE : \"Compute Services in AWS\"",
                    date: "11-10-2022",
                    topics: "AWS",
                    link: "https://www.youtube.com/watch?v=isF7w2Hwac8"
                },
                {
                    id: 1,
                    event: "How to Scale AWS Services",
                    date: "06-28-2022",
                    topics: "AWS",
                    link: "https://www.youtube.com/watch?v=ZMH-CSHVy10"
                }
            ]
        };
    },
    methods: {
        showDate(date: string) {
            return moment(date, "MM-DD-YYYY").format("MMMM Do YYYY");
        }
    }
};
</script>