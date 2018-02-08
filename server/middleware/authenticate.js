var {User} = require('./../models/user');

// creating a middle middleware
var authenticate = (req,res,next)=>{
  var token = req.header('x-auth');
  console.log('token : ',token)
  User.findByToken(token).then((user)=>{
    if(!user){
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next(); // without next never pass controll to further
  }).catch((e)=>{
    res.status(401).send();  // 401 - Need authentication
  });
};

module.exports ={
  authenticate
};
