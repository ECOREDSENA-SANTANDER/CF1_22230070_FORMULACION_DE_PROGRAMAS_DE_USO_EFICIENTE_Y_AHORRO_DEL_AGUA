<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p El agua constituye la base y uno de los recursos naturales estratégicos para el desarrollo económico, social y ambiental de cualquier nación. Su disponibilidad y calidad determinan la sostenibilidad de los ecosistemas, la salud pública, la producción agrícola, industrial y energética, así como el bienestar de las comunidades. En Colombia, considerada uno de los países con mayor riqueza hídrica del mundo, la presión sobre el recurso ha aumentado debido al crecimiento poblacional, la expansión de las actividades productivas, la contaminación de las fuentes y los efectos asociados al cambio climático (IDEAM, 2023).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-3 
        img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col-lg-7
        p.bg1.p-4 Con el propósito de promover una gestión integral del recurso hídrico, la Ley 373 de 1997 estableció la obligatoriedad de formular e implementar Programas para el Uso Eficiente y Ahorro del Agua (PUEAA) para todos los usuarios que lo aprovechen. Posteriormente, el Decreto 1090 de 2018 y la Resolución 1257 de 2018 definieron los lineamientos técnicos para la estructuración de dichos programas, fortaleciendo la planificación del uso sostenible del agua.
        p La formulación de un PUEAA inicia con la elaboración de una línea base que permita conocer las condiciones actuales del sistema de abastecimiento, la oferta y la demanda del recurso, los consumos, los usuarios, las pérdidas y los posibles riesgos asociados al abastecimiento. Esta información constituye la base para establecer metas de ahorro, indicadores de desempeño y estrategias de optimización del recurso hídrico.

    p El presente componente formativo desarrolla los conceptos, procedimientos y herramientas necesarios para elaborar dicha línea base, conforme a la normativa ambiental colombiana y a los principios de la Gestión Integral del Recurso Hídrico (GIRH).





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
