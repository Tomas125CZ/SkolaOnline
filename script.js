function openWebsite(website = "", samePage = true) {
    if(!samePage) window.open(website);
    else window.open(website, "_self");
}

function curDate() {
    var date = document.getElementsByClassName("dateCA")[0].value;
    date = date.split("-")[2] + "." + date.split("-")[1] + "." + date.split("-")[0];
    console.log(date);
}

function createStartStudents() {
    createID("Jakub" , "Hloušek", "x", false);
    createID("Stanislav" , "Cinkl", "x", false);
    createID("Pavel" , "Vuong", "x", false);
    createID("Honza" , "Bobenič", "x", false);
    createID("Tomáš" , "Pýcha", "x", false);
    createID("Tomáš" , "Najman", "x", false);
    createID("Ondřej" , "Tomšíček", "x", false);
    createID("Roman" , "Brdlík", "x", false);
    createID("Adam" , "Hlaváček", "x", false);
    createID("Lukáš" , "Pavlíček", "x", false);
    createID("Tomáš" , "Urban", "x", false);
    createID("Ján" , "Vícena", "x", false);
    createID("Stanislav" , "Tesař", "x", false);
    createID("Honza" , "Šípek", "x", false);
    createID("Tobiáš" , "Vaněk", "x", false);
    createID("Honza" , "Toman", "x", false);
    createID("Tadeáš" , "Keller", "x", false);
    createID("Matěj" , "Šilhán", "x", false);
    createID("Štěpán" , "Matějka", "x", false);
    createID("Tomáš" , "Lipavský", "x", false);
    createID("Matěj" , "Konšel", "x", false);
    openWebsite("admin.html");
}

function createStartHours() {
    createHourWithArgs("Dějepis", "1.Ai", "Martina Koštejnová", "053", "Po", "1");
    createHourWithArgs("Anglický Jazyk", "1.Ai", "Jitka Kratochvílová", "028", "Po", "2");
    createHourWithArgs("Český jazyk a literatura", "1.Ai", "Věra Svárovská", "053", "Po", "3");
    createHourWithArgs("Matematika", "1.Ai", "Iva Lišková", "053", "Po", "4");
    createHourWithArgs("Psaní na klávesnici PC", "1.Ai", "Eva Štěpánková", "068", "Po", "5");

    createHourWithArgs("Hardware", "1.Ai", "Pavel Esch", "053", "Ut", "1");
    createHourWithArgs("Anglický Jazyk", "1.Ai", "Jitka Kratochvílová", "028", "Ut", "2");
    createHourWithArgs("Elektrotechnika", "1.Ai", "Luboš Svárovský", "053", "Ut", "3");
    createHourWithArgs("Český jazyk a literatura", "1.Ai", "Věra Svárovská", "053", "Ut", "4");
    createHourWithArgs("Praxe", "1.Ai", "Jan Urban", "063", "Ut", "5");
    createHourWithArgs("Praxe", "1.Ai", "Jan Urban", "063", "Ut", "6");
    createHourWithArgs("Tělesná výchova", "1.Ai", "Gabriela Zakonovová", "TEL", "Ut", "8");

    createHourWithArgs("Základy společenských věd", "1.Ai", "Věra Svárovská", "053", "St", "1");
    createHourWithArgs("Český jazyk a literatura", "1.Ai", "Věra Svárovská", "053", "St", "2");
    createHourWithArgs("Matematika", "1.Ai", "Iva Lišková", "053", "St", "3");
    createHourWithArgs("Fyzika", "1.Ai", "Stanislava Militká", "053", "St", "4");
    createHourWithArgs("Tělesná výchova", "1.Ai", "Gabriela Zakonovová", "TEL1", "St", "5");
    createHourWithArgs("Chemie", "1.Ai", "Ladislava Kyzlíková", "053", "St", "6");

    createHourWithArgs("Fyzika", "1.Ai", "Stanislava Militká", "053", "Ct", "1");
    createHourWithArgs("Elektrotechnika", "1.Ai", "Luboš Svárovský", "053", "Ct", "2");
    createHourWithArgs("Rétorika", "1.Ai", "Ludmila Růžičková", "097", "Ct", "3");
    createHourWithArgs("Tvorba webových stránek", "1.Ai", "Václav Bohata", "070", "Ct", "4");
    createHourWithArgs("Tvorba webových stránek", "1.Ai", "Václav Bohata", "070", "Ct", "5");
    createHourWithArgs("Psaní na klávesnici PC", "1.Ai", "Eva Štěpánková", "070", "Ct", "6");
    createHourWithArgs("Matematika", "1.Ai", "Iva Lišková", "053", "Ct", "8");

    createHourWithArgs("Informační a komunikační technologie", "1.Ai", "Martin Štěpán", "111", "Pa", "1");
    createHourWithArgs("Informační a komunikační technologie", "1.Ai", "Martin Štěpán", "111", "Pa", "2");
    createHourWithArgs("Anglický Jazyk", "1.Ai", "Jitka Kratochvílová", "028", "Pa", "3");
    createHourWithArgs("Chemie", "1.Ai", "Ladislava Kyzlíková", "053", "Pa", "4");
    createHourWithArgs("Matematika", "1.Ai", "Iva Lišková", "053", "Pa", "5");
    createHourWithArgs("Dějepis", "1.Ai", "Martina Koštejnová", "054", "Pa", "6");
    openWebsite("admin.html");
}

function createAcc() {
    var name = document.getElementsByClassName("nameCA")[0].value;
    var prijmeni = document.getElementsByClassName("prijmeniCA")[0].value;
    var date = document.getElementsByClassName("dateCA")[0].value;
    if(name == "") {
        shake("nameCA", 0);
        console.log("NO NAME");
        return;
    }
    if(prijmeni == "") {
        shake("prijmeniCA", 0);
        console.log("NO PRIJMENI");
        return;
    }
    if(date == "") {
        shake("dateCA", 0);
        console.log("NO DATE");
        return;
    }
    date = date.split("-")[2] + "." + date.split("-")[1] + "." + date.split("-")[0];
    createID(name, prijmeni, date);
}

