function ageInDays () {
    var birthYear = prompt('Year of Birth: ');
    var birthMonth = promt ('Month of Birth');
    var birthDate = prompt ('Date of Birth');
    var d = new Date();
    var day = d.getDate();
    var mon = d.getMonth();
    var age = (2020 - birthYear) * 365;
    if (mon < birthMonth)
    {
        if( day == birthDate)
        {
            age = age+ (((12+mon) - birthMonth)*30);
        }
        else if (day > birthDate)
        {
            age = age+ (((12+mon) - birthMonth)*30)+(day-birthDate);
        }
        else 
        {
            age = age+(((12+(mon-1))-birthMonth)*30) +day ;
        }
    }
    else
    {
        if( day == birthDate)
        {
            age = age+ ((mon-birthMonth)*30);
        }
        else if (day > birthDate)
        {
            age = age+ ((mon-birthMonth)*30))+(day-birthDate);
        }
        else 
        {   
            if( mon == birthMonth)
            {
                 age = age + ((30+day)-birthDate) ;
            }
            
            else 
            { 
                age= age + ((mon-birthMonth)*30)+((30+day)-birthDate);
            }
        }
    var h1 = document.createElement('h1');
    var ans = document.createTextNode('Your age is : ' + age + 'days');
    h1.setAttribute('id', 'age');
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('age').remove();
  }
