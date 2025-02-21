document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const dropZone = document.querySelector(".drop-zone");
    const dropText = document.getElementById("dropText");
    const cekSkorBtn = document.getElementById("cekSkor");

    let totalSkor = 0;
    let droppedItems = {};

    items.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            let score = parseInt(item.dataset.score);
            let category = item.dataset.category;
            let src = item.src;
            
            if (!isNaN(score) && category && src) {
                e.dataTransfer.setData("score", score);
                e.dataTransfer.setData("category", category);
                e.dataTransfer.setData("src", src);
            }
        });
    });

    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.style.border = "2px solid green";
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.style.border = "2px dashed gray";
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.style.border = "2px dashed gray";
        
        let score = parseInt(e.dataTransfer.getData("score"));
        let category = e.dataTransfer.getData("category");
        let src = e.dataTransfer.getData("src");
        
        if (dropText){
            dropText.style.display = "none";
        }
        if (!isNaN(score) && category && src) {
            if (!droppedItems[category]) {
                let newImg = document.createElement("img");
                newImg.src = src;
                newImg.classList.add("item");
                newImg.dataset.category = category;
                dropZone.appendChild(newImg);

                totalSkor += score;
                droppedItems[category] = { src, score };

                gsap.from(newImg, { y: -20, opacity: 0, duration: 0.5 });
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Kategori sudah dipilih!",
                    text: `Kategori ${category} sudah dipilih, silakan pilih yang lain.`,
                });
            }
        }
    });

    cekSkorBtn.addEventListener("click", () => {
        let message = `Skor Kamu: ${totalSkor}/100\n`;
        if (totalSkor > 70) {
            message += "Kamu memilih outfit yang sangat ramah lingkungan! 🌿";
        } else if (totalSkor > 40) {
            message += "Lumayan, tapi masih bisa lebih ramah lingkungan! ♻";
        } else {
            message += "Coba pilih outfit yang lebih eco-friendly! 🚨";
        }

        Swal.fire({
            title: "Hasil Skor",
            text: message,
            icon: totalSkor > 70 ? "success" : totalSkor > 40 ? "info" : "error",
            confirmButtonText: "Oke",
        });
    });
});
