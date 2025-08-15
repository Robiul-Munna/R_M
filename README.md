
# AI QA Tool for Healthcare Applications

## Features
- Natural Language Test Mode
- Coding Mode Editor (Playwright)
- Chatbot Assistant (Hugging Face API)
- Defect Logging (Jira integration ready)
- Test Case Management (TestRail integration ready)
- Demo Hospital Workflow Pages
- Sidebar Navigation
- Sample Data Seeding
- Reporting (charts, PDF export)

## Usage Instructions

### 1. Install & Run Locally
```sh
pnpm install
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Natural Language Test Mode
- Go to **Test Cases** (/cases)
- Enter a plain English test description
- Click **Generate Test Steps**
- View AI-generated steps and Playwright code
- Save as TestRail test case (simulated)

### 3. Coding Mode Editor
- Go to **Runs** (/runs)
- Write or paste Playwright test code
- Click **Run Playwright Test**
- View results, log defects to Jira (simulated), save to TestRail

### 4. Chatbot Assistant
- Click **Open Chatbot** (bottom-right)
- Ask QA questions, generate tests, get edge cases, log defects

### 5. Defect Logging
- Go to **Defects** (/defects)
- Submit defect details, severity, and steps
- Simulates Jira issue creation

### 6. Demo Hospital Workflow
- Use sidebar to access demo pages:
	- Login, Patient Search, Medication Order, Document Upload, Scheduling
- Test end-to-end QA scenarios

### 7. Reporting
- Go to **Reports** (/reports)
- View summary charts, pass/fail stats, defect lists
- Export PDF report

### 8. Sample Data Seeding
- Demo data is auto-seeded via `/scripts/seedDemoData.ts`
- For custom data, edit the script or use IndexedDB/localStorage

## Deployment (Vercel + GitHub)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up (free tier)
3. Import your GitHub repo in Vercel
4. Set environment variables in Vercel dashboard (e.g., HF_API_KEY)
5. Click **Deploy**

## Advanced & Future Enhancements
- Multi-user support (add authentication)
- More charts and metrics in Reports
- Advanced AI suggestions (custom prompts, more models)
- Real Jira/TestRail API integration (add credentials in `/lib/jira.ts` and `/lib/testrail.ts`)
- Accessibility improvements (WCAG compliance)

## Troubleshooting
- If Playwright runner fails, check Node.js and Playwright install
- For API errors, verify environment variables
- For UI issues, check browser console for errors

## Security & Privacy
- No PHI/PII stored
- All demo data is mock and deterministic
- Only free APIs and open-source tools used

---

For questions or feedback, use the Welcome Popup or contact the project maintainer.
