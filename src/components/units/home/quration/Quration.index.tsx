import { useMoveToPage } from '../../../hooks/coustoms/useMoveToPage';
import { QurationWrapper, QurationContents, QurationImage } from './Quration.styles';

export default function Quration() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <QurationWrapper>
        <QurationContents onClick={onClickMoveToPage('/exercise/workout')}>
          <QurationImage src="/workout.png" />
          헬스
        </QurationContents>
        <QurationContents onClick={onClickMoveToPage('/exercise/golf')}>
          <QurationImage src="/golf.png" />
          골프
        </QurationContents>
        <QurationContents onClick={onClickMoveToPage('/exercise/tennis')}>
          <QurationImage src="/tennis.png" />
          테니스
        </QurationContents>
      </QurationWrapper>
    </>
  );
}
