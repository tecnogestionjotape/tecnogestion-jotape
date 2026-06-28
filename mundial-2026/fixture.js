const STORAGE_KEY = "fixture-mundial-2026-tecnogestion-jotape";

const equiposPorGrupo = {
  A:["🇲🇽 México","🇿🇦 Sudáfrica","🇰🇷 Corea del Sur","🇨🇿 Rep. Checa"],
  B:["🇨🇦 Canadá","🇧🇦 Bosnia y Herzegovina","🇶🇦 Qatar","🇨🇭 Suiza"],
  C:["🇧🇷 Brasil","🇲🇦 Marruecos","🇭🇹 Haití","🏴 Escocia"],
  D:["🇺🇸 Estados Unidos","🇵🇾 Paraguay","🇦🇺 Australia","🇹🇷 Turquía"],
  E:["🇩🇪 Alemania","🇨🇼 Curazao","🇨🇮 Costa de Marfil","🇪🇨 Ecuador"],
  F:["🇳🇱 Países Bajos","🇯🇵 Japón","🇸🇪 Suecia","🇹🇳 Túnez"],
  G:["🇧🇪 Bélgica","🇪🇬 Egipto","🇮🇷 Irán","🇳🇿 Nueva Zelanda"],
  H:["🇪🇸 España","🇨🇻 Cabo Verde","🇸🇦 Arabia Saudita","🇺🇾 Uruguay"],
  I:["🇫🇷 Francia","🇸🇳 Senegal","🇮🇶 Irak","🇳🇴 Noruega"],
  J:["🇦🇷 Argentina","🇩🇿 Argelia","🇦🇹 Austria","🇯🇴 Jordania"],
  K:["🇵🇹 Portugal","🇨🇩 RD Congo","🇺🇿 Uzbekistán","🇨🇴 Colombia"],
  L:["🏴 Inglaterra","🇭🇷 Croacia","🇬🇭 Ghana","🇵🇦 Panamá"]
};

