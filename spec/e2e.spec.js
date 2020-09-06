const path = require('path')

describe('jsの振る舞いも合わせたテスト', () => {
  beforeEach(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../index.html'))
  })

  it('初期表示', async () => {
    await expect(page).toMatchElement('#btn', {
      text: 'Next',
    })
  })

  it('クイズ後結果', async () => {
    await page.click('#choices>li:nth-child(1)')
    await page.click('#choices>li:nth-child(1)')
    await page.click('#choices>li:nth-child(1)')
    await expect(page).toMatchElement('#replay', {
      text: 'Replay?',
    })
  })
})