function login() {
    if(document.getElementsByClassName("username")[0].value == "") {
        shake("username", 0);
        console.log("NO USERNAME");
        return;
    }
    if(document.getElementsByClassName("password")[0].value == "") {
        shake("password", 0);
        console.log("NO PASSWORD");
        return;
    }
    if(document.getElementsByClassName("username")[0].value == "admin") {
        if(document.getElementsByClassName("password")[0].value == "uaw74uvtaad74") {
            openWebsite("admin.html");
        }
        return;
    }
    var index = getIndexInFile("usernames", document.getElementsByClassName("username")[0].value);
    if(document.getElementsByClassName("password")[0].value != getFromFileByIndex("passwords", index)) {
        shake("username", 0);
        shake("password", 0);
        console.log("USER NOT FOUND");
        return;
    }
    clearFile("logedUsername");
    saveToFile("logedUsername", document.getElementsByClassName("username")[0].value);
    openWebsite("mainpage.html");
}

function register() {
    if(document.getElementsByClassName("id")[0].value == "") {
        shake("id", 0);
        console.log("NO ID");
        return;
    }
    if(document.getElementsByClassName("username")[0].value == "") {
        shake("username", 0);
        console.log("NO USERNAME");
        return;
    }
    if(document.getElementsByClassName("password")[0].value == "") {
        shake("password", 0);
        console.log("NO PASSWORD");
        return;
    }
    if(document.getElementsByClassName("password")[1].value == "") {
        shake("password", 1);
        console.log("NO PASSWORD 2");
        return;
    }
    if(!containsFile("ids", document.getElementsByClassName("id")[0].value)) {
        shake("id", 0);
        shake("username", 0);
        shake("password", 0);
        shake("password", 1);
        console.log("ID NOT FOUND");
        return;
    }
    if(!(document.getElementsByClassName("password")[0].value == document.getElementsByClassName("password")[1].value)) {
        shake("password", 0);
        shake("password", 1);
        console.log("p1 != p2");
        return;
    }
    if(containsFile("usernames", document.getElementsByClassName("username")[0].value)) {
        console.log(document.getElementsByClassName("username")[0].value);
        shake("username", 0);
        console.log("USERNAME ALREADY EXISTS");
        return;
    }
    var index = getIndexInFile("ids", document.getElementsByClassName("id")[0].value);
    if(getFromFileByIndex("registered", index) == "true") {
        console.log("ID ALREADY REGISTERED");
        return;
    }
    saveToFile("usernames", document.getElementsByClassName("username")[0].value);
    saveToFile("passwords", document.getElementsByClassName("password")[0].value);
    setInFileByIndex("registered", "true", index);
    saveToFile("userJmena", getFromFileByIndex("jmena", index));
    saveToFile("userPrijmeni", getFromFileByIndex("prijmeni", index));
    saveToFile("userDatumyNarozeni", getFromFileByIndex("datumynarozeni", index));
    saveToFile("registeredID", getFromFileByIndex("ids", index));
    openWebsite("index.html");
}

function setInFileByIndex(fileName = "", content = "", index = 0) {
    var contentFromFile = getFromFile(fileName);
    clearFile(fileName);
    for(var i = 0; i < contentFromFile.split("#%*").length; i++) {
        console.log("SAVING: " + contentFromFile.split("#%*")[i]);
        if(i == index) {
            saveToFile(fileName, content);
        }
        else if (contentFromFile.split("#%*")[i].replace("#%*", "").trim() != "" || fileName == "latka") {
            saveToFile(fileName, contentFromFile.split("#%*")[i]);
        }
    }
}

function loadList() {
    loadNames();
    loadPrijmeni();
    loadIds();
    loadRegistered();
    loadTridy();
    loadRestarts();
    loadStudents();
    loadRemoves();

    loadTridy2();
    loadZaci();
    loadUcitel();
    loadPredmety();
    loadRemoves2();

    loadHodinaH();
    loadTridaH();
    loadUcitelH();
    loadCasH();
    loadOdstranitH();
}

function loadHodinaH() {
    var hodina = '<div class = "LTop">Hodina</div>'
    for(var i = 0; i < getSizeOfFile("hodina"); i++) {
        hodina += '<div>' + getFromFileByIndex("hodina", i) + '</div>';
    }
    document.getElementsByClassName("HHL")[0].innerHTML = hodina;
}

function loadTridaH() {
    var trida = '<div class = "LTop">Třída</div>'
    for(var i = 0; i < getSizeOfFile("hodina"); i++) {
        trida += '<div>' + getFromFileByIndex("tridaH", i) + '</div>';
    }
    document.getElementsByClassName("THL")[0].innerHTML = trida;
}

function loadUcitelH() {
    var ucitel = '<div class = "LTop">Učitel</div>'
    for(var i = 0; i < getSizeOfFile("hodina"); i++) {
        ucitel += '<div>' + getFromFileByIndex("ucitelH", i) + '</div>';
    }
    document.getElementsByClassName("UHL")[0].innerHTML = ucitel;
}

function loadCasH() {
    var cas = '<div class = "LTop">Čas</div>'
    for(var i = 0; i < getSizeOfFile("hodina"); i++) {
        cas += '<div>' + getFromFileByIndex("cas", i) + '. hodina</div>';
    }
    document.getElementsByClassName("CHL")[0].innerHTML = cas;
}


function loadOdstranitH() {
    var odstranit = '<div class = "LTop">Odstranit</div>'
    for(var i = 0; i < getSizeOfFile("hodina"); i++) {
        odstranit += '<div onclick="removeHour(' + i + ')">X</div>';
    }
    document.getElementsByClassName("RHL")[0].innerHTML = odstranit;
}

function loadUcitel() {
    var ucitele = '<div class = "LTop">Třídní učitel</div>';
    for(var i = 0; i < getSizeOfFile("tridy"); i++) {
        ucitele += '<div onclick="changeUcitel(' + i + ')">' + getFromFileByIndex("ucitel", i) + '</div>';
    }
    document.getElementsByClassName("UL")[0].innerHTML = ucitele;
}

function loadTridy2() {
    var tridy = '<div class = "LTop">Třída</div>';
    for(var i = 0; i < getSizeOfFile("tridy"); i++) {
        tridy += '<div>' + getFromFileByIndex("tridy", i) + '</div>';
    }
    document.getElementsByClassName("TL")[0].innerHTML = tridy;
}

