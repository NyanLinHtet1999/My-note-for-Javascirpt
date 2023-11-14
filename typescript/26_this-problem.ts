type User = {
    id:number,
    admin:boolean,
    becomeAdmin:()=>void
}
const user:User = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
user.becomeAdmin()
console.log('User ',user);

