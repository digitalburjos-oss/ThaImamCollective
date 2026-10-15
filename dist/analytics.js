(() => {
 const key='collective-analytics-consent';let config=null,loaded=false,consent='';
 try{consent=localStorage.getItem(key)||''}catch{}
 const setConsent=value=>{consent=value;try{localStorage.setItem(key,value)}catch{}};
 function enable(){if(loaded||consent!=='accepted'||!config?.enabled||!/^G-[A-Z0-9]+$/.test(config.measurementId))return;loaded=true;
 window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
 window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.gtag('js',new Date());window.gtag('config',config.measurementId,{send_page_view:false});
 window.gtag('event','page_view',{page_location:location.origin+location.pathname,page_title:document.title});
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(config.measurementId);document.head.append(script);
 }
 const panel=document.querySelector('#analytics-preferences');
 const open=()=>{panel.hidden=false;panel.querySelector('button').focus()};
 document.querySelectorAll('[data-analytics-settings]').forEach(b=>b.addEventListener('click',open));
 document.querySelector('[data-analytics-accept]').addEventListener('click',()=>{setConsent('accepted');panel.hidden=true;if(config?.measurementId)window['ga-disable-'+config.measurementId]=false;if(loaded&&window.gtag)window.gtag('consent','update',{analytics_storage:'granted'});else enable()});
 document.querySelector('[data-analytics-reject]').addEventListener('click',()=>{setConsent('rejected');panel.hidden=true;if(window.gtag)window.gtag('consent','update',{analytics_storage:'denied'});if(config?.measurementId)window['ga-disable-'+config.measurementId]=true;});
 fetch('/analytics-config.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(c=>{config=c;if(c?.enabled&&/^G-[A-Z0-9]+$/.test(c.measurementId)){if(!consent)open();else enable()}else{document.querySelector('[data-analytics-status]').textContent='Optional analytics is currently disabled. Your choice will apply if it is enabled later.'}}).catch(()=>{});
 document.addEventListener('click',e=>{if(!loaded||consent!=='accepted')return;const a=e.target.closest('a[href]');if(!a)return;const href=a.getAttribute('href');if(href?.startsWith('/contact')||href?.startsWith('/get-started'))window.gtag('event','project_enquiry_click',{link_path:href.split('?')[0]});});
})();
