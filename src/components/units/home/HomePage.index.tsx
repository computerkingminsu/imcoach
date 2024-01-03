import styled from '@emotion/styled';
import Quration from './quration/Quration.index';
import Map from './map/Map.index';
import WorkoutQuration from './exercisequration/workoutquration/WortoutQuration.index';
import GolfQuration from './exercisequration/golfquration/GolfQuration.index';
import TennisQuration from './exercisequration/tennisquration/TennisQuration.index';
import RegionQuration from './regionquration/RegionQuration.index';

export default function HomePage(): JSX.Element {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <Wrapper>
      <Quration />
      <RegionQuration />
      <WorkoutQuration />
      <GolfQuration />
      <TennisQuration />
      <Map />
    </Wrapper>
  );
}
