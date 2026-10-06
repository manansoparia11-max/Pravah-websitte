import * as THREE from './assets/three.module.js';

export function initScenes({paused}) {
  const scenes=[];
  function makeScene(canvasId,kind) {
    const canvas=document.getElementById(canvasId),host=canvas.parentElement;
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);
    renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.5;
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(kind==='hero'?35:36,1,.1,30);
    camera.position.set(0,0,kind==='hero'?6.5:5.8);
    scene.add(new THREE.HemisphereLight(kind==='hero'?0xffffff:0xd8c4ff,kind==='hero'?0xaaa0b6:0x292234,3));
    const key=new THREE.DirectionalLight(0xffffff,5);key.position.set(-3,4,4);scene.add(key);
    const fill=new THREE.DirectionalLight(kind==='hero'?0xceafff:0xeedac5,3);fill.position.set(4,-1,2);scene.add(fill);
    const rim=new THREE.DirectionalLight(0xffffff,4);rim.position.set(1,2,-3);scene.add(rim);
    const group=new THREE.Group();scene.add(group);
    let material,stone;
    if(kind==='hero') {
      material=new THREE.MeshPhysicalMaterial({color:0x8854d2,roughness:.26,metalness:.4,clearcoat:.7,clearcoatRoughness:.22});
      const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(1.06,.32,192,36,2,3),material);
      knot.rotation.set(.15,-.15,-.48);group.add(knot);
      const fineMaterial=new THREE.MeshStandardMaterial({color:0xc3ace2,metalness:.65,roughness:.3});
      const orb=new THREE.Mesh(new THREE.SphereGeometry(.055,16,12),fineMaterial);orb.position.set(1.82,-.75,.15);group.add(orb);
      group.scale.setScalar(.95);
    } else {
      material=new THREE.MeshPhysicalMaterial({color:0xb492df,roughness:.18,metalness:.8,clearcoat:1});
      const band=new THREE.Mesh(new THREE.TorusGeometry(.99,.115,24,100),material);group.add(band);
      const seat=new THREE.Mesh(new THREE.CylinderGeometry(.24,.16,.17,8),material);seat.position.y=1.035;group.add(seat);
      const stoneMaterial=new THREE.MeshPhysicalMaterial({color:0xd0b1f4,metalness:.2,roughness:.08,clearcoat:1});
      stone=new THREE.Mesh(new THREE.OctahedronGeometry(.34,0),stoneMaterial);stone.position.y=1.24;stone.rotation.set(0,Math.PI/4,Math.PI/4);stone.scale.y=.85;group.add(stone);
      for(let i=0;i<4;i++){
        const angle=i*Math.PI/2+Math.PI/4,prong=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.25,8),material);
        prong.position.set(Math.cos(angle)*.21,1.14,Math.sin(angle)*.21);prong.rotation.z=Math.cos(angle)*-.2;group.add(prong);
      }
      group.rotation.x=.28;group.rotation.y=Math.PI/6;
    }
    const record={renderer,scene,camera,group,host,kind,visible:false,dragging:false,targetX:group.rotation.x,targetY:group.rotation.y,lastInput:0,material,stone,baseX:group.rotation.x,baseY:group.rotation.y};
    scenes.push(record);
    const resize=()=>{const rect=host.getBoundingClientRect();if(!rect.width||!rect.height)return;renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.position.z=(kind==='hero'?6.5:5.8)/Math.min(camera.aspect,1);camera.updateProjectionMatrix();renderer.render(scene,camera);};
    new ResizeObserver(resize).observe(host);
    document.addEventListener('pravah:resize',()=>requestAnimationFrame(resize));resize();host.classList.add('scene-loaded');
    new IntersectionObserver(entries=>{record.visible=entries[0].isIntersecting;},{rootMargin:'100px'}).observe(host);
    let pointerX=0,pointerY=0;
    canvas.addEventListener('pointerdown',event=>{record.dragging=true;pointerX=event.clientX;pointerY=event.clientY;record.lastInput=performance.now();canvas.setPointerCapture(event.pointerId);});
    canvas.addEventListener('pointermove',event=>{
      if(!record.dragging)return;
      const dx=event.clientX-pointerX,dy=event.clientY-pointerY;
      record.targetY+=dx*.009;record.targetX=Math.max(-1,Math.min(1,record.targetX+dy*.007));record.lastInput=performance.now();pointerX=event.clientX;pointerY=event.clientY;
      if(kind==='product') {const degree=Math.round((record.targetY*180/Math.PI%360+360)%360);document.getElementById('rotation').value=degree;document.getElementById('rotation-value').textContent=`${degree}°`;}
    });
    const release=()=>{record.dragging=false;record.lastInput=performance.now();};canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('lostpointercapture',release);
    document.querySelector(`[data-reset="${kind}"]`).addEventListener('click',()=>{record.targetX=record.baseX;record.targetY=record.baseY;record.lastInput=performance.now();if(kind==='product'){document.getElementById('rotation').value='30';document.getElementById('rotation-value').textContent='30°';}});
    if(kind==='product') {
      document.getElementById('rotation').addEventListener('input',event=>{record.targetY=Number(event.target.value)*Math.PI/180;record.lastInput=performance.now();document.getElementById('rotation-value').textContent=`${event.target.value}°`;});
      const colors={violet:[0xb492df,0xd0b1f4],gold:[0xc99a4b,0xfff5d5],emerald:[0x4b9a81,0x8de1c2]};
      document.querySelectorAll('input[name="finish"]').forEach(input=>input.addEventListener('change',()=>{material.color.setHex(colors[input.value][0]);stone.material.color.setHex(colors[input.value][1]);record.lastInput=performance.now();}));
    }
  }
  try{makeScene('flow-canvas','hero');}catch{document.querySelector('.drag-hint').textContent='THE SHAPE OF FLOW / PRAVAH';}
  try{makeScene('product-canvas','product');}catch{document.querySelector('.product-drag').textContent='OBJECT STUDY / PRAVAH';document.getElementById('rotation').addEventListener('input',event=>{document.querySelector('.product-fallback').style.transform=`rotate(${event.target.value}deg)`;document.getElementById('rotation-value').textContent=`${event.target.value}°`;});document.querySelectorAll('input[name="finish"]').forEach(input=>input.addEventListener('change',()=>{document.querySelector('.product-fallback').style.borderColor={violet:'#b789e7',gold:'#d4ad69',emerald:'#62b49c'}[input.value];}));}
  let previous=0;
  function frame(time) {
    requestAnimationFrame(frame);
    if(time-previous<30)return;const delta=Math.min((time-previous)/1000,.08);previous=time;
    scenes.forEach(record=>{
      if(!record.visible||record.host.closest('[hidden]')||document.hidden)return;
      if(!paused()&&!record.dragging&&time-record.lastInput>2200&&record.kind==='hero'){record.targetY+=delta*.11;record.group.position.y=Math.sin(time*.0006)*.055;}
      const speed=paused()?1:.085;
      record.group.rotation.x+=(record.targetX-record.group.rotation.x)*speed;record.group.rotation.y+=(record.targetY-record.group.rotation.y)*speed;
      record.renderer.render(record.scene,record.camera);
    });
  }
  requestAnimationFrame(frame);
}
