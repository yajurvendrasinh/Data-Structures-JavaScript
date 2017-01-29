/*Initializing an Object
 * Objects are always passed by reference
 */
var myObj = {}; // using the object literal

var myObj = new Object(); // using the object constructor to create a new object


/*Chaining methods || Cascading methods in JAVASCRIPT*/


 // The data store:
 var usersData = [
  {firstName:"tommy", lastName:"MalCom", email:"test@test.com", id:102},
  {firstName:"Peter", lastName:"brecHt", email:"test2@test2.com", id:103},
  {firstName:"RoHan", lastName:"sahu", email:"test3@test3.com", id:104}
 ];

 function titleCaseName(str)
 {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
 }
 // Our object with the chainable methods
 var userController = {

  currentUser:"",
  findUser:function (userEmail) {
   var arrayLength = usersData.length, i;
   for (i = arrayLength - 1; i >= 0; i--) {
    if (usersData[i].email === userEmail) {
     this.currentUser = usersData[i];
     break;
    }
   }

   return this;
  },
  formatName:function () {
   if (this.currentUser) {
    this.currentUser.fullName = titleCaseName (this.currentUser.firstName) + " " + titleCaseName (this.currentUser.lastName);
   }
   return this;

  },

  createLayout:function () {
   if (this.currentUser) {
    this.currentUser.viewData = "<h2>Member: " + this.currentUser.fullName + "</h2>"  + "<p>ID: " + this.currentUser.id + "</p>" + "<p>Email: " + this.currentUser.email + "</p>";
   }
   return this;
  },

  displayUser:function () {
   if (!this.currentUser) return;

   $(".members-wrapper").append(this.currentUser.viewData);

  }
 };
       
// Now, use the chaninable methods with expressiveness:
       userController.findUser("test2@test2.com").formatName().createLayout().displayUser();
