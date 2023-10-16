import styled from 'styled-components'

export const animationBubble = styled.div`
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: bubble_out 0.6s ease-in-out infinite both;

  @keyframes bubble_out {
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`
export const animationBubbleStop = styled.div`
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
`
