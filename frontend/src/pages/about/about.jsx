import React from 'react';
import './About.css'; // Import the CSS file
import abt from '../../assets/abt.gif'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-gif">
        <img src={abt} alt="YouTube GIF" /> 
      </div>
      <div className="about-card">
        <h1>EngageCoin: Dynamic Token Pricing Based on YouTube Channel Engagement</h1>
        <p></p>
        <p>
          EngageCoin is an innovative token system that dynamically adjusts its price based on both market demand and the engagement metrics of the associated YouTube channel. This novel approach aims to create new revenue streams for content creators and investment opportunities for traders.
        </p>
        <h2>Addressing Current Issues</h2>
        <ul>
            <li></li>
          <li>
            <b>Token Prices Fluctuate Based on Supply and Demand:</b> Traditional token prices are typically determined solely by market forces, failing to account for the value generated by content engagement.
          </li>
          <li>
            <b>Disconnect Between Engagement and Monetization:</b> Metrics like YouTube likes, comments, and views are not directly integrated into token pricing, limiting opportunities for creators and investors.
          </li>
          
        </ul>

        <h2>EngageCoin: A Unique Token System</h2>
        <p></p>
        <p><b>Concept:</b> EngageCoin is an ERC-20 token on the Polygon network, where each token represents a specific YouTube channel.</p>
        <p><b>Price Adjustment:</b> Token prices dynamically adjust based on both market demand and supply, as well as the engagement metrics of the associated YouTube channel.</p>
        <h2>Technical Architecture</h2>
        <p></p>
        <ul>
          <li>
            <b>Blockchain Platform:</b> EngageCoin is built on the Polygon network, leveraging its fast, low-cost, and scalable blockchain capabilities.
          </li>
          <li>
            <b>Smart Contracts:</b> Custom ERC-20 token contracts handle the dynamic pricing adjustments and royalty distribution mechanisms.
          </li>
          <li>
            <b>Decentralized Exchange:</b> The QuickSwap DEX on Polygon provides the liquidity and trading infrastructure for the EngageCoin tokens.
          </li>
        </ul>

        <h2>Engagement Data Integration</h2>
        <p></p>
        <ul>
          <li>
            <b>YouTube Data API:</b> EngageCoin fetches real-time engagement metrics such as likes, comments, and views from the YouTube Data API.
          </li>
          <li>
            <b>Storage:</b> Filecoin for decentralized storage of engagement data and other relevant information.
          </li>
        </ul>

        <h2>Deployment and Trading</h2>
        <p></p><p><b>QuickSwap Integration:</b> The EngageCoin tokens are listed and traded on the QuickSwap decentralized exchange on Polygon.</p>
        <p><b>Trading Opportunities:</b> Traders can invest in EngageCoin tokens to potentially profit from the dynamic price changes driven by YouTube engagement.</p>
      </div>
    </div>
  );
}

export default About;