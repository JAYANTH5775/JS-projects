const express = require('express');
const { exec } = require('child_process');
const _ = require('lodash');

const app = express();
const port = 3000;

// Middleware to fetch blog data using the provided curl command
app.use('/api/blog-stats', (req, res, next) => {
    const curlCommand = `curl --request GET \
    --url https://intent-kit-16.hasura.app/api/rest/blogs \
    --header 'x-hasura-admin-secret: 32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'`;

    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing curl command: ${error.message}`);
            return next(error);
        }

        try {
            const data = JSON.parse(stdout);
            req.blogData = data; // Store the retrieved data in the request object
            next();
        } catch (parseError) {
            console.error(`Error parsing JSON data: ${parseError.message}`);
            return next(parseError);
        }
    });
});
// Inside the route handler for /api/blog-stats
app.get('/api/blog-stats', (req, res) => {
    const blogData = req.blogData; // Retrieve the data from the request object

    // Calculate the total number of blogs
    const totalBlogs = blogData.length;

    // Find the blog with the longest title
    const longestTitleBlog = _.maxBy(blogData, 'title');

    // Determine the number of blogs with titles containing the word "privacy."
    const privacyBlogs = blogData.filter(blog => blog.title.toLowerCase().includes('privacy'));

    // Create an array of unique blog titles
    const uniqueTitles = _.uniqBy(blogData, 'title').map(blog => blog.title);

    // Respond with the statistics as a JSON object
    res.json({
        totalBlogs,
        longestTitle: longestTitleBlog.title,
        privacyBlogs: privacyBlogs.length,
        uniqueTitles,
    });
});
app.get('/api/blog-search', (req, res) => {
    const query = req.query.query.toLowerCase(); // Retrieve the search query from the request query parameters

    // Implement the search functionality
    const searchResults = blogData.filter(blog => blog.title.toLowerCase().includes(query));

    // Respond with the search results as a JSON object
    res.json({ searchResults });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).json({ error: 'An internal server error occurred' });
});
// Import Lodash

// Define a function to fetch and analyze data
const fetchDataAndAnalyze = async () => {
    // Your existing code to fetch and analyze data
    // ...

    return {
        totalBlogs,
        longestTitle: longestTitleBlog.title,
        privacyBlogs: privacyBlogs.length,
        uniqueTitles,
    };
};

// Memoize the function with a cache expiration of 5 minutes (300000 milliseconds)
const memoizedFetchAndAnalyze = _.memoize(fetchDataAndAnalyze, null, 300000);

// Route handler for /api/blog-stats
app.get('/api/blog-stats', async (req, res) => {
    try {
        const statistics = await memoizedFetchAndAnalyze();
        res.json(statistics);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
});