function loadRemoves2() {
    var removes = '<div class = "LTop">Odstranit</div>';
    for(var i = 0; i < getSizeOfFile("tridy"); i++) {
        removes += '<div onclick="removeTrida(' + i + ')">X</div>';
    }
    document.getElementsByClassName("RL")[0].innerHTML = removes;
}

function loadZaci() {
    var zaci = '<div class = "LTop">Počet žáků</div>';
    for(var i = 0; i < getSizeOfFile("tridy"); i++) {
        var total = 0;
        for(var x = 0; x < getSizeOfFile("jmena"); x++) {
            if(getFromFileByIndex("trida", x) == getFromFileByIndex("tridy", i)) {
                if(getFromFileByIndex("student", x) == "Student") total++;
            }
        }
        zaci += '<div>' + total + '</div>';
    }
    document.getElementsByClassName("PZL")[0].innerHTML = zaci;
}

function loadStudents() {
    var student = '<div class = "LTop">Učitel/Student</div>';
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        student += '<div onclick="changeStudent(' + i + ')">' + getFromFileByIndex("student", i) + '</div>';
    }
    document.getElementsByClassName("studentL")[0].innerHTML = student;
}

function loadPredmety() {
    var predmety = '<div class = "LTop">Předměty</div>';
    for(var i = 0; i < getSizeOfFile("tridy"); i++) {
        var predmety2 = "";
        for(var x = 0; x < getSizeOfFile("hodina"); x++) {
            if(getFromFileByIndex("tridaH", x) == getFromFileByIndex("tridy", i)) {
                var hodina = getFromFileByIndex("hodina", x);
                var firstLetters = "";
                for(var y = 0; y < hodina.split(" ").length; y++) {
                    firstLetters += hodina.split(" ")[y].trim().split("")[0].toUpperCase();
                }
                if(!predmety2.includes(firstLetters + ", ")) {
                    predmety2 += firstLetters + ", ";
                }
            }
        }
        if(predmety2.trim() == "") {
            predmety += '<div>Žádné zadané předměty</div>'
        }
        else {
            predmety += '<div>' + predmety2.substring(0, predmety2.split("").length - 2) + '</div>';
        }
    }
    document.getElementsByClassName("PL")[0].innerHTML = predmety;
}

function loadRemoves() {
    var removes = '<div class = "LTop">Odstranit</div>';
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        removes += '<div onclick="removeUser(' + i + ')">X</div>';
    }
    document.getElementsByClassName("removeL")[0].innerHTML = removes;
}

function loadTridy() {
    var tridy = '<div class = "LTop">Třída</div>';
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        tridy += '<div onclick="changeTrida(' + i + ')">' + getFromFileByIndex("trida", i) + '</div>';
    }
    document.getElementsByClassName("tridaL")[0].innerHTML = tridy;
}

function loadRestarts() {
    var restarts = '<div class = "LTop">Restartovat</div>';
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        restarts += '<div onclick="restart(' + i + ')">-</div>';
    }
    document.getElementsByClassName("resetL")[0].innerHTML = restarts;
}


function changeTrida(id = 0) {
    var max = getSizeOfFile("tridy");
    if(max > 0) {
        if(containsFile("tridy", getFromFileByIndex("trida", id))) {
            var current = getIndexInFile("tridy", getFromFileByIndex("trida", id));
            var before = current;
            current++;
            if(current >= max) {
                current = 0;
            }
            if(before != current) {
                setInFileByIndex("trida", getFromFileByIndex("tridy", current), id);
                openWebsite("admin.html");
            }
        }
        else {
            setInFileByIndex("trida", getFromFileByIndex("tridy", 0), id);
            openWebsite("admin.html");
        }
    }
}

function changeStudent(id = 0) {
    if(getFromFileByIndex("student", id) == "Student") {
        setInFileByIndex("student", "Učitel", id);
    }
    else {
        var teachers = 0;
        for(var i = 0; i < getSizeOfFile("jmena"); i++) {
            if(getFromFileByIndex("student", i) == "Učitel") teachers++;
        }
        if(teachers > getSizeOfFile("tridy")) {
            var x = 0;
            var tridaID = getIndexInFile("ucitel", getFromFileByIndex(getFromFileByIndex("prijmeni", id) + " " + getFromFileByIndex("jmena", id))) - 1;
            if(containsFile("ucitel",  getFromFileByIndex("prijmeni", id) + " " + getFromFileByIndex("jmena", id))) {
                for(var i = 0; i < getSizeOfFile("jmena"); i++) {
                    console.log(getFromFileByIndex("jmena", i));
                    if(getFromFileByIndex("student", i) == "Učitel") {
                        console.log("učitel");
                        if(!containsFile("ucitel", getFromFileByIndex("prijmeni", i) + " " + getFromFileByIndex("jmena", i))) {
                            console.log("TWETW" + tridaID);
                            setInFileByIndex("ucitel", getFromFileByIndex("prijmeni", i) + " " + getFromFileByIndex("jmena", i), tridaID);
                            break;
                        }
                        else {
                            console.log("CANT")
                        }
                        console.log("Učitel: " + getFromFileByIndex("ucitel", x));
                        x++;
                    }
                    else {
                        console.log("NO UČITEL");
                    }
                }
            }
            setInFileByIndex("student", "Student", id);
        }
        else {
            console.log("Nedostatek učitelů!");
        }
    }
    openWebsite("admin.html");
}

function changeUcitel(id = 0) {
    var max = 0;
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        if(getFromFileByIndex("student", i) == "Učitel") max++;
    }
    if(max > 1) {
        var current = 0;
        for(var i = 0; i < getSizeOfFile("jmena"); i++) {
            if(getFromFileByIndex("student", i) == "Učitel") {
                if(getFromFileByIndex("prijmeni", i) + " " + getFromFileByIndex("jmena", i) == getFromFileByIndex("ucitel", id)) {
                    break;
                }
                current++;
            }
        }
        if(current + 1 >= max) {
            current = 0;
        }
        else {
            current++;
        }
        console.log(current + " " + max)
        var wantedUcitel = "";
        var curLoop = 0;
        for(var i = 0; i < getSizeOfFile("jmena"); i++) {
            if(getFromFileByIndex("student", i) == "Učitel") {
                if(curLoop == current) {
                    wantedUcitel = getFromFileByIndex("prijmeni", i) + " " + getFromFileByIndex("jmena", i);
                }
                curLoop++;
            }
        }
        console.log(wantedUcitel)
        setInFileByIndex("ucitel", wantedUcitel, id);
        openWebsite("admin.html");
    }
}

