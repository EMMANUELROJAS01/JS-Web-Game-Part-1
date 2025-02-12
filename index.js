function newImage(url, left, bottom) {
    let imageInput = document.createElement("img");
    imageInput.src = url;
    imageInput.style.position = "fixed";
    imageInput.style.left = left + "px";
    imageInput.style.bottom = bottom + "px";
    document.body.append(imageInput);
    return imageInput;
  }
  
  newImage("assets/green-character.gif", 100, 100);
  newImage("assets/pine-tree.png", 450, 200);

newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}
