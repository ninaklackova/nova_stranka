const apiBaseUrl = 'https://vyrazy.pythonanywhere.com';

//definition of exercise
var exercises = [
    { exercise_title: "Príklad 1 - Rovnica", exercise_text: "Nájdite všetky reálne čísla y, ktoré vyhovujú rovnici, keď x = 1:",
        exercise_problem: "5*x**2 + 5*y**2 + 8*x*y + 2*y - 2*x + 2 = 0", buttons: ["vyňať pred zátvorku", "substitúcia", "zjednodušiť/upraviť","úprava na súčin", "dosaď", "vyjadri korene","vydeliť rovnicu","vynásobiť rovnicu"],
        exercise_steps:["<b> KROK 1:</b><br> Dosaď za neznámu x číslo 1 <br> 3 + 5y<sup>2</sup> + 8y + 2y + 2 = 0",
                         "<b> KROK 2:</b><br> Zjednoduš absolútne členy <br> 5 + 8y +5y<sup>2</sup> + 2y = 0",
                         "<b> KROK 3:</b><br> Zjednoduš členy neznámej y <br> 10y + 5 + 5y<sup>2</sup>  = 0",
                         "<b> KROK 4:</b><br> Uprav kvadratickú rovnicu na súčin <br> (y+1)(y+1) = 0",
                         "<b> KROK 5:</b><br> Vyjadri korene a výsledok zapíš"], exercise_answer:['-1'] },

    { exercise_title: "Príklad 2 - Ťažšia rovnica", exercise_text: "Nájdite všetky reálne čísla x, ktoré vyhovujú rovnici:",
        exercise_problem: "2662*x**3 + 847*x**2 + 77*x + 2 = 0", buttons: ["vyňať pred zátvorku", "substitúcia","rozložiť na súčet", "rozložiť na súčin","zjednodušiť/upraviť","zjednodušiť na mocninu","úprava na súčin", "vzorec a^3+b^3", "dosaď", "vyjadri korene", "vydeliť rovnicu","vynásobiť rovnicu"],
        exercise_steps:["<b> KROK 1:</b><br> Využi úpravu vyňať pred zátvorku na 1. a 4. člen <br> 2(1331x<sup>3</sup> + 1) + 847x<sup>2</sup> + 77x = 0",
                        "<b> KROK 2:</b><br> Zopakuj úpravu vyňať pred zátvorku <br>na zvyšné dva členy <br> 2(1331x<sup>3</sup> + 1) + 77x(11x + 1) = 0",
                        "<b> KROK 3:</b><br> Použi vzorec (a<sup>3</sup>+b<sup>3</sup>) <br> 2(11x+1)(121x<sup>2</sup> -11x + 1) + 77x(11x + 1) = 0",
                        "<b> KROK 4:</b><br> Vyjmi pred zátvorku (11x+1) <br> (11x+1)(242x<sup>2</sup> +55x + 2) = 0",
                        "<b> KROK 5:</b><br> Rozdel kvadratickú rovnicu na súčin <br> (11x+1)(x+2/11)(x+1/22) = 0",
                        "<b> KROK 6:</b><br> Vyjadri korene a výsledok zapíš"], exercise_answer:['-1/11','-2/11','-1/22'] },

    { exercise_title: "Príklad 3 - Nicomachus", exercise_text: "<div>a) Napíšte číslo \\(7^3\\) ako súčet siedmich za sebou nasledujúcich nepárnych čísel,</div><div> b) Napíšte číslo \\(10^3\\) ako súčet desiatich za sebou nasledujúcich nepárnych čísel:</div>",
        exercise_problem: "5*4", buttons: ["vyňať pred zátvorku", "rozložiť na súčet", "rozložiť na súčin","zjednodušiť/upraviť", "vydeliť rovnicu", "presunúť na druhú stranu", "vydeliť rovnicu","vynásobiť rovnicu"],
        exercise_steps:["<b> KROK 1 a):</b><br> Vypočítaj v kalkulačke koľko je 7<sup>3</sup> <br> a zapíš rovnicu <br> 343 = n+(n+2)+(n+4)+(n+6)+(n+8)+(n+10)+(n+12)",
                        "<b> KROK 2 a):</b><br> Zjednoduš členy neznámej hodnoty n<br> 343 = 7n + 2 + 4 + 6 + 8 + 10 + 12",
                        "<b> KROK 3 a):</b><br> Zjednoduš absolútne členy <br> 343 = 7n + 42",
                        "<b> KROK 4 a):</b><br> Odčítaj 42 od 343 a vydeľ celú rovnicu <br> 301 = 7n <br> 43 = n",
                        "<b> KROK 5 a):</b><br> Dostal si najmenšie číslo, dopočítaj najväčšie",
                        "<b> KROK 6 b):</b><br> Inšpiruj sa podobným postupom ako v príklade a)"], exercise_answer:['43','55','91','109'] },


    { exercise_title: "Príklad 4 - Historická", exercise_text: "Z troch sviec, ktoré sú umiestnené na jednej strane oltára a majú rovnakú hrúbku, má jedna dĺžku <br>22 cm, druhá 18 cm a tretia 16 cm. Kostolník musí nechať vždy dve sviečky horieť spolu <br> rovnaký čas. Akým spôsobom musí zapáliť sviečky, aby mu nezostal žiadny zbytočný zvyšok? <br> Urči 3 časové úseky, aby sviečky horeli čo najdlhší čas.",
        exercise_problem: "22 - x - y = 0|18 - x - z = 0|16 - y - z = 0", buttons: ["vyňať pred zátvorku","rozložiť na súčet","zjednodušiť/upraviť", "presunúť na druhú stranu","dosaď", "vydeliť rovnicu","vynásobiť rovnicu"],
        exercise_steps:["<b> KROK 1:</b><br> Zapíš sústavu rovníc<br> 22 - x - y = 0<br>18 - x - z = 0<br>16 - y - z = 0",
                        "<b> KROK 2:</b><br> Pomocou operácií presunúť na druhú stranu <br>a zjednodušiť vyjadri x z prvej rovnice<br> 22 - y = x",
                        "<b> KROK 3:</b><br> Dosaď x do druhej rovnice, x = 22 - y <br> y - 22 + 18 - z = 0",
                        "<b> KROK 4:</b><br> Pomocou operácií presunúť na druhú stranu<br>a zjednodušiť vyjadri z<br> -4 + y = z",
                        "<b> KROK 5:</b><br> Dosaď z do poslednej rovnice, z = -4 + y<br> 4 - y + 16 - y = 0",
                        "<b> KROK 6:</b><br> Vyjadri si y<br>Zjednoduš rovnicu, presuň y na druhú stranu,<br>vydeľ rovnicu číslom 2<br> y = 10",
                        "<b> KROK 7:</b><br> Dosaď vyjadrené y = 10 postupne do ostatných <br>rovníc a dopočítaj x, z",
                        "<b> KROK 8:</b><br> Zapíš výsledok"], exercise_answer:['12','10','6'] },

    { exercise_title: "Príklad 5 - Sústava rovníc", exercise_text: "Nájdite všetky dvojice reálnych čísel x, y, ktoré vyhovujú sústave rovníc: ",
        exercise_problem: "2*(x+y) = 5*x*y|8*(x**3+y**3) = 65", buttons: ["vyňať pred zátvorku","zjednodušiť/upraviť", "vydeliť rovnicu","vynásobiť rovnicu","presunúť na druhú stranu", "vzorec a^3+b^3", "úprava na súčin","substitúcia", "dosaď", "umocniť celú rovnicu", "vyjadri korene"],
        exercise_steps:["<b> KROK 1:</b><br> Na druhú rovnicu využi vzorec a<sup>3</sup>+b<sup>3</sup><br>8(x+y)(x<sup>2</sup> - xy + y<sup>2</sup>) = 65",
                        "<b> KROK 2:</b><br> Prvú rovnicu vydeľ číslom 2<br>(x + y) = 5xy / 2",
                        "<b> KROK 3:</b><br> V druhej rovnici dosaď výsledok x + y = 5xy / 2<br> 8 * (5xy / 2)(x<sup>2</sup> - xy + y<sup>2</sup>) = 65",
                        "<b> KROK 4:</b><br> Vydel druhú rovnicu číslom 5<br>4xy(x<sup>2</sup> - x*y + y<sup>2</sup>) = 13",
                        "<b> KROK 5:</b><br> Rozdel rovnicu na súčin<br> 4xy(x+y)<sup>2</sup> - 12x<sup>2</sup>y<sup>2</sup> = 13",
                        "<b> KROK 6:</b><br> Umocni celú prvú rovnicu na druhú<br> (x + y)<sup>2</sup> = 25x<sup>2</sup>y<sup>2</sup>/4<br> (Toto slúži iba ako pomocný krok, potom sa vráť naspäť aby si funkciu vrátil do pôvodného stavu) ",
                        "<b> KROK 8:</b><br> Teraz môžeš za (x + y)<sup>2</sup> <br>v druhej rovnici dosadiť 25x<sup>2</sup>y<sup>2</sup>/4<br> 25x<sup>3</sup>y<sup>3</sup> - 12x<sup>2</sup>y<sup>2</sup> = 13",
                        "<b> KROK 9:</b><br> Presuň číslo 13 na druhú stranu <br> 25x<sup>3</sup>y<sup>3</sup> - 12x<sup>2</sup>y<sup>2</sup> - 13 = 0",
                        "<b> KROK 10:</b><br> Využi substitúciu xy = t<br> 25t<sup>3</sup> - 12t<sup>2</sup> - 13 = 0",
                        "<b> KROK 11:</b><br> Vyjmi zo všetkých troch členov (t-1)<br> (t-1)(25t<sup>2</sup> + 13t<sup>2</sup> + 13) = 0",
                        "<b> KROK 12:</b><br> Teraz môžeš pomocou operácie dosaď <br>dosadiť späť substitúciu za t=xy <br> (xy-1)(25x<sup>2</sup>y<sup>2</sup> + 12<sup>2</sup> - 13) = 0",
                        "<b> KROK 13:</b><br> Aby si našiel korene tejto rovnice, musíš nájsť<br>hodnoty, pre ktoré je výraz rovný nule.<br>Zo zátvorky vieš teda, že ak (xy - 1) = 0, tak xy = 1<br>Potom si vieš vyjadriť napríklad x = 1/y",
                        "<b> KROK 14:</b><br> Dosaď x = 1/y do prvej pôvodnej rovnice postupne na obe strany<br> 2y + 2/y = 5",
                        "<b> KROK 15:</b><br> Presuň číslo 5 na druhú stranu<br>2y + 2/y -5 = 0",
                        "<b> KROK 16:</b><br> Vynásob celú rovnicu y<br>2y<sup>2</sup> + 2 - 5y = 0",
                        "<b> KROK 17:</b><br> Využi úpravu na súčin<br> (y-1/2)(y-2) = 0",
                        "<b> KROK 18:</b><br> Vyjadri korene <br> {'y': ['1/2', '2']}",
                        "<b> KROK 19:</b><br> Teraz keď vieš korene y, cez kalkulačku si podľa <br>predošlej rovnice x=1/y vyjadri x a zapíš výsledok"], exercise_answer:['2','1/2','1/2','2'] },

    { exercise_title: "Príklad 6 - Klbko", exercise_text: "Vlnu s priemerom 1,5mm som namotala do tvaru gule. Priemer klbka (gule) je 13 cm. Na základe svojich predchádzajúcich skúseností predpokladám, že vzduch v klbku tvorí približne 20\% z jeho celkového objemu. Potrebovala by som zistiť. koľko metrov vlny je v klbku namotaných. Pomôžete mi?",
        exercise_problem: "121**(1/2)", buttons: ["vyňať pred zátvorku", "rozložiť na súčet", "rozložiť na súčin","zjednodušiť/upraviť","vydeliť rovnicu","vynásobiť rovnicu", "dosaď","presunúť na druhú stranu"],
        exercise_steps:["<b> KROK 1:</b><br> Zapíš si vzorec na výpočet objemu <br>gule a potvrď ho.<br> Vg = 4/3*pi*r<sup>3</sup>",
        "<b> KROK 2:</b><br> Do vzorcu dosaď hodnoty. Priemer klbka je 13cm, <br>čiže polomer je 6.5cm<br> Vg = 4/3*pi*6.5<sup>3</sup>",
        "<b> KROK 3:</b><br> Za pi dosaď hodnoty tiež. <br> (pre účely tohto príkladu stačí keď &#960; = 3.14166)",
        "<b> KROK 4:</b><br> Zapíš si nový vzorec na určenie objemu vlny <br>v klbku a potvrď ho<br>Keďže vzduch tvorí 20%, vlna tvorí 80%<br> Vv = 0.8 * Vg",
        "<b> KROK 5:</b><br> Dosaď do vzorca objem gule (Vg) <br>a vypočítaj tým objem vlny (Vv)",
        "<b> KROK 6:</b><br> Zapíš si nový vzorec pre výpočet objemu <br>jednej nite (valca)<br>Priemer nite je 1.5 mm, čo je 0.15cm.<br> Polomer(rn) je teda 0.075cm<br> Vn = pi*rn<sup>2</sup> * d",
        "<b> KROK 7:</b><br> Keďže chceš objem na jednotku dĺžky, za d dosaď 1. <br>",
        "<b> KROK 8:</b><br> Dosaď aj pi aj polomer nite",
        "<b> KROK 9:</b><br> Zapíš finálny vzorec L = Vv / Vn a vypočítaj dosadením výsledok",
        "<b> KROK 10:</b><br> Výsledok zapíš v metroch zaokrúhlený nadol"], exercise_answer:['520'] },
];


