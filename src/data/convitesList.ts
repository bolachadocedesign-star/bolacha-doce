// Lista de todos os convites com suas informações
// Cada item contém: nome do casal, primeira imagem, e tags

export interface ConviteItem {
  id: string;
  nome: string;
  image: string;
  tags: string; // Ex: "Moderno | Lacre de Cera | Verde | Aquarela"
}

export const convitesList: ConviteItem[] = [
  {
    id: "aida-daniel",
    nome: "Aída e Daniel",
    image: "/fotosconvites/Aída e Daniel/AidaDaniel1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "alice-victor",
    nome: "Alice e Victor",
    image: "/fotosconvites/Alice e Victor/AliceVictor1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-carolina",
    nome: "Ana Carolina",
    image: "/fotosconvites/Ana Carolina/AnaCarolina1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-carolina-filipi",
    nome: "Ana Carolina e Filipi",
    image: "/fotosconvites/Ana Carolina e Filipi/AnaCarolinaFilipi.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-luisa-samuel",
    nome: "Ana Luisa e Samuel",
    image: "/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ana-luiza-fernando",
    nome: "Ana Luiza e Fernando",
    image: "/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "andressa-caio",
    nome: "Andressa e Caio",
    image: "/fotosconvites/Andressa e Caio/AndressaCaio1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "anna-bruno",
    nome: "Anna e Bruno",
    image: "/fotosconvites/Anna e Bruno/AnnaBruno1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "arthur-rafael",
    nome: "Arthur e Rafael",
    image: "/fotosconvites/Arthur e Rafael/ArthurRaphael1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "betania",
    nome: "Betania",
    image: "/fotosconvites/Betania/Betania1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "bruna-vinicius",
    nome: "Bruna e Vinicius",
    image: "/fotosconvites/Bruna e Vinicius/BrunaVinicius1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "camila-hebert",
    nome: "Camila e Hebert",
    image: "/fotosconvites/Camila e Hebert/CamilaHebert1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "camily",
    nome: "Camily",
    image: "/fotosconvites/Camily/Camily1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "carol-eua",
    nome: "Carol EUA",
    image: "/fotosconvites/Carol EUA/Carol1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "clara-lucas",
    nome: "Clara e Lucas",
    image: "/fotosconvites/Clara e Lucas/ClaraLucas1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "clarissa",
    nome: "Clarissa",
    image: "/fotosconvites/Clarissa/Clarissa1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "cris-mello",
    nome: "Cris Mello",
    image: "/fotosconvites/Cris Mello/CrisMello1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "dani-dino",
    nome: "Dani e Dino",
    image: "/fotosconvites/Dani e Dino/DaniDino1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "dani-rafa",
    nome: "Dani e Rafa",
    image: "/fotosconvites/Dani e Rafa/DaniRafa1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "dani-melo",
    nome: "Dani Melo",
    image: "/fotosconvites/Dani Melo/DaniMelo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "daniel-pitchon",
    nome: "Daniel Pitchon",
    image: "/fotosconvites/Daniel Pitchon/DanielPitchon1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "daniela-thiago",
    nome: "Daniela e Thiago",
    image: "/fotosconvites/Daniela e Thiago/DanielaThiago1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "daniela-thiago-alt",
    nome: "Daniela e Thiago",
    image: "/fotosconvites/DanielaThiago/DanielaThiago1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "dayane-marcelo",
    nome: "Dayane e Marcelo",
    image: "/fotosconvites/Dayane e Marcelo/DayaneMarcelo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "debora-bruno",
    nome: "Debora e Bruno",
    image: "/fotosconvites/Debora e Bruno/DeboraBruno1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "debora-julio",
    nome: "Débora e Júlio",
    image: "/fotosconvites/Débora e Júlio/DéboraJúlio1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "dubai",
    nome: "Dubai",
    image: "/fotosconvites/Dubai/Dubai1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "fernanda-fabio",
    nome: "Fernanda e Fabio",
    image: "/fotosconvites/Fernanda e Fabio/FernandaFabio1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "fernanda-rodrigo",
    nome: "Fernanda e Rodrigo",
    image: "/fotosconvites/Fernanda e Rodrigo/FernandaRodrigo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "fernanda-simon",
    nome: "Fernanda e Simon",
    image: "/fotosconvites/Fernanda e Simon/FernandaSimon1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "fernanda-thiago",
    nome: "Fernanda e Thiago",
    image: "/fotosconvites/Fernanda e Thiago/FernandaThiago1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "flavia-alberto",
    nome: "Flavia e Alberto",
    image: "/fotosconvites/Flavia e Alberto/FlaviaAlberto1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "gabriela-eduardo",
    nome: "Gabriela e Eduardo",
    image: "/fotosconvites/Gabriela e Eduardo/GabrielaEduardo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-assis",
    nome: "Isabela Assis",
    image: "/fotosconvites/Isabela Assis/IsabelaAssis1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-bernardo",
    nome: "Isabela e Bernardo",
    image: "/fotosconvites/Isabela e Bernardo/IsabelaBernardo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-henrique",
    nome: "Isabela e Henrique",
    image: "/fotosconvites/Isabela e Henrique/IsabelaHenrique1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-luiz-felipe",
    nome: "Isabela e Luiz Felipe",
    image: "/fotosconvites/Isabela e Luiz Felipe/IsabelaAntico1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-marcos",
    nome: "Isabela e Marcos",
    image: "/fotosconvites/Isabela e Marcos/IsabelaMarcos1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-lino",
    nome: "Isabela Lino",
    image: "/fotosconvites/Isabela Lino/IsabelaLino1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isabela-quick",
    nome: "Isabela Quick",
    image: "/fotosconvites/Isabela Quick/IsabelaQuick1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "isadora-alan",
    nome: "Isadora e Alan",
    image: "/fotosconvites/Isadora e Alan/IsadoraAlan1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "jade-oliver",
    nome: "Jade e Oliver",
    image: "/fotosconvites/Jade e Oliver/JadeOliver1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "jessica-bernardo",
    nome: "Jessica e Bernardo",
    image: "/fotosconvites/Jessica e Bernardo/JessicaBernardo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "jessica-cassio",
    nome: "Jéssica e Cássio",
    image: "/fotosconvites/Jéssica e Cássio/JessicaCassio1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "jessica-lucas",
    nome: "Jessica e Lucas",
    image: "/fotosconvites/Jessica e Lucas/Jessica1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "joana-paula",
    nome: "Joana Paula",
    image: "/fotosconvites/Joana Paula/JoanaPaula1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "julia-alessandro",
    nome: "Julia e Alessandro",
    image: "/fotosconvites/Julia e Alessandro/JuliaAlessandro1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "julia-salles",
    nome: "Julia Salles",
    image: "/fotosconvites/Julia Salles/JuliaSalles1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "juliane-igor",
    nome: "Juliane e Igor",
    image: "/fotosconvites/Juliane e Igor/JulianeIgor1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "juliane-julio",
    nome: "Juliane e Julio",
    image: "/fotosconvites/Juliane e Julio/JulianeJulio1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "karina-henrique",
    nome: "Karina e Henrique",
    image: "/fotosconvites/Karina e Henrique/KarinaHenrqiue1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "kelly-daniel",
    nome: "Kelly e Daniel",
    image: "/fotosconvites/Kelly e Daniel/Kelly1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "larissa-biondo",
    nome: "Larissa Biondo",
    image: "/fotosconvites/Larissa Biondo/Larissa1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "larissa-chicago",
    nome: "Larissa Chicago",
    image: "/fotosconvites/Larissa Chicago/LarissaChicago1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "laura",
    nome: "Laura",
    image: "/fotosconvites/Laura/Laura1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "laura-eduardo",
    nome: "Laura e Eduardo",
    image: "/fotosconvites/Laura e Eduardo/LauraEduardo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "laura-huigi",
    nome: "Laura e Huigi",
    image: "/fotosconvites/Laura e Huigi/LauraHuigi1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "laura-omar",
    nome: "Laura e Omar",
    image: "/fotosconvites/Laura e Omar/LauraOmar1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "leticia-cipriani",
    nome: "Leticia Cipriani",
    image: "/fotosconvites/Leticia Cipriani/LeticiaCipriani1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "lindsey-vitor",
    nome: "Lindsey e Vitor",
    image: "/fotosconvites/Lindsey e Vitor/LindseyVitor1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "livia-felipe",
    nome: "Livia e Felipe",
    image: "/fotosconvites/Livia e Felipe/Livia1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "livia-jornal",
    nome: "Livia Jornal",
    image: "/fotosconvites/Livia Jornal/LiviaJornal1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "lorena-thiago",
    nome: "Lorena e Thiago",
    image: "/fotosconvites/Lorena e Thiago/LorenaThiago1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "luciana-henrique",
    nome: "Luciana e Henrique",
    image: "/fotosconvites/Luciana e Henrique/LucianaSantana1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "luciana-lucas",
    nome: "Luciana e Lucas",
    image: "/fotosconvites/Luciana e Lucas/LucianaLucas1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "luciana-paul",
    nome: "Luciana e Paul",
    image: "/fotosconvites/Luciana e Paul/LucianaPaul1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "lud-drinks",
    nome: "Lud Drinks",
    image: "/fotosconvites/Lud Drinks/LudDrinks1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ludmila",
    nome: "Ludmila",
    image: "/fotosconvites/Ludmila/Ludmila1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "luisa-pedro",
    nome: "Luisa e Pedro",
    image: "/fotosconvites/Luisa e Pedro/LuisaPedro1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "mafe-marcao",
    nome: "Mafe e Marcao",
    image: "/fotosconvites/Mafe e Marcao/MafeMarcao1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "malu",
    nome: "Malu",
    image: "/fotosconvites/Malu/Malu1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "manoela-marco",
    nome: "Manoela e Marco",
    image: "/fotosconvites/Manoela e Marco/ManoelaMarco1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "marcela-italo",
    nome: "Marcela e Ítalo",
    image: "/fotosconvites/Marcela e Ítalo/MarcelaÍtalo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "marcela-jean",
    nome: "Marcela e Jean",
    image: "/fotosconvites/Marcela e Jean/MarcelaJean1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "mari-prado",
    nome: "Mari Prado",
    image: "/fotosconvites/Mari Prado/MariaPrado1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "maria-luiza-erick",
    nome: "Maria Luiza e Erick",
    image: "/fotosconvites/Maria Luiza e Erick/MariaLuizaErick1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "maria-victoria-giuliano",
    nome: "Maria Victoria e Giuliano",
    image: "/fotosconvites/Maria Victoria e Giuliano/MariaVitoria1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "mariana-diego",
    nome: "Mariana e Diego",
    image: "/fotosconvites/Mariana e Diego/MarianaDiego1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "mariana-gustavo",
    nome: "Mariana e Gustavo",
    image: "/fotosconvites/Mariana e Gustavo/MarianaGustavo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "mariana-vinicius",
    nome: "Mariana e Vinicius",
    image: "/fotosconvites/Mariana e Vinicius/MarianaVinicius1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "mariana-scaramussa",
    nome: "Mariana Scaramussa",
    image: "/fotosconvites/Mariana Scaramussa/MariaanaScaramussa1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "marilia-lucas",
    nome: "Marilia e Lucas",
    image: "/fotosconvites/Marilia e Lucas/MariliaLucas1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "marina-paulo",
    nome: "Marina e Paulo",
    image: "/fotosconvites/Marina e Paulo/MarinaPaulo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "marina-naves",
    nome: "Marina Naves",
    image: "/fotosconvites/Marina Naves/MarinaNaves1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "moara-andre",
    nome: "Moara e Andre",
    image: "/fotosconvites/Moara e Andre/MoaraAndre1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "monica-gustavo",
    nome: "Mônica e Gustavo",
    image: "/fotosconvites/Mônica e Gustavo/MônicaGustavo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "nayara",
    nome: "Nayara",
    image: "/fotosconvites/Nayara/Nayara1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "nora",
    nome: "Nora",
    image: "/fotosconvites/Nora/Nora1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "ofli-renata",
    nome: "Ofli e Renata",
    image: "/fotosconvites/Ofli e Renata/OfiliRenata1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "olga-andre",
    nome: "Olga e Andre",
    image: "/fotosconvites/Olga e Andre/OlgaAndre1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "olivia-angelo",
    nome: "Olivia e Angelo",
    image: "/fotosconvites/Olivia e Angelo/OliviaAngelo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "patricia-frederico",
    nome: "Patricia e Frederico",
    image: "/fotosconvites/Patricia e Frederico/PatriciaFrederico1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "paula-alexandre",
    nome: "Paula e Alexandre",
    image: "/fotosconvites/Paula e Alexandre/PaulaAlexandre1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "priscila-savio",
    nome: "Priscila e Savio",
    image: "/fotosconvites/Priscila e Savio/PriscilaSavio1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "rafila",
    nome: "Rafila",
    image: "/fotosconvites/Rafila/Rafila1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "raissa",
    nome: "Raissa",
    image: "/fotosconvites/Raissa/Raissa1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "renatinha",
    nome: "Renatinha",
    image: "/fotosconvites/Renatinha/Renatinha1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "rivas-aniversario",
    nome: "Rivas Aniversário",
    image: "/fotosconvites/Rivas Aniversário/Rivas1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "roberta-marcelo",
    nome: "Roberta e Marcelo",
    image: "/fotosconvites/Roberta e Marcelo/RobertaMarcelo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "roberta-yago",
    nome: "Roberta e Yago",
    image: "/fotosconvites/Roberta e Yago/RobertaYago1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "rubia-liviston",
    nome: "Rúbia e Liviston",
    image: "/fotosconvites/Rúbia e Liviston/RúbiaLiviston1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "sanna",
    nome: "Sanna",
    image: "/fotosconvites/Sanna/Sanna1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "sarah",
    nome: "Sarah",
    image: "/fotosconvites/Sarah/Sarah1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "sharon",
    nome: "Sharon",
    image: "/fotosconvites/Sharon/Sharon1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "silvia-guilherme",
    nome: "Silvia e Guilherme",
    image: "/fotosconvites/Silvia e Guilherme/SilviaGuilherme1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "stephanie",
    nome: "Stephanie",
    image: "/fotosconvites/Stephanie/Stephanie1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "stephanie-carteira",
    nome: "Stephanie Carteira",
    image: "/fotosconvites/Stephanie Carteira/StephanieCarteira1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "tamiris-ivan",
    nome: "Tamiris e Ivan",
    image: "/fotosconvites/Tamiris e Ivan/TamirisIvan1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "tatiane-rafael",
    nome: "Tatiane e Rafael",
    image: "/fotosconvites/Tatiane e Rafael/TatianeRafael1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "taynara-renato",
    nome: "Taynara e Renato",
    image: "/fotosconvites/Taynara e Renato/Taynara1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "thais-philipe",
    nome: "Thais e Philipe",
    image: "/fotosconvites/Thais e Philipe/ThaisPhilipe1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "toniana-davi",
    nome: "Toniana e Davi",
    image: "/fotosconvites/Toniana e Davi/TonianaDavi1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "vanessa-bernardo",
    nome: "Vanessa e Bernardo",
    image: "/fotosconvites/Vanessa e Bernardo/VanessaBernardo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "virginia-bolinha",
    nome: "Virginia Bolinha",
    image: "/fotosconvites/Virginia Bolinha/VirginiaBolinha1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "virginia-bernardo",
    nome: "Virginia e Bernardo",
    image: "/fotosconvites/Virginia e Bernardo/VirginiaBernardo1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "viviane-fernando",
    nome: "Viviane e Fernando",
    image: "/fotosconvites/Viviane e Fernando/Viviane1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
  {
    id: "yasmin-batien",
    nome: "Yasmin e Batien",
    image: "/fotosconvites/Yasmin e Batien/YasminBatien1.jpg",
    tags: "Moderno | Lacre de Cera | Verde | Aquarela"
  },
];

