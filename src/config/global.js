export default {
  global: {
    Name: 'Gestión técnica de la línea base y riesgos en sistemas de agua',
    Description:
      'Este componente formativo desarrolla los fundamentos técnicos para la gestión de la línea base y los riesgos asociados a los sistemas de uso del agua, como insumo para la formulación de Programas de Uso Eficiente y Ahorro del Agua (PUEAA). Aborda la identificación y caracterización del punto de captación, las fuentes de abastecimiento, la oferta y demanda hídrica, los sistemas de uso, los usuarios y los consumos, así como la elaboración de balances e indicadores de eficiencia. Asimismo, orienta el análisis de amenazas, vulnerabilidades, elementos expuestos y escenarios de riesgo, mediante herramientas como matrices de evaluación, con el propósito de reconocer condiciones que puedan afectar la disponibilidad, calidad o continuidad del recurso y establecer medidas de prevención, mitigación y optimización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Línea base de demanda de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Punto de captación de agua',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fuente de abastecimiento de agua',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión del riesgo en el sistema de uso de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Matriz de evaluación del riesgo',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aforo',
      significado:
        'Procedimiento utilizado para determinar el caudal o volumen de agua que circula por una fuente o sistema en un período determinado.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Proceso mediante el cual el agua es retenida en tanques, reservorios, cisternas u otras estructuras para garantizar su disponibilidad.',
    },
    {
      termino: 'Captación',
      significado:
        'Conjunto de estructuras y elementos utilizados para obtener agua de una fuente superficial, subterránea, lluvia u otra fuente autorizada.',
    },
    {
      termino: 'Caudal',
      significado:
        'Cantidad de agua que pasa por un punto determinado durante un período de tiempo.',
    },
    {
      termino: 'Conducción',
      significado:
        'Transporte del agua desde el punto de captación hasta los lugares de almacenamiento, tratamiento o utilización.',
    },
    {
      termino: 'Consumo',
      significado:
        'Volumen de agua utilizado por una persona, actividad, proceso o establecimiento durante un período determinado.',
    },
    {
      termino: 'Contaminación',
      significado:
        'Alteración de las características físicas, químicas o biológicas del agua debido a la incorporación de sustancias o agentes que afectan su calidad.',
    },
    {
      termino: 'Cuenca hidrográfica',
      significado:
        'Territorio cuyas aguas superficiales confluyen hacia un mismo río, quebrada, lago u otro cuerpo de agua.',
    },
    {
      termino: 'Disponibilidad hídrica',
      significado:
        'Cantidad de agua existente y aprovechable en una fuente durante un período determinado, considerando sus condiciones naturales y demandas.',
    },
    {
      termino: 'Eficiencia hídrica',
      significado:
        'Capacidad de utilizar el agua de manera adecuada, reduciendo pérdidas y desperdicios sin afectar las actividades que requieren el recurso.',
    },
    {
      termino: 'Fuente de abastecimiento',
      significado:
        'Cuerpo de agua o sistema del cual se obtiene el recurso hídrico para satisfacer diferentes necesidades.',
    },
    {
      termino: 'Macromedidor',
      significado:
        'Instrumento utilizado para medir el volumen total de agua que ingresa o circula por un sistema de abastecimiento.',
    },
    {
      termino: 'Pérdidas de agua',
      significado:
        'Volumen del recurso que no llega al usuario o no es aprovechado debido a fugas, daños, reboses u otras causas.',
    },
    {
      termino: 'Reúso',
      significado:
        'Aprovechamiento de un agua que ha sido utilizada previamente para una actividad y que, bajo condiciones adecuadas, puede destinarse a otro uso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1997). Ley 373 de 1997, por la cual se establece el programa para el uso eficiente y ahorro del agua.',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1523 de 2012, por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres.',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2019). Estudio nacional del agua 2018.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2010). Política Nacional para la Gestión Integral del Recurso Hídrico.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Decreto 1076 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Resolución 1257 de 2018.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). Guía técnica para la formulación de Programas de Uso Eficiente y Ahorro del Agua (PUEAA).',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2021). Guía para la formulación de planes de gestión del riesgo de desastres para entidades públicas y privadas.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Margarita Inés Viloria Villegas',
          cargo: 'Profesional 04',
          centro: 'Centro Biotecnológico del Caribe - Regional Cesar',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