var actualExercise = 0;
for (var element of exercises){
    if (localStorage.getItem(element.exercise_title) !== 'solved'){
        localStorage.setItem(element.exercise_title, 'unsolved');
    }
}

function getExerciseProblem(index) {
    if (index >= 0 && index < exercises.length) {
        return exercises[index].exercise_problem; 
    }
    return null; 
}
var substitutionHistory = []
var expressionProblemsHistory = []
var expressionProblem = getExerciseProblem(actualExercise); 

function setExpressionProblem(problem) {
    expressionProblemsHistory.push(expressionProblem)
    if (expressionProblemsHistory.length >= 1) {
        document.getElementById('undo_button').disabled = false;
    } else {
        document.getElementById('undo_button').disabled = true;
    }
    expressionProblem = problem
}




var selectedButtons = [];

var selectedButtonIndexes = [];

var popupTextArea = "";

var popupTextArea1 = "";
var popupTextArea2 = "";

var index = 0;

var submitButton = document.getElementById('closeButton')

var submitButtonEq = document.getElementById('closeButtonEq')




function openPopup(hideInput) {
    const new_button = submitButton.cloneNode(true)
    submitButton.parentNode.replaceChild(new_button, submitButton)
    submitButton = new_button

    var popupTextArea= document.getElementById('popupTextArea')

    popupTextArea.value = "";
    selectedButtons = [];
    selectedButtonIndexes = [];
    const popup = document.getElementById('customPopup');
    if (hideInput) {
        popupTextArea.style.display = 'none'
    } else {
        popupTextArea.style.display = 'inline-block'
    }
    if (popup.style.display !== 'block') {
        popup.style.display = 'block';
    }

    // Make the popup draggable
    dragElement(popup,1);

}

