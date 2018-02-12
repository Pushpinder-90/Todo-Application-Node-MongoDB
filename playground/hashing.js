const {SHA256}  = require('crypto-js'); // for hasing
const jwt = require('jsonwebtoken'); // actual using in application
const bcrypt = require('bcryptjs');

// bcryptjs functionality to hash entere password before saving into db
var password = 'SinghSaab123';

bcrypt.genSalt(10, (err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log('Hash password by Bcrypt :  ',hash)
  });
});

// this should be done with loged in user
var hashedPassword = '$2a$10$Covxdnq1xx7/8oxnXOkqGujKLOGISX131Oq8r7XrGPg0C0Zlu2RoS';
bcrypt.compare(password,hashedPassword,(err,res)=>{
  console.log('Comparison Result  :',res)
});


    // cryptojs functionality
var message = "I am user number 3";
var hash = SHA256(message).toString();
console.log(`Message  ; ${message}`);
console.log(`Hash Message by cryptoJS : ${hash}`);

  // JSON web Token functionality
  // demonstrating JWT sign(data, somesecret) and verify(token)
  // sign - take data,create hash,return token
  // verify - take that token and verify if data is not changed

// var data = {
//   id:4
// };
//
// var Token = jwt.sign(data,'123');
// console.log(`Token  :${Token}`)
// // always return error if there is a change in token or secretKey
// var decoded = jwt.verify(Token, '123');
// console.log('decoded',decoded);
// console.log('decoded',decoded.id);
//
// var data = {
//   id:4
// };
//
// var token={
//   data,
//   hash = SHA256(JSON.stringify(data)).toString()
// };
//
//  var resultHash = SHA256(JSON.stringify(token.data)).toString();
//
//  if(resultHash === token.hash){
//    console.log("Data was not changed")
//  }else{
//    console.log("Data was changed !!")
//  }
