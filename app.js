const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
document.documentElement.classList.add('js');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = reduceMotion.matches;
try { motionPaused = localStorage.getItem('pravah-motion') === 'paused' || reduceMotion.matches; } catch {}
const motionButton = $('#motion-toggle');
function updateMotion() {
  document.body.classList.toggle('motion-paused', motionPaused);
  motionButton.setAttribute('aria-pressed', String(motionPaused));
  motionButton.innerHTML = motionPaused ? 'Resume motion <span>▷</span>' : 'Pause motion <span>Ⅱ</span>';
  document.dispatchEvent(new CustomEvent('pravah:motion', {detail: motionPaused}));
}
updateMotion();
motionButton.addEventListener('click', () => { motionPaused = !motionPaused; updateMotion(); try {localStorage.setItem('pravah-motion', motionPaused ? 'paused' : 'active');} catch {} });
reduceMotion.addEventListener('change', event => { motionPaused = event.matches; updateMotion(); });
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) {entry.target.classList.add('visible'); revealObserver.unobserve(entry.target);} });
}, {threshold:.08, rootMargin:'0px 0px -30px 0px'});
$$('.reveal').forEach((element) => revealObserver.observe(element));
const header = $('.header'), progress = $('.scroll-progress');
let scrollScheduled = false;
function onScroll() {
  header.classList.toggle('fixed', window.scrollY > 160);
  const extent = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${extent > 0 ? window.scrollY / extent : 0})`;
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {if(!scrollScheduled){requestAnimationFrame(onScroll);scrollScheduled=true;}},{passive:true});
onScroll();
const menu = $('#navigation'), menuToggle = $('.menu-toggle');
function setMenu(open) {
  menu.hidden = !open;
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.querySelector('span').textContent = open ? 'Close' : 'Menu';
  if(open) menu.querySelector('a').focus(); else menuToggle.focus({preventScroll:true});
}
menuToggle.addEventListener('click', () => setMenu(menu.hidden));
$$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if(menu.hidden) return;
  if(event.key === 'Escape') {event.preventDefault();setMenu(false);}
  if(event.key === 'Tab') {
    const items = [menuToggle, ...$$('a', menu)], current = items.indexOf(document.activeElement);
    if(event.shiftKey && current === 0){event.preventDefault();items.at(-1).focus();}
    if(!event.shiftKey && current === items.length-1){event.preventDefault();menuToggle.focus();}
  }
});
$('#back-top').addEventListener('click', () => window.scrollTo({top:0, behavior:motionPaused?'instant':'smooth'}));
if(matchMedia('(hover:hover) and (pointer:fine)').matches) {
  $$('.magnetic').forEach(button => {
    button.addEventListener('pointermove', event => {
      if(motionPaused) return;
      const rect=button.getBoundingClientRect();
      button.style.transform=`translate(${(event.clientX-rect.left-rect.width/2)*.11}px,${(event.clientY-rect.top-rect.height/2)*.18}px)`;
    });
    button.addEventListener('pointerleave', () => button.style.transform='');
  });
}
const solutions = {
  presence: 'Build a clear, responsive website with an obvious next step. Digital Presence connects a stronger first impression to a better customer journey.',
  creative: 'Give content a purpose and a recognisable voice. Creative connects your brand story to campaigns that invite the right conversations.',
  innovation: 'Connect the tools around one clear workflow. Innovation reduces repetitive handoffs and helps keep every enquiry in view.',
  growth: 'Meet customers at the moment they search. Growth brings local visibility, relevant content, and focused campaigns into the same plan.',
  conversion: 'Make the next step effortless. Conversion simplifies landing pages, enquiry forms, and the path from interest to a conversation.'
};
$$('.problem-card').forEach(button => button.addEventListener('click', () => {
  $$('.problem-card').forEach(card=>card.classList.toggle('selected', card===button));
  const diagnostic = $('#diagnostic'); diagnostic.hidden=false;
  $('p', diagnostic).textContent=solutions[button.dataset.solution];
  $('a', diagnostic).href=`#${button.dataset.solution}`;
}));
const services = $$('.service');
services.forEach(service => service.addEventListener('toggle', () => {
  if(service.open) services.forEach(other=>{if(other!==service)other.open=false;});
}));
function openHashService() {
  const id=decodeURIComponent(location.hash.slice(1));
  const service=services.find(s=>s.id===id);
  if(service) { service.open=true;service.classList.add('visible'); }
}
window.addEventListener('hashchange', openHashService);openHashService();
const steps = [
  {kicker:'UNDERSTAND THE REAL CHALLENGE',title:'Good work starts<br>with good questions.',text:'We look closely at your business, your customers, and the journey between discovery and a decision. Before making anything, we make sense of it.',outcome:'A CLEAR SHARED UNDERSTANDING ↗'},
  {kicker:'FIND THE RIGHT FIRST MOVE',title:'Focus creates<br>forward motion.',text:'We identify the most useful place to start, weigh the opportunities, and build a practical roadmap. Your time and attention go where they can make a difference.',outcome:'A FOCUSED, PRACTICAL ROADMAP ↗'},
  {kicker:'BRING THE PLAN TO LIFE',title:'Considered design.<br>Purposeful technology.',text:'We design and develop your digital experience with care. From the first screen to the last handoff, every detail works toward a clear customer action.',outcome:'ONE CONNECTED DIGITAL EXPERIENCE ↗'},
  {kicker:'LEARN, IMPROVE, REPEAT',title:'Better is<br>a continuous process.',text:'We look at how people actually use the experience, identify friction, and make thoughtful improvements. The system evolves as we learn what works.',outcome:'USEFUL INSIGHT. CONTINUED PROGRESS. ↗'}
];
const stepButtons = $$('[data-step]');
function selectStep(index) {
  stepButtons.forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});
  const panel=$('#process-panel'), step=steps[index]; panel.setAttribute('aria-labelledby',`step-${index}`);
  $('.process-visual',panel).dataset.stage=String(index);$('.process-visual b',panel).textContent=`0${index+1}`;
  $('.process-kicker',panel).textContent=step.kicker;$('h3',panel).innerHTML=step.title;$(':scope > p',panel).textContent=step.text;
  $('.process-deliverable span',panel).textContent=step.outcome;
}
stepButtons.forEach((button,index)=>button.addEventListener('click',()=>selectStep(index)));
function wireTabKeys(buttons, select) {
  buttons.forEach((button,index)=>button.addEventListener('keydown',event=>{
    let next;
    if(['ArrowRight','ArrowDown'].includes(event.key))next=(index+1)%buttons.length;
    if(['ArrowLeft','ArrowUp'].includes(event.key))next=(index+buttons.length-1)%buttons.length;
    if(event.key==='Home')next=0;if(event.key==='End')next=buttons.length-1;
    if(next===undefined)return;event.preventDefault();select(next);buttons[next].focus();
  }));
}
wireTabKeys(stepButtons,selectStep);
const techButtons=$$('[data-tab]');
function selectTech(index) {
  techButtons.forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1;$(`#panel-${button.dataset.tab}`).hidden=i!==index;});
  document.dispatchEvent(new CustomEvent('pravah:resize'));
}
techButtons.forEach((button,index)=>button.addEventListener('click',()=>selectTech(index)));wireTabKeys(techButtons,selectTech);
const integer = new Intl.NumberFormat('en-IN',{maximumFractionDigits:0});
const currency = number => `₹${integer.format(number)}`;
function calculate() {
  const visitors=Number($('#visitors').value), current=Number($('#current-rate').value), target=Number($('#target-rate').value), value=Number($('#customer-value').value);
  $('#visitors-value').textContent=integer.format(visitors);$('#current-value').textContent=`${current}%`;$('#target-value').textContent=`${target}%`;$('#customer-value-label').textContent=currency(value);
  const baseline=Math.round(visitors*current/100),projected=Math.round(visitors*target/100),lift=(projected-baseline)*value;
  $('#baseline').textContent=integer.format(baseline);$('#projected').textContent=integer.format(projected);
  $('#value-lift').textContent=`${lift>=0?'+':'−'}${currency(Math.abs(lift))}`;
  const max=Math.max(1,baseline,projected);$('#baseline-bar').style.width=`${baseline/max*100}%`;$('#target-bar').style.width=`${projected/max*100}%`;
}
['visitors','current-rate','target-rate','customer-value'].forEach(id=>$(`#${id}`).addEventListener('input',calculate));calculate();
let workflowRun = 0;
$('#run-workflow').addEventListener('click', async () => {
  const button=$('#run-workflow'), run=++workflowRun, nodes=$$('.workflow-node');
  button.disabled=true;button.innerHTML='Running demo <span>↝</span>';
  nodes.forEach(node=>{node.classList.remove('complete');$('b',node).textContent='○';});
  for(let i=0;i<nodes.length;i++){
    if(!motionPaused)await new Promise(resolve=>setTimeout(resolve,650));
    if(run!==workflowRun)return;
    nodes[i].classList.add('complete');$('b',nodes[i]).textContent='✓';
    $('.workflow-status').textContent=`0${i+1} / ${$('h4',nodes[i]).textContent.toUpperCase()}`;
  }
  $('.workflow-status').textContent='WORKFLOW COMPLETE. ONE CONNECTED JOURNEY.';
  button.disabled=false;button.innerHTML='Run it again <span>↗</span>';
});
const projectData=[
  {category:'01 / SPECIALTY CAFÉ — CONCEPT',title:'A local favourite.<br>A digital destination.',description:'An inviting digital experience that brings the warmth of a neighbourhood café to the first customer touchpoint.',challenge:'Help people discover the café, explore the menu on their phone, and plan a visit without a complicated journey.',features:['A fast, mobile-friendly digital menu','A simple reservation journey','A consistent visual identity','Clear directions and local discovery'],interest:'Digital Presence'},
  {category:'02 / FINE JEWELLERY — CONCEPT',title:'Let the details<br>do the talking.',description:'An experience that makes product discovery feel personal, considered, and close to the craft.',challenge:'Give a high-consideration purchase the depth it deserves, and make it easy to move from exploration to a private conversation.',features:['Interactive 3D product exploration','A choice of materials and finishes','A guided consultation enquiry','A refined, editorial brand experience'],interest:'Interactive'},
  {category:'03 / LOCAL RETAIL — CONCEPT',title:'From their screen<br>to your store.',description:'A considered discovery experience that connects digital interest with a useful next step in the real world.',challenge:'Help local customers find relevant products, understand availability, and connect with the shop.',features:['A clear product discovery experience','A straightforward store pickup enquiry','Local search visibility','A frictionless path to store directions'],interest:'Growth'}
];
let activeProject=0;
const projectModal=$('#project-modal'),briefModal=$('#brief-modal');
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  activeProject=Number(button.dataset.project);const project=projectData[activeProject];
  $('#project-category').textContent=project.category;$('#project-title').innerHTML=project.title;$('#project-description').textContent=project.description;
  $('#project-challenge').textContent=project.challenge;$('#project-features').replaceChildren(...project.features.map(feature=>{const li=document.createElement('li');li.textContent=feature;return li;}));
  projectModal.showModal();
}));
function openBrief(interest='₹500 Digital Audit') {
  if(projectModal.open)projectModal.close();
  $('#brief-form').hidden=false;$('#brief-ready').hidden=true;$('#brief-interest').value=interest;$('#copy-status').textContent='';briefModal.showModal();
}
$$('[data-brief]').forEach(button=>button.addEventListener('click',()=>openBrief(button.dataset.brief)));
$('#project-brief').addEventListener('click',()=>openBrief(projectData[activeProject].interest));
$$('.modal').forEach(modal=>{
  $('.modal-close',modal).addEventListener('click',()=>modal.close());
  modal.addEventListener('click',event=>{if(event.target!==modal)return;const rect=modal.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)modal.close();});
});
$('#brief-form').addEventListener('submit',event=>{
  event.preventDefault();const business=$('#business').value.trim(), challenge=$('#challenge').value.trim();
  if(!business||!challenge){$('#business').focus();return;}
  $('#brief-message').value=`Hi Manan! I'm reaching out about ${business}.\n\nI'm interested in ${$('#brief-interest').value}.\n\nOur digital challenge: ${challenge}\n\nCould we talk about the best place to start?`;
  $('#brief-form').hidden=true;$('#brief-ready').hidden=false;$('#copy-brief').focus();
});
$('#copy-brief').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText($('#brief-message').value);$('#copy-status').textContent='Copied. You can paste this into your Instagram message.';}
  catch{$('#brief-message').focus();$('#brief-message').select();$('#copy-status').textContent='Select and copy the message above, then paste it into Instagram.';}
});
$('#edit-brief').addEventListener('click',()=>{$('#brief-form').hidden=false;$('#brief-ready').hidden=true;$('#business').focus();});
import('./scenes.js').then(module=>module.initScenes({paused:()=>motionPaused})).catch(()=>{
  $$('.drag-hint,.product-drag').forEach(hint=>hint.textContent='OBJECT STUDY / PRAVAH');
});
