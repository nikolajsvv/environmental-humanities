import EssayPreview from "../../Essay/EssayPreview"
import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/gerlipatriciafrances_233799_10474396_Freewrite.json'
import essay2 from '../../../assets/Submissions/WhereAreWe/Essay/greenmayahelena_253590_10473645_BIO184Assignment.json'
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/chaseleaharima_216978_10472745_dreaming of huckleberry.json'
import image1 from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'

const WhereDoWeGoFromHere = () => {
  return(
  <div id='where-do-we-go-from-here' style={{marginBottom: '100px'}}>
    <div  className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        <EssayPreview essay={essay1} image={image1}/>
        <EssayPreview essay={essay2} image={image1}/>
        <EssayPreview essay={essay3} image={image1}/>
      </div>
    </div>
  </div>
  )
}
export default WhereDoWeGoFromHere