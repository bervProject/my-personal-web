import { defineComponent } from "vue"

export default defineComponent({
    data() {
        return {
            contributionList: [
                {
                    title: "Course Contributor - Belajar Implementasi CI/CD - Dicoding",
                    link: "https://www.dicoding.com/academies/428",
                },
                {
                    title: "External Code Reviewer - Dicoding",
                    link: "https://www.dicoding.com/users/berviantoleo",
                }
            ],
            communityList: [
                "4c1544dc-271b-404e-974a-f991320ab9d8",
                "8cad11b0-12d7-4193-b51a-11a0c75de467"
            ]
        }
    }
});
