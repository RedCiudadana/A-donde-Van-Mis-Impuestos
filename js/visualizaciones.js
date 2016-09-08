$(function () {
    $('#graphics-links a').click(function(e) {
        e.preventDefault();
        var targetElementId = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetElementId).offset().top - 84
        }, 500);
    });

    // Visualizaciones Presupuesto
    var spreadhsheetUrl = 'https://docs.google.com/spreadsheets/d/1k0klHXKZ7j0VK9Z4lMElBKVq4cFhzN3Q1k3ko-FRvYI/pubhtml';

    Tabletop.init({
      key: spreadhsheetUrl,
      callback: function(data, tabletop) {
        var dataTipoGasto = tabletop.sheets('tipoGasto').all();
        var dataTipoGastoAnio1 = dataTipoGasto[0];

        $('#PresupuestoTotal').highcharts({
          chart: {
                type: 'area'
            },
            title: {
                text: 'Presupuesto de Egresos 2010-2015'
            },
            subtitle: {
                text: 'Ministerio de Finanzas Públicas. SICOIN'
            },
            xAxis: {
                categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
            },
            yAxis: {
                title: {
                    text: 'Monto en millones de Quetzales'
                },
                min: 000000000
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Q{point.y:.2f} millones'
            },
            series: [{
                name: 'Presupuesto Vigente',
                data: [54283236924, 59174050845, 60047384408, 66985437187, 68695180320, 70715443511, 71068278049]
            }, {
                name: 'Devengado',
                data: [50433179630, 55582584842, 57704546696, 59731100116, 63159923148, 59586975672, 36766124997]
            }]
        });

        $('#Gasto').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Presupuesto de Egresos 2015 y 2016 por Tipo de Gasto'
            },
            subtitle: {
                text: 'Fuente: Ministerio de Finanzas Públicas. SICOIN'
            },
            xAxis: {
                categories: [
                    'Funcionamiento',
                    'Inversión',
                    'Deuda Pública'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Monto en millones de Quetzales'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} millones Q,</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Aprobado 2015',
                data: [47373, 13919, 9308]

            }, {
                name: 'Vigente 2015',
                data: [45744.7, 14710.1, 10260.6]

            }, {
                name: 'Ejecutado 2015',
                data: [41640.2, 10634.2, 10225.9]

            }, {
                name: 'Aprobado 2016',
                data: [46046.8, 12300.6, 12448.9]
            }]
        });

        // Gráfica SubgrupoGasto
        $('#SubgrupoGasto').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Presupuesto de Egresos 2015 y 2016 por Subgrupo Tipo de Gasto'
            },
            subtitle: {
                text: 'Fuente: Ministerio de Finanzas Públicas. SICOIN'
            },
            xAxis: {
                categories: [
                    'Gastos de Administración',
                    'Gastos en Recurso Humano',
                    'Inversión Física',
                    'Transferencias de Capital',
                    'Inversión Financiera',
                    'Deuda Pública'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Monto en millones de Quetzales'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} millones Q,</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Aprobado 2015',
                data: [11220.0, 36153.0, 3445.3, 10412.0, 61.7, 9308.0]

            }, {
                name: 'Vigente 2015',
                data: [9367.2, 36377.5, 4102.8, 10573.5, 33.8, 10260.6]

            }, {
                name: 'Ejecutado 2015',
                data: [7735.7, 33904.5, 2062.3, 8571.9, 0, 10225.9]

            }, {
                name: 'Aprobado 2016',
                data: [8688.5, 37358.3, 2265.8, 9970.2, 64.6, 12448.9]
            }]
        });

        // Gráfica por finalidad
        $('#PorFinalidad').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Asignaciones Presupuestarias Institucionales 2016'
            },
            subtitle: {
                text: 'Fuente: <a href="https://sicoin.minfin.gob.gt">MINFIN</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Monto (millones de Q.)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Presupuesto de Egresos 2016: <b>{point.y:.1f} millones de Q.</b>'
            },
            series: [{
                name: 'Population',
                data: [
                    ['Presidencia de la República', 23.7],
                    ['Relaciones Exteriores', 16.1],
                    ['Gobernación', 14.2],
                    ['Defensa Nacional', 14.0],
                    ['Finanzas Públicas', 12.5],
                    ['Educación', 12.1],
                    ['Salud y Asistencia Social', 11.8],
                    ['Trabajo y Previsión Social', 11.7],
                    ['Economía', 11.1],
                    ['Agricultura, Ganadería y Alimentación,', 11.1],
                    ['Comunicaciones, Infraestructura y Vivienda', 10.5],
                    ['Energía y Minas', 10.4],
                    ['Cultura y Deportes', 10.0],
                    ['Secretarías y otras Dependencias del Ejecutivo', 9.3],
                    ['Ambiente y Recursos Naturales', 9.3],
                    ['Obligaciones del Estado a cargo del Tesoro', 9.0],
                    ['Desarrollo Social', 8.9],
                    ['Servicios de la Deuda Pública', 8.9],
                    ['Procuraduría General de la Nación', 8.9]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });

        // Gráfica por institucion
        $('#PorInstitucion').highcharts({
           chart: {
                type: 'column'
            },
            title: {
                text: 'Asignaciones Presupuestarias Institucionales 2016'
            },
            subtitle: {
                text: 'Fuente: <a href="https://sicoin.minfin.gob.gt">Ministerio de Finanzas Públicas. SICOIN</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Monto (millones de Q.)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Q. <b>{point.y:.1f} millones</b>'
            },
            series: [{
                name: 'Institucion',
                data: [
                    ['Obligaciones del Estado a cargo del Tesoro', 23768.6],
                    ['Servicios de la Deuda Pública', 12449],
                    ['Educación', 12892.3],
                    ['Salud y Asistencia Social', 5531.7],
                    ['Gobernación', 4473.6],
                    ['Comunicaciones, Infraestructura y Vivienda', 3629.4],
                    ['Defensa Nacional', 2061.6],
                    ['Agricultura, Ganadería y Alimentación', 1265],
                    ['Secretarías y otras Dependencias del Ejecutivo', 1115.3],
                    ['Desarrollo Social', 1025.5],
                    ['Trabajo y Previsión Social', 635.8],
                    ['Cultura y Deportes', 445.8],
                    ['Relaciones Exteriores', 399.2],
                    ['Finanzas Públicas', 317.3],
                    ['Economía', 306.3],
                    ['Presidencia de la República', 203.3],
                    ['Ambiente y Recursos Naturales', 142.5],
                    ['Energía y Minas', 70],
                    ['Procuraduría General de la Nación', 64.1]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
      }
    });
});
