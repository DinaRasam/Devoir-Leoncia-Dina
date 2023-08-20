<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="./css/index.css">
    <title>Madagasikara | Lisitry ny Faritra</title>
</head>
<body>
    <!-- Contenues de la page -->
    <div class="contenu">
        <!-- Logo -->
        <div class="logo-container">
            <img class="logo-drapeau" src="./img/drapeau.jpg" alt="logo-drapeau-rond">
        </div>
        <div class="logo-container-2">
            <img class="logo-drapeau" src="./img/drapeau.jpg" alt="logo-drapeau-rond">
        </div>
        <div class="titre">
            <span class="titre-span">LISITRY NY FARITRA REHETRA ETO MADAGASIKARA</span>
        </div>
        <div id="bar-recherche">
        <!-- Barre de recherche -->
            <div class="recherche-wrapper">
                <span class="icon">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" id="recherche-input" class="recherche-input" 
                placeholder="Eto raha hitady faritra...">
            </div>
            <!-- Paginations -->
            <div class="pagination">
                <select id="items-par-page">
                    <option value="" disabled>Safidio ny isany lisitra miseho</option>
                    <option value="all">Aseho avokoa ireo lisitra</option>
                    <option value="1012">1012 lisitra isakin'ny pejy</option>
                    <option value="2024">2024 lisitra isakin'ny pejy</option>
                    <option value="4048">4048 lisitra isakin'ny pejy</option>
                    <option value="6096">6096 lisitra isakin'ny pejy</option>
                    <option value="8092">8092 lisitra isakin'ny pejy</option>
                </select>
            </div>
        </div>
        
        <div id="liste-faritra">
           <!-- Données -->
        </div>
        <!-- Liens preview et next -->
        <div id="prev-next">
            <button id="prev-button">Aloha</button>
            <div id="page-links"></div>
            <button id="next-button">Aoriana</button>
        </div>
    </div>

    <!-- <script>
        fetch('read-data.php')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data[1000])
       let faritraItem = document.getElementById("liste-faritra")
      // ito 5 ito soloina data.length fa mbola tsy nampiko ilay js an Leoncia dia nanaovana 
      // teste alou io dia ra mety dia ataovy mitohy ambany eo iany fa aza atao fichier hafa 
      // ilay js anao
      // miatomboka 1 ilay i dia tsy miseo ilat soratra fkt sy tariny anaty ilay ficher
       for (var i = 1; i < 20; i++) {
         for (var j = 5; j < data[i].length; j++) {
                    faritraItem.className = "liste-faritra"; // Ajout de la classe

                    faritraItem.innerHTML += `
                    <div>
                        <strong>N°${data[i][0]}</strong><br>
                        <strong>Fokontany : ${data[i][1]}<br>
                        <strong>Kaomina : ${data[i][2]}<br>
                        <strong>Distrika : ${data[i][3]}<br>
                        <strong>Region : ${data[i][4]}<br>
                        <strong>Province : ${data[i][5]}<br>
                    </div>
                    `;
                    console.log( data[i][j]);
                    
                }
           
            }
})      
</script> -->
    <script src="script.js"></script>
</body>
</html>