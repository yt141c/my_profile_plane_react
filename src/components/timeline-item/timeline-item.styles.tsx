import { styled } from 'styled-components';

export const TimelineItemComponent = styled.li`
  overflow: hidden;
  margin: 0;
  position: relative;
  opacity: 0;
  transform: translateY(80%);
  .date {
    font-size: 14px;
    width: 110px;
    line-height: 1.2;
    float: left;
  }
  .content {
    width: 75%;
    float: left;
    border-left: 3px lightblue solid;
    padding: 0 0 32px 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
    & .skills {
      margin-top: 16px;
      span {
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }
  }
  .content:before {
    content: '';
    width: 12px;
    height: 12px;
    background: navy;
    position: absolute;
    left: 106px;
    top: 5px;
    border-radius: 100%;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
  }

  li {
    margin-bottom: 100px;
  }

  // アニメーション
  &.animate-fade {
    animation: fadeInUp 0.8s ease-in-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(80%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
