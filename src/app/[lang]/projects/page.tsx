import ProjectsContent from "@/components/ProjectsContent";

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  return <ProjectsContent params={props.params} />;
}
