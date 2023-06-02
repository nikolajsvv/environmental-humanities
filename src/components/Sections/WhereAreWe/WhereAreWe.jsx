import SectionTitle from "../SectionTitle";
import EssayPreview from "../../Essay/EssayPreview";
import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/gerlipatriciafrances_233799_10474396_Freewrite.json'
import essay2 from '../../../assets/Submissions/WhereAreWe/Essay/greenmayahelena_253590_10473645_BIO184Assignment.json'

const WhereAreWe = () => {
  return(
  <>
    <SectionTitle title='Where Are We' />
    <div id='where-are-we' className="h-screen px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        <EssayPreview essay={essay1}/>
        <EssayPreview essay={essay2}/>
      </div>
    </div>
  </>
  )
}

export default WhereAreWe