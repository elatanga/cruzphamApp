# CruzPham Agency Auth Framework

## AI Creator Ranking
- **Deterministic Scoring**: Uses a versioned (`1.0.0`) weighted algorithm to ensure transparency and auditability.
- **Explainability**: Every score includes a `reasons` array explaining the logic.
- **Security**: Scoring data is protected by RBAC; managers can only view scores for their assigned creators.

## Safety Notes
- No PII is used in the scoring algorithm.
- Scoring logic is deterministic; AI-generated insights are clearly labeled and cached.
