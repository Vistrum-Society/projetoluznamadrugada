/* ══════════════════════════════════════════════════════════════════
   PROJETO LUZ NA MADRUGADA · Site institucional (esboço)
   Comportamento compartilhado. Cabeçalho e rodapé são injetados aqui
   para haver uma só fonte da verdade em todas as páginas.
   ══════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  var BASE = document.body.getAttribute('data-base') || '';
  var PAGINA = document.body.getAttribute('data-page') || '';
  function url(p){ return BASE + p; }

  var LOGO = url('assets/img/logo-luz-na-madrugada.png');

  var LINKS = [
    { id:'instituicao',   href:'instituicao.html',   rot:'A instituição' },
    { id:'acolhimento',   href:'acolhimento.html',   rot:'O acolhimento' },
    { id:'frentes',       href:'frentes.html',       rot:'Frentes' },
    { id:'transparencia', href:'transparencia.html', rot:'Transparência' },
    { id:'parceiros',     href:'parceiros.html',     rot:'Parceiros' },
    { id:'contato',       href:'contato.html',       rot:'Contato' }
  ];

  /* ── SVG icones reutilizados ── */
  var ICO = {
    wpp:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    ig:'<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    yt:'<path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.2 12a29 29 0 0 0 .3 5.6 2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .3-5.6 29 29 0 0 0-.3-5.6z"/><path d="M10 15.5l5-3.5-5-3.5z"/>',
    mapa:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'
  };

  var WPP = 'https://wa.me/5551997899453';
  var WPP_AJUDA = WPP + '?text=' + encodeURIComponent('Olá, vim pelo site do Projeto Luz na Madrugada. Preciso de ajuda e gostaria de saber sobre vaga de acolhimento.');

  /* ════════════════ CABEÇALHO ════════════════ */
  function montarNav(){
    var alvo = document.querySelector('[data-site-nav]');
    if(!alvo) return;
    var itens = LINKS.map(function(l){
      var ativo = l.id === PAGINA ? ' class="ativo"' : '';
      return '<li><a href="'+url(l.href)+'"'+ativo+'>'+l.rot+'</a></li>';
    }).join('');

    alvo.className = 'nav';
    alvo.innerHTML =
      '<div class="nav-inner">'+
        '<a class="nav-marca" href="'+url('index.html')+'" aria-label="Início · Projeto Luz na Madrugada">'+
          '<img src="'+LOGO+'" alt="">'+
          '<span class="nm"><b>Luz na Madrugada</b><small>Reinserção Social</small></span>'+
        '</a>'+
        '<button class="nav-burger" aria-label="Abrir menu" aria-expanded="false">'+
          '<svg viewBox="0 0 24 24" class="i-abrir"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'+
          '<svg viewBox="0 0 24 24" class="i-fechar" style="display:none"><path d="M6 6l12 12M18 6L6 18"/></svg>'+
        '</button>'+
        '<ul class="nav-links">'+itens+'</ul>'+
        '<a class="nav-cta" href="'+url('doar.html')+'">Doar agora</a>'+
      '</div>';

    var burger = alvo.querySelector('.nav-burger');
    burger.addEventListener('click', function(){
      var aberto = alvo.classList.toggle('menu-aberto');
      burger.setAttribute('aria-expanded', aberto ? 'true':'false');
      alvo.querySelector('.i-abrir').style.display = aberto ? 'none':'block';
      alvo.querySelector('.i-fechar').style.display = aberto ? 'block':'none';
    });

    // solidificar ao rolar
    function checarScroll(){
      if(window.scrollY > 24) alvo.classList.add('solida');
      else alvo.classList.remove('solida');
    }
    // páginas sem hero escuro começam sólidas
    if(document.body.hasAttribute('data-nav-solida')) alvo.classList.add('solida');
    window.addEventListener('scroll', checarScroll, {passive:true});
    checarScroll();
  }

  /* ════════════════ RODAPÉ ════════════════ */
  function montarRodape(){
    var alvo = document.querySelector('[data-site-footer]');
    if(!alvo) return;
    var navFooter = LINKS.map(function(l){
      return '<li><a href="'+url(l.href)+'">'+l.rot+'</a></li>';
    }).join('');

    alvo.className = 'rodape';
    alvo.innerHTML =
      '<div class="ceu"></div>'+
      '<div class="container rodape-conteudo">'+
        '<p class="rodape-versiculo">Se o mal cresce tanto, por que o bem não pode crescer?</p>'+
        '<div class="rodape-grid">'+
          '<div class="rodape-col">'+
            '<div class="marca-bloco"><img src="'+LOGO+'" alt=""><span><b>Luz na Madrugada</b><small>Reinserção Social</small></span></div>'+
            '<p>Comunidade terapêutica masculina de acolhimento, recuperação e reinserção social de pessoas em situação de dependência química.</p>'+
            '<p style="margin-top:12px">R. João Quaresma da Silva, 251 — Encosta do Sol<br>Estância Velha / RS — CEP 93.600-010<br>CNPJ 18.320.148/0001-79</p>'+
          '</div>'+
          '<div class="rodape-col">'+
            '<h4>Navegar</h4>'+
            '<ul class="rodape-links">'+navFooter+'<li><a href="'+url('doar.html')+'">Doar</a></li></ul>'+
          '</div>'+
          '<div class="rodape-col">'+
            '<h4>Contato</h4>'+
            '<ul class="rodape-links">'+
              '<li><a href="'+WPP+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">'+ICO.wpp+'</svg>51 99789-9453</a></li>'+
              '<li><a href="mailto:luznamadrugada@gmail.com"><svg viewBox="0 0 24 24">'+ICO.mail+'</svg>luznamadrugada@gmail.com</a></li>'+
              '<li><a href="https://www.instagram.com/projetoluznamadrugada/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">'+ICO.ig+'</svg>@projetoluznamadrugada</a></li>'+
              '<li><a href="https://www.youtube.com/@projetoluznamadrugada" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">'+ICO.yt+'</svg>YouTube</a></li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="container rodape-fim">'+
        '<small>© 2013—2026 Projeto Luz na Madrugada · Associação privada sem fins lucrativos</small>'+
        '<span class="assinatura">Aqui, a vida acontece, floresce e dá frutos</span>'+
      '</div>';
  }

  /* ════════════════ CÉU: ESTRELAS QUE VIRAM BRASAS ════════════════ */
  function estrelas(canvas){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ctx = canvas.getContext('2d');
    var pontos = [];
    function medir(){ var r = canvas.parentElement.getBoundingClientRect(); canvas.width = r.width; canvas.height = r.height; }
    medir();
    window.addEventListener('resize', medir);
    var total = window.innerWidth < 560 ? 26 : 46;
    function Ponto(){ this.reset(true); }
    Ponto.prototype.reset = function(inicio){
      this.x = Math.random()*canvas.width;
      this.y = inicio ? Math.random()*canvas.height : canvas.height + Math.random()*60;
      this.r = Math.random()*1.4 + 0.4;
      this.vy = -(Math.random()*0.28 + 0.08);
      this.vx = (Math.random()-0.5)*0.1;
      this.op = Math.random()*0.4 + 0.14;
      this.fase = Math.random()*Math.PI*2;
    };
    Ponto.prototype.passo = function(){ this.y += this.vy; this.x += this.vx; this.fase += 0.02; if(this.y < -20) this.reset(false); };
    Ponto.prototype.pinta = function(dawn){
      var cint = 0.7 + Math.sin(this.fase)*0.3;
      var r = Math.round(159 + (245-159)*dawn);
      var g = Math.round(212 + (166-212)*dawn);
      var b = Math.round(245 + (75-245)*dawn);
      var a = this.op*cint;
      ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba('+r+','+g+','+b+','+a+')'; ctx.fill();
      ctx.beginPath(); ctx.arc(this.x,this.y,this.r*3.4,0,Math.PI*2);
      var grad = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r*3.4);
      grad.addColorStop(0,'rgba('+r+','+g+','+b+','+(a*0.24)+')');
      grad.addColorStop(1,'rgba('+r+','+g+','+b+',0)');
      ctx.fillStyle = grad; ctx.fill();
    };
    for(var i=0;i<total;i++) pontos.push(new Ponto());
    function laco(){
      var dawn = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dawn')) || 0;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(var i=0;i<pontos.length;i++){ pontos[i].passo(); pontos[i].pinta(dawn); }
      requestAnimationFrame(laco);
    }
    laco();
  }

  /* ════════════════ SCROLL -> PRIMEIRA LUZ ════════════════ */
  function scrollDawn(){
    var root = document.documentElement, alvo = 0, atual = 0, rodando = false;
    function medir(){
      var max = document.body.scrollHeight - window.innerHeight;
      alvo = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if(!rodando){ rodando = true; requestAnimationFrame(animar); }
    }
    function animar(){
      atual += (alvo - atual)*0.09;
      root.style.setProperty('--dawn', atual.toFixed(4));
      if(Math.abs(alvo-atual) > 0.001) requestAnimationFrame(animar); else rodando = false;
    }
    window.addEventListener('scroll', medir, {passive:true});
    window.addEventListener('resize', medir);
    medir();
  }

  /* ════════════════ ACCORDIONS ════════════════ */
  function accordions(){
    document.querySelectorAll('.acc').forEach(function(acc){
      var cab = acc.querySelector('.acc-cab');
      if(!cab) return;
      cab.setAttribute('aria-expanded','false');
      cab.addEventListener('click', function(){
        var aberto = acc.classList.contains('aberto');
        var grupo = acc.closest('[data-acc-grupo]');
        if(grupo){
          grupo.querySelectorAll('.acc.aberto').forEach(function(o){
            o.classList.remove('aberto'); o.querySelector('.acc-cab').setAttribute('aria-expanded','false');
          });
        }
        if(!aberto){ acc.classList.add('aberto'); cab.setAttribute('aria-expanded','true'); }
        else{ acc.classList.remove('aberto'); cab.setAttribute('aria-expanded','false'); }
      });
    });
  }

  /* ════════════════ COPIAR PIX ════════════════ */
  function copiarPix(){
    document.querySelectorAll('[data-copiar]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var alvo = document.querySelector(btn.getAttribute('data-copiar'));
        if(!alvo) return;
        var valor = (alvo.textContent||'').trim();
        var ok = function(){
          btn.classList.add('ok');
          var span = btn.querySelector('span'); var antes = span ? span.textContent : '';
          if(span) span.textContent = 'Copiado';
          setTimeout(function(){ btn.classList.remove('ok'); if(span) span.textContent = antes; }, 2200);
        };
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(valor).then(ok).catch(function(){ fallback(valor); ok(); });
        } else { fallback(valor); ok(); }
      });
    });
    function fallback(v){
      var t = document.createElement('textarea'); t.value = v; document.body.appendChild(t);
      t.select(); try{ document.execCommand('copy'); }catch(e){} document.body.removeChild(t);
    }
  }

  /* ════════════════ REVELAR AO ROLAR ════════════════ */
  function revelar(){
    var alvos = document.querySelectorAll('.revelar');
    if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      alvos.forEach(function(a){ a.classList.add('visivel'); }); return;
    }
    var io = new IntersectionObserver(function(entradas){
      entradas.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visivel'); io.unobserve(e.target); } });
    }, { threshold:0.01, rootMargin:'0px 0px -6% 0px' });
    alvos.forEach(function(a){ io.observe(a); });
  }

  /* ════════════════ ARTE DE HERO ════════════════ */
  function arteHero(){
    document.querySelectorAll('.hero').forEach(function(hero){
      if(hero.querySelector('.hero-arte')) return;
      var d = document.createElement('div');
      d.className = 'hero-arte'; d.setAttribute('aria-hidden','true');
      d.innerHTML = '<img src="'+url('assets/img/art/cena-madrugada.svg')+'" alt="">';
      var canvas = hero.querySelector('canvas.estrelas');
      if(canvas) canvas.insertAdjacentElement('afterend', d);
      else hero.insertAdjacentElement('afterbegin', d);
    });
    // paralaxe suave seguindo o ponteiro (só em telas largas, sem reduced-motion)
    if(window.matchMedia('(min-width:941px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      window.addEventListener('pointermove', function(e){
        var nx = (e.clientX / window.innerWidth - .5);
        var ny = (e.clientY / window.innerHeight - .5);
        document.querySelectorAll('.hero-arte').forEach(function(a){
          a.style.transform = 'translateY(-48%) translate('+(nx*16).toFixed(1)+'px,'+(ny*12).toFixed(1)+'px)';
        });
      }, {passive:true});
    }
  }

  /* ════════════════ SELO ILUSTRADO NAS HEADLINES ════════════════ */
  var GLIFOS = {
    acolher:'<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>',
    caminho:'<path d="M5 19h6a3 3 0 0 0 3-3V8a3 3 0 0 1 3-3h2"/><circle cx="4" cy="19" r="1.6"/><circle cx="20" cy="5" r="1.6"/>',
    casa:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    pessoas:'<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3.2"/><path d="M22 20v-2a4 4 0 0 0-3-3.8"/><path d="M16 4.2a3.2 3.2 0 0 1 0 6"/>',
    luz:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"/>',
    coracao:'<path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21.4l8.8-8.4a5.2 5.2 0 0 0 0-7.4z"/>',
    escudo:'<path d="M12 3l7 3v5c0 4.4-3 8-7 9-4-1-7-4.6-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    estrela:'<path d="M12 3l2.5 5.2 5.5.8-4 4 1 5.6L12 21l-5-2.8 1-5.6-4-4 5.5-.8z"/>',
    balao:'<path d="M21 11.5a8.4 8.4 0 0 1-11.5 7.8L3 21l1.7-6.4A8.4 8.4 0 1 1 21 11.5z"/>',
    broto:'<path d="M12 21v-8"/><path d="M12 13c0-3 2.2-5 5-5 0 3-2.2 5-5 5z"/><path d="M12 13c0-2.6-2-4.4-4.4-4.4C7.6 11 9.6 13 12 13z"/>',
    bussola:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'
  };
  function motivoPara(txt){
    txt = (txt||'').toLowerCase();
    var m = [
      ['acolh',  'acolher'], ['ajuda','acolher'],
      ['etapa','caminho'], ['caminho','caminho'], ['como funciona','caminho'], ['dia na casa','caminho'],
      ['históri','casa'], ['a casa','casa'], ['a sede','casa'], ['estrutura','casa'],
      ['parceir','pessoas'], ['caminha com','pessoas'], ['lideran','pessoas'], ['quem','pessoas'],
      ['doa','coracao'], ['apadrinh','coracao'], ['espécie','coracao'], ['manter','coracao'],
      ['transparên','escudo'], ['identifica','escudo'], ['registro','escudo'], ['certifica','escudo'], ['contas','escudo'],
      ['número','estrela'], ['n025','estrela'],
      ['contato','balao'], ['canais','balao'], ['fale','balao'], ['pergunta','balao'],
      ['frente','broto'], ['trabalho','broto'], ['sustento','broto'], ['rotina','broto'], ['convivên','broto'], ['capacita','broto'],
      ['fé','luz'], ['fundamento','luz'], ['guia','bussola'], ['missão','bussola'], ['nos move','luz'], ['conceito','luz'],
      ['atalho','pessoas']
    ];
    for(var i=0;i<m.length;i++){ if(txt.indexOf(m[i][0])>=0) return m[i][1]; }
    return 'luz';
  }
  function seloHeadlines(){
    // um selo ilustrado antes de cada rótulo de seção (toda headline)
    document.querySelectorAll('.rotulo').forEach(function(rot){
      var pai = rot.parentElement;
      if(!pai || pai.previousElementSibling && pai.previousElementSibling.classList && pai.previousElementSibling.classList.contains('selo-headline')) return;
      if(rot.previousElementSibling && rot.previousElementSibling.classList.contains('selo-headline')) return;
      var tit = pai.querySelector('.secao-titulo');
      var chave = motivoPara(rot.textContent + ' ' + (tit?tit.textContent:''));
      var selo = document.createElement('div');
      selo.className = 'selo-headline'; selo.setAttribute('aria-hidden','true');
      selo.innerHTML = '<svg viewBox="0 0 24 24">'+(GLIFOS[chave]||GLIFOS.luz)+'</svg>';
      rot.insertAdjacentElement('beforebegin', selo);
    });
  }

  /* ════════════════ INICIAR ════════════════ */
  function iniciar(){
    montarNav();
    montarRodape();
    arteHero();
    seloHeadlines();
    document.querySelectorAll('canvas.estrelas').forEach(estrelas);
    scrollDawn();
    accordions();
    copiarPix();
    revelar();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
