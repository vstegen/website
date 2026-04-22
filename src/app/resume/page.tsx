import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { NAME } from '@/lib/constants'

interface ExperienceItem {
  company: string
  position: string
  location: string
  period: string
  achievements: string[]
  technologies?: string[]
}

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  thesis: string
}

const technologies = {
  languages: ['Go', 'TypeScript', 'JavaScript', 'Python', 'HTML & CSS', 'SQL'],
  technologies: [
    'AWS',
    'Docker',
    'ElasticSearch',
    'MySQL',
    'Terraform',
    'Node.js',
    'Git',
    'Datadog',
  ],
  other: [
    'Distributed Systems',
    'Event-driven Design',
    'Serverless Architecture',
    'Microservices',
    'API Design',
    'CI/CD',
    'Testing',
  ],
}

const experience: ExperienceItem[] = [
  {
    company: 'MoneyForward, Inc',
    position: 'Software Engineer',
    location: 'Tokyo, Japan',
    period: 'May 2025 – Present',
    technologies: [
      'TypeScript',
      'Docker',
      'AWS',
      'MySQL',
      'Redis',
      'Terraform',
      'Datadog',
    ],
    achievements: [
      'Built an AI-powered automation agent using Midscene that enables developers to implement user management across third-party services while reducing development time to integrate by 2 days per service',
      'Optimized customer request processing by implementing request prioritization based on request types, significantly improving user management processing latency across high-traffic workloads',
      'Expanded platform integration coverage for user management by \textbf{25+} SaaS solutions by building API and puppeteer scraping clients, including a custom GitHub app as well integrating with Microsoft Entra ID',
    ],
  },
  {
    company: 'Amazon Development Center Germany GmbH - IDEs',
    position: 'Software Development Engineer II',
    location: 'Berlin, Germany',
    period: 'Jun 2021 – Sep 2023',
    technologies: [
      'Go',
      'TypeScript',
      'Docker',
      'CI/CD',
      'AWS',
      'API Gateway',
      'CloudTrail',
      'CloudWatch',
      'DynamoDB',
      'EBS',
      'EC2',
      'ECR',
      'ECS',
      'EFS',
      'EventBridge',
      'Fargate',
      'KMS',
      'Lambda',
      'S3',
      'SQS',
      'SSM',
      'StepFunctions',
    ],
    achievements: [
      'Achieved zero-downtime launch of Amazon CodeCatalyst Dev Environments by designing and executing comprehensive load testing identifying and resolving multiple service bottlenecks with DDB, SFN, and Lambda',
      'Designed and led implementation of scalable event-driven architecture using AWS EventBridge for customizable resource lifecycle events, serving 2000+ internal and external users while reducing API load',
      "Achieved 0 unplanned microservice restarts by utilizing Go's pprof to identify and resolve memory leaks, achieving over 90% memory usage reduction",
      'Strengthened security infrastructure by authoring threat model for EC2 fleet and ECS task management, discovering critical permission handling vulnerabilities in the ECS agent architecture',
      'Eliminated validation errors by developing a custom Go-based generic request validator that reduced HTTP request validation issues by over 99%, delivering more precise error messages than standard AWS API Gateway integration',
      'Prevented user data loss by developing a fallback mechanism that restores access to MDE Dev Environments when storage limits were exceeded',
      'Exercised service reliability by building a CI/CD pipeline for continuous execution of E2E and integration tests and canaries, simulating customer behavior',
      'Achieved operational readiness (ORR) approval for service launch by implementing region-specific deployment safety protocols and creating operational tooling, dashboards, and over 200 additional alarms',
    ],
  },
  {
    company: 'Deloitte Consulting GmbH',
    position: 'Consultant',
    location: 'Berlin, Germany',
    period: 'Sep 2019 – Apr 2021',
    technologies: [
      'Python',
      'TypeScript',
      'Angular',
      'Scala',
      'Spark',
      'S3',
      'Google Maps API',
      'MLflow',
    ],
    achievements: [
      'Reduced development time by 40 hours per deployed web study by designing and developing a modern Angular-based web study service with streamlined study configuration',
      'Developed a Python-based web study service backend, handling user authentication and study result persistence in AWS S3-compatible storage',
      'Optimized data analysis performance by introducing caching of previously generated results and improving algorithmic complexity, achieving 90% runtime reduction and saving 2 hours per week',
      'Developed a statistical model identifying vehicle waiting segments near destinations by analyzing over 1 million data samples, leading to continued client engagement',
    ],
  },
  {
    company: 'Humboldt University of Berlin',
    position: 'Teaching Assistant',
    location: 'Berlin, Germany',
    period: 'Aug 2016 – Mar 2019',
    technologies: ['R', 'Statistical Programming', 'Mathematical Modeling'],
    achievements: [
      'Co-led course of 25+ students on statistical programming with R and assisting with assignments like finding optimal option pricing and simulating cancer growth in patients',
      'Created sample solutions like spam filter based on Naive Bayes classifier and a tool to denoise images using Nadaraya-Watson estimator in R for statistical programming course',
      'Supported 200+ Computer Science and Math students over 5 courses on linear algebra and statistics, guiding them through optimal assignment solutions and conducting learning sessions for exam preparation',
    ],
  },
]

const education: EducationItem[] = [
  {
    degree: 'M.Sc. Mathematics',
    institution: 'Humboldt University of Berlin',
    location: 'Berlin, Germany',
    period: '2016 – 2019',
    thesis:
      'The estimation of signal-to-noise ratios in high-dimensional linear models',
  },
  {
    degree: 'B.Sc. Mathematics',
    institution: 'Humboldt University of Berlin',
    location: 'Berlin, Germany',
    period: '2012 – 2016',
    thesis: 'The Skohorod MI Topology and weak Convergence',
  },
]

function ContactHeader() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Resume
      </h1>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 border-b border-zinc-200 pb-2 text-xl font-semibold text-zinc-800 dark:border-zinc-700 dark:text-zinc-100">
        {title}
      </h2>
      {children}
    </section>
  )
}

function TechnologiesSection() {
  return (
    <Section title="Skills">
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            Languages:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.languages.join(', ')}
          </span>
        </div>
        <div>
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            Technologies:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.technologies.join(', ')}
          </span>
        </div>
        <div>
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            Other:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.other.join(', ')}
          </span>
        </div>
      </div>
    </Section>
  )
}

function ExperienceSection() {
  return (
    <Section title="Experience">
      <div className="space-y-8">
        {experience.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700"
          >
            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.company}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.position}
                </p>
              </div>
              <div className="mt-1 text-sm text-zinc-500 sm:mt-0 sm:text-right dark:text-zinc-500">
                <div>{item.period}</div>
                <div>{item.location}</div>
              </div>
            </div>
            {item.technologies && item.technologies.length > 0 && (
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.achievements.length > 0 && (
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <span className="mt-2.5 mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

function EducationSection() {
  return (
    <Section title="Education">
      <div className="space-y-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.degree}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.institution}
                </p>
              </div>
              <div className="mt-1 text-sm text-zinc-500 sm:mt-0 sm:text-right dark:text-zinc-500">
                <div>{item.period}</div>
                <div>{item.location}</div>
              </div>
            </div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Thesis: {item.thesis}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'Resume',
  description: `Professional resume of ${NAME}, Software Engineer with experience in distributed systems, AWS, and full-stack development.`,
}

export default function Resume() {
  return (
    <div className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="mx-auto max-w-3xl">
          <TechnologiesSection />
          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </div>
  )
}
