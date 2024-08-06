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

getData()
  .then((data) => {
    
    let delayCounter = 0.2;

    data.forEach((imgs, index) => {
      // console.log(imgs);
      
      if (imgs.url) {

        // console.log(delayCounter);
      
          // delayCounter+=0.2;
    
        // delayCounter+=0.2;
        
        const img = document.createElement("img");
        img.src = `${imgs.url}`;
        // img.setAttribute("class", "img-card");
        
        const divImg = document.createElement("div");
        divImg.setAttribute("class", "card");
        divImg.setAttribute("id", `card-${index}`);
        divImg.appendChild(img);
        
        if (imgs.height) {
          // console.log("vertical image!");
          divImg.setAttribute("class", "card card-vertical");
        }
        
        const cardsInner = document.getElementById("cards-inner");
        cardsInner.appendChild(divImg);

        if (index <= 15) {
          gsap.fromTo(`#card-${index}`, { opacity: 0, y: 70 }, { opacity: 1, y: 0, ease: "power1.out", duration: 0.5, delay: delayCounter});
          delayCounter+=0.1;
        }
        


        // gsap.fromTo(`#card-0`, { opacity: 0, y: 50, duration: 0.5 }, { opacity: 1, y: -5, duration: 1, delay: 0.2});
        // gsap.fromTo(`#card-1`, { opacity: 0, y: 50, duration: 0.5 }, { opacity: 1, y: -5, duration: 1, delay: 0.3});
        // gsap.fromTo(`#card-2`, { opacity: 0, y: 50, duration: 0.5 }, { opacity: 1, y: -5, duration: 1, delay: 0.4});
        // gsap.fromTo(`#card-3`, { opacity: 0, y: 50, duration: 0.5 }, { opacity: 1, y: -5, duration: 1, delay: 0.5});
        // console.log("loop");
          
          // tl.to(`#card-1`, {x: 100, ease: "power2.out",});
          // tl.to(`#card-2`, {x: 100, ease: "power2.out",});

          // gsap.utils.toArray("#card-").forEach((card, i) => {
  
          //   console.log(card)
          //   // gsap.to(section.querySelector(".heading"), {
          //   //   opacity: 1,
          //   //   scrollTrigger: {
          //   //     trigger: section,
          //   //     pinnedContainer: "main",
          //   //     pin: "main",
          //   //     start: "center center",
          //   //     end: "+=300",
          //   //     toggleActions: "play none none reverse"
          //   //   }
          //   // });
            
          // });
      }
    });
  })
  .catch((err) => {
    // Deal with the fact the chain failed
    console.error(err);
  });

  
  let heightReached = 250;
  let cardsNumberMin = 15;
  let cardsNumberMax = 20;
  
  addEventListener("scroll", () => {
    let scrollTopPage = document.documentElement.scrollTop;
    let totalCards = document.querySelectorAll('.card').length;

    console.log(scrollTopPage);

    if (scrollTopPage > heightReached) {

      console.log(`more than ${heightReached}`);
    
      for (a = 15; a <= totalCards; a++) {
        
        if(a > cardsNumberMin && a <= cardsNumberMax) {
          console.log(a);
          gsap.fromTo(`#card-${a}`, { opacity: 0, y: 70 }, { opacity: 1, y: 0, ease: "power1.out", duration: 0.5});
        }
        
      }
      heightReached+=500; 
      cardsNumberMin+=5;
      cardsNumberMax+=5;
    }
    
  });



