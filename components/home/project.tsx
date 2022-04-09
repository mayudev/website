import Image from "next/image";
import styled from "styled-components";
import { IProject } from "../../lib/projects";
import { AccentPrimary, AccentSecondary } from "../../lib/themes";

const Name = styled.h2`
  border-left: 2px solid ${AccentSecondary};
  padding-left: 1rem;
  font-size: 1.2rem;
  color: ${AccentSecondary};

  transition: border-left-width 0.2s ease-out, padding-right 0.2s ease-out;
`;

const Description = styled.p``;

const ProjectLink = styled.a`
  &:hover ${Name} {
    padding-right: 0px;
    border-left-width: 10px;
  }
`;

export default function Project({ project }: { project: IProject }) {
  return (
    <ProjectLink href={project.url} target="_blank" rel="noreferrer">
      <Name>{project.name}</Name>
      <Description>{project.description}</Description>
    </ProjectLink>
  );
}
