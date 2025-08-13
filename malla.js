// Materias obligatorias y opcionales para Contador Público
const materiasData = [
  // [semestre, materia, créditos, área, requisitos, tipo]
  // OBLIGATORIAS
  [1, "Conceptos contables", 10, "Contabilidad e impuestos", [], "obligatoria"],
  [1, "Administración y Gestión de las organizaciones 1", 10, "Administración", [], "obligatoria"],
  [1, "Introducción a la microeconomía", 10, "Economía", [], "obligatoria"],
  [1, "Calculo 1", 10, "Métodos cuantitativos", [], "obligatoria"],
  [2, "Contabilidad General 1", 10, "Contabilidad e impuestos", ["Conceptos contables"], "obligatoria"],
  [2, "Derecho Civil", 10, "Jurídica", [], "obligatoria"],
  [2, "Economía descriptiva", 10, "Economía", [], "obligatoria"],
  [3, "Introducción a la estadística", 10, "Economía", ["Calculo 1"], "obligatoria"],
  [3, "Contabilidad General 2", 10, "Contabilidad e impuestos", ["Contabilidad General 1"], "obligatoria"],
  [3, "Derecho Comercial", 10, "Jurídica", ["Derecho Civil"], "obligatoria"],
  [3, "Procesos y Sistemas de información", 10, "Administración", ["Administración y Gestión de las organizaciones 1"], "obligatoria"],
  [4, "Contabilidad General 3", 10, "Contabilidad e impuestos", ["Contabilidad General 2"], "obligatoria"],
  [4, "Matematica financiera", 10, "Métodos cuantitativos", ["Calculo 1"], "obligatoria"],
  [4, "Legislación laboral y seguridad social", 10, "Contabilidad e impuestos", ["Conceptos contables", "Derecho Civil"], "obligatoria"],
  [4, "Derecho societario", 10, "Jurídica", ["Derecho Civil"], "obligatoria"],
  [5, "Modelos y sistemas de costos", 10, "Contabilidad e impuestos", ["Contabilidad General 3"], "obligatoria"],
  [5, "Derecho tributario", 10, "Jurídica", ["10 créditos en el área jurídica"], "obligatoria"],
  [5, "Etica y ejercicio profesional", 5, "Actividades integradoras", ["Contabilidad General 2", "Derecho Comercial"], "obligatoria"],
  [6, "Contabilidad superior 1", 10, "Contabilidad e impuestos", ["50 créditos del área contable."], "obligatoria"],
  [6, "Control interno", 10, "Contabilidad e impuestos", ["Procesos y Sistemas de información", "40 créditos en el área contable."], "obligatoria"],
  [6, "Contabilidad Gerencial", 10, "Contabilidad e impuestos", ["160 créditos de avance de carrera, incluyendo Modelos y Sistemas de Costos y Matemática Financiera."], "obligatoria"],
  [6, "Tributaria 1", 10, "Contabilidad e impuestos", ["Contabilidad General 3", "Derecho Tributario"], "obligatoria"],
  [7, "Auditoría 1", 10, "Contabilidad e impuestos", ["160 créditos de avance de carrera que incluyen: Derecho Societario, Legislación Laboral y Seguridad Social, Control Interno y Contabilidad Superior"], "obligatoria"],
  [7, "Tributaria 2", 10, "Contabilidad e impuestos", ["Tributaria 1"], "obligatoria"],
  [7, "Finanzas corporativas", 10, "Administración", ["Administración y Gestión de las Organizaciones 1", "Matemática Financiera", "Introducción a la Estadística", "40 créditos en el Área de Contabilidad e Impuestos", "30 créditos en el Área de Economía", "180 créditos mínimos de avance en la carrera"], "obligatoria"],
  [8, "Informes profesionales de contador público", 10, "Contabilidad e impuestos", ["Auditoría 1"], "obligatoria"],
  [8, "Práctica pericial en el ámbito Judicial", 5, "Actividades integradoras", ["Contabilidad Superior", "Derecho Comercial", "Derecho Societario", "Ética y Ejercicio Profesional"], "obligatoria"],
  [8, "Gestión financiera del estado", 10, "Administración", ["30 créditos del área contable", "20 créditos del área administración", "15 créditos del área jurídica", "180 créditos de avance de Carrera"], "obligatoria"],

  // OPCIONALES
  [2, "Administración y Gestión de las organizaciones 2", 10, "Administración", ["Administración y Gestión de las organizaciones 1"], "opcional"],
  [2, "Ciencia Política", 10, "Ciencias Sociales y Humanísticas", [], "opcional"],
  [2, "Desarrollo y Bienestar", 10, "Ciencias Sociales y Humanísticas", [], "opcional"],
  [2, "Algebra lineal", 10, "Métodos cuantitativos", [], "opcional"],
  [3, "Macroeconomía 1", 10, "Economía", ["Introducción a la Microeconomía"], "opcional"],
  [3, "Taller de iniciación a la investigación", 10, "Actividades integradoras", ["40 créditos de avance"], "opcional"],
  [4, "Economía Circular", 10, "Actividades integradoras", ["100 créditos"], "opcional"],
  [4, "Administración de Recursos humanos", 10, "Administración", ["Administración y Gestión de las organizaciones 2"], "opcional"],
  [4, "Sistemas de información", 10, "Administración", ["Administración y Gestión de las organizaciones 1", "Contabilidad General 1"], "opcional"],
  [4, "sociología de la empresa y Management", 10, "Ciencias Sociales y Humanísticas", ["80 créditos de avance de carrera que incluya Administración y Gestión 1 ó Introducción a la Microeconomía"], "opcional"],
  [4, "sociología contemporánea", 10, "Ciencias Sociales y Humanísticas", [], "opcional"],
  [4, "sociología económica", 10, "Ciencias Sociales y Humanísticas", [], "opcional"],
  [5, "EFI Microcecea", 10, "Actividades integradoras", ["Contar con 180 créditos aprobados"], "opcional"],
  [5, "Taller de ética y responsabilidad social", 5, "Actividades integradoras", ["Procesos y sistemas de Información", "Modelos y Sistemas de Costos"], "opcional"],
  [5, "EFI: Cooperativas de trabajo y colectivos autogestionados", 10, "Actividades integradoras", ["180 créditos aprobados"], "opcional"],
  [5, "seguros de vida", 10, "Métodos cuantitativos", ["Matemática Financiera", "Introducción a la Estadística"], "opcional"],
  [5, "Marketing Básico", 10, "Administración", [], "opcional"],
  [5, "Análisis de datos en administración", 10, "Métodos cuantitativos", ["Introducción a la Estadística"], "opcional"],
  [6, "Contabilidad de instituciones financieras no bancarias", 10, "Contabilidad e impuestos", ["Tener aprobados 160 créditos de avance de carrera que incluyan Contabilidad General III y Derecho Comercial"], "opcional"],
  [6, "Derecho Público", 10, "Jurídica", [], "opcional"],
  [6, "EFI - Costos para la Gestión de Emprendimientos Sociales y Comunitarios", 10, "Actividades integradoras", ["Contabilidad Gerencial"], "opcional"],
  [6, "Marketing Estratégico", 10, "Administración", ["Marketing Básico"], "opcional"],
  [6, "Comercio Internacional", 10, "Administración", ["15 Créditos Área Jurídica", "Matemática financiera", "Modelo y sistemas de costos"], "opcional"],
  [6, "Introd. al emprendedurismo", 10, "Administración", ["240 créditos de avance de Carrera"], "opcional"],
  [6, "Economía y finanzas públicas", 10, "Economía", ["Introducción a la Microeconomía", "Economía Descriptiva"], "opcional"],
  [6, "Historia Económica del Uruguay", 10, "Ciencias Sociales y Humanísticas", ["30 creditos en economia", "Historia Economica Mundial"], "opcional"],
  [6, "Métodos Cuantitativos en Decisiones Gerenciales", 10, "Métodos cuantitativos", ["Matemática Financiera.", "Introducción a la Estadística", "160 creditos de avance en la carrera"], "opcional"],
  [6, "Derecho Digital", 10, "Jurídica", ["150 créditos de avance de carrera que incluyan Derecho Comercial y Derecho Societario."], "opcional"],
  [6, "Modelos de Comportamiento Estratégico", 10, "Métodos cuantitativos", ["Introducción a la Estadística"], "opcional"],
  [7, "Contabilidad Bancaria", 10, "Contabilidad e impuestos", ["50 Créditos del Área Contable"], "opcional"],
  [7, "Práctica Profesional Inicial", 10, "Actividades integradoras", ["100 créditos del Área Contable", "Tributaria 1"], "opcional"],
  [7, "EFI - Emprendimientos productivos en contexto de encierro", 10, "Actividades integradoras", ["180 créditos aprobados"], "opcional"],
  [7, "Contabilidad Superior 2", 10, "Contabilidad e impuestos", ["Contabilidad Superior 1"], "opcional"],
  [7, "Marketing de Servicios", 10, "Administración", ["Marketing Estratégico"], "opcional"],
  [7, "Marketing Digital", 10, "Administración", ["Marketing Estratégico"], "opcional"],
  [7, "Comportamiento Organizacional", 10, "Administración", ["170 créditos de avance"], "opcional"],
  [7, "Contabilidad Social y Ambiental", 10, "Contabilidad e impuestos", ["Contabilidad Gerencial"], "opcional"],
  [7, "Contabilidad Gerencial Avanzada", 10, "Contabilidad e impuestos", ["Contabilidad Gerencial"], "opcional"],
  [7, "Blockchain y Contabilidad", 5, "Actividades integradoras", ["180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos."], "opcional"],
  [7, "Modelización y Automatización Robótica de Procesos", 10, "Actividades integradoras", ["180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos."], "opcional"],
  [8, "Contabilidades Especiales", 10, "Contabilidad e impuestos", ["270 créditos de avance en la carrera que incluya: Contabilidad Superior I y Auditoría I"], "opcional"],
  [8, "Costos y Gestión de Actividades", 10, "Contabilidad e impuestos", ["Contabilidad Gerencial o Costo para la toma de decisiones"], "opcional"],
  [8, "Tributaria III", 10, "Contabilidad e impuestos", ["Derecho Tributario", "Tributaria I", "Tributaria II"], "opcional"],
  [8, "Auditoría Interna", 10, "Contabilidad e impuestos", ["Control Interno", "Auditoría I"], "opcional"],
  [8, "Logística y Cadena de Suministros", 10, "Contabilidad e impuestos", ["Contabilidad Gerencial"], "opcional"],
  [8, "Contabilidad en Sistemas Integrados de Gestión (SIG/ERP)", 10, "Actividades integradoras", ["180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos."], "opcional"],
  [8, "Información Analítica para la Gestión", 10, "Actividades integradoras", ["180 créditos totales, incluyendo 60 créditos de contabilidad e impuestos."], "opcional"],
  [8, "EFI: CCEEmprende", 10, "Actividades integradoras", ["Administración y Gestión de las Organizaciones I", "Matemática Financiera", "Introducción a la Estadística", "40 créditos en el Área de Contabilidad e Impuestos", "30 créditos en el Área de Economía", "180 créditos mínimos de avance"], "opcional"],
  [8, "Mercados Financieros", 10, "Administración", ["Finanzas Corporativas", "270 créditos aprobados"], "opcional"],
  [8, "Proyectos de Inversión", 10, "Administración", ["Finanzas Corporativas", "30 créditos en Economía", "270 créditos en el avance de la carrera"], "opcional"],
  [8, "Economía y Gestión de Organizaciones de Salud", 10, "Administración", ["Un mínimo de 20 créditos en el Área de Administración.", "Un mínimo de 100 créditos aprobados"], "opcional"],
  [8, "Auditoría de Sistemas de Información", 10, "Contabilidad e impuestos", [], "opcional"]
];