function dragElement(element,int) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (int === 1) {
        var header = document.getElementById('popupHeader');
    }
    if (int === 2) {
        var header = document.getElementById('popupHeader2');
    }
    if (int === 3) {
        var header = document.getElementById('popupHeaderEq');
    }
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function closePopup() {
    const new_button = submitButton.cloneNode(true)
    submitButton.parentNode.replaceChild(new_button, submitButton)
    submitButton = new_button

    index += 1;
    const popup = document.getElementById('customPopup');

    /*alert("Vybrané tlačidlá: " + selectedButtons.join(", ") + '\n' +
        "Vložený text: " + document.getElementById('popupTextArea').value + "\n" +
        "Vybrané indexy: " + selectedButtonIndexes.join(", "));*/
    popup.style.display = 'none';
    document.getElementById('selectedButtons').innerText = '';

}

function openPopupEq() {
    const new_button = submitButton.cloneNode(true)
    submitButton.parentNode.replaceChild(new_button, submitButton)
    submitButton = new_button
    var popupTextArea1= document.getElementById('popupInput1')
    var popupTextArea2= document.getElementById('popupInput2')

    popupTextArea1.value = "";
    popupTextArea2.value = "";
    selectedButtons = [];
    selectedButtonIndexes = [];
    const popup = document.getElementById('customPopupEq');

    if (popup.style.display !== 'block') {
        popup.style.display = 'block';
    }

    selectedButtons = [];

    selectedButtonIndexes = [];
    dragElement(popup,3);
}

