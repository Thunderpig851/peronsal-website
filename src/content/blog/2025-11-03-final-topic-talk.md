---
title: "Bots, Touchscreens, and Campus Cameras: Notes for a Short CS Seminar"
date: 2025-11-03
description: "Quick takes on the ‘Dead Internet Theory,’ how to actually test it, why everything turned into a touchscreen, and what constant video recording means on campus."
tags: [ai, web, privacy, security, ux, accessibility, ethics]
layout: blog
draft: false
---

# Bots, Touchscreens, and Campus Cameras

This pulls together my seminar notes on the **Dead Internet Theory** (and how to test it without going conspiracy-brained), plus two other student topics that are worth a real look: **Why is everything a touchscreen?** and **Video data collection on college campuses**.

---

## 1) Dead Internet Theory — the short version

**The claim:** A huge amount of what we see online is automated—bots, content farms, and now AI-written text.

**What we actually know (directionally):**
- **Bots are a big slice of traffic.** A sizable portion of web requests are automated (crawlers, scrapers, spam). A meaningful chunk are “bad bots” aimed at abuse or fraud.
- **AI crawlers are growing.** AI-specific crawlers (think model training/indexing) are now a noticeable share of all crawler activity.
- **AI-generated content is common.** Studies of new pages/posts often find lots of duplication and machine-like text; some snapshots even show AI-heavy volumes. Detectors aren’t perfect, so treat numbers as estimates.

**How to test without creeping on people:**
- **Copy-paste check:** Spot near-duplicate posts across sites (shingles/MinHash or embeddings). Report the **percent that are near-copies**.
- **Timing check:** Look for **robotic bursts**—replies across accounts in the same second, or patterns that ignore day/night cycles.
- **Link check:** Measure the **share of outbound links** that 404, loop to summaries, or skip primary sources.
- **Site-side check (if you control a page):** Compare **real input events** (mouse/touch/typing) to raw requests; note headless/proxy fingerprints. Keep it aggregate; no user-level tracking.
- **Language “template” vibe (carefully):** Watch for **ultra-regular sentence lengths** and repeated boilerplate. Never rely on a single “AI detector.”
- **Track over time:** Repeat monthly to see if “synthetic signals” are rising or falling.
- **Be fair:** Document uncertainty and false-positive causes (scheduled posts, syndication), and don’t add barriers for disabled users.

**Why it matters:** If bots and low-quality generation dominate, **search degrades**, **ads waste money**, and **real voices get buried**. Good measurement cuts through vibes and tells us where to fix things (ranking, moderation, incentives).

---

## 2) Why is everything a touchscreen?

**Short answer:** **Cost curves + versatility + design fashion.** Capacitive touch got cheap, phones trained everyone on gestures, and “one panel fits many tasks” simplified hardware SKUs. But the details matter:

- **Hardware economics:** One glass panel can replace clusters of knobs, keys, and indicator lights. Fewer mechanical parts → fewer failure points and cheaper assembly at scale.
- **Software flexibility:** A screen can morph for different modes (navigation today, media tomorrow) and update via software instead of new plastics.
- **Training effect:** Smartphones made gestures second nature. Vendors piggybacked on that muscle memory, even when dials/switches might have been faster.
- **Downsides we should say out loud:**
  - **Accessibility:** Flat glass can be hostile for low-vision users, tremors, gloves, or wet environments.
  - **Safety & attention:** In cars and appliances, nested menus increase **eyes-off-task** time compared to a physical knob with tactile stops.
  - **Reliability:** Finger-grease, sunlight washout, and cracked screens are real issues in field work.
- **Better pattern:** **Hybrid controls.** Keep critical actions on **dedicated, tactile controls** (volume, temperature, hazard, stop), and use screens for **secondary** or **rare** settings. Add **haptics**, larger targets, and **voice/physical** fallbacks.

**If I had one slide:** “Touch is flexible and cheap, but **critical tasks deserve hardware**. Hybrid designs win for safety and accessibility.”

---

## 3) Video data collection on college campuses

**What’s happening:** More cameras, higher resolution, cloud storage, and analytics (face detection/recognition in some places), often justified by safety and asset protection.

**Key questions to ask on campus:**
- **Purpose & scope:** What are cameras *for* (specific incident response vs. broad monitoring)? Which areas are covered? Are there **no-camera zones** (counseling, clinics, certain study spaces)?
- **Retention & access:** How long is footage kept, and who can view it? Are there **access logs** and regular audits?
- **Analytics:** Is the school using **face recognition**, gait analysis, or crowd analytics? Under what policy? Can students opt out of automated ID where lawful?
- **Transparency:** Are there **posted maps** of camera locations and a public **policy** including vendor contracts and data-sharing rules?
- **Student rights:** Clear processes for **records requests**, **error correction**, and **appeals** if footage is used in conduct cases.
- **Equity & bias:** Camera placement and enforcement can **disproportionately target** certain groups or activities. Track complaints and outcomes.
- **Security basics:** Encrypted storage/transport, strong auth for viewers, **breach notification** plans, and regular third-party audits.

**Reasonable compromises:**
- **Narrow purpose, short retention**, strong access logs.
- **No automated ID** by default; separate, higher bar for any analytics pilot with public review.
- **Independent oversight** (student/faculty/staff committee) and annual reports on usage and requests.

---

## Closing

These topics connect: **who controls the interface** (touch vs. tactile), **who shapes what we see** (bots vs. people), and **who holds the records** (cameras and storage). The through-line is simple: **design for humans, measure honestly, and set policies that match the risk.**
