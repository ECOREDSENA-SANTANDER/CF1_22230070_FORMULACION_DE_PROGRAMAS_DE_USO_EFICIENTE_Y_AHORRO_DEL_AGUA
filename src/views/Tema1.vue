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


      .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.img.d-none.d-lg-block(src='@/assets/curso/temas/t1/1.svg' alt='')
            .tarjeta.bg1
              .p-3
                h5 Medidores electromagnéticos
                p.mb-0 Permiten medir el flujo de agua que circula por una tubería.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.img.d-none.d-lg-block(src='@/assets/curso/temas/t1/2.svg' alt='')
            .tarjeta.bg1
              .p-3
                h5 Aforadores
                p.mb-0 Permiten determinar el volumen de agua que circula por un punto específico.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.img.d-none.d-lg-block(src='@/assets/curso/temas/t1/3.svg' alt='')
            .tarjeta.bg1
              .p-3
                h5 Vertederos
                p.mb-0 Utilizan una estructura hidráulica para medir el flujo de agua en canales abiertos.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.img.d-none.d-lg-block(src='@/assets/curso/temas/t1/4.svg' alt='')
            .tarjeta.bg1
              .p-3
                h5 Canales Parshall
                p.mb-0 Permiten determinar el caudal mediante la relación entre el nivel del agua y las características del canal. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.img.d-none.d-lg-block(src='@/assets/curso/temas/t1/5.svg' alt='')
            .tarjeta.bg1
              .p-3
                h5 Macromedidores
                p.mb-0 Se utilizan para registrar grandes volúmenes de agua en sistemas de abastecimiento. 
      
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8
          .cajon.color-primario.p-4.mb-0
            p.mb-0 El registro periódico del caudal permite #[b comparar el  volumen captado con el consumo real], identificar variaciones en la demanda, detectar posibles pérdidas y establecer medidas para mejorar la eficiencia del sistema de abastecimiento y uso del agua.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Permiso de concesión de aguas

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.mb-3 
          img(src='@/assets/curso/temas/t1/img01.png', alt='')
        .col-lg-11
          p En Colombia, el aprovechamiento de #[b aguas de uso público] requiere, como regla general, una concesión de aguas otorgada por la autoridad ambiental competente, de acuerdo con las disposiciones establecidas en la normativa ambiental vigente y las excepciones aplicables. Este instrumento permite establecer las condiciones bajo las cuales una persona natural o jurídica puede utilizar una fuente hídrica para un determinado propósito.

      .fondo02.mb-4.p-4
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.mb-3 
            img(src='@/assets/curso/temas/t1/img07.png', alt='')
          .col-lg-8
            p La concesión de aguas permite identificar y controlar aspectos fundamentales del aprovechamiento del recurso, entre ellos:
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.bg6.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/t1/7.png' alt='')
                p.mb-0 #[b Fuente abastecedora:] cuerpo de agua del cual se realiza la captación. 

              .tarjeta.bg6.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/t1/8.png' alt='')
                p.mb-0 #[b Caudal autorizado:] cantidad máxima de agua que puede ser captada, expresada de acuerdo con la unidad establecida en el acto administrativo. 
              
              .tarjeta.bg6.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/t1/9.png' alt='')
                p.mb-0 #[b Uso autorizado:] finalidad para la cual se permite el aprovechamiento del recurso, como consumo humano, uso doméstico, agrícola, pecuario o industrial, según corresponda. 

              .tarjeta.bg6.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/t1/10.png' alt='')
                p.mb-0 #[b Vigencia:] periodo durante el cual se encuentra autorizado el aprovechamiento. 
              
              .tarjeta.bg6.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/t1/11.png' alt='')
                p.mb-0 #[b Obligaciones ambientales:] compromisos que debe cumplir el titular frente al manejo, conservación y uso adecuado del recurso hídrico. 
              
              .tarjeta.bg6.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/t1/12.png' alt='')
                p.mb-0 #[b Condiciones de seguimiento y control:] requisitos establecidos por la autoridad ambiental para verificar el cumplimiento de las condiciones de la concesión. 

      p Durante la formulación del #[b Programa de Uso Eficiente y Ahorro del Agua (PUEAA)], es necesario verificar que la información de la concesión corresponda con las condiciones actuales del sistema de abastecimiento. Para ello, se deben registrar como mínimo:

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-3 
          ul.lista-ul--color
            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Número del acto administrativo que otorga la concesión.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Autoridad ambiental que expidió el acto administrativo.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Fecha de expedición.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Fecha de inicio y terminación de la vigencia, cuando corresponda.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Fuente hídrica autorizada.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Caudal concesionado.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Uso o usos autorizados.

            li.d-flex.mb-1
              i.fas.fa-angle-right2
              | Condiciones y obligaciones ambientales aplicables.
        .col-lg-3.mb-3 
          img(src='@/assets/curso/temas/t1/img08.svg', alt='')
        .col-lg-4.bg7.p-4
          .row 
            .col-lg-3.mb-3
              img(src='@/assets/curso/temas/t1/llave.svg', alt='')
            .col-lg-12
              p.mb-0 Esta verificación permite determinar  si el volumen de agua captado se encuentra dentro de los límites autorizados, identificar posibles inconsistencias y establecer acciones de seguimiento que contribuyan al uso eficiente y sostenible del recurso hídrico.

      separador
      #t_1_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.2 Fuente de abastecimiento de agua

      .row.justify-content-center.mb-3.bg6.g-0
        .col-lg-4.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img09.png', alt='')
        .col-lg-8
          .row.mb-0.p-4
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t1/img10.png', alt='')
            .col-lg-10
              p La fuente de abastecimiento corresponde al cuerpo de agua o sistema del cual se obtiene el recurso hídrico destinado a satisfacer las necesidades de una organización, comunidad, establecimiento o actividad productiva. Según las características del sistema, el agua puede ser utilizada para consumo humano, actividades domésticas, procesos industriales, actividades agrícolas, pecuarias, mineras o de servicios.
            p La identificación y caracterización de la fuente constituye un elemento fundamental de la línea base del Programa de Uso Eficiente y Ahorro del Agua (PUEAA), debido a que permite establecer las condiciones actuales de disponibilidad, captación y aprovechamiento del recurso. Asimismo, facilita el reconocimiento de factores que pueden afectar su sostenibilidad, como las variaciones climáticas, la presión sobre la fuente, los cambios en la demanda y las condiciones de calidad del agua.
      p Para realizar una adecuada caracterización, es importante recopilar información relacionada con la ubicación de la fuente, tipo de fuente, disponibilidad del recurso, caudal, calidad del agua, condiciones de captación, usos autorizados y posibles factores de riesgo o contaminación. Esta información permite establecer un diagnóstico de las condiciones de abastecimiento y sirve como referencia para formular acciones de ahorro, conservación y uso eficiente del recurso hídrico.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Clasificación de las fuentes de abastecimiento

      p Las fuentes de abastecimiento pueden clasificarse de acuerdo con su origen y con la forma en que el recurso es obtenido. Para efectos de la formulación del PUEAA, se pueden considerar las siguientes:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-4
        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/09.png' alt='')
          h4.text-center Fuentes superficiales
          p
            | Corresponden a ríos, quebradas, lagos, lagunas, embalses y otros cuerpos de agua ubicados sobre la superficie terrestre.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/010.png' alt='')
          h4.text-center Fuentes subterráneas
          p
            | Corresponden al agua almacenada en el subsuelo y aprovechada mediante estructuras como pozos, aljibes o galerías filtrantes.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/011.png' alt='')
          h4.text-center Aguas lluvias
          p
            | Corresponden al agua proveniente de las precipitaciones, que puede ser recolectada, almacenada y aprovechada para determinados usos.

        .tarjeta.fondo01.p-3
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/t1/012.png' alt='')
          h4.text-center Aguas residuales tratadas para reúso
          p
            | Corresponden al agua proveniente de procesos de tratamiento que puede ser aprovechada nuevamente para usos que no requieren calidad potable, de acuerdo con las condiciones aplicables.

      .bloque-texto-g.bg3.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Cada tipo de fuente presenta #[b diferentes condiciones de disponibilidad, calidad, vulnerabilidad, requerimientos de tratamiento, costos de aprovechamiento y riesgos ambientales]. Por esta razón, su identificación permite seleccionar estrategias acordes con las características  del sistema y orientar medidas que contribuyan a disminuir el consumo de agua potable, prevenir el desperdicio y garantizar un aprovechamiento sostenible del recurso.
 
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Clasificación según el comportamiento hidrológico     

      p #[b Sistemas lóticos:] cuerpos de agua en movimiento permanente. Ejemplos: ríos, quebradas, arroyos. Presentan una dinámica variable asociada a las precipitaciones y a las condiciones de la cuenca hidrográfica.
      p #[b Sistemas lénticos:] cuerpos de agua con escasa velocidad de circulación. Ejemplos: lagos, lagunas, embalses, ciénagas. Generalmente presentan mayores tiempos de residencia del agua, lo que influye en procesos como la sedimentación y la eutrofización.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span  Clasificación de las fuentes de abastecimiento  
          img(src='@/assets/curso/temas/t1/fig1.svg', alt='Presenta cuatro tipos: aguas superficiales, aguas subterráneas, agua lluvia y agua residual tratada para reúso. Incluye ejemplos de cada fuente y criterios para seleccionar la más adecuada, como disponibilidad, calidad, impacto ambiental, viabilidad técnica y económica, y cumplimiento de la normativa aplicable.')

      .tarjeta.fondo03.p-5.mb-4
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Zonificación hidrográfica nacional
              p En Colombia, la planificación del recurso hídrico se realiza mediante una organización territorial que incluye áreas hidrográficas, zonas hidrográficas, subzonas hidrográficas y unidades hidrológicas. Esta clasificación facilita la gestión integral del agua, el ordenamiento de cuencas y la formulación de instrumentos como los Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA). Para fuentes subterráneas, la caracterización incluye la identificación de la provincia hidrogeológica o del sistema acuífero correspondiente, lo que permite evaluar la disponibilidad del recurso, las condiciones de recarga y los posibles riesgos de sobreexplotación.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt='')
       
          .row
            .col-lg-6.mb-4.mb-md-0
              h5 Información disponible sobre la fuente de abastecimiento
              p La formulación de un Programa para el Uso Eficiente y Ahorro del Agua (PUEAA) requiere recopilar y analizar la información técnica disponible sobre la fuente de abastecimiento. Esta etapa constituye el punto de partida para conocer la disponibilidad del recurso, su comportamiento hidrológico, su calidad, sus usos actuales y las posibles restricciones ambientales. Una caracterización adecuada permite establecer una línea base confiable que sustente la formulación de objetivos, metas e indicadores del programa (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2018).
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt='')
        
      p La información puede provenir de entidades nacionales, autoridades ambientales, empresas prestadoras de servicios públicos, institutos de investigación, universidades o de estudios elaborados para proyectos específicos.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-3 
          img(src='@/assets/curso/temas/t1/img14.png', alt='')
        .col-lg-8
          p Entre las principales fuentes de información se encuentran: 
          .row.justify-content-center
            .col-lg-6.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Estudios hidrológicos e hidrogeológicos.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Estudios de calidad del agua.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Información climática (precipitación, temperatura y evapotranspiración).
                li.d-flex
                  i.fas.fa-angle-right2
                  | Registros históricos de caudales.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Información cartográfica y geográfica.
            .col-lg-6
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Inventarios de usuarios del recurso hídrico.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Modelaciones hidrológicas.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Información sobre concesiones de agua.

                li.d-flex
                  i.fas.fa-angle-right2
                  | Estudios ambientales de proyectos ubicados en la cuenca.


















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
<style lang="sass"></style>
