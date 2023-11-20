import styled from 'styled-components';
import media from '../../theme/mediaquery/mediaquery.styles';

export const TimelineItemComponent = styled.li`
  overflow: hidden;
  margin: 0;
  position: relative;
  opacity: 0;
  transform: translateY(80%);
  .date {
    font-size: 14px;
    width: 100px;
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
    left: 100px;
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

  ${media.desktop`
  .date {
      font-size: 14px;
      width: auto;
      line-height: 1.2;
      float: none;
      margin-bottom: 12px;
      padding-left: 15px;
      font-weight: bold;
    }
    .content {
      width: 100%;
      float: left;
      border-left: 3px lightblue solid;
      padding: 0 0 0px 12px;
      margin-bottom: 24px;
      &:last-of-type {
        margin-bottom: 24px;
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
      display: none;
    }
    h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 1.7;
    }
    li {
      margin-bottom: 100px;
    }
  `}

  ${media.phone`
    .date {
      font-size: 14px;
      width: auto;
      line-height: 1.2;
      float: none;
      margin-bottom: 12px;
      padding-left: 15px;
      font-weight: bold;
    }
    .content {
      width: 100%;
      float: left;
      border-left: 3px lightblue solid;
      padding: 0 0 0px 12px;
      margin-bottom: 24px;
      &:last-of-type {
        margin-bottom: 24px;
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
      display: none;
    }
    h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 1.7;
    }
    li {
      margin-bottom: 100px;
    }
  `}

  // アニメーション
  &.animate-fade {
    animation: fadeInUp 0.8s ease-in-out forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    80% {
      opacity: 0.3;
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
