import EssayComponent from "../../Essay/EssayComponent"
import AudioComponent from "../../Audio/AudioComponent"
import ImageComponent from "../../Image/ImageComponent"
import imageContent from '../../../assets/Submissions/WhereAreWe/Images/lost-jj_jean_noland_murphy.json'
import backgroundImage1 from '../../../assets/Submissions/WhereAreWe/Images/lost-jj_jean_noland_murphy.jpg'
import backgroundImage2 from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/chaseleaharima_216978_10472745_dreaming of huckleberry.json'
import audio from '../../../assets/Gratitude-Eli_Rimer.mp3'
import audioData from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Gratitude-Eli_Rimer.json'

const WhereAreWe = () => {

  return(
  <div id='where-are-we' style={{marginBottom: '100px'}} className="pt-14">  
    <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EssayComponent content={essay3} backgroundImage={backgroundImage2}/>
          <div className="lg:col-span-2 lg:row-span-2">
            <ImageComponent backgroundImage={backgroundImage1} content={imageContent} />
          </div>
          <EssayComponent content={essay3} backgroundImage={backgroundImage2}/>
          <AudioComponent audioFile={audio} content={audioData} backgroundImage={backgroundImage2}/>
        </div>  
    </div>
  </div>
  )
}

export default WhereAreWe
