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
} from './SeoulPage.style';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { kakaoKey } from '../../../../../api';

export default function SeoulPage() {
  const router = useRouter();
  useEffect(() => {
    // 맵 만들기 ===================================

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        //@ts-ignore
        center: new kakao.maps.LatLng(37.52876740414, 126.98872063616149), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
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
          <SidebarSelect>서울</SidebarSelect>
          <Sidebarlist href="/region/gyeonggi">경기</Sidebarlist>
          <Sidebarlist href="/region/incheon">인천</Sidebarlist>
        </Sidebar>
        <MapWrapper>
          <MapTitle>서울 지역의 코치들을 만나보세요 🏃‍♂️</MapTitle>
          <MapSubTitle># 마커를 클릭해보세요 !</MapSubTitle>
          <KakaoMap id="map"></KakaoMap>
        </MapWrapper>
      </Wrapper>
    </>
  );
}
