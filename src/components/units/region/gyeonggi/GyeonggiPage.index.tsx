import { useEffect } from 'react';
import {
  KakaoMap,
  MapSubTitle,
  MapTitle,
  MapWrapper,
  Sidebar,
  SidebarSelect,
  Sidebarlist,
  Wrapper,
} from './GyeonggiPage.style';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { kakaoKey } from '../../../../../api';

export default function GyeonggiPage() {
  const router = useRouter();
  useEffect(() => {
    // 맵 만들기 ===================================

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        //@ts-ignore
        center: new kakao.maps.LatLng(37.2826433887683, 127.02055679989543), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
      };
    //@ts-ignore
    var map = new kakao.maps.Map(mapContainer, mapOption);

    const locations = [
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

      //     //@ts-ignore
      //     document.getElementById(`navigateLink${index}`).addEventListener('click', function (e) {
      //       e.preventDefault();
      //       router.push(location.route);
      //     });
      //   });
      // }, []);
      const navigateLink = document.getElementById(`navigateLink${index}`);
      if (navigateLink) {
        navigateLink.addEventListener('click', function (e) {
          e.preventDefault();
          router.push(location.route);
        });
      }
    });
  }, [router]);

  return (
    <>
      <Head>
        <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}`}></script>
        <link rel="stylesheet" type="text/css" href="/customoverlay.css" />
      </Head>

      <Wrapper>
        <Sidebar>
          <Sidebarlist href="/region/seoul">서울</Sidebarlist>
          <SidebarSelect>경기</SidebarSelect>
          <Sidebarlist href="/region/incheon">인천</Sidebarlist>
        </Sidebar>
        <MapWrapper>
          <MapTitle>경기 지역의 코치들을 만나보세요 🏃‍♂️</MapTitle>
          <MapSubTitle># 마커를 클릭해보세요 !</MapSubTitle>
          <KakaoMap id="map"></KakaoMap>
        </MapWrapper>
      </Wrapper>
    </>
  );
}
