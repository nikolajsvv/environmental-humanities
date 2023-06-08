import SectionTitle from "../SectionTitle"
// import EssayPreview from "../../Essay/EssayPreview"
import EssayPreview2 from "../../Essay/EssayPreview2"
import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/gerlipatriciafrances_233799_10474396_Freewrite.json'
import essay2 from '../../../assets/Submissions/WhereAreWe/Essay/greenmayahelena_253590_10473645_BIO184Assignment.json'
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/chaseleaharima_216978_10472745_dreaming of huckleberry.json'
import image1 from '../../../assets/philip-jahn-r_rnWGV64Ac-unsplash.jpg'
import image2 from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'

const WhereAreWe = () => {

  return(
  <div id='where-are-we' style={{marginBottom: '100px'}}>  
    <SectionTitle title='Where Are We'/>
    <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-lg py-3 lg:py-4">
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        <EssayPreview2 essay={essay3} image={image2}/>
      </div>
    </div>
  </div>
  )
}

export default WhereAreWe
