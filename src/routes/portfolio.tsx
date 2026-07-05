import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { createFileRoute } from '@tanstack/react-router'
import { SectionLabel } from '#/components/common/section-label'
import { FloatingSectionNav } from '#/components/navigation/floating-section-nav'
import type { FC, ReactNode } from 'react'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioRoute,
})

const sectionNav = [
  { id: 'overview', label: 'Overview' },
  { id: 'education', label: 'Education' },
  { id: 'english', label: 'English' },
  { id: 'experience', label: 'Experience' },
  { id: 'maintained-projects', label: 'Maintained' },
  { id: 'built-projects', label: 'Built' },
] as const

const experience = [
  {
    title: 'Technical Team Leader',
    organization: 'Google Developer Group on Campus, Eotvos Lorand University',
    location: 'Budapest, Hungary',
    period: 'October 2024 - January 2026',
    bullets: [
      'Selected as Technical Team Leader through application, then invited to return in the following chapter.',
      'Directed technical delivery of the chapter inaugural algorithm contest: cross-language problem set, submission workflow, judging, and a 30-participant event.',
      'Built public-facing chapter infrastructure, including a chapter-branded link hub and groundwork for a post-event retrospective platform.',
    ],
    postmortems: [
      {
        title: 'Read more about building GDGoC ELTE chapter infrastructure',
        href: '/catalog/gdgoc-elte',
      },
      {
        title: 'Read more about delivering the algorithm contest',
        href: '/catalog/gdgoc-elte-algorithm-contest',
      },
    ],
  },
  {
    title: 'Research Assistant',
    organization:
      'Department of Artificial Intelligence, Eotvos Lorand University',
    location: 'Budapest, Hungary',
    period: 'July 2025 - January 2026',
    bullets: [
      'Presented a TDK research project that received Second Prize, qualified for OTDK, and later received a Morgan Stanley-funded novel research award.',
      'Contributed to a robot-navigation and path-planning project using overhead workspace imagery to maintain robust control despite changes in object placement.',
      'Trained and labeled the image-recognition model, then integrated perception by extracting keypoints from fixed-camera frames and publishing ROS messages.',
    ],
    postmortems: [
      {
        title: 'Read more about the robot navigation perception pipeline',
        href: '/catalog/piroska-research',
      },
      {
        title: 'Read more about the TDK / OTDK research project',
        href: '/catalog/tdk-otdk',
      },
    ],
  },
  {
    title: 'Functional Programming Teaching Assistant',
    organization:
      'Department of Programming Languages and Compilers, Eotvos Lorand University',
    location: 'Budapest, Hungary',
    period: 'February 2024 - May 2024',
    bullets: [
      'Graded weekly coursework for about 45 students and provided regular feedback throughout the term.',
      'Held 10 consultation sessions across a 12-week term, including weekend support, with roughly 10 students per session.',
    ],
    postmortems: [
      {
        title: 'Read more about Functional Programming TA work',
        href: '/catalog/functional-programming-ta',
      },
    ],
  },
] as const

const maintainedProjects = [
  {
    title: 'SUT Mechanical Engineering Web Platform',
    tools: 'TypeScript, React',
    period: 'December 2025 - Present',
    bullets: [
      'Commissioned to build a full-stack bilingual Thai-English web platform for the School of Mechanical Engineering, Suranaree University of Technology.',
      'Designed and implemented the system end to end: UI, frontend, backend, database, CMS, and content schemas for bilingual public and administrative workflows.',
      'Completed the public site, database, and controllers for staff, thesis, and final-project discovery; currently developing CMS workflows for admins, editors, and faculty.',
    ],
    postmortems: [
      {
        title: 'Read more about the SUT Mechanical Engineering platform',
        href: '/catalog/sut-mechanical-engineering',
      },
    ],
  },
  {
    title: 'GDGoC ELTE Chapter Infrastructure',
    tools: 'React, TypeScript, TanStack Router, MUI, content pipeline',
    period: 'November 2025 - Present',
    bullets: [
      'Built and maintained public-facing infrastructure for the GDGoC ELTE chapter, including the chapter website and link hub.',
      'Prepared the site structure for event writeups, public resources, and chapter content managed outside one-off social posts.',
      'Kept the implementation focused on quick publication, clear navigation, and event-resource access.',
    ],
    postmortems: [
      {
        title: 'Read more',
        href: '/catalog/gdgoc-elte',
      },
    ],
  },
] as const

