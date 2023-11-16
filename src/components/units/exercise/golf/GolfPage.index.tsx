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
} from './GolfPage.styles';

export default function GolfPage(): JSX.Element {
  const { posts } = useGetExercisePosts('golf');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickMoveToPostDetail = (event: any): void => {
    router.push(`/exercise/golf/${event.currentTarget.id}`);
  };
  return (
    <Wrapper>
      <Sidebar>
        <Sidebarlist onClick={onClickMoveToPage('/exercise/workout')}>헬스</Sidebarlist>
        <SidebarSelect>골프</SidebarSelect>
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
