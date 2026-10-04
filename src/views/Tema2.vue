<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión del riesgo en el sistema de uso de agua

    p La disponibilidad de agua no depende únicamente de la existencia de una fuente de abastecimiento. Factores naturales, antrópicos, tecnológicos e institucionales pueden afectar la continuidad del suministro y comprometer el desarrollo de las actividades productivas o la prestación de servicios.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.p-0.col-9.col-md-8
        img(src='@/assets/curso/temas/t2/img01.png', alt='')
      .col-lg-7
        p Por esta razón, la Resolución 1257 de 2018 establece que, dentro del diagnóstico del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA), deben identificarse las amenazas, vulnerabilidades, elementos expuestos y escenarios de riesgo asociados al sistema de uso del agua. Este análisis permite priorizar medidas preventivas y fortalecer la resiliencia del sistema frente a eventos que puedan afectar la disponibilidad, la cantidad o la calidad del recurso hídrico.
        p.mb-0.bg1.p-3 La gestión del riesgo no debe entenderse únicamente como una respuesta ante emergencias; constituye un proceso permanente de planificación, evaluación, seguimiento y mejora continua, orientado a reducir la probabilidad de ocurrencia de eventos adversos y a minimizar sus consecuencias para las personas, la infraestructura, los ecosistemas y las actividades económicas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Amenazas en el sistema de uso de agua

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una amenaza es la probabilidad de que ocurra un fenómeno natural, tecnológico o antrópico con capacidad para afectar el abastecimiento, la distribución, la calidad o la disponibilidad del agua. Las amenazas pueden generar interrupciones temporales o permanentes del suministro, daños en la infraestructura hidráulica, contaminación de las fuentes o pérdidas económicas significativas. La identificación temprana de las amenazas constituye uno de los principales insumos para formular estrategias de prevención en el PUEAA.
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-5
          .d-flex.align-items-center.titulo-linea-base
            img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
            h3.w-card-text Clasificación de las amenazas

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-md-9
        img(src="@/assets/curso/temas/t2/img03.png")
      .col-lg-7
        p Las amenazas pueden clasificarse según su origen. Amenazas naturales: son aquellas originadas por procesos propios de la naturaleza. Entre las más frecuentes se encuentran:
        .row
          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                | Sequías prolongadas.
              li.d-flex
                i.fas.fa-angle-right2
                | Fenómeno El Niño.
              li.d-flex
                i.fas.fa-angle-right2
                | Fenómeno La Niña.
              li.d-flex
                i.fas.fa-angle-right2
                | Inundaciones.
              li.d-flex
                i.fas.fa-angle-right2
                | Avenidas torrenciales.
          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                | Deslizamientos.
              li.d-flex
                i.fas.fa-angle-right2
                | Sismos.
              li.d-flex
                i.fas.fa-angle-right2
                | Erupciones volcánicas.
              li.d-flex
                i.fas.fa-angle-right2
                | Huracanes y tormentas.
    p Estas amenazas pueden disminuir la disponibilidad del recurso, alterar su calidad o afectar la infraestructura de captación y distribución.       
      
    .tarjeta--container.row.mb-4(data-aos="zoom-in-left")
      .col-md.tarjeta.bg8.p-4.p-md-4.p-lg-5
        .row.mb-4
          .col-4.col-md-8.col-lg-4
            figure
              img(src="@/assets/curso/temas/t2/1.svg")
        h3.text-white Amenazas antrópicas
        p.text-white Son ocasionadas por actividades humanas.
        p.text-white Ejemplos:
        p.text-white.mb-0 • Contaminación industrial.
        p.text-white.mb-0 • Vertimientos domésticos.
        p.text-white.mb-0 • Minería ilegal.
        p.text-white.mb-0 • Deforestación.
        p.text-white.mb-0 • Urbanización no planificada.
        p.text-white.mb-0 • Sobreexplotación de acuíferos.
        p.text-white.mb-0 • Incendios forestales provocados.
        p.text-white.mb-0 • Uso inadecuado del suelo.

      .col-md.tarjeta.bg10.p-4.p-md-4.p-lg-5
        .row.mb-4
          .col-4.col-md-8.col-lg-4
            figure
              img(src="@/assets/curso/temas/t2/2.svg")
        h3 Amenazas tecnológicas
        p Se relacionan con fallas en la infraestructura.
        p Entre ellas:
        p.mb-0 • Rotura de tuberías.
        p.mb-0 • Daños en estaciones de bombeo.
        p.mb-0 • Fallas eléctricas.
        p.mb-0 • Colapso de tanques.
        p.mb-0 • Averías en plantas de tratamiento.
        p.mb-0 • Daños en válvulas.
        p.mb-0 • Fallas de instrumentación.

      .col-md.tarjeta.bg3.p-4.p-md-4.p-lg-5
        .row.mb-4
          .col-4.col-md-8.col-lg-4
            figure
              img(src="@/assets/curso/temas/t2/3.svg")
        h3 Amenazas institucionales
        p Se originan en debilidades administrativas.
        p Ejemplos:
        p.mb-0 • Deficiente mantenimiento.
        p.mb-0 • Escasez de recursos económicos.
        p.mb-0 • Falta de personal capacitado.
        p.mb-0.d-flex • Ausencia de planes de contingencia.
        p.mb-0 • Deficiencias en la operación.
      
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.bg7.p-3
        p #[b Ejemplo:] una planta de alimentos abastecida mediante un pozo profundo presenta la amenaza de una disminución del nivel freático debido a la sobreexplotación del acuífero durante temporadas secas. Adicionalmente, la falta de mantenimiento preventivo de las bombas incrementa el riesgo de interrupciones del suministro.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Vulnerabilidad del sistema de uso de agua

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7.mb-3 
        p La vulnerabilidad es el grado de susceptibilidad que presentan los componentes del sistema ante una amenaza determinada. Un mismo evento puede producir efectos muy diferentes según el nivel de preparación, mantenimiento y capacidad de respuesta del sistema.
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-8
            .d-flex.align-items-center.titulo-linea-base
              img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
              h3.w-card-text Componentes de la vulnerabilidad
        p La vulnerabilidad puede analizarse desde diferentes dimensiones.
      .col-lg-5.col-11.col-md-10
        img(src='@/assets/curso/temas/t2/img04.png', alt='')

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-3.mb-3.p-0.col-8.col-md-5
        img(src='@/assets/curso/temas/t2/img05.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Vulnerabilidad física")
            p Está relacionada con el estado y las condiciones de la infraestructura que hace parte del sistema de abastecimiento y uso del agua. Algunos ejemplos son las tuberías deterioradas, las captaciones expuestas, los tanques sin protección adecuada y los equipos obsoletos. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Vulnerabilidad operativa")
            p Se relaciona con las condiciones de funcionamiento, operación y mantenimiento del sistema. Puede presentarse por ausencia de sistemas de respaldo o redundancia, deficiencias en el mantenimiento, equipos sin calibración y falta de manuales o procedimientos operativos. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Vulnerabilidad ambiental")
            p Está asociada con las condiciones y características de la fuente de abastecimiento y su entorno. Entre los factores que pueden incrementarla se encuentran la erosión, la sedimentación, la pérdida de cobertura vegetal y la contaminación de la cuenca. 

          .tarjeta.color-acento-botones--borde.p-4(titulo="Vulnerabilidad institucional")
            p Corresponde a la capacidad de la organización para planificar, administrar y responder ante situaciones que puedan afectar el sistema de uso del agua. Comprende aspectos como la disponibilidad presupuestal, la capacitación del personal, la gestión documental y la implementación de programas de seguimiento y control. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Vulnerabilidad social")
            p Está relacionada con las prácticas, comportamientos y nivel de participación de los usuarios frente al uso y conservación del recurso hídrico. Puede manifestarse mediante el desperdicio de agua, la baja cultura ambiental, las conexiones ilegales y la limitada participación de la comunidad en acciones de gestión y protección del recurso.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-5
            .d-flex.align-items-center.titulo-linea-base
              img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
              h3.w-card-text Evaluación de la vulnerabilidad
    p Una metodología práctica consiste en asignar valores cualitativos.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-6.mb-3 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 5.
            span Escala de valoración cualitativa

          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.bg3.izq Nivel
                  th.w-50.bg3.izq Descripción
              tbody
                tr
                  td #[b Muy baja]
                  td El sistema cuenta con controles suficientes.
                tr
                  td #[b Baja]
                  td Existen pequeñas debilidades.
                tr
                  td #[b Media]
                  td Se requieren mejoras importantes.
                tr
                  td #[b Alta]
                  td El sistema presenta fallas significativas.
                tr
                  td #[b Muy alta]
                  td Existe alta probabilidad de afectación.
        .col-lg-6.col-10.col-md-8
          img(src='@/assets/curso/temas/t2/img06.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Elementos expuestos
    p Los elementos expuestos corresponden a todos los componentes que pueden verse afectados por una amenaza. Entre ellos se encuentran:

    .row.mb-4.justify-content-center(data-aos="fade-left")
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.img(src='@/assets/curso/temas/t2/01.svg' alt='')
          .tarjeta.bg1.w-100
            .p-3
              h5 Infraestructura
              p.mb-0 • Captaciones.
              p.mb-0 • Pozos.
              p.mb-0 • Estaciones de bombeo.
              p.mb-0 • Tanques.
              p.mb-0 • Redes hidráulicas.
              p.mb-0 • Plantas de tratamiento.

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.img(src='@/assets/curso/temas/t2/01.svg' alt='')
          .tarjeta.bg1.w-100
            .p-3
              h5 Personas
              p.mb-0 • Operarios.
              p.mb-0 • Funcionarios.
              p.mb-0 • Usuarios.
              p.mb-0 • Visitantes.

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.img(src='@/assets/curso/temas/t2/01.svg' alt='')
          .tarjeta.bg1.w-100
            .p-3
              h5 Recursos naturales
              p.mb-0 • Ríos.
              p.mb-0 • Quebradas.
              p.mb-0 • Acuíferos.
              p.mb-0 • Humedales.
              p.mb-0 • Ecosistemas asociados.

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.img(src='@/assets/curso/temas/t2/01.svg' alt='')
          .tarjeta.bg1.w-100
            .p-3
              h5 Procesos productivos
              p.mb-0 • Producción.
              p.mb-0 • Riego.
              p.mb-0 • Refrigeración.
              p.mb-0 • Lavado.
              p.mb-0 • Generación de vapor.

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.img(src='@/assets/curso/temas/t2/01.svg' alt='')
          .tarjeta.bg1.w-100
            .p-3
              h5 Información
              p.mb-0 • Bases de datos.
              p.mb-0 • Planos.
              p.mb-0 • Registros históricos.
              p.mb-0 • Sistemas de monitoreo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Agentes detonantes

    p Los agentes detonantes son los factores que desencadenan una amenaza. Ejemplos: lluvias intensas; sequías; incendios; contaminación accidental; fallas eléctricas; vandalismo; derrames de sustancias peligrosas; roturas de tuberías.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Escenarios de riesgo

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-6.mb-3 
        img(src='@/assets/curso/temas/t2/img07.png', alt='')
      .col-lg-6
        p Un escenario de riesgo describe la interacción entre una amenaza, una vulnerabilidad y los elementos expuestos. Por ejemplo, un sistema de abastecimiento de agua puede enfrentar una sequía prolongada como amenaza, mientras que su dependencia de una única fuente superficial constituye una condición de vulnerabilidad que incrementa su susceptibilidad ante este evento. En este escenario, el sistema de abastecimiento constituye el elemento expuesto y, como consecuencia, puede producirse un desabastecimiento parcial que afecte la continuidad del suministro de agua.

    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1 Matriz de evaluación del riesgo

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-7.mb-3 
          p La matriz de evaluación del riesgo es una herramienta de análisis que permite estimar el nivel de riesgo mediante la combinación de la probabilidad de ocurrencia de una amenaza y la severidad de sus consecuencias. Su aplicación facilita la priorización de los riesgos que requieren intervención inmediata y constituye una práctica ampliamente utilizada en la gestión ambiental, la seguridad industrial y la gestión del recurso hídrico (ISO, 2019).
          p.bg9.p-3 En el marco del PUEAA, la matriz de riesgo permite identificar los procesos o componentes del sistema con mayor probabilidad de afectar la disponibilidad o el uso eficiente del agua, lo que orienta la formulación de medidas de prevención, mitigación y control.
        .col-lg-5.p-0.col-9.col-md-8
          img(src='@/assets/curso/temas/t2/img08.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          span Matriz de evaluación de riesgo

        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg3.izq Amenaza
                th.bg3.izq Vulnerabilidad
                th.bg3.izq Probabilidad
                th.bg3.izq Consecuencia
                th.bg3.izq Nivel de riesgo
                th.bg3.izq Medidas propuestas
            tbody
              tr
                td #[b Sequía prolongada]
                td Dependencia de una única fuente.
                td 5
                td 4
                td 20
                td Aprovechamiento de las aguas lluvias y aumento del almacenamiento.
              tr
                td #[b Fugas en la red interna]
                td Infraestructura antigua.
                td 4
                td 3
                td 12
                td Programa de detección y reparación de fugas.
              tr
                td #[b Contaminación de la fuente]
                td Actividades agrícolas aguas arriba.
                td 3
                td 5
                td 15
                td Monitoreo de la calidad del agua y fortalecimiento del tratamiento.
              tr
                td #[b Falla eléctrica]
                td Ausencia de planta de respaldo.
                td 3
                td 4
                td 12
                td Instalación de planta eléctrica y mantenimiento preventivo.
              tr
                td #[b Rebose de tanques]
                td Deficiencias en los controles operativos.
                td 2
                td 3
                td 6
                td Automatización de válvulas y de sensores de nivel.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Interpretación y toma de decisiones

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7.mb-3 
        p La matriz de evaluación del riesgo no solo permite clasificar los riesgos, sino también establecer prioridades para la asignación de recursos y la implementación de acciones correctivas. Los riesgos clasificados como altos o muy altos deben abordarse de manera prioritaria mediante medidas estructurales, operativas o administrativas. Por su parte, los riesgos moderados requieren seguimiento y mejora continua, mientras que los riesgos bajos pueden mantenerse bajo control mediante monitoreo periódico (ISO, 2018; UNGRD, 2021).
        p.bg9.p-3 La integración de esta matriz en el PUEAA facilita la formulación de planes de acción orientados a fortalecer la resiliencia del sistema de uso del agua, optimizar el aprovechamiento del recurso y reducir la probabilidad de interrupciones en el abastecimiento.
      .col-lg-5.col-10.col-md-8
        img(src='@/assets/curso/temas/t2/img09.png', alt='')























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