function restart(id = 0) {
    clearFile("savedznamky");
    saveToFile("savedznamky", getFromFile("znamky"));
    console.log(getFromFile("savedznamky"));
    console.log(getSizeOfFile("znamky"));
    var totalRemoved = 0;
    for(var x = 0; x < getSizeOfFile("savedznamky") - 1; x++) {
        console.log("ZNAMKA: " + getFromFileByIndex("savedznamky", x));
        var jmeno = getFromFileByIndex("savedznamky", x).split("*")[1].split("-")[0];
        var prijmeni = getFromFileByIndex("savedznamky", x).split("-")[1].split("/")[0];
        if(getFromFileByIndex("jmena", id) == jmeno) {
            if(getFromFileByIndex("prijmeni", id) == prijmeni) {
                removeFromFile("znamky", x - totalRemoved);
                totalRemoved++;
            }
        }
    }
}

function loadRegistered() {
    var registered = '<div class = "LTop">Registrace</div>';
    for(var i = 0; i < getSizeOfFile("registered"); i++) {
        registered += '<div>' + getFromFileByIndex("registered", i).replace("true", "Zaregistrován").replace("false", "Nezaregistrován") + '</div>';
    }
    document.getElementsByClassName("registeredL")[0].innerHTML = registered;
}

function loadNames() {
    var names = '<div class = "LTop">Jméno</div>';
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        names += '<div>' + getFromFileByIndex("jmena", i) + '</div>';
    }
    document.getElementsByClassName("namesL")[0].innerHTML = names;
}

function loadPrijmeni() {
    var prijmeni = '<div class = "LTop">Příjmení</div>';
    for(var i = 0; i < getSizeOfFile("prijmeni"); i++) {
        prijmeni += '<div>' + getFromFileByIndex("prijmeni", i) + '</div>';
    }
    document.getElementsByClassName("prijmeniL")[0].innerHTML = prijmeni;
}

function loadIds() {
    var ids = '<div class = "LTop">ID</div>';
    for(var i = 0; i < getSizeOfFile("ids"); i++) {
        ids += '<div>' + getFromFileByIndex("ids", i) + '</div>';
    }
    document.getElementsByClassName("idsL")[0].innerHTML = ids;
}

function clearAllFiles() {
    clearFile("usernames");
    clearFile("jmena");
    clearFile("prijmeni");
    clearFile("datumynarozeni");
    clearFile("ids");
    clearFile("registered");
    clearFile("trida");
    clearFile("passwords");
    clearFile("userJmena");
    clearFile("userPrijmeni");
    clearFile("userDatumyNarozeni");
    clearFile("tridy");
    clearFile("student");
    clearFile("ucitel");
    clearFile("registeredID");
    clearFile("hodina");
    clearFile("tridaH");
    clearFile("ucitelH");
    clearFile("denH");
    clearFile("cas");
    clearFile("ucebna");
    clearFile("latka");
    clearFile("znamky");
}

function createTrida() {
    var trida = document.getElementsByClassName("tridaCT")[0].value;
    if(trida == "") {
        shake("tridaCT", 0);
        console.log("NO CLASS");
        return;
    }
    var max = 0;
    for(var i = 0; i < getSizeOfFile("jmena"); i++) {
        if(getFromFileByIndex("student", i) == "Učitel") max++;
    }
    if(max > 0) {
        var wantedUcitel = "";
        var curLoop = 0;
        for(var i = 0; i < getSizeOfFile("jmena"); i++) {
            if(getFromFileByIndex("student", i) == "Učitel") {
                if(curLoop == 0) {
                    wantedUcitel = getFromFileByIndex("prijmeni", i) + " " + getFromFileByIndex("jmena", i);
                }
                curLoop++;
            }
        }
        saveToFile("tridy", trida);
        saveToFile("ucitel", wantedUcitel);
        openWebsite("admin.html");
    }
    else {
        shake("submitTrida", 0);
        console.log("NO TEACHER");
    }
}

function createHourWithArgs(hodina = "", trida = "", ucitel = "", ucebna = "", den = "", cas = "") {
    var symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    var id = "";
    var random = Math.floor(Math.random()*5)+10;
    for(var i = 0; i < random; i++) {
        id += symbols.split("")[Math.floor(Math.random()*symbols.split("").length)];
    }
    if(hodina.trim() == "") {
        console.log("NO HOUR!");
        return;
    }
    if(trida.trim() == "") {
        console.log("NO TRIDA!");
        return;
    }
    if(ucitel.trim() == "") {
        console.log("NO UCITEL!");
        return;
    }
    if(ucebna.trim() == "") {
        console.log("NO UCEBNA!");
        return;
    }
    saveToFile("hodina", hodina);
    saveToFile("tridaH", trida);
    saveToFile("ucitelH", ucitel);
    saveToFile("denH", den);
    saveToFile("cas", cas);
    saveToFile("ucebna", ucebna);
    saveToFile("latka", " ");
}

