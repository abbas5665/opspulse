# 🚀 OpsPulse — Automated CI/CD & Docker Deployment

**OpsPulse** is a containerized Node.js REST API demonstrating a practical DevOps workflow using automated testing, Docker, GitHub Actions, and Docker Hub.

The project automates application testing, builds a Docker image, and publishes versioned images to Docker Hub when changes are pushed to the `main` branch.

## 🎯 Project Objectives

- Build and test a Node.js API.
- Package the application into a Docker image.
- Automate testing and image publishing with GitHub Actions.
- Store container images in Docker Hub.
- Run and verify the published image locally.
- Practice secure credential management using GitHub Actions Secrets.

## 🏗️ Architecture

```text
Developer pushes code
         |
         v
   GitHub Repository
         |
         v
   GitHub Actions CI/CD
         |
         +---- Install dependencies
         |
         +---- Run automated tests
         |
         +---- Build Docker image
         |
         +---- Authenticate securely
         |
         v
      Docker Hub
         |
         v
   Ubuntu / Docker Host
         |
         v
      OpsPulse API
       Port 3000
```

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| Node.js Test Runner | Automated tests |
| Docker | Application containerization |
| Docker Buildx | Container image building and publishing |
| GitHub Actions | CI/CD automation |
| Docker Hub | Container image registry |
| Ubuntu | Development and container runtime environment |
| Git & GitHub | Version control and source code hosting |

## ✨ Features

- `GET /` — Returns application information and service status.
- `GET /health` — Returns a health status and timestamp.
- Automated test execution on pushes and pull requests targeting `main`.
- Docker image build and publishing on pushes to `main`.
- Two image tags: `latest` and a commit-specific SHA tag.
- GitHub Secrets for Docker Hub credentials.
- Production-oriented container image using `node:22-alpine`.

## 📦 Run with Docker

Pull the published image:

```bash
docker pull abbas5665/opspulse:latest
```

Start the container:

```bash
docker run -d \
  --name opspulse-published \
  -p 3000:3000 \
  abbas5665/opspulse:latest
```

Open the API in your browser:

- API: http://localhost:3000/
- Health endpoint: http://localhost:3000/health

Or test with curl:

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

## 🧪 Run Tests Locally

Clone the repository:

```bash
git clone git@github.com:abbas5665/opspulse.git
cd opspulse
```

Install dependencies and run tests:

```bash
npm ci
npm test
```

Start the application:

```bash
npm start
```

The API listens on port `3000` by default.

## 🔄 CI/CD Workflow

The GitHub Actions workflow in `.github/workflows/ci.yml` performs the following steps:

1. Checks out the source code.
2. Sets up Node.js.
3. Installs dependencies.
4. Runs automated tests.
5. Configures Docker Buildx.
6. Authenticates to Docker Hub using repository secrets.
7. Builds and publishes the image on pushes to `main`.

The workflow uses these repository secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

**Never store access tokens directly in source code or commit them to Git.**

## 🐳 Docker Image

Docker Hub repository: https://hub.docker.com/r/abbas5665/opspulse

Pull the latest image:

```bash
docker pull abbas5665/opspulse:latest
```

The workflow also publishes an image tagged with the Git commit SHA, helping identify the specific source revision used to build it.

## 📁 Project Structure

```text
opspulse/
├── .github/
│   └── workflows/
│       └── ci.yml
├── test/
│   └── app.test.js
├── .dockerignore
├── Dockerfile
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔐 Security & Reliability

- Uses GitHub Actions Secrets for registry credentials.
- Excludes sensitive environment files from the Docker build context.
- Installs production dependencies in the container.
- Provides a health endpoint for basic service verification.
- Runs automated tests before publishing images.

This is a learning and portfolio project, not a claim of production-grade security or high availability.

## 🗺️ Future Improvements

- Deploy the application to Kubernetes.
- Add Kubernetes Deployments, Services, and readiness/liveness probes.
- Add code quality and security scanning.
- Implement monitoring and centralized logging.
- Add image vulnerability scanning.
- Introduce infrastructure as code with Terraform.
- Deploy to a cloud environment.

## 👨‍💻 Author

**Abbas Kazmi**

Aspiring DevOps Engineer | Linux | Docker | CI/CD | AWS | Kubernetes

GitHub: https://github.com/abbas5665

---

*Built to develop practical DevOps skills through hands-on engineering and continuous improvement.*
