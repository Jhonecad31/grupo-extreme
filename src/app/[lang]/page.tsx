import HomeContent from "@/components/home/home";

export default async function HomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  return <HomeContent params={props.params} />;
}
