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
    detail:
      'This is an active departmental web platform rather than a static faculty page. The private GitHub repository exposes the project as an ongoing system, so the expanded summary keeps the claims at the system-boundary level: public bilingual pages, searchable academic records, and CMS work split around the people who will actually maintain the content after handoff.',
    notes: [
      'Owned UI, frontend, backend, database, CMS structure, and bilingual content schema.',
      'Completed the public site, database, and discovery controllers.',
      'Building admin, editor, and faculty CMS workflows next.',
    ],
    details: [
      'The public side is structured around content that has to be found again: staff profiles, research records, thesis records, and final-project records.',
      'The bilingual model matters because the site has Thai and English readers, not because translation is decorative text at the edge of the page.',
      'The CMS boundary is part of the build: admin, editor, and faculty workflows are separated so content ownership does not collapse into one fragile account.',
      'The practical work includes interface layout, API behavior, database shape, record discovery, and the handoff path for people who will update the system later.',
    ],
    tools: 'TypeScript, React, backend APIs, database design, CMS workflows',
    media: [
      { label: 'me.eng.sut-university.site / public content map' },
      { label: 'me.eng.sut-university.site / record discovery flow' },
      { label: 'me.eng.sut-university.site / CMS role boundary' },
    ],
  },
  {
    title: 'GDGoC ELTE Chapter Infrastructure',
    period: 'November 2025 - Present',
    intro:
      'Chapter web infrastructure for GDGoC ELTE: website, link hub, event resources, and writeups.',
    detail:
      'The GitHub footprint is split across the public chapter site, a link hub, and content-oriented repositories. The main site uses React, TanStack Router, MUI, and a content build pipeline with unified, remark, and rehype; the link hub is a smaller Vite deployment that exists for quick access during events. The useful part is not the branding, it is that chapter material can survive outside temporary posts.',
    notes: [
      'Built the public site and link hub around fast publication.',
      'Kept event material reachable outside temporary social posts.',
      'Maintain the structure for chapter resources and retrospectives.',
    ],
    details: [
      'The public site carries longer-lived material such as event pages, writeups, and chapter information.',
      'The link hub covers the shorter event workflow: links, registrations, forms, resources, and anything that needs to be reachable fast.',
      'The content pipeline keeps Markdown-adjacent writing separate from the UI layer, with build steps responsible for turning source material into site content.',
      'The repo structure reflects maintenance work: publishing, fixing, and updating the chapter presence without turning every small event into a new one-off page.',
    ],
    tools:
      'React, TypeScript, TanStack Router, MUI, unified, remark, rehype, gh-pages',
    media: [
      { label: 'gdgoc-elte / public site overview' },
      { label: 'gdgoc-elte-linktree / event link surface' },
      { label: 'gdgoc-elte / content build pipeline' },
    ],
  },
  {
    title: 'Textile',
    period: 'December 2025 - Present',
    intro:
      'Digital-garden experiment that uses LaTeX as the source format instead of Markdown.',
    detail:
      'The README frames Textile as a digital garden whose source format is LaTeX rather than Markdown. That gives the project a specific problem to solve: keeping the structure and character of TeX notes while rendering them inside a browser environment that was not designed around document semantics. The repo and its companion content repository make the split between engine and writing explicit.',
    notes: [
      'Built around the idea that technical notes can keep more of the structure and feel of TeX documents.',
      'Separated the site engine from content so the writing format can stay closer to the source material.',
      'Kept the project honest about the parts where browser rendering and document semantics do not line up cleanly.',
    ],
    details: [
      'The source format is the point of the project: notes begin closer to LaTeX than to a blog CMS or Markdown document.',
      'The browser layer has to decide what should remain document-like, what should become navigable web content, and what should be left alone.',
      'The repository split keeps site machinery and writing from becoming one tangled folder of experiments.',
      'The project is useful as a record of the tradeoff between document beauty, web rendering, and maintainable note publishing.',
    ],
    tools: 'LaTeX source format, digital garden pipeline, frontend rendering',
    media: [
      { label: 'project-textile / LaTeX source note' },
      { label: 'project-textile / rendered digital garden page' },
      { label: 'project-textile-content / note archive shape' },
    ],
  },
] as const