const partidos = [
  {id:"M01",grupo:"A",fecha:"11 junio",sede:"Ciudad de México",local:"🇲🇽 México",visitante:"🇿🇦 Sudáfrica"},
  {id:"M02",grupo:"A",fecha:"11 junio",sede:"Guadalajara",local:"🇰🇷 Corea del Sur",visitante:"🇨🇿 Rep. Checa"},
  {id:"M03",grupo:"B",fecha:"12 junio",sede:"Toronto",local:"🇨🇦 Canadá",visitante:"🇧🇦 Bosnia y Herzegovina"},
  {id:"M04",grupo:"D",fecha:"12 junio",sede:"Los Ángeles",local:"🇺🇸 Estados Unidos",visitante:"🇵🇾 Paraguay"},
  {id:"M05",grupo:"B",fecha:"13 junio",sede:"San Francisco Bay Area",local:"🇶🇦 Qatar",visitante:"🇨🇭 Suiza"},
  {id:"M06",grupo:"C",fecha:"13 junio",sede:"New York New Jersey",local:"🇧🇷 Brasil",visitante:"🇲🇦 Marruecos"},
  {id:"M07",grupo:"C",fecha:"13 junio",sede:"Boston",local:"🇭🇹 Haití",visitante:"🏴 Escocia"},
  {id:"M08",grupo:"D",fecha:"13 junio",sede:"Vancouver",local:"🇦🇺 Australia",visitante:"🇹🇷 Turquía"},

  {id:"M09",grupo:"E",fecha:"14 junio",sede:"Houston",local:"🇩🇪 Alemania",visitante:"🇨🇼 Curazao"},
  {id:"M10",grupo:"F",fecha:"14 junio",sede:"Dallas",local:"🇳🇱 Países Bajos",visitante:"🇯🇵 Japón"},
  {id:"M11",grupo:"E",fecha:"14 junio",sede:"Philadelphia",local:"🇨🇮 Costa de Marfil",visitante:"🇪🇨 Ecuador"},
  {id:"M12",grupo:"F",fecha:"14 junio",sede:"Monterrey",local:"🇸🇪 Suecia",visitante:"🇹🇳 Túnez"},

  {id:"M13",grupo:"H",fecha:"15 junio",sede:"Atlanta",local:"🇪🇸 España",visitante:"🇨🇻 Cabo Verde"},
  {id:"M14",grupo:"G",fecha:"15 junio",sede:"Seattle",local:"🇧🇪 Bélgica",visitante:"🇪🇬 Egipto"},
  {id:"M15",grupo:"H",fecha:"15 junio",sede:"Miami",local:"🇸🇦 Arabia Saudita",visitante:"🇺🇾 Uruguay"},
  {id:"M16",grupo:"G",fecha:"15 junio",sede:"Los Ángeles",local:"🇮🇷 Irán",visitante:"🇳🇿 Nueva Zelanda"},

  {id:"M17",grupo:"I",fecha:"16 junio",sede:"New York New Jersey",local:"🇫🇷 Francia",visitante:"🇸🇳 Senegal"},
  {id:"M18",grupo:"I",fecha:"16 junio",sede:"Boston",local:"🇮🇶 Irak",visitante:"🇳🇴 Noruega"},
  {id:"M19",grupo:"J",fecha:"16 junio",sede:"Kansas City",local:"🇦🇷 Argentina",visitante:"🇩🇿 Argelia"},
  {id:"M20",grupo:"J",fecha:"16 junio",sede:"San Francisco Bay Area",local:"🇦🇹 Austria",visitante:"🇯🇴 Jordania"},

  {id:"M21",grupo:"K",fecha:"17 junio",sede:"Houston",local:"🇵🇹 Portugal",visitante:"🇨🇩 RD Congo"},
  {id:"M22",grupo:"L",fecha:"17 junio",sede:"Dallas",local:"🏴 Inglaterra",visitante:"🇭🇷 Croacia"},
  {id:"M23",grupo:"L",fecha:"17 junio",sede:"Toronto",local:"🇬🇭 Ghana",visitante:"🇵🇦 Panamá"},
  {id:"M24",grupo:"K",fecha:"17 junio",sede:"Ciudad de México",local:"🇺🇿 Uzbekistán",visitante:"🇨🇴 Colombia"},

  {id:"M25",grupo:"A",fecha:"18 junio",sede:"Atlanta",local:"🇨🇿 Rep. Checa",visitante:"🇿🇦 Sudáfrica"},
  {id:"M26",grupo:"B",fecha:"18 junio",sede:"Los Ángeles",local:"🇨🇭 Suiza",visitante:"🇧🇦 Bosnia y Herzegovina"},
  {id:"M27",grupo:"B",fecha:"18 junio",sede:"Vancouver",local:"🇨🇦 Canadá",visitante:"🇶🇦 Qatar"},
  {id:"M28",grupo:"A",fecha:"18 junio",sede:"Guadalajara",local:"🇲🇽 México",visitante:"🇰🇷 Corea del Sur"},

  {id:"M29",grupo:"D",fecha:"19 junio",sede:"Seattle",local:"🇺🇸 Estados Unidos",visitante:"🇦🇺 Australia"},
  {id:"M30",grupo:"C",fecha:"19 junio",sede:"Boston",local:"🏴 Escocia",visitante:"🇲🇦 Marruecos"},
  {id:"M31",grupo:"C",fecha:"19 junio",sede:"Philadelphia",local:"🇧🇷 Brasil",visitante:"🇭🇹 Haití"},
  {id:"M32",grupo:"D",fecha:"19 junio",sede:"San Francisco Bay Area",local:"🇹🇷 Turquía",visitante:"🇵🇾 Paraguay"},

  {id:"M33",grupo:"F",fecha:"20 junio",sede:"Houston",local:"🇳🇱 Países Bajos",visitante:"🇸🇪 Suecia"},
  {id:"M34",grupo:"E",fecha:"20 junio",sede:"Toronto",local:"🇩🇪 Alemania",visitante:"🇨🇮 Costa de Marfil"},
  {id:"M35",grupo:"E",fecha:"20 junio",sede:"Kansas City",local:"🇪🇨 Ecuador",visitante:"🇨🇼 Curazao"},
  {id:"M36",grupo:"F",fecha:"20 junio",sede:"Monterrey",local:"🇹🇳 Túnez",visitante:"🇯🇵 Japón"},

  {id:"M37",grupo:"H",fecha:"21 junio",sede:"Atlanta",local:"🇪🇸 España",visitante:"🇸🇦 Arabia Saudita"},
  {id:"M38",grupo:"G",fecha:"21 junio",sede:"Los Ángeles",local:"🇧🇪 Bélgica",visitante:"🇮🇷 Irán"},
  {id:"M39",grupo:"H",fecha:"21 junio",sede:"Miami",local:"🇺🇾 Uruguay",visitante:"🇨🇻 Cabo Verde"},
  {id:"M40",grupo:"G",fecha:"21 junio",sede:"Vancouver",local:"🇳🇿 Nueva Zelanda",visitante:"🇪🇬 Egipto"},

  {id:"M41",grupo:"J",fecha:"22 junio",sede:"Dallas",local:"🇦🇷 Argentina",visitante:"🇦🇹 Austria"},
  {id:"M42",grupo:"I",fecha:"22 junio",sede:"Philadelphia",local:"🇫🇷 Francia",visitante:"🇮🇶 Irak"},
  {id:"M43",grupo:"I",fecha:"22 junio",sede:"New York New Jersey",local:"🇳🇴 Noruega",visitante:"🇸🇳 Senegal"},
  {id:"M44",grupo:"J",fecha:"22 junio",sede:"San Francisco Bay Area",local:"🇯🇴 Jordania",visitante:"🇩🇿 Argelia"},

  {id:"M45",grupo:"K",fecha:"23 junio",sede:"Houston",local:"🇵🇹 Portugal",visitante:"🇺🇿 Uzbekistán"},
  {id:"M46",grupo:"L",fecha:"23 junio",sede:"Boston",local:"🏴 Inglaterra",visitante:"🇬🇭 Ghana"},
  {id:"M47",grupo:"L",fecha:"23 junio",sede:"Toronto",local:"🇵🇦 Panamá",visitante:"🇭🇷 Croacia"},
  {id:"M48",grupo:"K",fecha:"23 junio",sede:"Guadalajara",local:"🇨🇴 Colombia",visitante:"🇨🇩 RD Congo"},

  {id:"M49",grupo:"B",fecha:"24 junio",sede:"Vancouver",local:"🇨🇭 Suiza",visitante:"🇨🇦 Canadá"},
  {id:"M50",grupo:"B",fecha:"24 junio",sede:"Seattle",local:"🇧🇦 Bosnia y Herzegovina",visitante:"🇶🇦 Qatar"},
  {id:"M51",grupo:"C",fecha:"24 junio",sede:"Miami",local:"🏴 Escocia",visitante:"🇧🇷 Brasil"},
  {id:"M52",grupo:"C",fecha:"24 junio",sede:"Atlanta",local:"🇲🇦 Marruecos",visitante:"🇭🇹 Haití"},
  {id:"M53",grupo:"A",fecha:"24 junio",sede:"Ciudad de México",local:"🇨🇿 Rep. Checa",visitante:"🇲🇽 México"},
  {id:"M54",grupo:"A",fecha:"24 junio",sede:"Monterrey",local:"🇿🇦 Sudáfrica",visitante:"🇰🇷 Corea del Sur"},

  {id:"M55",grupo:"E",fecha:"25 junio",sede:"New York New Jersey",local:"🇪🇨 Ecuador",visitante:"🇩🇪 Alemania"},
  {id:"M56",grupo:"E",fecha:"25 junio",sede:"Philadelphia",local:"🇨🇼 Curazao",visitante:"🇨🇮 Costa de Marfil"},
  {id:"M57",grupo:"F",fecha:"25 junio",sede:"Dallas",local:"🇯🇵 Japón",visitante:"🇸🇪 Suecia"},
  {id:"M58",grupo:"F",fecha:"25 junio",sede:"Kansas City",local:"🇹🇳 Túnez",visitante:"🇳🇱 Países Bajos"},
  {id:"M59",grupo:"D",fecha:"25 junio",sede:"Los Ángeles",local:"🇹🇷 Turquía",visitante:"🇺🇸 Estados Unidos"},
  {id:"M60",grupo:"D",fecha:"25 junio",sede:"San Francisco Bay Area",local:"🇵🇾 Paraguay",visitante:"🇦🇺 Australia"},

  {id:"M61",grupo:"I",fecha:"26 junio",sede:"Boston",local:"🇳🇴 Noruega",visitante:"🇫🇷 Francia"},
  {id:"M62",grupo:"I",fecha:"26 junio",sede:"Toronto",local:"🇸🇳 Senegal",visitante:"🇮🇶 Irak"},
  {id:"M63",grupo:"H",fecha:"26 junio",sede:"Houston",local:"🇨🇻 Cabo Verde",visitante:"🇸🇦 Arabia Saudita"},
  {id:"M64",grupo:"H",fecha:"26 junio",sede:"Guadalajara",local:"🇺🇾 Uruguay",visitante:"🇪🇸 España"},
  {id:"M65",grupo:"G",fecha:"26 junio",sede:"Seattle",local:"🇪🇬 Egipto",visitante:"🇮🇷 Irán"},
  {id:"M66",grupo:"G",fecha:"26 junio",sede:"Vancouver",local:"🇳🇿 Nueva Zelanda",visitante:"🇧🇪 Bélgica"},

  {id:"M67",grupo:"L",fecha:"27 junio",sede:"New York New Jersey",local:"🇵🇦 Panamá",visitante:"🏴 Inglaterra"},
  {id:"M68",grupo:"L",fecha:"27 junio",sede:"Philadelphia",local:"🇭🇷 Croacia",visitante:"🇬🇭 Ghana"},
  {id:"M69",grupo:"K",fecha:"27 junio",sede:"Miami",local:"🇨🇴 Colombia",visitante:"🇵🇹 Portugal"},
  {id:"M70",grupo:"K",fecha:"27 junio",sede:"Atlanta",local:"🇨🇩 RD Congo",visitante:"🇺🇿 Uzbekistán"},
  {id:"M71",grupo:"J",fecha:"27 junio",sede:"Kansas City",local:"🇩🇿 Argelia",visitante:"🇦🇹 Austria"},
  {id:"M72",grupo:"J",fecha:"27 junio",sede:"Dallas",local:"🇯🇴 Jordania",visitante:"🇦🇷 Argentina"}
];

