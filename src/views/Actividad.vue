<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Explorando la gestión eficiente del recurso hídrico.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el nivel de apropiación de los fundamentos relacionados con la Gestión técnica de la línea base y riesgos en sistemas de agua.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de elaborar una línea base en un sistema de uso del agua?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer únicamente el costo del servicio de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conocer las condiciones actuales del sistema para orientar acciones de uso eficiente y ahorro del agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Determinar exclusivamente la calidad del agua para consumo humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar únicamente los usuarios que presentan mayores consumos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 2,
          texto:
            '¿Qué información permite caracterizar la demanda de agua de un sistema?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la ubicación geográfica de la fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los consumos, usuarios, usos del agua y variaciones de la demanda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente las condiciones climáticas de la zona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solamente las características físicas de las tuberías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 3,
          texto: '¿Qué se entiende por punto de captación de agua?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El lugar donde se almacena el agua después de su utilización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sitio donde se realiza la medición del consumo de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El lugar o estructura mediante el cual se extrae el agua de una fuente para su aprovechamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El punto donde se descargan las aguas residuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos es fundamental para caracterizar un punto de captación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La fuente de la cual se obtiene el recurso y las condiciones de la infraestructura de captación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de empleados de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor comercial de los productos elaborados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El horario de atención al público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 5,
          texto: '¿Qué es una fuente de abastecimiento de agua?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sistema utilizado exclusivamente para transportar aguas residuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cuerpo de agua o sistema del cual se obtiene el recurso para satisfacer diferentes necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El mecanismo empleado para medir el consumo individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El lugar destinado únicamente al almacenamiento temporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes puede constituir una fuente de abastecimiento de agua?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un río.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una planta de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una red eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema de ventilación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 7,
          texto:
            '¿Por qué es importante caracterizar la fuente de abastecimiento dentro de la línea base?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite conocer aspectos relacionados con la disponibilidad, comportamiento y calidad del recurso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque permite eliminar la necesidad de realizar mediciones de consumo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque determina exclusivamente el precio del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque reemplaza el análisis de riesgos del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 8,
          texto:
            'Una organización registra el consumo mensual de agua durante un año. ¿Qué utilidad tiene esta información?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite identificar comportamientos, variaciones y tendencias en el consumo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permite determinar únicamente la calidad microbiológica del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite eliminar los procesos de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permite establecer exclusivamente la capacidad de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 9,
          texto: '¿Qué relación existe entre la oferta y la demanda hídrica?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La oferta corresponde al agua disponible y la demanda al volumen requerido o utilizado para satisfacer diferentes necesidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ambas representan exclusivamente el volumen de aguas residuales generado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La oferta corresponde al consumo y la demanda a la calidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambas corresponden únicamente a las características de la infraestructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 10,
          texto:
            '¿Para qué puede utilizarse un balance hídrico dentro de un sistema de uso del agua?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para comparar las entradas y salidas de agua e identificar posibles pérdidas o diferencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para determinar únicamente el tipo de fuente de abastecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reemplazar los registros de consumo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para establecer exclusivamente las condiciones climáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes situaciones puede indicar una pérdida de agua en un sistema?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El volumen captado es significativamente superior al volumen registrado como utilizado, sin una explicación técnica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Todos los consumos registrados coinciden con los usos identificados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se realizan actividades periódicas de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se cuenta con instrumentos adecuados de medición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 12,
          texto:
            '¿Qué función cumplen los indicadores de eficiencia en la gestión del agua?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten evaluar el comportamiento del consumo y determinar el desempeño del sistema frente al uso eficiente del recurso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permiten identificar únicamente los costos de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permiten reemplazar las fuentes de abastecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permiten eliminar la necesidad de establecer metas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 13,
          texto:
            'En la gestión del riesgo de un sistema de agua, ¿qué se entiende por amenaza?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La condición o fenómeno que tiene el potencial de generar afectaciones sobre el sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La capacidad económica de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El volumen de agua utilizado diariamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de infraestructura disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 14,
          texto:
            '¿Qué concepto describe las condiciones que hacen que un sistema sea susceptible a sufrir daños ante una amenaza?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oferta hídrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vulnerabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Demanda hídrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eficiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 15,
          texto:
            'Una tubería deteriorada, un tanque sin protección y una captación expuesta son ejemplos de:',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicadores de demanda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Vulnerabilidades asociadas a la infraestructura del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fuentes de abastecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elementos de oferta hídrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 16,
          texto:
            '¿Qué son los elementos expuestos dentro del análisis de riesgos?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los componentes, personas, infraestructura, actividades o recursos que pueden resultar afectados por una amenaza.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente las fuentes naturales de agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente los equipos utilizados para medir el consumo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los recursos económicos destinados al mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 17,
          texto:
            '¿Cuál situación representa un escenario de riesgo para un sistema de abastecimiento de agua?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una captación ubicada en una zona susceptible a inundaciones y con infraestructura vulnerable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un sistema que cuenta con mantenimiento periódico y equipos en buen estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un registro actualizado de los consumos mensuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una fuente con condiciones adecuadas de disponibilidad y calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la finalidad de una matriz de evaluación de riesgos aplicada a un sistema de agua?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar y valorar amenazas, vulnerabilidades y posibles consecuencias para establecer medidas de intervención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar únicamente el consumo mensual de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar exclusivamente el costo de las obras de infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar las fuentes de agua según su ubicación geográfica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 19,
          texto:
            'Ante la identificación de una amenaza que puede afectar la continuidad del abastecimiento, ¿cuál sería una acción adecuada?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorarla mientras no se presente una emergencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer medidas de prevención y mitigación de acuerdo con el nivel de riesgo identificado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suspender permanentemente el uso de la fuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los registros relacionados con el sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
        {
          id: 20,
          texto:
            '¿Cómo contribuye la gestión de la línea base y los riesgos a la formulación de un PUEAA?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proporciona información técnica para establecer objetivos, metas, indicadores y acciones orientadas al uso eficiente y ahorro del agua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permite formular el programa únicamente con información sobre costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplaza la necesidad de identificar los usuarios y sus consumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se limita a describir las características físicas de la fuente de abastecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Gestión técnica de la línea base y riesgos en sistemas de agua.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Gestión técnica de la línea base y riesgos en sistemas de agua.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la Gestión técnica de la línea base y riesgos en sistemas de agua.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
