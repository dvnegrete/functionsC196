function coursesModel(rows){
    const data = [];
    rows
    rows.forEach(column => {
            const register = {
                courseName: column.get('curso'),
                specialty: column.get('especialidad'),
                thematicContent: column.get('contenido_tematico'),
                objective: column.get('objetivo'),
                startTime: column.get('hora_inicio'),
                endTime: column.get('hora_fin'),
                startDate: column.get('fecha_inicio'),
                endDate: column.get('fecha_termino'),
                daysOfClasses: column.get('dias_de_clases'),
                cost: column.get('costo'),
                professor: column.get('profesor'),
                hours: column.get('horas'),
                courseType: column.get('tipo_de_curso'),
                courseModality: column.get('modalidad_curso'),
                searchPhrase: column.get('frase_busqueda'),
                observations: column.get('observaciones'),
            }
            data.push(register);
        });
        return data;
}

module.exports = coursesModel;