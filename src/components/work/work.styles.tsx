import styled from 'styled-components';
import { Tag } from '../tag/tag.styles';
import media from '../../theme/mediaquery/mediaquery.styles';

export const WorkComponent = styled.div`
  text-align: left;
  flex: 1;
  min-width: 300px;
  margin: 36px;
  opacity: 0;
  transform: translateX(-10%);

  &.animate-fade {
    animation: fadeInLeft 0.8s ease-in-out forwards;
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .infos {
    ${Tag} {
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 24px 0;
  }
  .description {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 24px;
  }
  &.skills {
    margin-bottom: 24px;
  }
  .links {
    margin-top: 20px;
  }
  & .button {
    margin-right: 16px;
  }
  .link {
    font-size: 14px;
    margin-right: 16px;
  }
  .img-container {
    width: auto;
  }
  .img {
    width: 100%;
    object-fit: cover;
  }

  ${media.phone`
    min-width: 300px;
    margin: 16px 0px 32px;
    .title {
      font-size: 18px;
      font-weight: bold;
      margin: 18px 0;
    }
    .description {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    .links {
      margin-top: 20px;
    }
    .link {
      font-size: 14px;
      margin-right: 16px;
    }
    .img-container {
      width: auto;
    }
    .img {
      width: 100%;
      object-fit: cover;
    }
  `}
`;
