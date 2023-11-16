import { useRouter } from 'next/router';
import { useGetExercisePosts } from '../../../hooks/useGetExercisePosts';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import {
  Contents,
  ContentsWrapper,
  PostImage,
  PostPrice,
  PostTitle,
  PostWriter,
  Sidebar,
  SidebarSelect,
  Sidebarlist,
  Wrapper,
} from './WorkoutPage.styles';

export default function WorkoutPage(): JSX.Element {
  const { posts } = useGetExercisePosts('workout');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickMoveToPostDetail = (event: any): void => {
    router.push(`/exercise/workout/${event.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <Sidebar>
        <SidebarSelect>헬스</SidebarSelect>
        <Sidebarlist onClick={onClickMoveToPage('/exercise/golf')}>골프</Sidebarlist>
        <Sidebarlist onClick={onClickMoveToPage('/exercise/tennis')}>테니스</Sidebarlist>
      </Sidebar>
      <ContentsWrapper>
        {posts.map((post: any) => (
          <Contents key={post.id} id={post.id} onClick={onClickMoveToPostDetail}>
            <PostImage src={post.imgUrl} />
            <PostTitle>{post.title}</PostTitle>
            <PostPrice>{post.price}</PostPrice>
            <PostWriter>{post.writer}</PostWriter>
          </Contents>
        ))}
      </ContentsWrapper>
    </Wrapper>
  );
}
