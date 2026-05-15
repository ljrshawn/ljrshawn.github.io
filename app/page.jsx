import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  additional,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { SegmentViewNav } from "@/components/segment-view-nav";

function Hero() {
  return (
    <section
      id="about"
      className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20"
    >
      <div className="max-w-3xl">
        <Badge className="mb-5 border-teal-200 bg-teal-50 text-teal-800">
          <Sparkles className="mr-1 h-3.5 w-3.5" />
          Available for software opportunities
        </Badge>
        <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-primary">{profile.title}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {profile.intro}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </span>
          <a
            className="inline-flex items-center gap-2 transition hover:text-primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-primary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-teal-200/60 blur-3xl" />
        <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-soft">
          <img
            src={profile.photo}
            alt={profile.name}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="grid gap-3 border-t border-border bg-card p-5">
            {profile.highlights.map((item) => (
              <div
                key={item}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="border-t border-border bg-muted/30 py-16"
    >
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="grid gap-4">
          {education.map((item) => (
            <Card key={item.school}>
              <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.school}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.degree}
                    </p>
                  </div>
                </div>
                <div className="text-left text-sm text-muted-foreground sm:text-right">
                  <p>{item.location}</p>
                  <p>{item.date}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Professional work" />
        <div className="grid gap-4">
          {experience.map((item) => (
            <Card key={`${item.company}-${item.role}`}>
              <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  {item.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-muted/30 py-16">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Selected builds" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {project.date}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  {project.href ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      aria-label={`${project.name} repository`}
                    >
                      <a href={project.href} target="_blank" rel="noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-5">
                <p className="leading-7 text-muted-foreground">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = Array.isArray(skillGroups)
    ? skillGroups
    : skillGroups
        .split("\n")
        .map((line) => line.replace(/^•\s*/, "").trim())
        .filter(Boolean)
        .map((line) => {
          const [label, skills = ""] = line.split(":");

          return {
            label: label.trim(),
            skills: skills
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean),
          };
        });

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.label}>
              <CardHeader>
                <h3 className="font-semibold text-foreground">{group.label}</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} className="bg-background">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function More() {
  return (
    <section id="more" className="border-t border-border bg-muted/30 py-16">
      <div className="container">
        <SectionHeading eyebrow="More" title="Training and activities" />
        <div className="grid gap-3">
          {additional.map((item) => (
            <div
              key={`${item.title}-${item.date}`}
              className="grid gap-2 rounded-lg border border-border bg-card p-4 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
              </div>
              <p className="text-sm font-medium text-primary">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Shawn Lyu.</p>
        <div className="flex gap-4">
          <a
            className="transition hover:text-primary"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <a
            className="transition hover:text-primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition hover:text-primary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SegmentViewNav />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <More />
      <Footer />
    </main>
  );
}
