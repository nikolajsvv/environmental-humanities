import EssayPreview from "../../Essay/EssayPreview"
import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/gerlipatriciafrances_233799_10474396_Freewrite.json'
import essay2 from '../../../assets/Submissions/WhereAreWe/Essay/greenmayahelena_253590_10473645_BIO184Assignment.json'
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/chaseleaharima_216978_10472745_dreaming of huckleberry.json'
import image from '../../../assets/raphael-giesbrecht-_7UbqOUgBzo-unsplash.jpg'

const HowDoWeMakeSenseOfItAll = () => {
  return (
    <div id='how-do-we-make-sense-of-it-all' style={{marginBottom: '100px'}}>
      <div  className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          <EssayPreview essay={essay1} image={image}/>
          <EssayPreview essay={essay2} image={image}/>
          <EssayPreview essay={essay3} image={image}/>
        </div>
      </div>
    </div>
  )
}

export default HowDoWeMakeSenseOfItAll
