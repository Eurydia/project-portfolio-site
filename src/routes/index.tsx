import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { createFileRoute } from '@tanstack/react-router'
import { PageSection } from '#/components/layout/page-section'
import { CredentialList } from '#/components/lists/credential-list'
import { EntryList } from '#/components/lists/entry-list'
import { ExperienceList } from '#/components/lists/experience-list'
import { AppFooter } from '#/components/app-footer'
import { AppHeader } from '#/components/app-header'
import { LandingHero } from '#/components/landing/landing-hero'

export const Route = createFileRoute('/')({ component: HomeRoute })

const maintainedProjects = [
  {
    title: 'SUT Mechanical Engineering Web Platform',
    period: 'December 2025 - Present',
    intro:
      'Bilingual Thai-English platform for public content, staff records, thesis discovery, final-project discovery, and CMS workflows.',
    notes: [
      'Owned UI, frontend, backend, database, CMS structure, and bilingual content schema.',
      'Completed the public site, database, and discovery controllers.',
      'Building admin, editor, and faculty CMS workflows next.',
    ],
    tools: 'TypeScript, React, backend APIs, database design, CMS workflows',
    postmortem: '/catalog/sut-mechanical-engineering',
  },
  {
    title: 'GDGoC ELTE Chapter Infrastructure',
    period: 'November 2025 - Present',
    intro:
      'Chapter web infrastructure for GDGoC ELTE: website, link hub, event resources, and writeups.',
    notes: [
      'Built the public site and link hub around fast publication.',
      'Kept event material reachable outside temporary social posts.',
      'Maintain the structure for chapter resources and retrospectives.',
    ],
    tools: 'React, TypeScript, TanStack Router, MUI, content pipeline',
    postmortem: '/catalog/gdgoc-elte',
  },
  {
    title: 'Textile',
    period: 'December 2025 - Present',
    intro:
      'Digital-garden experiment that uses LaTeX as the source format instead of Markdown.',
    notes: [
      'Built around the idea that technical notes can keep more of the structure and feel of TeX documents.',
      'Separated the site engine from content so the writing format can stay closer to the source material.',
      'Kept the project honest about the parts where browser rendering and document semantics do not line up cleanly.',
    ],
    tools: 'LaTeX source format, digital garden pipeline, frontend rendering',
    postmortem: '/catalog/textile',
  },
] as const

