import { FC } from 'react';
import {
  ProfileContainer,
  MainInfo,
  MyImageContainer,
  MyNames,
  Introduce,
} from './profile.styles';
import Timeline from '../timeline/timeline.component';

import MyimageSource from '../../assets/my_image.jpeg';

const Profile: FC = () => {
  return (
    <ProfileContainer>
      <MainInfo>
        <MyImageContainer>
          <img src={MyimageSource} alt="My Profile" />
        </MyImageContainer>
        <MyNames>
          <h2>Yuta Ishii</h2>
          <p>フロントエンドエンジニア Webエンジニア</p>
        </MyNames>
      </MainInfo>
      <div className="introduce-container">
        <Introduce>
          <div className="summary">
            <h3>自己紹介</h3>
            <p>
              2018年に大学卒業後ITエンジニアとして働き5年になります。新卒で入社した会社ではインフラを担当していましたが、現在はフリーランスのフロントエンドエンジニアとして小規模〜大規模のWeb開発を行っており、主にReactやVueを使用しています。
              <br />
              また0から1のサービス開発ではバックエンドやデザインも1人で実装することがあり、その経験を活かしてクライアント様やチームメンバーとのコミュニケーションを大切にしながら、ユーザー目線での開発を心がけています。
              <br />
            </p>
          </div>
          <div className="address">
            <h3>住所</h3>
            <p>東京都品川区</p>
          </div>
          <div className="contact">
            <h3>連絡先</h3>
            <ul>
              <li>yuta141c@gmail.com</li>
              <li>github: yt141c</li>
            </ul>
          </div>
        </Introduce>
        <Timeline />
      </div>
    </ProfileContainer>
  );
};
export default Profile;
