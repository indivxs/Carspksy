// CODIGO MENU-NAV-BAR
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

// FIM DO CODIGO PARA MENU NAV BAR


// CARD PARA SELECIONAR CARRO

// Seleciona todos os botões de grupo de carros
const carGroupButtons = document.querySelectorAll('.car-group-button');

// Seleciona o contêiner de modelos de carro e informações do carro
const carModelsContainer = document.getElementById('car-models-container');
const carInfoContainer = document.getElementById('car-info');

// Adiciona um ouvinte de eventos para cada botão de grupo de carros
carGroupButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtém o grupo de carros associado ao botão
        const selectedGroup = button.getAttribute('data-group');

        // Esconde todos os modelos de carros
        const allCarModels = document.querySelectorAll('.car-models');
        allCarModels.forEach(model => {
            model.style.display = 'none';
        });

        // Exibe apenas os modelos de carros do grupo selecionado
        const selectedCarModels = document.querySelector(`.car-models[data-group="${selectedGroup}"]`);
        selectedCarModels.style.display = 'block';
        carModelsContainer.style.display = 'block'
    });
});

// Adiciona um ouvinte de eventos para os modelos de carros
carModelsContainer.addEventListener('click', (e) => {
    const clickedCar = e.target.getAttribute('data-car');

   /* // Exibe informações do carro clicado
    carInfoContainer.innerHTML = `<p>Informações sobre o carro selecionado: ${clickedCar}</p>`; */
});

// Adiciona um ouvinte de eventos para os modelos de carros
carModelsContainer.addEventListener('click', (e) => {
    const clickedCar = e.target.getAttribute('data-car');
    const carDetails = getCarDetails(clickedCar);

    // Exibe informações do carro clicado
    displayCarInfo(carDetails);
});

// Função para obter detalhes do carro com base no nome do carro
function getCarDetails(carName) {
    // Mapeia nomes de carros para detalhes
    const carDetailsMap = {
        //CARROS SEDANS
        'Carro Sedan 1': {
            image: 'assets/img/Sedan/hb20s2.png',
            year: 2022,
            transmission: 'Manual',
            potencia: '1.0',
            name: 'HB20',
            price: 'R$ 90,00/d',
        },
        'Carro Sedan 2': {
            image: 'assets/img/Sedan/logan2.png',
            year: 2022,
            transmission: 'Automatico',
            potencia: '1.0',
            name: 'Logan',
            price: 'R$ 100,00/d',
        },
        'Carro Sedan 3': {
            image: 'assets/img/Sedan/voyage.png',
            year: 2022,
            transmission: 'Manual',
            potencia: '1.0',
            name: 'Voyage',
            price: 'R$ 94,00/d',
        },
        //CARROS HATCH
        'Carro Hatch 1': {
            image: 'assets/img/Hatch/polo.png',
            year: 2022,
            transmission: 'Automático',
            potencia: '1.0',
            name: 'Polo',
            price: 'R$ 59,00/d',
        },
        'Carro Hatch 2': {
            image: 'assets/img/Hatch/hb20.png',
            year: 2022,
            transmission: 'Manual',
            potencia: '1.0',
            name: 'HB20',
            price: 'R$ 70,00/d',
        },
        'Carro Hatch 3': {
            image: 'assets/img/Hatch/onix2.png',
            year: 2022,
            transmission: 'Manual',
            potencia: '1.0',
            name: 'Onix',
            price: 'R$59,00/d',
        },'Carro Hatch 4': {
            image: 'assets/img/Hatch/argx.png',
            year: 2022,
            transmission: 'Manual',
            potencia: '1.0',
            name: 'Argo',
            price: 'R$59,00/d',
        },
        //SUVs
        'Carro SUV 1': {
            image: 'assets/img/SUV/creta.png',
            year: 2022,
            transmission: 'Automatico',
            potencia: '1.0 Turbo',
            name: 'Creta',
            price: 'R$ 140,00/d',
        },
        'Carro SUV 2': {
            image: 'assets/img/SUV/renegade.png',
            year: 2022,
            transmission: 'Automatico',
            potencia: '1.3 Turbo',
            name: 'Renegade',
            price: 'R$ 130,00/d',
        },
        'Carro SUV 3': {
            image: 'assets/img/SUV/t-cross.png',
            year: 2022,
            transmission: 'Automatico',
            potencia: '1.6',
            name: 'T-Croos',
            price: 'R$ 140,00/d',
        },
        'Carro SUV 4': {
            image: 'assets/img/SUV/doblo.png',
            year: 2022,
            transmission: 'Manual',
            potencia: '1.8',
            name: 'Doblo',
            price: 'R$ 140,00/d',
        },
        'Carro SUV 5': {
            image: 'assets/img/SUV/tracker.png',
            year: 2022,
            transmission: 'Automatico',
            potencia: '1.0 Turbo',
            name: 'Tracker',
            price: 'R$ 140,00/d',
            groupname: 'Grupo de luxo'
        },
    };

    return carDetailsMap[carName];
}

// Função para exibir informações do carro
function displayCarInfo(carDetails) {
    const carImage = document.getElementById('car-image');
    const carYear = document.getElementById('car-year');
    const carTransmission = document.getElementById('car-transmission');
    const carPotencia = document.getElementById('car-potencia');
    const carName = document.getElementById('car-name');
    const carPrice = document.getElementById('car-price');

    carImage.src = carDetails.image;
    carYear.textContent = carDetails.year;
    carTransmission.textContent = carDetails.transmission;
    carPotencia.textContent = carDetails.potencia;
    carName.textContent = carDetails.name;
    carPrice.textContent = carDetails.price;
}

// ANIMACAO DE TRANSICAO DOS CARROS

carModelsContainer.addEventListener('click', (e) => {
    const clickedCar = e.target.getAttribute('data-car');
    const carDetails = getCarDetails(clickedCar);

    // Executa a animação de fade-out
    fadeOutCarDetails(() => {
        // Exibe informações do carro clicado após a animação
        displayCarInfo(carDetails);
    });
});

// Função para executar a animação de fade-out
function fadeOutCarDetails(callback) {
    const carDetails = document.getElementById('car-details');

    // Define a opacidade para 0 com uma transição suave
    carDetails.style.opacity = 0;

    // Adiciona um ouvinte de eventos para quando a transição terminar
    carDetails.addEventListener('transitionend', () => {
        // Chama o callback após a animação
        if (callback) {
            callback();
        }
    });
}

// Função para exibir informações do carro com animação de fade-in
function displayCarInfo(carDetails) {
    const carImage = document.getElementById('car-image');
    const carYear = document.getElementById('car-year');
    const carTransmission = document.getElementById('car-transmission');
    const carDetailsContainer = document.getElementById('car-details');
    const carPotencia = document.getElementById('car-potencia');
    const carName = document.getElementById('car-name');
    const carPrice = document.getElementById('car-price');

    carImage.src = carDetails.image;
    carYear.textContent = carDetails.year;
    carTransmission.textContent = carDetails.transmission;
    carPotencia.textContent = carDetails.potencia;
    carName.textContent = carDetails.name;
    carPrice.textContent = carDetails.price;


    // Define a opacidade de volta para 1 com uma transição suave
    carDetailsContainer.style.opacity = 1;
}

//fLIP CARD

document.getElementById("flip-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("card-inner").style.transform = "rotateY(180deg)";
});

document.getElementById("unflip-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("card-inner").style.transform = "rotateY(0deg)";
});

// FIM DO FLIP CARD


// FIM JS CARD DE SELECAO DE CARROS








