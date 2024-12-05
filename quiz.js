var inventory = [
  {
    productname: "Prime",
    category: "Beverage",
    quantity: 100,
    shelves: ["S20", "S21", "S22"],
  },
  {
    productname: "Feastables",
    category: "Chocolates",
    category: 500,
    shelves: ["S6", "S7"],
  },
  {
    productname: "Fix",
    category: "Chocolates",
    quantity: 250,
    shelves: ["S8", "S9", "S10"],
  },
];

var newproducts = {
  productname: "m&ms",
  category: "Choco Beans",
  quantity: 50,
  shelves: ["S1", "S2", "S3"],
};

function addnewProduct(product) {
  inventory.push(product);
}
addnewProduct(newproducts);
console.log(inventory);

function searchProduct(searchProduct) {
  return inventory.find((product) => product.productname === searchProduct);
}
var foundproduct = searchProduct("m&ms");
console.log(foundproduct);

function handleproductsales(productname, quantity) {
  var product = searchProduct(productname);

  if (product) {
    if (product.quantity < quantity) {
      console.log("Out of Stock: " + productname);
      return;
    }
    product.quantity -= quantity;

    if (product.quantity < 10) {
      console.log("Warning" + productname + "is running low on stack");
    }
    console.log("Purchase successfull!!! Reamining stock" + product.quantity);
  } else {
    console.log("Product not found");
  }
}
handleproductsales("Prime", 23);
handleproductsales("m&ms", 12);

function changeShelf(productName, targetShelf) {
  let product = searchProduct(productName);

  if (product) {
    products.forEach((p) => {
      if (
        p.ProductName !== productName &&
        p.ShelvesPlaced.includes(targetShelf)
      ) {
        p.ShelvesPlaced = p.ShelvesPlaced.filter(
          (shelf) => shelf !== targetShelf
        );
      }
    });

    if (!product.ShelvesPlaced.includes(targetShelf)) {
      product.ShelvesPlaced.push(targetShelf);
    }

    console.log(`${targetShelf} assigned to ${productName}.`);
  } else {
    console.log("Product not found.");
  }
}
changeShelf("Feastables", "S10");

function displayChocolateProducts() {
  console.log("Chocolate Products:");
  products.forEach((product) => {
    if (product.Category === "Chocolates") {
      console.log(product);
    }
  });
}

displayChocolateProducts();