const rondas = [
  {
    nombre:"Ronda de 32",
    idHtml:"ronda-32",
    partidos:[
      ["M73","2° Grupo A","2° Grupo B","28 junio","Los Ángeles"],
      ["M74","1° Grupo C","2° Grupo F","29 junio","Houston"],
      ["M75","1° Grupo E","2° Grupo D","29 junio","Boston"],
      ["M76","1° Grupo F","2° Grupo C","29 junio","Monterrey"],
      ["M77","2° Grupo E","2° Grupo I","30 junio","Dallas"],
      ["M78","1° Grupo I","3° Grupo F","30 junio","New York New Jersey"],
      ["M79","1° Grupo A","3° Grupo E","30 junio","Ciudad de México"],
      ["M80","1° Grupo L","3° Grupo K","1 julio","Atlanta"],
      ["M81","1° Grupo G","3° Grupo I","1 julio","Seattle"],
      ["M82","1° Grupo D","3° Grupo B","1 julio","San Francisco Bay Area"],
      ["M83","1° Grupo H","2° Grupo J","2 julio","Los Ángeles"],
      ["M84","1° Grupo K","2° Grupo L","2 julio","Toronto"],
      ["M85","1° Grupo B","3° Grupo J","2 julio","Vancouver"],
      ["M86","2° Grupo D","2° Grupo G","3 julio","Dallas"],
      ["M87","1° Grupo J","2° Grupo H","3 julio","Miami"],
      ["M88","2° Grupo K","3° Grupo L","3 julio","Kansas City"]
    ]
  },
  {
    nombre:"Octavos de final",
    idHtml:"octavos",
    partidos:[
      ["M89","Ganador M73","Ganador M76","4 julio","Houston"],
      ["M90","Ganador M75","Ganador M78","4 julio","Philadelphia"],
      ["M91","Ganador M74","Ganador M77","5 julio","New York New Jersey"],
      ["M92","Ganador M79","Ganador M80","5 julio","Ciudad de México"],
      ["M93","Ganador M84","Ganador M83","6 julio","Dallas"],
      ["M94","Ganador M82","Ganador M81","6 julio","Seattle"],
      ["M95","Ganador M87","Ganador M86","7 julio","Atlanta"],
      ["M96","Ganador M85","Ganador M88","7 julio","Vancouver"]
    ]
  },
  {
    nombre:"Cuartos de final",
    idHtml:"cuartos",
    partidos:[
      ["M97","Ganador M90","Ganador M89","9 julio","Boston"],
      ["M98","Ganador M93","Ganador M94","10 julio","Los Ángeles"],
      ["M99","Ganador M91","Ganador M92","11 julio","Miami"],
      ["M100","Ganador M95","Ganador M96","11 julio","Kansas City"]
    ]
  },
  {
    nombre:"Semifinales",
    idHtml:"semifinales",
    partidos:[
      ["M101","Ganador M97","Ganador M98","14 julio","Dallas"],
      ["M102","Ganador M99","Ganador M100","15 julio","Atlanta"]
    ]
  },
  {
    nombre:"Tercer puesto",
    idHtml:"tercer-puesto",
    partidos:[
      ["M103","Perdedor M101","Perdedor M102","18 julio","Miami"]
    ]
  },
  {
    nombre:"Final",
    idHtml:"final",
    partidos:[
      ["M104","Ganador M101","Ganador M102","19 julio","New York New Jersey"]
    ]
  }
];

