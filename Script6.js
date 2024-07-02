//Lecture-Else if statement and logical operators

var prof='instructor';
// var prof='doctor';
//var prof='engineer';

if(prof==='instructor')
{
    console.log(prof +' teacher students');
}
else if(prof ==='doctor')
{
    console.log(prof + ' treates people');
}
else if(prof==='composer')
{
    console.log(prof+'creates the music');
}

//else if (prof==='doctore'){
//    console.log(prof+'creates the musics')
//}
else
{
    console.log('professions do not match');
}

//logical and 
if(5===5 && 4===4)
{
    console.log('condition is true');
}
else
{
    console.log('condition is false')
}

if(5===4 && 4===4)
{
    console.log('condition is true');
}
else
{
    console.log('condition is false')
}

//logical or 
if(5===5 || 4===4)
{
    console.log('condition is true');
}
else
{
    console.log('condition is false')
}

if(5===4 || 4===3)
{
    console.log('condition is true');
}
else
{
    console.log('condition is false')
}

//logical not
if(!true)
{
    console.log('condition is true')
}
else
{
    console.log('conditon is false')
}