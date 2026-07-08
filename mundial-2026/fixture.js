const STORAGE_KEY = "fixture-mundial-2026-tecnogestion-jotape";

const equiposPorGrupo = {
  A: ["🇲🇽 México", "🇿🇦 Sudáfrica", "🇰🇷 Corea del Sur", "🇨🇿 Rep. Checa"],
  B: ["🇨🇦 Canadá", "🇧🇦 Bosnia y Herzegovina", "🇶🇦 Qatar", "🇨🇭 Suiza"],
  C: ["🇧🇷 Brasil", "🇲🇦 Marruecos", "🇭🇹 Haití", "🏴 Escocia"],
  D: ["🇺🇸 Estados Unidos", "🇵🇾 Paraguay", "🇦🇺 Australia", "🇹🇷 Turquía"],
  E: ["🇩🇪 Alemania", "🇨🇼 Curazao", "🇨🇮 Costa de Marfil", "🇪🇨 Ecuador"],
  F: ["🇳🇱 Países Bajos", "🇯🇵 Japón", "🇸🇪 Suecia", "🇹🇳 Túnez"],
  G: ["🇧🇪 Bélgica", "🇪🇬 Egipto", "🇮🇷 Irán", "🇳🇿 Nueva Zelanda"],
  H: ["🇪🇸 España", "🇨🇻 Cabo Verde", "🇸🇦 Arabia Saudita", "🇺🇾 Uruguay"],
  I: ["🇫🇷 Francia", "🇸🇳 Senegal", "🇮🇶 Irak", "🇳🇴 Noruega"],
  J: ["🇦🇷 Argentina", "🇩🇿 Argelia", "🇦🇹 Austria", "🇯🇴 Jordania"],
  K: ["🇵🇹 Portugal", "🇨🇩 RD Congo", "🇺🇿 Uzbekistán", "🇨🇴 Colombia"],
  L: ["🏴 Inglaterra", "🇭🇷 Croacia", "🇬🇭 Ghana", "🇵🇦 Panamá"],
};

