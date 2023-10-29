import styled from 'styled-components';

export const TimelineComponent = styled.ul`
  list-style: none;

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

  /* for Desktop */
  @media (min-width: 640px) {
    li {
      overflow: hidden;
      margin: 0;
      position: relative;
    }
    .timeline-date {
      font-size: 14px;
      width: 110px;
      line-height: 1.2;
      float: left;
    }
    .timeline-content {
      width: 75%;
      float: left;
      border-left: 3px lightblue solid;
      padding: 0 0 32px 30px;
      &:last-of-type {
        margin-bottom: 0;
      }
      & .tech-used {
        margin-top: 16px;
        span {
          margin-right: 4px;
          margin-bottom: 4px;
        }
      }
    }
    .timeline-content:before {
      content: '';
      width: 12px;
      height: 12px;
      background: navy;
      position: absolute;
      left: 106px;
      top: 5px;
      border-radius: 100%;
    }
  }
`;
