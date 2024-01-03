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
import Image from 'next/image';

interface Post {
  id: string;
  imgUrl?: string;
  title?: string;
  price?: string;
  writer?: string;
}

export default function GolfPage(): JSX.Element {
  const { posts } = useGetExercisePosts('golf');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickMoveToPostDetail = (event: React.MouseEvent<HTMLDivElement>): void => {
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
