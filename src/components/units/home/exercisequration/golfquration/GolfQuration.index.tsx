import { useRouter } from 'next/router';
import {
  Btn,
  Contents,
  NextTo,
  PostImage,
  PostPrice,
  PostTitle,
  PostWriter,
  Pre,
  StyledSlider,
  Title,
  Wrapper,
} from './GolfQuration.styles';
import { useGetExercisePosts } from '../../../../hooks/useGetExercisePosts';
import { useMoveToPage } from '../../../../hooks/useMoveToPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Post {
  id: string;
  imgUrl?: string;
  title?: string;
  price?: string;
  writer?: string;
}

export default function GolfQuration(): JSX.Element {
  const { posts } = useGetExercisePosts('golf');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickMoveToPostDetail = (event: React.MouseEvent<HTMLDivElement>): void => {
    router.push(`/exercise/golf/${event.currentTarget.id}`);
  };
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

    nextArrow: (
      <NextTo>
        <Btn src="/rightarrow.png" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Btn src="/leftarrow.png" />
      </Pre>
    ),
  };
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 1280) {
      settings.slidesToShow = 3.5;
    }
    if (window.innerWidth < 768) {
      settings.slidesToShow = 2.4;
    }
    if (window.innerWidth < 480) {
      settings.slidesToShow = 1.3;
    }
  }

  return (
    <Wrapper>
      <Title>정교한 스윙과 아름다운 코스를 누리세요 ⛳</Title>
      <StyledSlider {...settings}>
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
      </StyledSlider>
    </Wrapper>
  );
}
