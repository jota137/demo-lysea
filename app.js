const products = [
  {
    brand: "COSRX",
    name: "Low pH Good Morning Gel Cleanser",
    category: "Limpiadores",
    skin: "Piel grasa o mixta",
    concern: "Grasa, poros e imperfecciones",
    price: "15,99 EUR",
    description: "Limpiador suave de pH bajo para una limpieza diaria sin sensacion agresiva."
  },
  {
    brand: "Klairs",
    name: "Rich Moist Foaming Cleanser",
    category: "Limpiadores",
    skin: "Piel seca o sensible",
    concern: "Tirantez y barrera cutanea",
    price: "17,99 EUR",
    description: "Espuma limpiadora confortable para rutinas que buscan suavidad e hidratacion."
  },
  {
    brand: "Klairs",
    name: "Gentle Black Deep Cleansing Oil",
    category: "Limpiadores",
    skin: "Piel seca o sensible",
    concern: "Doble limpieza",
    price: "24,99 EUR",
    description: "Aceite limpiador para retirar SPF o maquillaje antes de la segunda limpieza."
  },
  {
    brand: "Anua",
    name: "Heartleaf 77 Soothing Toner",
    category: "Tonicos y esencias",
    skin: "Piel grasa o sensible",
    concern: "Calma, rojeces y equilibrio",
    price: "25,99 EUR",
    description: "Tonico calmante para equilibrar la piel y preparar los siguientes pasos."
  },
  {
    brand: "Sioris",
    name: "Time Is Running Out Mist",
    category: "Tonicos y esencias",
    skin: "Piel seca o deshidratada",
    concern: "Hidratacion y confort",
    price: "22,99 EUR",
    description: "Mist hidratante para aportar una capa ligera de confort durante la rutina."
  },
  {
    brand: "Anua",
    name: "Heartleaf 80% Soothing Ampoule",
    category: "Serums y tratamientos",
    skin: "Piel grasa o mixta",
    concern: "Equilibrio e imperfecciones",
    price: "25,99 EUR",
    description: "Ampolla ligera orientada a calmar y acompanar pieles con tendencia a desequilibrarse."
  },
  {
    brand: "Klairs",
    name: "Rich Moist Soothing Serum",
    category: "Serums y tratamientos",
    skin: "Piel seca o deshidratada",
    concern: "Hidratacion y barrera",
    price: "23,99 EUR",
    description: "Serum hidratante para rutinas que necesitan reforzar confort y elasticidad."
  },
  {
    brand: "Belif",
    name: "Super Drops Niacinamide & Vitamin C",
    category: "Serums y tratamientos",
    skin: "Manchas y luminosidad",
    concern: "Tono apagado",
    price: "32,99 EUR",
    description: "Tratamiento iluminador para pieles que buscan un aspecto mas uniforme."
  },
  {
    brand: "Rovectin",
    name: "Cica Care Clearing Ampoule",
    category: "Serums y tratamientos",
    skin: "Piel sensible o con rojeces",
    concern: "Calma y barrera",
    price: "25,99 EUR",
    description: "Ampolla calmante para acompanar piel sensible, reactiva o con rojeces."
  },
  {
    brand: "Sioris",
    name: "Deep In A Barrier Cream",
    category: "Cremas hidratantes",
    skin: "Piel grasa o mixta",
    concern: "Barrera y equilibrio",
    price: "34,99 EUR",
    description: "Crema barrera para sellar la rutina sin perder enfoque en equilibrio."
  },
  {
    brand: "Benton",
    name: "Snail Bee High Content Steam Cream",
    category: "Cremas hidratantes",
    skin: "Piel seca o deshidratada",
    concern: "Hidratacion profunda",
    price: "23,99 EUR",
    description: "Crema nutritiva para pieles que necesitan mas confort y sensacion de reparacion."
  },
  {
    brand: "Benton",
    name: "Aloe Propolis Soothing Gel",
    category: "Cremas hidratantes",
    skin: "Piel sensible o con rojeces",
    concern: "Calma ligera",
    price: "21,99 EUR",
    description: "Gel calmante para sellar rutinas sensibles sin textura pesada."
  },
  {
    brand: "COSRX",
    name: "Aloe Soothing Sun Cream SPF50+",
    category: "Protectores solares",
    skin: "Piel grasa o mixta",
    concern: "Proteccion diaria",
    price: "21,99 EUR",
    description: "Protector solar diario con textura comoda para cerrar la rutina de manana."
  }
];

