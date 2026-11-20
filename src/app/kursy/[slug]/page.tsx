import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { CourseDetailView } from "@/components/courses/CourseDetailView";
import { getCourseBySlug, SPORTNOTES_COURSES } from "@/data/courses";
import { getSidebarNavigation } from "@/server";

export function generateStaticParams() {
  return SPORTNOTES_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return { title: "Kurs nie znaleziony" };
  }
  return {
    title: `${course.title} — Kurs SportNotes`,
    description: course.subtitle,
    openGraph: {
      siteName: "SportNotes",
    },
  };
}

export default async function KursDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const navigation = getSidebarNavigation();

  return (
    <main className="overflow-x-clip">
      <Topbar navigation={navigation} />
      <CourseDetailView course={course} />
      <Footer />
    </main>
  );
}