const builtProjects = [
  {
    title: 'Geometric Transformation Visualizer',
    period: 'June 2025 - December 2025',
    intro:
      'Desmos-based classroom visualizer for translation, rotation, scaling, and reflection.',
    notes: [
      'Commissioned by Ayutthaya Witthayalai School Mathematics Department for Mathayom 2 instruction.',
      'Built adjustable transformation controls for classroom demonstration.',
      'Adopted as the main demonstration tool for about 150 students.',
    ],
    tools: 'Vite, TypeScript, React, Desmos',
    postmortem: '/catalog/geometric-transformation-visualizer',
  },
  {
    title: 'Structogram Builder',
    period: 'November 2023 - May 2024',
    intro:
      'Online Nassi-Shneiderman diagram builder for programming coursework.',
    notes: [
      'Built the editor-to-diagram flow, export behavior, and documentation.',
      'Reduced the hand-drawing overhead around structogram assignments.',
      'Made code structure inspectable, shareable, and reusable.',
    ],
    tools: 'React, TypeScript, Vite, MUI, CodeMirror, html-to-image',
    postmortem: '/catalog/structogram-builder',
  },
  {
    title: 'GitHub Repository Aggregator',
    period: '2024',
    intro:
      'Local-first GitHub repository inspection tool for scattered project state.',
    notes: [
      'Collected repository data through the GitHub API.',
      'Worked through local data flow and compact developer-facing UI.',
      'Built for review tasks that are too scattered across GitHub pages.',
    ],
    tools: 'Tauri, Rust, React, TypeScript, GitHub API, local persistence',
    postmortem: '/catalog/github-repository-aggregator',
  },
  {
    title: 'Propositional Logic Engine',
    period: '2025',
    intro:
      'Boolean expression parser and visualizer for evaluation and syntax-tree explanation.',
    notes: [
      'Implemented parsing, evaluation, and visual explanation around explicit expression structure.',
      'Kept transformations inspectable instead of hiding output behind a black box.',
      'Use the postmortem for implementation constraints and tradeoffs.',
    ],
    tools: 'TypeScript, Ohm.js, Monaco, KaTeX, visx',
    postmortem: '/catalog/propositional-logic-engine',
  },
  {
    title: 'Student Event Q&A Platform',
    period: '2026',
    intro:
      'Event Q&A system for collecting, grouping, timing, and moderating questions outside a generic form workflow.',
    notes: [
      'Built the app flow around sessions, access control, QR entry, countdown timing, and controlled participation.',
      'Used authentication, database state, rate limiting, and validation instead of treating the event as a static survey.',
      'Kept client and server concerns explicit enough for the postmortem to cover boundaries and tradeoffs later.',
    ],
    tools:
      'TanStack Start, React, TypeScript, MUI, Prisma, Better Auth, Redis, Zod',
    postmortem: '/catalog/student-event-qa-platform',
  },
  {
    title: 'Yoga Correct',
    period: '2026',
    intro:
      'Desktop yoga-feedback app built around camera input, exercise state, and local model execution.',
    notes: [
      'Worked through Electron main, preload, and renderer boundaries for a desktop interface rather than a browser-only demo.',
      'Integrated ONNX runtime, guided exercise flows, timers, markdown content, media playback, and user feedback surfaces.',
      'Designed for behavior that has to remain legible while webcam/model output changes over time.',
    ],
    tools:
      'Electron, electron-vite, React, TypeScript, MUI, TanStack Router, ONNX Runtime, Zod',
    postmortem: '/catalog/yoga-correct',
  },
  {
    title: 'Basic Statistics Explorer',
    period: '2025',
    intro:
      'Interactive statistics explorer for classroom-style data inspection, charts, and formula-supported explanation.',
    notes: [
      'Built visual exploration around charting, box plots, array operations, and MathJax notation.',
      'Used chart libraries where the hard part was visual behavior rather than reimplementing plotting primitives.',
      'Kept the interface focused on inspecting data and distributions instead of turning statistics into a slide deck.',
    ],
    tools: 'React, TypeScript, Vite, MUI, Chart.js, D3 Array, MathJax',
    postmortem: '/catalog/basic-statistics-explorer',
  },
  {
    title: 'Supply and Demand Explorer',
    period: '2025',
    intro:
      'Interactive economics explorer for editing tabular data and seeing supply-demand behavior through charts.',
    notes: [
      'Combined spreadsheet-like input with chart output so changes in data remain visible immediately.',
      'Used routing, tabular editing, and chart components to keep the workflow closer to an analysis tool than a static page.',
      'Kept generated data and test tooling available around the interface work.',
    ],
    tools:
      'React, TypeScript, Vite, MUI, TanStack Router, Handsontable, Recharts, Vitest',
    postmortem: '/catalog/supply-and-demand-explorer',
  },
  {
    title: 'DSP Calculator',
    period: '2022 - 2025',
    intro:
      'Calculator for Dyson Sphere Program item planning, backed by a separate item-registry package.',
    notes: [
      'Built a React interface around a reusable game item registry instead of hard-coding every calculation into the page.',
      'Published and versioned the app as a public project rather than keeping it as a throwaway spreadsheet replacement.',
      'Worked through enough iteration to reach a maintained 2.x version line.',
    ],
    tools: 'React, TypeScript, Vite, MUI, gh-pages, @eurydos/dsp-item-registry',
    postmortem: '/catalog/dsp-calculator',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    period: '2025',
    intro:
      'Sorting visualizer that exposes algorithm steps instead of only animating bars moving around.',
    notes: [
      'Implemented the interface around comparison and swap descriptions so the algorithm state is readable.',
      'Covered common sorting families including bubble, insertion, selection, merge, heap, counting, and radix sort.',
      'Kept the visualizer small enough to explain the algorithms without turning it into a general animation framework.',
    ],
    tools: 'React, TypeScript, Vite, MUI, React Router',
    postmortem: '/catalog/sorting-algorithm-visualizer',
  },
  {
    title: 'Alexandrite',
    period: '2025',
    intro:
      'Desktop unit-conversion calculator built as a small Tauri application.',
    notes: [
      'Built the conversion interface as a local desktop app rather than a hosted web page.',
      'Kept the stack deliberately small: React and TypeScript in the frontend, Tauri for the shell.',
      'Used the project to work through packaging a focused utility rather than extending a broad dashboard.',
    ],
    tools: 'Tauri, React, TypeScript, Vite',
    postmortem: '/catalog/alexandrite',
  },
] as const

