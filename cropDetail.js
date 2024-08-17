let crop = document.getElementById("details");

let generateCrop = () => {
  return (crop.innerHTML = cropsData
    .map((x) => {
      let { id, name, growth_period, desc, img } = x;

      return `
        
      <div id=product-id-${id} class="item">
        <img width="300" height="200" src=${img} alt="">
        <div class="details">
          <h2>${name}</h2>
          <p>Growth period - <span>${growth_period}</span></p>
          <div class="price-quantity">
            <p> ${desc} </p>

            </div>
          </div>
        </div>
    </div>
      `;
    })
    .join(""));
};

generateCrop();
