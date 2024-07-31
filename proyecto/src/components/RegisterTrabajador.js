import axios from 'axios';
import { useState } from 'react';

const RegisterTrabajador = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    telefono: '',
    tipoTrabajo: [],
    tipoUsuario: 'Trabajador',
    archivos: {
      archivoINE: '',
      archivoAntecedentes: '',
      archivoResponsiva: ''
    }
  });

  const { nombre, apellidos, correo, contrasena, confirmarContrasena, telefono, tipoTrabajo, archivos } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCheckboxChange = e => {
    const { value, checked } = e.target;
    setFormData(prevState => {
      if (checked) {
        return { ...prevState, tipoTrabajo: [...prevState.tipoTrabajo, value] };
      } else {
        return { ...prevState, tipoTrabajo: prevState.tipoTrabajo.filter(tipo => tipo !== value) };
      }
    });
  };

  const onFileChange = async e => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Solo se permiten archivos PDF.');
        return;
      }
  
      const formData = new FormData();
      formData.append(name, file);
  
      try {
        const res = await axios.post(`http://localhost:5000/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        // Verificar que el archivo se ha subido correctamente
        if (res.data.uploadedFiles && res.data.uploadedFiles.length > 0) {
          setFormData(prevState => ({
            ...prevState,
            archivos: { ...prevState.archivos, [name]: res.data.uploadedFiles[0].url }
          }));
        } else {
          console.error('No se ha recibido el URL del archivo subido.');
        }
      } catch (err) {
        console.error('Error uploading file:', err);
      }
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { ...formData, documentos: [
        { tipo: 'INE', url: archivos.archivoINE },
        { tipo: 'Antecedentes', url: archivos.archivoAntecedentes },
        { tipo: 'Responsiva', url: archivos.archivoResponsiva }
      ] });
      console.log('Usuario registrado exitosamente:', res.data);
    } catch (err) {
      console.error('Error en el registro:', err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="nombre" value={nombre} onChange={onChange} placeholder="Nombre" required />
      <input type="text" name="apellidos" value={apellidos} onChange={onChange} placeholder="Apellidos" />
      <input type="email" name="correo" value={correo} onChange={onChange} placeholder="Correo" required />
      <input type="password" name="contrasena" value={contrasena} onChange={onChange} placeholder="Contraseña" required />
      <input type="password" name="confirmarContrasena" value={confirmarContrasena} onChange={onChange} placeholder="Confirmar Contraseña" required />
      <input type="text" name="telefono" value={telefono} onChange={onChange} placeholder="Teléfono" />
      
      <label>Tipo de Trabajo:</label>
      <div>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="herreria"
            checked={tipoTrabajo.includes('herreria')}
            onChange={onCheckboxChange}
          />
          Herreria
        </label>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="albañileria"
            checked={tipoTrabajo.includes('albañileria')}
            onChange={onCheckboxChange}
          />
          Albañileria
        </label>
        <label>
          <input
            type="checkbox"
            name="tipoTrabajo"
            value="carpinteria"
            checked={tipoTrabajo.includes('carpinteria')}
            onChange={onCheckboxChange}
          />
          Carpinteria
        </label>
      </div>

      <label>Subir INE:</label>
      <input type="file" name="archivoINE" onChange={onFileChange} />
      <label>Subir Antecedentes:</label>
      <input type="file" name="archivoAntecedentes" onChange={onFileChange} />
      <label>Subir Responsiva:</label>
      <input type="file" name="archivoResponsiva" onChange={onFileChange} />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterTrabajador;
