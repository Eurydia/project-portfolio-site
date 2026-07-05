import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { createFileRoute } from '@tanstack/react-router'
import { PageSection } from '#/components/layout/page-section'
import { FloatingSectionNav } from '#/components/navigation/floating-section-nav'
import { CredentialList } from '#/components/lists/credential-list'
import { InlineRouterLink } from '#/components/router/inline-router-link'
import { EntryList } from '#/components/home/entry-list'
import { ExperienceList } from '#/components/home/experience-list'

export const Route = createFileRoute('/')({ component: HomeRoute })

const sectionNav = [
  { id: 'maintained', label: 'Maintained' },
  { id: 'built', label: 'Built' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
] as const

const listDisplayOptions = {
  initialVisibleItems: 2,
  visibleItemIncrement: 5,
} as const

const educationDisplayOptions = {
  ...listDisplayOptions,
  initialVisibleItems: 3,
} as const

const maintainedProjects = [
  {
    title: 'SUT Mechanical Engineering Web Platform',
    period: 'December 2025 - Present',
    intro:
      'A bilingual Thai-English web platform for the School of Mechanical Engineering, Suranaree University of Technology.',
    notes: [
      'The school needs public content, staff records, thesis and final-project discovery, and administrative publishing in one maintainable system.',
      'I designed and implemented the UI, frontend, backend, database, CMS structure, and bilingual content schemas.',
      'The public site, database, and controllers for staff, thesis, and final-project discovery are complete. CMS workflows for admins, editors, and faculty are in progress.',
    ],
    tools: 'TypeScript, React, backend APIs, database design, CMS workflows',
    postmortem: '/catalog/sut-mechanical-engineering',
  },
  {
    title: 'GDGoC ELTE Chapter Infrastructure',
    period: 'November 2025 - Present',
    intro:
      'Public-facing infrastructure for Google Developer Group on Campus at Eotvos Lorand University.',
    notes: [
      'Chapter resources, event links, and writeups should not disappear into one-off social posts.',
      'I built and maintained the chapter website, link hub, and structure for publishing event resources and retrospectives.',
      'The implementation stays close to the chapter workflow: fast publication, clear navigation, and easy access to event material.',
    ],
    tools: 'React, TypeScript, TanStack Router, MUI, content pipeline',
    postmortem: '/catalog/gdgoc-elte',
  },
] as const

const builtProjects = [
  {
    title: 'Geometric Transformation Visualizer',
    period: 'June 2025 - December 2025',
    intro:
      'A Desmos-based classroom visualizer commissioned by the Department of Mathematics, Ayutthaya Witthayalai School.',
    notes: [
      'Mathayom 2 students needed a clearer way to see translation, rotation, scaling, and reflection as adjustable transformations.',
      'I built an interactive visualizer around adjustable parameters and classroom demonstration flow.',
      'It was adopted as a primary classroom demonstration tool for a cohort of about 150 students.',
    ],
    tools: 'Vite, TypeScript, React, Desmos',
    postmortem: '/catalog/geometric-transformation-visualizer',
  },
  {
    title: 'Structogram Builder',
    period: 'November 2023 - May 2024',
    intro:
      'An online Nassi-Shneiderman diagram builder for programming coursework and diagram-based explanation.',
    notes: [
      'Drawing structograms by hand can become slower than the programming exercise itself.',
      'I implemented the editor-to-diagram workflow, export behavior, and documentation around the tool.',
      'The important part was turning code structure into a diagram students could inspect, share, and reuse.',
    ],
    tools: 'React, TypeScript, Vite, MUI, CodeMirror, html-to-image',
    postmortem: '/catalog/structogram-builder',
  },
  {
    title: 'GitHub Repository Aggregator',
    period: '2024',
    intro:
      'A local-first interface for collecting repository data and making scattered GitHub state easier to inspect.',
    notes: [
      'Repository and issue tracking becomes noisy when the useful view is spread across too many GitHub pages.',
      'I worked through GitHub API integration, local data flow, and a compact developer-facing interface.',
      'The project is small, but it shows the kind of local tool I build when a web UI is too scattered for the task.',
    ],
    tools: 'Tauri, Rust, React, TypeScript, GitHub API, local persistence',
    postmortem: '/catalog/github-repository-aggregator',
  },
  {
    title: 'Propositional Logic Engine',
    period: '2025',
    intro:
      'A parser and visualizer for Boolean expressions, evaluation, and syntax-tree based explanation.',
    notes: [
      'Logic output is not useful when the rules and transformations are hidden behind a black box.',
      'I built parsing, evaluation, and visual explanation around explicit expression structure.',
      'The project is technical by nature, so the postmortem needs to explain the constraints without dressing it up as product theatre.',
    ],
    tools: 'TypeScript, Ohm.js, Monaco, KaTeX, visx',
    postmortem: '/catalog/propositional-logic-engine',
  },
] as const

const researchItems = [
  {
    title: 'Robot Navigation Perception Pipeline',
    period: 'July 2025 - January 2026',
    intro:
      'Research assistant work for a robot-navigation and path-planning project at the Department of Artificial Intelligence, ELTE.',
    notes: [
      'The robot needed robust control from overhead workspace imagery even when object placement changed.',
      'I trained and labeled the image-recognition model, extracted keypoints from fixed-camera frames, and published perception data through ROS messages.',
      'The related TDK research received Second Prize, qualified for OTDK, and later received a Morgan Stanley-funded novel research award.',
    ],
    tools: 'ROS, fixed-camera imagery, image recognition, keypoint extraction',
    postmortem: '/catalog/piroska-research',
  },
  {
    title: 'TDK / OTDK Research Project',
    period: '2025',
    intro:
      'Research writing and presentation around the robot-navigation project and its evaluation.',
    notes: [
      'I prepared the research project for TDK presentation and later OTDK qualification.',
      'This is not just a credential line. The research page should keep the method, constraints, and what I learned visible.',
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
      'Selected as Technical Team Leader through application, then invited to return in the following chapter.',
      'Directed technical delivery of the chapter inaugural algorithm contest: cross-language problem set, submission workflow, judging, and a 30-participant event.',
      'Built public-facing chapter infrastructure, including a chapter-branded link hub and groundwork for a post-event retrospective platform.',
    ],
  },
  {
    title: 'Functional Programming Teaching Assistant',
    period: 'February 2024 - May 2024',
    organization:
      'Department of Programming Languages and Compilers, Eotvos Lorand University',
    details: [
      'Graded weekly coursework for about 45 students and provided regular feedback throughout the term.',
      'Held 10 consultation sessions across a 12-week term, including weekend support, with roughly 10 students per session.',
    ],
  },
] as const

const educationItems = [
  {
    title: 'Bachelor of Science in Computer Science with Honors',
    body: 'Eotvos Lorand University, Budapest. Cumulative Grade Average: 4.51 / 5.00. Stipendium Hungaricum Scholarship.',
  },
  {
    title: 'IELTS Academic',
    body: 'Overall Band Score: 7.5, CEFR C1. Listening 8.5, Reading 8.0, Writing 6.5, Speaking 7.0.',
  },
  {
    title: 'TOEIC Listening & Reading Test',
    body: 'Total Score: 930 / 990. Listening 465 / Reading 465.',
  },
] as const

function HomeRoute() {
  return (
    <Box component="main">
      <FloatingSectionNav items={sectionNav} label="Landing page sections" />

      <Container
        maxWidth="lg"
        sx={(theme) => ({
          px: {
            xs: theme.spacing(2.5),
            sm: theme.spacing(4),
          },
          pt: {
            xs: theme.spacing(10),
            md: theme.spacing(12),
          },
          pb: {
            xs: theme.spacing(8),
            md: theme.spacing(10),
          },
        })}
      >
        <Stack spacing={{ xs: 7, md: 9 }} useFlexGap>
          <Stack component="section" spacing={{ xs: 4, md: 5 }} useFlexGap>
            <Stack spacing={2} useFlexGap>
              <Typography
                variant="overline"
                component="p"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                Eurydia
              </Typography>

              <Typography variant="h1" component="h1">
                Thanakorn Phuttharaksa
              </Typography>
            </Stack>

            <Stack spacing={1.5} useFlexGap>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              >
                If you were invited here and you are in a hurry, start with the{' '}
                <InlineRouterLink to="/portfolio">
                  compact summary
                </InlineRouterLink>{' '}
                of my work.
              </Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              >
                If you were invited here and you are not in a hurry, look
                around.
              </Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              >
                If you stumbled here, look around anyway.
              </Typography>
            </Stack>
          </Stack>

          <PageSection
            id="maintained"
            title="Projects I maintain"
            body="These are systems I built and still treat as ongoing responsibility. The compact page gives the short version; this page gives them enough room to be read properly."
          >
            <EntryList items={maintainedProjects} {...listDisplayOptions} />
          </PageSection>

          <PageSection
            id="built"
            title="Other projects I have built"
            body="Finished work that should be read as work, not as a stack inventory. Each project links to a postmortem page where the repository, screenshots, and extra details can live."
          >
            <EntryList items={builtProjects} {...listDisplayOptions} />
          </PageSection>

          <PageSection
            id="research"
            title="Research and notes"
            body="Research-adjacent work belongs outside the normal project list because the interesting part is often method, constraint, or presentation rather than deployment."
          >
            <EntryList items={researchItems} {...listDisplayOptions} />
          </PageSection>

          <PageSection
            id="experience"
            title="Experience"
            body="Roles where the work was not only code: delivery, teaching, review, coordination, and explaining things to other people."
          >
            <ExperienceList items={experienceItems} {...listDisplayOptions} />
          </PageSection>

          <PageSection
            id="education"
            title="Education and certifications"
            body="Degree, scholarship, and language qualifications. Useful context, kept separate from the project sections."
          >
            <CredentialList
              items={educationItems}
              {...educationDisplayOptions}
            />
          </PageSection>
        </Stack>
      </Container>
    </Box>
  )
}
