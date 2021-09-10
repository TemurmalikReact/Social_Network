import { Suspense } from "react"
import Preloader from "../Common/Preloader/Preloader"

const WithSuspense = WithNewComponent => 
  props => <Suspense fallback={<Preloader />} > <WithNewComponent {...props} /> </Suspense> 

export default WithSuspense;