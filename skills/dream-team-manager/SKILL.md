# Dream Team Manager

Manage AI agent development teams using swarm sessions for parallel execution.

## When to Use

- Use **Dream Team** for core development only
- Use **Specialized Squads** for non-development tasks to avoid distracting Dream Team
- Never execute tasks yourself - always delegate
- Run tasks in parallel when possible

---

## 🎯 SQUAD PRINCIPAL

### Dream Team (Desarrollo Core)
**Enfoque:** Desarrollo principal de productos - NO hace otras tareas

> **⚠️ MODELO:** Usar Opus (Claude de Anthropic) como primary. MiniMax 2.7 como fallback.

**🎯 ROL PRINCIPAL: Tech Lead / Dev Lead**
- Orquestar desarrollo de features complejas
- Validar fixes que fallan reiterativamente
- Investigar y resolver problemas técnicos difíciles
- Asegurar calidad y consistencia del código

| Rol | Especialidad | Skills que Usa | Tareas |
|-----|-------------|----------------|--------|
| **Tech Lead** | Arquitectura, fixes complejos, debugging | coding-agent, github, prd-maker | Orquestar, validar, resolver |
| **Lead Dev** | Core, APIs, Prisma, Next.js | coding-agent, github, prd-maker | Desarrollo, DB |
| **AI Engineer** | AI/ML, Gemini, prompts | gemini, ai-video-generation | Integraciones AI |
| **QA Engineer** | Testing, validación | playwright, testing | Pruebas E2E |
| **DevOps** | Infra, Docker | docker, cloudflare | Servidores |

---

## 🚀 SQUADS ESPECIALIZADOS

### 1. QA Squad
**Cuándo usarlo:** Testing, validación, automatización

| Rol | Especialidad | Skills que Usa |
|-----|-------------|----------------|
| **QA Lead** | Test strategy | automation, testing |
| **Automation QA** | Selenium, Playwright | playwright, cypress |
| **Performance QA** | Load testing | k6, JMeter |
| **Security QA** | Penetration testing | security scanning |

**Delegar:**
```javascript
sessions_spawn({
  runtime: "subagent",
  task: "Ejecutar pruebas E2E con playwright - proyecto en /path"
})
```

---

### 2. Infra Squad
**Cuándo usarlo:** Deployment, Docker, Cloud, Server

| Rol | Especialidad | Skills que Usa |
|-----|-------------|----------------|
| **DevOps Lead** | Architecture | docker, kubernetes |
| **Cloud Engineer** | AWS/GCP/Azure | aws-cli, gcloud |
| **SRE** | Monitoring | prometheus, grafana |
| **Security Engineer** | Hardening | security, firewall |

**Delegar:**
```javascript
sessions_spawn({
  runtime: "subagent",
  task: "Configurar Docker y deploy - usar docker, cloudflare"
})
```

---

### 3. AI/ML Squad
**Cuándo usarlo:** AI models, prompts, data science

| Rol | Especialidad | Skills que Usa |
|-----|-------------|----------------|
| **ML Engineer** | Models, training | python, tensorflow |
| **Prompt Engineer** | LLM optimization | gemini, openai |
| **Data Scientist** | Analytics | pandas, numpy |

**Delegar:**
```javascript
sessions_spawn({
  runtime: "subagent",
  task: "Optimizar prompts para Gemini - usar gemini"
})
```

---

### 4. Design Squad
**Cuándo usarlo:** UX, UI, branding, motion

| Rol | Especialidad | Skills que Usa |
|-----|-------------|----------------|
| **UX Lead** | User experience | figma |
| **UI Designer** | Visual design | figma, adobe-xd |
| **Motion Designer** | Animations | motion-graphics |
| **Researcher** | User research | user-testing |

**Delegar:**
```javascript
sessions_spawn({
  runtime: "subagent",
  task: "Diseñar componente en Figma - usar figma"
})
```

---

### 5. Research & Strategy Squad
**Cuándo usarlo:** Tech research, market, product

| Rol | Especialidad | Skills que Usa |
|-----|-------------|----------------|
| **Tech Researcher** | New technologies | web-search, github |
| **Market Analyst** | Competitors | analytics |
| **Product Strategist** | Roadmap | prd-maker |

**Delegar:**
```javascript
sessions_spawn({
  runtime: "subagent",
  task: "Investigar tecnologías para proyecto X - usar web-search"
})
```

---

## 🎯 CÓMO DELEGAR

### Reglas:
1. **NO ejecutar** - siempre delegar
2. **Paralelo > Secuencial** - múltiples agents a la vez
3. **Squad correcto** - no usar Dream Team para otras tareas
4. **Skills específicos** - incluir en la tarea

### Ejemplos:

```javascript
// ❌ WRONG - Doing it yourself
exec("npm run build")

// ✅ RIGHT - Delegate to correct squad

// Desarrollo core → Dream Team (Opus primary, MiniMax fallback)
sessions_spawn({
  runtime: "subagent",
  label: "cliphive-feature",
  model: "opus",  // Primary model
  task: "Implementar nueva feature - usar coding-agent, github"
})

// Testing → QA Squad
sessions_spawn({
  runtime: "subagent",
  label: "qa-tests",
  task: "Ejecutar pruebas E2E - usar playwright"
})

// Deployment → Infra Squad
sessions_spawn({
  runtime: "subagent",
  label: "deploy-coolify",
  task: "Deploy a Coolify - usar docker, cloudflare"
})

// Design → Design Squad
sessions_spawn({
  runtime: "subagent",
  label: "ui-redesign",
  task: "Rediseñar UI en Figma - usar figma"
})
```

---

## 📋 CURRENT PROJECTS

| Proyecto | Puerto | URL |
|----------|--------|-----|
| ClipHive | 3001 | http://192.168.0.190:3001 |
| Nexus | 3000 | http://192.168.0.190:3000 |

---

## 🧠 KEY PRINCIPLES

1. **Always delegate** - Never execute tasks yourself
2. **Use correct squad** - Dream Team = core development only
3. **Parallel > Sequential** - Multiple agents > one after another
4. **Include skills in task** - Specify which tools to use
5. **Don't ask "what's next?"** - Execute from plan
