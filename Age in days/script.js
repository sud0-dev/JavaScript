function ageInDays () {
    var birthYear = prompt('Year of Birth: ');
    var birthMonth = promt ('Month of Birth');
    var birthDate = prompt ('Date of Birth');
    var d = new Date();
    var day = d.getDate(); // gets current date
    var mon = d.getMonth(); // gets current month
    var n = d.getFullYear();// gets current year
    var age ;
    if (mon > birthMonth)
    {
        age=(n-birthYear)*365; // precisely a full year has passed since we have crossed the DoB
        if( day<birthDate)
        {
            age = age+ (((mon - birthMonth)-1)*30) + ((day+30)-birthDate);
        }
       
        else 
        {
            age = age+((mon-birthMonth)*30) + (day-birthDate) ;
        }
    }
    else if (mon == birthMonth)
    {
        if (day < birthDate)
        {
            age = (((n-birthYear)-1)*365) + (11*30) + ((day+30)-birthDate);
        }
        else
        {
            age = ((n-birthYear)*365) + (day-birthDate); // since month is the same, and the precise date has been reached,so their difference will always amount to 0 
        }
    }
    else 
    {
        age = (((n-birthYear)-1)*365);// since we have not reached the date this current year yet , we count it as one year less
         if( day<birthDate)
        {
            age = age+ (((mon - birthMonth)-1)*30) + ((day+30)-birthDate);
        }
       
        else 
        {
            age = age+((mon-birthMonth)*30) + (day-birthDate) ;
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
