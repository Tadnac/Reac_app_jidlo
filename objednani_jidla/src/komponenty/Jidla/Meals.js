import { Fragment } from 'react';

import JidlaSouhrn from "./MealsSummary";
import DostupnaJidla from "./AvailableMeals";

const Jidla=()=>{
  return(
    <Fragment>
      <JidlaSouhrn/>
      <DostupnaJidla/>

    </Fragment>
  );
}
export default Jidla;