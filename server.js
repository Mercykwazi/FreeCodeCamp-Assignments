const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI)
var Schema = mongoose.Schema;
var bluebird = require('bluebird')
mongoose.Promise = bluebird;
app.use(cors());
var moment=require('moment')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});


var userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    }
})
const exerciseSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, required: true
  },
  description: {
    type: String, 
    required: true 
  },
  duration: { type: Number,
             required: true
            },
  date: { 
    type: Date, 
    required: true 
  },
}, {
  timestamps: true,
});

var User = mongoose.model('User', userSchema);
var Exercise=mongoose.model('Exercise',exerciseSchema)



app.post('/api/exercise/new-user', (req, res) => {
   console.log('usserrr',req.body)
    var userName = req.body.username;
    if (userName === '') {
        res.send('Username cannot be blank');
    } else if (userName.length > 10) {
        res.send('Username cannot be greater than 10 characters');
    } else {
        var recentlyAddedUser = new User({
            userName
        });
        recentlyAddedUser.save(function (err, data) {
            if (err) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    res.send('user name already exist, try a different username');
                } else {
                    res.send('could not save to the database');
                }
            } else {
              res.json({username:data.userName,id:data._id})     
            }
        })
    }
})

app.post('/api/exercise/add', (req, res, next) => {
    let { userId, description, duration, date } = req.body;
  console.log("api",req.body)
    User.findOne({ _id: userId }).then(user => {
      console.log('user',user)
        if (!user) throw new Error('Unknown user with _id');
        date = date || Date.now();
        return Exercise.create({
            description, duration, date, userId
        })
            .then(ex => res.status(200).send({
                username: user.username,
                description, duration,
                _id: user._id,
                date: moment(ex.date).format('ddd MMMM DD YYYY')
            }))
    })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })
})




app.get('api/exercise/:log', (req, res, next) => {
    let { userId, from, to, limit } = req.query;
  console.log('req.qurey',req.query)
    from = moment(from, 'YYYY-MM-DD').isValid() ? moment(from, 'YYYY-MM-DD') : 0;
    to = moment(to, 'YYYY-MM-DD').isValid() ? moment(to, 'YYYY-MM-DD') : moment().add(1000000000000);
    User.findById(userId).then(user => {
        if (!user) throw new Error('Unknown user with _id');
        Exercise.find({ userId })
            .where('date').gte(from).lte(to)
            .limit(+limit).exec()
            .then(log => res.status(200).send({
                _id: userId,
                username: user.username,
                count: log.length,
                log: log.map(o => ({
                    description: o.description,
                    duration: o.duration,
                    date: moment(o).format('ddd MMMM DD YYYY')
                }))
            }))
    })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.message);
        })
})








const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
