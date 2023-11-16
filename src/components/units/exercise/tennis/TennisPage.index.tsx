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
} from './TennisPage.styles';

export default function TennisPage(): JSX.Element {
  const { posts } = useGetExercisePosts('tennis');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const onClickMoveToPostDetail = (event: any): void => {
    router.push(`/exercise/tennis/${event.currentTarget.id}`);
  };
  return (
    <Wrapper>
      <Sidebar>
        <Sidebarlist onClick={onClickMoveToPage('/exercise/workout')}>헬스</Sidebarlist>
        <Sidebarlist onClick={onClickMoveToPage('/exercise/golf')}>골프</Sidebarlist>
        <SidebarSelect>테니스</SidebarSelect>
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
