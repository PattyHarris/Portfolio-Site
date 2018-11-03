Porfolio-Site

# Build it: Router for Porfolio Site

1. Contains 3 pages, Home, Portfolio, and Contact
URLs:
/                            -> Home page
/portfolio              -> Portfolio home page with links to items
/portfolio/123       -> Individual portfolio item page that shows the ID.
/contact                -> Contact page

2. The Home page has a title of Portfolio, the navigation links, a Welcome header (h1), and "This is my site.  Take a look around!" (p tag).

2.  The Contact page contains the navigation links, Contact Me (h1) and "You can reach me at test@gmail.com" (p tag).  The URL here is /contact

3. On the Porfolio page itself, again the same header.  It as an h1 tag with "My Work"  followed by "Checkout the following things I've done:" (p tag).  It also contains a list of links (e.g. Item One, Item Two).  When you click on the first one (for example), it will take you to /portfolio/1 - here, it has "A Thing I've Done" (h1) followed by "This page is for the item with an id of 1".

4. The project is started by copying the expensify-app and renaming it to portfolio-site.

5. Keep the Header and NotFoundPage.  In the Header component, remove all the links and replace them with the links for this site.  In AppRouter.js, again keeping the Header and NotFoundPage, remove all the other expensify-app components.  These will be replace with the components for this project.

6. Primary difference between my solution and Andrews was that he used "Link" instead of "NavLink" inside the PortfolioPage.  Also, I needed to add exact=true inside the Header component for the PortfolioPage link...

7. Also, when we're on the PortfolioItemPage, the Header NavLink items don't show the previously selected item in bold - Andrew indicates that is to be expected...