function createHour() {
    var hodina = document.getElementsByClassName("hodinaCH")[0].value;
    var trida = document.getElementsByClassName("tridaCH")[0].value;
    var ucitel = document.getElementsByClassName("ucitelCH")[0].value;
    var ucebna = document.getElementsByClassName("ucebnaCH")[0].value;
    var den = document.getElementsByClassName("denCH")[0].value;
    var cas = document.getElementsByClassName("casCH")[0].value;
    var symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    var id = "";
    var random = Math.floor(Math.random()*5)+10;
    for(var i = 0; i < random; i++) {
        id += symbols.split("")[Math.floor(Math.random()*symbols.split("").length)];
    }
    if(hodina.trim() == "") {
        shake("hodinaCH", 0);
        console.log("NO HOUR!");
        return;
    }
    if(trida.trim() == "") {
        shake("tridaCH", 0);
        console.log("NO TRIDA!");
        return;
    }
    if(ucitel.trim() == "") {
        shake("ucitelCH", 0);
        console.log("NO UCITEL!");
        return;
    }
    if(ucebna.trim() == "") {
        shake("ucebnaCH", 0);
        console.log("NO UCEBNA!");
        return;
    }
    if(den.trim() == "") {
        shake("denCH", 0);
        console.log("NO DEN!");
        return;
    }
    if(cas.trim() == "") {
        shake("casCH", 0);
        console.log("NO CAS!");
        return;
    }
    saveToFile("hodina", hodina);
    saveToFile("tridaH", trida);
    saveToFile("ucitelH", ucitel);
    saveToFile("denH", den);
    saveToFile("cas", cas);
    saveToFile("ucebna", ucebna);
    saveToFile("latka", " ");
    openWebsite("admin.html");
}

function saveToFile(fileName = "", add = "") {
    var fromFile = getFromFile(fileName);
    fromFile += add + "#%*";
    localStorage.setItem(fileName, fromFile);
}

function getFromFile(fileName = "") {
    if(localStorage.getItem(fileName) == null) return "";
    return localStorage.getItem(fileName);
}

function clearFile(fileName = "") {
    localStorage.setItem(fileName, "");
}

function getIndexInFile(fileName = "", searched = "") {
    var content = getFromFile(fileName);
    for(var i = 0; i < content.split("#%*").length; i++) {
        if(searched == content.split("#%*")[i]) return i;
    }
    return -1;
}

function setFile(fileName = "", content = "") {
    localStorage.setItem(fileName, content);
}

function getSizeOfFile(fileName = "") {
    var content = getFromFile(fileName);
    return content.split("#%*").length - 1;
}

function getFromFileByIndex(fileName = "", index = 0) {
    var content = getFromFile(fileName);
    for(var i = 0; i < content.split("#%*").length; i++) {
        if(i == index) {
            return content.split("#%*")[i];
        }
    }
    return "";
}

function removeFromFile(fileName = "", index = 0) {
    var content = getFromFile(fileName);
    var replaced = "";
    for(var i = 0; i < content.split("#%*").length; i++) {
        if(i == index) {
            replaced = content.split("#%*")[i] + "#%*";
        }
    }
    content = content.replace(replaced, "");
    setFile(fileName, content);
}

function containsFile(fileName = "", searched = "") {
    var content = getFromFile(fileName);
    return content.includes(searched + "#%*");
}

function removeUser(id = 0) {
    if(getFromFileByIndex("registered", id)) {
        console.log("REGISTERED");
        var idS = getFromFileByIndex("ids", id);
        var found = -1;
        for(var i = 0; i < getSizeOfFile("registeredID"); i++) {
            if(idS == getFromFileByIndex("registeredID", i)) {
                found = i;
            }
        }
        console.log("FOUND: " + found)
        if(found != -1) {
            removeFromFile("usernames", found);
            removeFromFile("passwords", found);
            removeFromFile("registeredID", found);
            removeFromFile("userJmena", found);
            removeFromFile("userPrijmeni", found);
            removeFromFile("userDatumyNarozeni", found);
        }
    }
    removeFromFile("jmena", id);
    removeFromFile("prijmeni", id);
    removeFromFile("datumynarozeni", id);
    removeFromFile("ids", id);
    removeFromFile("registered", id);
    removeFromFile("trida", id);
    removeFromFile("student", id);
    openWebsite("admin.html");
}

function removeHour(index = 0) {
    removeFromFile("hodina", index);
    removeFromFile("cas", index);
    removeFromFile("tridaH", index);
    removeFromFile("ucitelH", index);
    removeFromFile("ucebna", index);
    removeFromFile("denH", index);
    removeFromFile("latka", index);
    openWebsite("admin.html");
}

function removeTrida(id = 0) {
    if(getSizeOfFile("tridy") < 2) {
        shake("RL", 0);
        console.log("NOT ENOUGHT CLASSES!");
        return;
    }
    var setTrida = "";
    if(id == 0) {
        setTrida = getFromFileByIndex("tridy", 1);
    }
    else {
        setTrida = getFromFileByIndex("tridy", 0);
    }
    for(var x = 0; x < getSizeOfFile("jmena"); x++) {
        if(getIndexInFile("tridy", getFromFileByIndex("trida", x)) == id) {
            setInFileByIndex("trida", setTrida, x);
        }
    }
    removeFromFile("tridy", id);
    removeFromFile("ucitel", id);
    openWebsite("admin.html");
} 

function createID(jmeno = "", prijmeni = "", datumNarozeni = "", reset = true) {
    var trida = "";
    if(getSizeOfFile("tridy") == 0) {
        console.log("No class found!");
        trida = "NEZADÁNA";
    }
    else {
        trida = getFromFileByIndex("tridy", 0);
    }
    symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    id = "";
    var random = Math.floor(Math.random()*5)+10;
    for(var i = 0; i < random; i++) {
        id += symbols.split("")[Math.floor(Math.random()*symbols.split("").length)];
    }
    saveToFile("jmena", jmeno);
    saveToFile("prijmeni", prijmeni);
    saveToFile("datumynarozeni", datumNarozeni);
    saveToFile("ids", id);
    saveToFile("registered", "false")
    saveToFile("trida", trida);
    saveToFile("student", "Student");
    console.log("Jméno: " + jmeno);
    console.log("Příjmení: " + prijmeni);
    console.log("Datum narození: " + datumNarozeni);
    console.log("ID: " + id);
    if(document.getElementsByClassName("list")[0] != null) {
        if(reset) openWebsite("admin.html");
    }
}