const researchItems = [
  {
    title: 'Robot Navigation Perception Pipeline',
    period: 'July 2025 - January 2026',
    intro:
      'Robot-navigation perception pipeline using overhead workspace imagery.',
    notes: [
      'Labeled and trained image recognition for changing object placements.',
      'Extracted keypoints from fixed-camera frames and published ROS perception messages.',
      'Related TDK work received Second Prize, OTDK qualification, and a Morgan Stanley-funded award.',
    ],
    tools: 'ROS, fixed-camera imagery, image recognition, keypoint extraction',
    postmortem: '/catalog/piroska-research',
  },
  {
    title: 'TDK / OTDK Research Project',
    period: '2025',
    intro:
      'Research writing and presentation for the robot-navigation project.',
    notes: [
      'Prepared the project for TDK presentation and OTDK qualification.',
      'Kept method, constraints, evaluation, and lessons visible beyond the credential line.',
    ],
    tools: 'Research writing, presentation, experiment notes',
    postmortem: '/catalog/tdk-otdk',
  },
] as const

const experienceItems = [
  {
    title: 'Technical Team Leader',
    period: 'October 2024 - January 2026',
    organization: 'Google Developer Group on Campus, Eotvos Lorand University',
    details: [
      'Selected through application; invited to return for the following chapter.',
      'Led the inaugural algorithm contest: problem set, submission workflow, judging, and 30 participants.',
      'Built chapter infrastructure, including the link hub and retrospective platform groundwork.',
    ],
  },
  {
    title: 'Functional Programming Teaching Assistant',
    period: 'February 2024 - May 2024',
    organization:
      'Department of Programming Languages and Compilers, Eotvos Lorand University',
    details: [
      'Graded weekly coursework for about 45 students with regular feedback.',
      'Held 10 consultation sessions across 12 weeks, including weekend support.',
    ],
  },
] as const

const educationItems = [
  {
    title: 'Bachelor of Science in Computer Science with Honors',
    body: 'Eotvos Lorand University, Budapest. CGA 4.51 / 5.00. Stipendium Hungaricum Scholarship.',
  },
  {
    title: 'IELTS Academic',
    body: 'Overall 7.5, CEFR C1. Listening 8.5, Reading 8.0, Writing 6.5, Speaking 7.0.',
  },
  {
    title: 'TOEIC Listening & Reading Test',
    body: 'Total 930 / 990. Listening 465, Reading 465.',
  },
] as const

function HomeRoute() {
  return (
    <Container
      maxWidth="md"
      sx={(theme) => ({
        paddingY: {
          xs: theme.spacing(10),
          md: theme.spacing(12),
        },
      })}
    >
      <Stack spacing={{ xs: 7, md: 9 }} useFlexGap>
        <AppHeader />
        <LandingHero />
        <PageSection
          id="maintained"
          title="Projects I maintain"
          count={maintainedProjects.length}
        >
          <EntryList items={maintainedProjects} />
        </PageSection>

        <PageSection
          id="built"
          title="Other projects I have built"
          count={builtProjects.length}
        >
          <EntryList items={builtProjects} />
        </PageSection>

        <PageSection
          id="research"
          title="Research and notes"
          count={researchItems.length}
        >
          <EntryList items={researchItems} />
        </PageSection>

        <PageSection
          id="experience"
          title="Experience"
          count={experienceItems.length}
        >
          <ExperienceList items={experienceItems} />
        </PageSection>

        <PageSection
          id="education"
          title="Education and certifications"
          count={educationItems.length}
        >
          <CredentialList items={educationItems} initialVisibleItems={3} />
        </PageSection>
        <AppFooter />
      </Stack>
    </Container>
  )
}
