var person=[{
    "first_name":"Karthi",
    "last_name": "K",
    "gender":"Female",
    "age":"27",
    "phone":"9876543210",
    "area":"Pondicherry",
    "hobies":["cooking","singing","dancing","playing"]
},
{
    "first_name":"Varun",
    "last_name": "J",
    "gender":"Male",
    "age":"17",
    "phone":"9876543211",
    "area":"chennai",
    "hobies":["swimming","roaming","dancing","playing"]
},
{
    "first_name":"Thara",
    "last_name": "S",
    "gender":"Female",
    "age":"35",
    "phone":"9876543219",
    "area":"delhi",
    "hobies":["singing","roaming","chatting","drawing"]
},
{
    "first_name":"Krishna",
    "last_name": "N",
    "gender":"Male",
    "age":"59",
    "phone":"9876543306",
    "area":"Villupuram",
    "hobies":["singing","roaming","Rummy","swimming"]
}
];

//Using For loop
for(var i=0;i<person.length;i++){
    // console.log(person[i].first_name,"-",person[i].area);
    // console.log(person[i].first_name,".",person[i].last_name,);
    console.log("Name:"+(person[i].first_name)+"."+(person[i].last_name)+" age:"+(person[i].age)+" from:"+(person[i].area));
}

// Using For in loop
// a-->key
for(var a in person){
    // console.log(a);
    // console.log(a,(person[a].first_name),(person[a].last_name),(person[a].area));
    console.log(a+") "+("Name: ")+(person[a].first_name)+"."+(person[a].last_name)+" from "+(person[a].area));
}

