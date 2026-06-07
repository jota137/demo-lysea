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
    category: "Aceites y balsamos",
    skin: "Piel seca o sensible",
    concern: "Doble limpieza",
    price: "24,99 EUR",
    description: "Aceite limpiador para retirar SPF o maquillaje antes de la segunda limpieza."
  },
  {
    brand: "Meisani",
    name: "Vitamin E-Raser Cleansing Oil",
    category: "Aceites y balsamos",
    skin: "Rutinas con SPF o maquillaje",
    concern: "Doble limpieza",
    price: "24,99 EUR",
    description: "Aceite limpiador para iniciar una doble limpieza suave al final del dia."
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
    brand: "Benton",
    name: "Snail Bee High Content Skin Toner",
    category: "Tonicos y esencias",
    skin: "Piel seca o apagada",
    concern: "Hidratacion y textura",
    price: "22,99 EUR",
    description: "Tonico hidratante para preparar la piel y aportar confort antes del tratamiento."
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
    brand: "Anua",
    name: "Heartleaf 77% Soothing Toner",
    category: "Serums y tratamientos",
    skin: "Piel sensible o mixta",
    concern: "Calma y equilibrio",
    price: "25,99 EUR",
    description: "Tratamiento calmante de heartleaf para pieles que buscan equilibrio y confort."
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
  },
  {
    brand: "Peach",
    name: "Peptide Repair Lip Balm (Cacao)",
    category: "Extras",
    skin: "Labios secos",
    concern: "Reparacion y confort",
    price: "24,99 EUR",
    description: "Balsamo labial reparador para completar la rutina diaria."
  },
  {
    brand: "Benton",
    name: "Goodbye Redness Centella Cica Mask",
    category: "Extras",
    skin: "Piel sensible o con rojeces",
    concern: "Calma puntual",
    price: "2,99 EUR",
    description: "Mascarilla de centella para momentos en los que la piel necesita calma extra."
  },
  {
    brand: "Village 11 Factory",
    name: "Miracle Youth Serum (Retinol)",
    category: "Extras",
    skin: "Piel madura",
    concern: "Lineas, textura y renovacion",
    price: "32,99 EUR",
    description: "Serum con retinol para rutinas de noche orientadas a textura y signos de edad."
  }
];

