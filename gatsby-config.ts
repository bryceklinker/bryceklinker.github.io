import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
    jsxRuntime: 'automatic',
    siteMetadata: {
        title: 'Bryce Klinker'
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-web-vitals',
            options: {
                metrics: ['FID', 'TTFB', 'LCP', 'CLS', 'FCP'],
                eventCategory: 'Performance',
                includeInDevelopment: false,
                debug: false
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Bryce Klinker',
                short_name: 'Klinker',
                start_url: '/',
                display: 'minimal-ui',
                icon: path.resolve(
                    __dirname,
                    'src',
                    'images',
                    'favicons',
                    'default48x48.png'
                )
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.resolve(__dirname, 'src', 'images')
            }
        },
        {
            resolve: 'gatsby-plugin-next-seo',
            options: {
                openGraph: {
                    type: 'website',
                    locale: 'en_us',
                    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
                    site_name: 'Bryce Klinker'
                }
            }
        }
    ]
};

export default config;
