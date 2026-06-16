import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";

const lessons = [
  {
    title: "Beginner Piano",
    body: "A welcoming introduction for children beginning their musical journey.",
  },
  {
    title: "Individual Instruction",
    body: "Each student progresses at their own pace with personalized lessons and clear weekly goals.",
  },
  {
    title: "Musical Foundations",
    body: "Students develop technique, rhythm, note reading, and good practice habits that provide a strong foundation for future growth.",
  },
];

const lessonOptions = [
  {
    title: "30-Minute Lessons",
    description: "Ideal for beginners and younger students.",
    tuition: "$50",
  },
  {
    title: "45-Minute Lessons",
    description:
      "Recommended for students who benefit from additional time for repertoire, technique, and skill development.",
    tuition: "$75",
  },
];

const includedItems = [
  "Personalized one-on-one instruction",
  "Technique and foundational piano skills",
  "Music reading and rhythm training",
  "Ear training",
  "Repertoire selected for the student’s level and interests",
  "Practice guidance for home success",
];

const familyReasons = [
  "Patient, encouraging instruction",
  "Elementary education background",
  "Individualized lessons",
  "Strong musical foundations",
  "Christian values and family-friendly environment",
  "Over twenty years of piano experience",
  "Convenient Irving location",
];

const faqs = [
  {
    question: "What ages do you teach?",
    answer: "Beginning students ages 5 and up.",
  },
  {
    question: "Do students need a piano?",
    answer: "A full-size keyboard is sufficient for beginning students.",
  },
  {
    question: "How long are lessons?",
    answer: "30- and 45-minute lesson options are available.",
  },
  {
    question: "Do you offer trial lessons?",
    answer: "Yes. Families are welcome to schedule a trial lesson.",
  },
  {
    question: "Are lessons taught from a Christian perspective?",
    answer:
      "Byrd Music Academy is operated by a Christian family and seeks to provide a warm, encouraging, and family-friendly environment. Students from all backgrounds are welcome.",
  },
];

