function ageInDays () {
    var birthYear = prompt('Date of Birth: ');
    var age = (2020 - birthYear) * 365
    var h1 = document.createElement('h1');
    var ans = document.createTextNode('Your age is : ' + age + 'days');
    h1.setAttribute('id', 'age');
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('age').remove();
  }
