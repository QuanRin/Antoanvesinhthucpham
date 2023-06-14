// import { useEffect } from "react";
// import { useState } from "react";
// import { getPlanDetails } from "../../service/plan.service"

// export const usePlanDetails = (id) => {
//   const [dataPlanDetails, setDataPlanDetails] = useState({});
//   const [loadingPlanDetails,setLoadingPlanDetails]=useState(false)
//   const [errorPlanDetails,setErrorPlanDetails]= useState(null)
//   useEffect( () => {
//     let res;
//     (
//       async()=>{
//        try {
//         setLoadingPlanDetails(true)
//         res= await getPlanDetails(id)
//         setDataPlanDetails(res.data.result);

//        } catch (error) {
//         setErrorPlanDetails(error)
//        } finally{
//         if (res !== undefined) {
//           setLoadingPlanDetails(false);
//         }
//        }
//       }
//     )()
//   }, []);
//   return {dataPlanDetails,loadingPlanDetails,errorPlanDetails}
// };
