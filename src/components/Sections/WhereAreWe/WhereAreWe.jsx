import EssayPreview3 from "../../Essay/EssayPreview3"
import AudioView2 from "../../Audio/AudioView2"
import ImageView from "../../Image/ImageView"
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/chaseleaharima_216978_10472745_dreaming of huckleberry.json'
import image2 from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'
import audio from '../../../assets/Gratitude-Eli_Rimer.mp3'
import audioData from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Gratitude-Eli_Rimer.json'

const WhereAreWe = () => {

  return(
  <div id='where-are-we' style={{marginBottom: '100px'}} className="pt-14">  
    <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
      <div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2 lg:gap-10">
      <ImageView imageUrl={image2} className="lg:col-span-2 xl:col-span-1"/>
          <EssayPreview3 essay={essay3} image={image2}/>
          <EssayPreview3 essay={essay3} image={image2}/>
          <EssayPreview3 essay={essay3} image={image2}/>
          <AudioView2 audio={audio} audioData={audioData} image={image2}/>
      </div>
    </div>
  </div>
  )
}

export default WhereAreWe
