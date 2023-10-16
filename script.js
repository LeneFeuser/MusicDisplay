const allTimeLow = {
    id: '1',
    songName: 'All Time Low',
    artist: 'Jon Bellion',
    album: 'The Human Condition',
    cover: 'AllTimeLow_Jon-Bellion.jpg',
};
const damas = {
    id: '2',
    songName: 'Damas',
    artist: 'Petit Voyou',
    album: 'Single',
    cover: 'Damas_PetitVoyou.jpg',
};
const darkHorse = {
    id: '3',
    songName: 'Dark Horse',
    artist: 'Groove Crackers',
    album: 'Single',
    cover: 'DarkHorse_GrooveCrackers.jpg',
};
const dubai = {
    id: '4',
    songName: 'Dubai',
    artist: 'XD',
    album: 'Single',
    cover: 'Dubai_XD.jpg',
};
const eSal = {
    id: '5',
    songName: 'É Sal',
    artist: 'Matuê',
    album: 'Máquina do Tempo',
    cover: 'ESal_Matue.jpg',
};
const fluxo = {
    id: '6',
    songName: 'Fluxo',
    artist: 'Kalli',    
    album: 'De um outro lugar',
    cover: 'Fluxo_Kalli.jpg',
};
const goodBye = {
    id: '7',
    songName: 'Goodbye',
    artist: 'AREZRA',
    album: 'Single',
    cover: 'Goodbye_AREZRA.jpg',
};
const iDFC = {
    id: '8',
    songName: 'IDFC',
    artist: 'Black Bear',
    album: 'Deadroses',
    cover: 'idfc_blackbear.jpg',
};
const jalebiBaby = {
    id: '9',
    songName: 'Jalebi Baby, Boka, Trackula',
    artist: 'Electric Chapel',
    album: 'Single',
    cover: 'JalebiBaby_ElectricChapel.jpg',
};
const lastResort = {
    id: '10',
    songName: 'Last Resort',
    artist: 'Darddope, Kevin Staudt',
    album: 'Single',
    cover: 'LastResort_Darddope.jpg',
};
const megaLamourToujours = {
    id: '11',
    songName: 'Mega Lamour Toujours',
    artist: 'LucasDJ, Mc Gw',
    album: 'Single',
    cover: 'MegaLamourToujours_LucasDJ.jpg',
};
const megaVideozinPra = {
    id: '12',
    songName: 'Mega Videozin Pra',
    artist: 'DJ Rayan Temochko',
    album: 'Single',
    cover: 'MegaVideozinPra_DJrayan.jpg',
};
const miGente = {
    id: '13',
    songName: 'Mi Gente',
    artist: 'F4ST',
    album: 'Single',
    cover: 'MiGente_F4ST.jpg',
};
const moneyOnMyMind = {
    id: '14',
    songName: 'Money On My Mind',
    artist: 'Sam Smith',
    album: 'In The Lonely Hour',
    cover: 'MoneyOnMyMind_HVME.jpg',
};
const montagemCoral = {
    id: '15',
    songName: 'Montagem Coral',
    artist: 'Dj Holanda, Mc GW, MC Th',
    album: 'Single',
    cover: 'MontagemCoral_DJHolanda.jpg',
};
const opOpa = {
    id: '16',
    songName: 'Op Opa',
    artist: 'Gaullin',
    album: 'Single',
    cover: 'OpOpa_Gaullin.jpg',
};
const raveDevagarinho = {
    id: '17',
    songName: 'Rave Devagarinho',
    artist: 'Dj TOPO, Delano',
    album: 'Single',
    cover: 'RaveDevagarinho_DJTOPO.jpg',
};
const somebodyNew = {
    id: '18',
    songName: 'Somebody New',
    artist: 'TELYKAST',
    album: 'Single',
    cover: 'SomebodyNew_TELYKAST.jpg',
};
const wannabe = {
    id: '19',
    songName: 'Wannabe',
    artist: 'Why Mona',
    album: 'Single',
    cover: 'Wannabe_whymona.jpg',
};
const welcomeToTheMato = {
    id: '20',
    songName: 'Welcome To The Mato',
    artist: 'Marco Brasil Filho, Dj Kevin',
    album: 'Single',
    cover: 'WelcomeToTheMato_DjKevin.jpg',
};
const weLikeToParty = {
    id: '21',
    songName: 'We Like To Party',
    artist: 'Showtek',
    album: 'Single',
    cover: 'WeLikeToParty_Showtek.jpg',
};

const musicLibrary = [
    allTimeLow,
    damas,
    darkHorse,
    dubai,
    eSal,
    fluxo,
    goodBye,
    iDFC,
    jalebiBaby,
    lastResort,
    megaLamourToujours,
    megaVideozinPra,
    miGente,
    moneyOnMyMind,
    montagemCoral,
    opOpa,
    raveDevagarinho,
    somebodyNew,
    wannabe,
    welcomeToTheMato,
    weLikeToParty,
];

let songs = [...musicLibrary];

const pageBody = document.getElementById('page-body');

function loadLibrary() {
    pageBody.innerHTML = '';
    for(let index = 0; index < musicLibrary.length; index++) {
        pageBody.innerHTML += `
    <div
        class="card d-flex flex-column align-items-center"
        style="width: 18rem; height: 30rem;">
      <img
        src="/Images/Cover/${musicLibrary[index].cover}"
        class="card-img-top"
        alt="Capa do disco."
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${musicLibrary[index].songName}</h5>
        <p class="card-text">${musicLibrary[index].album}</p>
        <p class="card-text">${musicLibrary[index].artist}</p>
        <button class="btn btn-outline-secondary w-100 ">Adicionar</button>
      </div>
      
    </div>
    `;
    }
}

loadLibrary();