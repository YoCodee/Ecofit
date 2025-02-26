// Deklarasi produk di awal agar bisa digunakan di mana saja
const products = [
  {
    id: 1,
    Title: "Shirt Polos Berkera Cream",
    Price: "29000",
    PriceBefore: "110000",
    Desc: "Description of Product 1",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m0eg42o06bto74.webp",
    category: "Baju",
    Size: "M",
  },
  {
    id: 2,
    Title: "Kaos Distro Cowok",
    Price: "48200",
    PriceBefore: "102000",
    Desc: "Description of Product 2",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r992-lwmqdy8fl6nxf8.webp",
    category: "Baju",
    Size: "XL",
  },
  {
    id: 3,
    Title: "Kemeja Lengan Panjang",
    Price: "78200",
    PriceBefore: "230000",
    Desc: "Description of Product 3",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r992-lm3993r34r6pc3.webp",
    category: "Outer",
    Size: "XL",
  },
  {
    id: 4,
    Title: "Celana Jogger Pria",
    Price: "97200",
    PriceBefore: "178000",
    Desc: "Celana Korean Style",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lv8r7h6oft5jed.webp",
    category: "Celana",
    Size: "L",
  },
  {
    id: 5,
    Title: "Topi",
    Price: "56200",
    PriceBefore: "111000",
    Desc: "Topi",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lsas60ie1n3b63.webp",
    category: "Aksesoris",
    Size: "L",
  },
  {
    id: 6,
    Title: "Jaket Bomper",
    Price: "232000",
    PriceBefore: "455000",
    Desc: "Jaket Bomper Bolak Balik",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qukw-limkogcy8cbb68.webp",
    category: "Jaket",
    Size: "XL",
  },
  {
    id: 7,
    Title: "Jam Tangan Casio Analog",
    Price: "890200",
    PriceBefore: "1100000",
    Desc: "Description of Product 3",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lm4k1ljh7ulwdb@resize_w450_nl.webp",
    category: "Aksesoris",
    Size: "XL",
  },
  {
    id: 8,
    Title: "Blouse Shirt Kemeja Remaja Wanita",
    Price: "89200",
    PriceBefore: "129000",
    Desc: "Kemeja Atas Wanita",
    image:
      "https://down-id.img.susercontent.com/file/268734fd643c82d4465e1df1428d52f8.webp",
    category: "Baju",
    Size: "M",
  },
  {
    id: 9,
    Title: "Baju Atasan Pendek Wanita",
    Price: "78200",
    PriceBefore: "99000",
    Desc: "Baju Top Wanita",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lyrhjvstqw8dd7.webp",
    category: "Baju",
    Size: "XS",
  },
  {
    id: 10,
    Title: "Adison Top Baju Wanita",
    Price: "240200",
    PriceBefore: "345000",
    Desc: "Baju Atasan Wanita",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m52wyds6l39v93@resize_w450_nl.webp",
    category: "Baju",
    Size: "M",
  },
  {
    id: 11,
    Title: "Kemeja Blouse Atasan Wanita",
    Price: "84200",
    PriceBefore: "123000",
    Desc: "Kemeja Wanita",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lsmo948wh7hw9c.webp",
    category: "Outer",
    Size: "M",
  },
  {
    id: 12,
    Title: "Rok Wanita",
    Price: "66200",
    PriceBefore: "98000",
    Desc: "Rok Wanita",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98s-ltdometjgzt562.webp",
    category: "Celana",
    Size: "M",
  },
  {
    id: 13,
    Title: "Outer Kemeja Wanita",
    Price: "111200",
    PriceBefore: "168000",
    Desc: "Outer Wanita",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r991-lsnpoxoem5aec5.webp",
    category: "Outer",
    Size: "XL",
  },
  {
    id: 14,
    Title: "Kalung Wanita",
    Price: "78200",
    PriceBefore: "230000",
    Desc: "Aksesoris Wanita",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lx2epfs0rx3vdd@resize_w450_nl.webp",
    category: "Aksesoris",
    Size: "L",
  },
];

