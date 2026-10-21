<script>
  import { sites } from "./lib/sites.js";
  import SiteCard from "./lib/SiteCard.svelte";
  import Modal from "./lib/Modal.svelte";

  let selected = $state(null);
</script>

<main>
  <header>
    <h2>The Web is Ephemeral</h2>
    <section>
      <h1>So, here are some sites I built that may no longer exist.</h1>
      <p>
        I've built a lot of 'em over the years, many for local businesses in and around Richmond, VA. I'm not the
        designer of these sites; I'm just the guy who put them together with code, mostly within the WordPress
        ecosystem. Mostly.
      </p>
        <p>I haven't linked to any of them since there's no telling what's going on at each domain now. Some are still
        active in the state I left them while others have been lost to the ether or have been redesigned once or thrice.
        I had to dig through an internet archiver or two to find at least half of these to take screenshots of them!
      </p>
      <p>
        Important: I recently bought <a href="https://en.wikipedia.org/wiki/Vampire_Survivors">Vampire Survivors</a> and its
        three main DLCs for under $8 and keep having to fight to get some of its soundtrack out of my head. Forgive me
        for the absurd pixel&shy;ated look that I remade this page into. 🤷‍♀️
      </p>
    </section>
  </header>

  <ul class="grid">
    {#each sites as site (site.domain)}
      <li><SiteCard {site} onopen={() => (selected = site)} /></li>
    {/each}
  </ul>
</main>

<footer>
  <ul class="menu">
    <li>❦ Copyright Forever by Default</li>
    <li><a href="/">Back</a></li>
    <li><a href="/resume">Resume</a></li>
    <li><a href="https://chairmanbrando.org">Blog</a></li>
    <li>#eidnind</li>
  </ul>
</footer>

{#if selected}
  <Modal site={selected} onclose={() => (selected = null)} />
{/if}

<style>
  main {
    margin: 0 auto;
    max-width: 1100px;
    padding: 4rem 1rem 8rem;
  }

  header {
    margin-bottom: 3rem;

    section {
      @media (min-width: 1024px) {
        column-count: 2;
        column-gap: 4rem;
      }
    }

    p {
      margin-top: 0;
    }
  }

  footer {
    border-top: var(--px) solid var(--text);
    margin: 0 auto;
    max-width: 1100px;
    padding: 1rem;
    text-align: center;
  }

  h1 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    margin-bottom: 1.5rem;
  }

  h2 {
    color: var(--neon);
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;

    & > li {
      flex: 1 1 300px;
      max-width: calc((1100px - 6rem) / 3);
    }
  }

  .menu {
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
</style>
