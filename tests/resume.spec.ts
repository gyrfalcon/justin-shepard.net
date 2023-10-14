import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/resume')
})

test('name is displayed', async ({ page }) => {
  const nameElement = await page.getByTestId('name')

  await expect(nameElement).toBeVisible()
  await expect(nameElement).toContainText(/^Justin Shepard$/)
})

test('email is displayed and linked', async ({ page }) => {
  const emailElement = await page.getByTestId('email')

  await expect(emailElement).toBeVisible()
  await expect(emailElement).toContainText(/^foo@example.com$/)
  await expect(emailElement).toHaveAttribute('href', /^mailto:foo@example.com$/)
})