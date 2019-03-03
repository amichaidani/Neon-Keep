export default {
    template: `
                <span>
                    {{formattedTime}}
                </span>`,

    props: ['time'],
    data() {
        return {
        }
    },
    computed: {
        formattedTime() {
            let date = new Date(this.time);
            let hour = date.getHours();
            let min = date.getMinutes();
            
            min = (min < 10) ? '0' + min : min;
            let formattedTime = hour + ':' + min + ' ';
            return formattedTime;
        }
    }
}