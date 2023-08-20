<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/index.css">
    <title>Madagasikara | Lisitry ny Faritra</title>
</head>
<body>
    <div class="contenu">
        <div class="titre">
            <img  style ="Width:200px;heigt:200px;"src="./img/drapeau.jpg"  alt="logo-drapeau-rond">
            <span  class="titre-span">LISITRY NY FARITRA REHETRA ETO MADAGASIKARA</span>
            <img style ="Width:200px;heigt:200px;" src="./img/drapeau.jpg" alt="logo-drapeau-rond">
        </div>

        <div id="bar-recherche">
            <div class="pagination">
                <select id="items-par-page">
                    <option value="all">Aseho avokoa ny lisitra rehetra</option>
                    <option value="10">10 lisitra isakin'ny pejy</option>
                    <option value="25">25 lisitra isakin'ny pejy</option>
                    <option value="50">55 lisitra isakin'ny pejy</option>
                    <option value="75">75 lisitra isakin'ny pejy</option>
                    <option value="100">100 lisitra isakin'ny pejy</option>
                </select>
            </div>
            <!-- icone--><input type="text" id="recherche-input" class="recherche-input" placeholder="Soraty eto ny faritra tianao hotadiavina..."> 
        </div>
    <div id="liste-faritra">
        <!-- PS: Toutes les FARITRA seront affichés ici -->
    </div>
    
    <div id="prev-next">
        <button id="prev-button">Aloha</button>
        <button id="next-button">Aoriana</button>
    </div>
    </div>

    <script>
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
</script>
    <script src="script.js"></script>
</body>
</html>