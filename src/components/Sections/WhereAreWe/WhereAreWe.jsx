import SectionTitle from "../SectionTitle";
import EssayPreview from "../../Essay/EssayPreview";
import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/freewrite - patricia frances.json'

const WhereAreWe = () => {
  return(
  <div id='where-are-we' className="h-screen">
    <SectionTitle title='Where Are We' />
    <EssayPreview essay={essay1}/>
  </div>)
}

export default WhereAreWe