const builtProjects = [
  {
    title: 'Geometric Transformation Visualizer',
    period: 'June 2025 - December 2025',
    intro:
      'Desmos-based classroom visualizer for translation, rotation, scaling, and reflection.',
    detail:
      'This project was built as a classroom tool for Mathayom 2 geometry instruction, with Desmos handling the graphing surface and React handling the surrounding control flow. The package metadata shows a focused frontend stack with MUI, TanStack Form, TanStack Router, Desmos, zod, and MathJax-related tooling, which fits the actual requirement: parameter changes should be visible enough for a class demonstration.',
    notes: [
      'Commissioned by Ayutthaya Witthayalai School Mathematics Department for Mathayom 2 instruction.',
      'Built adjustable transformation controls for classroom demonstration.',
      'Adopted as the main demonstration tool for about 150 students.',
    ],
    details: [
      'The visualizer centers on four geometric transformations: translation, rotation, scaling, and reflection.',
      'The interface work is mostly about making parameters clear enough that the graph responds in a way a classroom can follow.',
      'Desmos is used for the mathematical display instead of reimplementing a graphing engine.',
      'The project was deployed as a usable teaching surface, not just a local experiment.',
    ],
    tools: 'Vite, TypeScript, React, MUI, TanStack Form, Desmos, zod',
    media: [
      { label: 'project-geometric-transformation-explorer / controls' },
      { label: 'project-geometric-transformation-explorer / Desmos graph' },
      { label: 'project-geometric-transformation-explorer / classroom mode' },
    ],
  },
  {
    title: 'Structogram Builder',
    period: 'November 2023 - May 2024',
    intro:
      'Online Nassi-Shneiderman diagram builder for programming coursework.',
    detail:
      'The online builder sits on top of a separate structogram component package, which keeps the diagram rendering logic from being trapped inside one page. The app repository uses CodeMirror, html-to-image, file-saver, KaTeX, and MUI around that renderer, so the expanded work is the editor, export path, documentation surface, and the practical behavior students need when assignments require structured diagrams.',
    notes: [
      'Built the editor-to-diagram flow, export behavior, and documentation.',
      'Reduced the hand-drawing overhead around structogram assignments.',
      'Made code structure inspectable, shareable, and reusable.',
    ],
    details: [
      'The editor flow turns typed structure into a Nassi-Shneiderman diagram without requiring students to manually draw every block.',
      'The rendering layer is package-backed, which made the diagram component reusable beyond the original page.',
      'Export support matters because coursework often ends outside the web app: images and files have to move into submissions or documents.',
      'The surrounding documentation keeps the tool usable for students who came for the diagram, not for the implementation details.',
    ],
    tools:
      'React, TypeScript, Vite, MUI, CodeMirror, KaTeX, html-to-image, file-saver',
    media: [
      { label: 'project-structogram-builder-online / editor' },
      { label: 'project-structogram-builder-online / diagram output' },
      { label: 'project-structogram-builder-online / export flow' },
    ],
  },
  {
    title: 'GitHub Repository Aggregator',
    period: '2024',
    intro:
      'Local-first GitHub repository inspection tool for scattered project state.',
    detail:
      'This local-first repository review tool was built for scattered project state. I could verify the broader GitHub project set and the current repo list, but the exact aggregator source is not exposed under an obvious public name. The verified behavior is collecting repository state, making project information easier to scan, and keeping the review surface local enough for repeated use.',
    notes: [
      'Collected repository data through the GitHub API.',
      'Worked through local data flow and compact developer-facing UI.',
      'Built for review tasks that are too scattered across GitHub pages.',
    ],
    details: [
      'The core use case was project review: repositories, status, and small bits of context are easier to compare when they are not split across many GitHub pages.',
      'The interface needed to be compact because the value is scanning and filtering, not displaying one repository at a time.',
      'A local-first shape makes sense for this kind of tool because the data is mainly reference material for repeated personal review.',
      'The current project record avoids pretending the source is public; the important surfaces are the repository list, local details, and sync state.',
    ],
    tools: 'Tauri, Rust, React, TypeScript, GitHub API, local persistence',
    media: [
      { label: 'repository aggregator / repository list view' },
      { label: 'repository aggregator / local project details' },
      { label: 'repository aggregator / GitHub sync state' },
    ],
  },
  {
    title: 'Propositional Logic Engine',
    period: '2025',
    intro:
      'Boolean expression parser and visualizer for evaluation and syntax-tree explanation.',
    detail:
      'This is the formal-rules project in the list. It is not useful because the stack is large; it is useful because parsing, evaluation, transformations, and visual explanation make the boundary of the system clear. The value is in showing how an expression becomes structure, how that structure is evaluated, and how intermediate reasoning can be inspected instead of hidden behind one final answer.',
    notes: [
      'Implemented parsing, evaluation, and visual explanation around explicit expression structure.',
      'Kept transformations inspectable instead of hiding output behind a black box.',
      'Documented implementation constraints and tradeoffs as part of the project record.',
    ],
    details: [
      'The parser turns propositional expressions into an explicit structure that can be evaluated and displayed.',
      'The visual layer is useful because logic tooling becomes much less helpful when it only returns a final true or false result.',
      'The implementation is a good place to discuss grammar choices, invalid input, operator precedence, and display tradeoffs.',
      'The same structure can support examples such as syntax trees, truth evaluation, normal-form conversion, or equivalence checks if those are still part of the current version.',
    ],
    tools: 'TypeScript, Ohm.js, Monaco, KaTeX, visx',
    media: [
      { label: 'logic engine / expression editor' },
      { label: 'logic engine / syntax tree view' },
      { label: 'logic engine / evaluation trace' },
    ],
  },
  {
    title: 'Student Event Q&A Platform',
    period: '2026',
    intro:
      'Event Q&A system for collecting, grouping, timing, and moderating questions outside a generic form workflow.',
    detail:
      'The `project-amber` package shows this as a real application stack: TanStack Start, MUI 9, Prisma, Better Auth, Redis, rate limiting, QR code generation, countdown UI, date pickers, tests, and Wrangler deployment. That matches the shape of an event Q&A platform where entry, timing, session state, moderation, and participation limits matter more than simply collecting text in a form.',
    notes: [
      'Built the app flow around sessions, access control, QR entry, countdown timing, and controlled participation.',
      'Used authentication, database state, rate limiting, and validation instead of treating the event as a static survey.',
      'Kept client and server concerns explicit enough to explain boundaries and tradeoffs.',
    ],
    details: [
      'The platform treats a Q&A session as a timed workflow with access rules, not as an open-ended public form.',
      'Authentication and database state support controlled participation, while Redis-backed rate limiting helps keep the submission path from being abused.',
      'QR entry and countdown components make the event surface usable in a room where participants need to join quickly.',
      'The server and client boundary is worth showing because the interesting part is the rule system around participation and moderation.',
    ],
    tools:
      'TanStack Start, React, TypeScript, MUI, Prisma, Better Auth, Redis, Zod, Wrangler',
    media: [
      { label: 'project-amber / participant entry' },
      { label: 'project-amber / moderator queue' },
      { label: 'project-amber / session timing' },
    ],
  },
  {
    title: 'Yoga Correct',
    period: '2026',
    intro:
      'Desktop yoga-feedback app built around camera input, exercise state, and local model execution.',
    detail:
      'The private `project-yoga-correct` repository is a desktop application using Electron, electron-vite, ONNX Runtime, MUI 9, TanStack Router, onboarding, timers, markdown content, media playback, and validation. The important part is the product boundary: webcam/model output has to become feedback that remains understandable while the user is moving, not a demo that only proves a model can run.',
    notes: [
      'Worked through Electron main, preload, and renderer boundaries for a desktop interface rather than a browser-only demo.',
      'Integrated ONNX runtime, guided exercise flows, timers, markdown content, media playback, and user feedback surfaces.',
      'Designed for behavior that has to remain legible while webcam/model output changes over time.',
    ],
    details: [
      'Electron makes the app a desktop product with main, preload, and renderer concerns instead of a plain web page.',
      'ONNX Runtime keeps model execution local, which changes the engineering problem from API calls to lifecycle, loading, feedback, and performance.',
      'The exercise flow combines media, timers, instructions, and validation so feedback can be tied to the current movement rather than a generic score.',
      'The strongest evidence is in the feedback states, because that is where the system behavior is easiest to inspect.',
    ],
    tools:
      'Electron, electron-vite, React, TypeScript, MUI, TanStack Router, ONNX Runtime, Zod',
    media: [
      { label: 'project-yoga-correct / exercise screen' },
      { label: 'project-yoga-correct / feedback state' },
      { label: 'project-yoga-correct / onboarding flow' },
    ],
  },
  {
    title: 'Basic Statistics Explorer',
    period: '2025',
    intro:
      'Interactive statistics explorer for classroom-style data inspection, charts, and formula-supported explanation.',
    detail:
      'The repository package shows a compact statistics frontend using React 19, MUI 7, Chart.js, D3 Array, MathJax, and a boxplot chart plugin. That makes the project more specific than a generic chart demo: it is a teaching and inspection surface where formulas, distributions, and visual summaries need to sit near each other.',
    notes: [
      'Built visual exploration around charting, box plots, array operations, and MathJax notation.',
      'Used chart libraries where the hard part was visual behavior rather than reimplementing plotting primitives.',
      'Kept the interface focused on inspecting data and distributions instead of turning statistics into a slide deck.',
    ],
    details: [
      'Chart.js handles the core charting while the boxplot plugin covers a visualization that is useful for distribution discussion.',
      'D3 Array is used for data operations instead of burying statistical calculations in unstructured UI code.',
      'MathJax support keeps notation close to the visuals, which is important when the app is explaining a calculation rather than only showing the result.',
      'The project separates data input, chart output, and formula explanation so each part can be inspected independently.',
    ],
    tools: 'React, TypeScript, Vite, MUI, Chart.js, D3 Array, MathJax',
    media: [
      { label: 'project-basic-statistics-explorer / data table' },
      { label: 'project-basic-statistics-explorer / chart view' },
      { label: 'project-basic-statistics-explorer / formula note' },
    ],
  },
  {
    title: 'Supply and Demand Explorer',
    period: '2025',
    intro:
      'Interactive economics explorer for editing tabular data and seeing supply-demand behavior through charts.',
    detail:
      'The package metadata shows why this is not just a static economics page: Handsontable provides spreadsheet-like editing, Recharts handles the visual output, TanStack Router keeps the app structured, and test/generated-data tooling supports repeatable examples. The central behavior is edit data, observe the curve or chart response, and keep the relationship between table and graph visible.',
    notes: [
      'Combined spreadsheet-like input with chart output so changes in data remain visible immediately.',
      'Used routing, tabular editing, and chart components to keep the workflow closer to an analysis tool than a static page.',
      'Kept generated data and test tooling available around the interface work.',
    ],
    details: [
      'Handsontable is the right dependency for the task because the user interaction is editing tabular values, not filling out isolated form fields.',
      'Recharts gives the output a readable chart layer while the app code controls how economic values move between table and view.',
      'Generated data makes the tool easier to test and demonstrate without hand-building every example.',
      'The same scenario can be compared before and after input changes, which keeps the table-to-chart relationship visible.',
    ],
    tools:
      'React, TypeScript, Vite, MUI, TanStack Router, Handsontable, Recharts, Vitest',
    media: [
      { label: 'project-supply-and-demand-explorer / editable table' },
      { label: 'project-supply-and-demand-explorer / chart output' },
      { label: 'project-supply-and-demand-explorer / scenario comparison' },
    ],
  },
  {
    title: 'DSP Calculator',
    period: '2022 - 2025',
    intro:
      'Calculator for Dyson Sphere Program item planning, backed by a separate item-registry package.',
    detail:
      'The public repository is a long-lived React calculator backed by `@eurydos/dsp-item-registry`, which is the important architectural detail. The app is not just a table of game items; it separates item data from the UI so calculator behavior can sit on top of a reusable registry and still be deployed as a public gh-pages project.',
    notes: [
      'Built a React interface around a reusable game item registry instead of hard-coding every calculation into the page.',
      'Published and versioned the app as a public project rather than keeping it as a throwaway spreadsheet replacement.',
      'Worked through enough iteration to reach a maintained 2.x version line.',
    ],
    details: [
      'The item registry package keeps the game data model separate from the calculator interface.',
      'The UI work is about planning and calculation, so the interface has to make dependencies and quantities legible.',
      'The project has enough history to matter as maintained work, including public deployment and versioned iteration.',
      'Item selection, calculation output, and the data-registry boundary are the three useful surfaces to inspect.',
    ],
    tools: 'React, TypeScript, Vite, MUI, gh-pages, @eurydos/dsp-item-registry',
    media: [
      { label: 'project-dsp-calculator / item planner' },
      { label: 'project-dsp-calculator / calculation result' },
      { label: 'project-dsp-calculator / item registry boundary' },
    ],
  },
  {
    title: 'Sorting Algorithm Visualizer',
    period: '2025',
    intro:
      'Sorting visualizer that exposes algorithm steps instead of only animating bars moving around.',
    detail:
      'The `project-albite` README describes the app as a sorting algorithm visualizer that sings, inspired by algorithm visualization with sound. The useful framing is that comparisons and swaps are part of the explanation, not hidden implementation noise. The project covers several sorting families while staying small enough to remain an explanation tool.',
    notes: [
      'Implemented the interface around comparison and swap descriptions so the algorithm state is readable.',
      'Covered common sorting families including bubble, insertion, selection, merge, heap, counting, and radix sort.',
      'Kept the visualizer small enough to explain the algorithms without turning it into a general animation framework.',
    ],
    details: [
      'The visualizer uses animation to show ordering behavior, but the real value is making each algorithm step identifiable.',
      'Comparison and swap language gives the viewer a way to follow what the algorithm is doing beyond watching bars move.',
      'The algorithm list covers both simple instructional sorts and more structured families such as merge, heap, counting, and radix.',
      'Sound gives the app a distinct interface detail, but the project still centers the algorithm state and explanation surface.',
    ],
    tools: 'React, TypeScript, Vite, MUI, React Router',
    media: [
      { label: 'project-albite / sorting bars' },
      { label: 'project-albite / comparison step' },
      { label: 'project-albite / algorithm selection' },
    ],
  },
  {
    title: 'Alexandrite',
    period: '2025',
    intro:
      'Desktop unit-conversion calculator built as a small Tauri application.',
    detail:
      'The `project-alexandrite` README describes it as an advanced unit conversion calculator, and the package metadata keeps the stack narrow: Tauri, React, TypeScript, and Vite. This belongs in the portfolio as a focused desktop utility, useful for showing a small application boundary instead of another hosted webpage.',
    notes: [
      'Built the conversion interface as a local desktop app rather than a hosted web page.',
      'Kept the stack deliberately small: React and TypeScript in the frontend, Tauri for the shell.',
      'Used the project to work through packaging a focused utility rather than extending a broad dashboard.',
    ],
    details: [
      'Tauri gives the project a desktop packaging path while keeping the interface in the React and TypeScript world.',
      'The conversion surface is intentionally narrow, which makes correctness and organization more important than feature count.',
      'The app is a good place to show how a utility can stay small while still having a real local application shell.',
      'The core surfaces are conversion input, result output, and unit-category navigation.',
    ],
    tools: 'Tauri, React, TypeScript, Vite',
    media: [
      { label: 'project-alexandrite / converter input' },
      { label: 'project-alexandrite / unit categories' },
      { label: 'project-alexandrite / desktop shell' },
    ],
  },
] as const