const partidos = [
  {
    id: "M01",
    grupo: "A",
    fecha: "11 junio",
    sede: "Ciudad de México",
    local: "🇲🇽 México",
    visitante: "🇿🇦 Sudáfrica",
  },
  {
    id: "M02",
    grupo: "A",
    fecha: "11 junio",
    sede: "Guadalajara",
    local: "🇰🇷 Corea del Sur",
    visitante: "🇨🇿 Rep. Checa",
  },
  {
    id: "M03",
    grupo: "B",
    fecha: "12 junio",
    sede: "Toronto",
    local: "🇨🇦 Canadá",
    visitante: "🇧🇦 Bosnia y Herzegovina",
  },
  {
    id: "M04",
    grupo: "D",
    fecha: "12 junio",
    sede: "Los Ángeles",
    local: "🇺🇸 Estados Unidos",
    visitante: "🇵🇾 Paraguay",
  },
  {
    id: "M05",
    grupo: "B",
    fecha: "13 junio",
    sede: "San Francisco Bay Area",
    local: "🇶🇦 Qatar",
    visitante: "🇨🇭 Suiza",
  },
  {
    id: "M06",
    grupo: "C",
    fecha: "13 junio",
    sede: "New York New Jersey",
    local: "🇧🇷 Brasil",
    visitante: "🇲🇦 Marruecos",
  },
  {
    id: "M07",
    grupo: "C",
    fecha: "13 junio",
    sede: "Boston",
    local: "🇭🇹 Haití",
    visitante: "🏴 Escocia",
  },
  {
    id: "M08",
    grupo: "D",
    fecha: "13 junio",
    sede: "Vancouver",
    local: "🇦🇺 Australia",
    visitante: "🇹🇷 Turquía",
  },
  {
    id: "M09",
    grupo: "E",
    fecha: "14 junio",
    sede: "Houston",
    local: "🇩🇪 Alemania",
    visitante: "🇨🇼 Curazao",
  },
  {
    id: "M10",
    grupo: "F",
    fecha: "14 junio",
    sede: "Dallas",
    local: "🇳🇱 Países Bajos",
    visitante: "🇯🇵 Japón",
  },
  {
    id: "M11",
    grupo: "E",
    fecha: "14 junio",
    sede: "Philadelphia",
    local: "🇨🇮 Costa de Marfil",
    visitante: "🇪🇨 Ecuador",
  },
  {
    id: "M12",
    grupo: "F",
    fecha: "14 junio",
    sede: "Monterrey",
    local: "🇸🇪 Suecia",
    visitante: "🇹🇳 Túnez",
  },
  {
    id: "M13",
    grupo: "H",
    fecha: "15 junio",
    sede: "Atlanta",
    local: "🇪🇸 España",
    visitante: "🇨🇻 Cabo Verde",
  },
  {
    id: "M14",
    grupo: "G",
    fecha: "15 junio",
    sede: "Seattle",
    local: "🇧🇪 Bélgica",
    visitante: "🇪🇬 Egipto",
  },
  {
    id: "M15",
    grupo: "H",
    fecha: "15 junio",
    sede: "Miami",
    local: "🇸🇦 Arabia Saudita",
    visitante: "🇺🇾 Uruguay",
  },
  {
    id: "M16",
    grupo: "G",
    fecha: "15 junio",
    sede: "Los Ángeles",
    local: "🇮🇷 Irán",
    visitante: "🇳🇿 Nueva Zelanda",
  },
  {
    id: "M17",
    grupo: "I",
    fecha: "16 junio",
    sede: "New York New Jersey",
    local: "🇫🇷 Francia",
    visitante: "🇸🇳 Senegal",
  },
  {
    id: "M18",
    grupo: "I",
    fecha: "16 junio",
    sede: "Boston",
    local: "🇮🇶 Irak",
    visitante: "🇳🇴 Noruega",
  },
  {
    id: "M19",
    grupo: "J",
    fecha: "16 junio",
    sede: "Kansas City",
    local: "🇦🇷 Argentina",
    visitante: "🇩🇿 Argelia",
  },
  {
    id: "M20",
    grupo: "J",
    fecha: "16 junio",
    sede: "San Francisco Bay Area",
    local: "🇦🇹 Austria",
    visitante: "🇯🇴 Jordania",
  },
  {
    id: "M21",
    grupo: "K",
    fecha: "17 junio",
    sede: "Houston",
    local: "🇵🇹 Portugal",
    visitante: "🇨🇩 RD Congo",
  },
  {
    id: "M22",
    grupo: "L",
    fecha: "17 junio",
    sede: "Dallas",
    local: "🏴 Inglaterra",
    visitante: "🇭🇷 Croacia",
  },
  {
    id: "M23",
    grupo: "L",
    fecha: "17 junio",
    sede: "Toronto",
    local: "🇬🇭 Ghana",
    visitante: "🇵🇦 Panamá",
  },
  {
    id: "M24",
    grupo: "K",
    fecha: "17 junio",
    sede: "Ciudad de México",
    local: "🇺🇿 Uzbekistán",
    visitante: "🇨🇴 Colombia",
  },
  {
    id: "M25",
    grupo: "A",
    fecha: "18 junio",
    sede: "Atlanta",
    local: "🇨🇿 Rep. Checa",
    visitante: "🇿🇦 Sudáfrica",
  },
  {
    id: "M26",
    grupo: "B",
    fecha: "18 junio",
    sede: "Los Ángeles",
    local: "🇨🇭 Suiza",
    visitante: "🇧🇦 Bosnia y Herzegovina",
  },
  {
    id: "M27",
    grupo: "B",
    fecha: "18 junio",
    sede: "Vancouver",
    local: "🇨🇦 Canadá",
    visitante: "🇶🇦 Qatar",
  },
  {
    id: "M28",
    grupo: "A",
    fecha: "18 junio",
    sede: "Guadalajara",
    local: "🇲🇽 México",
    visitante: "🇰🇷 Corea del Sur",
  },
  {
    id: "M29",
    grupo: "D",
    fecha: "19 junio",
    sede: "Seattle",
    local: "🇺🇸 Estados Unidos",
    visitante: "🇦🇺 Australia",
  },
  {
    id: "M30",
    grupo: "C",
    fecha: "19 junio",
    sede: "Boston",
    local: "🏴 Escocia",
    visitante: "🇲🇦 Marruecos",
  },
  {
    id: "M31",
    grupo: "C",
    fecha: "19 junio",
    sede: "Philadelphia",
    local: "🇧🇷 Brasil",
    visitante: "🇭🇹 Haití",
  },
  {
    id: "M32",
    grupo: "D",
    fecha: "19 junio",
    sede: "San Francisco Bay Area",
    local: "🇹🇷 Turquía",
    visitante: "🇵🇾 Paraguay",
  },
  {
    id: "M33",
    grupo: "F",
    fecha: "20 junio",
    sede: "Houston",
    local: "🇳🇱 Países Bajos",
    visitante: "🇸🇪 Suecia",
  },
  {
    id: "M34",
    grupo: "E",
    fecha: "20 junio",
    sede: "Toronto",
    local: "🇩🇪 Alemania",
    visitante: "🇨🇮 Costa de Marfil",
  },
  {
    id: "M35",
    grupo: "E",
    fecha: "20 junio",
    sede: "Kansas City",
    local: "🇪🇨 Ecuador",
    visitante: "🇨🇼 Curazao",
  },
  {
    id: "M36",
    grupo: "F",
    fecha: "20 junio",
    sede: "Monterrey",
    local: "🇹🇳 Túnez",
    visitante: "🇯🇵 Japón",
  },
  {
    id: "M37",
    grupo: "H",
    fecha: "21 junio",
    sede: "Atlanta",
    local: "🇪🇸 España",
    visitante: "🇸🇦 Arabia Saudita",
  },
  {
    id: "M38",
    grupo: "G",
    fecha: "21 junio",
    sede: "Los Ángeles",
    local: "🇧🇪 Bélgica",
    visitante: "🇮🇷 Irán",
  },
  {
    id: "M39",
    grupo: "H",
    fecha: "21 junio",
    sede: "Miami",
    local: "🇺🇾 Uruguay",
    visitante: "🇨🇻 Cabo Verde",
  },
  {
    id: "M40",
    grupo: "G",
    fecha: "21 junio",
    sede: "Vancouver",
    local: "🇳🇿 Nueva Zelanda",
    visitante: "🇪🇬 Egipto",
  },
  {
    id: "M41",
    grupo: "J",
    fecha: "22 junio",
    sede: "Dallas",
    local: "🇦🇷 Argentina",
    visitante: "🇦🇹 Austria",
  },
  {
    id: "M42",
    grupo: "I",
    fecha: "22 junio",
    sede: "Philadelphia",
    local: "🇫🇷 Francia",
    visitante: "🇮🇶 Irak",
  },
  {
    id: "M43",
    grupo: "I",
    fecha: "22 junio",
    sede: "New York New Jersey",
    local: "🇳🇴 Noruega",
    visitante: "🇸🇳 Senegal",
  },
  {
    id: "M44",
    grupo: "J",
    fecha: "22 junio",
    sede: "San Francisco Bay Area",
    local: "🇯🇴 Jordania",
    visitante: "🇩🇿 Argelia",
  },
  {
    id: "M45",
    grupo: "K",
    fecha: "23 junio",
    sede: "Houston",
    local: "🇵🇹 Portugal",
    visitante: "🇺🇿 Uzbekistán",
  },
  {
    id: "M46",
    grupo: "L",
    fecha: "23 junio",
    sede: "Boston",
    local: "🏴 Inglaterra",
    visitante: "🇬🇭 Ghana",
  },
  {
    id: "M47",
    grupo: "L",
    fecha: "23 junio",
    sede: "Toronto",
    local: "🇵🇦 Panamá",
    visitante: "🇭🇷 Croacia",
  },
  {
    id: "M48",
    grupo: "K",
    fecha: "23 junio",
    sede: "Guadalajara",
    local: "🇨🇴 Colombia",
    visitante: "🇨🇩 RD Congo",
  },
  {
    id: "M49",
    grupo: "B",
    fecha: "24 junio",
    sede: "Vancouver",
    local: "🇨🇭 Suiza",
    visitante: "🇨🇦 Canadá",
  },
  {
    id: "M50",
    grupo: "B",
    fecha: "24 junio",
    sede: "Seattle",
    local: "🇧🇦 Bosnia y Herzegovina",
    visitante: "🇶🇦 Qatar",
  },
  {
    id: "M51",
    grupo: "C",
    fecha: "24 junio",
    sede: "Miami",
    local: "🏴 Escocia",
    visitante: "🇧🇷 Brasil",
  },
  {
    id: "M52",
    grupo: "C",
    fecha: "24 junio",
    sede: "Atlanta",
    local: "🇲🇦 Marruecos",
    visitante: "🇭🇹 Haití",
  },
  {
    id: "M53",
    grupo: "A",
    fecha: "24 junio",
    sede: "Ciudad de México",
    local: "🇨🇿 Rep. Checa",
    visitante: "🇲🇽 México",
  },
  {
    id: "M54",
    grupo: "A",
    fecha: "24 junio",
    sede: "Monterrey",
    local: "🇿🇦 Sudáfrica",
    visitante: "🇰🇷 Corea del Sur",
  },
  {
    id: "M55",
    grupo: "E",
    fecha: "25 junio",
    sede: "New York New Jersey",
    local: "🇪🇨 Ecuador",
    visitante: "🇩🇪 Alemania",
  },
  {
    id: "M56",
    grupo: "E",
    fecha: "25 junio",
    sede: "Philadelphia",
    local: "🇨🇼 Curazao",
    visitante: "🇨🇮 Costa de Marfil",
  },
  {
    id: "M57",
    grupo: "F",
    fecha: "25 junio",
    sede: "Dallas",
    local: "🇯🇵 Japón",
    visitante: "🇸🇪 Suecia",
  },
  {
    id: "M58",
    grupo: "F",
    fecha: "25 junio",
    sede: "Kansas City",
    local: "🇹🇳 Túnez",
    visitante: "🇳🇱 Países Bajos",
  },
  {
    id: "M59",
    grupo: "D",
    fecha: "25 junio",
    sede: "Los Ángeles",
    local: "🇹🇷 Turquía",
    visitante: "🇺🇸 Estados Unidos",
  },
  {
    id: "M60",
    grupo: "D",
    fecha: "25 junio",
    sede: "San Francisco Bay Area",
    local: "🇵🇾 Paraguay",
    visitante: "🇦🇺 Australia",
  },
  {
    id: "M61",
    grupo: "I",
    fecha: "26 junio",
    sede: "Boston",
    local: "🇳🇴 Noruega",
    visitante: "🇫🇷 Francia",
  },
  {
    id: "M62",
    grupo: "I",
    fecha: "26 junio",
    sede: "Toronto",
    local: "🇸🇳 Senegal",
    visitante: "🇮🇶 Irak",
  },
  {
    id: "M63",
    grupo: "H",
    fecha: "26 junio",
    sede: "Houston",
    local: "🇨🇻 Cabo Verde",
    visitante: "🇸🇦 Arabia Saudita",
  },
  {
    id: "M64",
    grupo: "H",
    fecha: "26 junio",
    sede: "Guadalajara",
    local: "🇺🇾 Uruguay",
    visitante: "🇪🇸 España",
  },
  {
    id: "M65",
    grupo: "G",
    fecha: "26 junio",
    sede: "Seattle",
    local: "🇪🇬 Egipto",
    visitante: "🇮🇷 Irán",
  },
  {
    id: "M66",
    grupo: "G",
    fecha: "26 junio",
    sede: "Vancouver",
    local: "🇳🇿 Nueva Zelanda",
    visitante: "🇧🇪 Bélgica",
  },
  {
    id: "M67",
    grupo: "L",
    fecha: "27 junio",
    sede: "New York New Jersey",
    local: "🇵🇦 Panamá",
    visitante: "🏴 Inglaterra",
  },
  {
    id: "M68",
    grupo: "L",
    fecha: "27 junio",
    sede: "Philadelphia",
    local: "🇭🇷 Croacia",
    visitante: "🇬🇭 Ghana",
  },
  {
    id: "M69",
    grupo: "K",
    fecha: "27 junio",
    sede: "Miami",
    local: "🇨🇴 Colombia",
    visitante: "🇵🇹 Portugal",
  },
  {
    id: "M70",
    grupo: "K",
    fecha: "27 junio",
    sede: "Atlanta",
    local: "🇨🇩 RD Congo",
    visitante: "🇺🇿 Uzbekistán",
  },
  {
    id: "M71",
    grupo: "J",
    fecha: "27 junio",
    sede: "Kansas City",
    local: "🇩🇿 Argelia",
    visitante: "🇦🇹 Austria",
  },
  {
    id: "M72",
    grupo: "J",
    fecha: "27 junio",
    sede: "Dallas",
    local: "🇯🇴 Jordania",
    visitante: "🇦🇷 Argentina",
  },
];

