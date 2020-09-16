describe('HomePage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/', {
      waitUntil: 'networkidle2',
    })
  })

  test('the title is "PostText"', async () => {
    await expect(page.title()).resolves.toMatch('PostText')
  })
})