const productImages = {
  "COSRX Low pH Good Morning Gel Cleanser": ["product-images/cosrx-low-ph-good-morning-gel-cleanser-1.jpg", "product-images/cosrx-low-ph-good-morning-gel-cleanser-2.jpg", "product-images/cosrx-low-ph-good-morning-gel-cleanser-3.jpg", "product-images/cosrx-low-ph-good-morning-gel-cleanser-4.jpg"],
  "Klairs Rich Moist Foaming Cleanser": ["product-images/klairs-rich-moist-foaming-cleanser-1.jpg", "product-images/klairs-rich-moist-foaming-cleanser-2.jpg", "product-images/klairs-rich-moist-foaming-cleanser-3.jpg", "product-images/klairs-rich-moist-foaming-cleanser-4.jpg"],
  "Klairs Gentle Black Deep Cleansing Oil": ["product-images/klairs-gentle-black-deep-cleansing-oil-1.jpg", "product-images/klairs-gentle-black-deep-cleansing-oil-2.jpg", "product-images/klairs-gentle-black-deep-cleansing-oil-3.jpg", "product-images/klairs-gentle-black-deep-cleansing-oil-4.jpg"],
  "Meisani Vitamin E-Raser Cleansing Oil": ["product-images/meisani-vitamin-e-raser-cleansing-oil-1.jpg", "product-images/meisani-vitamin-e-raser-cleansing-oil-2.jpg", "product-images/meisani-vitamin-e-raser-cleansing-oil-3.jpg", "product-images/meisani-vitamin-e-raser-cleansing-oil-4.jpg"],
  "Anua Heartleaf 77 Soothing Toner": ["product-images/anua-heartleaf-77-soothing-toner-1.jpg", "product-images/anua-heartleaf-77-soothing-toner-2.jpg", "product-images/anua-heartleaf-77-soothing-toner-3.jpg", "product-images/anua-heartleaf-77-soothing-toner-4.jpg"],
  "Sioris Time Is Running Out Mist": ["product-images/sioris-time-is-running-out-mist-1.jpg", "product-images/sioris-time-is-running-out-mist-2.jpg", "product-images/sioris-time-is-running-out-mist-3.jpg", "product-images/sioris-time-is-running-out-mist-4.jpg"],
  "Benton Snail Bee High Content Skin Toner": ["product-images/benton-snail-bee-high-content-skin-toner-1.jpg", "product-images/benton-snail-bee-high-content-skin-toner-2.jpg", "product-images/benton-snail-bee-high-content-skin-toner-3.jpg", "product-images/benton-snail-bee-high-content-skin-toner-4.jpg"],
  "Anua Heartleaf 80% Soothing Ampoule": ["product-images/anua-heartleaf-80-soothing-ampoule-1.jpg", "product-images/anua-heartleaf-80-soothing-ampoule-2.jpg", "product-images/anua-heartleaf-80-soothing-ampoule-3.jpg", "product-images/anua-heartleaf-80-soothing-ampoule-4.jpg"],
  "Anua Heartleaf 77% Soothing Toner": ["product-images/anua-heartleaf-77-soothing-toner-serum-1.jpg", "product-images/anua-heartleaf-77-soothing-toner-serum-2.jpg", "product-images/anua-heartleaf-77-soothing-toner-serum-3.jpg", "product-images/anua-heartleaf-77-soothing-toner-serum-4.jpg"],
  "Klairs Rich Moist Soothing Serum": ["product-images/klairs-rich-moist-soothing-serum-1.jpg", "product-images/klairs-rich-moist-soothing-serum-2.jpg", "product-images/klairs-rich-moist-soothing-serum-3.jpg", "product-images/klairs-rich-moist-soothing-serum-4.jpg"],
  "Belif Super Drops Niacinamide & Vitamin C": ["product-images/belif-super-drops-niacinamide-vitamin-c-1.jpg", "product-images/belif-super-drops-niacinamide-vitamin-c-2.jpg", "product-images/belif-super-drops-niacinamide-vitamin-c-3.jpg", "product-images/belif-super-drops-niacinamide-vitamin-c-4.jpg"],
  "Rovectin Cica Care Clearing Ampoule": ["product-images/rovectin-cica-care-clearing-ampoule-1.jpg"],
  "Sioris Deep In A Barrier Cream": ["product-images/sioris-deep-in-a-barrier-cream-1.jpg", "product-images/sioris-deep-in-a-barrier-cream-2.jpg", "product-images/sioris-deep-in-a-barrier-cream-3.jpg", "product-images/sioris-deep-in-a-barrier-cream-4.jpg"],
  "Benton Snail Bee High Content Steam Cream": ["product-images/benton-snail-bee-high-content-steam-cream-1.jpg", "product-images/benton-snail-bee-high-content-steam-cream-2.jpg", "product-images/benton-snail-bee-high-content-steam-cream-3.jpg", "product-images/benton-snail-bee-high-content-steam-cream-4.jpg"],
  "COSRX Aloe Soothing Sun Cream SPF50+": ["product-images/cosrx-aloe-soothing-sun-cream-spf50-1.jpg", "product-images/cosrx-aloe-soothing-sun-cream-spf50-2.jpg", "product-images/cosrx-aloe-soothing-sun-cream-spf50-3.jpg", "product-images/cosrx-aloe-soothing-sun-cream-spf50-4.jpg"],
  "Peach Peptide Repair Lip Balm (Cacao)": ["product-images/peach-peptide-repair-lip-balm-1.jpg", "product-images/peach-peptide-repair-lip-balm-2.jpg", "product-images/peach-peptide-repair-lip-balm-3.jpg", "product-images/peach-peptide-repair-lip-balm-4.jpg"],
  "Benton Goodbye Redness Centella Cica Mask": ["product-images/goodbye-redness-centella-cica-mask-1.jpg", "product-images/goodbye-redness-centella-cica-mask-2.jpg", "product-images/goodbye-redness-centella-cica-mask-3.jpg", "product-images/goodbye-redness-centella-cica-mask-4.jpg"],
  "Village 11 Factory Miracle Youth Serum (Retinol)": ["product-images/village-11-factory-miracle-youth-serum-1.jpg", "product-images/village-11-factory-miracle-youth-serum-2.jpg", "product-images/village-11-factory-miracle-youth-serum-3.jpg", "product-images/village-11-factory-miracle-youth-serum-4.jpg"]
};

