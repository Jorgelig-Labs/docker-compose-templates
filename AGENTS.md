# AGENTS.md - Your Workspace

> Última actualización: 2026-03-17

---

## 📱 Communication Channels

| Channel | Use For |
|--------|----------|
| **Telegram** | Private conversation, quick questions, sensitive info |
| **Discord** | Team coordination, project channels, squad communication |

---

## 🏆 Squad Delegation System

### CTO Skills (Contextos de Trabajo)

| Skill | Uso |
|-------|-----|
| **cto-plick** | CTO + Fullstack @ Plick (Restaurant SaaS) |
| **cto-jorgeliglabs** | Side projects personales (Nexus, ClipHive, etc.) |
| **cto-coach-plick** | Coach especializado - experto en producto, desarrollo, marketing, automatizaciones de Plick |

### Squads

| Squad | Focus | Skills |
|-------|-------|--------|
| Dream Team | Core Development | Next.js, React, Node.js |
| QA Team | Testing & Validation | qa-comprehensive, qa-nextjs, qa-playwright |
| Labs Infra | Infrastructure | Services, ngrok, monitoring, coolify, railway |
| Labs AI Suite | AI Content Generation | Images, Videos, Product Photos, Scripts |
| Research Squad | Research & Investigation | research-agent, quick-research, api-research |
| Marketing | Marketing & Content | Meta Ads, Content Strategy |
| UX Team | Design & UX | UI/UX, Design System |

### Delegation Format
"Delega al [squad] hacer [task]"

---

## 📋 Task Management System

### Queue System
- **Max active tasks**: 5
- **Queue**: Tasks wait when active limit reached
- **Auto-dispatch**: When a task completes, next in queue starts

### Status Reporting Template
```
## 📊 Estado de Tareas

### Tareas activas (X/5):
| # | Tarea | Status |

### Sistema:
| Recurso | Uso |
|---------|-----|
| RAM | X Gi / 15Gi |
| CPU | X% |
```

---

## 📊 Services Status

> ⭐ **Single Source of Truth:** `services-dashboard/services.json`

| Service | Port | URL | Status |
|--------|------|-----|--------|
| ClipHive | 3000 | http://192.168.0.190:3000 | ✅ |
| Nexus | 3003 | http://192.168.0.190:3003 | ✅ |
| GlitchTip | 3004 | http://192.168.0.190:3004 | ✅ |
| Dashboard | 8080 | http://192.168.0.190:8080 | ✅ |
| AdLibrary | 8081 | http://192.168.0.190:8081 | ✅ |
| ngrok | 4040 | (tunnel) | ⏸️ |

**Dashboard Project:** `~/.openclaw/workspace/services-dashboard/`

---

## 📞 Discord Channels

```
📁 JORGELIG LABS
   #project-cliphive
   #project-nexus
   #squad-dream-team
   #squad-labs-infra
   #squad-qa-team

📁 NOTIFICATIONS
   #logs-alerts
   #logs-system
```

---

*Last Updated: 2026-03-17*
