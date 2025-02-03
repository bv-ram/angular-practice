export const environment ={
url : "http://localhost:3002/",
token:localStorage.getItem("token"),
auth:{
    register:"newUser/register",
    login:"newUser/login",
    userCreate:"user/create",
    getUserById:"user/getUser",
    getAllUsers:"user/getAllRecords"
}
}