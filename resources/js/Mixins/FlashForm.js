const FlashForm = {
    props: {
        errors: Object,
        success: String,
    },
    methods: {
        hasErrors: function () {
            return _.isEmpty(this.errors);
        },
    },
    watch: {
        errors: {
            immediate: true,
            handler(errors) {
                _.forEach(errors, function (item) {
                    window.flash().error(item[0]);
                });
            },
        },
        success: {
            immediate: true,
            handler(success) {
                if (success) {
                    window.flash().success(success);
                }
            },
        },
    },
}

export default FlashForm;
