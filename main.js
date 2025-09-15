import { settings } from '../data/settings.js';
import { clients } from '../data/clients.js';
import { services } from '../data/services.js';
import { processSteps } from '../data/process.js';
import { projects } from '../data/projects.js';

// Hero + contact
document.getElementById('heroText').textContent = settings.heroText;
document.getElementById('companyName').textContent = settings.companyName;
document.getElementById('location').textContent = settings.location;
document.getElementById('phone').textContent = settings.phone;
document.getElementById('email').textContent = settings.email;
document.getElementById('web').textContent = settings.web;

// Services intro
document.getElementById('servicesIntro').textContent = settings.servicesIntro;

// Clients
const clientsList = document.getElementById('clientsList');
clients.forEach(c => {
  const li = document.createElement('li');
  li.className = "px-4 py-3 rounded-xl bg-white border border-black/5 text-center text-sm font-medium";
  li.textContent = c.name;
  clientsList.appendChild(li);
});

// Services grid
const servicesGrid = document.getElementById('servicesGrid');
services.forEach(s => {
  const card = document.createElement('div');
  card.className = "rounded-2xl bg-white border border-black/10 p-6 shadow-sm";
  card.innerHTML = `
    <div class="text-[13px] font-semibold uppercase tracking-wide text-gray-500">Service</div>
    <h3 class="mt-1 text-xl font-bold">${s.title}</h3>
    <p class="mt-2 text-gray-700">${s.desc}</p>
  `;
  servicesGrid.appendChild(card);
});

// Process
const processGrid = document.getElementById('processGrid');
processSteps.forEach(p => {
  const step = document.createElement('div');
  step.className = "rounded-2xl bg-white border border-black/10 p-6";
  step.innerHTML = `<div class="text-sm font-bold"><span class="inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 chip">${p.n}</span>${p.title}</div>`;
  processGrid.appendChild(step);
});

// Projects
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(pr => {
  const article = document.createElement('article');
  article.className = "rounded-3xl overflow-hidden border border-black/10 bg-white";
  const img = pr.image ? `<div class="aspect-[16/9] overflow-hidden"><img src="${pr.image}" alt="${pr.title}" class="w-full h-full object-cover"/></div>` : "";
  article.innerHTML = `
    ${img}
    <div class="p-6">
      <div class="text-xs uppercase tracking-wider text-gray-500">${pr.role}</div>
      <h3 class="text-xl font-bold mt-1">${pr.title}</h3>
      <p class="mt-2 text-gray-700">${pr.blurb}</p>
    </div>
  `;
  projectsGrid.appendChild(article);
});
