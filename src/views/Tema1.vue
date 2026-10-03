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

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.mb-3 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2. 
            span Información básica para la caracterización de una fuente de abastecimiento

          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.bg3.izq Información
                  th.w-50.bg3.izq Descripción
                  th.bg3.izq Fuente de consulta
              tbody
                tr
                  td #[b Nombre de la fuente]
                  td Identificación oficial.
                  td Autoridad ambiental.
                tr
                  td #[b Tipo de fuente]
                  td Superficial, subterránea, lluvia o reúso.
                  td PUEAA, estudios.
                tr
                  td #[b Localización]
                  td Coordenadas y municipio.
                  td SIG, cartografía.
                tr
                  td #[b Caudal]
                  td Promedio, máximo y mínimo.
                  td IDEAM.
                tr
                  td #[b Calidad del agua]
                  td Parámetros fisicoquímicos y microbiológicos.
                  td Laboratorios.
                tr
                  td #[b Usuarios existentes]
                  td Aprovechamientos registrados.
                  td Autoridad ambiental.
                tr
                  td #[b Riesgos]
                  td Sequías, contaminación, inundaciones.
                  td POMCA.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/img15.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-9
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA)

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.mb-3 
          img(src='@/assets/curso/temas/t1/velas.svg', alt='')
        .col-lg-11
          p Los Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA) constituyen el principal instrumento de planificación para la gestión integral del recurso hídrico en Colombia. Su propósito es orientar el uso sostenible del territorio, conservar los ecosistemas estratégicos y garantizar la disponibilidad del agua para las generaciones presentes y futuras (MADS, 2014).

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-6.mb-3 
          p Durante la formulación de un PUEAA es indispensable verificar si la fuente de abastecimiento se encuentra dentro de una cuenca con POMCA vigente, debido a que estos planes contienen información sobre:
          .row.justify-content-center
            .col-lg-4.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Oferta hídrica.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Demanda de agua.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Calidad del agua.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Riesgos naturales.
            .col-lg-8
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Ecosistemas estratégicos.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Zonificación ambiental.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Restricciones para nuevos aprovechamientos.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Programas de recuperación y conservación.
        .col-lg-6
          img(src='@/assets/curso/temas/t1/img16.png', alt='')

      p El análisis del POMCA permite identificar oportunidades y limitaciones para el aprovechamiento del recurso hídrico.
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.bg7.p-4
          p.mb-0 #[b Ejemplo:] una empresa ubicada en el departamento de Antioquia obtiene agua del río Medellín. Durante la formulación del PUEAA, debe verificar si el tramo correspondiente está regulado por un POMCA y revisar las medidas de manejo establecidas para dicho tramo. 

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Prestador del servicio de agua
      p Cuando el abastecimiento no proviene directamente de una fuente natural, sino del servicio público de acueducto, debe identificarse al prestador responsable del suministro.
      p La información mínima comprende:

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-4.mb-3
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img17.png', alt='')
        .col-lg-5.mb-3
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              | Nombre de la empresa prestadora.
            li.d-flex
              i.fas.fa-angle-right2
              | Cobertura del servicio.
            li.d-flex
              i.fas.fa-angle-right2
              | Continuidad.
            li.d-flex
              i.fas.fa-angle-right2
              | Calidad del agua suministrada.
            li.d-flex
              i.fas.fa-angle-right2
              | Volumen consumido.
            li.d-flex
              i.fas.fa-angle-right2
              | Tipo de usuario.
            li.d-flex
              i.fas.fa-angle-right2
              | Facturación histórica.
            li.d-flex
              i.fas.fa-angle-right2
              | Índice de Agua No Contabilizada (IANC), cuando esté disponible.
        .col-lg-3
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img18.svg', alt='')

      p Entre los principales prestadores en Colombia se encuentran empresas públicas, mixtas y privadas encargadas de captar, tratar y distribuir agua potable conforme al marco regulatorio nacional.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Línea base de la oferta de agua

      .row.justify-content-center.mb-0
        .col-lg-7.mb-3 
          p La línea base de la oferta de agua corresponde al diagnóstico técnico que describe las condiciones actuales de disponibilidad del recurso hídrico en la fuente de abastecimiento. Su finalidad es establecer un punto de referencia para evaluar la sostenibilidad del aprovechamiento y proyectar las acciones necesarias para garantizar el abastecimiento futuro.
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Esta línea base constituye uno de los componentes esenciales del Programa para el Uso Eficiente y Ahorro del Agua, ya que facilita la identificación de riesgos, limitaciones y oportunidades para optimizar el uso del recurso.
        .col-lg-5
          img(src='@/assets/curso/temas/t1/img19.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-4
          .d-flex.align-items-center.titulo-linea-base
            img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
            h3.w-card-text Objetivos de la línea base

      .row.d-flex.mb-4
        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/13.png', alt='')
            p.text-center Conocer la disponibilidad del recurso hídrico.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/14.png', alt='')
            p.text-center Identificar amenazas sobre la fuente.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/15.png', alt='')
            p.text-center Analizar la variabilidad climática.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/16.png', alt='')
            p.text-center Estimar la capacidad de abastecimiento.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/17.png', alt='')
            p.text-center Evaluar la sostenibilidad del aprovechamiento.

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-2.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/18.png', alt='')
            p.text-center Servir de referencia para el seguimiento del PUEAA.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Información requerida
      p La recopilación de información debe incluir variables hidrológicas, climáticas, ambientales y administrativas.

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-7.mb-3 
          p La recopilación de información debe incluir variables hidrológicas, climáticas, ambientales y administrativas.
          .row.justify-content-center.align-items-center.bg6.p-2
            p Entre las principales se encuentran:
            .col-lg-4.mb-3 
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Caudal medio anual.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Caudal máximo.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Caudal mínimo.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Caudal ecológico.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Régimen de lluvias.
            .col-lg-4.mb-3 
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Temperatura.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Evapotranspiración.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Balance hídrico.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Calidad del agua.
            .col-lg-4.mb-3 
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Demanda actual.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Demanda proyectada.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Usuarios registrados.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Concesiones otorgadas.
        .col-lg-5
          img(src="@/assets/curso/temas/t1/img20.png")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Riesgos asociados a la oferta hídrica
      p Durante el diagnóstico deben identificarse los factores que puedan afectar la disponibilidad del recurso.
      p Los riesgos más frecuentes son:

      .fondo04.mb-4.p-4
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-acento-botones
            .row.justify-content-center(titulo="")
              .col-lg-5
                img(src='@/assets/curso/temas/t1/img22.png', alt='')
              .col-lg-6.mb-4.mb-md-0
                h5 Variabilidad climática
                p Los fenómenos El Niño y La Niña modifican significativamente los caudales disponibles. Durante eventos de El Niño es común la reducción de la oferta hídrica, mientras que durante La Niña aumentan los caudales y el riesgo de inundaciones.

            .row.justify-content-center(titulo="")
              .col-lg-5
                img(src='@/assets/curso/temas/t1/img23.png', alt='')
              .col-lg-6.mb-4.mb-md-0
                h5 Cambio climático
                p El incremento de la temperatura global altera el régimen hidrológico de las cuencas, modifica los patrones de precipitación y aumenta la frecuencia de eventos extremos, lo que afecta la disponibilidad del agua.

            .row.justify-content-center(titulo="")
              .col-lg-5
                img(src='@/assets/curso/temas/t1/img24.png', alt='')
              .col-lg-6.mb-4.mb-md-0
                h5 Contaminación
                p Las descargas domésticas, industriales, agrícolas y mineras deterioran la calidad del agua y reducen el volumen disponible para diversos usos.

            .row.justify-content-center(titulo="")
              .col-lg-5
                img(src='@/assets/curso/temas/t1/img25.png', alt='')
              .col-lg-6.mb-4.mb-md-0
                h5 Sobreexplotación
                p La extracción por encima de la capacidad de recarga de una fuente superficial o subterránea ocasiona la disminución de caudales, el descenso de los niveles freáticos y conflictos por el uso del recurso.

            .row.justify-content-center(titulo="")
              .col-lg-5
                img(src='@/assets/curso/temas/t1/img26.png', alt='')
              .col-lg-6.mb-4.mb-md-0
                h5 Deforestación
                p La pérdida de cobertura vegetal disminuye la infiltración, incrementa la erosión y altera el comportamiento hidrológico de las cuencas.

            .row.justify-content-center(titulo="")
              .col-lg-5
                img(src='@/assets/curso/temas/t1/img27.png', alt='')
              .col-lg-6.mb-4.mb-md-0
                h5 Caudales estimados
                p El conocimiento del comportamiento de los caudales constituye uno de los principales insumos para determinar la disponibilidad del recurso.     
          
      p Los caudales generalmente se expresan como:

      .row.justify-content-center.mb-3
        .col-lg
          .d-flex.align-items-center.bg5.p-2
            img(src='@/assets/curso/temas/t1/001.png', alt='')
            h5.mb-0.ms-2 Caudal medio.

        .col-lg
          .d-flex.align-items-center.bg5.p-2
            img(src='@/assets/curso/temas/t1/001.png', alt='')
            h5.mb-0.ms-2 Caudal máximo.

        .col-lg
          .d-flex.align-items-center.bg5.p-2
            img(src='@/assets/curso/temas/t1/001.png', alt='')
            h5.mb-0.ms-2 Caudal mínimo.

        .col-lg
          .d-flex.align-items-center.bg5.p-2
            img(src='@/assets/curso/temas/t1/001.png', alt='')
            h5.mb-0.ms-2 Caudal ecológico.

        .col-lg
          .d-flex.align-items-center.bg5.p-2
            img(src='@/assets/curso/temas/t1/001.png', alt='')
            h5.mb-0.ms-2 Caudal concesionado.

      p Estos valores permiten determinar si la demanda actual y futura puede ser atendida sin comprometer la sostenibilidad de la fuente.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Estudios y proyecciones de la fuente de abastecimiento

      .row.justify-content-center.mb-3
        .col-lg-9.mb-3 
          p p La información técnica utilizada para caracterizar la oferta puede provenir de:
          .row.justify-content-center
            .col-lg-5.mb-3
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                .lista-ol--cuadro__vineta
                  span a
                | Estudios hidrológicos.
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                .lista-ol--cuadro__vineta
                  span b
                | Estudios hidrogeológicos.
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                .lista-ol--cuadro__vineta
                  span c
                | Modelos de simulación hidrológica.
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                .lista-ol--cuadro__vineta
                  span d
                | Estudios de cambio climático.
            .col-lg-7.mb-3
              ol.lista-ol--cuadro.lista-ol--cuadro--separador.d-flex
                .lista-ol--cuadro__vineta
                  span e
                | Estudios de oferta y demanda hídrica.
              ol.lista-ol--cuadro.lista-ol--cuadro--separador.d-flex
                .lista-ol--cuadro__vineta
                  span f
                | Estudios nacionales del agua.
              ol.lista-ol--cuadro.lista-ol--cuadro--separador.d-flex
                .lista-ol--cuadro__vineta
                  span g
                | Información del Sistema de Información del Recurso Hídrico (SIRH).
              ol.lista-ol--cuadro.lista-ol--cuadro--separador
                .lista-ol--cuadro__vineta
                  span h
                | Información hidrometeorológica del IDEAM.
            p p La consulta de estas fuentes permite construir escenarios prospectivos que apoyen la toma de decisiones y la planificación eficiente del uso del agua.
        .col-lg-3
          img(src='@/assets/curso/temas/t1/img28.png', alt='')
      
      .bloque-texto-g.bg3.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img29.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Ejemplo:] una empresa agroindustrial capta agua de una quebrada con un caudal promedio de 120 L/s y un caudal mínimo de estiaje de 45  L/s. Durante los últimos cinco años se ha observado una disminución progresiva de los caudales, asociada a períodos prolongados de sequía y a cambios en el uso del suelo de la cuenca. Con esta información, la organización puede identificar un riesgo potencial de desabastecimiento y priorizar medidas como la reducción de pérdidas, el almacenamiento estratégico, el reúso de aguas tratadas y la implementación de tecnologías de ahorro.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/icono.svg")
            h3.bg2.py-1.w-card-text Concepto de sistema de uso de agua

      .row.justify-content-center.mb-0
        .col-lg-7.mb-3 
          p Un sistema de uso de agua corresponde al conjunto de procesos, equipos, infraestructura y actividades mediante los cuales el recurso hídrico se captura, conduce, almacena, distribuye, utiliza y, finalmente, descarga o reutiliza dentro de una organización, instalación o proceso productivo.
          p Desde la perspectiva de la gestión ambiental, el sistema debe analizarse como un proceso integrado, en el que cada componente influye en la eficiencia en el uso del agua, el consumo energético, la generación de aguas residuales y los costos operativos.
          .cajon.color-primario.p-4.mb-4
            p.mb-0 El conocimiento detallado del sistema permite identificar oportunidades para reducir pérdidas, optimizar los consumos e implementar tecnologías de ahorro, objetivos centrales del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA) (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2018).
        .col-lg-5.p-0
         img(src='@/assets/curso/temas/t1/img30.png', alt='') 

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-5
          .d-flex.align-items-center.titulo-linea-base
            img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
            h3.w-card-text Objetivos de caracterizar el sistema

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-3.p-0
          img(src='@/assets/curso/temas/t1/img31.png', alt='')
        .col-lg-9
          p La caracterización del sistema de uso de agua tiene como finalidad:
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-3 
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Comprender el funcionamiento del sistema de abastecimiento.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Identificar dónde se consume el agua.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Detectar pérdidas.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Establecer balances hídricos.
            .col-lg-5
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-angle-right2
                  | Determinar indicadores de eficiencia.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Priorizar medidas de ahorro.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Identificar oportunidades de reúso.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Facilitar la formulación del PUEAA.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-5
          .d-flex.align-items-center.titulo-linea-base
            img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
            h3.w-card-text Componentes del sistema
      p Todo sistema de uso de agua está conformado por varios elementos que interactúan entre sí.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2.
            span   Componentes  del sistema de uso de agua 
          img(src='@/assets/curso/temas/t1/fig2.svg', alt='Presenta las etapas y elementos de un sistema para captar, almacenar, distribuir, utilizar y tratar el agua. Se identifican ocho componentes: fuente de abastecimiento, punto de captación, conducción, almacenamiento, red de distribución, usuarios y procesos, tratamiento, y descarga o reúso. También se muestran las entradas del sistema, como agua captada, energía e insumos químicos, y las salidas, como agua consumida, agua residual, pérdidas y agua reutilizada. ')
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-5
          .d-flex.align-items-center.titulo-linea-base
            img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
            h3.w-card-text Tipos de sistemas de uso de agua

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-5.mb-3.p-0
          img(src="@/assets/curso/temas/t1/img32.png")
        .col-lg-7
          p Los sistemas de uso de agua corresponden al conjunto organizado de infraestructuras, equipos, procesos y actividades mediante los cuales una organización capta, conduce, almacena, distribuye, utiliza, reutiliza y dispone del recurso hídrico para satisfacer sus necesidades operativas, productivas o de servicios. Cada sistema presenta características particulares según el origen del agua, la actividad desarrollada, la calidad requerida, el volumen consumido y las condiciones ambientales del entorno (Ministerio de Ambiente y Desarrollo Sostenible – MADS, 2018).
          p La identificación del tipo de sistema constituye una etapa esencial en la formulación del Programa para el Uso Eficiente y Ahorro del Agua (PUEAA), ya que permite comprender el comportamiento de la demanda, identificar oportunidades de optimización y seleccionar tecnologías apropiadas para mejorar la eficiencia hídrica (Congreso de Colombia, 1997).
      p Desde la perspectiva de la Gestión Integral del Recurso Hídrico (GIRH), el conocimiento del sistema de uso facilita la integración entre la oferta, la demanda, la conservación de las fuentes y la sostenibilidad ambiental (MADS, 2010).

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-6
          .d-flex.align-items-center.titulo-linea-base
            img.w-card-icon(src="@/assets/curso/temas/t1/gota.svg")
            h3.w-card-text Clasificación de los sistemas de uso de agua
      p Los sistemas de uso del agua pueden clasificarse según la actividad económica, la fuente de abastecimiento, el nivel tecnológico, el tipo de infraestructura y la forma en que el recurso circula dentro de la organización.












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
