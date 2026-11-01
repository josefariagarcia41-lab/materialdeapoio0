import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, CircleCheck, Leaf, Menu, ShieldCheck, Users, Wallet } from 'lucide-react';

export const Route = createFileRoute('/')({ component: HomePage });

const plans = [
  { amount: 100, name: 'Começar', description: 'Contribuição acessível' },
  { amount: 500, name: 'Equilíbrio', description: 'Para uma rotina constante' },
  { amount: 2500, name: 'Avançado', description: 'Maior contribuição diária' },
];
const money = (value: number) => `${new Intl.NumberFormat('pt-AO').format(value)} Kz`;

function HomePage() {
  const [selected, setSelected] = useState(500);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  return <div className="app-shell">
    <header className="site-header">
      <a className="brand" href="#inicio"><span className="brand-icon"><Leaf size={21}/></span><span>KIXI<span>ONLINE</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#inicio">Início</a><a href="#planos">Planos</a><a href="#como-funciona">Como funciona</a></nav>
      <button className="header-button" onClick={() => setNotice('A autenticação será activada na próxima etapa de integração.')}>Entrar <ArrowUpRight size={16}/></button>
      <button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}><Menu/></button>
    </header>
    <main id="inicio">
      <section className="hero container">
        <div className="hero-copy"><div className="eyebrow"><span/> POUPANÇA COLECTIVA, COM CONFIANÇA</div><h1>Juntos poupamos.<br/><em>Juntos avançamos.</em></h1><p>Organize as suas contribuições, acompanhe o seu grupo e tenha mais clareza em cada etapa da sua Kixikila.</p><div className="hero-actions"><a className="button-primary" href="#planos">Explorar planos <ArrowRight size={17}/></a><a className="button-secondary" href="#como-funciona">Saber mais</a></div><div className="trust-line"><ShieldCheck size={18}/> Transparência em cada contribuição</div></div>
        <div className="hero-visual"><div className="ring ring-one"/><div className="ring ring-two"/><div className="overview-card"><div className="card-heading"><span>VISÃO GERAL</span><span className="demo-label"><i/> DEMONSTRAÇÃO</span></div><div className="wallet-icon"><Wallet size={23}/></div><small>Plano de contribuição</small><h2>500 Kz <span>/ dia</span></h2><div className="progress-track"><span/></div><div className="card-foot"><span>Exemplo ilustrativo</span><b>Grupo de exemplo</b></div></div><div className="floating-label"><Users size={18}/><span><b>Comunidade</b><small>Uma meta em conjunto</small></span></div></div>
      </section>
      <section className="feature-strip container"><div><span className="feature-icon"><Users/></span><p><b>Grupos organizados</b><small>Participação com regras claras</small></p></div><div><span className="feature-icon"><CalendarDays/></span><p><b>Calendário transparente</b><small>Acompanhe datas e ordem de recebimento</small></p></div><div><span className="feature-icon"><ShieldCheck/></span><p><b>Confirmação manual</b><small>Comprovativos sujeitos a validação</small></p></div></section>
      <section className="plans-section container" id="planos"><div className="section-heading"><div><div className="eyebrow">ESCOLHA O SEU RITMO</div><h2>Planos de contribuição</h2><p>Selecione uma contribuição diária para conhecer as opções.</p></div><span className="currency-tag">Valores em Kz</span></div><div className="plans-grid">{plans.map(plan => <button key={plan.amount} className={selected === plan.amount ? 'plan-card selected' : 'plan-card'} onClick={() => setSelected(plan.amount)}><span className="plan-check">{selected === plan.amount ? <CircleCheck size={19}/> : <span/>}</span><small>{plan.name}</small><strong>{money(plan.amount)}</strong><span className="per-day">por dia</span><p>{plan.description}</p></button>)}</div><div className="selection-bar"><span><CheckCircle2 size={17}/> Seleccionado: <b>{money(selected)} por dia</b></span><button onClick={() => setNotice('A adesão ficará disponível quando os grupos e a validação administrativa estiverem configurados.')}>Continuar <ArrowUpRight size={16}/></button></div></section>
      <section className="how-section container" id="como-funciona"><div><div className="eyebrow">SIMPLES E ORGANIZADO</div><h2>Acompanhe cada etapa.</h2><p>Consulte o estado das contribuições e a agenda do grupo num só lugar.</p></div><div className="steps"><div><span>01</span><p><b>Escolha um plano</b><small>Defina o valor diário adequado.</small></p></div><div><span>02</span><p><b>Entre num grupo</b><small>Consulte as regras e o calendário.</small></p></div><div><span>03</span><p><b>Registe contribuições</b><small>Envie o comprovativo para validação.</small></p></div></div></section>
      <section className="notice container"><ShieldCheck size={22}/><p><b>Compromisso com a transparência</b><small>A KIXIONLINE é uma plataforma de organização de poupança colectiva. Não é um investimento e não promete rendimentos. Contribuições e pagamentos só serão considerados confirmados após validação.</small></p></section>
      {notice && <div className="toast" role="status"><span>{notice}</span><button onClick={() => setNotice('')}>Fechar</button></div>}
    </main>
    <footer className="site-footer"><a className="brand" href="#inicio"><span className="brand-icon"><Leaf size={18}/></span><span>KIXI<span>ONLINE</span></span></a><small>© 2026 KIXIONLINE. Poupança colectiva com clareza.</small><small>Versão inicial de demonstração</small></footer>
  </div>;
}
