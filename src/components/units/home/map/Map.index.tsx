import { useEffect } from 'react';
import { KakaoMap, MapTitle, MapWrapper, Wrapper } from './Map.styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { kakaoKey } from '../../../../../pages/_app';

export default function Map() {
  const router = useRouter();
  useEffect(() => {
    // 맵 만들기 ===================================
    //@ts-ignore
    if (window.kakao && window.kakao.maps) {
      //@ts-ignore
      kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            //@ts-ignore
            center: new kakao.maps.LatLng(37.54452517601742, 126.98270963401868), // 지도의 중심좌표
            level: 10, // 지도의 확대 레벨
          };
        //@ts-ignore
        var map = new kakao.maps.Map(mapContainer, mapOption);
        const locations = [
          {
            name: '아놀드의 웨이트 특강!',
            imageSrc: '/workouticon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.54699, 127.09598),
            route: '/exercise/workout/5R30P8NZBiIViWVm9Eu4',
          },
          {
            name: '구룡포의 웨이트 특강!',
            imageSrc: '/workouticon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.505038269784755, 126.93995668836409),
            route: '/exercise/workout/EKqcaq0riJ9QP2ea7Cu0',
          },
          {
            name: '호날두의 초보 맞춤 특강!',
            imageSrc: '/golficon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.484647489892666, 127.0413710227878),
            route: '/exercise/golf/3sHjmiFIdxGSwiwRx3tB',
          },
          {
            name: '오레오의 중급반',
            imageSrc: '/tennisicon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.5738113930334, 127.03906571381812),
            route: '/exercise/tennis/E2bJQZQYCmd98bozCC2n',
          },
          {
            name: '타이거의 초보 맞춤 특강!',
            imageSrc: '/golficon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.558536155875196, 126.98618096251202),
            route: '/exercise/golf/F5VtMtqw0lA9UQgxrCpH',
          },
          {
            name: '장영실의 초보 특강!',
            imageSrc: '/tennisicon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.52843513440758, 126.89749062349871),
            route: '/exercise/tennis/JoeyX0gpDD7Bgt8zu27t',
          },
          {
            name: '김통깨의 웨이트 특강!',
            imageSrc: '/workouticon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.290986167255525, 127.06990985412357),
            route: '/exercise/workout/dp16UedxeW5gH1TUTCJK',
          },
          {
            name: '제임스의 웨이트 특강!',
            imageSrc: '/workouticon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.257575056023, 126.97268644241116),
            route: '/exercise/workout/eMGf5qGlN5O4wmKvtN5R',
          },
          {
            name: '아이언의 초보 맞춤 특강!',
            imageSrc: '/golficon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.28352482986121, 126.97178622439823),
            route: ' /exercise/golf/G6ttkDFFTaZyTE6oP51s',
          },
          {
            name: '우즈의 초보 맞춤 특강!',
            imageSrc: '/tennisicon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.25286926538167, 127.01530162958241),
            route: '/exercise/golf/OxBrRHvap3AmdcJyeNj6',
          },
          {
            name: '다니엘의 테니스 특강!',
            imageSrc: '/golficon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.29827793901798, 127.03353718778926),
            route: '/exercise/tennis/ck38vqtT67doCVKAlryJ',
          },
          {
            name: '이순신의 백핸드 특강!',
            imageSrc: '/tennisicon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.27059138363103, 127.05192498445302),
            route: ' /exercise/tennis/hc2p5Cve0TKuUerTiw9Z',
          },
          {
            name: '홍길동의 웨이트 특강!',
            imageSrc: '/workouticon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.44044950407118, 126.6618764369481),
            route: '/exercise/workout/fqvIRBLr2xRfvpUfZwJq',
          },
          {
            name: '김홍식의 웨이트 특강!',
            imageSrc: '/workouticon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.47787796473539, 126.75309659810662),
            route: '/exercise/workout/h0tgoj91dUuHFD2KuQ1a',
          },
          {
            name: '박인비의 초보 맞춤 특강!',
            imageSrc: '/golficon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.43461995238517, 126.69850600491444),
            route: '/exercise/golf/mDGZC0uX7TO1cOpLLPn2',
          },
          {
            name: '박세리의 초보 맞춤 특강!',
            imageSrc: '/golficon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.47162622484545, 126.66093907276937),
            route: '/exercise/golf/xMMxV8uTO1yEhWf9jE9R',
          },
          {
            name: '강테오의 테니스 초보 특강!',
            imageSrc: '/tennisicon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.453528494035, 126.70779941682785),
            route: '/exercise/tennis/ubVRRDiccClcbb79HjVP',
          },
          {
            name: '김백수의 포핸드 특강!',
            imageSrc: '/tennisicon.png',
            //@ts-ignore
            position: new kakao.maps.LatLng(37.44011494018979, 126.73971167545405),
            route: '/exercise/tennis/zddTCibyeFSHK7lmlbp6',
          },
        ];

        locations.map((location, index) => {
          //@ts-ignore
          const markerImage = new kakao.maps.MarkerImage(location.imageSrc, new kakao.maps.Size(40, 40), {
            //@ts-ignore
            offset: new kakao.maps.Point(27, 69),
          });
          //@ts-ignore
          const marker = new kakao.maps.Marker({
            position: location.position,
            image: markerImage,
          });

          marker.setMap(map);

          const content =
            '<div class="customoverlay">' +
            `  <a href="#" id="navigateLink${index}">` +
            `    <span class="title">${location.name}</span>` +
            '  </a>' +
            '</div>';

          const position = location.position;
          //@ts-ignore
          const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1,
          });
          const navigateLink = document.getElementById(`navigateLink${index}`);
          if (navigateLink) {
            navigateLink.addEventListener('click', function (e) {
              e.preventDefault();
              router.push(location.route);
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}`}></script>
        <link rel="stylesheet" type="text/css" href="/customoverlay.css" />
      </Head>
      <Wrapper>
        <MapWrapper>
          <MapTitle>현재 활동중인 코치들을 확인해보세요! 🏃‍♀️</MapTitle>
          <KakaoMap id="map"></KakaoMap>
        </MapWrapper>
      </Wrapper>
    </>
  );
}
