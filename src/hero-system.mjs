import {TOPICS} from './topics.mjs';
import {MODULES} from './catalogue.mjs';
import {services} from './content.mjs';
import {parseHTML} from 'linkedom';
import {esc,arrow} from './components.mjs';
const contexts={
 '/services':['Choose the work that matters',[['01','Operations','Connect customer records, responsibilities and the next action.'],['02','Delivery','Bring design, software and automation into one reviewed brief.'],['03','Capability','Help the team use and maintain what is delivered.']]],
 '/insights':['Read it. Try it. Use it.',[['01','Understand','Start with a direct explanation and clear boundaries.'],['02','Apply','Work through a realistic example from everyday operations.'],['03','Decide','Use the guide to ask a better question about your own process.']]],
 '/pricing':['A clear scope before a commitment',[['01','Platform','Review the published reference estimate.'],['02','Implementation','Agree migration, configuration and the handover.'],['03','Running costs','Identify hosting, provider usage and support separately.']]],
 '/contact':['A useful first conversation',[['01','The process','What happens today, and where does it slow down?'],['02','The outcome','What should your team be able to do differently?'],['03','The timing','Which deadline or dependency needs to be considered?']]],
 '/get-started':['Bring the problem. We’ll shape the brief.',[['01','Describe','A recent example is enough to start.'],['02','Review','We identify the relevant work and unanswered questions.'],['03','Agree','Scope and responsibilities come before implementation.']]],
 '/company':['One brief. Connected delivery.',[['01','Listen','Understand the people and the work before proposing tools.'],['02','Make','Prototype the important task and test the assumptions.'],['03','Handover','Leave usable software, documentation and clear ownership.']]],
 '/privacy':['Clear choices about your information',[['01','Enquiries','Details you choose to send help us review your request.'],['02','Preferences','Welcome notices and optional analytics have separate controls.'],['03','Questions','Contact the team about information you have submitted.']]],
 '/jobs':['Show how you approach the work',[['01','Portfolio','Choose a relevant example and explain your contribution.'],['02','Thinking','Describe a decision, a constraint and what you learned.'],['03','Fit','Tell us the work and collaboration arrangement you want.']]]
};
function context(route){if(contexts[route])return contexts[route];if(route.startsWith('/insights/'))return contexts['/insights'];if(route.startsWith('/industries'))return ['Built around the working day',[['01','The request','Capture the information the team needs to act.'],['02','The handover','Keep records, responsibilities and exceptions together.'],['03','The review','Check the result against the way your business operates.']]];if(route.startsWith('/work')||route==='/portfolio')return ['Explore the process behind the screen',[['01','Context','Each example starts with a recognisable working problem.'],['02','Decisions','Follow the records, roles and review points.'],['03','Scope','Illustrative workflows use sample records, not client claims.']]];if(route==='/demo')return ['Explore without connecting an account',[['01','Try','Switch views and inspect the sample records.'],['02','Follow','Run a local example from enquiry to review.'],['03','Review','The example stops before any message is sent.']]];return ['From a clear brief to everyday use',[['01','Understand','Trace the task, the records and the people involved.'],['02','Connect','Build the agreed workflow around a defined scope.'],['03','Review','Test real exceptions and leave a usable handover.']]];}
export function enhanceHero(body,route){const {document:d}=parseHTML('<!doctype html><html><body>'+body+'</body></html>');const hero=d.querySelector('.page-intro')||d.querySelector('.article-page>header');const service=d.querySelector('.service-hero');
 if(hero){const [title,steps]=context(route);hero.classList.add('premium-hero');const kicker=d.createElement('div');kicker.className='hero-eyebrow';kicker.innerHTML='<img src="/brand/symbol.png" alt="" width="24" height="24"><span>Thoughtful systems. Practical delivery.</span>';hero.prepend(kicker);const rail=d.createElement('aside');rail.className='hero-context';rail.setAttribute('aria-label','Page context');rail.innerHTML=`<div class="hero-context-head"><span class="hero-context-dot" aria-hidden="true"></span><span>The collective / working perspective</span></div><h2>${esc(title)}</h2><ol>${steps.map(([n,h,p])=>`<li><span>${n}</span><div><strong>${esc(h)}</strong><p>${esc(p)}</p></div></li>`).join('')}</ol><a href="${route.startsWith('/insights')?'/expertise':'/demo'}">${route.startsWith('/insights')?'Explore the related expertise':'Explore a sample workflow'}${arrow}</a>`;hero.append(rail);}
 if(service){service.classList.add('premium-service-hero');const first=service.querySelector('div');const method=d.createElement('div');method.className='hero-method';method.setAttribute('aria-label','Delivery approach');method.innerHTML='<span>Understand the work</span><i aria-hidden="true"></i><span>Build the connection</span><i aria-hidden="true"></i><span>Review the result</span>';first.append(method);}
 const stage=hero||service||d.querySelector('.corporate-hero');
 if(stage){
  stage.classList.add('cinematic-hero');
  const articleSlug=route.startsWith('/insights/')?route.split('/').pop():null;
  const primary=articleSlug?'blog-'+articleSlug:route.includes('studio')||route.includes('growth')||route==='/portfolio'?'studio':route.includes('industr')||route.includes('catalogue')||route.includes('/os')?'operations':route.includes('academy')||route.includes('talent')?'global':'hero';
  const layers=d.createElement('div');layers.className='hero-cinema';layers.setAttribute('aria-hidden','true');
  layers.innerHTML=`<img src="/images/${primary}.webp" srcset="/images/${primary}-768.webp 768w, /images/${primary}.webp 1536w" sizes="100vw" alt="" width="1536" height="1024" fetchpriority="high"><img src="/images/${primary==='global'?'studio':'global'}.webp" alt="" width="1536" height="1024" decoding="async">`;
  stage.prepend(layers);
  if(service){service.querySelector('.service-photo')?.remove();}
 }
 if(route==='/company')d.querySelector('.wide-photo')?.remove();
 const [heading,steps]=context(route);
 const reading=route.startsWith('/insights');
 const details=reading?[
 'Write down one recent example from your own work. Note who was involved, which information they needed and where the task stopped. This gives the advice in this guide a useful point of comparison.',
 'Try the approach on a small sample before changing a whole process. Keep the original record available, include an awkward exception and ask the person doing the work to explain what still feels unclear.',
 'Compare the result with the starting point. Record what improved, what needs more work and who will own the next change. A useful improvement should be understandable to the team that relies on it.'
 ]:route==='/contact'||route==='/get-started'?[
 'Choose a recent task that took longer than it should. A short description of the request, the people involved and the missing information is more useful than a long list of software features.',
 'Share the result you need and any fixed deadline. If another team, supplier or existing system is involved, mention it early so the brief reflects those dependencies.',
 'We can then discuss the relevant service and the questions that remain. Keep account passwords and private customer records out of your initial enquiry; access arrangements belong in an agreed scope.'
 ]:route==='/privacy'?[
 'Use only the fields needed for your enquiry. Check that the reply address is correct and leave out customer files, credentials and sensitive records that are not needed to explain the request.',
 'Use the analytics control in the footer to review your preference. Welcome notices and update reminders use browser storage so a dismissed message does not keep interrupting your visit.',
 'If you have a question about information you submitted, contact the team with enough context to identify the enquiry. Do not include passwords or additional sensitive documents in the request.'
 ]:[
 'Start with a real example of the work. Follow the request from arrival to completion, including the records people use and the points where somebody has to make a decision. Agree which part of that journey this brief will cover.',
 'Make the proposed change visible before extending it. Review a sample screen, workflow or deliverable with the people who will use it. Confirm the responsibilities, dependencies and exceptions while changes are still straightforward.',
 'Agree how the result will be checked and who will maintain it. Use a normal case and an exception during review, keep the handover notes with the work and identify the next improvement from actual use.'
 ];
 const topic=[...TOPICS,...MODULES].find(t=>t.url===route);
 const division=services.find(t=>route==='/services/'+t.slug);
 if(topic){details[0]='Prepare a small working sample: '+topic.prepare;details[1]='Use the first review to decide which of these belongs in the initial release: '+topic.deliverables.join('; ')+'. Put the remaining items into a later scope rather than leaving them implied.';details[2]='Before accepting the handover, work through this check with the responsible reviewer: '+topic.acceptance;}
 if(division){details[0]='Bring a recent example related to '+division.name+'. '+division.summary+' Identify the person who can explain the current process and confirm the intended result.';details[1]='Review the proposed handover together: '+division.deliverables.join('; ')+'. Agree what is included in the first delivery and which dependencies need checking.';details[2]='Ask the people using '+division.name+' to try a normal task and an exception. Keep their review notes with the agreed brief, then confirm training, ownership and any support arrangements.';}
 const section=d.createElement('section');section.className='section wrap next-steps';section.innerHTML=`<div class="section-heading"><h2>${reading?'Put this guide to work.':route==='/privacy'?'Managing your choices.':'A practical next step.'}</h2><p>${reading?'A short way to turn reading into a useful decision.':'Move from an initial question to a clear, reviewable piece of work.'}</p></div><ol>${steps.map(([n,h],i)=>`<li><span>${n}</span><h3>${esc(h)}</h3><p>${esc(details[i])}</p></li>`).join('')}</ol>`;
 const closing=d.querySelector('.cta-section');if(closing)closing.before(section);else d.body.append(section);
 return d.body.innerHTML;
}
