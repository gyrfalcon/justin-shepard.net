import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/resume')
})

test.describe('header', () => {
  test('name is displayed', async ({ page }) => {
    const nameElement = page.getByTestId('name')

    await expect(nameElement).toBeVisible()
    await expect(nameElement).toHaveText('Justin Shepard')
  })

  test('email is displayed and linked', async ({ page }) => {
    const emailElement = page.getByTestId('email')

    await expect(emailElement).toBeVisible()
    await expect(emailElement).toHaveText('foo@example.com')
    await expect(emailElement).toHaveAttribute('href', /^mailto:foo@example.com$/)
  })
})

test.describe('buzzwords', () => {
  test('has title', async ({ page }) => {
    const buzzwordsSection = page.getByTestId('buzzwords')
    const title = buzzwordsSection.getByRole('heading')

    await expect(title).toBeVisible()
    await expect(title).toHaveText('Buzzwords')
  })

  test('has keywords', async ({ page }) => {
    const buzzwordsSection = page.getByTestId('buzzwords')
    const paragraphs = buzzwordsSection.getByRole('paragraph')

    await expect(paragraphs).toHaveCount(2)
    await expect(paragraphs.nth(0)).toHaveText('Programming Languages: Java, JavaScript/TypeScript, Groovy')
    await expect(paragraphs.nth(0).getByRole('strong')).toHaveText('Programming Languages:')
    await expect(paragraphs.nth(1)).toHaveText('Operating Systems: macOS, Windows, Linux/Unix')
    await expect(paragraphs.nth(1).getByRole('strong')).toHaveText('Operating Systems:')
  })
})

test.describe('professional summary', () => {
  test('is a list', async ({ page }) => {
    const professionalSummary = page.getByTestId('professional-summary')
      .and(page.getByRole('list'))

    await expect(professionalSummary).toBeVisible()
  })

  test('has pretty text', async ({ page }) => {
    const professionalSummary = page.getByTestId('professional-summary')
      .and(page.getByRole('list'))
    const listItems = professionalSummary.getByRole('listitem')

    await expect(listItems).toHaveCount(3)
    await expect(listItems.nth(0)).toHaveText('Fooed the bar for baz years.')
    let strongElements = listItems.nth(0).getByRole('strong')
    await expect(strongElements).toHaveCount(3)
    await expect(strongElements.nth(0)).toHaveText('Fooed')
    await expect(strongElements.nth(1)).toHaveText('bar')
    await expect(strongElements.nth(2)).toHaveText('baz')

    await expect(listItems.nth(1)).toHaveText('Worked hard for the money.')
    strongElements = listItems.nth(1).getByRole('strong')
    await expect(strongElements).toHaveCount(2)
    await expect(strongElements.nth(0)).toHaveText('hard')
    await expect(strongElements.nth(1)).toHaveText('money')

    await expect(listItems.nth(2)).toHaveText('A third thing.')
    strongElements = listItems.nth(2).getByRole('strong')
    await expect(strongElements).toHaveCount(1)
    await expect(strongElements.nth(0)).toHaveText('third thing')
  })
})

test.describe('experience', () => {
  test('has header', async ({ page }) => {
    const firstJobDetails = page.getByTestId('experience')
    const header = firstJobDetails.locator('h2')

    await expect(header).toHaveText('Experience')
  })

  test('jobs are in order', async ({ page }) => {
    const firstJobDetails = page.getByTestId('experience')
    const jobHeaders = firstJobDetails.locator('h3')

    await expect(jobHeaders).toHaveCount(5)
    await expect(jobHeaders.nth(0)).toHaveText('Some Other Company, Whoville, OR (2010 - Present)')
    await expect(jobHeaders.nth(1)).toHaveText('Another Consulting Company, Whoville, OR (2010)')
    await expect(jobHeaders.nth(2)).toHaveText('Other Company, Anytown, DE (2005 - 2010)')
    await expect(jobHeaders.nth(3)).toHaveText('Consulting, Somewhere, DE (2000 - 2005)')
    await expect(jobHeaders.nth(4)).toHaveText('First Job, Anytown, OH (1990 - 2000)')
  })

  test('full time job has all details', async ({ page }) => {
    const firstJobDetails = page.getByTestId('company-first-job')
    const header = firstJobDetails.locator('h3')
    const summary = firstJobDetails.getByTestId('company-first-job-summary')
    const roles = firstJobDetails.getByTestId('company-first-job-roles')
    const roleHeaders = roles.locator('h4')
    const roleSummaries = roles.locator('ul')

    await expect(header).toHaveText('First Job, Anytown, OH (1990 - 2000)')
    await expect(summary).toHaveText('Company does some stuff.')
    await expect(roleHeaders).toHaveCount(2)
    await expect(roleHeaders.nth(0)).toHaveText('Senior Guy (1995 - 2000)')
    await expect(roleHeaders.nth(1)).toHaveText('Junior Guy (1990 - 1995)')
    await expect(roleSummaries).toHaveCount(2)
    await expect(roleSummaries.nth(0).getByRole('listitem')).toHaveCount(2)
    await expect(roleSummaries.nth(0).getByRole('listitem').nth(0)).toHaveText('Did more things')
    await expect(roleSummaries.nth(0).getByRole('listitem').nth(1)).toHaveText('Helped other people do things')
    await expect(roleSummaries.nth(1).getByRole('listitem')).toHaveCount(2)
    await expect(roleSummaries.nth(1).getByRole('listitem').nth(0)).toHaveText('Did a thing')
    await expect(roleSummaries.nth(1).getByRole('listitem').nth(1)).toHaveText('Did another thing')
  })

  test('consulting job has all details', async ({ page }) => {
    const firstJobDetails = page.getByTestId('company-consulting')
    const header = firstJobDetails.locator('h3')
    const summary = firstJobDetails.getByTestId('company-consulting-summary')
    const roles = firstJobDetails.getByTestId('company-consulting-contracts')
    const contractHeaders = roles.locator('h4')
    const roleSummaries = roles.locator('ul')

    await expect(header).toHaveText('Consulting, Somewhere, DE (2000 - 2005)')
    await expect(summary).toHaveText('Company that hires out people to other companies.')
    await expect(contractHeaders).toHaveCount(1)
    await expect(contractHeaders.nth(0)).toHaveText('Other Company, Anytown, DE \u2013 Contractor (2000 - 2005)')
    await expect(roleSummaries).toHaveCount(1)
    await expect(roleSummaries.nth(0).getByRole('listitem')).toHaveCount(1)
    await expect(roleSummaries.nth(0).getByRole('listitem').nth(0)).toHaveText('Do work')
  })
})
