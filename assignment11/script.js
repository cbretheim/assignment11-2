
var myVue = new Vue({
 el: "#app",
 data: {
   nameInput: "",
   modelInput: "",
   yearInput: "",
   materialsInput: "",
   heightInput: "",
   idInput: "",
   consoles: [
     { name: "Elbow Chair",
       model: "CH20",
       year: 1956,
       materials: "oak and leather",
       height: 73,
        id: 1},
     { name: "Dining chair",
       model: "CH23",
       year: 1950,
       materials: "oak, walnut, natural cord",
       height: 78.6,
     id: 2},
     { name: "Wishbone Chair",
       model: "CH24",
       year: 1949,
       materials: "oak, natural cord",
       height: 76,
     id: 3 },
     { name: "Lounge Chair",
       model: "CH22",
       year: 1950,
       materials: "oak, walnut, natural cord",
       height: 72.6,
     id: 4},
     { name: "Shell Chair",
       model: "CH07",
       year: 1963,
       materials: "oak and leather",
       height: 74,
     id: 5 }
   ]
 },

 methods: {
   deleteChair: function (chairObject) {
     this.consoles=this.consoles.filter(function (chairs) {
       if (chairs.id !== chairObject.id) {
         return true;
       } else {
           return false;
         }
     });
   },
   addChair: function () {
     if (this.validation()) {
       let newChair= {
         name: this.nameInput,
         model: this.modelInput,
         year: this.yearInput,
         materials: this.materialsInput,
         height: this.heightInput,
         id: this.idInput
       };
       this.consoles.push(newChair);
       this.nameInput = this.modelInput = this.yearInput = this.materialsInput = this.heightInput = this.idInput = "";
     }
   },

   validation: function () {
     if (this.nameInput ==="" ||
          this.modelInput ==="" ||
          this.yearInput ==="" ||
          this.materialsInput ==="" ||
          this.heighInput ==="" ||
          this.idInput==="") {
       alert ("Please fill in all fields");
       return false;
     }
     return true;
   }
 }
});