// El resto del código permanece igual que antes

// Utilidades para obtener créditos por área y avance total
function calcularCreditosArea(materiasTachadas, area) {
  return materiasData
    .filter(([_, materia, creditos, areaMateria]) =>
      materiasTachadas[materia] && areaMateria === area
    )
    .reduce((acc, [,,creditos]) => acc + creditos, 0);
}
function calcularCreditosTotal(materiasTachadas) {
  return materiasData
    .filter(([_, materia]) => materiasTachadas[materia])
    .reduce((acc, [,,creditos]) => acc + creditos, 0);
}

// Estado: materias tachadas
let materiasTachadas = JSON.parse(localStorage.getItem("materiasTachadas") || "{}");

// Helper para doble toque en móvil
function addDoubleTapListener(element, singleTapFn, doubleTapFn) {
  let lastTap = 0;
  element.addEventListener("touchend", function(e) {
    let currentTime = new Date().getTime();
    let tapLength = currentTime - lastTap;
    if (tapLength < 400 && tapLength > 0) {
      doubleTapFn(e);
      e.preventDefault();
    } else {
      setTimeout(() => {
        if (!element._doubleTapHandled) singleTapFn(e);
        element._doubleTapHandled = false;
      }, 350);
    }
    lastTap = currentTime;
    element._doubleTapHandled = true;
  });
}