function closePopupEq() {
    const new_button = submitButton.cloneNode(true)
    submitButton.parentNode.replaceChild(new_button, submitButton)
    submitButton = new_button
    index += 1;
    const popup = document.getElementById('customPopupEq');

    /*alert("Vybrané tlačidlá: " + selectedButtons.join(", ") + '\n' +
        "Vložený text: " + document.getElementById('popupInput1').value + document.getElementById('popupInput2').value +"\n" +
        "Vybrané indexy: " + selectedButtonIndexes.join(", "));*/
    popup.style.display = 'none';
    document.getElementById('selectedButtons').innerText = '';

}

function writeHistory() {

    const exercise_place = document.getElementById('exercise_place')

    for (problem of expressionProblemsHistory) {
        const row = document.createElement("div")
        row.style.color = "gray";
        row.setAttribute("class", "step-row")
        console.log(`\\(${problem.replaceAll(/\*\*/g, '^').replaceAll('|', '<br/>')}\\)`)
        for (riadok of problem.split('|')) {
            row.innerHTML += `\\(${riadok.replaceAll(/\*\*/g, '^')}\\)` + '<br/>';
        }
        //row.innerHTML = `\\(${problem.replace(/\*\*/g, '^').replace('|', '<br/>')}\\)`;
        exercise_place.appendChild(row)

        MathJax.typesetPromise([row])
    }

}

function factoring() {
    document.getElementById("customFunctionMessage").innerText = "Kliknite na členy, z ktorých chcete vyňať pred zátvorku a do pola vpíšte čo chcete z týchto členov vyňať \n(v tvare 5, 5*x, 5*x**2). Potom stlačte \"Potvrdiť\".";


    openPopup(); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onFactoringSubmit);
}

function onFactoringSubmit() {
    submitButton.removeEventListener('click', onFactoringSubmit)
    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
        "vynatie": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/factorizer`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné vyňať pred zátvorku")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function create_buttons(expression) {
    const expressionJson = { "uplny_vyraz": expression };
    fetch(`${apiBaseUrl}/split_equation`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {
            console.log("buttons ",jsonResponse)
            const buttonRow = document.createElement('div')
            buttonRow.setAttribute('id', 'button-row')
            document.getElementById("exercise_place").appendChild(buttonRow)


            let uniqueIdCounter = 0;
            for (clen of jsonResponse["vyraz"]) {
                var index = jsonResponse["vyraz"].indexOf(clen)

                if (clen == "|") {
                    const newLine = document.createElement("br");
                    const uniqueId = uniqueIdCounter++;
                    newLine.setAttribute('id', uniqueId);
                    buttonRow.appendChild(newLine)
                } else {
                    const button = document.createElement("button");
                    button.setAttribute('data-index', index);
                    const uniqueId = uniqueIdCounter++;
                    button.setAttribute('id',uniqueId);
                    button.setAttribute('class', 'btn btn-exercise');
                    button.innerHTML = `\\(${clen.replace(/\*\*/g, '^')}\\)`; // change of  ** for ^ because of MathJax

                    buttonRow.appendChild(button);

                    button.addEventListener('click',  function() {
                        const btnText = button.textContent;

                        const btnId = button.getAttribute('id'); 
                        const btnIndex = parseInt(button.getAttribute('data-index'))
                        if (!selectedButtonIndexes.includes(parseInt(btnId))) {
                            selectedButtons.push(btnText);
                            selectedButtonIndexes.push(parseInt(btnId));
                        } else {
                            const index = selectedButtons.indexOf(btnText)
                            if (index !== -1) {
                                selectedButtons.splice(index, 1);
                            }

                            const idIndex = selectedButtonIndexes.indexOf(parseInt(btnId));
                            if (idIndex !== -1) {
                                selectedButtonIndexes.splice(idIndex, 1);
                            }
                        }

                        document.getElementById('selectedButtons').innerText = "Vybrané tlačidlá: " + selectedButtons.join(", ") +
                            "\nIndexy: " + selectedButtonIndexes.join(", ");
                    });
                }
            } MathJax.typesetPromise([buttonRow]);
        }

        ).catch((err) => alert(err));

}

function dividing_sum() {
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen, ktorý chcete rozložiť na súčet a do pola vpíšte jeden člen, ktorý má súčet obsahovať. Potom stlačte \"Potvrdiť\".";


    openPopup(); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onDividingSumSubmit);
}

function onDividingSumSubmit() {
    submitButton.removeEventListener('click', onDividingSumSubmit)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
        "hodnota": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/divider_sum`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {
            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné rozložiť člen")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()
                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function joining() {
    document.getElementById("customFunctionMessage").innerText = "Kliknite na členy, ktoré chcete zjednodušiť/upraviť a potom stlačte \"Potvrdiť\".";



    openPopup(true); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onJoiningSubmit);
}

function onJoiningSubmit() {
    submitButton.removeEventListener('click', onJoiningSubmit)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
    };
    fetch(`${apiBaseUrl}/joiner`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné zjednodušiť výraz")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}


function dividing_multi() {
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen, ktorý chcete rozložiť na súčin a do pola vpíšte jeden člen, ktorý má súčin obsahovať. Potom stlačte \"Potvrdiť\".";

    openPopup(); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onDividingMultiSubmit);
}

function onDividingMultiSubmit() {
    submitButton.removeEventListener('click', onDividingMultiSubmit)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
        "hodnota": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/divider_multi`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné rozložiť člen")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function simplifyPowers() {
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen, ktorý chcete zjednodušiť na mocninu a potom stlačte \"Potvrdiť\".";

    openPopup(true); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onSimplifyPowersSubmit);
}

function onSimplifyPowersSubmit() {
    submitButton.removeEventListener('click', onSimplifyPowersSubmit)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 

    };
    fetch(`${apiBaseUrl}/simplify_powers`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {
            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné člen zjednodušiť na mocninu")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function substitution() {

    document.getElementById("customFunctionMessage").innerText = "Kliknite na členy, ktoré chcete substituovať, vypíšte pole \n(v tvare čo chcem substituovať=za čo, teda napríklad 5*x=y) a potom stlačte \"Potvrdiť\".";


    openPopup(); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onSubstitutionSubmit);
}

function onSubstitutionSubmit() {
    submitButton.removeEventListener('click', onSubstitutionSubmit)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
        "hodnota": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/substitutioner`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možná substitúcia")

            }
            else {
                substitutionHistory.push(document.getElementById('popupTextArea').value)
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()
                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function formulaA3B3(){
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen, na ktorý chcete aplikovať rozloženie vzorca (a^3+b^3) a potom stlačte \"Potvrdiť\".";



    openPopup(true); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onCompletingformulaA3B3);
}

function onCompletingformulaA3B3() {
    submitButton.removeEventListener('click', onCompletingformulaA3B3)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 

    };
    fetch(`${apiBaseUrl}/formulaa3b3`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné použiť vzorec")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function completingTheSquare(){
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen alebo členy kvadratickej rovnice, ktoré chcete upraviť na súčin a potom stlačte \"Potvrdiť\".";



    openPopup(true); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onCompletingTheSquare);
}

