import SectionTitle from "../SectionTitle"
import EssayComponent from "../../Essay/EssayComponent"
import PoemComponent from "../../Poem/PoemComponent"
import intro from '../../../assets/Submissions/HowDidWeGetHere/intro.json'
import essay1 from '../../../assets/Submissions/HowDidWeGetHere/Essay/the_american_dream-james_brandon_chao.json'
import essay2 from '../../../assets/Submissions/HowDidWeGetHere/Essay/good_decision-anonymous.json'
import essay3 from '../../../assets/Submissions/HowDidWeGetHere/Essay/preserving_language-grace_wanrong_tan.json'
import pdfDocument1 from '../../../assets/Submissions/HowDidWeGetHere/Essay/decivilization-shreya_garg.pdf'
import poem1 from '../../../assets/Submissions/HowDidWeGetHere/Poem/the_home_we_carry-julia_claire_dicicco.json'
import poem2 from '../../../assets/Submissions/HowDidWeGetHere/Poem/i_am_as_loud_as_you_can_hear_me-mahie_wilhelm.json'
import image1 from '../../../assets/Images/HowDidWeGetHere/american_dream.jpg'
import image2 from '../../../assets/Images/HowDidWeGetHere/farm.jpg'
import image3 from '../../../assets/Images/HowDidWeGetHere/train_station.jpg'
import image4 from '../../../assets/Images/HowDidWeGetHere/countryside.jpg'
import image5 from '../../../assets/Images/HowDidWeGetHere/snail.jpg'
import image6 from '../../../assets/Images/HowDidWeGetHere/sun_through_trees.jpg'

const HowDidWeGetHere = () => {
  return(
    <section id="how-did-we-get-here" style={{marginBottom: '100px'}} className='pt-40'>
      <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={intro}/>
      </div>
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem2} backgroundImage={image6}/>
          </div>
          <EssayComponent content={essay1} backgroundImage={image1} />
          <EssayComponent content={essay2} backgroundImage={image2} />
          <EssayComponent content={{ body: 'What does it mean to partake in “civilization”? Do we intrinsically desire belonging in a self-organized society that is nonsensical against the face of the unthinking universe, or do we harbor a buried longing for a more entropic existence? Western humanity has long contrasted its constructed civilization with the idea of the wilderness– or anything beyond the anthropomorphic, from the depths of the sea to the cosmos beyond. “Wild”', title: 'Decivilization', author: 'Shreya Garg', url: pdfDocument1}} backgroundImage={image4}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem1} backgroundImage={image5}/>
          </div>
          <EssayComponent content={essay3} backgroundImage={image3} />
        </div>  
      </div>
    </section>
  )
}
export default HowDidWeGetHere;