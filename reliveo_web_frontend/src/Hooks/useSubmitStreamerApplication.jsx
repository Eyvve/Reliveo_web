// import {AxiosInstance} from '../Axios/AxiosInstance'

// function useSubmitStreamerApplication() {
//     return (token, applicationForm) => {
//         return AxiosInstance({
//             url: '',
//             method: 'post',
//             data: new URLSearchParams({
//                 eventType: applicationForm.eventType,
//                 streamerName: applicationForm.streamerName,
//                 genreList: applicationForm.genreList,
//                 profilePicture: applicationForm.profilePicture,
//                 officialWebsite: applicationForm.officialWebsite,
//                 description: applicationForm.description,
//                 identityProof: applicationForm.identityProof
//             })
//         })
//             .then(res => res.data)
//     }
// }

// export default useSubmitStreamerApplication