let resultados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function faseGruposCompleta(){
  return Object.keys(equiposPorGrupo).every(grupoCompleto);
}

function guardar(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resultados));
}

function formatearEquipo(equipo){
  const partes = equipo.split(" ");
  const bandera = partes[0];
  const nombre = partes.slice(1).join(" ");

  return `
    <div class="equipo-celda">
      <span class="equipo-bandera">${bandera}</span>
      <span class="equipo-nombre">${nombre}</span>
    </div>
  `;
}

function calcularTabla(grupo){
  const tabla = {};

  equiposPorGrupo[grupo].forEach(equipo=>{
    tabla[equipo] = {
      equipo,
      grupo,
      pj:0,
      pg:0,
      pe:0,
      pp:0,
      gf:0,
      gc:0,
      dg:0,
      pts:0
    };
  });

  partidos.filter(p=>p.grupo===grupo).forEach(p=>{
    const r = resultados[p.id];

    if(!r || r.local === "" || r.visitante === "" || r.local === undefined || r.visitante === undefined){
      return;
    }

    const gl = Number(r.local);
    const gv = Number(r.visitante);

    tabla[p.local].pj++;
    tabla[p.visitante].pj++;

    tabla[p.local].gf += gl;
    tabla[p.local].gc += gv;

    tabla[p.visitante].gf += gv;
    tabla[p.visitante].gc += gl;

    if(gl > gv){
      tabla[p.local].pg++;
      tabla[p.visitante].pp++;
      tabla[p.local].pts += 3;
    }else if(gl < gv){
      tabla[p.visitante].pg++;
      tabla[p.local].pp++;
      tabla[p.visitante].pts += 3;
    }else{
      tabla[p.local].pe++;
      tabla[p.visitante].pe++;
      tabla[p.local].pts++;
      tabla[p.visitante].pts++;
    }
  });

  return Object.values(tabla).map(t=>{
    t.dg = t.gf - t.gc;
    return t;
  }).sort(ordenarTabla);
}

