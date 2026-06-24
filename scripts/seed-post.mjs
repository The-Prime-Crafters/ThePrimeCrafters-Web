/**
 * Creates a test blog post in Sanity for ThePrimeCrafters.
 *
 * Usage:
 *   SANITY_API_TOKEN=skXXXXXX node scripts/seed-post.mjs
 *
 * Get a token: sanity.io/manage → project tvdhipft → API → Tokens → Add (Editor role)
 */

const TOKEN = process.env.SANITY_API_TOKEN
const PROJECT_ID = 'tvdhipft'
const DATASET = 'production'
const API_VERSION = '2024-01-01'

if (!TOKEN) {
  console.error('❌  SANITY_API_TOKEN not set.\nRun: SANITY_API_TOKEN=skXXXXX node scripts/seed-post.mjs')
  process.exit(1)
}

const b = (key, style, text) => ({
  _type: 'block', _key: key, style,
  markDefs: [],
  children: [{ _type: 'span', _key: `${key}s`, marks: [], text }],
})

const bullet = (key, items) => ({
  _type: 'block', _key: key, style: 'normal',
  listItem: 'bullet', level: 1,
  markDefs: [],
  children: [{ _type: 'span', _key: `${key}s`, marks: [], text: items }],
})

const bq = (key, text) => ({
  _type: 'block', _key: key, style: 'blockquote',
  markDefs: [],
  children: [{ _type: 'span', _key: `${key}s`, marks: [], text }],
})

const body = [
  b('p1','normal', 'Most businesses are still running on manual processes that eat 30–40% of their team\'s productive hours. Repetitive data entry, manual follow-ups, copy-paste reporting, inbox management — these tasks don\'t require human intelligence, yet they consume it every single day. In 2025, the gap between businesses that have automated these workflows and those that haven\'t is no longer just a productivity gap — it\'s an existential one.'),

  b('h2a','h2','The Real Cost of Manual Processes'),
  b('p2','normal','Before you can justify the investment in AI automation, you need to understand what manual processes are actually costing you. It\'s not just time — it\'s opportunity cost, error rates, employee burnout, and the compounding effect of operating at sub-optimal speed in a competitive market.'),

  bullet('b1', 'The average knowledge worker spends 4.5 hours per week on repetitive data tasks'),
  bullet('b2', 'Human error in manual data entry costs businesses an average of $12,900 per employee per year'),
  bullet('b3', 'Teams that automate routine tasks report 23% higher employee satisfaction scores'),
  bullet('b4', 'Businesses with automated workflows close deals 28% faster than those without'),

  b('p3','normal','At The Prime Crafters, we\'ve audited over 50 business operations across industries. In every single case, we found at least 3–5 workflows that could be fully automated — freeing up meaningful hours every week without any reduction in quality.'),

  b('h2b','h2','Where AI Automation Makes the Biggest Impact'),
  b('p4','normal','Not all automation is created equal. The ROI varies dramatically depending on where you apply it. Here\'s where we consistently see the highest returns for our clients:'),

  b('h3a','h3','Customer Service & Support'),
  b('p5','normal','AI-powered support systems can handle 70–80% of incoming queries without human involvement. Custom-trained chatbots, automated ticket routing, and intelligent escalation workflows reduce response times from hours to seconds — while your team focuses on the complex, high-value conversations that actually need them.'),

  b('h3b','h3','Sales & Lead Generation'),
  b('p6','normal','From automated lead scoring and CRM enrichment to personalised follow-up sequences that adapt based on prospect behaviour, AI transforms your sales pipeline from a leaky funnel into a precision machine. Our clients typically see a 35–50% improvement in lead-to-close rates within the first 90 days.'),

  b('h3c','h3','Operations & Workflow Management'),
  b('p7','normal','Invoice processing, inventory updates, report generation, cross-platform data syncing — these are all perfect candidates for automation. A business running on connected, automated workflows operates with the efficiency of a team twice its size.'),

  b('h2c','h2','The ROI of AI Automation: What to Expect'),
  b('p8','normal','The numbers vary by business size and complexity, but the returns are consistently compelling. Here\'s what clients who\'ve worked with The Prime Crafters have experienced:'),

  bullet('b5', '8–15 hours per week recovered per team member in automated roles'),
  bullet('b6', '60–80% reduction in manual errors within the first 30 days'),
  bullet('b7', 'Average payback period of 60–90 days on automation investment'),
  bullet('b8', '3–5x ROI within the first year for mid-sized operations'),

  bq('bq1', '"We went from spending 12 hours a week on manual reporting to 45 minutes. The Prime Crafters built something that just runs — and it runs better than we did manually." — E-commerce Operations Lead, TPC Client'),

  b('h2d','h2','How The Prime Crafters Approaches AI Implementation'),
  b('p9','normal','We don\'t sell off-the-shelf automation tools. Every system we build is custom-engineered for your specific workflows, tech stack, and business model. Our implementation process is designed to deliver results fast — without disrupting your current operations.'),

  bullet('b9', 'Discovery & Audit: We map your current processes and identify the highest-value automation opportunities'),
  bullet('b10', 'Architecture Design: We design a system blueprint tailored to your stack and scale'),
  bullet('b11', 'Build & Integrate: We build and integrate your automation layer with existing tools'),
  bullet('b12', 'Test & Optimise: We stress-test every workflow before it touches your live operations'),
  bullet('b13', 'Monitor & Iterate: We monitor performance and continue optimising as your business grows'),

  b('h2e','h2','Getting Started: Your First 30 Days'),
  b('p10','normal','You don\'t need to automate everything at once. The best results come from starting with the highest-pain, highest-frequency manual process in your business and building from there. In your first 30 days with The Prime Crafters, you\'ll have a working automation for your most critical workflow — and a roadmap for the next six months.'),

  bullet('b14', 'Week 1: Operations audit and automation opportunity ranking'),
  bullet('b15', 'Week 2: Architecture sign-off and build begins'),
  bullet('b16', 'Week 3: Testing, iteration, and team training'),
  bullet('b17', 'Week 4: Go-live and performance monitoring'),

  b('p11','normal','AI automation is no longer a "nice to have" — it\'s the infrastructure that separates businesses that scale from those that stagnate. If your team is spending time on work that a system could handle, that\'s time they\'re not spending on strategy, relationships, and growth. The Prime Crafters exists to fix that. Book a free 20-minute consultation and we\'ll tell you exactly what we\'d build for your business.'),
]

