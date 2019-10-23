var usersArray =[];

function createUser (firstName,lastName,email,password,isAdmin,id){
    var user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.password=password;
    user.isAdmin=true;
    user.id=length(usersArray);

    return user;

}



