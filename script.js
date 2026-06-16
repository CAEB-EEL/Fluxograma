let boxFocused = undefined;
let colourArray = ['#ffffff', '#fbc622', '#ff1f00', '#fab372', '#ffff88'];
let currentYear = '2026'; // Ano padrão ao abrir a página
let currentData = {};

// Função disparada ao clicar nas abas
function changeTab(year) {
    currentYear = year;
    
    // Atualiza a classe ativa dos botões visualmente
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('tab-' + year).classList.add('active');
    
    renderFlowchart();
}

function renderFlowchart() {
    // Carrega o currículo do ano selecionado
    currentData = curriculos[currentYear];
    boxFocused = undefined;

    // Limpa a tela (remove períodos e caixas antigas)
    const boxRows = document.getElementById("boxRows");
    boxRows.innerHTML = ""; 

    // Limpa as setas (linhas SVG), mas mantém a definição da ponta da seta (<defs>)
    const svgContainer = document.getElementById("svgContainer");
    const defs = svgContainer.querySelector("defs").outerHTML;
    svgContainer.innerHTML = defs;

    let available = {};
    let periodos = new Set([]);
    
    // Coleta todos os períodos existentes no ano atual
    for (const [key, value] of Object.entries(currentData)) {
        const periodo = (value.periodo - 1) || 0;
        periodos.add(periodo);
    }
    periodos = Array.from(periodos).sort((a, b) => a - b);

    // Cria as divisões de período dentro da div boxRows
    for (const periodo of periodos) {
        boxRows.appendChild(document.createElement("hr"));

        const h2 = document.createElement("h2");
        h2.innerText = `${periodo + 1}º Período`;
        boxRows.appendChild(h2);

        let rowContainer = document.createElement("div");
        rowContainer.setAttribute("id", "row" + periodo + "container");
        rowContainer.setAttribute("class", "rowContainer");
        boxRows.appendChild(rowContainer);
    }

    // Renderiza os blocos
    while(Object.keys(available).length < Object.keys(currentData).length) {
        for(let [key, value] of Object.entries(currentData)) {
            const rowNum = (value.periodo - 1) || 0;
            let possible = true;
            for(let req of value["requisito"]) {
                if(available[req] === undefined) {
                    possible = false;
                    break;
                }
            }
            if(available[key] === undefined && possible) {
                available[key] = rowNum;
                
                let box = document.createElement("div");
                box.setAttribute("id", key);
                box.setAttribute("class", "row" + rowNum + " modbox");
                box.setAttribute("style", "opacity: 1");

                let modName = document.createElement("span");
                let text = document.createTextNode(key);
                modName.appendChild(text);
                modName.classList.add("modTitle");
                
                box.appendChild(modName);

                document.getElementById("row" + rowNum + "container").appendChild(box);
                box.addEventListener("mouseover", boxHover);
                box.addEventListener("mouseleave", boxLeave);
                box.addEventListener("click", boxClick);
            }
        }
    }
    
    // Aguarda o HTML estabilizar e desenha as setas
    setTimeout(function() {
        drawArrows();
    }, 100);
}

function setup() {
    document.getElementsByTagName("body")[0].addEventListener("click", bgClick);
    renderFlowchart();
}

function forceBoxRehighlight(boxFocused) {
    if (boxFocused) {
        highlight(boxFocused);
    }
}

