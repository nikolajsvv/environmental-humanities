import EssayComponent from "../../Essay/EssayComponent"
import AudioComponent from "../../Audio/AudioComponent"
import ImageComponent from "../../Image/ImageComponent"
import PoemComponent from "../../Poem/PoemComponent"

import essay1 from '../../../assets/Submissions/HowDidWeGetHere/Essay/the_american_dream-james_brandon_chao.json'
import essay2 from '../../../assets/Submissions/HowDidWeGetHere/Essay/good_decision-anonymous.json'
import poem1 from '../../../assets/Submissions/HowDidWeGetHere/Poem/the_home_we_carry-julia_claire_dicicco.json'
import poem2 from '../../../assets/Submissions/HowDidWeGetHere/Poem/i_am_as_loud_as_you_can_hear_me-mahie_wilhelm.json'


const HowDidWeGetHere = () => {
  return(
    <div id="how-did-we-get-here" style={{marginBottom: '100px'}} className="pt-14">
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EssayComponent content={essay1} />
          <EssayComponent content={essay2} />

          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem1}/>
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem2}/>
          </div>
        </div>  
      </div>
    </div>
  )
}
export default HowDidWeGetHere;