export default {
    name: 'routerLink',
    props: {
        to: {
            type: 'string',
            required: true,
        },
        tag: {
            type: 'string',
            default: 'a'
        }
    },
    methods: {
        handle(to) {
            this.$router.push(to);
        }
    },
    return () {
        let {tag, to} = this
        return <tag onClick={this.handle.bind(this,to)}>{this.$slots.default}</tag>
    }
}