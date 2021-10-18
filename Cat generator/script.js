function generateCat() {
    var CatImage = document.createElement('img');
    var newElmnt = document.getElementById('flex-cat-gen');
    CatImage.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    newElmnt.appendChild(CatImage);
}