const RESULTADOS_GRUPOS_FIFA = {
  M01: {
    local: "2",
    visitante: "0",
    ganador: "🇲🇽 México",
    perdedor: "🇿🇦 Sudáfrica",
  },
  M02: {
    local: "2",
    visitante: "1",
    ganador: "🇰🇷 Corea del Sur",
    perdedor: "🇨🇿 Rep. Checa",
  },
  M03: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M04: {
    local: "4",
    visitante: "1",
    ganador: "🇺🇸 Estados Unidos",
    perdedor: "🇵🇾 Paraguay",
  },
  M05: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M06: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M07: {
    local: "0",
    visitante: "1",
    ganador: "🏴 Escocia",
    perdedor: "🇭🇹 Haití",
  },
  M08: {
    local: "2",
    visitante: "0",
    ganador: "🇦🇺 Australia",
    perdedor: "🇹🇷 Turquía",
  },
  M09: {
    local: "7",
    visitante: "1",
    ganador: "🇩🇪 Alemania",
    perdedor: "🇨🇼 Curazao",
  },
  M10: { local: "2", visitante: "2", ganador: "", perdedor: "" },
  M11: {
    local: "1",
    visitante: "0",
    ganador: "🇨🇮 Costa de Marfil",
    perdedor: "🇪🇨 Ecuador",
  },
  M12: {
    local: "5",
    visitante: "1",
    ganador: "🇸🇪 Suecia",
    perdedor: "🇹🇳 Túnez",
  },
  M13: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M14: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M15: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M16: { local: "2", visitante: "2", ganador: "", perdedor: "" },
  M17: {
    local: "3",
    visitante: "1",
    ganador: "🇫🇷 Francia",
    perdedor: "🇸🇳 Senegal",
  },
  M18: {
    local: "1",
    visitante: "4",
    ganador: "🇳🇴 Noruega",
    perdedor: "🇮🇶 Irak",
  },
  M19: {
    local: "3",
    visitante: "0",
    ganador: "🇦🇷 Argentina",
    perdedor: "🇩🇿 Argelia",
  },
  M20: {
    local: "3",
    visitante: "1",
    ganador: "🇦🇹 Austria",
    perdedor: "🇯🇴 Jordania",
  },
  M21: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M22: {
    local: "4",
    visitante: "2",
    ganador: "🏴 Inglaterra",
    perdedor: "🇭🇷 Croacia",
  },
  M23: {
    local: "1",
    visitante: "0",
    ganador: "🇬🇭 Ghana",
    perdedor: "🇵🇦 Panamá",
  },
  M24: {
    local: "1",
    visitante: "3",
    ganador: "🇨🇴 Colombia",
    perdedor: "🇺🇿 Uzbekistán",
  },
  M25: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M26: {
    local: "4",
    visitante: "1",
    ganador: "🇨🇭 Suiza",
    perdedor: "🇧🇦 Bosnia y Herzegovina",
  },
  M27: {
    local: "6",
    visitante: "0",
    ganador: "🇨🇦 Canadá",
    perdedor: "🇶🇦 Qatar",
  },
  M28: {
    local: "1",
    visitante: "0",
    ganador: "🇲🇽 México",
    perdedor: "🇰🇷 Corea del Sur",
  },
  M29: {
    local: "2",
    visitante: "0",
    ganador: "🇺🇸 Estados Unidos",
    perdedor: "🇦🇺 Australia",
  },
  M30: {
    local: "0",
    visitante: "1",
    ganador: "🇲🇦 Marruecos",
    perdedor: "🏴 Escocia",
  },
  M31: {
    local: "3",
    visitante: "0",
    ganador: "🇧🇷 Brasil",
    perdedor: "🇭🇹 Haití",
  },
  M32: {
    local: "0",
    visitante: "1",
    ganador: "🇵🇾 Paraguay",
    perdedor: "🇹🇷 Turquía",
  },
  M33: {
    local: "5",
    visitante: "1",
    ganador: "🇳🇱 Países Bajos",
    perdedor: "🇸🇪 Suecia",
  },
  M34: {
    local: "2",
    visitante: "1",
    ganador: "🇩🇪 Alemania",
    perdedor: "🇨🇮 Costa de Marfil",
  },
  M35: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M36: {
    local: "0",
    visitante: "4",
    ganador: "🇯🇵 Japón",
    perdedor: "🇹🇳 Túnez",
  },
  M37: {
    local: "4",
    visitante: "0",
    ganador: "🇪🇸 España",
    perdedor: "🇸🇦 Arabia Saudita",
  },
  M38: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M39: { local: "2", visitante: "2", ganador: "", perdedor: "" },
  M40: {
    local: "1",
    visitante: "3",
    ganador: "🇪🇬 Egipto",
    perdedor: "🇳🇿 Nueva Zelanda",
  },
  M41: {
    local: "2",
    visitante: "0",
    ganador: "🇦🇷 Argentina",
    perdedor: "🇦🇹 Austria",
  },
  M42: {
    local: "3",
    visitante: "0",
    ganador: "🇫🇷 Francia",
    perdedor: "🇮🇶 Irak",
  },
  M43: {
    local: "3",
    visitante: "2",
    ganador: "🇳🇴 Noruega",
    perdedor: "🇸🇳 Senegal",
  },
  M44: {
    local: "1",
    visitante: "2",
    ganador: "🇩🇿 Argelia",
    perdedor: "🇯🇴 Jordania",
  },
  M45: {
    local: "5",
    visitante: "0",
    ganador: "🇵🇹 Portugal",
    perdedor: "🇺🇿 Uzbekistán",
  },
  M46: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M47: {
    local: "0",
    visitante: "1",
    ganador: "🇭🇷 Croacia",
    perdedor: "🇵🇦 Panamá",
  },
  M48: {
    local: "1",
    visitante: "0",
    ganador: "🇨🇴 Colombia",
    perdedor: "🇨🇩 RD Congo",
  },
  M49: {
    local: "2",
    visitante: "1",
    ganador: "🇨🇭 Suiza",
    perdedor: "🇨🇦 Canadá",
  },
  M50: {
    local: "3",
    visitante: "1",
    ganador: "🇧🇦 Bosnia y Herzegovina",
    perdedor: "🇶🇦 Qatar",
  },
  M51: {
    local: "0",
    visitante: "3",
    ganador: "🇧🇷 Brasil",
    perdedor: "🏴 Escocia",
  },
  M52: {
    local: "4",
    visitante: "2",
    ganador: "🇲🇦 Marruecos",
    perdedor: "🇭🇹 Haití",
  },
  M53: {
    local: "0",
    visitante: "3",
    ganador: "🇲🇽 México",
    perdedor: "🇨🇿 Rep. Checa",
  },
  M54: {
    local: "1",
    visitante: "0",
    ganador: "🇿🇦 Sudáfrica",
    perdedor: "🇰🇷 Corea del Sur",
  },
  M55: {
    local: "2",
    visitante: "1",
    ganador: "🇪🇨 Ecuador",
    perdedor: "🇩🇪 Alemania",
  },
  M56: {
    local: "0",
    visitante: "2",
    ganador: "🇨🇮 Costa de Marfil",
    perdedor: "🇨🇼 Curazao",
  },
  M57: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M58: {
    local: "1",
    visitante: "3",
    ganador: "🇳🇱 Países Bajos",
    perdedor: "🇹🇳 Túnez",
  },
  M59: {
    local: "3",
    visitante: "2",
    ganador: "🇹🇷 Turquía",
    perdedor: "🇺🇸 Estados Unidos",
  },
  M60: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M61: {
    local: "1",
    visitante: "4",
    ganador: "🇫🇷 Francia",
    perdedor: "🇳🇴 Noruega",
  },
  M62: {
    local: "5",
    visitante: "0",
    ganador: "🇸🇳 Senegal",
    perdedor: "🇮🇶 Irak",
  },
  M63: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M64: {
    local: "0",
    visitante: "1",
    ganador: "🇪🇸 España",
    perdedor: "🇺🇾 Uruguay",
  },
  M65: { local: "1", visitante: "1", ganador: "", perdedor: "" },
  M66: {
    local: "1",
    visitante: "5",
    ganador: "🇧🇪 Bélgica",
    perdedor: "🇳🇿 Nueva Zelanda",
  },
  M67: {
    local: "0",
    visitante: "2",
    ganador: "🏴 Inglaterra",
    perdedor: "🇵🇦 Panamá",
  },
  M68: {
    local: "2",
    visitante: "1",
    ganador: "🇭🇷 Croacia",
    perdedor: "🇬🇭 Ghana",
  },
  M69: { local: "0", visitante: "0", ganador: "", perdedor: "" },
  M70: {
    local: "3",
    visitante: "1",
    ganador: "🇨🇩 RD Congo",
    perdedor: "🇺🇿 Uzbekistán",
  },
  M71: { local: "3", visitante: "3", ganador: "", perdedor: "" },
  M72: {
    local: "1",
    visitante: "3",
    ganador: "🇦🇷 Argentina",
    perdedor: "🇯🇴 Jordania",
  },
};