const contactEmail = "emiliebyrd1@gmail.com";
const contactPhone = "9407359052";
const formattedPhone = "(940) 735-9052";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-40 sm:pt-40 lg:pt-36">
          <div className="section-shell grid items-center gap-12 pb-20 lg:grid-cols-[1fr_0.88fr] lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-sage/25 bg-ivory/80 px-4 py-2 text-sm font-semibold text-sage shadow-sm">
                Private lessons for young beginners
              </p>
              <h1 className="font-heading text-5xl leading-[1.05] text-walnut sm:text-6xl lg:text-7xl">
                Private Piano Lessons in Irving, Texas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-walnut/78">
                Helping children develop a lifelong love of music through warm,
                personalized instruction.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary" href="#contact">
                  Request Lesson Information
                </a>
                <a className="button-secondary" href="#about">
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-beige shadow-soft sm:min-h-[32rem]">
              <Image
                src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1400&q=85"
                alt="Piano keys in a warm studio setting"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="bg-ivory py-20 sm:py-24">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
            <div className="rounded-[1.75rem] border border-beige bg-cream p-4 shadow-card sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/images/emilie-byrd-profile.png"
                  alt="Emilie Byrd smiling outdoors"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="About" title="Meet Mrs. Byrd" />
              <div className="mt-7 space-y-5 text-lg leading-8 text-walnut/76">
                <p>
                  Mrs. Byrd has been playing piano for over twenty years and has
                  taught piano students for more than two years. She holds a
                  degree in Elementary Education with a minor in Music and
                  previously taught in the classroom before turning her attention
                  to helping students discover the joy of music.
                </p>
                <p>
                  She believes music is a gift from God to be cultivated and
                  enjoyed. Her lessons combine patience, encouragement, and
                  strong fundamentals in a warm, family-friendly environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="lessons" className="py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Lessons"
              title="Private Piano Lessons Designed for Children"
              centered
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {lessons.map((lesson, index) => (
                <article
                  className="rounded-3xl border border-beige bg-ivory p-7 shadow-card"
                  key={lesson.title}
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-sage/12 font-heading text-xl text-sage">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-2xl text-walnut">
                    {lesson.title}
                  </h3>
                  <p className="mt-4 leading-7 text-walnut/72">{lesson.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tuition" className="bg-ivory py-20 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-sage">
                Tuition & Lessons
              </p>
              <h2 className="font-heading text-4xl leading-tight text-walnut sm:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-walnut/76">
                <p>
                  At Byrd Music Academy, tuition is kept straightforward so
                  families can focus on what matters most—steady progress,
                  confidence, and enjoying music.
                </p>
                <p>
                  All lessons are private, one-on-one instruction tailored to
                  each student’s age, learning style, and experience level.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {lessonOptions.map((option) => (
                <article
                  className="rounded-3xl border border-beige bg-cream p-7 shadow-card sm:p-8"
                  key={option.title}
                >
                  <h3 className="font-heading text-3xl text-walnut">
                    {option.title}
                  </h3>
                  <p className="mt-4 min-h-16 leading-7 text-walnut/72">
                    {option.description}
                  </p>
                  <div className="mt-8 flex items-end gap-2 border-t border-walnut/10 pt-6">
                    <p className="font-heading text-5xl leading-none text-sage">
                      {option.tuition}
                    </p>
                    <p className="pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-walnut/55">
                      per lesson
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-walnut/72">
              Most students attend one lesson per week to build consistent
              skills and steady progress over time.
            </p>

            <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1fr]">
              <section className="rounded-3xl border border-beige bg-cream p-7 shadow-card sm:p-8">
                <h3 className="font-heading text-3xl text-walnut">
                  What’s Included
                </h3>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <li
                      className="flex gap-3 text-sm font-semibold leading-6 text-walnut/78"
                      key={item}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/12 text-xs font-bold text-sage">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-beige bg-cream p-7 shadow-card sm:p-8">
                <h3 className="font-heading text-3xl text-walnut">
                  Trial Lessons
                </h3>
                <p className="mt-5 leading-7 text-walnut/74">
                  Trial lessons are available upon request and are a great
                  opportunity to meet, discuss goals, and determine whether Byrd
                  Music Academy is a good fit for your child.
                </p>
                <div className="mt-7">
                  <a className="button-primary" href="#contact">
                    Schedule a Trial Lesson
                  </a>
                </div>
              </section>
            </div>

            <p className="mx-auto mt-10 max-w-2xl rounded-full border border-sage/20 bg-sage/10 px-5 py-3 text-center text-sm font-semibold text-sage">
              Limited openings are currently available for new students.
            </p>
          </div>
        </section>

        <section className="bg-walnut py-20 text-ivory sm:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
            <SectionHeading
              eyebrow="Why families choose Byrd Music Academy"
              title="Warm teaching with lasting musical foundations"
              dark
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {familyReasons.map((reason) => (
                <div
                  className="flex min-h-20 items-start gap-4 rounded-2xl border border-ivory/12 bg-ivory/7 p-5"
                  key={reason}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-bold text-ivory">
                    ✓
                  </span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-ivory/88">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="bg-ivory py-20 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Philosophy"
                title="More Than Just Notes"
              />
              <p className="mt-7 text-lg leading-8 text-walnut/76">
                At Byrd Music Academy, lessons are about more than learning songs.
                Music teaches discipline, creativity, perseverance, and an
                appreciation for beauty. Mrs. Byrd seeks to cultivate these
                qualities while helping students enjoy the gift of music in a
                warm and encouraging atmosphere.
              </p>
            </div>
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=85"
                alt="Sheet music and piano study materials"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1fr]">
            <SectionHeading eyebrow="FAQ" title="Questions before the first lesson" />
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <section id="contact" className="bg-sage py-20 text-ivory sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-ivory/70">
                Contact
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
                Ready to Begin?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/86">
                We would love to help your child begin their musical journey.
              </p>
              <div className="mt-8">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-ivory px-6 text-sm font-semibold text-walnut shadow-card transition hover:-translate-y-0.5 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-ivory focus:ring-offset-2 focus:ring-offset-sage"
                  href={`mailto:${contactEmail}`}
                >
                  Request Lesson Information
                </a>
              </div>
            </div>
            <address className="not-italic rounded-3xl border border-ivory/16 bg-ivory/10 p-7 shadow-card">
              <p className="font-heading text-2xl">Byrd Music Academy</p>
              <a
                className="mt-4 block text-ivory/88 underline decoration-ivory/30 underline-offset-4 hover:text-white"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
              <a
                className="mt-3 block text-ivory/88 underline decoration-ivory/30 underline-offset-4 hover:text-white"
                href={`tel:${contactPhone}`}
              >
                {formattedPhone}
              </a>
              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-ivory/62">
                  Service Area
                </p>
                <p className="mt-3 leading-7 text-ivory/86">
                  Irving, Las Colinas, Valley Ranch, Coppell, and surrounding DFW
                  communities.
                </p>
              </div>
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
