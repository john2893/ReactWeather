var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name){
//   console.log('foreach', name);
//
// });
// names.forEach((name)=>{
//   console.log('arrowfunc', name);
// });
// names.forEach((name)=> console.log(name));
// var returnMe = (name) => name + '!';
// console.log('Sujith');
var person = {
  name: 'Sujith',
  greet: function(){
      names.forEach((name)=>{
        console.log(this.name + ' says hi to '+ name)
      });
  }
};
person.greet();
