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
