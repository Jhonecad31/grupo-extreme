import { getDictionary } from "@/lib/get-dictionary";
import AboutContent from "@/components/AboutContent";

export default async function AboutPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as "en" | "es");

  return <AboutContent lang={lang} dict={dict} />;
}