const mutations = [
  {
    createOrReplace: {
      _id: 'tpc-author-aman',
      _type: 'author',
      name: 'Aman Naqvi',
      bio: 'Founder & CTO at aidem labs and operator of The Prime Crafters. Aman builds custom AI automation systems for businesses that want to scale without scaling headcount. 2–5 years engineering experience across AI/ML, full-stack development, and growth operations.',
      linkedin: 'https://www.linkedin.com/in/amanullahnaqvi',
    },
  },
  {
    createOrReplace: {
      _id: 'tpc-category-ai-automation',
      _type: 'category',
      title: 'AI Automation',
    },
  },
  {
    createOrReplace: {
      _id: 'tpc-post-ai-automation-2025',
      _type: 'post',
      title: 'How AI Automation Is Transforming Business Operations in 2025',
      slug: { _type: 'slug', current: 'how-ai-automation-is-transforming-business-operations-2025' },
      publishedAt: new Date().toISOString(),
      excerpt: 'Most businesses are losing 30–40% of productive hours to manual processes. In 2025, the gap between automated and non-automated operations is no longer just a productivity gap — it\'s an existential one. Here\'s how to close it.',
      author: { _type: 'reference', _ref: 'tpc-author-aman' },
      categories: [{ _type: 'reference', _ref: 'tpc-category-ai-automation', _key: 'cat1' }],
      body,
    },
  },
]

const res = await fetch(
  `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  }
)

const data = await res.json()

if (res.ok) {
  console.log('✅  Seed post created successfully!')
  console.log(`\n📖  View it at: http://localhost:3000/blog/how-ai-automation-is-transforming-business-operations-2025`)
  console.log('\nMutation results:', JSON.stringify(data.results?.map(r => ({ id: r.id, operation: r.operation })), null, 2))
} else {
  console.error('❌  Error:', JSON.stringify(data, null, 2))
}
