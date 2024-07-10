// chamar api
// criar img para cada foto que vier da api sheets
// adicionar img no html

async function getData() {
  const url =
    "https://script.google.com/macros/s/AKfycbzrHleWeXi1qYJdxfynKObjm-aEyS3qvhEBQv80jmE2_olaA34bRqkIWHbKb9et1JC6/exec";
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
    data.forEach((item) => {
      const img = document.createElement("img");
      img.src = `${item.url}`;
    //   document.body.appendChild(img);
    });
  })
  .catch((err) => {
    // Deal with the fact the chain failed
    console.error(err);
  });
