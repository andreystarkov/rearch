import styled from 'styled-components'

import { Images } from 'Themes'

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlexLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}
  ${props => props.paddingVertical && `
    padding-top: ${props.paddingVertical};
    padding-bottom: ${props.paddingVertical};
  `}
`

export const FlexHalf = styled.div`
  display: flex;
  width: 50%;
  align-self: stretch;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}
  ${props => props.paddingVertical && `
    padding-top: ${props.paddingVertical};
    padding-bottom: ${props.paddingVertical};
  `}
`

export const ScreenBackground = styled.div`
    background-image: url(${Images.mainIllustration});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
`
