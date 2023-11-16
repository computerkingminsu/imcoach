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
} from './IncheonPage.style';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { kakaoKey } from '../../../../../pages/_app';

export default function IncheonPage() {
  const router = useRouter();
  useEffect(() => {
    // 맵 만들기 ===================================

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        //@ts-ignore
        center: new kakao.maps.LatLng(37.458514977873556, 126.70573988348208), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
      };
    //@ts-ignore
    var map = new kakao.maps.Map(mapContainer, mapOption);

    const locations = [
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
          <Sidebarlist href="/region/gyeonggi">경기</Sidebarlist>
          <SidebarSelect>인천</SidebarSelect>
        </Sidebar>
        <MapWrapper>
          <MapTitle>인천 지역의 코치들을 만나보세요 🏃‍♂️</MapTitle>
          <MapSubTitle># 마커를 클릭해보세요 !</MapSubTitle>
          <KakaoMap id="map"></KakaoMap>
        </MapWrapper>
      </Wrapper>
    </>
  );
}
