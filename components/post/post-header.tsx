import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Post } from "../../lib/posts";
import { AccentPrimary } from "../../lib/themes";
import { PostImage } from "./post-image";
import Timestamp from "./timestamp";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  padding-left: 1rem;

  color: ${AccentPrimary};
  border-left: 3px solid ${AccentPrimary};
`;

const Subtitle = styled.span`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: ${AccentPrimary};
`;

const SubtitleSpan = styled.span`
  padding-left: 12px;
`;

export default function PostHeader(props: Post) {
  return (
    <Container>
      <Title>{props.title}</Title>

      {props.date && (
        <Subtitle>
          <FontAwesomeIcon icon={faClock} />
          <SubtitleSpan>
            <Timestamp date={props.date} />
          </SubtitleSpan>
        </Subtitle>
      )}

      {props.coverImage && (
        <a href={props.coverImage} target="_blank" rel="noreferrer">
          <PostImage src={props.coverImage} />
        </a>
      )}
    </Container>
  );
}
