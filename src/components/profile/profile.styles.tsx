import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  min-height: 100vh;
  padding: 64px 64px;
  text-align: left;
  .introduce-container {
    display: flex;
    margin-top: 32px;
  }
`;

export const MainInfo = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
`;

export const MyImageContainer = styled.div`
  margin-right: 120px;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
`;

export const MyNames = styled.div`
  height: auto;
  h2 {
    color: navy;
    text-align: left;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 18px;
    span {
      font-size: 16px;
      font-weight: normal;
    }
  }
  p {
    font-weight: bold;
  }
`;

export const Introduce = styled.div`
  max-width: 260px;
  margin-right: 60px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  p {
    font-size: 14px;
    margin-bottom: 24px;
    letter-spacing: 0.05em;
    line-height: 16px;
  }
  li {
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