const exchangeProducts = [
  {
    id: 1,
    Title: "Baju Muslim Second",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m2ttrigy94jj13.webp",
    category: "Baju",
    Size: "XL",
  },
  {
    id: 2,
    Title: "Baju Kasual Second ",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/ae0a567777ce42ca153146b01a032e2f@resize_w450_nl.webp",
    category: "Baju",
    Size: "L",
  },
  {
    id: 3,
    Title: "Preloved Baju",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rasb-m6445urp19c2d0@resize_w450_nl.webp",
    category: "Baju",
    Size: "L",
  },
  {
    id: 4,
    Title: "PRELOVED ATASAN WANITA DEWASA ",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m4rdbc42f0d28f@resize_w450_nl.webp",
    category: "Baju",
    Size: "M",
  },
  {
    id: 5,
    Title: "Baju Pria Second (Putih)",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m1f3vio7wstjba@resize_w450_nl.webp",
    category: "Baju",
    Size: "L",
  },
  {
    id: 6,
    Title: "Baju Pria Second (Hitam) ",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m1f3vio810iv0b.webp",
    category: "Baju",
    Size: "L",
  },
  {
    id: 7,
    Title: "Shirt Panama Misty",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r992-ltbz74vhg39564@resize_w450_nl.webp",
    category: "Baju",
    Size: "L",
  },
  {
    id: 8,
    Title: "Shirt Tropical Black ",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7qul8-ljf44fr4mu0r2d@resize_w450_nl.webp",
    category: "Baju",
    Size: "XL",
  },
  {
    id: 9,
    Title: "T-Shirt Combine Whiteline Flow ",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r991-lorqzmj5sw8370.webp",
    category: "Baju",
    Size: "L",
  },
  {
    id: 10,
    Title: "Russ Sweater Crewneck Pria ",
    Price: "Gratis",
    image:
      "https://down-id.img.susercontent.com/file/69b72f76398101fe927e561858651ffb@resize_w450_nl.webp",
    category: "Outer",
    Size: "L",
  },
];

let cart = [];
let userPoints = localStorage.getItem("userPoints") ? parseInt(localStorage.getItem("userPoints")) : 0;

// Fungsi untuk memperbarui tampilan poin
function updatePointsDisplay() {
    let pointsContainer = document.getElementById("user-points");
    if (!pointsContainer) {
        pointsContainer = document.createElement("p");
        pointsContainer.id = "user-points";
        pointsContainer.style.fontWeight = "bold";
        pointsContainer.style.fontSize = "18px";
        document.body.insertBefore(pointsContainer, document.body.firstChild);
    }
    pointsContainer.innerText = `Poin Anda: ${userPoints}`;
}

// Fungsi untuk menambahkan poin setelah tukar baju
function addPoints(points) {
    userPoints += points;
    localStorage.setItem("userPoints", userPoints);
    updatePointsDisplay();
}

// Fungsi untuk mengurangi poin saat belanja di marketplace
function deductPoints(points) {
    if (userPoints >= points) {
        userPoints -= points;
        localStorage.setItem("userPoints", userPoints);
        updatePointsDisplay();
        return true;
    } else {
        Swal.fire("Gagal!", "Poin tidak mencukupi!", "error");
        return false;
    }
}

// Perbarui UI saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    updatePointsDisplay();
});
document.addEventListener("DOMContentLoaded", function () {
  const marketBtn = document.getElementById("market-btn");
  const tukarBeliBtn = document.getElementById("tukar-beli-btn");
  const categoryFilters = document.querySelectorAll(".category-filter");
  const sizeFilters = document.querySelectorAll(".size-filter");

  marketBtn.addEventListener("click", function () {
    displayProducts(products);
  });

  tukarBeliBtn.addEventListener("click", function () {
    displayProducts(exchangeProducts, true);
  });

  categoryFilters.forEach((checkbox) =>
    checkbox.addEventListener("change", filterProducts)
  );
  sizeFilters.forEach((checkbox) =>
    checkbox.addEventListener("change", filterProducts)
  );

  displayProducts(products);
});

function displayProducts(productArray, isExchange = false) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  productArray.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("card");

    productDiv.innerHTML = `
   
      <img src="${product.image}" alt="${product.Title}">
      <h1 class="judulcuba">${product.Title}</h1>
      <h6>Kategori: ${product.category}</h6>
      ${
        isExchange
          ? `  <p class="Harga">Harga: ${product.Price}</p>`
          : `  <p class="Harga">Harga: Rp ${product.Price}</p>`
      }
    
      ${
        isExchange
          ? `<button class="tukar-beli-btn" data-id="${product.id}">Tukar</button>`
          : `<button class="add-to-cart" data-id="${product.id}">Tambah ke Keranjang</button>`
      }
    `;

    productList.appendChild(productDiv);
  });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      addToCart(parseInt(this.getAttribute("data-id")));
    });
  });

  document.querySelectorAll(".tukar-beli-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const product = exchangeProducts.find(
        (p) => p.id === parseInt(this.getAttribute("data-id"))
      );
      showTukarBeliForm(product);
    });
  });
}

function filterProducts() {
  const selectedCategories = Array.from(
    document.querySelectorAll(".category-filter:checked")
  ).map((c) => c.value);
  const selectedSizes = Array.from(
    document.querySelectorAll(".size-filter:checked")
  ).map((s) => s.value);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (selectedSizes.length === 0 || selectedSizes.includes(product.Size))
  );

  displayProducts(filteredProducts);
}

function addToCart(productId) {
  const allProducts = [...products, ...exchangeProducts];
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceContainer = document.getElementById("total-price");
  cartItemsContainer.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.innerHTML = `<p>${item.Title} x ${item.quantity} = Rp. ${
      item.Price * item.quantity
    } </p>`;
    cartItemsContainer.appendChild(cartItemDiv);
    totalPrice += item.Price * item.quantity;
  });

  totalPriceContainer.textContent = totalPrice;
}
let tukarBeliData = [];