function onCompletingTheSquare() {
    submitButton.removeEventListener('click', onCompletingTheSquare)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
    };
    fetch(`${apiBaseUrl}/complete_square`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné upraviť na súčin")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()
                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function putSubstitution(){
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen alebo členy, za ktoré chcete dosadiť neznámu alebo substitúciu (v tvare čo chcem nahradiť=čím chcem nahradiť, napríklad x=2). (Substitúcie využité v príklade sú: " +
    substitutionHistory.join(", ") + "). \n A potom stlačte \"Potvrdiť\".";

    openPopup();
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onPuttingSubstitution);
}

function onPuttingSubstitution() {
    submitButton.removeEventListener('click', onPuttingSubstitution)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
        "hodnota": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/put_substitution`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné dosadiť výraz")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function solveVariables(){

    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen, ktorého chcete vyjadriť korene a potom stlačte \"Potvrdiť\".";


    openPopup(true); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onSolveVariables);
}

function onSolveVariables() {
    submitButton.removeEventListener('click', onSolveVariables)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "indexy": selectedButtonIndexes, 
    };
    fetch(`${apiBaseUrl}/solve_variables`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné vyjadriť korene")

            }
            else {

                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()
                const responseContainer = document.createElement('div');
                responseContainer.setAttribute('id', 'response-container');

                const vyraz = jsonResponse["vyraz"];
                responseContainer.innerHTML = `<pre><b>${vyraz}</b></pre>`;

                exercise_place.appendChild(responseContainer);

                }
                closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function divideEquation(){
    document.getElementById("customFunctionMessageEq").innerText = "Napíšte číslo rovnice (1,2,3), ktorú chcete vydeliť a potom číslo, ktorým chcete rovnicu vydeliť. Potom stlačte \"Potvrdiť\".";


    openPopupEq(); 
    popupTextArea1 = document.getElementById('popupInput1').value;
    popupTextArea2 = document.getElementById('popupInput2').value;


    submitButtonEq.addEventListener('click', onDivideEquation);
}

function onDivideEquation() {
    submitButtonEq.removeEventListener('click', onDivideEquation)
    var cislo_rovnice = document.getElementById('popupInput1').value;
    var delitel = document.getElementById('popupInput2').value;
    if (cislo_rovnice === ""){
        cislo_rovnice = 1
    }
    else {
        cislo_rovnice = document.getElementById('popupInput1').value
    }


    const expressionJson = {
        "vyraz": expressionProblem, 
        "hodnota": cislo_rovnice,
        "delitel": delitel
    };
    fetch(`${apiBaseUrl}/divide_equation`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {

            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné rovnicu vydeliť")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopupEq(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function flipOver() {
    document.getElementById("customFunctionMessage").innerText = "Kliknite na člen, ktorý chcete presunúť na druhú stranu rovnice a potom stlačte \"Potvrdiť\".";


    openPopup(true); 
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onFlipOver);
}

function onFlipOver() {
    submitButton.removeEventListener('click', onFlipOver)

    const expressionJson = {
        "vyraz": expressionProblem, // Vyraz, ktorý sa posiela na backend
        "indexy": selectedButtonIndexes, // Indexy, ktoré sa posielajú na backend
        //"vynatie": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/flip_over`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {
            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné presunúť na druhú stranu rovnice")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function exponentiateEquation(){
    document.getElementById("customFunctionMessage").innerText = "Napíšte číslo rovnice, ktoré chcete celé umocniť druhou mocninou a potom stlačte \"Potvrdiť\".";

    openPopup();
    popupTextArea = document.getElementById('popupTextArea').value;

    submitButton.addEventListener('click', onexponentiateEquation);
}

function onexponentiateEquation() {
    submitButton.removeEventListener('click', onexponentiateEquation)

    const expressionJson = {
        "vyraz": expressionProblem, 
        "hodnota": document.getElementById('popupTextArea').value
    };
    fetch(`${apiBaseUrl}/exponentiate_eq`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {
            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné umocniť rovnicu")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()

                create_buttons(jsonResponse["vyraz"])
            }
            closePopup(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function multipleEquation(){

    document.getElementById("customFunctionMessageEq").innerText = "Napíšte číslo rovnice (1,2,3), ktorú chcete vynásobiť a potom číslo, ktorým chcete rovnicu vynásobiť. Potom stlačte \"Potvrdiť\".";


    openPopupEq(); 
    popupTextArea1 = document.getElementById('popupInput1').value;
    popupTextArea2 = document.getElementById('popupInput2').value;


    submitButtonEq.addEventListener('click', onMultipleEquation);
}

function onMultipleEquation() {
    submitButtonEq.removeEventListener('click', onMultipleEquation)
    var cislo_rovnice = document.getElementById('popupInput1').value;
    var delitel = document.getElementById('popupInput2').value;
    if (cislo_rovnice === ""){
        cislo_rovnice = 1
    }
    else {
        cislo_rovnice = document.getElementById('popupInput1').value
    }

    const expressionJson = {
        "vyraz": expressionProblem, 
        "hodnota": cislo_rovnice,
        "delitel": delitel
    };
    fetch(`${apiBaseUrl}/multiple_equation`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(expressionJson)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("something is wrong")
            }
        }).then(jsonResponse => {
            if ((jsonResponse["vyraz"]) === "Error") {
                alert("Nie je možné rovnicu vynásobiť")

            }
            else {
                const exercise_place = document.getElementById("exercise_place")
                exercise_place.innerHTML = ""
                setExpressionProblem(jsonResponse["vyraz"])
                writeHistory()
                create_buttons(jsonResponse["vyraz"])
            }
            closePopupEq(); 
        }
        ).catch((err) => { alert("no backend response"); });

}

function updateExercise(keep_history) {
    var exercise;

    var isPlayground = 0;

    if (actualExercise == -1 || actualExercise == 2 || actualExercise == 3 || actualExercise == 5) {
        isPlayground = 1;
        let steps, answer, buttons;

        if (actualExercise == 2 || actualExercise == 3 || actualExercise == 5) {
            steps = exercises[actualExercise]['exercise_steps']
            answer = exercises[actualExercise]['exercise_answer']
            buttons = exercises[actualExercise]['buttons']
        }

        exercise = {
            exercise_problem: document.getElementById('exercise-input')
                                .value?.replaceAll('\n', '|')
                                .replace(/\++/g, "+").replace(/\-+/g, "-").replace(/(\*)\\3+/g, "*").replace(/\^+/g, "^").replace(/\/+/g, "/"),
            buttons: buttons ? buttons : ["vyňať pred zátvorku","substitúcia","rozložiť na súčet","rozložiť na súčin","zjednodušiť/upraviť","zjednodušiť na mocninu","úprava na súčin","vzorec a^3+b^3","dosaď","vyjadri korene","vydeliť rovnicu","vynásobiť rovnicu","presunúť na druhú stranu","umocniť celú rovnicu"],
            exercise_answer: answer,
            exercise_steps: steps,
        }
    } else if (!document.body.classList.contains('playground')) {
        exercise = exercises[actualExercise]
    } else {
        return;
    }


    if (!document.body.classList.contains('playground') || isPlayground) {

        if (!isPlayground) {
            document.getElementById('exercise_title').innerText = exercise.exercise_title;

            if (actualExercise === 2 || actualExercise === 3 || actualExercise == 5){
                document.getElementById('exercise-input').innerText = '';
                document.getElementById('exercise-input').style.display = 'block';
                document.getElementById('submit-exercise').style.display = 'block';
            } else {
                document.getElementById('exercise-input').style.display = 'none';
                document.getElementById('submit-exercise').style.display = 'none';
                expressionProblem = exercise.exercise_problem;
                create_buttons(expressionProblem);
            }
            document.getElementById('exercise_text').innerHTML = exercise.exercise_text;
        } else {
            expressionProblem = exercise.exercise_problem;
            if (actualExercise == 2 || actualExercise == 3 || actualExercise == 5) {
                document.getElementById('exercise_title').innerText = exercises[actualExercise]['exercise_title'];
                document.getElementById('exercise_text').innerHTML = exercises[actualExercise]['exercise_text'];
            }
            document.getElementById('exercise-input').style.display = 'block';
            document.getElementById('submit-exercise').style.display = 'block';
            if (expressionProblem) {
                create_buttons(expressionProblem);
            }
        }
        window.answerArray = exercise.exercise_answer;
        document.getElementById('exercise_place').innerText = "";
    }
    if (keep_history) {
        writeHistory()
    } else {
        expressionProblemsHistory = []
    }
    MathJax.typesetPromise()




    // update state of buttons
    if (document.getElementById('prevButton')) {
        document.getElementById('prevButton').disabled = (actualExercise === 0);
    }

    if (document.getElementById('nextButton')) {
        document.getElementById('nextButton').disabled = (actualExercise === exercises.length - 1);
    }

    // Update carousel items
    if (document.getElementById('carousel-inner')) {
        var carouselInner = document.getElementById('carousel-inner');
        carouselInner.innerHTML = ''; // Clear existing items
        exercise.exercise_steps.forEach(function(step, index) {
            var itemDiv = document.createElement('div');
            itemDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');
            itemDiv.innerHTML = `<div class="d-block w-100">${step}</div>`;
            carouselInner.appendChild(itemDiv);

        });
    }

    // create buttons
    var buttonsDiv = document.getElementById('buttons');


    buttonsDiv.innerHTML = ''; // delete old buttons
    for (var i = 0; i < exercise.buttons?.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-secondary');
        button.innerText = exercise.buttons[i];
        if (button.innerText === "vyňať pred zátvorku") {
            button.addEventListener('click', function (e) { 
                e.stopPropagation();
                factoring();

            });
        } else if (button.innerText === "substitúcia") {
            button.addEventListener('click', function (e) { 
                e.stopPropagation();
                substitution();

            });
        } else if (button.innerText === "rozložiť na súčet") {
            button.addEventListener('click', function (e) { 
                e.stopPropagation();
                dividing_sum();

            });

        } else if (button.innerText === "rozložiť na súčin") {
            button.addEventListener('click', function (e) { 
                e.stopPropagation();
                dividing_multi();

            });

        } else if (button.innerText === "zjednodušiť/upraviť") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                joining();

            });
        } else if (button.innerText === "zjednodušiť na mocninu") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                simplifyPowers();

            });
        } else if (button.innerText === "úprava na súčin") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                completingTheSquare();

            });
        } else if (button.innerHTML === "vzorec a^3+b^3") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                formulaA3B3();

            });
        } else if (button.innerText === "dosaď") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                putSubstitution();

            });
        } else if (button.innerText === "vyjadri korene") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                solveVariables();

            });
        } else if (button.innerText === "vydeliť rovnicu") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                divideEquation();

            });
        } else if (button.innerText === "presunúť na druhú stranu") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                flipOver();

            });
        } else if (button.innerText === "umocniť celú rovnicu") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                exponentiateEquation();

            });
        } else if (button.innerText === "vynásobiť rovnicu") {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                multipleEquation();

            });
        }


        buttonsDiv.appendChild(button);
    }



}


