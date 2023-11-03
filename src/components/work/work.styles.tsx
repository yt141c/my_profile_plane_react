import { styled } from 'styled-components';
import { Tag } from '../tag/tag.styles';

export const WorkComponent = styled.div`
  text-align: left;
  flex: 1;
  min-width: 300px;
  margin: 36px;
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
`;