function ordenarTabla(a,b){
  return b.pts - a.pts ||
         b.dg - a.dg ||
         b.gf - a.gf ||
         a.gc - b.gc ||
         a.equipo.localeCompare(b.equipo);
}

function obtenerClasificados(){
  const data = {};

  Object.keys(equiposPorGrupo).forEach(grupo=>{
    const tabla = calcularTabla(grupo);
    const completo = grupoCompleto(grupo);

    data[grupo] = {
      primero: completo ? tabla[0] : null,
      segundo: completo ? tabla[1] : null,
      tercero: completo ? tabla[2] : null,
      tabla,
      completo
    };
  });

  return data;
}

function obtenerMejoresTerceros(){
  return Object.keys(equiposPorGrupo)
    .filter(grupoCompleto)
    .map(g=>calcularTabla(g)[2])
    .sort(ordenarTabla)
    .slice(0,8);
}

function grupoTienePartidosCompletos(grupo){
  return partidos
    .filter(p=>p.grupo===grupo)
    .some(p=>{
      const r = resultados[p.id];
      return r && r.local !== "" && r.visitante !== "" && r.local !== undefined && r.visitante !== undefined;
    });
}

function grupoCompleto(grupo){
  return partidos
    .filter(p=>p.grupo===grupo)
    .every(p=>{
      const r = resultados[p.id];
      return r && r.local !== "" && r.visitante !== "" && r.local !== undefined && r.visitante !== undefined;
    });
}

