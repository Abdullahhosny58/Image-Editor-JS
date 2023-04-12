let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brighetness = document.getElementById("brighetness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download")
let img = document.getElementById("img");


let reset = document.querySelector('span')
let imgBox = document.querySelector('.img-box')


const canves = document.getElementById("canves");
const ctx = canves.getContext('2d')

function resetValue() {
    img.style.filter = 'none';
    saturate.value = '100%';
    contrast.value = '100';
    brighetness.value = '100';
    grayscale.value = '0';
    huerotate.value = '0';
    // ctx.drawImage(img,0,0,canves.width,canves.height)

}


window.onload = ()=> {
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}
upload.onchange = () => {
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
        
    }
    img.onload = function () {
    canves.width = img.width;
    canves.height = img.height;
    ctx.drawImage(img, 0, 0, canves.width, canves.height)
    img.style.display='none'
    }
}



let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brighetness.value}%)   
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${huerotate.value}deg)
            `
        ctx.drawImage(img, 0, 0, canves.width, canves.height)
    })
})

download.onclick = function () {
    download.hraf = canves.toDataURL('image/jpeg');
}