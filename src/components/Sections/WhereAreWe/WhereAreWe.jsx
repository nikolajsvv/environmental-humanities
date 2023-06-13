import EssayComponent from "../../Essay/EssayComponent"
import AudioComponent from "../../Audio/AudioComponent"
import ImageComponent from "../../Image/ImageComponent"
import PoemComponent from "../../Poem/PoemComponent"
import imageContent from '../../../assets/Submissions/WhereAreWe/Images/current_state-jj_jean_noland_murphy.json'
import backgroundImage1 from '../../../assets/Submissions/WhereAreWe/Images/current_state-jj_jean_noland_murphy.jpg'
import backgroundImage2 from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'

import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/lily-alice_wang.json'
import essay2 from '../../../assets/Submissions/WhereAreWe/Essay/where_the_wild_things_are_and_where_they_arent-jason_bloom.json'
import poem1 from '../../../assets/Submissions/WhereAreWe/Poem/the_linden-divya_mehrish.json'

const WhereAreWe = () => {

  return(
  <div id='where-are-we' style={{marginBottom: '100px'}} className="pt-14">  
    <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 lg:row-span-2">
            <ImageComponent backgroundImage={backgroundImage1} content={imageContent} />
          </div>
          <EssayComponent content={essay1} backgroundImage={backgroundImage2}/>
          <EssayComponent content={essay2} backgroundImage={backgroundImage2}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent  content={poem1} backgroundImage={backgroundImage2}/>
          </div>
        </div>  
    </div>
  </div>
  )
}

export default WhereAreWe
