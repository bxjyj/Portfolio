// Blog posts data. Same `draft` convention as projects.js — a draft post is
// hidden from the Blog section and 404s if visited directly, so half-written
// or generic-template posts never go live by accident. Remove `draft: true`
// once a post is actually written and ready.
//
// `content` supports a very small markdown subset (see BlogDetail.jsx):
// #/##/###/#### headings, **bold**, *italic*, "- " bullet lines, newlines.
const blogData = [
  {
    id: 1,
    title: 'Being a Trailblazer, Literally.',
    excerpt:
      "What it's like being the OUTdoors president, and managing 10+ people in the wilderness.",
    content: `# Leadership in the Outdoors: My Journey as OUTdoors President

## What is OUTdoors?
OUTdoors is the University of Florida's LGBTQ+ hiking and outdoor adventure club. As the president, I lead a team of passionate individuals who organize hikes, camping trips, and other outdoor activities. Our mission is to create a welcoming environment for LGBTQ+ individuals to connect with nature and each other.

## My Journey
### 1. Freshman Year - Joining OUTdoors
I joined OUTdoors during my freshman year, eager to explore the outdoors and meet new people. The club's inclusive atmosphere made it easy to feel at home, and I loved the community. We went on several hikes and camping trips, which sparked my passion for the outdoors and experiencing it together with others. I learned how to kayak and saw manatees for the first time!

### 2. Sophomore Year - Taking on Leadership
In my sophomore year, I decided to take on a leadership role within OUTdoors. I became a trail leader, responsible for planning and organizing our activities. This experience taught me valuable skills in communication, teamwork, event planning, and wilderness safety. I worked closely with other club members and officers to ensure our hikes and camping trips were safe, enjoyable, and inclusive for everyone.

### 3. Junior Year - Leading the Team
In my junior year, I ran for treasurer of OUTdoors, and was elected! As treasurer, I managed the club's finances, budgeted for events, and organized events. This role required strong organizational skills and attention to detail, as well as the ability to work collaboratively with other officers. I managed a budget of $4,000 annually and used it to fund gear purchases, food, and site reservations for our camping trips and day trips. I also continued to lead hikes and camping trips, further developing my leadership skills and deepening my connection to the outdoors.

### 4. Senior Year - Making an Impact
This year, I was elected president of OUTdoors! As president, I lead a team of 3 officers and oversee all club activities. I am responsible for setting the club's vision, planning events, managing finances, and ensuring a welcoming environment for all members. We've already organized 5+ hikes and one day trip to Ichetucknee Springs State Park, and have a camping trip planned for later in the semester. I'm proud of the inclusive and supportive community we've built within OUTdoors, and I'm excited to see what the future holds.

## Reflection
Being a part of OUTdoors has been a transformative experience for me. It has allowed me to develop my leadership skills, connect with like-minded individuals, and deepen my appreciation for the outdoors. As president, I am committed to continuing to grow the club and create meaningful experiences for our members.`,
    date: '2025-10-17',
    readTime: '4 min read',
    tags: ['Nature', 'Leadership'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Census Data Optimizations for U.S. Populations',
    // TODO(jade): this used to hold generic "data viz best practices"
    // boilerplate that had nothing to do with the title. Replace with what
    // you actually did on this project (or delete the post).
    excerpt: 'TODO — replace with a real excerpt about this project.',
    content: `# TODO\n\nWrite the real post, or delete this entry from data/blog.js.`,
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Data'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    draft: true,
  },
  {
    id: 3,
    title: 'Building a Passion Project',
    // TODO(jade): same as above — was generic "how to build a portfolio"
    // meta-advice, not an actual post about a project you built.
    excerpt: 'TODO — replace with a real excerpt about this project.',
    content: `# TODO\n\nWrite the real post, or delete this entry from data/blog.js.`,
    date: '2024-01-05',
    readTime: '7 min read',
    tags: ['Career'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    draft: true,
  },
];

export default blogData;
