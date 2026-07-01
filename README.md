# Solo Agent OS DevOps Fixture

This is a minimal repository for P2/P3 real-flow smoke tests.

- `ci.yml` runs on push, pull request, and manual dispatch.
- `deploy.yml` runs on manual `workflow_dispatch` and emits a `deploy_url` output.
- `npm start` exposes `/health` for deployment health checks.
