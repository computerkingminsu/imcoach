import { AreaContents, AreaImage, AreaWrapper } from './RegionQuration.styles';
import Image from 'next/image';

export default function RegionQuration() {
  return (
    <AreaWrapper>
      <AreaContents href="/region/seoul">
        <AreaImage src="/seoul.svg" />
        #서울
      </AreaContents>
      <AreaContents href="/region/gyeonggi">
        <AreaImage src="/gyeonggi.svg" />
        #경기
      </AreaContents>
      <AreaContents href="/region/incheon">
        <AreaImage src="/incheon.svg" />
        #인천
      </AreaContents>
    </AreaWrapper>
  );
}
