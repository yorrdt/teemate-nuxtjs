export default {
    layout: 'tight',
    data() {
        return {
            posts: [],
            text: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.text.trim()) {
                let date = new Date();

                const newText = {
                    id: Date.now(),
                    text: this.text,
                    date: date
                }

                this.posts.push(newText);
                this.posts.reverse();
                this.text = ''
            }
        },
    },
    head() {
        return {
            title: 'TeeMate · Profile'
        }
    }
}
