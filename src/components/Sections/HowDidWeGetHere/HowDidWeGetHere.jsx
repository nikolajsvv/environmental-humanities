import EssayPreview3 from "../../Essay/EssayPreview3"
import AudioView2 from "../../Audio/AudioView2"
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/chaseleaharima_216978_10472745_dreaming of huckleberry.json'
import image2 from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'
import audio from '../../../assets/Gratitude-Eli_Rimer.mp3'
import audioData from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Gratitude-Eli_Rimer.json'

const HowDidWeGetHere = () => {
  
  return(
    <div id="how-did-we-get-here" style={{marginBottom: '100px'}} className="pt-14">
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2 lg:gap-10">
            <EssayPreview3 essay={essay3} image={image2}/>
            <EssayPreview3 essay={essay3} image={image2}/>
            <EssayPreview3 essay={essay3} image={image2}/>
            <AudioView2 audio={audio} audioData={audioData} image={image2}/>
        </div>
      </div>
    </div>
  )
}
export default HowDidWeGetHere;