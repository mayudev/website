import styled from "styled-components";
import { IProject } from "../../lib/projects";
import { NarrowBreakpoint } from "../../lib/themes";
import Project from "./project";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

export default function Projects({ projects }: { projects: IProject[] }) {
  return (
    <Grid>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </Grid>
  );
}
