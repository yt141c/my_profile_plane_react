import styled from 'styled-components';
import media from '../../theme/mediaquery/mediaquery.styles';

export const ProfileContainer = styled.div`
  padding: 64px 64px;
  text-align: left;
  position: relative;
  box-shadow: 0 7px 16px rgba(0, 0, 0, 0.08), 0 4px 4px rgba(0, 0, 0, 0.12);
  .introduce-container {
    display: flex;
    margin-top: 32px;
  }
  ${media.phone`
    padding: 16px;
    text-align: left;
    .introduce-container {
      display: block;
      flex-wrap: none;
      margin-top: 24px;
    }
  `}
`;

export const MainInfo = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  ${media.phone`    
    height: auto;
    margin-bottom: 24px;
  `}
`;

export const MyImageContainer = styled.div`
  margin-right: 120px;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
  ${media.desktop`
    margin-right: 24px;
    
    img {
      border-radius: 50%;
      object-fit: cover;
      width: 124px;
      height: 124px;
    }
  `}
  ${media.phone`
    margin-right: 24px;
    
    img {
      border-radius: 50%;
      object-fit: cover;
      width: 84px;
      height: 84px;
    }
  `}
`;

export const MyNames = styled.div`
  height: auto;
  h2 {
    color: navy;
    text-align: left;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  p {
    font-weight: bold;
  }
  ${media.phone`
    h2 {
      font-size: 20px;
      margin-bottom: 12px;
    }
    p {
      font-size: 12px;
      font-weight: bold;
    }
  `}
`;

export const Introduce = styled.div`
  max-width: 260px;
  margin-right: 60px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    margin-bottom: 24px;
    letter-spacing: 0.05em;
    line-height: 1.7;
    & b {
      font-weight: bold;
    }
  }
  li {
    width: auto;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.5s ease;
    line-height: 1.5;
    margin-bottom: 12px;
    a {
      display: flex;
      align-items: center;
      & .svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  ${media.desktop`
    max-width: 180px;
  `}
  ${media.phone`
    max-width: none;
    margin-right: 0;
  h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
    }
    p {
      font-size: 15px;
      margin-bottom: 24px;
      letter-spacing: 0.05em;
      line-height: 1.7;
      & b {
        font-weight: bold;
      }
    }
    li {
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 12px;
    }
  `}
`;
