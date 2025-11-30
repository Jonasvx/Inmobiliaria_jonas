const allProperties = [
  {
    id: 1,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "bs 100",
    priceExtra: "",
    propertyType: "Oficina",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "ubicado en una casa",
    agency: "Ever",
    agencyLogo: null,
  },
  {
    id: 2,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "bs 100",
    priceExtra: "",
    propertyType: "Oficina",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "ubicado en una casa",
    agency: "Ever",
    agencyLogo: null,
  },
  {
    id: 3,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "bs 100",
    priceExtra: "",
    propertyType: "Oficina",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "ubicado en una casa",
    agency: "Ever",
    agencyLogo: null,
  },
  {
    id: 4,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "bs 100",
    priceExtra: "",
    propertyType: "Oficina",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "ubicado en una casa",
    agency: "Ever",
    agencyLogo: null,
  },
  {
    id: 5,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "bs 100",
    priceExtra: "",
    propertyType: "Oficina",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "ubicado en una casa",
    agency: "Ever",
    agencyLogo: null,
  },
  {
    id: 6,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "bs 100",
    priceExtra: "",
    propertyType: "Oficina",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "ubicado en una casa",
    agency: "Ever",
    agencyLogo: null,
  },
]

function renderProperties(propertiesToRender) {
  const container = document.getElementById("properties-container")
  container.innerHTML = ""

  propertiesToRender.forEach((property, index) => {
    const propertyCard = document.createElement("div")
    propertyCard.className = "property-card"
    propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                <div class="property-badge">
                    <i class="fas fa-star"></i> DESTACADO
                </div>
                <button class="property-favorite" onclick="toggleFavorite(${property.id})">
                    <i class="far fa-heart"></i>
                </button>
                <button class="image-nav prev"><i class="fas fa-chevron-left"></i></button>
                <button class="image-nav next"><i class="fas fa-chevron-right"></i></button>
                <div class="image-counter">1 / ${property.images.length + Math.floor(Math.random() * 10) + 1}</div>
            </div>
            <div class="property-details">
                <div class="property-agency-header">
                    <span class="agency-name">${property.agency}</span>
                    ${property.agencyLogo ? `<img src="${property.agencyLogo}" alt="${property.agency}" class="agency-logo">` : ""}
                </div>
                <div class="property-price">
                    <span class="currency">U$S</span> ${property.price.replace("U$S ", "")}
                    ${property.priceExtra ? `<span class="price-extra">${property.priceExtra}</span>` : ""}
                </div>
                <div class="property-location">${property.propertyType}</div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-home"></i> ${property.features.ambientes} Ambientes
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i> ${property.features.bathrooms} Baño${property.features.bathrooms > 1 ? "s" : ""}
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i> ${property.features.area} m²
                    </div>
                </div>
                <h3 class="property-title">${property.title}</h3>
                <p class="property-description">${property.description}</p>
                <div class="property-actions">
                    <button class="contact-btn primary">
                        <i class="fas fa-envelope"></i> Contactar
                    </button>
                    <a href="tel:+591" class="contact-btn secondary">
                        <i class="fas fa-phone"></i> Llamar
                    </a>
                    <a href="https://wa.me/" class="contact-btn whatsapp">
                        <i class="fab fa-whatsapp"></i> Whatsapp
                    </a>
                </div>
            </div>
        `

    container.appendChild(propertyCard)
  })
}

function toggleFavorite(id) {
  const btn = event.target.closest(".property-favorite")
  btn.querySelector("i").classList.toggle("far")
  btn.querySelector("i").classList.toggle("fas")
  btn.classList.toggle("active")
}

document.addEventListener("DOMContentLoaded", () => {
  renderProperties(allProperties)

  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      if (!e.target.closest(".more-filters")) {
        document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"))
        pill.classList.add("active")
      }
    })
  })
})