document.addEventListener("keydown", (e) => {
    if(document.getElementsByClassName("id")[0] != null) {
        if(e.keyCode == 13) {
            var focused = document.activeElement;
            if(focused == document.getElementsByClassName("id")[0]) {
                document.getElementsByClassName("username")[0].focus();
            }
            else if(focused == document.getElementsByClassName("username")[0]) {
                document.getElementsByClassName("password")[0].focus();
            }
            else if(focused == document.getElementsByClassName("password")[0]) {
                document.getElementsByClassName("password")[1].focus();
            }
            else if(focused == document.getElementsByClassName("password")[0]) {
                document.getElementsByClassName("loginButton")[0].click();
            }
        }
        if(e.keyCode == 40) {
            var focused = document.activeElement;
            if(focused == document.getElementsByClassName("id")[0]) {
                document.getElementsByClassName("username")[0].focus();
            }
            else if(focused == document.getElementsByClassName("username")[0]) {
                document.getElementsByClassName("password")[0].focus();
            }
            else if(focused == document.getElementsByClassName("password")[0]) {
                document.getElementsByClassName("password")[1].focus();
            }
        }
        if(e.keyCode == 38) {
            var focused = document.activeElement;
            if(focused == document.getElementsByClassName("username")[0]) {
                document.getElementsByClassName("id")[0].focus();
            }
            else if(focused == document.getElementsByClassName("password")[0]) {
                document.getElementsByClassName("username")[0].focus();
            }
            else if(focused == document.getElementsByClassName("password")[1]) {
                document.getElementsByClassName("password")[0].focus();
            }
        }
    }
    else {
        if(e.keyCode == 13) {
            var focused = document.activeElement;
            if(focused == document.getElementsByClassName("username")[0]) {
                document.getElementsByClassName("password")[0].focus();
            }
            else if(focused == document.getElementsByClassName("password")[0]) {
                document.getElementsByClassName("loginButton")[0].click();
            }
        }
        if(e.keyCode == 40) {
            var focused = document.activeElement;
            if(focused == document.getElementsByClassName("username")[0]) {
                document.getElementsByClassName("password")[0].focus();
            }
        }
        if(e.keyCode == 38) {
            var focused = document.activeElement;
            if(focused == document.getElementsByClassName("password")[0]) {
                document.getElementsByClassName("username")[0].focus();
            }
        }
    }
})

function loadUserInfo() {
    var username = getFromFile("logedUsername").replace("#%*", "");
    var index = getIndexInFile("usernames", username);
    var jmeno = getFromFileByIndex("userJmena", index);
    var prijmeni = getFromFileByIndex("userPrijmeni", index);
    var id = 0;
    console.log("INDEX: " + id);
    for(var x = 0; x < getSizeOfFile("jmena"); x++) {
        if(getFromFileByIndex("jmena", x) == jmeno) {
            if(getFromFileByIndex("prijmeni", x) == prijmeni) {
                id = x;
            }
        } 
    }
    var trida = getFromFileByIndex("trida", id);
    var wanted = getIndexInFile("tridy", trida);
    var wantedUcitel = getFromFileByIndex("ucitel", wanted);
    if(getFromFileByIndex("student", id) == "Student") {
        document.getElementsByClassName("kTU")[0].innerHTML = "<b>Třídní učitel:</b> " + wantedUcitel;
        document.getElementsByClassName("kTrida")[0].innerHTML = "<b>Třída:</b> " + trida;
    }
    else {
        document.getElementsByClassName("kZak")[0].style.marginLeft = "0px";
    }
    document.getElementsByClassName("kZak")[0].innerHTML = "<b>" + getFromFileByIndex("student", id) + ":</b> " + jmeno + " " + prijmeni;
}

var mouseX = 0;
var mouseY = 0;
var scrollX = 0;
var scrollY = 0;
var focused = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    scrollX = e.scrollX;
    scrollY = e.scrollY
    if(focused) {
        document.getElementsByClassName("hoverText")[0].style.top = (mouseY + 10 + window.pageYOffset) + "px";
        document.getElementsByClassName("hoverText")[0].style.left = (mouseX + 10) + "px";
    }
})

function hover(index = 0) {
    console.log("INDEX: " + index);
    var predmet = getFromFileByIndex("hodina", index);
    var ucitel = getFromFileByIndex("ucitelH", index);
    var trida = getFromFileByIndex("tridaH", index);
    var ucebna = getFromFileByIndex("ucebna", index);
    var ucivo = getFromFileByIndex("latka", index);
    if(!focused) {
        focused = true;
        console.log("MOUSE: " + mouseX + " " + mouseY)
        console.log("SCROLL: " + window.pageYOffset)
        document.getElementsByClassName("hoverText")[0].style.visibility = "visible";
        document.getElementsByClassName("hoverText")[0].style.top = (mouseY + 10  + window.pageYOffset) + "px";
        document.getElementsByClassName("hoverText")[0].style.left = (mouseX + 10) + "px";
        document.getElementsByClassName("HTTitle")[0].innerHTML = predmet;
        document.getElementsByClassName("HTRight")[0].innerHTML = "<div>" + ucitel + "</div><div>" + trida + "</div><div>" + ucebna + "</div><div>" + ucivo + "</div>";
        console.log("UCIVO: " + ucivo.trim());
        if(ucivo.trim() == "") {
            document.getElementsByClassName("HTLeft")[0].innerHTML = '<div>Učitel:</div><div>Třída:</div><div>Učebna:</div>';
        }
        else {
            document.getElementsByClassName("HTLeft")[0].innerHTML = '<div>Učitel:</div><div>Třída:</div><div>Učebna:</div><div>Probrané učivo:</div>';
        }
    }
}

function unhover() {
    focused = false;
    document.getElementsByClassName("hoverText")[0].style.visibility = "hidden";
    document.getElementsByClassName("hoverText")[0].style.top = "0px";
    document.getElementsByClassName("hoverText")[0].style.left = "0px";
}

