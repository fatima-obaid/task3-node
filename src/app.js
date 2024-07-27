

 const express = require("express")
 const app = express()

  const port = process.env.PORT || 3000

  const path = require("path")
  const x = path.join(__dirname , '../public')
  app.use(express.static(x))
 


app.set('view engine', 'hbs');
const viewsDirectory = path.join (__dirname , '../Temp1/views')
 app.set('views', viewsDirectory);


  // to read partials : 
  var hbs = require('hbs');
  const partialsPath = path.join(__dirname , "../Temp1/partials")
  hbs.registerPartials(partialsPath)
  

app.get ('/' , (req,res) => {
   res.render('index' , {
    title : "Not only people need a house",
    desc: "We offer to give a  chance  to  a little  and  nice  puppy  with  an  extremely  wide and open heart.",
    textButton:"make a friend",
    img1: "imegs/home-hero-free-img-1536x740.jpg",
    img2: "imegs/cat2-back.png",
    img3: "imegs/dog-back.png",
   })
})

app.get ('/about' , (req,res) => {
   res.render('about' , {
       title: "About the shelter “Cozy House”",
       desc1: "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.",
       desc2:"We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.",
       img10: "imegs/Pets.png",
     
   })
})


app.get ('/ourpets' , (req,res) => {
   res.render('ourpets' , {
       title1:"Persian cats This type of cat is known for its calmness.",
       title2:"The Bolognese dog breed is characterized by being very friendly towards children,",
       title3:"The Rottweiler is one of the most famous guard dogs.",
       desc1:"and beautiful round facial features with round eyes. It is one of the most popular animals among many people who love raising cats. Studies indicate that these cats have been present in Persia since ancient times, and they were named after the country. It has undergone many developments, both in color and body, while still retaining the thick fur that covers its body.",
       desc2:"and it is also one of the types of small dogs that dog breeders love, as it is very playful and loves to play, and it is also very curious and intelligent.This dog has a sense of humor and is a good companion at home, whether for walking, playing, running, or even having fun with your children at home. This dog has a beautiful white color, and it grew up in Italy in the city of Bologna, which is why it is called by that name.",
       desc3:"It is a huge dog that weighs about 100 pounds (45 kilograms), and since they can cause serious injury to anyone they consider to be a potential threat, it is necessary that they be well trained so that they understand when aggressive behavior is appropriate. When is it unacceptable? ",
       textButton1 : "Persian Cats",
       textButton2: "Bolognese Dog Breed",
       textButton3:"Rottweiler dog",
       img: "imegs/cat-1.png"
   })
})

app.get ('/content' , (req,res) => {
  res.render('content' , {
      title1:"You can also",
      title2:" make a donation",
      text:"Name of the bank / Type of bank account",
      phone:"  8380 2880 8028 8791 7435",
      desc3:"Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      img: "imegs/Dog_donate.png",
      img1: "imegs/credit-card.svg"
  })
})

  app.listen( port , () => {
      console.log("app listening on port 3000")
  })