function hayDatosParaTerceros(){
  return Object.keys(equiposPorGrupo).some(grupoTienePartidosCompletos);
}

function resolverTexto(texto){
  const clasificados = obtenerClasificados();
  const mejoresTerceros = obtenerMejoresTerceros();

  if(texto.startsWith("1° Grupo ")){
    const g = texto.replace("1° Grupo ","");
    return clasificados[g]?.primero?.equipo || texto;
  }

  if(texto.startsWith("2° Grupo ")){
    const g = texto.replace("2° Grupo ","");
    return clasificados[g]?.segundo?.equipo || texto;
  }

  if(texto.startsWith("3° Grupo ")){
    const permitidos = texto.replace("3° Grupo ","").split("/");
    const candidato = mejoresTerceros.find(t=>permitidos.includes(t.grupo));
    return candidato ? candidato.equipo : texto;
  }

  if(texto.startsWith("Ganador ")){
    const id = texto.replace("Ganador ","");
    return resultados[id]?.ganador || texto;
  }

  if(texto.startsWith("Perdedor ")){
    const id = texto.replace("Perdedor ","");
    return resultados[id]?.perdedor || texto;
  }

  return texto;
}

function renderGrupos(){
  const container = document.getElementById("grupos-container");
  container.innerHTML = "";

  Object.keys(equiposPorGrupo).forEach(grupo=>{
    const tabla = calcularTabla(grupo);
    const partidosGrupo = partidos.filter(p=>p.grupo===grupo);

    const card = document.createElement("div");
    card.className = "grupo";

    card.innerHTML = `
      <h3>Grupo ${grupo}</h3>

      <div class="grupo-equipos">
        ${equiposPorGrupo[grupo].map(equipo=>`
          <div class="equipo-chip">
            ${formatearEquipo(equipo)}
          </div>
        `).join("")}
      </div>

      <div class="grupo-contenido">

        <div class="bloque-grupo">
          <h4>📅 Partidos del grupo</h4>

          ${partidosGrupo.map(p=>{
            const r = resultados[p.id] || {local:"", visitante:""};

            return `
              <div class="partido">
                <div class="partido-info">
                  ${p.id} · ${p.fecha} · ${p.sede}
                </div>

                <div class="partido-linea">
                  <span class="equipo-local">${p.local}</span>

                  <input 
                    type="number" 
                    min="0" 
                    value="${r.local ?? ""}" 
                    data-id="${p.id}" 
                    data-lado="local"
                  >

                  <span>-</span>

                  <input 
                    type="number" 
                    min="0" 
                    value="${r.visitante ?? ""}" 
                    data-id="${p.id}" 
                    data-lado="visitante"
                  >

                  <span class="equipo-visitante">${p.visitante}</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="bloque-grupo">
          <h4>📊 Tabla de posiciones</h4>

          <div class="tabla-scroll">
            <table>
              <thead>
                <tr>
                  <th>Equipo</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>DG</th>
                  <th>PTS</th>
                </tr>
              </thead>

              <tbody>
                ${tabla.map(t=>`
                  <tr>
                    <td>${formatearEquipo(t.equipo)}</td>
                    <td>${t.pj}</td>
                    <td>${t.pg}</td>
                    <td>${t.pe}</td>
                    <td>${t.pp}</td>
                    <td>${t.gf}</td>
                    <td>${t.gc}</td>
                    <td>${t.dg}</td>
                    <td><strong>${t.pts}</strong></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll("input[data-id]").forEach(input=>{
    input.addEventListener("input", e=>{
      const id = e.target.dataset.id;
      const lado = e.target.dataset.lado;

      if(!resultados[id]){
        resultados[id] = {};
      }

      resultados[id][lado] = e.target.value;

      const partido = partidos.find(p=>p.id===id);

      if(partido){
        const r = resultados[id];

        if(r.local !== "" && r.visitante !== "" && r.local !== undefined && r.visitante !== undefined){
          const gl = Number(r.local);
          const gv = Number(r.visitante);

          if(gl > gv){
            r.ganador = partido.local;
            r.perdedor = partido.visitante;
          }else if(gl < gv){
            r.ganador = partido.visitante;
            r.perdedor = partido.local;
          }else{
            r.ganador = "";
            r.perdedor = "";
          }
        }
      }

      const scrollActual = window.scrollY;

guardar();

requestAnimationFrame(() => {
  render();

  requestAnimationFrame(() => {
    window.scrollTo({
      top: scrollActual,
      behavior: "instant"
    });
  });
});
    });
  });
}

function renderTerceros(){
  const container = document.getElementById("terceros-container");

  const gruposTerminados = faseGruposCompleta();
  const gruposCompletos = Object.keys(equiposPorGrupo).filter(grupoCompleto);

  if(gruposCompletos.length === 0){
    container.innerHTML = `
      <div class="terceros-card">
        <p>
          Todavía no hay datos suficientes para calcular los mejores terceros.
          Completá los resultados de la fase de grupos para ver esta tabla.
        </p>
      </div>
    `;
    return;
  }

  const terceros = gruposCompletos
    .map(g=>calcularTabla(g)[2])
    .sort(ordenarTabla);

  container.innerHTML = `
    <div class="terceros-card">
      <div class="tabla-scroll">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>Grupo</th>
              <th>PJ</th>
              <th>DG</th>
              <th>GF</th>
              <th>PTS</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            ${terceros.map((t,i)=>`
              <tr>
                <td>${i+1}</td>
                <td>${formatearEquipo(t.equipo)}</td>
                <td>${t.grupo}</td>
                <td>${t.pj}</td>
                <td>${t.dg}</td>
                <td>${t.gf}</td>
                <td><strong>${t.pts}</strong></td>
                <td>${gruposTerminados ? (i < 8 ? "Clasifica" : "Eliminado") : "Pendiente"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderKnockout(){
  const container = document.getElementById("knockout-container");
  container.innerHTML = "";

  const gruposCompletos = Object.keys(equiposPorGrupo).filter(grupoCompleto);
const gruposTerminados = faseGruposCompleta();

  if(!gruposTerminados){
    container.innerHTML = `
      <div class="ronda">
        <h3>Eliminatorias</h3>
        <p>
  Las eliminatorias se armarán automáticamente cuando completes todos los resultados de la fase de grupos.
</p>
      </div>
    `;
    return;
  }

  rondas.forEach(ronda=>{
    const div = document.createElement("div");
    div.className = "ronda";
    div.id = ronda.idHtml;

    div.innerHTML = `
      <h3>${ronda.nombre}</h3>

      ${ronda.partidos.map(p=>{
        const [id, a, b, fecha, sede] = p;
        const equipoA = resolverTexto(a);
        const equipoB = resolverTexto(b);
        const r = resultados[id] || {local:"", visitante:""};

        return `
          <div class="llave">
            <strong>${id}</strong> · ${fecha} · ${sede}

            <div class="partido-linea">
              <span class="equipo-local">${equipoA}</span>

              <input 
                type="number" 
                min="0" 
                value="${r.local ?? ""}" 
                data-ko="${id}" 
                data-lado="local" 
                data-a="${equipoA}" 
                data-b="${equipoB}"
                ${equipoA.includes("Grupo") || equipoA.includes("Ganador") || equipoB.includes("Grupo") || equipoB.includes("Ganador") ? "disabled" : ""}
              >

              <span>-</span>

              <input 
                type="number" 
                min="0" 
                value="${r.visitante ?? ""}" 
                data-ko="${id}" 
                data-lado="visitante" 
                data-a="${equipoA}" 
                data-b="${equipoB}"
                ${equipoA.includes("Grupo") || equipoA.includes("Ganador") || equipoB.includes("Grupo") || equipoB.includes("Ganador") ? "disabled" : ""}
              >

              <span class="equipo-visitante">${equipoB}</span>
            </div>

            <small>
              ${equipoA.includes("Grupo") || equipoB.includes("Grupo") || equipoA.includes("Ganador") || equipoB.includes("Ganador")
                ? "Pendiente de clasificación."
                : "En eliminatorias, si hay empate, cargá el resultado final que defina al ganador."}
            </small>
          </div>
        `;
      }).join("")}
    `;

    container.appendChild(div);
  });

  document.querySelectorAll("input[data-ko]").forEach(input=>{
    input.addEventListener("input", e=>{
      const id = e.target.dataset.ko;
      const lado = e.target.dataset.lado;
      const equipoA = e.target.dataset.a;
      const equipoB = e.target.dataset.b;

      if(!resultados[id]){
        resultados[id] = {};
      }

      resultados[id][lado] = e.target.value;

      const r = resultados[id];

      if(r.local !== "" && r.visitante !== "" && r.local !== undefined && r.visitante !== undefined){
        const gl = Number(r.local);
        const gv = Number(r.visitante);

        if(gl > gv){
          r.ganador = equipoA;
          r.perdedor = equipoB;
        }else if(gl < gv){
          r.ganador = equipoB;
          r.perdedor = equipoA;
        }else{
          r.ganador = "";
          r.perdedor = "";
        }
      }

      const scrollActual = window.scrollY;

guardar();

requestAnimationFrame(() => {
  render();

  requestAnimationFrame(() => {
    window.scrollTo({
      top: scrollActual,
      behavior: "instant"
    });
  });
});
    });
  });
}

function render(){
  renderGrupos();
  renderTerceros();
  renderKnockout();
}

const modalReset =
document.getElementById("modal-reset");

document.getElementById("btn-borrar")
.addEventListener("click",()=>{

  modalReset.classList.add("activo");

});

document.getElementById("cancelar-reset")
.addEventListener("click",()=>{

  modalReset.classList.remove("activo");

});

document.getElementById("confirmar-reset")
.addEventListener("click",()=>{

  resultados = {};

  localStorage.removeItem(STORAGE_KEY);

  guardar();

  modalReset.classList.remove("activo");

  render();

});

render();

const modalBienvenida = document.getElementById("modal-bienvenida");

document.getElementById("cerrar-bienvenida")
.addEventListener("click",()=>{

  modalBienvenida.classList.remove("activo");

});

function limpiarSoloEliminatoriasGuardadas(){
  Object.keys(resultados).forEach(id=>{
    const numero = Number(id.replace("M",""));

    if(numero >= 73){
      delete resultados[id];
    }
  });

  guardar();
  render();
}

