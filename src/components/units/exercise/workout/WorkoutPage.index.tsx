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
import Image from 'next/image';

interface Post {
  id: string;
  imgUrl?: string;
  title?: string;
  price?: string;
  writer?: string;
}

export default function WorkoutPage(): JSX.Element {
  const { posts } = useGetExercisePosts('workout');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickMoveToPostDetail = (event: React.MouseEvent<HTMLDivElement>): void => {
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
        {posts.map((post: Post) => (
          <Contents key={post.id} id={post.id} onClick={onClickMoveToPostDetail}>
            <PostImage>
              <Image
                src={
                  post.imgUrl ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                }
                alt={post.title}
                width={270}
                height={175}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </PostImage>
            <PostTitle>{post.title}</PostTitle>
            <PostPrice>{post.price}</PostPrice>
            <PostWriter>{post.writer}</PostWriter>
          </Contents>
        ))}
      </ContentsWrapper>
    </Wrapper>
  );
}
