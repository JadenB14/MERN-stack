import { test, expect } from '@playwright/test';

const title = "example"

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'excersize-name' }).click();
  await page.getByRole('textbox', { name: 'excersize-name' }).fill(title);
  await page.getByRole('spinbutton', { name: 'weight' }).click();
  await page.getByRole('spinbutton', { name: 'weight' }).fill('1');
  await page.getByRole('spinbutton', { name: 'reps' }).click();
  await page.getByRole('spinbutton', { name: 'reps' }).fill('1');
  await page.getByRole('button', { name: 'Add Workout' }).click();
  await expect(page.getByTitle('workout-details')).toBeVisible();
  await page.getByText('delete').click();
});