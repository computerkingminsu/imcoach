import Link from 'next/link';
import { AreaContents, AreaImage, AreaWrapper } from './RegionQuration.styles';
import Image from 'next/image';

export default function RegionQuration() {
  return (
    <AreaWrapper>
      <Link href="/region/seoul">
        <AreaContents href="/region/seoul">
          <AreaImage src="/seoul.svg" />
          #서울
        </AreaContents>
      </Link>
      <Link href="/region/gyeonggi">
        <AreaContents href="/region/gyeonggi">
          <AreaImage src="/gyeonggi.svg" />
          #경기
        </AreaContents>
      </Link>
      <Link href="/region/incheon">
        <AreaContents href="/region/incheon">
          <AreaImage src="/incheon.svg" />
          #인천
        </AreaContents>
      </Link>
    </AreaWrapper>
  );
}
