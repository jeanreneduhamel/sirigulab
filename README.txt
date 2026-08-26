THE SIRIGU LAB — WEBSITE v0.1

This is a static, responsive website.

To preview locally:
1. Open a terminal in this folder.
2. Run: python3 -m http.server 8000
3. Visit: http://localhost:8000

Pages:
- index.html
- research.html
- oxytocinspace.html
- people.html
- publications.html
- about.html

No external JavaScript or CSS libraries are required. All scientific assets are included locally.


v0.2 homepage hero correction: slides 2–4 now use individual scale/position rules matching the approved four-way hero composition; slide 1 remains full-bleed.


v0.3 fixes:
- Research card anchor jumps now leave the section number visible below the sticky navigation.
- CNRS and Aix-Marseille Université homepage logos now link to their official websites, matching INT.


v0.4 fix:
- Corrected the research anchor selector: the actual section class is .theme, not .research-theme. Added both scroll-padding-top and scroll-margin-top so 01/02/03/04 remain fully visible below the sticky navigation.


v0.5 refinement:
- Research anchor offset reduced to the actual 74 px sticky-navigation height, so each theme's top separator line aligns with the bottom edge of the navigation bar.

v0.6 homepage research-card update:
- Card 03 renamed “Action & brain plasticity”.
- Card 03 description now reflects voluntary action, motor control and cortical reorganization.
- Card 04 renamed “Awareness, agency & consciousness”.
- Card 04 description now reflects awareness of intentions/actions and disorders/restoration of consciousness.


v0.7 Research-page visual correction:
- Restored concise legends to all Research theme figures.
- Theme 01: smaller PVN panel and larger PET panel.
- Theme 02: rebuilt the composition with contained media, no truncation/overflow, and separate captions.
- Theme 03: larger stimulation panel, smaller plasticity panel, off-white frame and separate study cards.
- Theme 04: retained relative sizing but added visual separation and legends.
- DigiTrack/DigiRead cards now use matched figure areas and aligned text blocks.


v0.8:
- Theme 03 figures rebalanced and given equal 380 px image heights.
- Static figures in Research themes 01–04 now enlarge in the existing click-to-expand lightbox. DigiTrack/DigiRead retain the same lightbox behavior.


v0.9:
- Infant-grooming video now opens in the lightbox and remains playable at enlarged size.
- Figure legends are preserved and displayed below all enlarged Research images/videos.


v0.10:
- Enlarged static Research figures now close when the user clicks directly on the image.
- Enlarged video retains normal playback controls; click outside or × still closes it.


v0.11 ERC page:
- Full ERC/EU logo moved to a standalone transparent position at the upper right of the project hero.
- Restored “THE OXYTOCINSPACE TEAM” heading above the four-PI panel.
- Wireless recording image shifted left and top-aligned with the other Sirigu contribution images.


v0.12 ERC hero alignment:
- Kept ERC/EU logo standalone at upper right.
- Removed the internal project-top shift; Central Idea illustration now aligns with the project-question line rather than the OxytocINspace title.


v0.13 ERC hero alignment:
- Diagnosed the real issue: both project-top grid columns began at the OxytocINspace title. The concept column now has its own desktop offset so the top of the Central Idea image aligns with the “How does the brain turn space into territory?” question. Mobile reverts to normal stacked spacing.


v0.14 People page:
- Angela feature moved upward and compacted so the Collaborators heading enters the initial viewport sooner.
- Removed the explanatory sentence beneath Collaborators.
- Added hover email affordance on portraits: Angela's is live; collaborator cards show a visual placeholder until addresses are supplied.

v0.15 additional content refinements:
- DigiTrack and DigiRead publication details are shown as figure legends beneath their images, matching the rest of the Research page.


v0.16:
- Grinevich affiliation corrected to University of Heidelberg, Germany.
- Homepage Hero 3 shifted right and slightly narrowed to reduce overlap with the hero text.


v1.0:
- Added live mailto links for all seven collaborators.
- Final static QA pass completed: local asset/page references, duplicate IDs, viewport/style/script presence, and image alt attributes checked.