const routines = [
  {
    tag: "Equilibrio",
    title: "Piel grasa o mixta",
    goal: "Controlar brillo, poros y sensacion de desequilibrio sin resecar.",
    morning: [
      ["Limpiador", "COSRX - Low pH Good Morning Gel Cleanser"],
      ["Serum", "Anua - Heartleaf 80% Soothing Ampoule"],
      ["Protector solar", "COSRX Aloe Soothing Sun Cream SPF50+"]
    ],
    night: [
      ["Limpiador", "COSRX - Low pH Good Morning Gel Cleanser"],
      ["Tonico", "Anua Heartleaf 77 Soothing Toner"],
      ["Serum calmante", "Anua - Heartleaf 80% Soothing Ampoule"],
      ["Crema gel", "Sioris - Deep In A Barrier Cream"]
    ],
    packItems: [
      "COSRX Low pH Good Morning Gel Cleanser",
      "Anua Heartleaf 77 Soothing Toner",
      "Anua Heartleaf 80% Soothing Ampoule",
      "Sioris Deep In A Barrier Cream",
      "COSRX Aloe Soothing Sun Cream SPF50+"
    ]
  },
  {
    tag: "Hidratacion",
    title: "Piel seca o deshidratada",
    goal: "Reducir tirantez y reforzar barrera con capas comodas.",
    morning: [
      ["Limpiador suave", "Klairs - Rich Moist Foaming Cleanser"],
      ["Esencia o tonico hidratante", "Sioris - Time Is Running Out Mist"],
      ["Serum hidratante", "Klairs - Rich Moist Soothing Serum"],
      ["Crema", "Benton - Snail Bee High Content Steam Cream"],
      ["SPF", "Suntique - I'm Aqua Sun Essence SPF50"]
    ],
    night: [
      ["Si SPF o maquillaje aceite/balsamo", "Klairs - Gentle Black Deep Cleansing Oil"],
      ["Segunda limpieza", "Klairs - Rich Moist Foaming Cleanser"],
      ["Esencia", "Sioris - Time Is Running Out Mist"],
      ["Serum", "Klairs - Rich Moist Soothing Serum"],
      ["Crema", "Benton - Snail Bee High Content Steam Cream"]
    ],
    packItems: [
      "Klairs Rich Moist Foaming Cleanser",
      "Klairs Gentle Black Deep Cleansing Oil",
      "Sioris Time Is Running Out Mist",
      "Klairs Rich Moist Soothing Serum",
      "Benton Snail Bee High Content Steam Cream"
    ],
    pendingItems: ["SPF hidratante pendiente de confirmar"]
  },
  {
    tag: "Calma",
    title: "Piel sensible o con rojeces",
    goal: "Bajar irritacion visible y simplificar la rutina diaria.",
    morning: [
      ["Limpieza muy suave", "Klairs - Rich Moist Foaming Cleanser"],
      ["Producto calmante", "Anua Heartleaf 77 Soothing Toner"],
      ["Crema sencilla", "Benton - Aloe Propolis Soothing Gel"],
      ["SPF", "Purito Daily Go-To Sunscreen"]
    ],
    night: [
      ["Si SPF o maquillaje aceite/balsamo", "Klairs - Gentle Black Deep Cleansing Oil"],
      ["Limpieza", "Klairs - Rich Moist Foaming Cleanser"],
      ["Serum", "Rovectin - Cica Care Clearing Ampoule"],
      ["Crema barrera", "Benton - Aloe Propolis Soothing Gel"]
    ],
    packItems: [
      "Klairs Rich Moist Foaming Cleanser",
      "Klairs Gentle Black Deep Cleansing Oil",
      "Anua Heartleaf 77 Soothing Toner",
      "Rovectin Cica Care Clearing Ampoule",
      "Benton Aloe Propolis Soothing Gel"
    ],
    pendingItems: ["SPF suave pendiente de confirmar"]
  },
  {
    tag: "Glow",
    title: "Piel con manchas, apagada o madura",
    goal: "Aportar luz y trabajar tono irregular con constancia y SPF.",
    morning: [
      ["Limpiador", "Klairs - Rich Moist Foaming Cleanser"],
      ["Tonico o esencia", "Sioris - Time Is Running Out Mist"],
      ["Serum iluminador", "Belif - Super Drops 5% Niacinamide & Vitamin C"],
      ["Crema", "Benton - Snail Bee High Content Steam Cream"],
      ["SPF", "COSRX Aloe Soothing Sun Cream SPF50+"]
    ],
    night: [
      ["Limpieza", "Klairs - Gentle Black Deep Cleansing Oil"],
      ["Segunda limpieza", "Klairs - Rich Moist Foaming Cleanser"],
      ["Tratamiento", "Belif - Super Drops 5% Niacinamide & Vitamin C"],
      ["Crema", "Benton - Snail Bee High Content Steam Cream"]
    ],
    packItems: [
      "Klairs Rich Moist Foaming Cleanser",
      "Klairs Gentle Black Deep Cleansing Oil",
      "Sioris Time Is Running Out Mist",
      "Belif Super Drops Niacinamide & Vitamin C",
      "Benton Snail Bee High Content Steam Cream",
      "COSRX Aloe Soothing Sun Cream SPF50+"
    ]
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
const cartToggle = document.querySelector("#cartToggle");
const cartClose = document.querySelector("#cartClose");
const cartPanel = document.querySelector("#cartPanel");
const cartOverlay = document.querySelector("#cartOverlay");
const cartItems = document.querySelector("#cartItems");
const cartEmpty = document.querySelector("#cartEmpty");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const clearCartButton = document.querySelector("#clearCartButton");

const cart = [];

function parsePrice(price) {
  return Number(price.replace(" EUR", "").replace(",", "."));
}

function formatPrice(value) {
  return `${value.toFixed(2).replace(".", ",")} EUR`;
}

function normalizeName(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function productTitle(product) {
  return `${product.brand} ${product.name}`;
}

function displayCategory(product) {
  if (product.category === "Aceites y balsamos") return "Limpieza / aceite limpiador";
  return product.category;
}

function categoryIcon(product) {
  const icons = {
    "Limpiadores": '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3c4 4 6 7 6 11a6 6 0 0 1-12 0c0-4 2-7 6-11Z"></path></svg>',
    "Aceites y balsamos": '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3c4 4 6 7 6 11a6 6 0 0 1-12 0c0-4 2-7 6-11Z"></path><path d="M9 15c1.6 1.2 4.4 1.2 6 0"></path></svg>',
    "Tonicos y esencias": '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 3h6v4l3 4v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8l3-4V3Z"></path><path d="M8 13h8"></path></svg>',
    "Serums y tratamientos": '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 3h6v4l2 2v11H7V9l2-2V3Z"></path><path d="M10 13h4"></path></svg>',
    "Cremas hidratantes": '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 10h10l-1 10H8L7 10Z"></path><path d="M9 10V6a3 3 0 0 1 6 0v4"></path></svg>',
    "Protectores solares": '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1"></path></svg>',
    "Extras": '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3l2.4 5 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8L12 3Z"></path></svg>'
  };
  return icons[product.category] || icons.Extras;
}

function findProductPrice(name) {
  const product = findProductMatch(name);
  return product ? parsePrice(product.price) : 0;
}

function findProductMatch(name) {
  const target = normalizeName(name);
  return products.find((item) => {
    const title = normalizeName(productTitle(item));
    const shortName = normalizeName(item.name);
    return title.includes(target) || target.includes(title) || shortName.includes(target) || target.includes(shortName);
  });
}

function packPrice(routine) {
  return routine.packItems.reduce((total, item) => total + findProductPrice(item), 0);
}

function routineProductPrice(productName) {
  const product = findProductMatch(productName);
  return product ? product.price : "Pendiente";
}

function uniquePackItems(routine) {
  return [...new Set(routine.packItems)];
}

function openCart() {
  cartPanel.setAttribute("aria-hidden", "false");
  cartPanel.classList.add("visible");
  cartOverlay.hidden = false;
}

function closeCart() {
  cartPanel.setAttribute("aria-hidden", "true");
  cartPanel.classList.remove("visible");
  cartOverlay.hidden = true;
}

function addToCart(item) {
  const existing = cart.find((cartItem) => cartItem.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderCart();
  openCart();
}

function updateQuantity(id, delta) {
  const item = cart.find((cartItem) => cartItem.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart.splice(cart.indexOf(item), 1);
  }
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  cartCount.textContent = totalItems;
  cartTotal.textContent = formatPrice(totalPrice);
  cartEmpty.hidden = cart.length > 0;
  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <span>${formatPrice(item.price)}</span>
      </div>
      <div class="quantity-control">
        <button type="button" data-cart-minus="${item.id}" aria-label="Quitar unidad">-</button>
        <span>${item.quantity}</span>
        <button type="button" data-cart-plus="${item.id}" aria-label="Anadir unidad">+</button>
      </div>
    </div>
  `).join("");
}

function checkoutByWhatsApp() {
  if (!cart.length) return;
  const lines = cart.map((item) => `- ${item.quantity} x ${item.name} (${formatPrice(item.price * item.quantity)})`);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = encodeURIComponent(`Hola Lysea, quiero consultar este pedido:\n\n${lines.join("\n")}\n\nTotal estimado: ${formatPrice(total)}`);
  window.open(`https://wa.me/?text=${message}`, "_blank", "noreferrer");
}

function renderRoutines() {
  routineGrid.innerHTML = routines.map((routine) => `
    <article class="routine-card">
      <div>
        <span class="routine-tag">${routine.tag}</span>
        <h3>${routine.title}</h3>
        <p>${routine.goal}</p>
        <div class="routine-times">
          <div class="routine-time">
            <strong>Manana</strong>
            <ul>
              ${routine.morning.map(([step, product]) => `<li><span>${step}</span><em>${product}</em><small>${routineProductPrice(product)}</small></li>`).join("")}
            </ul>
          </div>
          <div class="routine-time">
            <strong>Noche</strong>
            <ul>
              ${routine.night.map(([step, product]) => `<li><span>${step}</span><em>${product}</em><small>${routineProductPrice(product)}</small></li>`).join("")}
            </ul>
          </div>
        </div>
        ${routine.pendingItems ? `<p class="routine-note">${routine.pendingItems.join(". ")}</p>` : ""}
        <div class="pack-breakdown">
          <strong>Incluye el pack</strong>
          <ul>
            ${uniquePackItems(routine).map((item) => `<li><span>${item}</span><em>${routineProductPrice(item)}</em></li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="pack-footer">
        <strong>${formatPrice(packPrice(routine))}</strong>
        <button class="button secondary" type="button" data-pack="${routine.title}">Anadir pack</button>
      </div>
    </article>
  `).join("");
}

function renderProducts(filter = "Todos") {
  const visible = products.filter((product) => {
    if (filter === "Todos") return true;
    if (filter === "Limpieza") return product.category === "Limpiadores" || product.category === "Aceites y balsamos";
    return product.category === filter;
  });
  productGrid.innerHTML = visible.map((product) => {
    const title = productTitle(product);
    const images = productImages[title] || [];
    return `
    <article class="product-card">
      <div class="product-visual">
        ${images.length ? `<img src="${images[0]}" alt="${title}" data-main-image="${title}">` : `<div class="image-pending"><span>Imagen pendiente</span></div>`}
      </div>
      ${images.length > 1 ? `
        <div class="product-thumbs" aria-label="Mas imagenes de ${title}">
          ${images.map((image, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-gallery-product="${title}" data-gallery-image="${image}" aria-label="Ver imagen ${index + 1}"><img src="${image}" alt=""></button>`).join("")}
        </div>
      ` : ""}
      <div class="product-body">
        <span class="product-category">${categoryIcon(product)}${displayCategory(product)}</span>
        <h3>${product.brand} ${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.skin} - ${product.concern}</p>
        <strong class="product-price">${product.price}</strong>
        <button class="button secondary" type="button" data-product="${productTitle(product)}">Anadir al carrito</button>
      </div>
    </article>
  `;
  }).join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

routineGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pack]");
  if (!button) return;
  const routine = routines.find((item) => item.title === button.dataset.pack);
  addToCart({
    id: `pack-${normalizeName(routine.title)}`,
    name: `Pack ${routine.title}`,
    price: packPrice(routine)
  });
});

productGrid.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-gallery-image]");
  if (thumb) {
    const card = thumb.closest(".product-card");
    const mainImage = card.querySelector("[data-main-image]");
    mainImage.src = thumb.dataset.galleryImage;
    card.querySelectorAll(".product-thumbs button").forEach((button) => button.classList.remove("active"));
    thumb.classList.add("active");
    return;
  }

  const button = event.target.closest("[data-product]");
  if (!button) return;
  const product = products.find((item) => productTitle(item) === button.dataset.product);
  addToCart({
    id: `product-${normalizeName(productTitle(product))}`,
    name: productTitle(product),
    price: parsePrice(product.price)
  });
});

cartItems.addEventListener("click", (event) => {
  const plus = event.target.closest("[data-cart-plus]");
  const minus = event.target.closest("[data-cart-minus]");
  if (plus) updateQuantity(plus.dataset.cartPlus, 1);
  if (minus) updateQuantity(minus.dataset.cartMinus, -1);
});

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
checkoutButton.addEventListener("click", checkoutByWhatsApp);
clearCartButton.addEventListener("click", () => {
  cart.splice(0, cart.length);
  renderCart();
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
renderCart();
