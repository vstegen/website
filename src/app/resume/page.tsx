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
}

const technologies = {
  languages: ['Go', 'TypeScript', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'],
  technologies: ['AWS', 'Docker', 'Git', 'NodeJS'],
  other: [
    'Distributed Systems',
    'Event-driven Systems',
    'Serverless',
    'Microservices',
    'API Design',
    'CI/CD',
    'Testing',
  ],
}

const experience: ExperienceItem[] = [
  {
    company: 'MoneyForward',
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
    achievements: [],
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
      'AWS',
      'EC2',
      'ECS',
      'Fargate',
      'S3',
      'DynamoDB',
      'EventBridge',
      'API Gateway',
      'Lambda',
      'StepFunctions',
      'CloudTrail',
      'CloudWatch',
      'Secret Manager',
      'ECR',
      'CI/CD',
    ],
    achievements: [
      'Designed, implemented, and executed comprehensive load tests, identifying multiple service bottlenecks, leading to successful Amazon CodeCatalyst Dev Environments launch with 0 related issues',
      'Authored threat model for EC2 fleet and ECS task management, uncovering critical gaps in the ECS agent permission handling',
      'Developed fallback mechanism allowing users to regain access to their previously inaccessible Dev Environments when storage limits were reached',
      'Designed and led the implementation of customizable resource lifecycle events powered by AWS EventBridge, utilized by over 2000 internal and external users, resulting in reduced API load',
      'Reduced HTTP request validation issues by over 99% by developing a custom request validator in Go, providing users with more accurate error messages compared to the standard AWS API Gateway integration',
      'Built CI/CD pipeline using TypeScript for continuous execution of E2E and integration tests and canaries, exercising service reliability by simulating customer behavior',
      'Mentored and guided team members in the principles and practices of load testing, leading to successful tests for new service features',
      'Documented over 300 API limits for dependencies and implemented corresponding alarms, resulting in early detection of potential issues and reduced inquiries about dependency limits',
      'Updated internal API to expose public and private IP of Dev Environments to improve overall stability of public API service',
      'Created a dynamic and automatically updating operations dashboard for real-time monitoring of live regions and APIs, streamlining oncall processes',
      'Reduced CI/CD pipeline latency by introducing a specialized stage for non-operational regions with pass-through option, significantly improving pipeline blocked time',
      'Achieved operational readiness (ORR) approval for service launch by implementing region-specific deployment safety protocols and creating operational tooling, dashboards, and over 200 alarms',
      "Mitigated microservice restarts by reducing memory leaks by over 90% by using Go's profiling tool, pprof, enhancing service stability",
      'Developed a custom Docker credentials helper in Go to allow customers to use Docker images in private AWS ECR repositories for launching their Dev Environments',
      'Implemented mechanism for fetching and injection of customer secrets from AWS Secret Manager as environment variables into their Dev Environments',
      'Integrated resource tagging functionality, including tag-based access control, enabling restricted access to user resources',
      'Integrated AWS CloudTrail to provide detailed event logs for API calls, significantly enhancing auditability and traceability of user actions',
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
      'Reduced development time by around 40h per deployed web study by designing and developing a modern web study service in Angular, including streamlined custom study configuration',
      'Developed web study service backend in Python, handling user authentication and study result persistence in AWS S3-compatible storage',
      'Reduced Python data analysis script runtime by 90%, saving 2h per week, by implementing caching mechanism for previously generated results and improving algorithmic complexity',
      'Designed and implemented multiple image labeling workflows in Python, including image upload, task creation, previous label import, and result export using REST API of image labeling solutions',
      "Segmented customers into 6 distinct groups based on subconscious preferences for more accurate targeting of client's campaigns by analyzing over 5,000 study participants using various statistical methods in Python",
      'Built 10+ interactive web studies, measuring subconscious customer preferences of over 5,000 participants, contributing to data-driven decision-making',
      'Built a user journey demonstrator for implicit association tests, showcasing test mechanics and configuration options for clients',
      'Developed a web application visualizing data analysis results of customer preferences by utilizing Python Dash',
      'Delivered insights on customer base to multiple international clients to improve branding and customer targeting',
      'Generated recommendations for improving remote presentations by analyzing brain activity and eye movement of over 15 participants, resulting in interest of over 5 global teams at Deloitte',
      'Generated actionable insights from visualizations of over 1 million vehicle positions near travel destinations, utilizing Google Maps JavaScript API to identify potential waiting zones',
      'Improved machine learning model performance by up to 2% by optimizing selected features using Scala and Spark',
      'Refactored machine learning model training scripts in Scala, allowing easier model evaluation by integrating MLflow, and improving the efficiency of the model development pipeline',
      'Developed a statistical model identifying vehicle waiting segments near destinations by analyzing over 1 million data samples, leading to continued client engagement',
      'Led the requirement definition of verification tool and monitoring dashboard for Deep Learning image labeling models, securing a successful client contract',
      'Evaluated and ranked over 60 labeling solutions based on specific client requirements, leading to implementation of the recommended labeling tool, used by over 50 employees across 3 teams',
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
  },
  {
    degree: 'B.Sc. Mathematics',
    institution: 'Humboldt University of Berlin',
    location: 'Berlin, Germany',
    period: '2012 – 2016',
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
    <Section title="Technologies and Languages">
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