//load modal of showing all exercises
document.addEventListener('DOMContentLoaded', function () {
    const openModalExerciseButton = document.getElementById('openModalExerciseButton');
    const closeModalExerciseButton = document.getElementById('closeModalExerciseButton');
    const modalExercise = document.getElementById('modalExercise');
    const exerciseButtonsDiv = document.getElementById('exerciseButtons');

    openModalExerciseButton?.addEventListener('click', function () {
        modalExercise.style.display = 'flex';
        loadExerciseButtons();
    });

    closeModalExerciseButton?.addEventListener('click', function () {
        modalExercise.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modalExercise) {
            modalExercise.style.display = 'none';
        }
    });

    function loadExerciseButtons() {
        exerciseButtonsDiv.innerHTML = ''; // Clear previous buttons
        exercises.forEach((exercise, index) => {
            const button = document.createElement('button');
            if (localStorage.getItem(exercise.exercise_title) == "solved"){
                button.style.backgroundColor = '#bdf5a5';
            }
            else {
                button.style.backgroundColor = '#ff7272';

            }

            button.textContent = exercise.exercise_title;
            button.addEventListener('click', function () {
                // Call a function to switch to the corresponding exercise
                switchToExercise(index);
            });
            exerciseButtonsDiv.appendChild(button);
        });
    }

    function switchToExercise(index) {
        actualExercise = index; // set index on index of actual exercise
        updateExercise();
        modalExercise.style.display = 'none';
    }
});