const RESULTADOS_ELIMINATORIAS_FIFA = {
  M73: {
    local: "0",
    visitante: "1",
    ganador: "🇨🇦 Canadá",
    perdedor: "🇿🇦 Sudáfrica",
  },
  M74: {
    local: "2",
    visitante: "1",
    ganador: "🇧🇷 Brasil",
    perdedor: "🇯🇵 Japón",
  },
  M75: {
    local: "1",
    visitante: "1",
    penalesLocal: "3",
    penalesVisitante: "4",
    ganador: "🇵🇾 Paraguay",
    perdedor: "🇩🇪 Alemania",
  },
  M76: {
    local: "1",
    visitante: "1",
    penalesLocal: "2",
    penalesVisitante: "3",
    ganador: "🇲🇦 Marruecos",
    perdedor: "🇳🇱 Países Bajos",
  },
  M77: {
    local: "1",
    visitante: "2",
    ganador: "🇳🇴 Noruega",
    perdedor: "🇨🇮 Costa de Marfil",
  },
  M78: {
    local: "3",
    visitante: "0",
    ganador: "🇫🇷 Francia",
    perdedor: "🇸🇪 Suecia",
  },
  M79: {
    local: "2",
    visitante: "0",
    ganador: "🇲🇽 México",
    perdedor: "🇪🇨 Ecuador",
  },
  M80: {
    local: "2",
    visitante: "1",
    ganador: "🏴 Inglaterra",
    perdedor: "🇨🇩 RD Congo",
  },
  M81: {
    local: "3",
    visitante: "2",
    ganador: "🇧🇪 Bélgica",
    perdedor: "🇸🇳 Senegal",
  },
  M82: {
    local: "2",
    visitante: "0",
    ganador: "🇺🇸 Estados Unidos",
    perdedor: "🇧🇦 Bosnia y Herzegovina",
  },
  M83: {
    local: "3",
    visitante: "0",
    ganador: "🇪🇸 España",
    perdedor: "🇦🇹 Austria",
  },
  M84: {
    local: "2",
    visitante: "1",
    ganador: "🇵🇹 Portugal",
    perdedor: "🇭🇷 Croacia",
  },
  M85: {
    local: "2",
    visitante: "0",
    ganador: "🇨🇭 Suiza",
    perdedor: "🇩🇿 Argelia",
  },
  M86: {
    local: "1",
    visitante: "1",
    penalesLocal: "2",
    penalesVisitante: "4",
    ganador: "🇪🇬 Egipto",
    perdedor: "🇦🇺 Australia",
  },
  M87: {
    local: "3",
    visitante: "2",
    ganador: "🇦🇷 Argentina",
    perdedor: "🇨🇻 Cabo Verde",
  },
  M88: {
    local: "1",
    visitante: "0",
    ganador: "🇨🇴 Colombia",
    perdedor: "🇬🇭 Ghana",
  },

  M89: {
    local: "0",
    visitante: "3",
    ganador: "🇲🇦 Marruecos",
    perdedor: "🇨🇦 Canadá",
  },
  M90: {
    local: "0",
    visitante: "1",
    ganador: "🇫🇷 Francia",
    perdedor: "🇵🇾 Paraguay",
  },
  M91: {
    local: "1",
    visitante: "2",
    ganador: "🇳🇴 Noruega",
    perdedor: "🇧🇷 Brasil",
  },
  M92: {
    local: "2",
    visitante: "3",
    ganador: "🏴 Inglaterra",
    perdedor: "🇲🇽 México",
  },
  M93: {
    local: "0",
    visitante: "1",
    ganador: "🇪🇸 España",
    perdedor: "🇵🇹 Portugal",
  },
  M94: {
    local: "1",
    visitante: "4",
    ganador: "🇧🇪 Bélgica",
    perdedor: "🇺🇸 Estados Unidos",
  },
  M95: {
    local: "3",
    visitante: "2",
    ganador: "🇦🇷 Argentina",
    perdedor: "🇪🇬 Egipto",
  },
  M96: {
    local: "0",
    visitante: "0",
    penalesLocal: "4",
    penalesVisitante: "3",
    ganador: "🇨🇭 Suiza",
    perdedor: "🇨🇴 Colombia",
  },
};

