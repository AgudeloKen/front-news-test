import "./App.css";
import { useState, useEffect } from "react";
import New from "./components/New";

const INITIAL_FORM = {
  query: "Talento Humano",
  language: "es",
  pageSize: 1,
};

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:8080/news");
      setData(await data.json());
    };
    getData();
  });

  const OnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
    await fetch("http://localhost:8080/news/generate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
    });

    setForm(INITIAL_FORM);
  };

  const handleChange = (e) => {
    console.log(form);
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={OnSubmit}>
          <label htmlFor="language">Lenguage</label>
          <select
            name="language"
            id="language"
            onChange={handleChange}
            value={form.language}
          >
            <option value="es">Español</option>
            <option value="en">Ingles</option>
          </select>

          <label htmlFor="query">
            Indica sobre que noticias quieres buscar
          </label>
          <select
            name="query"
            id="query"
            onChange={handleChange}
            value={form.query}
          >
            <option value="Talento Humano">Talento Humano</option>
            <option value="Comunicación y marca">Comunicación y marca</option>
            <option value="Canales de distribución">
              Canales de distribución
            </option>
            <option value="Autonomía">Autonomía</option>
            <option value="Consumidor">Consumidor</option>
            <option value="Competitividad">Competitividad</option>
            <option
              value={form.language === "es" ? "Tecnología" : "Technology"}
            >
              Tecnología
            </option>
            <option value="Sector energía">Sector energía</option>
            <option value="Sector retail">Sector retail</option>
            <option value="Gestión financiera">Gestión financiera</option>
            <option value="Trabajo autónomo">Trabajo autónomo</option>
            <option value="Movilidad">Movilidad</option>
            <option value="Responsabilidad social">
              Responsabilidad social
            </option>
            <option value="Segmento alta renta">Segmento alta renta</option>
            <option value="Habitat">Habitat</option>
            <option value="Regulación">Regulación</option>
            <option value="Sectores economicos">Sectores economicos</option>
            <option value="Megatendecias">Megatendecias</option>
            <option value="Sector Logística">Sector Logística</option>
            <option value="Salud">Salud</option>
            <option value="Urbanización">Urbanización</option>
            <option value="Escasez de recursos">Escasez de recursos</option>
            <option value="Macroeconomía">Macroeconomía</option>
            <option value="Modelos de alianzas">Modelos de alianzas</option>
            <option value="Inmobiliario">Inmobiliario</option>
            <option value="Nutrición y alimentación">
              Nutrición y alimentación
            </option>
            <option value="Conectividad">Conectividad</option>
            <option value="Coronavirus">Coronavirus</option>
            <option value="Agrícola">Agrícola</option>
            <option value="Mercado LATAM">Mercado LATAM</option>
            <option value="Sistemas de información geográfica">
              Sistemas de información geográfica
            </option>
            <option value="Límites Planetarios">Límites Planetarios</option>
            <option value="Demandas cuidadanas">Demandas cuidadanas</option>
            <option value="Analítica">Analítica</option>
            <option value="Auditoría Interna">Auditoría Interna</option>
            <option value="Transformación digital">
              Transformación digital
            </option>
            <option value="Construcción">Construcción</option>
            <option value="Clase media">Clase media</option>
            <option value="Cambios demográficos">Cambios demográficos</option>
            <option value="Educación">Educación</option>
            <option value="Ciberseguridad">Ciberseguridad</option>
          </select>

          <label htmlFor="pageSize">
            Numero de noticias que quieres generar
          </label>
          <input
            type="number"
            id="pageSize"
            name="pageSize"
            placeholder="Page Size"
            max={10}
            min={1}
            value={form.pageSize}
            onChange={handleChange}
          />
          <input type="submit" value="Generar" />
        </form>
      </div>
      <div className="App">
        {data.map((a) => (
          <New notice={a} key={a.id} />
        ))}
      </div>
    </>
  );
}

export default App;
