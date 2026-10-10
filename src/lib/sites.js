const base = `${import.meta.env.BASE_URL}p-`;

const s = (domain, file, blurb) => ({
  domain,
  preview: `${base}${file}-prev.webp`,
  full: `${base}${file}.webp`,
  blurb
});

export const sites = [
  s('acluva.org', 'acluva', "Long before Gutenberg was a thing, I had to make these guys a new theme that worked with their existing piles and piles of content."),
  s('amfamfit.com', 'amfamfit-scheduling', "The site was okay for the time, I guess. More importantly, I built a custom class schedule system with CakePHP and `date()` math. It even supported repeating events!"),
  s('artonproducts.com', 'artonproducts', "The design wasn't much, but the hoops I pushed WooCommerce through to match their internal pricing were some kind of insane."),
  s('brownbev.com', 'brownbev', "Maybe the first site I put together once Gutenberg became a thing. Mostly heavily restyled blocks."),
  s('carpenter.com', 'carpenter', "The latest redesign and rebuild of several. I've been involved behind the scenes (none of them know who I am!) since they were flat HTML files and then ExpressionEngine."),
  s('chickahominyfalls.com', 'chickahominyfalls', "The real meat of this build was the interactive map highlighting their neighborhoods. I probably should've screenshot that instead, eh?"),
  s('chrispeace.com', 'chrispeace', "One of the prettiest sites I built with all its little heavily-designed details. We lost something when the web moved to phones. 🙃"),
  s('copperpoint.com', 'copperpoint', "I had to use Drupal to make this. Gross."),
  s('covenantschool.org', 'covenantschool', "I don't remember much about this one, but it's clearly from the same era as chrispeace.com!"),
  s('dime.com', 'dime', "After years on Drupal they wanted something on WordPress that they could update more easily. I don't blame them. The original design was better, more blue and stuff, but a third party got involved."),
  s('dime.com/golf', 'dime-golf', "One of a slew of landing pages made from one-page templates (using a minimal theme built for everything being one-off templates) and ACF fields."),
  s('hivesalonstudios.com', 'hivesalonstudios', "A blocky site with an animated SVG mask logo and background videos in every hero."),
  s('mckinneyrsa.com', 'mckinneyrsa', "More Gutenberg block goodness... this time with weed! It's been legal in Virginia for years, but retail sales still won't start until July 2027!"),
  s('riverspan.com', 'riverspan', "Slanty things made from SVG masks are kinda neat, I guess."),
  s('rpdo.com', 'rpdo', "This one was sadly redone in Elementor (by someone else) for some reason. It was much nicer before, I think!"),
  s('rvanews.com', 'rvanews', "Note: Various empty spaces had local ads in them that didn't get picked up by the web archiver. Anywhomst, have you ever been involved in something cooler than you realized and appreciated at the time? Take me back to before this past Decade of Utter Nonsense. 🫠"),
  s('stylecrafthomes.com', 'stylecrafthomes', "Built this site twice. The first had direct integration with their NEWSTAR API. The second was disconnected and used metadata fields for easier updating. Eventually a SaaS system combining the back and front ends yoinked it away from us."),
  s('yardworksva.com', 'yardworksva', "They *finally* caved and go for a much-needed redesign after more than a decade. Not six months later the company was bought and the site remade in yet another SaaS platform. 😡")
];