const rondas = [
  {
    nombre: "16avos de Final",
    idHtml: "ronda-32",
    partidos: [
      ["M73", "🇿🇦 Sudáfrica", "🇨🇦 Canadá", "28 junio", "Los Ángeles"],
      ["M74", "🇧🇷 Brasil", "🇯🇵 Japón", "29 junio", "Houston"],
      ["M75", "🇩🇪 Alemania", "🇵🇾 Paraguay", "29 junio", "Boston"],
      ["M76", "🇳🇱 Países Bajos", "🇲🇦 Marruecos", "29 junio", "Monterrey"],
      ["M77", "🇨🇮 Costa de Marfil", "🇳🇴 Noruega", "30 junio", "Dallas"],
      ["M78", "🇫🇷 Francia", "🇸🇪 Suecia", "30 junio", "New York New Jersey"],
      ["M79", "🇲🇽 México", "🇪🇨 Ecuador", "30 junio", "Ciudad de México"],
      ["M80", "🏴 Inglaterra", "🇨🇩 RD Congo", "1 julio", "Atlanta"],
      ["M81", "🇧🇪 Bélgica", "🇸🇳 Senegal", "1 julio", "Seattle"],
      [
        "M82",
        "🇺🇸 Estados Unidos",
        "🇧🇦 Bosnia y Herzegovina",
        "1 julio",
        "San Francisco Bay Area",
      ],
      ["M83", "🇪🇸 España", "🇦🇹 Austria", "2 julio", "Los Ángeles"],
      ["M84", "🇵🇹 Portugal", "🇭🇷 Croacia", "2 julio", "Toronto"],
      ["M85", "🇨🇭 Suiza", "🇩🇿 Argelia", "2 julio", "Vancouver"],
      ["M86", "🇦🇺 Australia", "🇪🇬 Egipto", "3 julio", "Dallas"],
      ["M87", "🇦🇷 Argentina", "🇨🇻 Cabo Verde", "3 julio", "Miami"],
      ["M88", "🇨🇴 Colombia", "🇬🇭 Ghana", "3 julio", "Kansas City"],
    ],
  },
  {
    nombre: "Octavos de Final",
    idHtml: "octavos",
    partidos: [
      ["M89", "Ganador M73", "Ganador M76", "4 julio", "Houston"],
      ["M90", "Ganador M75", "Ganador M78", "4 julio", "Philadelphia"],
      ["M91", "Ganador M74", "Ganador M77", "5 julio", "New York New Jersey"],
      ["M92", "Ganador M79", "Ganador M80", "5 julio", "Ciudad de México"],
      ["M93", "Ganador M84", "Ganador M83", "6 julio", "Dallas"],
      ["M94", "Ganador M82", "Ganador M81", "6 julio", "Seattle"],
      ["M95", "Ganador M87", "Ganador M86", "7 julio", "Atlanta"],
      ["M96", "Ganador M85", "Ganador M88", "7 julio", "Vancouver"],
    ],
  },
  {
    nombre: "Cuartos de Final",
    idHtml: "cuartos",
    partidos: [
      ["M97", "Ganador M90", "Ganador M89", "9 julio", "Boston"],
      ["M98", "Ganador M93", "Ganador M94", "10 julio", "Los Ángeles"],
      ["M99", "Ganador M91", "Ganador M92", "11 julio", "Miami"],
      ["M100", "Ganador M95", "Ganador M96", "11 julio", "Kansas City"],
    ],
  },
  {
    nombre: "Semifinales",
    idHtml: "semifinales",
    partidos: [
      ["M101", "Ganador M97", "Ganador M98", "14 julio", "Dallas"],
      ["M102", "Ganador M99", "Ganador M100", "15 julio", "Atlanta"],
    ],
  },
  {
    nombre: "Partido por el 3.er Puesto",
    idHtml: "tercer-puesto",
    partidos: [["M103", "Perdedor M101", "Perdedor M102", "18 julio", "Miami"]],
  },
  {
    nombre: "Final",
    idHtml: "final",
    partidos: [
      [
        "M104",
        "Ganador M101",
        "Ganador M102",
        "19 julio",
        "New York New Jersey",
      ],
    ],
  },
];

