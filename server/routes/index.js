module.exports = function (app){
  app.use('/api',require('./list'));
  app.use('/api',require('./article'));
 
}
