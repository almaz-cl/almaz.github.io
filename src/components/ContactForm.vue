<template lang="pug">
    div
        .p-5.shadow-inner.md_py-64.md_px-24(style="background:url('/images/dancing.jpg') center center no-repeat;background-size:cover;background-position:fixed; ")
                .grid-cols-2.gap-10.py-10.items-center(class="md_flex md_grid")
                    div
                        h2.text-5xl Contáctanos
                        p Si necesitas más información, simplemente rellena el formulario y nos contactaremos contigo a la brevedad
                    div.bg-white.p-5.shadow-lg
                        div#form(v-once)
</template>


<script>

    export default {
        props: ['portalId', 'formId','CTA_Title','CTA_Message'],
        data() {
            return {
                bgImage: this.bg
            }
        },
        mounted() {

            let form = document.getElementById('form')
            const script = document.createElement('script')
            script.src = '//js.hsforms.net/forms/shell.js'
            form.appendChild(script)

            script.addEventListener('load', () => {
                if(window.hbspt) {
                    window.hbspt.forms.create({
                        portalId: this.portalId,
                        formId: this.formId,
                        target: '#form'
                    })
                }
            });
        }
    }

</script>

<style scoped>
    .hbspt-form .hs-form-iframe {
        width: 100% !important;
    }
</style>