import React from 'react'

// function Hello() {
//   return (
//     <div>
//         <h2>
//             This is using JSX
//         </h2>
//     </div>
//   )
// }

// const Hello = () => {
//     return (
//       <div>
//           <h2>
//               This is using JSX
//           </h2>
//       </div>
//     )
// }

const Hello = () => {
    return React.createElement('div', null,
           React.createElement('h3' ,null, 'This is without JSX')     )
}
export default Hello

