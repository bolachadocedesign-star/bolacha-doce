# 📋 CHECKLIST DE MELHORIAS - BOLACHA DOCE

## 📊 RESUMO EXECUTIVO

Este documento contém um checklist detalhado das melhorias prioritárias para o site da Bolacha Doce, baseado na análise técnica completa do projeto. As implementações estão organizadas por prioridade e incluem estimativas de tempo e impacto no negócio.

---

## 🎯 PRIORIDADE ALTA

### 1. 📧 INTEGRAÇÃO REAL DE EMAIL

**Status:** ❌ Não implementado  
**Tempo estimado:** 4-6 horas  
**Impacto:** 🔥 CRÍTICO - Conversão de leads

#### Checklist de Implementação:

**Opção A: EmailJS (Recomendado para início)**
- [ ] 1.1. Criar conta no EmailJS (https://emailjs.com)
- [ ] 1.2. Configurar serviço de email (Gmail, Outlook, etc.)
- [ ] 1.3. Criar template de email personalizado
- [ ] 1.4. Instalar dependência: `npm install @emailjs/browser`
- [ ] 1.5. Configurar variáveis de ambiente:
  ```env
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
  ```
- [ ] 1.6. Criar hook personalizado `useEmailJS.ts`:
  ```typescript
  // src/hooks/useEmailJS.ts
  import emailjs from '@emailjs/browser';
  
  export const useEmailJS = () => {
    const sendEmail = async (formData: FormData) => {
      // Implementação do envio
    };
    
    return { sendEmail };
  };
  ```
- [ ] 1.7. Atualizar componente `ContatoClient.tsx`:
  - [ ] 1.7.1. Integrar hook useEmailJS
  - [ ] 1.7.2. Adicionar loading state durante envio
  - [ ] 1.7.3. Implementar tratamento de erros
  - [ ] 1.7.4. Adicionar confirmação visual de sucesso
- [ ] 1.8. Testar envio de email em desenvolvimento
- [ ] 1.9. Testar envio de email em produção
- [ ] 1.10. Configurar notificações de email recebido

**Opção B: API Própria (Para implementação futura)**
- [ ] 1.11. Criar API route `/api/send-email.ts`
- [ ] 1.12. Configurar Nodemailer
- [ ] 1.13. Implementar validação de dados
- [ ] 1.14. Adicionar rate limiting
- [ ] 1.15. Configurar logs de envio

#### Critérios de Sucesso:
- [ ] ✅ Formulário envia emails reais
- [ ] ✅ Confirmação visual de envio
- [ ] ✅ Tratamento de erros funcionando
- [ ] ✅ Emails chegam formatados corretamente
- [ ] ✅ Performance mantida (< 3s para envio)

---

### 2. 📊 ANALYTICS E TRACKING AVANÇADO

**Status:** ❌ Parcialmente implementado  
**Tempo estimado:** 6-8 horas  
**Impacto:** 🔥 ALTO - Dados para otimização

#### Checklist de Implementação:

**Google Tag Manager - Eventos Customizados**
- [ ] 2.1. Configurar GTM com ID real (substituir GTM-XXXXXXX)
- [ ] 2.2. Criar eventos de conversão:
  - [ ] 2.2.1. `form_submit_contact` - Envio do formulário
  - [ ] 2.2.2. `whatsapp_click` - Clique no botão WhatsApp
  - [ ] 2.2.3. `portfolio_view` - Visualização do portfólio
  - [ ] 2.2.4. `convite_detail_view` - Visualização de convite específico
  - [ ] 2.2.5. `gallery_interaction` - Interação com galeria
- [ ] 2.3. Implementar tracking de scroll:
  - [ ] 2.3.1. 25% da página
  - [ ] 2.3.2. 50% da página
  - [ ] 2.3.3. 75% da página
  - [ ] 2.3.4. 100% da página
- [ ] 2.4. Adicionar tracking de tempo na página:
  - [ ] 2.4.1. 30 segundos
  - [ ] 2.4.2. 1 minuto
  - [ ] 2.4.3. 2 minutos
  - [ ] 2.4.4. 5 minutos
- [ ] 2.5. Implementar Enhanced Ecommerce (se aplicável):
  - [ ] 2.5.1. Visualização de produto (convite)
  - [ ] 2.5.2. Adicionar ao carrinho (orçamento)
  - [ ] 2.5.3. Iniciar checkout (contato)
- [ ] 2.6. Configurar Google Analytics 4:
  - [ ] 2.6.1. Criar propriedade GA4
  - [ ] 2.6.2. Configurar goals de conversão
  - [ ] 2.6.3. Implementar Enhanced Measurement
- [ ] 2.7. Adicionar Facebook Pixel (opcional):
  - [ ] 2.7.1. Configurar pixel base
  - [ ] 2.7.2. Implementar eventos de conversão
- [ ] 2.8. Criar dashboard de métricas:
  - [ ] 2.8.1. Conversões por fonte
  - [ ] 2.8.2. Tempo médio na página
  - [ ] 2.8.3. Taxa de rejeição
  - [ ] 2.8.4. Páginas mais visitadas

#### Critérios de Sucesso:
- [ ] ✅ Todos os eventos sendo disparados
- [ ] ✅ Dados aparecendo no GA4
- [ ] ✅ Goals de conversão configurados
- [ ] ✅ Dashboard funcionando
- [ ] ✅ Sem impacto na performance

---

## ⚡ PRIORIDADE MÉDIA

### 3. 🚀 OTIMIZAÇÃO DE PERFORMANCE

**Status:** ❌ Não otimizado  
**Tempo estimado:** 8-10 horas  
**Impacto:** 🔥 ALTO - SEO e UX

#### Checklist de Implementação:

**Core Web Vitals**
- [ ] 3.1. Medir métricas atuais:
  - [ ] 3.1.1. LCP (Largest Contentful Paint) - Meta: < 2.5s
  - [ ] 3.1.2. FID (First Input Delay) - Meta: < 100ms
  - [ ] 3.1.3. CLS (Cumulative Layout Shift) - Meta: < 0.1
- [ ] 3.2. Otimizar imagens:
  - [ ] 3.2.1. Converter todas para WebP/AVIF
  - [ ] 3.2.2. Implementar lazy loading avançado
  - [ ] 3.2.3. Adicionar blur placeholder
  - [ ] 3.2.4. Otimizar tamanhos (responsive images)
- [ ] 3.3. Otimizar fontes:
  - [ ] 3.3.1. Preload de fontes críticas
  - [ ] 3.3.2. Implementar font-display: swap
  - [ ] 3.3.3. Subset de caracteres necessários
- [ ] 3.4. Otimizar JavaScript:
  - [ ] 3.4.1. Code splitting por rota
  - [ ] 3.4.2. Lazy loading de componentes
  - [ ] 3.4.3. Tree shaking otimizado
  - [ ] 3.4.4. Bundle analyzer
- [ ] 3.5. Otimizar CSS:
  - [ ] 3.5.1. Purge CSS não utilizado
  - [ ] 3.5.2. Critical CSS inline
  - [ ] 3.5.3. Minificação otimizada
- [ ] 3.6. Implementar caching:
  - [ ] 3.6.1. Service Worker para cache
  - [ ] 3.6.2. Cache headers otimizados
  - [ ] 3.6.3. CDN para assets estáticos
- [ ] 3.7. Otimizar carregamento:
  - [ ] 3.7.1. Preload de recursos críticos
  - [ ] 3.7.2. Prefetch de páginas prováveis
  - [ ] 3.7.3. Skeleton loading para componentes
- [ ] 3.8. Configurar monitoring:
  - [ ] 3.8.1. Web Vitals monitoring
  - [ ] 3.8.2. Performance budgets
  - [ ] 3.8.3. Alertas de degradação

#### Critérios de Sucesso:
- [ ] ✅ LCP < 2.5s
- [ ] ✅ FID < 100ms
- [ ] ✅ CLS < 0.1
- [ ] ✅ Lighthouse Score > 90
- [ ] ✅ Bundle size reduzido em 30%

---

### 4. 📝 BLOG DINÂMICO

**Status:** ❌ Estrutura mockada  
**Tempo estimado:** 12-15 horas  
**Impacto:** 🔥 MÉDIO - SEO e autoridade

#### Checklist de Implementação:

**Opção A: Markdown + MDX (Recomendado)**
- [ ] 4.1. Instalar dependências:
  ```bash
  npm install @next/mdx @mdx-js/loader @mdx-js/react
  npm install gray-matter reading-time
  ```
- [ ] 4.2. Configurar MDX no `next.config.ts`:
  ```typescript
  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  ```
- [ ] 4.3. Criar estrutura de pastas:
  ```
  src/
  ├── content/
  │   ├── blog/
  │   │   ├── 2024/
  │   │   │   ├── 01/
  │   │   │   │   ├── artigo-1.mdx
  │   │   │   │   └── artigo-2.mdx
  │   │   └── index.json
  │   └── authors/
  │       └── julia.json
  ```
- [ ] 4.4. Criar utilitários de blog:
  - [ ] 4.4.1. `src/utils/blogUtils.ts` - Funções de leitura
  - [ ] 4.4.2. `src/types/blogTypes.ts` - Tipos TypeScript
  - [ ] 4.4.3. `src/components/BlogCard.tsx` - Card de artigo
  - [ ] 4.4.4. `src/components/BlogLayout.tsx` - Layout de artigo
- [ ] 4.5. Implementar páginas dinâmicas:
  - [ ] 4.5.1. `src/app/blog/[slug]/page.tsx`
  - [ ] 4.5.2. `src/app/blog/categoria/[categoria]/page.tsx`
  - [ ] 4.5.3. `src/app/blog/autor/[autor]/page.tsx`
- [ ] 4.6. Criar sistema de categorias:
  - [ ] 4.6.1. Filtros por categoria
  - [ ] 4.6.2. Páginas de categoria
  - [ ] 4.6.3. Navegação breadcrumb
- [ ] 4.7. Implementar busca:
  - [ ] 4.7.1. Busca por título
  - [ ] 4.7.2. Busca por conteúdo
  - [ ] 4.7.3. Filtros combinados
- [ ] 4.8. Adicionar funcionalidades:
  - [ ] 4.8.1. Tempo de leitura
  - [ ] 4.8.2. Compartilhamento social
  - [ ] 4.8.3. Artigos relacionados
  - [ ] 4.8.4. Comentários (opcional)
- [ ] 4.9. SEO para blog:
  - [ ] 4.9.1. Meta tags dinâmicas
  - [ ] 4.9.2. Schema.org BlogPosting
  - [ ] 4.9.3. Sitemap de artigos
  - [ ] 4.9.4. RSS feed
- [ ] 4.10. Criar conteúdo inicial:
  - [ ] 4.10.1. 10 artigos sobre convites
  - [ ] 4.10.2. Guias de tendências
  - [ ] 4.10.3. Cases de sucesso
  - [ ] 4.10.4. Dicas de papelaria

#### Critérios de Sucesso:
- [ ] ✅ Blog funcionando com MDX
- [ ] ✅ Sistema de categorias ativo
- [ ] ✅ Busca funcionando
- [ ] ✅ SEO otimizado
- [ ] ✅ 10+ artigos publicados

---

## 📱 PRIORIDADE BAIXA

### 5. 🔧 PWA COMPLETO

**Status:** ❌ Manifest apenas  
**Tempo estimado:** 6-8 horas  
**Impacto:** 🔥 BAIXO - UX mobile

#### Checklist de Implementação:

**Service Worker**
- [ ] 5.1. Instalar dependências:
  ```bash
  npm install workbox-webpack-plugin
  npm install next-pwa
  ```
- [ ] 5.2. Configurar PWA no `next.config.ts`:
  ```typescript
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });
  ```
- [ ] 5.3. Criar Service Worker customizado:
  - [ ] 5.3.1. `public/sw.js` - Service Worker principal
  - [ ] 5.3.2. Estratégias de cache
  - [ ] 5.3.3. Cache de imagens
  - [ ] 5.3.4. Cache de API calls
- [ ] 5.4. Implementar funcionalidades offline:
  - [ ] 5.4.1. Página offline customizada
  - [ ] 5.4.2. Cache de páginas críticas
  - [ ] 5.4.3. Sincronização em background
- [ ] 5.5. Adicionar notificações push (opcional):
  - [ ] 5.5.1. Configurar VAPID keys
  - [ ] 5.5.2. Implementar subscription
  - [ ] 5.5.3. Envio de notificações
- [ ] 5.6. Melhorar manifest:
  - [ ] 5.6.1. Ícones em múltiplos tamanhos
  - [ ] 5.6.2. Screenshots para app stores
  - [ ] 5.6.3. Cores de tema otimizadas
- [ ] 5.7. Testar PWA:
  - [ ] 5.7.1. Lighthouse PWA audit
  - [ ] 5.7.2. Teste de instalação
  - [ ] 5.7.3. Teste offline
  - [ ] 5.7.4. Teste em diferentes dispositivos

#### Critérios de Sucesso:
- [ ] ✅ PWA score > 90
- [ ] ✅ Instalável em mobile
- [ ] ✅ Funciona offline
- [ ] ✅ Cache otimizado

---

### 6. 🎯 MELHORIAS NO FORMULÁRIO

**Status:** ❌ Validações básicas  
**Tempo estimado:** 4-6 horas  
**Impacto:** 🔥 BAIXO - UX

#### Checklist de Implementação:

**Validações Avançadas**
- [ ] 6.1. Melhorar validação de email:
  - [ ] 6.1.1. Regex mais robusta
  - [ ] 6.1.2. Verificação de domínio
  - [ ] 6.1.3. Validação em tempo real
- [ ] 6.2. Validação de telefone:
  - [ ] 6.2.1. Máscara brasileira
  - [ ] 6.2.2. Validação de DDD
  - [ ] 6.2.3. Formatação automática
- [ ] 6.3. Validação de nome:
  - [ ] 6.3.1. Mínimo de caracteres
  - [ ] 6.3.2. Apenas letras e espaços
  - [ ] 6.3.3. Capitalização automática
- [ ] 6.4. Melhorar UX:
  - [ ] 6.4.1. Indicadores de progresso
  - [ ] 6.4.2. Animações de validação
  - [ ] 6.4.3. Mensagens de erro claras
  - [ ] 6.4.4. Auto-save de rascunho
- [ ] 6.5. Adicionar campos opcionais:
  - [ ] 6.5.1. Tipo de evento
  - [ ] 6.5.2. Data do evento
  - [ ] 6.5.3. Quantidade de convites
  - [ ] 6.5.4. Orçamento estimado
- [ ] 6.6. Implementar anti-spam:
  - [ ] 6.6.1. reCAPTCHA v3
  - [ ] 6.6.2. Rate limiting
  - [ ] 6.6.3. Honeypot field
- [ ] 6.7. Melhorar acessibilidade:
  - [ ] 6.7.1. Labels associados
  - [ ] 6.7.2. ARIA attributes
  - [ ] 6.7.3. Navegação por teclado
  - [ ] 6.7.4. Screen reader support

#### Critérios de Sucesso:
- [ ] ✅ Validações robustas
- [ ] ✅ UX melhorada
- [ ] ✅ Acessibilidade completa
- [ ] ✅ Anti-spam funcionando

---

## 📈 MÉTRICAS DE SUCESSO

### KPIs Principais:
- [ ] **Conversão de leads:** +50% (formulário funcionando)
- [ ] **Tempo na página:** +30% (performance otimizada)
- [ ] **Taxa de rejeição:** -25% (UX melhorada)
- [ ] **Core Web Vitals:** Todos verdes
- [ ] **Lighthouse Score:** >90 em todas as categorias

### Métricas Técnicas:
- [ ] **Bundle size:** -30%
- [ ] **Load time:** <2s
- [ ] **SEO Score:** >95
- [ ] **Accessibility Score:** >95
- [ ] **PWA Score:** >90

---

## 🗓️ CRONOGRAMA SUGERIDO

### Semana 1-2: Prioridade Alta
- [ ] Integração de Email (4-6h)
- [ ] Analytics e Tracking (6-8h)

### Semana 3-4: Prioridade Média
- [ ] Otimização de Performance (8-10h)
- [ ] Blog Dinâmico - Fase 1 (6-8h)

### Semana 5-6: Prioridade Média
- [ ] Blog Dinâmico - Fase 2 (6-7h)
- [ ] PWA Completo (6-8h)

### Semana 7: Prioridade Baixa
- [ ] Melhorias no Formulário (4-6h)
- [ ] Testes e Ajustes (4-6h)

**Total estimado:** 40-50 horas de desenvolvimento

---

## 🛠️ FERRAMENTAS RECOMENDADAS

### Desenvolvimento:
- **EmailJS** - Integração de email
- **Google Analytics 4** - Analytics
- **Lighthouse** - Performance
- **MDX** - Blog dinâmico
- **Workbox** - PWA
- **reCAPTCHA** - Anti-spam

### Monitoramento:
- **Google Search Console** - SEO
- **Google PageSpeed Insights** - Performance
- **GTM Preview** - Analytics
- **Web Vitals Extension** - Core Web Vitals

---

## 📝 NOTAS IMPORTANTES

1. **Backup:** Sempre fazer backup antes de implementações
2. **Testes:** Testar em ambiente de desenvolvimento primeiro
3. **Deploy:** Implementar em horários de baixo tráfego
4. **Monitoramento:** Acompanhar métricas após cada implementação
5. **Documentação:** Atualizar documentação técnica

---

**Documento criado em:** $(date)  
**Versão:** 1.0  
**Próxima revisão:** Após implementação das prioridades altas
