// var language = true
home()
//document.getElementById("finnish").addEventListener("click", setFI);
//document.getElementById("english").addEventListener("click", setEN);
//Kielen asettaminen - true false -tarkista muuttujan näkyvyys
// function setFI() {
//     location.reload()
//     // alert(language)
//     home()
//}
// function setEN() {
//     language = false
//     // alert(language)
//     home()
    
// }

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

function home() {
    console.log(language)
    if (language===true) {
        document.getElementById("nav").innerHTML = 
        `<button onclick="home()">Etusivu</button> 
        <button onclick="getInfo()">Tietoa meistä us</button>
        <button onclick="getStaff()">Osaajamme</button>
        <button onclick="getContact()">Yhteystiedot</button>
        <button onclick="changeLanguage("fi")">FI</button>
        <button onclick="changeLanguage("en")">EN</button>`
        document.getElementById("main").innerHTML = `
        <h2>Tervetuloa Haagan Vihervaraston sivuille!</h2>
        <img src="./kuvat/pexels-designecologist-1005058.jpg" alt="Photo by Designecologist, Pexels" title="Photo by Designecologist, Pexels">
        <img src="./kuvat/pexels-julia-kuzenkov-1974508.jpg" alt="Photo by Julia Kuzenkov, Pexels" title="Photo by Julia Kuzenkov, Pexels">
        <img src="./kuvat/pexels-sohail-nachiti-807598.jpg" alt="Photo by sohail nachiti, Pexels" title="Photo by sohail nachiti, Pexels">`
    }
    else {
        document.getElementById("nav").innerHTML = 
        `<button onclick="home()">Home</button>
        <button onclick="getInfo()">About us</button>
        <button onclick="getStaff()">Our experts</button>
        <button onclick="getContact()">Contact</button>
        <button onclick="changeLanguage("fi")">FI</button>
        <button onclick="changeLanguage("en")">EN</button>`
        document.getElementById("main").innerHTML = `
        <h2>Welcome to Haaga Vihervarasto Homepage!</h2>
        <img src="./kuvat/pexels-designecologist-1005058.jpg" alt="Valokuvaaja: Designecologist Pexelsistä: 
        https://www.pexels.com/fi-fi/kuva/rentoutuminen-poyta-luksus-lehdet-1005058/">
        <img src="./kuvat/pexels-julia-kuzenkov-1974508.jpg" alt="Valokuvaaja: Julia Kuzenkov Pexelsistä: 
        https://www.pexels.com/fi-fi/kuva/puutarha-tehdas-kattila-kukkaruukku-1974508/">
        <img src="./kuvat/pexels-sohail-nachiti-807598.jpg" alt="Valokuvaaja: sohail nachiti Pexelsistä: 
        https://www.pexels.com/fi-fi/kuva/luonto-vesi-tekstuuri-lehdet-807598/">`
    }
}

function getInfo() {
    if (language===true) {
    document.getElementById("main").innerHTML = `
    <h3>Tietoa meistä</h3>
    <p>Olemme vihersuunnittelun edelläkävijä ja viherkasviharrastajien ykkösverkkokauppa. 
        Meiltä saat ammattitaitoisen joukon suunnittelemaan yrityksellesi vihreän työympäristön, 
        yksilön tarpeet huomioiden. <br>
        Sinä innokas viherkasviharrastaja:<br>
        Kokeile virtuaalista suunnitteluohjelmaamme! Ohjelmamme avulla saat ideoita viherkasvien 
        sijoitteluun asunnossasi (tulossa pian!).
    </p>`
    }
    else {
    document.getElementById("main").innerHTML = 
    `<h3>About us</h3>
    <p>We are frontrunners in greening indoor spaces and have the best online shop for house plant hobbyists! <br>
    We green-design your company premises taking individual wishes to consideration. <br>
    For house plant enthusiasts: 
    try our virtual indoor green-designing tool (Coming soon!)
    </p>`
    }
}

function getStaff() {
    if (language===true) {
        document.getElementById("main").innerHTML = "<h4>Ladataan</h4>"

        var x = `<table>
                    <thead>
                        <th id=1>Nimi</th>
                        <th id=2>Puhelin</th>
                        <th id=3>Osoite</th>
                        <th id=4>Email</th>
                    </thead>
                    <tbody>`
    }
    else {
        document.getElementById("main").innerHTML = "<h4>Loading</h4>"

        var x = `<table>
                    <thead>
                        <th id=1>Name</th>
                        <th id=2>Telephone</th>
                        <th id=3>Address</th>
                        <th id=4>email</th>
                    </thead>
                    <tbody>`

    }

    fetch('http://localhost:3100/api/staff') // tehdään http get pyyntö
    .then(res => res.json()) // palvelimen vastaus muutetaan javascript muotoon
    .then(oliot => oliot.map(staff => { // loopataan läpi oliot
    x += `<tr><td>${staff.name}</td><td>${staff.phone}</td>
    <td>${staff.address}</td><td>${staff.email}</td></tr>`
    }
    ))

    setTimeout(() => {
        x += `</tbody></table>`
        document.getElementById("main").innerHTML = x}
        , 500 )
    
}
function getContact() {
    if (language===true) {
    document.getElementById("main").innerHTML = `
        <div>
            <h2>Yhteystiedot</h2>
            <p>Haagan Vihervarasto<br />
                Kuparikuja 2<br />
                00440<br />
                Helsinki<br />
                Suomi</p>
            <p>Avoinna sopimuksen mukaan.</p>
        </div>
    `
    }
    else
    document.getElementById("main").innerHTML = `
        <div>
            <h2>Contact</h2>
            <p>Haagan Vihervarasto<br />
                Kuparikuja 2<br />
                00440<br />
                Helsinki<br />
                Finland</p>
            <p>Feel free to contact us to set an appointment!</p>
        </div>
    `
}