function showTukarBeliForm(product) {
  const formContainer = document.createElement("div");
  formContainer.classList.add("modal");

  formContainer.innerHTML = `
      <div class="modal-content">
          <div class="modal">
              <span class="close-btn">&times;</span>
              <h3 class="judulcuba">Tukar ${product.Title}</h3>
              <form id="tukarBeliForm">
                  <label>Nama:</label>
                  <input type="text" id="name" required>

                  <label>Nomor HP:</label>
                  <input type="text" id="phone" required>

                  <label>Upload Bukti:</label>
                  <input type="file" id="file" accept=".jpg, .png" required>

                  <button type="submit">Kirim</button>
                  <button type="button" class="close-btn">Batal</button>
              </form>
          </div>
      </div>
  `;

  document.body.appendChild(formContainer);

  document.querySelectorAll(".close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
          document.body.removeChild(formContainer);
      });
  });

  document.getElementById("tukarBeliForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const file = document.getElementById("file").files[0];

      if (!name || !phone || !file) {
          Swal.fire("Oops...", "Semua kolom harus diisi!", "error");
          return;
      }

      tukarBeliData.push({
        name,
        phone,
        product: product.Title,
        file: file.name, // Simpan nama file yang di-upload
      });

      Swal.fire({
          icon: "success",
          title: "Permintaan Berhasil Dikirim!",
          html: `
              <p><strong>Nama:</strong> ${name}</p>
              <p><strong>Nomor HP:</strong> ${phone}</p>
              <p><strong>Barang Ditukar:</strong> ${product.Title}</p>
              <p><strong>File:</strong> ${file.name}</p>
              <p>Mohon tunggu konfirmasi dari admin.</p>
          `,
          confirmButtonText: "OK",
      });

      // Tambahkan poin setelah berhasil menukar barang
      addPoints(10); // Setiap tukar baju dapat 10 poin

      document.body.removeChild(formContainer);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.getElementById("checkout-btn");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", showCheckoutModal);
  } else {
    console.error("Tombol checkout tidak ditemukan!");
  }
});

function showCheckoutModal() {
  if (cart.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Keranjang Kosong",
      text: "Tambahkan produk terlebih dahulu!",
    });
    return;
  }

  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content" >
      <div class="modal" style="position: relative; max-width: 500px; margin: auto;">
        <span class="close-btn" style="position: absolute; top: 10px; right: 10px; cursor: pointer;">&times;</span>
        <h3 class="judulcuba" style="text-align: center; font-weight: bold; margin-bottom: 20px;">Checkout</h3>
        <form id="checkoutForm">
          <label style="display: block; margin-bottom: 5px;">Nama:</label>
          <input type="text" id="checkout-name" required style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
          
          <label style="display: block; margin-bottom: 5px;">Nomor HP:</label>
          <input type="number" id="checkout-phone" required style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">
          
          <label style="display: block; margin-bottom: 5px;">Metode Pembayaran:</label>
          <select id="checkout-payment" required style="width: 100%; padding: 8px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px;">
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="E-Wallet">E-Wallet</option>
            <option value="COD">COD (Bayar di Tempat)</option>
          </select>
          
          <button type="submit" style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 10px;">Bayar Sekarang</button>
          <button type="button" class="close-btn" style="width: 100%; padding: 10px; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Batal</button>
        </form>
      </div>
    </div>
    
  `;

  document.body.appendChild(modal);

  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.removeChild(modal);
    });
  });

  document
    .getElementById("checkoutForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("checkout-name").value;
      const phone = document.getElementById("checkout-phone").value;
      const paymentMethod = document.getElementById("checkout-payment").value;

      if (!name || !phone || !paymentMethod) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Semua kolom harus diisi!",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Checkout Berhasil!",
        html: `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Nomor HP:</strong> ${phone}</p>
        <p><strong>Metode Pembayaran:</strong> ${paymentMethod}</p>
        <p>Terima kasih telah berbelanja!</p>
      `,
        confirmButtonText: "OK",
      });

      cart = [];
      updateCart();
      document.body.removeChild(modal);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const exportPdfBtn = document.getElementById("export-pdf");

  exportPdfBtn.addEventListener("click", function () {
    if (tukarBeliData.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Tidak Ada Data",
        text: "Belum ada transaksi Tukar Beli!",
      });
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Laporan Tukar Beli", 10, 10);

    let y = 20;
    tukarBeliData.forEach((item, index) => {
      doc.text(`Data ${index + 1}:`, 10, y);
      doc.text(`Nama: ${item.name}`, 10, y + 10);
      doc.text(`Nomor HP: ${item.phone}`, 10, y + 20);
      doc.text(`Barang Ditukar: ${item.product}`, 10, y + 30);
      doc.text(`Bukti: ${item.file}`, 10, y + 40);
      y += 50;
    });

    doc.save("TukarBeli_Report.pdf");
  });
});