// Construye la UI
function renderMalla() {
  const cont = document.getElementById("malla-container");
  cont.innerHTML = "";

  // Semestres agrupados
  const semestres = [...new Set(materiasData.map(([sem]) => sem))].sort((a,b)=>a-b);
  const filas = [];
  for (let i = 0; i < semestres.length; i += 4) {
    filas.push({
      nombre: `Semestres ${semestres[i]}${semestres[i+3] ? " al "+semestres[i+3] : ""}`,
      desde: semestres[i],
      hasta: semestres[Math.min(i+3, semestres.length-1)]
    });
  }

  filas.forEach((fila, filaIdx) => {
    const filaDiv = document.createElement("div");
    filaDiv.className = "fila-semestres";
    for (let sem = fila.desde; sem <= fila.hasta; sem++) {
      const col = document.createElement("div");
      col.className = "semestre-col";
      const semTitle = document.createElement("div");
      semTitle.className = "semestre-title";
      semTitle.textContent = `Semestre ${sem}`;
      col.appendChild(semTitle);

      // Subtítulo Obligatorias
      const obligT = document.createElement("div");
      obligT.className = "subtitulo-materia";
      obligT.textContent = "Obligatorias";
      col.appendChild(obligT);

      // Materias obligatorias
      let obligatorias = materiasData.filter(([s, , , , , tipo]) => s === sem && tipo === "obligatoria");
      if (obligatorias.length === 0) {
        const v = document.createElement("div");
        v.textContent = "(Ninguna)";
        v.className = "sin-materias";
        col.appendChild(v);
      } else {
        obligatorias.forEach(([_, materia, creditos, area, requisitos]) => {
          const div = document.createElement("div");
          div.className = "materia";
          if (materiasTachadas[materia]) div.classList.add("tachada");
          else if (!cumpleRequisitos(materia)) div.classList.add("bloqueada");
          div.dataset.nombre = materia;
          div.innerHTML = `
            <b>${materia}</b> <span class="creditos">${creditos}cr</span>
            <span class="area">${area}</span>
            <div class="requisitos">${requisitos.length > 0 ? "Requisitos: " + requisitos.join(", ") : ""}</div>
          `;
          if (!div.classList.contains("bloqueada")) {
            // Click y doble click escritorio
            div.addEventListener("click", (e) => {
              if (!materiasTachadas[materia]) {
                materiasTachadas[materia] = true;
                localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                renderMalla();
              }
            });
            div.addEventListener("dblclick", (e) => {
              if (materiasTachadas[materia]) {
                materiasTachadas[materia] = false;
                localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                renderMalla();
              }
            });
            // Doble toque móvil
            addDoubleTapListener(div,
              () => {
                if (!materiasTachadas[materia]) {
                  materiasTachadas[materia] = true;
                  localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                  renderMalla();
                }
              },
              () => {
                if (materiasTachadas[materia]) {
                  materiasTachadas[materia] = false;
                  localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                  renderMalla();
                }
              }
            );
          }
          col.appendChild(div);
        });
      }

      // Subtítulo Opcionales
      const opcT = document.createElement("div");
      opcT.className = "subtitulo-materia";
      opcT.textContent = "Opcionales";
      col.appendChild(opcT);

      // Materias opcionales
      let opcionales = materiasData.filter(([s, , , , , tipo]) => s === sem && tipo === "opcional");
      if (opcionales.length === 0) {
        const v = document.createElement("div");
        v.textContent = "(Ninguna)";
        v.className = "sin-materias";
        col.appendChild(v);
      } else {
        opcionales.forEach(([_, materia, creditos, area, requisitos]) => {
          const div = document.createElement("div");
          div.className = "materia opcional";
          if (materiasTachadas[materia]) div.classList.add("tachada");
          else if (!cumpleRequisitos(materia)) div.classList.add("bloqueada");
          div.dataset.nombre = materia;
          div.innerHTML = `
            <b>${materia}</b> <span class="creditos">${creditos}cr</span>
            <span class="area">${area}</span>
            <div class="requisitos">${requisitos.length > 0 ? "Requisitos: " + requisitos.join(", ") : ""}</div>
          `;
          if (!div.classList.contains("bloqueada")) {
            div.addEventListener("click", (e) => {
              if (!materiasTachadas[materia]) {
                materiasTachadas[materia] = true;
                localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                renderMalla();
              }
            });
            div.addEventListener("dblclick", (e) => {
              if (materiasTachadas[materia]) {
                materiasTachadas[materia] = false;
                localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                renderMalla();
              }
            });
            addDoubleTapListener(div,
              () => {
                if (!materiasTachadas[materia]) {
                  materiasTachadas[materia] = true;
                  localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                  renderMalla();
                }
              },
              () => {
                if (materiasTachadas[materia]) {
                  materiasTachadas[materia] = false;
                  localStorage.setItem("materiasTachadas", JSON.stringify(materiasTachadas));
                  renderMalla();
                }
              }
            );
          }
          col.appendChild(div);
        });
      }

      filaDiv.appendChild(col);
    }
    cont.appendChild(filaDiv);
  });
}

