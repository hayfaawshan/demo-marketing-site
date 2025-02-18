// pages/about.tsx
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>We are XYZ company and we sell the best products in the world!</p>
        </div>
    );
}

export const metadata = {
    title: 'About Us',
    description: 'Learn more about XYZ company',
};

export default AboutPage;