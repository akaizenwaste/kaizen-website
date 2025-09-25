# How Kaizen Works Section Plan

## Objective
Design and ship the "How Kaizen Works" storytelling band that explains how daily doorstep operations feed Waste OS and deliver measurable value for property teams.

## Success Criteria
- Narrative clearly connects service execution, data capture, and outcomes.
- Visual presentation aligns with existing Kaizen design language (type scale, colors, rounded cards, subtle motion).
- Section is responsive and performant across breakpoints.
- CTA pathways reinforce technology positioning (demo, technology detail page).

## Milestones
- **M1 – Narrative Blueprint:** Messaging framework, step labels, supportive stats.
- **M2 – Visual Direction:** Layered imagery concept, asset sourcing plan, interaction notes.
- **M3 – Implementation:** HTML structure, CSS utilities, animation QA, responsive polish.
- **M4 – Validation:** Content review, accessibility check, final tweaks prior to launch.

## Task Tracker
| Status | Task | Owner | Notes |
|--------|------|-------|-------|
| ☐ | Draft final copy for headline, lead, stats, and step descriptions | Codex | Iterate with stakeholder feedback |
| ☐ | Confirm data points (on-time %, photo volume, integrations count) with ops team | Product Ops | Needed before visual design |
| ☐ | Source / produce UI screenshot and crew imagery in consistent aspect ratios | Design | Target <200KB per asset |
| ☐ | Define gradient, pills, and step card styles in `css/main.css` | Codex | Reuse existing tokens where possible |
| ☐ | Build section markup in `index.html` within appropriate scroll position | Codex | Align with 12-column layout conventions |
| ☐ | Implement responsive behavior (desktop, tablet, mobile) and test | Codex | Include hover/touch fallbacks |
| ☐ | Run accessibility pass (contrast, semantic structure, aria labels) | Codex | Document findings |
| ☐ | Gather stakeholder sign-off and prep for deployment | PM | Include checklist in release notes |

## Risks & Mitigations
- **Unverified metrics:** Coordinate early with operations to avoid last-minute copy changes.
- **Asset availability:** If new Waste OS UI screens aren’t ready, create high-fidelity mockups to avoid delays.
- **Animation performance:** Limit layering effects and compress assets to maintain page speed.

## Open Questions
1. Should the timeline cards trigger modal overlays with deeper detail?
2. Do we need localized messaging variants for other markets beyond Atlanta?
3. Which CTA destination drives more value: demo video or technology deep dive?

## Next Review
- Targeting initial review with stakeholders once copy draft and wireframe are ready.

## Immediate Next Steps
1. Draft copy variants for headline, lead, and each process step.
2. Confirm metric accuracy with operations lead before locking stat pills.
3. Produce a quick wireframe mock (Figma or Whimsical) to validate layout prior to coding.
