const allProperties = [
  {
    id: 1,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "U$S 12.000",
    priceExtra: "",
    propertyType: "Oficina en Oeste, Santa Cruz",
    features: { ambientes: 6, bathrooms: 3, area: 2 },
    title: "Edificio En Alquiler",
    description:
      "UBICADO SOBRE DOBLE VIA LA GUARDIA ENTRE 5TO Y 6TO ANILLO 3302 MTS2 DE TERRENO. FRENTES SOBRE DOBLE VIA Y SOBRE CALLE ZAFIRO.1610 MTS2 CONSTRUIDOS EN 4 PLANTAS...",
    agency: "Ingrid Weise",
    agencyLogo: null,
  },
  {
    id: 2,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "U$S 500",
    priceExtra: "",
    propertyType: "Local Comercial en Centro, Santa Cruz",
    features: { ambientes: 6, bathrooms: 1, area: 60 },
    title: "Local Ideal Para Laboratorio, Estética O Centro De Fisioterapia",
    description:
      "Excelente local amplio. Ideal para centro de estética, fisioterapia, laboratorio o consultorio múltiple. *Ambientes individuales, con puertas plegables.* Vestidores* Sala de espera* Recepción con mue...",
    agency: "Inmobiliaria SC",
    agencyLogo: null,
  },
  {
    id: 3,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "U$S 172",
    priceExtra: "+ U$S 15 GC",
    propertyType: "Oficina en Oeste, Santa Cruz",
    features: { ambientes: 2, bathrooms: 2, area: 16 },
    title: "Oficina Nueva En Alquiler Oferta 172 $Us Con A/C. Entre 1er Y 2do Anillo",
    description:
      "NUEVA A ESTRENAR ::::ÚLTIMA Oficina Disponible en planta baja de bonita galería, ideal para profesionales independientes, consultorios.????16 m2 ubicada en planta baja con Aire ❄????Piso...",
    agency: "Bienes Raíces",
    agencyLogo: null,
  },
  {
    id: 4,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "U$S 360",
    priceExtra: "",
    propertyType: "Local industrial o galpón en Norte, Santa Cruz",
    features: { ambientes: 1, bathrooms: 1, area: 90 },
    title: "Galpón En Alquiler. Zona Mercado Mutualista",
    description:
      "GALPON especial para depósito de mercadería. ZONA MERCADO MUTUALISTA, 6.5 ancho x 12 fondo, 6.5 alto, portón amplio y alto, totalmente cerrado, baño y mezanine al fondo",
    agency: "Comerciales SC",
    agencyLogo: null,
  },
  {
    id: 5,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "U$S 400",
    priceExtra: "",
    propertyType: "Apartamento en Sur, Santa Cruz",
    features: { ambientes: 2, bathrooms: 1, area: 70 },
    title: "Bellísimo Departamento En Alquiler ????, Está Ubicado En El 3er Anillo Externo A La Avenida...",
    description:
      "Ofertón ❗❗❗ Dpto EN Alquiler disponible a partir del 20 diciembre TOTALMENTE EQUIPADO en condominio IYAMBAE???? listo para mudarse!!! Esta ubicado en el 3r anillo externo de la avenida...",
    agency: "Premium Homes",
    agencyLogo: null,
  },
  {
    id: 6,
    images: ["https://cdn4.fincaraiz.com.co/repo/img/th.outside384x275.e65865ae7c5d61f94bb3c92f24d202e95781056b.jpg"],
    type: "Destacado",
    price: "U$S 1.000",
    priceExtra: "+ U$S 110 GC",
    propertyType: "Apartamento en Equipetrol, Santa Cruz",
    features: { ambientes: 2, bathrooms: 3, area: 131 },
    title: "Departamento De 2 Dormitorios En Alquiler En El Corazon De Equipetrol",
    description:
      "Superficie construida: 130.99 m2 2 dormitorios2.5 BañosAmplia terrazaÁrea de lavanderíaCocina tipo americana equipada (cocina empotrada, campana extractora, horno y microondas).Todos lo...",
    agency: "Elite Propiedades",
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
