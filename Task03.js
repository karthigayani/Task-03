var person=[{
    "first_name":"karthi",
    "last_name": "k",
    "gender":"Female",
    "phone":"9876543210",
    "area":"Pondicherry",
    "hobies":["cooking","singing","dancing","playing"]
},
{
    "first_name":"varun",
    "last_name": "j",
    "gender":"Male",
    "phone":"9876543211",
    "area":"chennai",
    "hobies":["swimming","roaming","dancing","playing"]
},
{
    "first_name":"thara",
    "last_name": "s",
    "gender":"Female",
    "phone":"9876543219",
    "area":"delhi",
    "hobies":["singing","roaming","chatting","drawing"]
}
];
//Using For loop
for(var i=0;i<person.length;i++){
    console.log(person.first_name," ",person.area);
    console.log(person.first_name,".",person.last_name,);
}
//Using For in
for(var a in person){
    console.log(a,person[a]);
    }
//Using For in
for(var a in person){
    console.log(a,person[a].first_name);
    }