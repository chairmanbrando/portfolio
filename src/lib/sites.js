const base = `${import.meta.env.BASE_URL}p-`;

const s = (domain, file, blurb) => ({
  domain,
  preview: `${base}${file}-prev.webp`,
  full: `${base}${file}.webp`,
  blurb
});

// @todo Find one of the RVANews network sites in an archive and add it. This will imbalance the
// grid, so you'll have to find more stuff afterward! And what about that telehealth integration?
export const sites = [
  s('acluva.org', 'acluva', "Long before Gutenberg was a thing, I had to make these guys a new WordPress theme that worked with their existing piles of content."),
  s('amfamfit.com', 'amfamfit-scheduling', "The site design was okay for the pre-mobile time, but more importantly, I built a custom class schedule system with CakePHP and `date()` math for their instructors to use. It even supported recurring events so they wouldn't have to put in a dozen weekly classes one by one."),
  s('artonproducts.com', 'artonproducts', "The design was mostly a handful of modifications to Storefront, but the hoops I pushed WooCommerce through to match their internal pricing were some kind of silly. The Dynamic Pricing plugin was patched to add extra features, and the cost of add-ons was nullified via hooks and recalculated manually."),
  s('brownbev.com', 'brownbev', "I'm fairly sure this was the first site I put together once Gutenberg became a thing. It's mostly heavily restyled default blocks with SVG masks for the frayed bottom edge of images."),
  // s('carpenter.com', 'carpenter', "The latest redesign and rebuild of several. I've been involved with these guys since the site was flat HTML files and then transitioned to ExpressionEngine some 15 years ago."),
  s('chickahominyfalls.com', 'chickahominyfalls-hoods', "The site has a nice rustic sort of look, but the fun stuff is in the custom neighborhood map. Clicking items in the list will make the relevant pin bounce to show where it's at. Clicking the pins directly works oppositely and will scroll to the relevant list item."),
  s('chrispeace.com', 'chrispeace', "One of the prettiest sites I built with all its little heavily-designed details. We lost something, I think, when the web moved to phones and websites became flat and largely devoid of color and fun so that they could shrink responsively to tiny screens."),
  s('copperpoint.com', 'copperpoint', "Though I'd worked on modifying a site on Drupal before, I believe this was the first (and only) full build I did with it."),
  s('covenantschool.org', 'covenantschool', "I don't remember much about this one, but it's clearly from the same era as chrispeace.com."),
  s('dime.com', 'dime', "After years on Drupal they wanted something on WordPress that they could update more easily. This included automated generation of PDFs using a simplified version of various pages' content."),
  s('dime.com/golf', 'dime-golf', "One of a slew of landing pages made from one-page templates and ACF fields using a minimalist theme I built for housing said templates."),
  s('hivesalonstudios.com', 'hivesalonstudios', "A blocky site with an animated SVG mask logo and background videos in every hero."),
  s('mckinneyrsa.com', 'mckinneyrsa', "More Gutenberg block goodness with marijuana and its testing and certification being the focus. It's been legal in Virginia for years, but retail sales still won't start until July 2027."),
  s('rafflething.com', 'raffle', "Turning WooCommerce into a ticket-selling apparatus with a custom but simplisitic front end and a checkout connection to Authorize.Net was quite challening in the end. \n\n Note: This is blurred and fake-URL'd because it was not a public site."),
  s('riverspan.com', 'riverspan', "Slanty things made from SVG masks were in at the time."),
  s('rpdo.com', 'rpdo', "One of the most colorful designs, matching their business's aethetics, that I worked on over the years."),
  s('rvanews.com', 'rvanews', "This was the parent site for a network of local news sites covering the entire Richmond, VA area. Have you ever been involved in something cooler than you realized and appreciated at the time? Take me back to before this past Decade of Utter Nonsense. 🫠 \n\n Note: Various empty spaces had local ads in them that didn't get picked up by the web archiver. There was also a weather forecast in the main header bar."),
  s('stylecrafthomes.com', 'stylecrafthomes', "I built this site twice over the years: The first had direct integration with their NEWSTAR API to get home and neighborhood details; the second was disconnected and used metadata fields for everything. Like Chickahominy Falls, each neighborhood had an interactive map, but this one was using the Google Maps API."),
  s('yardworksva.com', 'yardworksva', "A much-needed redesign in WooCommerce after more than a decade on something old and hard to update.")
];
