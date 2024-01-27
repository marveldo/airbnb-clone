import CardSection from "./card"
import card_image from "../images/image 12.png"
import wedding from "../images/wedding-photography 1.png"
import bike from "../images/mountain-bike 1.png"

const properties = [
{"img" :card_image, 'people':6, 'rating' : 5.0, 'paragragh' :"Life lessons with Katie Zaferes",'price':136,"openspots":0,"location":"online"},
{"img" :wedding, 'people':30, 'rating' : 5.0, 'paragragh' :"Learn wedding photography",'price':125 ,"openspots":27,"location":"online"},
{"img" :bike, 'people':50, 'rating' : 4.8, 'paragragh' :"Group Mountain Biking",'price':50,"openspots":6,"location":"None"},
{"img" :wedding, 'people':30, 'rating' : 5.0, 'paragragh' :"Learn wedding photography",'price':125 ,"openspots":27,"location":"online"},
{"img" :card_image, 'people':6, 'rating' : 5.0, 'paragragh' :"Life lessons with Katie Zaferes",'price':136,"openspots":0,"location":"online"},
{"img" :wedding, 'people':30, 'rating' : 5.0, 'paragragh' :"Learn wedding photography",'price':125 ,"openspots":27,"location":"online"},
{"img" :bike, 'people':50, 'rating' : 4.8, 'paragragh' :"Group Mountain Biking",'price':50,"openspots":6,"location":"None"},
{"img" :card_image, 'people':6, 'rating' : 5.0, 'paragragh' :"Life lessons with Katie Zaferes",'price':136,"openspots":0,"location":"online"},
]

const Sectionlayout = properties.map((property)=>{
       return  <CardSection
                item = {property}
                 />
})
const Section3 = () =>{
    return (
        <div className="Section3">

             {Sectionlayout}
          
        </div>
    )
}
export default Section3