const builtProjects = [
  {
    title: 'Geometric Transformation Visualizer',
    tools: 'Vite, TypeScript, React, Desmos',
    period: 'June 2025 - December 2025',
    bullets: [
      'Commissioned by the Department of Mathematics, Ayutthaya Witthayalai School, for Mathayom 2 geometric transformation instruction.',
      'Built a Desmos-based visualizer for translation, rotation, scaling, and reflection through adjustable parameters.',
      'Adopted as a primary classroom demonstration tool for a cohort of about 150 students.',
    ],
    postmortems: [
      {
        title: 'Read more about the Geometric Transformation Visualizer',
        href: '/catalog/geometric-transformation-visualizer',
      },
    ],
  },
  {
    title: 'Structogram Builder',
    tools: 'React, TypeScript, Vite, MUI, CodeMirror, html-to-image',
    period: 'November 2023 - May 2024',
    bullets: [
      'Built an online Nassi-Shneiderman diagram builder for programming coursework and diagram-based explanation.',
      'Implemented the editor-to-diagram workflow, export behavior, and documentation around the tool.',
      'Focused on turning code structure into a diagram students could inspect, share, and reuse.',
    ],
    postmortems: [
      {
        title: 'Read more',
        href: '/catalog/structogram-builder',
      },
    ],
  },
  {
    title: 'GitHub Repository Aggregator',
    tools: 'Tauri, Rust, React, TypeScript, GitHub API, local persistence',
    period: '2024',
    bullets: [
      'Built a local-first interface for collecting repository data and making scattered GitHub state easier to inspect.',
      'Worked through GitHub API integration, local data flow, and compact developer-facing UI.',
    ],
    postmortems: [
      {
        title: 'Read more',
        href: '/catalog/github-repository-aggregator',
      },
    ],
  },
  {
    title: 'Propositional Logic Engine',
    tools: 'TypeScript, Ohm.js, Monaco, KaTeX, visx',
    period: '2025',
    bullets: [
      'Built a parser and visualizer for Boolean expressions, evaluation, and syntax-tree based explanation.',
      'Focused on explicit rules and inspectable transformations instead of treating logic output as a black box.',
    ],
    postmortems: [
      {
        title: 'Read more',
        href: '/catalog/propositional-logic-engine',
      },
    ],
  },
] as const

function PortfolioRoute() {
  return (
    <Box component="main">
      <FloatingSectionNav items={sectionNav} label="Resume sections" />

      <Container
        maxWidth="md"
        sx={(theme) => ({
          px: {
            xs: theme.spacing(2.5),
            sm: theme.spacing(4),
          },
          py: {
            xs: theme.spacing(9),
            md: theme.spacing(12),
          },
        })}
      >
        <Stack spacing={{ xs: 5, md: 6 }} useFlexGap>
          <ResumeSection id="overview">
            <Typography
              variant="overline"
              component="p"
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Online resume
            </Typography>

            <Typography variant="h1" component="h1">
              Thanakorn Phuttharaksa
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 0.75, sm: 2 }}
              useFlexGap
              sx={(theme) => ({
                color: theme.palette.text.secondary,
              })}
            >
              <Link
                href="mailto:tphuttharaksabusiness@gmail.com"
                variant="body2"
              >
                tphuttharaksabusiness@gmail.com
              </Link>
              <Box
                component="span"
                sx={() => ({ display: { xs: 'none', sm: 'block' } })}
              >
                /
              </Box>
              <Link
                href="https://github.com/Eurydia"
                target="_blank"
                rel="noreferrer"
                variant="body2"
              >
                github.com/Eurydia
              </Link>
            </Stack>
          </ResumeSection>

          <ResumeSection id="education" title="Education">
            <ResumeEntry
              title="Bachelor of Science in Computer Science with Honors"
              subtitle="Eotvos Lorand University"
              location="Budapest, Hungary"
              period="August 2022 - February 2026"
              bullets={[
                'Cumulative Grade Average: 4.51 / 5.00.',
                'Stipendium Hungaricum Scholarship.',
              ]}
            />
          </ResumeSection>

          <ResumeSection id="english" title="English proficiency">
            <Stack divider={<Divider />}>
              <ScoreRow
                title="IELTS Academic"
                period="December 2020"
                summary="Overall Band Score: 7.5 (CEFR C1)"
                details="Listening 8.5 / Reading 8.0 / Writing 6.5 / Speaking 7.0"
              />
              <ScoreRow
                title="TOEIC Listening & Reading Test"
                period="October 2020"
                summary="Total Score: 930 / 990"
                details="Listening 465 / Reading 465"
              />
            </Stack>
          </ResumeSection>

          <ResumeSection id="experience" title="Experience">
            <Stack divider={<Divider />}>
              {experience.map((entry) => (
                <ResumeEntry key={entry.title} {...entry} />
              ))}
            </Stack>
          </ResumeSection>

          <ResumeSection id="maintained-projects" title="Projects I maintain">
            <Stack divider={<Divider />}>
              {maintainedProjects.map((entry) => (
                <ProjectEntry key={entry.title} {...entry} />
              ))}
            </Stack>
          </ResumeSection>

          <ResumeSection
            id="built-projects"
            title="Other projects I have built"
          >
            <Stack divider={<Divider />}>
              {builtProjects.map((entry) => (
                <ProjectEntry key={entry.title} {...entry} />
              ))}
            </Stack>
          </ResumeSection>
        </Stack>
      </Container>
    </Box>
  )
}

