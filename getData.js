// chamar api
// criar img para cada foto que vier da api sheets
// adicionar img no html

async function getData() {
  const url =
    "https://script.google.com/macros/s/AKfycbxeoVBhb2Phi413aYUSdJC0iuQLM6I0e5EzAQeuusO_rcsP2cuYq9vWP6kiA6I3UkUa/exec";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const data = json.data;

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

// const tl = gsap.timeline();
let delayCounter = 0.1;

getData()
  .then((data) => {
    

    data.forEach((imgs, index) => {
      // console.log(imgs);
      
      if (imgs.url) {
        const img = document.createElement("img");
        const divImg = document.createElement("div");
        const cardsInner = document.getElementById("cards-inner");

        img.src = `${imgs.url}`;
        
        divImg.setAttribute("class", "card");
        divImg.setAttribute("id", `card-${index}`);
        divImg.appendChild(img);
        
        if (imgs.height) {
          divImg.setAttribute("class", "card card-vertical");
        }
        
        cardsInner.appendChild(divImg);

        gsap.set('.card', {
          opacity: 0,
          y: 70
        });

        ScrollTrigger.batch('.card', {
          onEnter: elements => gsap.to(elements, {opacity: 1, y: 0, ease: "power1.out", stagger: 0.1})
        });

      }
    });
  })
  .catch((err) => {
    // Deal with the fact the chain failed
    console.error(err);
  });




