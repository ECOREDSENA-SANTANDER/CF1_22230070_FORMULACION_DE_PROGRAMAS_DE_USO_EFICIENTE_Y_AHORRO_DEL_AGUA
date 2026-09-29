<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Línea base de demanda de agua
        
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.mb-3 
          img(src='@/assets/curso/temas/t1/img01.png', alt='')
        .col-lg-11
          p La línea base de demanda de agua permite conocer las condiciones actuales relacionadas con el abastecimiento, captación y consumo del recurso hídrico. Para su adecuada caracterización, es necesario identificar el lugar y las condiciones en las que se obtiene el agua, así como los aspectos que intervienen en su disponibilidad y utilización. A continuación, se presenta el punto de captación de agua como elemento fundamental para establecer el diagnóstico inicial.

      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1 Punto de captación de agua

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-3
          img(src='@/assets/curso/temas/t1/img02.png', alt='')
        .col-lg-7
          p El punto de captación de agua es el sitio específico donde se extrae el recurso hídrico de una fuente natural o artificial para abastecer un sistema de acueducto, una industria, un establecimiento comercial, una actividad agrícola o cualquier otro usuario autorizado.
          p Su correcta identificación constituye uno de los primeros pasos en la formulación del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA), ya que permite determinar la procedencia del recurso, las condiciones del aprovechamiento y las restricciones ambientales existentes.
          p De acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (2018), toda captación debe estar respaldada por un permiso de concesión de aguas cuando el recurso provenga de una fuente natural.

      p La identificación del punto de captación permite:

      .row.d-flex.mb-4
        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/1.png', alt='')
            p.text-center Conocer el origen del agua utilizada.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/2.png', alt='')
            p.text-center Verificar la legalidad del aprovechamiento.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/2.png', alt='')
            p.text-center Evaluar posibles afectaciones ambientales.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/3.png', alt='')
            p.text-center Estimar la disponibilidad del recurso.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/4.png', alt='')
            p.text-center Determinar la vulnerabilidad frente a fenómenos climáticos.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/5.png', alt='')
            p.text-center Facilitar el seguimiento por parte de la autoridad ambiental.

      p Esta información constituye un insumo fundamental para el diagnóstico inicial del PUEAA.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Localización espacial

      p La localización espacial consiste en determinar la ubicación exacta del punto de captación mediante herramientas cartográficas y sistemas de información geográfica (SIG). 
      p Normalmente se registra:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-3
        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/01.png' alt='')
          h4.text-center Departamento.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/02.png' alt='')
          h4.text-center Municipio.
        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/03.png' alt='')
          h4.text-center Vereda.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/04.png' alt='')
          h4.text-center Predio.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/05.png' alt='')
          h4.text-center Coordenadas geográficas.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/06.png' alt='')
          h4.text-center Altitud.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/07.png' alt='')
          h4.text-center Cuenca hidrográfica.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/08.png' alt='')
          h4.text-center Subzona hidrográfica.

      p Actualmente es recomendable utilizar sistemas de referencia oficiales como MAGNA-SIRGAS.

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-4.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1. 
            span Variables para localización espacial

          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.bg3 Variable
                  th.w-50.bg3 Información
              tbody
                tr.bg4
                  td Departamento.
                  td Atlántico.
                tr
                  td Municipio.
                  td Soledad.
                tr.bg4
                  td Fuente.
                  td Río Magdalena.
                tr
                  td Coordenadas.
                  td 10°54' N - 74°46' W.
                tr.bg4
                  td Tipo de captación.
                  td Superficial.
        .col-lg-8
          img(src='@/assets/curso/temas/t1/img03.png' alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Tipos de captación

      p Dependiendo del origen del agua, los puntos de captación pueden clasificarse en:

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8.mb-3
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Captación superficial")
              .col-md-12.mb-0.mb-md-0
                p Obtiene agua directamente de ríos, quebradas, lagos, embalses o humedales. Se caracteriza por presentar alta disponibilidad, aunque puede tener variaciones según la época del año y las condiciones climáticas. Generalmente requiere tratamiento previo para garantizar condiciones adecuadas de calidad. Entre los ejemplos se encuentran el río Magdalena, el río Cauca y el embalse de Chingaza.     

            .row(titulo="Captación subterránea")
              .col-md-12.mb-0.mb-md-0
                p Se realiza mediante pozos profundos, aljibes o galerías filtrantes que permiten extraer agua almacenada en el subsuelo. Presenta como ventajas una calidad generalmente más estable, menor exposición a la contaminación superficial y una disponibilidad relativamente constante. Como principales limitaciones se encuentran el riesgo de sobreexplotación y el descenso del nivel freático cuando la extracción supera la capacidad de recuperación del recurso.
            
            .row(titulo="Captación de aguas lluvias")
              .col-md-12.mb-0.mb-md-0
                p Consiste en recolectar el agua proveniente de las precipitaciones mediante cubiertas, canales y tanques de almacenamiento. Puede utilizarse para actividades que no requieren agua potable, como riego, lavado de áreas, descarga de sanitarios y algunos procesos industriales. Su aprovechamiento contribuye al ahorro de agua potable, disminuye la presión sobre otras fuentes de abastecimiento y favorece el uso eficiente del recurso hídrico.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/img04.png' alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Reúso de aguas residuales tratadas

      p El reúso de aguas residuales tratadas consiste en #[b aprovechar nuevamente el agua que ha sido sometida a procesos de tratamiento], de acuerdo con las características de calidad requeridas para el uso al que será destinada. Esta alternativa permite disminuir el consumo de agua potable y reducir la presión sobre las fuentes naturales de abastecimiento.

      .row.justify-content-centermb-2
        .col-lg-6.mb-3
          p El agua residual tratada puede destinarse a actividades que #[b no requieren calidad potable], siempre que cumpla las condiciones establecidas para cada uso. Entre sus principales aplicaciones se encuentran:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              | Riego de zonas verdes y áreas ornamentales. 
            li.d-flex
              i.fas.fa-angle-right2
              | Sistemas de enfriamiento y torres de enfriamiento. 
            li.d-flex
              i.fas.fa-angle-right2
              | Determinados procesos industriales. 
            li.d-flex
              i.fas.fa-angle-right2
              | Lavado de pisos, patios y otras áreas de las instalaciones. 
            li.d-flex
              i.fas.fa-angle-right2
              | Descarga de aparatos sanitarios. 
        .col-lg-6
          img(src='@/assets/curso/temas/t1/img05.png', alt='')

      p El reúso debe considerar aspectos relacionados con la #[b calidad del agua, el tratamiento aplicado, las condiciones de almacenamiento, el sistema de distribución y los posibles riesgos para la salud y el ambiente.] Su implementación contribuye al uso eficiente del recurso hídrico y favorece los principios de la #[b economía circular del agua], al prolongar su aprovechamiento antes de retornarla al ambiente.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Caudal captado
      .row.justify-content-center.mb-1
        .col-lg-7.mb-3 
          p El caudal captado corresponde al volumen de agua que ingresa al sistema de abastecimiento durante un periodo determinado. Su medición es fundamental para establecer la cantidad de agua disponible, determinar la demanda hídrica y evaluar el comportamiento y la eficiencia del sistema de captación.
          p Las unidades más utilizadas para expresar el caudal son:
          ul.lista-ul--color
            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Litros por segundo (L/s). 

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Metros cúbicos por segundo (m³/s). 

            li.d-flex
              i.fas.fa-angle-right2
              | Metros cúbicos por día (m³/día). 
        .col-lg-5
          img(src='@/assets/curso/temas/t1/img06.png', alt='')
      p La determinación del caudal puede realizarse mediante diferentes instrumentos y métodos de medición, entre ellos:


































































  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
