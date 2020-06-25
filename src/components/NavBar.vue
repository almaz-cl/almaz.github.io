<template lang="pug">
    header.flex.flex-wrap.items-center.pt-5.px-5
      .flex-1.flex.justify-between.items-center
        g-link( to="/" )
            img(src="images/logo-academia.svg" title="$static.metadata.siteName" width="250")

      label.pointer-cursor.block(for="menu-toggle" class="lg_hidden")
        svg.hamburger.fill-current.text-gray-100(xmlns="http_//www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20")
          title menu
          path(d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z")
        //svg.volver.fill-current.text-gray-100(xmlns="http_//www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20")
          //title cerrar menu
          //polygon(points="20,9.3 3.8,9.3 11.5,1.6 10.1,0.2 1.4,8.8 1.4,8.8 0,10.2 9.7,19.9 11.1,18.5 3.8,11.3 20,11.3 ")

      input#menu-toggle.hidden(type="checkbox")
      #menu.hidden.w-full(class="lg_flex lg_items-center lg_w-auto")
        nav
          ul.items-center.justify-between.text-base.text-gray-700.pt-4(class="lg_flex lg_pt-0")
            li
                <g-link class="font-bold mr-5" to="/#quien-soy">Quien Soy</g-link>
            li
                <g-link class="font-bold mr-5" to="/#cursos">Nuestros cursos</g-link>
            li
                <g-link class="font-bold mr-5" to="/#vive-mejor">Vive Mejor</g-link>
            li
                <g-link class="font-bold mr-5" to="/#planes-y-precios">Planes y precios</g-link>
            li
                <g-link class="font-bold mr-5" to="/#contacto">Contacto</g-link>

</template>
<!--li a.py-3.px-0.block.border-b-2.border-transparent.mb-2(class="lg_p-4 hover_border-indigo-400 lg_mb-0" href="#") Support-->

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }

</style>



<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>