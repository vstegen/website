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
  programming: [
    'Go',
    'TypeScript',
    'JavaScript',
    'Python',
    'Rust',
    'Elixir',
    'HTML & CSS',
    'SQL',
  ],
  devops: ['AWS', 'CDK', 'Docker', 'Terraform', 'Git', 'Datadog'],
  databases: ['DynamoDB', 'PostgreSQL', 'MySQL', 'Redis', 'ElasticSearch'],
  frameworks: [
    'Node.js',
    'React.js',
    'Angular',
    'Phoenix LiveView',
    'Puppeteer',
    'Midscene.js',
    'Ginkgo',
    'FastAPI',
    'TailwindCSS',
  ],
  other: [
    'Distributed Systems',
    'Event-driven Architecture',
    'Serverless',
    'Microservices',
    'REST API',
    'API Design',
    'CI/CD',
    'Testing',
  ],
}

const experience: ExperienceItem[] = [
  {
    company: 'Money Forward, Inc',
    position: 'Software Engineer',
    location: 'Tokyo, Japan',
    period: 'May 2025 – Present',
    technologies: [
      'TypeScript',
      'Docker',
      'AWS',
      'MySQL',
      'Redis',
      'ElasticSearch',
      'Terraform',
      'Datadog',
    ],
    achievements: [
      'Reduced SaaS integration implementation time from 1-2 days to ~30 minutes by building an agentic browser automation system with an OpenAI-powered planner and Midscene.js across 10+ integrations',
      'Improved worst-case user provisioning latency from 1-2 hours to ~5 minutes by introducing a priority queue to isolate critical operations from nightly batch jobs across thousands of workspaces',
      'Unblocked a major enterprise customer by designing a tenant-aware OAuth callback proxy on AWS Lambda using state-suffix encoding, avoiding weeks of work re-registering 80+ third-party OAuth apps',
      'Built 30+ SaaS user management integrations via REST APIs, Puppeteer scrapers, and a custom GitHub App',
      'Unlocked user management for any customer-managed SaaS application by integrating Microsoft Entra ID as an IdP, eliminating per-app integration work',
      'Eliminated customer-reported disruption from environments stuck in maintenance mode by implementing an automated retry command on a CloudWatch schedule',
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
      'Enabled zero-downtime launch of Amazon CodeCatalyst Dev Environments by leading large-scale load testing and resolving critical bottlenecks across DynamoDB, Step Functions, and Lambda prior to release',
      'Designed and led implementation of an event-driven resource lifecycle system via AWS EventBridge, eliminating GetMetadata API polling and delivering automated status events to 2000+ users',
      'Identified a critical cross-host container-isolation vulnerability through threat modeling, where randomized container IDs served as the only security boundary between hosts, enabling potential container compromise on unrelated hosts',
      "Eliminated recurring microservice crashes (previously every 2-3 days) by using Go's pprof to identify and resolve memory leaks, reducing memory usage by over 90%",
      'Prevented recurring weekly customer data loss scenarios by implementing a fallback recovery boot path for storage-exhausted MDE Dev Environments, allowing users to retrieve their data',
      'Reduced HTTP request validation errors by 99% by developing a custom Go-based generic request validator, delivering more precise error messages than standard AWS API Gateway integration',
      'Accelerated test infrastructure iteration by decoupling E2E tests and customer-behavior-simulating canaries from microservice rollout via a dedicated TypeScript-based CI/CD pipeline',
      'Led ORR approval for production deployment across 40+ AWS regions by implementing safety protocols, 200+ alarms and dashboards, operational tooling, and documenting 300+ dependency API limits',
      'Reduced operational response time by building a self-updating multi-region operations dashboard with instant CloudWatch access for any combination of microservice, region, and deployment stage',
      'Expanded image source flexibility for enterprise customers with internal registries by building a Go-based Docker credentials helper for private AWS ECR images',
      'Enabled customer Dev Environments to launch with startup scripts requiring API keys and secrets by integrating AWS Secrets Manager to inject them as environment variables at boot time',
      'Implemented enterprise security and compliance requirements including IAM tag-based access control and full AWS CloudTrail audit log integration for customer resources',
      'Mentored 2 engineers in load testing methodology, both of whom subsequently designed and executed load tests independently for new service features',
    ],
  },
  {
    company: 'Deloitte Consulting GmbH',
    position: 'Consultant',
    location: 'Berlin, Germany',
    period: 'Sep 2019 – Apr 2021',
    technologies: ['Python', 'TypeScript', 'Angular', 'S3', 'Google Maps API'],
    achievements: [
      'Reduced development time by ~40 hours per web study by building a full-stack behavioral research platform with an Angular frontend, FastAPI backend, and S3-compatible storage',
      'Optimized data analysis performance by introducing result caching and improving algorithmic complexity, achieving 90% runtime reduction and saving 2 hours per week',
      'Secured a follow-on client engagement by analyzing over 1 million ship position samples, building a statistical model to identify waiting segments with Google Maps visualizations',
      'Enabled more accurate marketing targeting by segmenting 5000+ study participants into 6 behavioral groups via statistical analysis of subconscious preferences using various statistical methods in Python',
      'Led the requirements definition for a verification tool and monitoring dashboard for deep learning image labeling models, securing a new client engagement',
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
            Programming:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.programming.join(', ')}
          </span>
        </div>
        <div>
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            DevOps:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.devops.join(', ')}
          </span>
        </div>
        <div>
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            Databases:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.databases.join(', ')}
          </span>
        </div>
        <div>
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            Frameworks:{' '}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {technologies.frameworks.join(', ')}
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
