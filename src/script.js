const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const zone = document.querySelector(".buttonZone");
const closeModal = document.getElementById("closeModal");
noButton.addEventListener ("mouseover", () => {
    
    if(noButton.style.position !== "absolute"){
        noButton.style.position = "absolute";
     
        const rect = noButton.getBoundingClientRect();
        const zoneRect = zone.getBoundingClientRect();

        noButton.style.top = `${rect.top - zoneRect.top}px`;
        noButton.style.left = `${rect.left - zoneRect.left}px`;
    }

    const zoneWidth = zone.offsetWidth;
    const zoneHeight = zone.offsetHeight;

    const noButtonWidth = noButton.offsetWidth;
    const noButtonHeight = noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (zoneWidth - noButtonWidth));
    const randomY = Math.floor(Math.random() * (zoneHeight - noButtonHeight)); 

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    noButton.style.transition = "top 0.1s ease-in-out, left 0.5s ease-in-out";
});

noButton.addEventListener ("click", () => {
    
    if(noButton.style.position !== "absolute"){
        noButton.style.position = "absolute";
     
        const rect = noButton.getBoundingClientRect();
        const zoneRect = zone.getBoundingClientRect();

        noButton.style.top = `${rect.top - zoneRect.top}px`;
        noButton.style.left = `${rect.left - zoneRect.left}px`;
    }

    const zoneWidth = zone.offsetWidth;
    const zoneHeight = zone.offsetHeight;

    const noButtonWidth = noButton.offsetWidth;
    const noButtonHeight = noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (zoneWidth - noButtonWidth));
    const randomY = Math.floor(Math.random() * (zoneHeight - noButtonHeight)); 

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener ("click", () => {
   modal.classList.add("open");
});

closeModal.addEventListener ("click", () => {
    modal.classList.remove("open");
});
