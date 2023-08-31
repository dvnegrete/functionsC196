function coursesModel(rows){
    const data = [];
    rows
    rows.forEach(column => {
            const register = {
                curso: column.get('curso'),
                especialidad: column.get('especialidad'),
                contenido_tematico: column.get('contenido_tematico'),
                objetivo: column.get('objetivo'),
                hora_inicio: column.get('hora_inicio'),
                hora_fin: column.get('hora_fin'),
                fecha_inicio: column.get('fecha_inicio'),
                fecha_termino: column.get('fecha_termino'),
                dias_de_clases: column.get('dias_de_clases'),
                costo: column.get('costo'),
                profesor: column.get('profesor'),
                horas: column.get('horas'),
                tipo_de_curso: column.get('tipo_de_curso'),
                modalidad_curso: column.get('modalidad_curso'),
                observaciones: column.get('observaciones'),
            }
            data.push(register);
        });
        return data;
}

module.exports = coursesModel;