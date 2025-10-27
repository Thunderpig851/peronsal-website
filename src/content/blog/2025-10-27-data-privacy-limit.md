---
title: "Data, Privacy, and the Line We Keep Redrawing"
date: 2025-10-27
tags: [ethics, privacy, data, class, reflections]
summary: A straight-shooting reflection on our class week: TED talks on privacy, the “What Did You Find” hunt, and reading actual privacy policies without the PR varnish.
---

## The headline

This week finally clicked something into place: privacy isn’t a settings toggle; it’s a shifting power relationship. Every “feature” that watches me is a trade I didn’t negotiate, and the defaults are designed so I’ll forget to negotiate at all.

## TED Talks on privacy — what stuck

- **“Nothing to hide” is lazy.** Harms don’t show up as scandal; they show up as quiet exclusions, higher prices, and auto-denials you never see.
- **Context matters.** The same data point flips from “helpful” to “harmful” when it crosses a boundary (health → ads, classroom analytics → disciplinary tools).
- **Friction is policy.** If consent is buried, it isn’t consent; it’s capture.

**Takeaway:** surveillance scales effortlessly; **care** and **oversight** don’t. If we’re not building the brake and the steering at design time, we’re just building a faster car.

## “What Did You Find” — the uncomfortable part

Once you start pulling on your own data threads, you find the same pattern everywhere:

- Shadow profiles I didn’t explicitly create still triangulate me from friends and devices.
- “Anonymized” datasets de-anonymize fast when linked with one more table.
- “Improve our services” is the most productive euphemism in tech.

**Takeaway:** **linkage is the real product.** Single datasets look tame; joins do the damage.

## Privacy policy reviews — the craft of saying nothing

Reading the policies back-to-back made the choreography obvious:

- **Vague verbs:** “may,” “could,” “from time to time.” All doors open, none closed.
- **Purpose creep baked in:** “compatible purposes” clause = a blank check.
- **User agency theater:** rights listed, paths to use them buried in email mazes and 30-day clocks.
- **Data retention:** almost always “as long as necessary,” with “necessary” undefined.

**Takeaway:** the policy isn’t written for me; it’s written **against** future liability.

## Where this leaves me

- **Default posture:** assume collection is broader than stated and retention is longer than disclosed.
- **Design stance:** treat **data minimization** like performance budgets—hard caps, not vibes.
- **Threat model for students:** grades, health, location, and finances are the crown jewels. Anything that touches those deserves a higher bar than “we hashed it.”

## The line I’ll draw (concrete practices)

- **Request logs** when offered. If there’s no export, that’s a signal.
- **Refuse “necessary” telemetry** in dev builds; prove what’s truly necessary.
- **Partition identities:** separate emails/phones/payment tokens for services that don’t need to be linked.
- **Audit join paths** in any project using third-party SDKs: list tables, keys, retention, and who can run joins.
- **Ship a data README** with every app: what we collect, why, retention, and how to delete—kept in the repo, not just marketing.

## The questions I’m not done with

1. How do we **prove** minimization to users without revealing attack surface?
2. What’s a practical retention policy for student apps that isn’t “forever or 30 days”?
3. Can we make “consent” real by adding **meaningful alternatives** (pay, local-only, degraded mode) instead of “take it or leave it”?
4. How do we detect and block **secondary use** when the harm travels through a partner’s pipeline, not ours?

## Closing thought

If privacy is a power problem, then the ethical move isn’t better wording; it’s **less collection, fewer joins, shorter clocks, and real exits**. That’s build-time work, not a footer link.
