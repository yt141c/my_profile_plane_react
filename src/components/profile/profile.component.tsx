import { FC } from 'react';
import {
  ProfileContainer,
  MainInfo,
  MyImageContainer,
  MyNames,
  Introduce,
} from './profile.styles';
import Timeline from '../timeline/timeline.component';
import { ReactComponent as MailSvg } from '../../assets/envelope-regular.svg';
import { ReactComponent as GithubSvg } from '../../assets/github-alt.svg';

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
          <p>フロントエンドエンジニア</p>
        </MyNames>
      </MainInfo>
      <div className="introduce-container">
        <Introduce>
          <div className="summary">
            <h3>自己紹介</h3>
            <p>
              2018年に大学卒業後ITエンジニアとして働き5年になります。新卒で入社した会社ではインフラを担当していましたが、現在はフリーランスのフロントエンドエンジニアとして小規模〜大規模のWeb開発を行っており、主にReactやVueを使用しています。
              <br />
              個人でサービス開発をすることもあり、その時はバックエンドやデザインも1人で実装します。サービス開発全体の経験を活かして
              <b>「クライアントやチームからどんな役割を求められているか」</b>
              という考えを大切にしています。
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
              <li>
                <a
                  href="mailto:yuta141c@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailSvg className="svg" />
                  yuta141c@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https:github.com/yt141c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubSvg className="svg" />
                  yt141c
                </a>
              </li>
            </ul>
          </div>
        </Introduce>
        <Timeline />
      </div>
    </ProfileContainer>
  );
};
export default Profile;
