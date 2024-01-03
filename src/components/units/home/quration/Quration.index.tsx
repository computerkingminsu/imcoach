import Link from 'next/link';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import { QurationWrapper, QurationContents, QurationImage } from './Quration.styles';

export default function Quration(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <QurationWrapper>
        <Link href="/exercise/workout">
          <QurationContents>
            <QurationImage src="/workout.png" />
            헬스
          </QurationContents>
        </Link>
        <Link href="/exercise/golf">
          <QurationContents>
            <QurationImage src="/golf.png" />
            골프
          </QurationContents>
        </Link>
        <Link href="/exercise/tennis">
          <QurationContents>
            <QurationImage src="/tennis.png" />
            테니스
          </QurationContents>
        </Link>
      </QurationWrapper>
    </>
  );
}
