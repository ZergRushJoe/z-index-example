const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use('/static',express.static('public'));

app.get('/',function(req,res,next)
{
    res.render('index');
});


app.listen('3000',function()
{
   console.log("app is running...");
});

app.use(function(err,req,res,next)
{
    if(err)
    {
        console.log(err.toString());

    }
    else
    {
        console.log('no location found');
        res.status(404).send('Not found')
    }

});