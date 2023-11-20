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
} from './TennisQuration.styles';
import { useGetExercisePosts } from '../../../../hooks/useGetExercisePosts';
import { useMoveToPage } from '../../../../hooks/useMoveToPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function TennisQuration(): JSX.Element {
  const { posts } = useGetExercisePosts('tennis');
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickMoveToPostDetail = (event: any): void => {
    router.push(`/exercise/tennis/${event.currentTarget.id}`);
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
      <Title>스트로크와 스피드의 완벽한 조화를 찾아가세요 🎾</Title>
      <StyledSlider {...settings}>
        {posts.map((post: any) => (
          <Contents key={post.id} id={post.id} onClick={onClickMoveToPostDetail}>
            <PostImage>
              <Image
                src={post.imgUrl}
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
