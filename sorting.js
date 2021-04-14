var json=[{
    "id":2,
    "name":"Rajendra"
},{
    "id":3,
    "name":"Samir"
},{
    "id":1,
    "name":"Ram"
},{
    "id":4,
    "name":"Ravi"
}];

json.sort(function(a,b){
    return a.id-b.id;
});