const ResumeSection: FC<{
  id: string
  title?: string
  children: ReactNode
}> = (props) => {
  return (
    <Box
      id={props.id}
      component="section"
      sx={(theme) => ({
        scrollMarginTop: theme.spacing(11),
        py: props.title
          ? {
              xs: theme.spacing(0.5),
              md: theme.spacing(1),
            }
          : 0,
      })}
    >
      {props.title ? (
        <Typography variant="h2" component="h2">
          {props.title}
        </Typography>
      ) : null}
      {props.children}
    </Box>
  )
}

const ResumeEntry: FC<{
  title: string
  subtitle?: string
  organization?: string
  location?: string
  period: string
  bullets: readonly string[]
  postmortems?: readonly PostmortemLink[]
  children?: ReactNode
}> = (props) => {
  return (
    <Box sx={(theme) => ({ py: theme.spacing(2.25) })}>
      <Grid container rowSpacing={1.25} columnSpacing={3}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="h3" component="h3">
            {props.title}
          </Typography>
          <SectionLabel>{props.period}</SectionLabel>
        </Grid>

        <Grid size={{ xs: 12, sm: 8 }}>
          <BodyText>{props.subtitle ?? props.organization}</BodyText>
          {props.location ? (
            <Typography
              variant="body2"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
              })}
            >
              {props.location}
            </Typography>
          ) : null}
          <BulletList items={props.bullets} />
          {props.children}
          {props.postmortems ? (
            <PostmortemLinks items={props.postmortems} />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  )
}

const ProjectEntry: FC<{
  title: string
  tools: string
  period: string
  bullets: readonly string[]
  postmortems?: readonly PostmortemLink[]
}> = (props) => {
  return (
    <ResumeEntry
      title={props.title}
      period={props.period}
      bullets={props.bullets}
    >
      <Typography
        variant="body2"
        component="p"
        sx={(theme) => ({
          color: theme.palette.text.secondary,
        })}
      >
        {props.tools}
      </Typography>
      {props.postmortems ? <PostmortemLinks items={props.postmortems} /> : null}
    </ResumeEntry>
  )
}

type PostmortemLink = {
  title: string
  href: string
}

const PostmortemLinks: FC<{ items: readonly PostmortemLink[] }> = (props) => {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      useFlexGap
      sx={(theme) => ({
        flexWrap: 'wrap',
        mt: theme.spacing(2),
      })}
    >
      {props.items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          underline="always"
          variant="subtitle2"
          sx={(theme) => ({
            color: theme.palette.primary.main,
          })}
        >
          {item.title}
        </Link>
      ))}
    </Stack>
  )
}

const ScoreRow: FC<{
  title: string
  period: string
  summary: string
  details: string
}> = (props) => {
  return (
    <Box
      sx={(theme) => ({
        py: theme.spacing(2),
      })}
    >
      <Grid container rowSpacing={0.75} columnSpacing={3}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="h3" component="h3">
            {props.title}
          </Typography>
          <SectionLabel>{props.period}</SectionLabel>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <BodyText>{props.summary}</BodyText>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
            })}
          >
            {props.details}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

const BulletList: FC<{ items: readonly string[] }> = (props) => {
  return (
    <Box
      component="ul"
      sx={(theme) => ({
        m: 0,
        mt: theme.spacing(1.25),
        pl: theme.spacing(2.25),
      })}
    >
      {props.items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={(theme) => ({
            pl: theme.spacing(0.25),
          })}
        >
          {item}
        </Typography>
      ))}
    </Box>
  )
}

const BodyText: FC<{ children: ReactNode }> = (props) => {
  return <Typography variant="body2">{props.children}</Typography>
}
