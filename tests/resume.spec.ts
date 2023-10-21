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