const researchItems = [
  {
    title: 'Robot Navigation Perception Pipeline',
    period: 'July 2025 - January 2026',
    intro:
      'Robot-navigation perception pipeline using overhead workspace imagery.',
    detail:
      'This research project connects fixed-camera perception to robot-navigation state. The important system boundary is the path from overhead imagery to recognized objects, extracted keypoints, and ROS messages that another part of the robot system can consume. It belongs in the research section because the work is partly implementation and partly experiment design.',
    notes: [
      'Labeled and trained image recognition for changing object placements.',
      'Extracted keypoints from fixed-camera frames and published ROS perception messages.',
      'Related TDK work received Second Prize, OTDK qualification, and a Morgan Stanley-funded award.',
    ],
    details: [
      'The camera setup makes the workspace stable enough to reason about object placement while still requiring the perception pipeline to handle changes in the scene.',
      'Labeling and training are part of the project, not background work, because the model output determines what can be published downstream.',
      'Keypoint extraction is the bridge between visual recognition and navigation data.',
      'The ROS message boundary matters because perception output only becomes useful when the rest of the robot stack can consume it reliably.',
    ],
    tools: 'ROS, fixed-camera imagery, image recognition, keypoint extraction',
    media: [
      { label: 'robot navigation / overhead workspace frame' },
      { label: 'robot navigation / keypoint extraction' },
      { label: 'robot navigation / ROS perception message' },
    ],
  },
  {
    title: 'TDK / OTDK Research Project',
    period: '2025',
    intro:
      'Research writing and presentation for the robot-navigation project.',
    detail:
      'This work separates research communication from implementation. The TDK and OTDK process required the project to be explainable as a method, result, and limitation set, not only as code. The presentation-facing material records what was tested, what was constrained, and what the result actually supported.',
    notes: [
      'Prepared the project for TDK presentation and OTDK qualification.',
      'Kept method, constraints, evaluation, and lessons visible beyond the credential line.',
    ],
    details: [
      'The research writeup makes the project inspectable outside the repository by explaining setup, method, and evaluation.',
      'The presentation version had to make the perception-to-navigation pipeline understandable to readers who were not inside the codebase.',
      'The credential line is only useful because the method remains visible through figures, diagrams, and project material.',
      'The project received Second Prize at TDK, qualified for OTDK, and received a Morgan Stanley-funded award.',
    ],
    tools: 'Research writing, presentation, experiment notes',
    media: [
      { label: 'TDK research / method diagram' },
      { label: 'TDK research / result summary' },
      { label: 'TDK research / presentation slide' },
    ],
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
