var userInfo = (id,callback) => {
var user={
  id:id,
  name:'Nalini'
}
setTimeout(()=>{
  callback(user);
},3000);
};

userInfo(25, (userObject)=>{
console.log(userObject);
});
