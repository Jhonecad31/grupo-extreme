import ContactContent from "@/components/ContactContent";

export default async function ContactPage(props: {
  params: Promise<{ lang: string }>;
}) {
  return <ContactContent params={props.params} />;
}
