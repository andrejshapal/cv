// execute the script when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", (event) => {
  // Select DOM elements
  const gallery = document.getElementById("gallery");
  const allFilter = document.getElementById("allFilter");
  const natureFilter = document.getElementById("natureFilter");
  const cityFilter = document.getElementById("cityFilter");
  const abstractFilter = document.getElementById("abstractFilter");
  const sortBy = document.getElementById("sortBy");
  const imageForm = document.getElementById("imageForm");
  const urlError = document.getElementById("urlError");
  const nameError = document.getElementById("nameError");
  const categoryError = document.getElementById("categoryError");
  let sortVal = "nameAsc";
  let filter = "All";

  class ImageData {
    constructor(url, name, category, ts) {
      this.url = url;
      this.name = name;
      this.category = category;
      this.ts = Date.now();
    }
  }

  let images = [
    new ImageData("https://picsum.photos/id/237/536/354.jpg", "Dog", "Nature"),
    new ImageData(
      "https://picsum.photos/seed/picsum/536/354",
      "Mauntain",
      "Nature"
    ),
    new ImageData(
      "https://picsum.photos/id/1060/536/354?blur=2",
      "Coffee",
      "City"
    ),
  ]; // Array to store image data
  renderGallery();
  // Function to create image element, supplement the code to set the necessary attributes of the image card in the gallery

  {
    /* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
  }

  function createImageElement(imageData) {
    const imageItem = document.createElement("div");
    imageItem.classList = "card col";
    imageItem.style = "width: 18rem;";

    const img = document.createElement("img");
    img.src = imageData.url;
    img.alt = imageData.name;
    img.classList = "card-img-top";

    imageItem.appendChild(img);

    const imageItemBody = document.createElement("div");
    imageItemBody.classList = "card-body";
    imageItem.appendChild(imageItemBody);

    const imageItemTitle = document.createElement("h5");
    imageItemTitle.textContent = imageData.name;
    imageItemBody.appendChild(imageItemTitle);

    const imageItemSubTitle = document.createElement("h6");
    imageItemSubTitle.textContent = imageData.category;
    imageItemSubTitle.classList = "card-subtitle mb-2 text-muted";
    imageItemBody.appendChild(imageItemSubTitle);
    const imageItemTs = document.createElement("p");
    imageItemTs.classList = "card-text";
    imageItemTs.textContent = new Date(imageData.ts).toISOString();
    imageItemBody.appendChild(imageItemTs);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeImage(imageData));
    removeButton.classList = "btn btn-primary";
    imageItem.appendChild(removeButton);

    const imageInfo = document.createElement("p");

    imageItem.appendChild(imageInfo);

    return imageItem;
  }

  // Function to render images to the gallery
  function renderGallery() {
    gallery.innerHTML = ""; // clean the gallery

    if (sortVal === "nameAsc") {
      images = images.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortVal === "nameDesc") {
      images = images.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sortVal === "dateAsc") {
      images = images.sort((a, b) => a.ts - b.ts);
    }
    if (sortVal === "dateDesc") {
      images = images.sort((a, b) => b.ts - a.ts);
    }

    if (filter === "All") {
      images.map((img) => {
        gallery.appendChild(createImageElement(img));
      });
    } else {
      images.map((img) => {
        if (filter === img.category) {
          gallery.appendChild(createImageElement(img));
        }
      });
    }
  }

  // Function to validate the form
  function validateForm(imageUrlInput, imageNameInput, imageCategoryInput) {
    let valid = true;

    // Clear previous error messages
    urlError.textContent = "";
    nameError.textContent = "";
    categoryError.textContent = "";
    console.log(imageUrlInput);
    if (!/\.(jpg|png|gif|svg)$/i.test(imageUrlInput)) {
      urlError.textContent = "Wrong image extension";
      valid = false;
    }
    if (!imageNameInput) {
      nameError.textContent = "Name should not be empty";
      valid = false;
    }
    if (!imageCategoryInput) {
      categoryError.textContent = "You have to select category";
      valid = false;
    }
    return valid;
  }

  // Function to add an image
  imageForm.addEventListener("submit", function (e) {
    e.preventDefault(); // cancel form submission

    const imageUrlInput = document.getElementById("imageUrl");
    const imageNameInput = document.getElementById("imageName");
    const imageCategoryInput = document.getElementById("imageCategory");

    if (
      validateForm(
        imageUrlInput.value,
        imageNameInput.value,
        imageCategoryInput.value
      )
    ) {
      const imageData = new ImageData(
        imageUrlInput.value,
        imageNameInput.value,
        imageCategoryInput.value
      );
      images.push(imageData);

      renderGallery();

      imageUrlInput.value = null;
      imageNameInput.value = null;
      imageCategoryInput.value = null;
    }
  });

  // Function to remove an image from the array images and from the gallery HTML
  function removeImage(imageData) {
    images = images.filter((img) => {
      if (img.ts === imageData.ts && img.name === imageData.name) {
        console.log(img.name);
        return false;
      }
      return true;
    });
    renderGallery();
  }

  // Filter buttons
  allFilter.addEventListener("click", () => {
    filter = "All";
    renderGallery();
  });

  natureFilter.addEventListener("click", () => {
    filter = "Nature";
    renderGallery();
  });

  cityFilter.addEventListener("click", () => {
    filter = "City";
    renderGallery();
  });

  abstractFilter.addEventListener("click", () => {
    filter = "Abstract";
    renderGallery();
  });

  // Sorting functionality
  sortBy.addEventListener("change", () => {
    sortVal = sortBy.value;
    renderGallery();
  });
});
