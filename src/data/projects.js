import { asset } from '../lib/asset';

// Projects data — edit this file to add/update/remove projects. Nothing else
// needs to change; the Projects grid and the project detail page both read
// from this array automatically.
//
// Shape of each project:
// {
//   id: number                 — unique, used in the URL (#/project/<id>)
//   title: string
//   description: string        — 1-2 sentences, shown on the card in the grid
//   overview: string           — longer paragraph(s) shown on the detail page
//   highlights: string[]       — 3-5 concrete bullets: what you built/found
//   image: string              — asset('images/foo.png') for a file in
//                                 public/images, or a full https:// URL
//   techStack: string[]
//   githubLink?: string        — omit or leave undefined if there isn't one
//   liveLink?: string          — omit or leave undefined if there isn't one
//   featured: boolean          — true = shown in the default (collapsed) grid
//   draft?: boolean            — true = hidden from the site entirely until
//                                 you finish writing it up (prevents dead
//                                 links / placeholder text from ever going
//                                 live). Delete this line when it's ready.
// }
const projectsData = [
  {
    id: 1,
    title: 'Geospatial Analysis of Human–Black Bear Conflict in Florida',
    description:
      'Mapped Florida black bear road mortality and bear-related calls against the state road network to test whether proximity to roads predicts human-bear conflict.',
    overview:
      "Florida's black bear habitat increasingly overlaps with expanding road infrastructure, driving up human-bear conflict. I sourced Florida Fish & Wildlife Conservation Commission datasets on bear-related calls and road mortality (Feb 2015–Mar 2024) and FDOT LRS road network data (Jul 2017–Jun 2025), georeferenced and joined them in ArcGIS Pro, then measured the distance from each incident to the nearest road and ran kernel density estimation to surface hotspots. The goal was to give conservation and urban-planning stakeholders a spatial, evidence-based view of where development pressure and bear activity collide.",
    highlights: [
      'Combined and georeferenced three independent public datasets (bear calls, road mortality, road network) spanning 8+ years',
      'Built distance-to-road and kernel density models in ArcGIS Pro to identify conflict hotspots',
      "Grounded the analysis in published wildlife-ecology literature (Journal of Mammalogy, Human–Wildlife Interactions)",
    ],
    image: 'https://github.com/bxjyj/GIS/blob/main/BlackBearAnalysis/BB_Away_100m.png?raw=true',
    techStack: ['ArcGIS Pro', 'ArcGIS Online', 'Excel', 'SQL'],
    githubLink: 'https://github.com/bxjyj/GIS/tree/main/BlackBearAnalysis',
    featured: true,
  },
  {
    id: 2,
    title: 'Democratic Quality of Countries Analysis',
    // TODO(jade): write 1-2 sentences on the actual question/approach/result.
    description:
      'TODO — replace with a real description before un-hiding this project.',
    overview:
      'TODO — what question were you answering, what data did you use, what did you do with it, and what did you find? A few sentences is enough.',
    highlights: [
      'TODO — e.g. "Trained a random forest classifier on N countries x M indicators"',
      'TODO — e.g. "Achieved X accuracy / identified Y as the strongest predictor"',
    ],
    image: asset('images/placeholder-project.svg'),
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    // githubLink / liveLink intentionally omitted until real ones exist.
    featured: true,
    draft: true, // remove this line once description/links above are real
  },
  {
    id: 3,
    title: 'UFO Sightings Analysis',
    // TODO(jade): write 1-2 sentences on the actual question/approach/result.
    description:
      'TODO — replace with a real description before un-hiding this project.',
    overview:
      'TODO — what question were you answering, what data did you use, what did you do with it, and what did you find?',
    highlights: ['TODO', 'TODO'],
    image: asset('images/placeholder-project.svg'),
    techStack: ['C++'],
    featured: true,
    draft: true, // remove this line once description/links above are real
  },
];

export default projectsData;