const routines = [
  {
    tag: "Equilibrio",
    title: "Piel grasa o mixta",
    goal: "Controlar brillo, poros y sensacion de desequilibrio sin resecar.",
    steps: ["COSRX Low pH Cleanser", "Anua Heartleaf Toner", "Anua Heartleaf Ampoule", "Sioris Barrier Cream", "COSRX Aloe SPF50+"]
  },
  {
    tag: "Hidratacion",
    title: "Piel seca o deshidratada",
    goal: "Reducir tirantez y reforzar barrera con capas comodas.",
    steps: ["Klairs Foaming Cleanser", "Sioris Mist", "Klairs Rich Moist Serum", "Benton Steam Cream", "SPF hidratante"]
  },
  {
    tag: "Calma",
    title: "Piel sensible o con rojeces",
    goal: "Bajar irritacion visible y simplificar la rutina diaria.",
    steps: ["Klairs Cleanser", "Anua Heartleaf Toner", "Rovectin Cica Ampoule", "Benton Aloe Propolis Gel", "SPF suave"]
  },
  {
    tag: "Glow",
    title: "Manchas y luminosidad",
    goal: "Aportar luz y trabajar tono irregular con constancia y SPF.",
    steps: ["Limpieza suave", "Esencia hidratante", "Belif Niacinamide + Vitamin C", "Crema ligera", "Protector solar diario"]
  }
];

const recommendations = {
  mixta: {
    title: "Piel grasa o mixta",
    copy: "Te conviene una rutina ligera: limpiador suave, tonico equilibrante, serum calmante, crema barrera ligera y SPF."
  },
  seca: {
    title: "Piel seca o deshidratada",
    copy: "Prioriza hidratacion por capas: limpieza suave, esencia o mist, serum hidratante, crema confortable y protector solar."
  },
  sensible: {
    title: "Piel sensible o con rojeces",
    copy: "Ve a lo simple: limpieza muy suave, tonico calmante, ampolla cica, gel o crema sencilla y SPF tolerable."
  },
  glow: {
    title: "Manchas y luminosidad",
    copy: "Combina antioxidantes o niacinamida con hidratacion y protector solar diario. Sin SPF, la rutina se queda corta."
  }
};

const routineGrid = document.querySelector("#routineGrid");
const productGrid = document.querySelector("#productGrid");
const filters = document.querySelectorAll(".filter");
const quizButton = document.querySelector("#quizButton");
const quizResult = document.querySelector("#quizResult");

function renderRoutines() {
  routineGrid.innerHTML = routines.map((routine) => `
    <article class="routine-card">
      <div>
        <span class="routine-tag">${routine.tag}</span>
        <h3>${routine.title}</h3>
        <p>${routine.goal}</p>
        <ul>
          ${routine.steps.map((step) => `<li>${step}</li>`).join("")}
        </ul>
      </div>
      <a class="button secondary" href="#asesoria">Consultar pack</a>
    </article>
  `).join("");
}

function renderProducts(filter = "Todos") {
  const visible = filter === "Todos" ? products : products.filter((product) => product.category === filter);
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-visual" aria-hidden="true"><div class="bottle"></div></div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.brand} ${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.skin} · ${product.concern}</p>
        <strong class="product-price">${product.price}</strong>
      </div>
    </article>
  `).join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

quizButton.addEventListener("click", () => {
  const skin = document.querySelector("#skinFeel").value;
  const level = document.querySelector("#routineLevel").value;
  const budget = document.querySelector("#budget").value;
  const recommendation = recommendations[skin];

  quizResult.classList.add("visible");
  quizResult.innerHTML = `
    <strong>${recommendation.title}</strong>
    <span>${recommendation.copy} Rutina ${level} con presupuesto ${budget}: empieza por los pasos esenciales y completa con tratamiento si tu piel lo tolera.</span>
  `;
});

renderRoutines();
renderProducts();