function loadHours() {
    var username = getFromFile("logedUsername").replace("#%*", "");
    var index = getIndexInFile("usernames", username);
    var jmeno = getFromFileByIndex("userJmena", index);
    var prijmeni = getFromFileByIndex("userPrijmeni", index);
    var id = 0;
    for(var x = 0; x < getSizeOfFile("jmena"); x++) {
        if(getFromFileByIndex("jmena", x) == jmeno) {
            if(getFromFileByIndex("prijmeni", x) == prijmeni) {
                id = x;
            }
        } 
    }
    index = id;
    if(getFromFileByIndex("student", index) == "Učitel") {
        for(var i = 0; i < getSizeOfFile("hodina"); i++) {
            if(getFromFileByIndex("ucitelH", i) == getFromFileByIndex("jmena", index) + " " + getFromFileByIndex("prijmeni", index)) {
                var den = getFromFileByIndex("denH", i);
                var hodina = getFromFileByIndex("hodina", i);
                var cas = getFromFileByIndex("cas", i);
                var ucebna = getFromFileByIndex("ucebna", i);
                var trida = getFromFileByIndex("tridaH", i);
                var firstLetters = "";
                for(var x = 0; x < hodina.split(" ").length; x++) {
                    firstLetters += hodina.split(" ")[x].trim().split("")[0].toUpperCase();
                }
                var multiplier = den == "Po" ? 0 : den == "Ut" ? 1 : den == "St" ? 2 : den == "Ct" ? 3 : 4;
                console.log(den);
                console.log((Number.parseInt(cas) + (13 * multiplier)) + "H");
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").onmouseenter = hover.bind(null, i);
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").onmouseleave = unhover;
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").onclick = openEditor.bind(null, i);
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").classList.add("dHour");
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").innerHTML = "<b>" + firstLetters + "</b><br>" + trida + "<br>" + ucebna;
            }
        }
    }
    else {
        var trida = getFromFileByIndex("trida", index);
        for(var i = 0; i < getSizeOfFile("hodina"); i++) {
            if(getFromFileByIndex("tridaH", i) == trida) {
                var den = getFromFileByIndex("denH", i);
                var hodina = getFromFileByIndex("hodina", i);
                var cas = getFromFileByIndex("cas", i);
                var ucebna = getFromFileByIndex("ucebna", i);
                var firstLetters = "";
                for(var x = 0; x < hodina.split(" ").length; x++) {
                    firstLetters += hodina.split(" ")[x].trim().split("")[0].toUpperCase();
                }
                var multiplier = den == "Po" ? 0 : den == "Ut" ? 1 : den == "St" ? 2 : den == "Ct" ? 3 : 4;
                console.log(den);
                console.log((Number.parseInt(cas) + (13 * multiplier)) + "H");
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").onmouseenter = hover.bind(null, i);
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").onmouseleave = unhover;
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").classList.add("dHour");
                document.getElementById((Number.parseInt(cas) + (13 * multiplier)) + "H").innerHTML = "<b>" + firstLetters + "</b><br>" + trida + "<br>" + ucebna;
            }
        }
    }
}

function openEditor(id = 0) {
    clearFile("clickedHour");
    saveToFile("clickedHour", id);
    openWebsite("editor.html", false);
}

function loadZnamkyList() {
    var id = getFromFileByIndex("clickedHour", 0);
    var trida = getFromFileByIndex("tridaH", Number.parseInt(id));
    var content = "";
    for(var i = 0; i < getSizeOfFile("trida"); i++) {
        if(trida == getFromFileByIndex("trida", i)) {
            if(getFromFileByIndex("student", i) == "Student") content += '<div><div>' + getFromFileByIndex("jmena", i) + " " + getFromFileByIndex("prijmeni", i) + '</div><div><select class="ZZZ"><option value="0" selected>Nezadána</option><option value="1">1</option><option value="1.5">1-</option><option value="2">2</option><option value="2.5">2-</option><option value="3">3</option><option value="3.5">3-</option><option value="4">4</option><option value="4.5">4-</option><option value="5">5</option></select></div></div>'
        }
    }
    document.getElementsByClassName("ZZTable")[0].innerHTML = content;
}

function zapsatZnamky() {
    var id = getFromFileByIndex("clickedHour", 0);
    var trida = getFromFileByIndex("tridaH", Number.parseInt(id));
    var current = 0;
    var tema = document.getElementsByClassName("ZZT")[0].value;
    if(tema.trim() != "")  {
        for(var i = 0; i < getSizeOfFile("trida"); i++) {
            if(trida == getFromFileByIndex("trida", i)) {
                if(document.getElementsByClassName("ZZZ")[current] != null) {
                    var hodnota = document.getElementsByClassName("ZZZ")[current].value;
                    if(hodnota != 0) {
                        saveToFile("znamky", getFromFileByIndex("hodina", id) + "#" + hodnota + "_" + document.getElementsByClassName("ZZV")[0].value + "*" + getFromFileByIndex("jmena", i) + "-" + getFromFileByIndex("prijmeni", i) + "/" + tema);
                    }
                    current++;
                }
            }
        }
        window.close();
    }
    else {
        shake("ZZT", 0);
        console.log("NO TEMA!");
    }
}

function zapsatHodinu() {
    var id = getFromFileByIndex("clickedHour", 0);
    var tema = document.getElementsByClassName("ZHT")[0].value;
    if(tema.trim() != "") {
        setInFileByIndex("latka", tema, Number.parseInt(id));
        window.close();
    }
    else {
        shake("ZHT", 0);
        console.log("NO TEMA!");
    }
}

