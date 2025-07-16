document.body.innerHTML += `
  <input type="file" id="upload" accept="image/*" multiple>
  <button id="process">Generate Listing</button>
  <button id="download">Download CSV</button>
  <pre id="output"></pre>
`;

document.getElementById("process").onclick = async () => {
  const output = document.getElementById("output");
  output.textContent = "Processing... (simulated OCR + MFC lookup)";

  // Simulated OCR/MFC data
  const listing = {
    manufacturer: "Taito",
    universe: "Hatsune Miku",
    character: "Hatsune Miku",
    collection: "Winter Image Ver.",
    height: "18 cm"
  };

  const title = \`\${listing.universe} \${listing.character} \${listing.collection} Figure \${listing.manufacturer} (B/1)\`;
  const description = \`Packaging Condition: B‑Sealed with minor damage (e.g., small dents or scratches) as shown in photos.
Item Condition: 1‑New with no visible flaws.
Manufacturer: \${listing.manufacturer}
Universe: \${listing.universe}
Character: \${listing.character}
Collection: \${listing.collection}
Height: \${listing.height}\`;

  output.textContent = \`eBay Title:\n\${title}\n\n\${description}\`;
  window.generatedListing = { title, description, listing };
};

document.getElementById("download").onclick = () => {
  if (!window.generatedListing) return alert("Please generate a listing first.");
  const { title, listing } = window.generatedListing;

  const csv = \`Title,Brand,Character,Franchise,Colour,Condition,Category,Price
"\${title}","\${listing.manufacturer}","\${listing.character}","\${listing.universe}","Multi","New","Collectables > Animation Art & Merchandise > Animation Merchandise > Figures & Statues",""
\`;

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "listing.csv";
  a.click();
};
