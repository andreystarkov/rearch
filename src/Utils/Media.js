import { generateMedia } from 'styled-media-query'

export const media = generateMedia({
  xs: '576px', // Extra small devices (portrait phones, less than 576px)
  sm: '768px', // Small devices (landscape phones, less than 768px)
  md: '992px', // Medium devices (tablets, less than 992px)
  lg: '1200px' // Large devices (desktops, less than 1200px)
})

// Usage example:

// import { media } from 'Utils/Media'

// export const ListGames = styled.div`
//   display: flex;
//   flex-wrap: wrap;

//   margin-left: -${itemMargin}rem;
//   margin-right: -${itemMargin}rem;

//   > ${ItemContainerMain} {
//     width: calc(100% / 4 - ${itemMargin * 2}rem);
//     /* height: 262px; */

//     ${media.lessThan('sm')`
//       width: calc(100%/ 3 - ${itemMargin * 2}rem);
//       /* height: 230px; */
//     `}

//     ${media.lessThan('xs')`
//       width: calc(100% - ${itemMargin * 2}rem);
//       /* height: 278px; */
//     `}
//   }
// `