function submitExercise() {
	const input = document.getElementById('exercise-input')
    var value = input.value.replaceAll('**', '^').replaceAll('=', '==')
    if (!value.includes('=')) {
        alert("Zadanie neobsahuje =");
        throw new Error("Value does not contain an equals sign.");
    }
    value = value.replace(/\++/g, "+").replace(/\-+/g, "-").replace(/\*+/g, "*").replace(/\^+/g, "^").replace(/\/+/g, "/").replace(/,/g, ".")

    if (!value) {
        return
    }

    if (actualExercise != -1 && actualExercise != 2 && actualExercise != 3 && actualExercise != 5 ) {
        expressionProblem = undefined
    }

    if (actualExercise != 2 && actualExercise != 3 && actualExercise != 5) {
        actualExercise = -1
    }

	try {
        for (line of value.split('\n')) {
            math.parse(line)
        }
        if (expressionProblem) {
            expressionProblemsHistory.push(expressionProblem)
        }

        if (expressionProblemsHistory.length >= 1) {
            document.getElementById('undo_button').disabled = false;
        }
        updateExercise(true)
	} catch(ex) {
		alert("Zlé zadanie", ex.message)
	}
}

document.getElementById('submit-exercise')?.addEventListener('click', submitExercise)

// add event listener on buttons
document.getElementById('prevButton')?.addEventListener('click', function () {
    document.getElementById('exercise-input').value = ''
    expressionProblemsHistory = []
    expressionProblem = undefined

    if (actualExercise > 0) {
        actualExercise--;
        updateExercise();
    }
});

document.getElementById('nextButton')?.addEventListener('click', function () {
    document.getElementById('exercise-input').value = ''
    expressionProblemsHistory = []
    expressionProblem = undefined

    if (actualExercise < exercises.length - 1) {
        actualExercise++;
        updateExercise();
    }
});

document.getElementById('answer_button')?.addEventListener('click', function() {
    openAnswerPopup(false, actualExercise);
});

document.getElementById('undo_button').addEventListener('click', function() {
    if (expressionProblemsHistory.length > 0){
        expressionProblem = expressionProblemsHistory.pop()
        const exercise_place = document.getElementById('exercise_place')
        exercise_place.innerHTML = ""
        writeHistory()

        create_buttons(expressionProblem)
    }
    if (expressionProblemsHistory.length < 1) {
        document.getElementById('undo_button').disabled = true;
    } else {
        document.getElementById('undo_button').disabled = false;
    }
})


document.getElementById('clear_button').addEventListener('click', function() {
    var result = confirm("Naozaj chceš všetko vymazať?");
            if (result) {
                if (actualExercise == -1 || actualExercise == 2 || actualExercise == 3 || actualExercise == 4) {
                    expressionProblem = undefined
                    document.getElementById('exercise-input').value = ''
                    expressionProblemsHistory = []
                }
                updateExercise()
                writeHistory()
            }
})


