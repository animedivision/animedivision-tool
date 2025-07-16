document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const uploadLabel = document.createElement("label");
  uploadLabel.textContent = "Upload figure photo:";
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "block";

  const output = document.createElement("pre");
  output.textContent = "Waiting for image upload...";
  output.style.marginTop = "20px";

  fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    output.textContent = "Processing image...";

    // Simulate listing generation — replace with real OCR later
    const listing = `
Packaging Condition: B – Sealed with minor wear (light corner compression, small surface scuffs visible in photos)
Item Condition: 1 – Brand new, no visible flaws
Manufacturer: Banpresto
Universe: Jujutsu Kaisen
Character: Satoru Gojo
Collection: Break Time Collection
Height: 10 cm`;

    output.textContent = listing;
  });

  body.appendChild(uploadLabel);
  body.appendChild(fileInput);
  body.appendChild(output);
});

