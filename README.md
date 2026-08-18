# Jade Xu — Portfolio

[Live site](https://bxjyj.github.io/Portfolio/)

Vite + React + Tailwind. See [DEPLOYMENT.md](DEPLOYMENT.md) for how it ships.

## Editing content

You almost never need to touch a component to change what's on the site —
edit the data file instead:

| To change...                        | Edit...                    |
| ------------------------------------ | --------------------------- |
| Projects                             | `src/data/projects.js`      |
| Work experience                      | `src/data/experience.js`    |
| Skills / tools / certificates        | `src/data/skills.js`        |
| Hobbies                              | `src/data/hobbies.js`       |
| Blog posts                           | `src/data/blog.js`          |
| Photos                               | `public/images/`            |

Each data file has a comment at the top describing the exact shape of an
entry. Add an object to the array, save, and it shows up — no other file
needs to change.

A `draft: true` flag on a project or blog post hides it from the site
without deleting it, so half-written entries never go live by accident.

## Local development

```bash
npm install
npm run dev
```
