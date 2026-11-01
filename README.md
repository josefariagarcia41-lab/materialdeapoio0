# KIXIONLINE

Plataforma de organização de poupança colectiva (Kixikila), com interface inicial em React + Vite.

## Executar localmente

1. Instale Node.js LTS.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Abra o endereço local indicado pelo Vite.

## Estado actual

Esta entrega é uma **base inicial de demonstração**. A interface apresenta os planos de 100 Kz, 500 Kz e 2.500 Kz por dia e navegação entre áreas. Os botões de autenticação e adesão ainda não estão ligados a um backend. Não recebe, guarda nem confirma pagamentos reais.

## Próxima integração

- Criar um projecto Supabase e configurar variáveis de ambiente apenas no servidor/ambiente seguro.
- Aplicar `supabase/schema.sql` e rever as políticas RLS antes de produção.
- Implementar autenticação, perfis, adesão a grupos, envio privado de comprovativos e revisão administrativa no servidor.
- Criar políticas de Storage privadas e políticas administrativas verificadas no backend.
- Implementar calendário de pagamentos, regras de incumprimento, cancelamentos, reembolsos, disputas e registo de auditoria.
- Testar concorrência, permissões e prevenção de confirmações duplicadas.

## Segurança e conformidade

A KIXIONLINE é apresentada como organização de poupança colectiva, não como investimento, e não promete rendimentos. Não processe nem mantenha fundos reais até verificar os requisitos legais, regulamentares e de pagamentos aplicáveis em Angola, incluindo eventuais exigências do BNA. O esquema SQL é um ponto de partida e requer revisão de segurança antes de uso real.