// Evalúa requisitos de una materia
function cumpleRequisitos(materia) {
  const matObj = materiasData.find(m => m[1] === materia);
  if (!matObj) return true;
  const requisitos = matObj[4];
  for (let req of requisitos) {
    // Créditos por área
    if (req.match(/créditos.*contable/)) {
      let cantidad = parseInt(req);
      let area = "Contabilidad e impuestos";
      if (calcularCreditosArea(materiasTachadas, area) < cantidad) return false;
    } else if (req.match(/créditos.*jurídica/i)) {
      let cantidad = parseInt(req);
      let area = "Jurídica";
      if (calcularCreditosArea(materiasTachadas, area) < cantidad) return false;
    } else if (req.match(/créditos.*administración/i)) {
      let cantidad = parseInt(req);
      let area = "Administración";
      if (calcularCreditosArea(materiasTachadas, area) < cantidad) return false;
    } else if (req.match(/créditos.*economía/i)) {
      let cantidad = parseInt(req);
      let area = "Economía";
      if (calcularCreditosArea(materiasTachadas, area) < cantidad) return false;
    } else if (req.match(/créditos.*integradoras/i)) {
      let cantidad = parseInt(req);
      let area = "Actividades integradoras";
      if (calcularCreditosArea(materiasTachadas, area) < cantidad) return false;
    } else if (req.match(/créditos de avance/i) || req.match(/créditos mínimos de avance/) || req.match(/créditos totales/)) {
      let cantidad = parseInt(req);
      if (calcularCreditosTotal(materiasTachadas) < cantidad) return false;
    } else if (materiasData.find(m => m[1].toLowerCase() === req.toLowerCase())) {
      if (!materiasTachadas[req]) return false;
    } else if (req.includes("ó")) {
      const opciones = req.split("ó").map(r => r.trim());
      if (!opciones.some(r => materiasTachadas[r])) return false;
    } else if (req.includes("o")) {
      const opciones = req.split("o").map(r => r.trim());
      if (!opciones.some(r => materiasTachadas[r])) return false;
    } else if (req.match(/un mínimo de (\d+) créditos en el Área de Administración/i
