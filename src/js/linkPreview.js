var links = document.getElementsByTagName("a");

for(let i = 0; i < links.length; i++){
    let link = links[i];
    link.addEventListener("mouseover", () => {
        if(link.dataset.previewCreated === undefined){
            createLinkPreview(link);
        }else{
            showLinkPreview(link);
        }
    });
    
    link.addEventListener("mouseleave", () => {
        hideLinkPreview(link);
    });
}


function createLinkPreview(link){
    console.log(link);
    var preview = document.createElement("iframe");
    preview.src = link.href;
    preview.classList.add("preview");
    link.appendChild(preview);
    link.dataset.previewCreated = "true";
}

function showLinkPreview(link){
    link.lastChild.style.display = "block";
}

function hideLinkPreview(link){
    link.lastChild.style.display = "none";
}