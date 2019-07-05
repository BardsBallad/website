import styled, { css } from 'styled-components';

const Container = styled.div`
  ${props => props.width && css` width: ${props => props.width}; `}
  height: ${props => props.height || 'auto'};
  ${props => props.maxHeight && css` max-height: ${props => props.maxHeight}; `}
  ${props => props.maxWidth && css` max-width: ${props => props.maxWidth}; `}

  ${props => props.flowWrap && css`
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  `}

  ${props => props.flexWrap && css` flex-wrap: wrap; `}

  ${props => props.float && css` float: left; `};

  ${props => props.flowX && css` overflow-x: ${props => props.flowX}; `}
  ${props => props.flowY && css` overflow-y: ${props => props.flowY}; `}

  ${props => props.underline && css` border-bottom: 1px solid ${props => props.theme.grey}; `}

  ${props => props.pos && css` position: ${props => props.pos}; `}
  ${props => props.top && css` top: ${props => props.top}; `}
  ${props => props.right && css` right: ${props => props.right}; `}
  ${props => props.left && css` left: ${props => props.left}; `}
  ${props => props.bottom && css` bottom: ${props => props.bottom}; `}
    
  display: ${props => props.noFlex ? 'block' : 'flex'};
  flex-direction: ${props => props.direction || 'column'};
  ${props => props.bases && css` flex-basis: ${props => props.bases}; `}
  ${props => props.justifyContent && css` justify-content: ${props => props.justifyContent}; `}
  ${props => props.alignItems && css` align-items: ${props => props.alignItems}; `}
  ${props => props.alignSelf && css` align-self: ${props => props.alignSelf}; `}

  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};

  ${props => props.grow && css` flex-grow: ${props.grow}; `}

  ${props => props.bg && css`
    background-color: ${props => props.theme[props.bg] || props.theme.dark};
  `}

  ${props => props.ol && css`
    outline: 1px solid ${props => props.theme[props.ol] || props.theme.almostblack};
  `}

`

export default Container;