function openAnswerPopup(hideInput, actualExercise) {
    var popup = document.getElementById('answer_popup');
    var dynamicTextArea = document.getElementById('dynamicTextArea');
    var popupInputs = document.getElementById('popupInputs');
    var popupConfirmButton = document.getElementById('popupConfirmButton');

    if (!dynamicTextArea) {
        dynamicTextArea = document.createElement('textarea');
        dynamicTextArea.id = 'dynamicTextArea';
        popupInputs.appendChild(dynamicTextArea);
    }

    dynamicTextArea.value = "";
    selectedButtons = [];
    selectedButtonIndexes = [];

    if (hideInput) {
        dynamicTextArea.style.display = 'none';
    } else {
        dynamicTextArea.style.display = 'inline-block';
    }

    if (popup.style.display !== 'block') {
        popup.style.display = 'block';
    }

    if (actualExercise === 0) {
        popupInputs.innerHTML = `
            <label for="x1">y&nbsp;&nbsp;:</label>
            <input type="text" id="x1" name="x1"><br><br>
        `;
    } else if (actualExercise === 1) {
        popupInputs.innerHTML = `
            <label for="x1">x<sub>1</sub>&nbsp;&nbsp;:</label>
            <input type="text" id="x1" name="x1"><br><br>
            <label for="x2">x<sub>2</sub> :</label>
            <input type="text" id="x2" name="x2"><br><br>
            <label for="x3">x<sub>3</sub> :</label>
            <input type="text" id="x3" name="x3"><br><br>
        `;
    } else if (actualExercise === 2) {
        popupInputs.innerHTML = `
            <label for="x1">najmenšie z a):</label>
            <input type="text" id="x1" name="x1"><br><br>
            <label for="x2">najväčšie z a):&nbsp;&nbsp;</label>
            <input type="text" id="x2" name="x2"><br><br>
            <label for="x3">najmenšie z b):</label>
            <input type="text" id="x3" name="x3"><br><br>
            <label for="x3">najväčšie z b):&nbsp;&nbsp;</label>
            <input type="text" id="x4" name="x4"><br><br>
        `;
    } else if (actualExercise === 3) {
        popupInputs.innerHTML = `
            <label for="x1">najdlhší čas:&nbsp;&nbsp; </label>
            <input type="text" id="x1" name="x1"><br><br>
            <label for="x2">stredne dlhý čas:</label>
            <input type="text" id="x2" name="x2"><br><br>
            <label for="x3">najkratší čas:&nbsp;&nbsp;</label>
            <input type="text" id="x3" name="x3"><br><br>
        `;
    } else if (actualExercise === 4) { //'2,1/2','1/2,2']
        popupInputs.innerHTML = `
            <label for="x1">1.dvojica: [</label>
            <input type="text" id="x1" placeholder="x_1" name="x1">,<input type="text" placeholder="y_1" id="x2" name="x2">]<br><br>
            <label for="x2">2.dvojica : [</label>
            <input type="text" id="x3" placeholder="x_2" name="x3">,<input type="text" placeholder="x_2" id="x4" name="x4">]<br><br>
        `;
    } else if (actualExercise === 5) {
        popupInputs.innerHTML = `
            <label for="x1">Zaokrúhlené na celé čísla(nadol): </label>
            <input type="text" id="x1" name="x1"> metrov <br><br>
        `;//521
    }
    // Make the popup draggable
    dragElement(popup,2);
    //when depends on order of answer
    if (actualExercise === 2 || actualExercise === 3) {
        popupConfirmButton.onclick = function() { closeAnswerPopup(false,true); };
    } else {
        popupConfirmButton.onclick = function() { closeAnswerPopup(false); };
    }
}

//false if x(close) was not pressed
//true depends on order of answer
function closeAnswerPopup(ifXpressed, hideInput) {
    const popup = document.getElementById('answer_popup');
    const popupInputs = document.getElementById('popupInputs');

    var inputs = popupInputs.getElementsByTagName('input');
    var inputArray = Array.from(inputs).map(input => input.value.replace(/[^0-9\/-]/g, ''));

    var response = Array.from(inputs).map(input => input.value).join(", ");
    let booleanResult;

    if (hideInput) {
        booleanResult = compareArraysDependsOnOrder(inputArray, answerArray);
    } else {
        booleanResult = compareArrays(inputArray, answerArray);
    }
    if ((ifXpressed === false)){
        if (booleanResult){
            localStorage.setItem(exercises[actualExercise].exercise_title, 'solved');

            alert("Tvoja odpoveď " + response + " je správna!");
            if (actualExercise < exercises.length - 1) {
                actualExercise++;
                updateExercise();
            }
            else{
                actualExercise = 0;
                updateExercise();
            }
        }
        else {
            alert("Tvoja odpoveď " + response + " nie je správna, skús to znovu");
        }
    }

    popup.style.display = 'none';
}

function compareArraysDependsOnOrder(input, answer) {
    if (!Array.isArray(input) || !Array.isArray(answer)) {
        return false;
    }
    if (input.length !== answer.length) {
        return false;
    }
    const copy1 = input;
    const copy2 = answer;
    for (let i = 0; i < copy1.length; i++) {
        if (copy1[i] !== copy2[i]) {
            return false;
        }
    }
    return true;
}

function compareArrays(input, answer) {
    if (!Array.isArray(input) || !Array.isArray(answer)) {
        return false;
    }
    if (input.length !== answer.length) {
        return false;
    }
    const copy1 = input.slice().sort();
    const copy2 = answer.slice().sort();
    for (let i = 0; i < copy1.length; i++) {
        if (copy1[i] !== copy2[i]) {
            return false;
        }
    }
    return true;
}

// update exercise on load
window.onload = updateExercise;





