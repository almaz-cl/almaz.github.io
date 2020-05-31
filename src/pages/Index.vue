<template lang="pug">
  Layout

    section.head
        .container.mx-auto
            .md_grid.grid-cols-2.gap-0.md_flex.items-center
                div.text-center
                    h1.leading-none.text-6xl.border-b-2.inline-block.pb-2.mb-2 Almaz Belly <br>Dance Studio
                    p.uppercase Academia de Danza de Primer Nivel

                div
                    .text-right
                        g-image(src="~/images/almaz.jpg" alt="Almaz Belly Dance Studio")


    section#quien-soy.px-10.bg-c2.py-16.text-white.fill-current(style="background-image:url('./images/bg.svg');background-size:15%;")
        .container.mx-auto.md_px-24.px-5
            h2.text-4xl.uppercase Aprende a moverte con estilo y elegancia
            p ¡Aprende Danza Oriental!

            h3.text-xl.mt-10 Bienvenidos a Academia de Danza Oriental Almaz Nur, fundada el 2 de marzo del año 2016.
            p Desde nuestro ambiente hasta nuestros salones de baile, todo fue planeado con el fin de brindarles a nuestros alumnos y alumnas  la mejor experiencia posible.
            p Vèn a aprender con nosotros de èsta magica y hermosa danza milenaria en clasesdanzaoriental.cl, que te transportarà a tiempos ancestrales .
            p Todos nuestros instructores son amables y están certificados para impartir lecciones de danza para todos los niveles. Ya sea que desees enfocarte en técnica, flexibilidad, o que sólo quieras ejercitarte de forma divertida, aquí puedes hacerlo. Revisa nuestro sitio para conocer más y no dudes en contactarnos si tienes alguna pregunta.


    section#cursos.mt-24
        .container.mx-auto
            .text-center
                h2.text-4xl.uppercase Nuestros cursos
                h3.text-xl Únete a nuestra comunidad de baile

            .md_grid.grid-cols-3.gap-0.mt-24(style="background-image:url('./images/bg-2.svg');background-size:9%;")
                article.intermediate.p-10
                    h3.text-2xl Nivel Intermedio
                    p ¡Todos de pie!
                    p Ya sea que desees aprender nuevos pasos de baile o desarrollar tu talento, esta clase es lo que necesitas. Los instructores se comprometen a darle atención especial a cada estudiante y al mismo tiempo hacer avanzar al grupo. Con gusto responderemos cualquier duda que tengas sobre esta o cualquier otra clase ; ¡visítanos o contáctanos!

                article.rhythmology.p-10
                    h3.text-2xl Ritmología
                    p ¡A movernos!
                    p Esta es la clase favorita de muchos estudiantes. Todos disfrutan la oportunidad de explorar los nuevos pasos de baile, y de dominar la ritmologìa acompañada a la danza. Nuestros maravillosos instructores se aseguran de que todos reciban atención individual sin que la clase deje ser para todos. ¿Quieres saber más? Contáctanos ya.

                article.advanced.p-10
                    h3.text-2xl Nivel Avanzado
                    p ¡Arriba y a moverse!
                    p Este curso te tendrá moviéndote en seguida. Muchos de nuestros bailarines disfrutan tomar esta clase, ya que les da la oportunidad de aprender nuevos pasos y de perfeccionar su danza . ¿Quieres saber más? Ponte en contacto con un miembro de nuestro equipo y con gusto te responderemos cualquier duda.



    section#vive-mejor
        .container.mx-auto
            .text-center.py-12.bg-c1
                h2.text-4xl.uppercase Baila mejor. Vive mejor.

            .md_grid.grid-cols-2.md_flex.items-center(style="background-image:url('./images/bg-2.svg');background-size:10%;")
                div
                    .container.mx-auto.p-10
                        p.mb-5 La misión de clasesdanzaoriental.cl es ofrecerle a los alumnos de todos los niveles no sólo clases de danza, sino también diversas experiencias con las que los estudiantes puedan crecer mental y físicamente como bailarines. Nuestros maestros tienen diversas certificaciones y vasta experiencia para enseñar y mostrar distintos estilos y disciplinas.
                        p En clasesdanzaoriental.cl nos apasiona la danza y ayudar a otros a liberar el bailarín que llevan dentro. ¿Listos para mover el cuerpo? Contáctanos para obtener más información de nuestro estudio.
                div
                    Slider


    section#contacto
        .container.mx-auto
            .md_grid.grid-cols-2.gap-0
                div
                    g-image(src="~/images/pp.jpg" alt="contáctame" width="640").img-full

                div.text-center.contact-me.bg-c3(style="height:640px").flex.items-center
                   div.w-full
                        h3.uppercase.text-4xl Ponte en Contacto
                        p.text-2xl
                            a(href="mailto:almaz.bellydance@gmail.com") almaz.bellydance@gmail.com
                        p.text-2xl
                            a(href="tel:+56977416123") +56977416123


    section#precios
        .container.mx-auto
            Pricing


    section#contact-form
        .container.mx-auto
            ContactForm(
                'portalId'= '6519355',
                'formId' = 'c3a39795-58ac-4be0-b951-ca3f405bbef9',
                'CTA_Title' = 'Ponte en contacto',
                'CTA_Message' = 'deja que te llamemos!'
            )

</template>

<script>
    import Pricing from "../components/Pricing";
    import ContactForm from "../components/ContactForm";
    import Slider from "../components/Slider";

export default {
  metaInfo: {
    title: 'Baila Mejor, vive mejor!'
  },
    components: {
        Pricing,
        ContactForm,
        Slider
    }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
