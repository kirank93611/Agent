import React, { useState } from 'react';
import './Agents.css';

const initialAgents = [
	{ id: 1, name: 'Customer Service Agent', description: 'AI agent trained to handle customer inquiries and support tickets.', isActive: true, stats: { conversations: '2.4k', accuracy: '98%', responseTime: '< 30s' } },
	{ id: 2, name: 'Sales Assistant', description: 'AI agent that helps qualify leads and assists with sales processes.', isActive: false, stats: { conversations: '1.2k', accuracy: '95%', responseTime: '< 45s' } },
	{ id: 3, name: 'Data Analyst', description: 'AI agent that analyzes data and provides business insights.', isActive: true, stats: { conversations: '856', accuracy: '99%', responseTime: '< 60s' } }
];

const Agents = () => {
	const [agents, setAgents] = useState(initialAgents);

	const toggle = (id) => setAgents(prev => prev.map(a => a.id === id ? { ...a, isActive: !a.isActive } : a));

	return (
		<main className="agents-root">
			<header className="agents-header">
				<h2>AI Agents</h2>
				<p className="agents-sub">Manage your AI agents and their configurations</p>
			</header>

			<section className="agents-grid">
				{agents.map(agent => (
					<article key={agent.id} className="agent-card">
						<div className="agent-card-head">
							<div className="agent-avatar">🤖</div>
							<div>
								<div className="agent-name">{agent.name}</div>
								<div className="agent-toggle">
									<button onClick={() => toggle(agent.id)} className={`toggle-btn ${agent.isActive ? 'on' : 'off'}`}>{agent.isActive ? 'Active' : 'Inactive'}</button>
								</div>
							</div>
						</div>
						<p className="agent-desc">{agent.description}</p>
						<div className="agent-stats">
							<div><strong>{agent.stats.conversations}</strong><div className="stat-label">Conversations</div></div>
							<div><strong>{agent.stats.accuracy}</strong><div className="stat-label">Accuracy</div></div>
							<div><strong>{agent.stats.responseTime}</strong><div className="stat-label">Response Time</div></div>
						</div>
						<div className="agent-actions"><button className="details-btn">View Details</button></div>
					</article>
				))}
			</section>
		</main>
	);
};

export default Agents;