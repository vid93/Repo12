var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
]

function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(name !== contacts[i].firstName){
            return "No such contact"
        }else if(!contacts[i].hasOwnProperty([prop])){
            return "No such property"
        }else{
            return contacts[i][prop];
        }
    }
}


console.log(lookUpProfile("John", "adress"));
module.exports = lookUpProfile;