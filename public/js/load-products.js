export async function loadProducts() {
    const data = await fetch("/.netlify/functions/get-product").then((res) => res.json()).catch((err) => {
        console.log(err)
    })

    const products = document.querySelector(".products")
    const pre = document.createElement('pre')
    pre.innerText=JSON.stringify(data, null, 2)
    products.appendChild(pre)
}