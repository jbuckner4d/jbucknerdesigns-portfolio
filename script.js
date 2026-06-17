// Example Tic Tac Toe Logic
const canvas = document.getElementById("ticTacToeCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, 300, 300);
}

function showInfo(event, infoId) {
  const infoBox = document.getElementById("info-box");
  let infoText = "";

  if (infoId === "info1") {
    infoText =
      "<h4>Terra Restaurant Menu</h4><p><span>Project Overview:</span><br>Upscale restaurant menu design focused on refined typography, clean spacing, and premium print presentation to support a polished dining experience.</p>";
  } else if (infoId === "info2") {
    infoText =
      "<h4>BRASA Brand Concept</h4><p><span>Project Overview:</span><br>A restaurant brand identity concept including menu layouts, color palette, typography, and marketing collateral designed to create a bold, modern dining brand.</p>";
  } else if (infoId === "info3") {
    infoText =
      "<h4>Midnight Melt Menu Board</h4><p><span>Project Overview:</span><br>A bold food truck menu board concept designed for fast readability, strong category structure, and high-impact presentation at the ordering window.</p>";
  } else if (infoId === "info4") {
    infoText =
      "<h4>The Crooked Spire Coffee Menu</h4><p><span>Project Overview:</span><br>A café menu concept using muted color, clean hierarchy, and warm visual styling to create a friendly neighborhood coffeehouse feel.</p>";
  } else if (infoId === "info5") {
    infoText =
      "<h4>The Barn Menu Design</h4><p><span>Project Overview:</span><br>A rustic restaurant menu design focused on comfort-food presentation, warm visual style, and easy customer navigation.</p>";
  } else if (infoId === "info6") {
    infoText =
      "<h4>The Huntsman | Brand & Menu Development</h4><p><span>Project Overview:</span><br>A complete restaurant concept including menu strategy, brand positioning, operational workflow, and visual presentation for a rustic Alaskan dining experience.</p>";
  } else if (infoId === "info7") {
    infoText =
      "<h4>Social Media Graphics</h4><p><span>Project Overview:</span><br>Restaurant-focused posts, ads, and promotional graphics designed for Facebook, Instagram, and local marketing campaigns.</p>";
  } else if (infoId === "info8") {
    infoText =
      "<h4>Digital Products & KDP</h4><p><span>Project Overview:</span><br>Restaurant operations templates, logbooks, and digital resources created for Etsy, Shopify, and Amazon KDP.</p>";
  }

  infoBox.innerHTML = infoText;
  infoBox.style.display = "block";
  infoBox.style.left = `${event.pageX + 20}px`;
  infoBox.style.top = `${event.pageY}px`;
  infoBox.classList.add("visible");
}

function hideInfo() {
  const infoBox = document.getElementById("info-box");
  infoBox.style.display = "none";
  infoBox.classList.remove("visible");
}
