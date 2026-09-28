<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión técnica  de la línea base y los riesgos en los sistemas de agua permite conocer, analizar y mejorar las condiciones relacionadas con el uso y aprovechamiento del recurso hídrico. Para ello, se parte de la línea base de demanda de agua, que permite identificar las cantidades de recurso requeridas según las actividades desarrolladas, y se caracterizan el punto de captación y la fuente de abastecimiento, considerando sus condiciones, disponibilidad y posibles afectaciones. Asimismo, la gestión del riesgo en el sistema de uso de agua facilita identificar amenazas y vulnerabilidades que pueden comprometer su disponibilidad, calidad o funcionamiento. Finalmente, la matriz de evaluación del riesgo permite valorar y priorizar estos factores para establecer medidas de prevención, control y seguimiento orientadas al uso eficiente, seguro y sostenible del agua.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la gestión técnica del agua, que aborda la demanda, captación, abastecimiento y evaluación de riesgos del sistema.Incluye la identificación de amenazas y vulnerabilidades para establecer medidas de prevención, control y uso eficiente del recurso.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
