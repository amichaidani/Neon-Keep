export default {
    template: `
                <section class="color-picker">
                    <div class="color-picker-btn" :style="{backgroundColor : color}" @click="toggleColorPickerMenu"></div>
                    <div v-if="isColorPickerMenuOpen" class="color-picker-menu">
                        <span v-for="(colorOption, idx) in colorOptions" class="color-picker-option">
                            <div class="color-picker-btn" :style="{backgroundColor : colorOption}" @click="colorChosen(idx)"></div>
                        </span>
                    </div>
                </section>`,
    props: ['color'],
    data() {
        return {
            isColorPickerMenuOpen: false,
            colorOptions: ['blue', 'red', 'yellow', 'green', 'purple', 'white', 'transparent']
        }
    },
    methods: {
        toggleColorPickerMenu() {
            this.isColorPickerMenuOpen = !this.isColorPickerMenuOpen;
        },
        colorChosen(idx) {
            this.$emit('changeColor', this.colorOptions[idx]);
        }
    },
    created() {
        // window.addEventListener('click', function (ev) {
        //     this.toggleColorPickerMenu();
        // });
    }
}