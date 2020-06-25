<template>
  <div class="layout bg-black text-white">
    <header class="header container mx-auto">
      <NavBar/>
    </header>
    <hr class="border-b-1 mb-6">
    <main>
    <slot/>
    </main>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar'

  export default {
    components: {
      NavBar
    }
  }

</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>