function loadZnamky() {
    var username = getFromFile("logedUsername").replace("#%*", "");
    var index = getIndexInFile("usernames", username);
    var jmeno = getFromFileByIndex("userJmena", index);
    var prijmeni = getFromFileByIndex("userPrijmeni", index);
    var id = 0;
    console.log("INDEX: " + id);
    for(var x = 0; x < getSizeOfFile("jmena"); x++) {
        if(getFromFileByIndex("jmena", x) == jmeno) {
            if(getFromFileByIndex("prijmeni", x) == prijmeni) {
                id = x;
            }
        } 
    }
    index = id;
    var znamky = '<div class="ZTop"><div></div><div>0.1</div><div>0.2</div><div>0.3</div><div>0.4</div><div>0.5</div><div>0.6</div><div>0.7</div><div>0.8</div><div>0.9</div><div>1</div><div>Průměr</div></div>';
    var allZnamky = "";
    for(var x = 0; x < getSizeOfFile("hodina"); x++) {
        if(getFromFileByIndex("tridaH", x) == getFromFileByIndex("trida", index)) {
            var hodina = getFromFileByIndex("hodina", x);
            var can = true;
            if(allZnamky.includes("|")) {
                for(var y = 0; y < allZnamky.split("|").length; y++) {
                    if(allZnamky.split("|")[y] == hodina) can = false;
                }
            } 
            if(can) {
                znamky += '<div class="ZLine"><div>' + getFromFileByIndex("hodina", x) + '</div>';
                for(var i = 1; i < 12; i++) {
                    znamky += '<div id="' + hodina + i + '"></div>';
                }
                znamky += '</div>';
                allZnamky += hodina + "|";
            }
        }
    }
    console.log(allZnamky);
    console.log(allZnamky.split("Predmet 2")[0] + "Predmet 2-1%2%4" + allZnamky.split("Predmet 2")[1]);
    document.getElementsByClassName("znamky")[0].innerHTML = znamky;
    for(var x = 0; x < getSizeOfFile("znamky"); x++) {
        var text = getFromFileByIndex("znamky", x);
        var hodina = text.split("#")[0];
        var hodnota = text.split("#")[1].split("_")[0];
        var vaha = text.split("_")[1].split("*")[0];
        var jmeno = text.split("*")[1].split("-")[0];
        var prijmeni = text.split("*")[1].split("-")[1].split("/")[0];
        if(getFromFileByIndex("jmena", index) == jmeno) {
            if(getFromFileByIndex("prijmeni", index) == prijmeni) {
                document.getElementById(hodina + (Number.parseFloat(vaha) * 10)).innerHTML += '<p onclick="openZnamkaInfo(' + x + ')">' + hodnota.replace(".5", "-") + " </p>";
                var found = false;
                for(var y = 0; y < allZnamky.split("|").length; y++) {
                    if(allZnamky.split("|")[y].includes(hodina)) found = true;
                }
                if(found) {
                    if(allZnamky.includes("|" + hodina + "-")) {
                        allZnamky = allZnamky.split(hodina)[0] + hodina + "%" + allZnamky.split(hodina)[1].split("-")[1].split("|")[0] + "%" + hodnota + "_" + vaha;
                        allZnamky += allZnamky.split(hodina)[1].split("%" + hodina)[allZnamky.split(hodina)[1].split("%" + hodina).length - 1];
                    }
                    else {
                        console.log("E");
                        allZnamky = allZnamky.split(hodina)[0] + hodina + "%" + hodnota + "_" + vaha + allZnamky.split(hodina)[1];
                    }
                }
            }
        }
    }
    for(var x = 0; x < allZnamky.split("|").length - 1; x++) {
        var textHour = allZnamky.split("|")[x];
        var totalAVG = 0.0;
        var delitelAVG = 0.0;
        for(var y = 1; y < textHour.split("%").length; y++) {
            var textZnamka = textHour.split("%")[y];
            var znamka = textZnamka.split("_")[0];
            var vaha = textZnamka.split("_")[1];
            console.log("ZNAMKA: " + znamka + " VAHA:" + vaha);
            totalAVG += znamka * vaha;
            delitelAVG += Number.parseFloat(vaha);
        }
        if(isNaN(totalAVG/delitelAVG)) {
            document.getElementById(textHour.split("%")[0] + "11").innerHTML = "NH";
        }
        else {
            document.getElementById(textHour.split("%")[0] + "11").innerHTML = Math.round((totalAVG/delitelAVG) * 100)/100;
        }
    }
    console.log(allZnamky);
    if(getFromFileByIndex("student", index) == "Učitel") {
        document.getElementsByClassName("hodnoceni")[0].innerHTML = "";
    }
}

function openZnamkaInfo(id = 0) {
    console.log(id);
    console.log(getFromFileByIndex("znamky", id));
    clearFile("wantedznamka");
    saveToFile("wantedznamka", id);
    window.open("znamkainfo.html", "", 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=400');
    //openWebsite("znamkainfo.html", false);
}

function loadZnamkaInfo() {
    var id = Number.parseInt(getFromFileByIndex("wantedznamka", 0));
    var znamka = getFromFileByIndex("znamky", id);
    var predmet = znamka.split("#")[0];
    var firstLetters = "";
    for(var y = 0; y < predmet.split(" ").length; y++) {
        firstLetters += predmet.split(" ")[y].trim().split("")[0].toUpperCase();
    }
    var tema = znamka.split("/")[1];
    var ucitel = "";
    for(var x = 0; x < getSizeOfFile("hodina"); x++) {
        if(ucitel == "") {
            if(getFromFileByIndex("hodina", x) == predmet) {
                ucitel = getFromFileByIndex("ucitelH", x);
            }
        }
    }
    document.getElementsByClassName("left")[2].innerHTML += znamka.split("*")[1].split("/")[0].replace("-", " ") + "</h3>";
    document.getElementsByClassName("left")[3].innerHTML += predmet + "</h3>";
    document.getElementsByClassName("left")[4].innerHTML += ucitel + "</h3>";
    document.getElementsByClassName("left")[5].innerHTML += tema + "</h3>";
    document.getElementsByClassName("left")[6].innerHTML += "Váha " + znamka.split("_")[1].split("*")[0] + "</h3>";
    document.getElementsByClassName("left")[7].innerHTML += znamka.split("#")[1].split("_")[0].replace(".5", "-") + "</h3>";
    var total = 0;
    var delitel = 0;
    for(var x = 0; x < getSizeOfFile("znamky"); x++) {
        var znamkaF = getFromFileByIndex("znamky", x);
        if(znamkaF.split("#")[0] == predmet) {
            if(znamkaF.split("/")[1] == tema) {
                if(znamkaF.split("_")[1].split("*")[0] == znamka.split("_")[1].split("*")[0]) {
                    total += znamkaF.split("#")[1].split("_")[0] * znamkaF.split("_")[1].split("*")[0];
                    delitel += Number.parseFloat(znamkaF.split("_")[1].split("*")[0]);
                }
            }
        }
    }
    document.getElementsByClassName("left")[8].innerHTML += "</span>" + Math.round((total/delitel) * 100)/100;
}  

function shake(className = "", classI = 0) {
    if(!document.getElementsByClassName(className)[classI].classList.contains("shake")) {
        document.getElementsByClassName(className)[classI].classList.add("shake");
        setTimeout(() => {
            document.getElementsByClassName(className)[classI].classList.remove("shake");
        }, 300);
    }
}

function openZdroje() {
    window.open("zdroje.html", "", 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=100');
}