function cargarResultadosIniciales() {
  const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  const eliminatoriasGuardadas = {};

  Object.keys(guardado).forEach((id) => {
    const numero = Number(id.replace("M", ""));

    if (numero >= 97) {
      eliminatoriasGuardadas[id] = guardado[id];
    }
  });

  return {
    ...RESULTADOS_GRUPOS_FIFA,
    ...RESULTADOS_ELIMINATORIAS_FIFA,
    ...eliminatoriasGuardadas,
  };
}

let resultados = cargarResultadosIniciales();

function guardar() {
  const soloEliminatorias = {};

  Object.keys(resultados).forEach((id) => {
    const numero = Number(id.replace("M", ""));

    if (numero >= 97) {
      soloEliminatorias[id] = resultados[id];
    }
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(soloEliminatorias));
}

function esPartidoFijo(id) {
  const numero = Number(id.replace("M", ""));
  return numero >= 73 && numero <= 96;
}

function formatearResultadoFijo(r, lado) {
  const goles = lado === "local" ? r.local : r.visitante;
  const penales = lado === "local" ? r.penalesLocal : r.penalesVisitante;

  return `${goles ?? ""}${penales !== undefined ? `(${penales})` : ""}`;
}

function formatearEquipo(equipo) {
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

function ordenarTabla(a, b) {
  return (
    b.pts - a.pts ||
    b.dg - a.dg ||
    b.gf - a.gf ||
    a.gc - b.gc ||
    a.equipo.localeCompare(b.equipo)
  );
}

function calcularTabla(grupo) {
  const tabla = {};

  equiposPorGrupo[grupo].forEach((equipo) => {
    tabla[equipo] = {
      equipo,
      grupo,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
    };
  });

  partidos
    .filter((p) => p.grupo === grupo)
    .forEach((p) => {
      const r = RESULTADOS_GRUPOS_FIFA[p.id];

      if (!r) {
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

      if (gl > gv) {
        tabla[p.local].pg++;
        tabla[p.visitante].pp++;
        tabla[p.local].pts += 3;
      } else if (gl < gv) {
        tabla[p.visitante].pg++;
        tabla[p.local].pp++;
        tabla[p.visitante].pts += 3;
      } else {
        tabla[p.local].pe++;
        tabla[p.visitante].pe++;
        tabla[p.local].pts++;
        tabla[p.visitante].pts++;
      }
    });

  return Object.values(tabla)
    .map((t) => {
      t.dg = t.gf - t.gc;
      return t;
    })
    .sort(ordenarTabla);
}

function resolverTexto(texto) {
  if (texto.startsWith("Ganador ")) {
    const id = texto.replace("Ganador ", "");
    return resultados[id]?.ganador || texto;
  }

  if (texto.startsWith("Perdedor ")) {
    const id = texto.replace("Perdedor ", "");
    return resultados[id]?.perdedor || texto;
  }

  return texto;
}

function renderGrupos() {
  const container = document.getElementById("grupos-container");
  container.innerHTML = "";

  Object.keys(equiposPorGrupo).forEach((grupo) => {
    const tabla = calcularTabla(grupo);
    const partidosGrupo = partidos.filter((p) => p.grupo === grupo);

    const card = document.createElement("div");
    card.className = "grupo";

    card.innerHTML = `
      <h3>Grupo ${grupo}</h3>

      <div class="grupo-equipos">
        ${equiposPorGrupo[grupo]
          .map(
            (equipo) => `
          <div class="equipo-chip">
            ${formatearEquipo(equipo)}
          </div>
        `,
          )
          .join("")}
      </div>

      <div class="grupo-contenido">

        <div class="bloque-grupo">
          <h4>📅 Resultados del grupo</h4>

          ${partidosGrupo
            .map((p) => {
              const r = RESULTADOS_GRUPOS_FIFA[p.id];

              return `
              <div class="partido">
                <div class="partido-info">
                  ${p.id} · ${p.fecha} · ${p.sede}
                </div>

                <div class="partido-linea">
                  <span class="equipo-local">${p.local}</span>
                  <strong class="resultado-fijo">${r.local}</strong>
                  <span class="separador-goles">-</span>
                  <strong class="resultado-fijo">${r.visitante}</strong>
                  <span class="equipo-visitante">${p.visitante}</span>
                </div>
              </div>
            `;
            })
            .join("")}
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
                ${tabla
                  .map(
                    (t) => `
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
                `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

function renderClasificados() {
  const container = document.getElementById("clasificados-container");

  const gruposClasificados = [
    {
      titulo: "🥇 Primeros de grupo",
      equipos: [
        "🇲🇽 México",
        "🇨🇭 Suiza",
        "🇧🇷 Brasil",
        "🇺🇸 Estados Unidos",
        "🇩🇪 Alemania",
        "🇳🇱 Países Bajos",
        "🇧🇪 Bélgica",
        "🇪🇸 España",
        "🇫🇷 Francia",
        "🇦🇷 Argentina",
        "🇨🇴 Colombia",
        "🏴 Inglaterra",
      ],
    },
    {
      titulo: "🥈 Segundos de grupo",
      equipos: [
        "🇿🇦 Sudáfrica",
        "🇨🇦 Canadá",
        "🇲🇦 Marruecos",
        "🇦🇺 Australia",
        "🇨🇮 Costa de Marfil",
        "🇯🇵 Japón",
        "🇪🇬 Egipto",
        "🇨🇻 Cabo Verde",
        "🇳🇴 Noruega",
        "🇦🇹 Austria",
        "🇵🇹 Portugal",
        "🇭🇷 Croacia",
      ],
    },
    {
      titulo: "🥉 Mejores terceros",
      equipos: [
        "🇨🇩 RD Congo",
        "🇸🇪 Suecia",
        "🇪🇨 Ecuador",
        "🇬🇭 Ghana",
        "🇧🇦 Bosnia y Herzegovina",
        "🇩🇿 Argelia",
        "🇵🇾 Paraguay",
        "🇸🇳 Senegal",
      ],
    },
  ];

  container.innerHTML = `
    <div class="clasificados-card">
      ${gruposClasificados
        .map(
          (grupo) => `
        <div class="clasificados-bloque">
          <h3>${grupo.titulo}</h3>

          <div class="clasificados-grid">
            ${grupo.equipos
              .map(
                (equipo, i) => `
              <div class="clasificado-chip">
                <span class="clasificado-numero">${i + 1}</span>
                ${formatearEquipo(equipo)}
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderKnockout() {
  const container = document.getElementById("knockout-container");
  container.innerHTML = "";

  rondas.forEach((ronda) => {
    const div = document.createElement("div");
    div.className = "ronda";
    div.id = ronda.idHtml;

    div.innerHTML = `
      <h3>${ronda.nombre}</h3>

      ${ronda.partidos
        .map((p) => {
          const [id, a, b, fecha, sede] = p;
          const equipoA = resolverTexto(a);
          const equipoB = resolverTexto(b);
          const r = resultados[id] || { local: "", visitante: "" };

          const pendiente =
            equipoA.includes("Ganador") ||
            equipoA.includes("Perdedor") ||
            equipoB.includes("Ganador") ||
            equipoB.includes("Perdedor");

          const fijo = esPartidoFijo(id);

          return `
          <div class="llave">
            <strong>${id}</strong> · ${fecha} · ${sede}

            <div class="partido-linea">
              <span class="equipo-local">${equipoA}</span>

              ${
                fijo
                  ? `<strong class="resultado-fijo">${formatearResultadoFijo(r, "local")}</strong>`
                  : `<input 
                    type="number" 
                    min="0" 
                    value="${r.local ?? ""}" 
                    data-ko="${id}" 
                    data-lado="local" 
                    data-a="${equipoA}" 
                    data-b="${equipoB}"
                    ${pendiente ? "disabled" : ""}
                  >`
              }

              <span class="separador-goles">-</span>

              ${
                fijo
                  ? `<strong class="resultado-fijo">${formatearResultadoFijo(r, "visitante")}</strong>`
                  : `<input 
                    type="number" 
                    min="0" 
                    value="${r.visitante ?? ""}" 
                    data-ko="${id}" 
                    data-lado="visitante" 
                    data-a="${equipoA}" 
                    data-b="${equipoB}"
                    ${pendiente ? "disabled" : ""}
                  >`
              }

              <span class="equipo-visitante">${equipoB}</span>
            </div>

            <small>
              ${
                fijo
                  ? "Resultado oficial fijo."
                  : pendiente
                    ? "Pendiente de ganador anterior."
                    : "En eliminatorias, si hay empate, cargá el resultado final que defina al ganador."
              }
            </small>
          </div>
        `;
        })
        .join("")}
    `;

    container.appendChild(div);
  });

  document.querySelectorAll("input[data-ko]").forEach((input) => {
    input.addEventListener("input", (e) => {
      const id = e.target.dataset.ko;
      const lado = e.target.dataset.lado;
      const equipoA = e.target.dataset.a;
      const equipoB = e.target.dataset.b;

      if (!resultados[id]) {
        resultados[id] = {};
      }

      resultados[id][lado] = e.target.value;

      const r = resultados[id];

      if (
        r.local !== "" &&
        r.visitante !== "" &&
        r.local !== undefined &&
        r.visitante !== undefined
      ) {
        const gl = Number(r.local);
        const gv = Number(r.visitante);

        if (gl > gv) {
          r.ganador = equipoA;
          r.perdedor = equipoB;
        } else if (gl < gv) {
          r.ganador = equipoB;
          r.perdedor = equipoA;
        } else {
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
            behavior: "instant",
          });
        });
      });
    });
  });
}

function render() {
  renderGrupos();
  renderClasificados();
  renderKnockout();
}

render();
