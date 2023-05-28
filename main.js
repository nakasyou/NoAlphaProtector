const $canvas = document.getElementById("img");
const $file = document.getElementById("file");
const $result = document.getElementById("result");

const ctx = $canvas.getContext("2d");

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, $canvas.width, $canvas.height);

$file.onchange = event => {
  const file = event.target.files[0];
  
  const image = new Image();
  image.src = URL.createObjectURL(file);
  

  image.onload = () => {
    // Set sizes
    $canvas.width = image.width;
    $canvas.height = image.height;
    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, $canvas.width, $canvas.height);

    ctx.drawImage(image, 0, 0);
    
    const imageData = ctx.createImageData(image.width,image.height);
    
    /*// Delete alpha ( To degital )
    for(let i=0; i!==imageData.data.length/4; i++){
      const alphaIndex = i*4+2;
      
      const alpha = imageData.data[alphaIndex];
      //imageData.data[alphaIndex] = alpha > 100 ? 0 : 0;
    }
    ctx.fillRect(0, 0, $canvas.width, $canvas.height);
    //ctx.putImageData(imageData, 0, 0);*/

    $result.src = $canvas.toDataURL();
  };
};
