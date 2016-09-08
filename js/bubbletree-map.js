$(function () {
    var data = {
        currency: "GTQ",
        aggregated_csv_url: "csv/by-cofog1-then-cofog2.csv",
        amount_col_name: "amount"
    };

    var options = {
        data: data,
        style: {
            labels: {
                "root": "Presupuesto General de Guatemala 2016",
                "01": "Servicios Públicos Generales",
                "02": "Defensa",
                "03": "Orden Público y Seguridad", 
                "04": "Asuntos Económicos",
                "05": "Protección del medio ambiente",
                "06": "Vivienda y servicios comunitarios", 
                "07": "Salud",
                "08": "Actividades recreativas, cultura y religión",
                "09": "Educación", 
                "010": "Protección Social",
                "01.1": "Presidencia",
                "01.2": "Relaciones Exteriores",
                "01.3": "Secretarias y otras dependencias del Ejecutivo",
                "01.8": "Obligaciones del Estado a Cargo del Tesoro",
                "01.7": "Deuda Publica",
                "01.4": "Procuraduría General de la Nación",
                "02.1": "Defensa Nacional",
                "03.6": "Gobernación",
                "04.1": "Finanzas Publicas",
                "04.2": "Economía",
                "04.3": "Agricultura Ganadería y Alimentación",
                "04.4": "Energía y Minas",
                "05.1": "Ambiente y Recursos Naturales",
                "06.1": "Comunicaciones Infraestructura y Vivienda",
                "07.1": "Productos, útiles y equipo médicos",
                "07.2": "Servicios para pacientes externos",
                "07.3": "Servicios hospitalarios",
                "07.4": "Servicios de salud pública",
                "07.5": "Investigación y desarrollo relacionados con la salud",
                "07.6": "Salud n.e.p.",
                "08.1": "Servicios Deportivos y de Recreación",
                "08.2": "Servicios Culturales",
                "08.3": "Servicios de Radio, Televisión y Servicios Editoriales",
                "08.6": "Actividades Deportivas, Recreativas, Cultura y Religión n.c.d",
                "09.1": "Educación Preprimaria y Primaria",
                "09.2": "Educación Media",
                "09.3": "Educación Universitaria o Superior",
                "09.4": "Educación no Atribuible a Ningún Nivel Escolarizado",
                "09.5": "Servicios Auxiliares de la Educación",
                "09.6": "Investigación y Desarrollo Relacionados con la Educación",
                "09.7": "Educación n.c.d",
                "010.1": "Enfermedad, Funcionamiento Corporal y Discapacidad",
                "010.2": "Edad Avanzada",
                "010.3": "Familia e Hijos",
                "010.4": "Desempleo",
                "010.5": "Vivienda",
                "010.6": "Otros Riesgos de Exclusión Social",
                "010.7": "Protección Social n.c.d",
            },
            bubbletype: ['plain', 'icon']
        }
    };

    $('#bubbletree').bubbletree(options);
});
