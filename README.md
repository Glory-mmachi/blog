
# Personal Blog Application ReadMe

This repository contains a Personal Blog Application built using React.js. The application aims to showcase blog posts, recent projects, and a newsletter subscription section. Here is an overview of the application's components, pages, routing, and external API integration:

## Components:

1. **BlogComponent.js**:
   - Displays a single blog post fetched from the remote API.
   - Utilizes React Router's `useParams` hook to retrieve the blog post `id` from the URL.
   - Fetches blog post data (title, publication date, read time, image, HTML content) from the remote API using `fetch`.
   - Renders HTML content using `dangerouslySetInnerHTML`.

2. **CardList.js**:
   - Renders a list of blog post cards.
   - Consumes data from a context using the `useTheme` hook.
   - Maps over `data.posts` array to display individual blog post cards with images, titles, publication dates, read times, and brief descriptions.
   - Provides a "view" button to access detailed views of each blog post.

3. **HeroSection.js**:
   - Represents the hero section of the web page.
   - Displays a greeting message, an introduction, and social media icons.
   - Includes a right-side image, possibly representing the author.
   - Shows social media icons using image elements.

4. **LatestPost.js**:
   - Displays the latest blog posts.
   - Features a heading "Latest Posts" and a link to view all posts.
   - Utilizes the `CardList` component to render a list of latest blog post cards.

5. **Navbar.js**:
   - Represents the application's navigation bar.
   - Contains links to navigate to different sections such as blog, newsletter, and Twitter feed.
   - Displays the application logo alongside the app name.

6. **Newsletter.js**:
   - Represents a newsletter subscription section.
   - Contains a heading, an input field for email entry, and a "Subscribe" button.
   - Includes copyright information and social media icons in the footer section.

7. **ProjectSection.js**:
   - Displays information about recent projects.
   - Consumes data from a context using the `useTheme` hook.
   - Maps over `data.projects` array to display project information including images, titles, descriptions, and stylized project tags.

## Pages:

1. **Blog.js**:
   - Renders a list of blog posts as the blog homepage.
   - Includes a heading "Posts Examples" and a brief description.

2. **BlogDetails.js**:
   - Displays a detailed view of a single blog post.
   - Uses the `BlogComponent` for displaying specific post content.

3. **Home.js**:
   - Represents the application's home page.
   - Accessed when the root URL is visited.

## Routing:

- The application uses React Router for routing, with the main routing configuration in the `App.js` file.
- Defines routes for the home page, blog page, and individual blog post details.

## External API:

- The application fetches blog post data from the external API at 'https://glory-blog-api.vercel.app/'.


Feel free to explore the codebase for more detailed implementation and functionality of the Personal Blog Application.
