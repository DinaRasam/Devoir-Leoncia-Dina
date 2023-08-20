console.log("poinsa");


// const faritraList = [
//     // Listes Faritra en Json ici
//     { N: "1", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "2", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "3", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "4", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "5", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "6", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "7", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "9", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "10", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},

//     { N: "1", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "2", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "3", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "4", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "5", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "6", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "7", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "9", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "10", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},

//     { N: "1", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "2", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "3", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "4", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "5", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "6", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "7", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "9", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "10", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},

//     { N: "1", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "2", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "3", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "4", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "5", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "6", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "7", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "9", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "10", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},

//     { N: "1", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "2", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "3", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "4", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "5", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "6", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "7", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "9", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "10", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},

//     { N: "1", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "2", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "3", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "4", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "5", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "6", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "7", fokontany: "Ampasina", kaomina: "Andina", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "9", fokontany: "Amboloando", kaomina: "Andiolava", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
//     { N: "10", fokontany: "Antanifotsy", kaomina: "Ambositra", distrika: "Ambositra", region: "Amoron'i Mania", province: "Fianarantsoa"},
  
// ];

const rechercheInput = document.getElementById("recherche-input");
const listeFaritraContenues = document.getElementById("liste-faritra");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const itemsParPageSelect = document.getElementById("items-par-page");
let currentPage = 1;
let elementsParPage = parseInt(itemsParPageSelect.value);
console.log("poinsa");
function displayFaritra(faritras) {
    listeFaritraContenues.innerHTML = "";

    const startIndex = (currentPage - 1) * elementsParPage;
    const endIndex = startIndex + elementsParPage;
    const faritrasToDisplay = faritras.slice(startIndex, endIndex);

    faritrasToDisplay.forEach(faritra => {
        const faritraItem = document.createElement("li");
        faritraItem.innerHTML = `
            <strong>${faritra.N}</strong> - ${faritra.fokontany} - ${faritra.kaomina}- ${faritra.distrika}- ${faritra.region}- ${faritra.province}
        `;
        listeFaritraContenues.appendChild(faritraItem);
    });
}

function performRecherche(query) {
    const filteredFaritras = faritraList.filter(faritra => {
        return (faritra.fokontany.toLowerCase().includes(query.toLowerCase()) ||
                faritra.kaomina.toLowerCase().includes(query.toLowerCase()) ||
                faritra.distrika.toLowerCase().includes(query.toLowerCase()) ||
                faritra.region.toLowerCase().includes(query.toLowerCase()) ||
                faritra.province.toLowerCase().includes(query.toLowerCase()) );
    });

    displayFaritra(filteredFaritras);
    updatePagination(filteredFaritras.length);
}

function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / elementsParPage);

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            performRecherche(rechercheInput.value);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            performRecherche(rechercheInput.value);
        }
    });
}

itemsParPageSelect.addEventListener("change", function () {
    const selectedValue = itemsParPageSelect.value;
    if (selectedValue === "all") {
        elementsParPage = faritraList.length;
        currentPage = 1; 
        performRecherche(rechercheInput.value);
    } else {
        elementsParPage = parseInt(selectedValue);
        currentPage = 1;  
        performRecherche(rechercheInput.value);
    }
});

rechercheInput.addEventListener("input", function () {
    const query = rechercheInput.value;
    performSearch(query);
});

// performSearch(""); // Afficher tous les faritra au chargement initial

// JE COMMENTERAI PETIT A PETIT ICI