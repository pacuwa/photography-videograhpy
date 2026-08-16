export type Category = 'Photography' | 'Videography'

export interface Project {
  id: string
  title: string
  client: string
  category: Category
  year: number
  location: string
  summary: string
  story: string
  tint: [string, string]
  credits: Array<{ role: string; name: string }>
}

const projects: Array<Project> = [
  {
    id: 'low-tide-vows',
    title: 'Low Tide Vows',
    client: 'Marisol & Bettina',
    category: 'Photography',
    year: 2025,
    location: 'Isla Providencia, Colombia',
    summary:
      'A barefoot elopement timed to a receding tide, shot over eleven hours with two bodies and a single 35mm prime.',
    story:
      "Marisol and Bettina wanted no program, no seating chart, and no photographer hovering at the edge of the frame. We agreed on one rule: nothing staged twice. The ceremony ran forty minutes behind schedule because the tide pulled out further than the tide chart promised, so we shot the vows standing in ankle-deep water instead of sand. The reception was eighteen people and a folding table that blew over twice. Three hundred and twelve frames delivered, none of them a repeat of the same pose.",
    tint: ['#8a5a3a', '#2c1d15'],
    credits: [
      { role: 'Lead photographer', name: 'Odalys Ferreira' },
      { role: 'Second shooter', name: 'Tomas Vekic' },
    ],
  },
  {
    id: 'thresher-supply-co',
    title: 'Thresher Supply Co.',
    client: 'Thresher Supply Co.',
    category: 'Videography',
    year: 2025,
    location: 'Missoula, Montana',
    summary:
      'A four-minute brand film for a third-generation tool maker, cut entirely from one twenty-two hour shoot day.',
    story:
      "The founder's grandson gave us one condition: no actors, no voiceover written before we'd met the machinists. We mic'd up six people on the floor and let the film find its own shape in the edit. The final cut leans on ambient forge noise instead of a score for the first ninety seconds — a choice the client almost vetoed until they saw it against the rough cut with music underneath. It tested worse with music. We shipped it without.",
    tint: ['#5c6b4f', '#1a2016'],
    credits: [
      { role: 'Director', name: 'Priya Nkemelu' },
      { role: 'Editor', name: 'Odalys Ferreira' },
      { role: 'Sound design', name: 'Guy Marchetti' },
    ],
  },
  {
    id: 'the-corvid-sessions',
    title: 'The Corvid Sessions',
    client: 'Anouk Delacroix-Reyes',
    category: 'Photography',
    year: 2024,
    location: 'Antwerp, Belgium',
    summary:
      'A ninety-minute editorial portrait sitting for a violinist, shot in the stairwell of her childhood conservatory.',
    story:
      "Anouk asked for portraits that didn't look like a press kit. We scouted her old conservatory two days ahead and found a stairwell with a single overhead skylight that only holds usable light between 3:40 and 4:15pm in October. We got one sitting, thirty-five minutes of usable light, and four rolls of film. The frame the label eventually chose for the album sleeve was the second-to-last exposure on the third roll.",
    tint: ['#7a4a5c', '#211016'],
    credits: [{ role: 'Photographer', name: 'Tomas Vekic' }],
  },
  {
    id: 'sixty-hour-week',
    title: 'Sixty Hour Week',
    client: 'Ferro & Hale Architects',
    category: 'Videography',
    year: 2024,
    location: 'Rotterdam, Netherlands',
    summary:
      'A documentary short following one project through a single work week, from site visit to 2am renders.',
    story:
      "We asked to film the unglamorous middle of an architecture practice, not the ribbon-cutting. Five days, three cameras rotating between desks, and a junior architect who forgot we were there by Wednesday, which is the only reason the footage works. Nineteen hours of raw material became eleven minutes. The firm uses it in client pitches now, which was never the plan but has become the film's second life.",
    tint: ['#3f5a63', '#101a1d'],
    credits: [
      { role: 'Director', name: 'Guy Marchetti' },
      { role: 'Camera', name: 'Priya Nkemelu' },
      { role: 'Editor', name: 'Guy Marchetti' },
    ],
  },
  {
    id: 'harvest-at-nine',
    title: 'Harvest at Nine',
    client: 'Bramwell Family',
    category: 'Photography',
    year: 2024,
    location: 'Willamette Valley, Oregon',
    summary:
      'A family session built around one recurring instruction: nobody looks at the camera.',
    story:
      "The Bramwells run a hazelnut orchard and asked for photographs that felt like memory rather than a portrait sitting. We spent the first forty minutes not shooting at all, just walking the rows while the kids got bored of us being there. Once they stopped performing for the lens, the session took two hours and produced the family's now-annual holiday card image without anyone once looking at the camera.",
    tint: ['#8a7a3f', '#221f10'],
    credits: [{ role: 'Photographer', name: 'Odalys Ferreira' }],
  },
  {
    id: 'nineteen-tables',
    title: 'Nineteen Tables',
    client: 'Restaurant Solene',
    category: 'Videography',
    year: 2023,
    location: 'Lyon, France',
    summary:
      'A slow, dialogue-free short following a nineteen-table dinner service from prep to last plate.',
    story:
      "Solene's chef refused a script and refused a shot list, so we built the film in the edit from forty-one minutes of continuous handheld coverage across two services. No interviews, no captions — the film relies entirely on kitchen sound and the rhythm of plates leaving the pass. It has since screened at two food-film festivals neither of us submitted it to; the restaurant did, without telling us.",
    tint: ['#6b4a34', '#1c130d'],
    credits: [
      { role: 'Director', name: 'Priya Nkemelu' },
      { role: 'Camera', name: 'Tomas Vekic' },
    ],
  },
]

export default projects
