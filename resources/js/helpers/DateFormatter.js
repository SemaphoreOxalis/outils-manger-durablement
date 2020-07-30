// Petit helper pour formatter les dates en français

export default {
    methods: {
        formatToFrench(date) {
            let formattedDate = new Date(date);
            return formattedDate.toLocaleDateString();
        }
    }
}