function drawArrows() {
    for(let [key, value] of Object.entries(currentData)) {
        let self = document.getElementById(key);
        if(value["requisito"].length) {
            for(let req of value["requisito"]) {
                let parent = document.getElementById(req);
                let clone = document.getElementById(req + key);
                
                if(!clone) {
                    clone = document.createElementNS("http://www.w3.org/2000/svg", 'line');
                    clone.setAttribute("style", "stroke: #b44c10; stroke-width: 1; opacity: 1");
                    clone.setAttribute("marker-end", "url(#arrow)");

                    clone.classList.add(req.replaceAll(' ', '_'));
                    clone.classList.add(key.replaceAll(' ', '_'));
                    clone.setAttribute("id", req + key);
                }
                
                let parentRect = parent.getBoundingClientRect();
                let selfRect = self.getBoundingClientRect();
                let x1 = parseFloat(parentRect.x + parentRect.width/2);
                let y1 = parseFloat(parentRect.bottom + document.documentElement.scrollTop - parent.parentElement.parentElement.offsetTop);
                let x2 = parseFloat(selfRect.x + selfRect.width/2);
                let y2 = parseFloat(selfRect.top + document.documentElement.scrollTop - self.parentElement.parentElement.offsetTop);
                
                clone.setAttribute("x1", x1 + "px");
                clone.setAttribute("y1", y1 + "px");
                clone.setAttribute("x2", x2 + "px");
                clone.setAttribute("y2", y2 + "px");

                document.getElementById("svgContainer").appendChild(clone);
            }
        }
    }
}

function boxHover(event) {
    if(!boxFocused) {
        highlight(event.target);
    }
}

function highlight(box) {
    while(!box.classList.contains("modbox")) {
        box = box.parentElement;
    }
    let id = box.id;

    box.style.border = "1px solid rgba(234,116,19,1)";

    let arrows = document.getElementsByTagName("line");
    for(let a = 0; a < arrows.length; a++) {
        arrows[a].style.opacity = 0.1;
    }
    
    for(let [key, value] of Object.entries(currentData)) {
        document.getElementById(key).style.opacity = 0.2;
    }
    
    highlightRecurseDown(id, 1);
    highlightRecurse(id, 1);
}

function highlightRecurseDown(id, depth) {
    document.getElementById(id).style.opacity = 1;
    for(let [key, value] of Object.entries(currentData)) {
        if(value["requisito"].includes(id)) {
            let keyr = key.replaceAll(' ', '_');
            let idr = id.replaceAll(' ', '_');
            let lines = document.getElementsByClassName(keyr + ' ' + idr);
            if(lines.length > 0) {
                lines[0].style.opacity = 1;
                lines[0].style.stroke = colourArray[colourArray.length - depth] || '#ffffff';
                lines[0].style.strokeWidth = 2;
            }
            document.getElementById(key).style.opacity = 1;
            highlightRecurseDown(key, depth+1);
        }
    }
}

function highlightRecurse(id, height) {
    document.getElementById(id).style.opacity = 1;
    for(let a = 0; a < currentData[id]["requisito"].length; a++) {
        let idr = id.replaceAll(' ', '_');
        let parentr = currentData[id]["requisito"][a].replaceAll(' ', '_');
        let lines = document.getElementsByClassName(idr + ' ' + parentr);
        if(lines.length > 0) {
            lines[0].style.opacity = 1;
            lines[0].style.stroke = colourArray[height] || '#ffffff';
            lines[0].style.strokeWidth = 2;
        }
        highlightRecurse(currentData[id]["requisito"][a], height + 1);
    }
}

function boxLeave() {
    if(boxFocused === undefined) {
        let boxes = document.getElementsByClassName("modbox");
        let arrows = document.getElementsByTagName("line");
        for(let a = 0; a < boxes.length; a++) {
            boxes[a].style.opacity = 1;
            boxes[a].style.border = "1px solid rgba(255,255,255,0)";
        }   
        for(let a = 0; a < arrows.length; a++) {
            arrows[a].style.opacity = 1;
            arrows[a].style.stroke = "#b44c10";
            arrows[a].style.strokeWidth = 1;
        }
    }
}

function bgClick(event) {
    let source = event.target;
    if(source.id === "svgContainer") {
        boxFocused = undefined;
        boxLeave();
    }
}

function boxClick(event) {
    boxFocused = undefined;
    boxLeave();
    let box = event.target;
    while(!box.classList.contains("modbox")) {
        box = box.parentElement;
    }
    boxFocused = box;
    highlight(box);
}

document.addEventListener('DOMContentLoaded', setup);
window.addEventListener('resize', drawArrows);
