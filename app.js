(() => {
'use strict';
const $=id=>document.getElementById(id);
const checkbox=$('checkbox'),checkArea=$('captcha-check'),challenge=$('challenge'),tilesBox=$('tiles'),status=$('status'),result=$('result'),verifyButton=$('verify'),refreshButton=$('refresh');
const challenges=[
 {name:'traffic lights',title:'Select all tiles with traffic lights',icon:'🚦',items:['🚦','🚗','🚥','🚌','🚦','🚲','🚕','🚦','🚧'],correct:[0,2,7]},
 {name:'bicycles',title:'Select all tiles with bicycles',icon:'🚲',items:['🚗','🚲','🚌','🚲','🚕','🚦','🛵','🚲','🚧'],correct:[1,3,7]},
 {name:'buses',title:'Select all tiles with buses',icon:'🚌',items:['🚐','🚕','🚌','🚗','🚌','🚙','🚲','🚍','🚦'],correct:[2,4,7]},
 {name:'crosswalks',title:'Select all tiles with pedestrians',icon:'🚶',items:['🚶','🚗','🚶‍♀️','🚦','🚶','🚕','🚲','🚶‍♂️','🚌'],correct:[0,2,4,7]}
];
let current=null,selected=new Set(),verified=false,challengeCount=0;
function setStatus(text,type=''){status.textContent=text;status.className='status '+type}
function openChallenge(){if(verified)return;result.textContent='';result.className='result';challenge.classList.remove('hidden');newChallenge();challenge.scrollIntoView({behavior:'smooth',block:'nearest'})}
function newChallenge(){current=challenges[Math.floor(Math.random()*challenges.length)];selected.clear();verifyButton.disabled=false;$('challenge-title').textContent=current.title;$('challenge-instruction').textContent='Choose every tile that matches the object.';$('prompt').innerHTML='Select all squares with <strong>'+current.name+'</strong>.';setStatus('');tilesBox.replaceChildren();current.items.forEach((symbol,i)=>{const b=document.createElement('button');b.type='button';b.className='tile';b.setAttribute('aria-label','Tile '+(i+1));b.setAttribute('aria-pressed','false');const art=document.createElement('span');art.className='tile-art';art.textContent=symbol;b.appendChild(art);b.addEventListener('click',()=>{if(verified)return;if(selected.has(i))selected.delete(i);else selected.add(i);b.classList.toggle('selected',selected.has(i));b.setAttribute('aria-pressed',String(selected.has(i)));setStatus('')});tilesBox.appendChild(b)})}
function verify(){if(!current||verified)return;const correct=new Set(current.correct);const ok=selected.size===correct.size&&[...selected].every(i=>correct.has(i));if(!ok){setStatus('That was not quite right. Try selecting the matching tiles again.','error');return}verified=true;checkbox.classList.add('checked');checkbox.textContent='✓';checkArea.setAttribute('aria-label','Verification complete');challenge.classList.add('hidden');result.textContent='Verification complete — demo challenge passed.';result.className='result success';checkArea.setAttribute('aria-disabled','true');challengeCount++;checkArea.querySelector('.check-label').textContent='Verified';}
function reset(){verified=false;current=null;selected.clear();checkbox.classList.remove('checked');checkbox.textContent='';checkArea.setAttribute('aria-label',"I'm not a robot. Open verification challenge.");checkArea.removeAttribute('aria-disabled');checkArea.querySelector('.check-label').textContent="I'm not a robot";challenge.classList.add('hidden');result.textContent='';result.className='result';newChallenge()}
checkArea.addEventListener('click',openChallenge);checkArea.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openChallenge()}});
verifyButton.addEventListener('click',verify);refreshButton.addEventListener('click',newChallenge);
checkArea.addEventListener('dblclick',reset);
newChallenge();
})();